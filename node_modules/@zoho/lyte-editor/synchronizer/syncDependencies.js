const path = require('path');
const fs = require('fs');
const glob = require('glob');
const { exec, spawn } = require('child_process');
const log = {
  success: (message) => { console.log('\x1b[32m ' + message + '\x1b[0m') },
  error: (message) => { console.log('\x1b[31m ' + message + '\x1b[0m') },
  info: (message) => { console.log('\x1b[36m ' + message + '\x1b[0m') }
}
const cmdOptions = {
  cleanTemp: false
}
const TEMP_PATH = path.join(__dirname, '.temp');
const DEST_PATH = path.join(__dirname, '../lib/dependencies/miscellaneous');
const DEPENDENCIES = {
  commonUtils: {
    urlVars: {
      branch: 'release'
    },
    urls: {
      cloneUrl: 'https://git.csez.zohocorpin.com/lyte.js/common-utils.git -b {{#branch}}',
    },
    buildProcessCommands: [
      { cmd: 'npm', args: ['install'] },
      { cmd: 'npm', args: ['run', 'bundle'] }
    ],
    filesToBundle: {
      'common-utils.js': [
        'dist/js/main.js',
        'dist/js/descriptorCodes.js',
        'dist/js/deepFreezer.js',
        'dist/js/deepClone.js',
        'dist/js/defineProp.js',
        'dist/js/throwHandler.js',
        'dist/js/checkType.js',
        'dist/js/changeCase.js',
        'dist/js/devLog.js',
        'dist/js/pubsub.js',
        'dist/js/path.js',
        'dist/js/uuid.js',
        'dist/js/state.js'
      ]
    }
  }
}
const pipe = (argToSend, ...rest) => {
  const length = rest.length;
  return new Promise((resolve, reject) => {
    let index = 0;
    const callNext = function (argToPipe) {
      if (index < length) {
        let output;
        try {
          output = rest[index++](argToPipe);
        } catch (e) {
          reject(e.message);
        }
        if (output instanceof Promise) {
          output.then(callNext).catch(reject);
        } else {
          callNext(output);
        }
      } else {
        resolve(argToPipe);
      }
    }
    callNext(argToSend);
  });
};
; (function (options) {
  let string = options.join(' ');
  const regex = /--(?<key>[^\s=]+)((=|\s)(?<value>[^(\-\-)]+)(?=--|$))?/g;
  while (string.length > 0) {
    const match = regex.exec(string);
    if (match) {
      const { groups: { key, value } } = match;
      cmdOptions[key] = value !== undefined ? value.trim() : true;
      if (cmdOptions[key] === "true" || cmdOptions[key] === "false") {
        cmdOptions[key] = JSON.parse(cmdOptions[key]);
      }
      string = string.slice(regex.lastIndex);
    }
  }
})(process.argv.slice(2));

const isPathExists = pathToCheck => fs.existsSync(pathToCheck);
const isPathDir = pathToCheck => path.parse(pathToCheck).ext === '';
const recursiveRemove = dirPath => fs.rmSync(dirPath, { recursive: true });
const cleanDir = dirPath => isPathExists(dirPath) && isPathDir(dirPath) && recursiveRemove(dirPath);
const copy = (src, dest) => {
  const { join } = path;
  return new Promise((resolve, reject) => {
    const copyFiles = (src, dest) => {
      return new Promise((res, rej) => {
        if (isPathDir(src)) {
          const files = fs.readdirSync(src);
          Promise.all(
            files.map(file => copyFiles(join(src, file), dest))
          ).then(res).catch(rej);
        } else {
          const fileName = path.parse(src).base;
          fs.copyFile(src, path.join(dest, fileName), err => {
            if (err) rej(err);
            res();
          })
        }
      })
    }
    if (!isPathExists(dest)) {
      fs.promises.mkdir(dest, { recursive: true }).then(() => {
        return copyFiles(src, dest)
      }).then(resolve)
        .catch(reject);
    } else {
      copyFiles(src, dest)
        .then(resolve)
        .catch(reject);
    }
  });

}
const getContent = srcPath => {
  return new Promise((resolve, reject) => {
    if (fs.lstatSync(srcPath).isDirectory()) {
      glob(srcPath, {}, (err, files) => {
        if (err) reject(err);
        if (files.length > 0) {
          if (files.length === 1) {
            fs.readFile(files[0], 'utf-8', (err, content) => {
              if (err) reject(err);
              resolve(content);
            })
          } else {
            Promise.all(files.map(file => getContent(file))).then((filesContent) => {
              resolve(filesContent.join('\n'));
            }).catch(err => {
              reject(err);
            })
          }
        } else {
          resolve('');
        }
      })
    } else {
      fs.readFile(srcPath, 'utf-8', (err, content) => {
        if (err) reject(err);
        resolve(content);
      })
    }
  })
}
const prepareUrl = function (dependency) {
  for (let key in dependency.urlVars) {
    for (let name in dependency.urls) {
      dependency.urls[name] = dependency.urls[name].replace(`{{#${key}}}`, dependency.urlVars[key]);
    }
  }
  log.info('Preparing Url Complete for ' + dependency.zipName);
  return dependency;
}
const cloneRepo = dependency => {
  return new Promise((resolve, reject) => {
    log.info('Started to Clone the repo ' + dependency.zipName);
    const { pathname } = new URL(dependency.urls.cloneUrl);
    const folderName = /(?<folder>[^\/]+?)\.git/.exec(pathname).groups.folder;
    dependency.folderName = folderName;
    const folderPath = path.join(TEMP_PATH, folderName)
    if (fs.existsSync(folderPath)) {
      log.info('Folder already exists ' + dependency.zipName);
      exec('git stash && git pull', {
        cwd: folderPath
      }, (err) => {
        if (err) reject(err)
        resolve(dependency)
      })
    } else {
      const cloneCmd = 'git clone ' + dependency.urls.cloneUrl;
      log.info('Cloning Command :' + cloneCmd);
      exec(cloneCmd, {
        cwd: TEMP_PATH
      }, (err) => {
        if (err) reject(err)
        log.info('Cloning Complete :' + cloneCmd);
        resolve(dependency)
      })
    }
  })
}
const runBuildProcess = dependency => {
  return new Promise((resolve, reject) => {
    const buildProcessCommands = dependency.buildProcessCommands || [];
    if (buildProcessCommands.length > 0) {
      log.info('Started to run build process for ' + dependency.zipName);
      const execCmdRecursively = () => {
        const cmdToRun = buildProcessCommands.shift();
        log.info('Running Command : ' + cmdToRun.cmd + ' ' + cmdToRun.args.join(' '));
        const cmdProcess = spawn(cmdToRun.cmd, cmdToRun.args, {
          cwd: path.join(TEMP_PATH, dependency.folderName)
        })
        cmdProcess.stdout.on('data', data => {
          log.info(data);
        })
        cmdProcess.stderr.on('data', stderr => {
          log.error(stderr);
        })
        cmdProcess.on('error', (err) => {
          reject(err);
        })
        cmdProcess.on('close', (code) => {
          if (code !== 0) {
            log.error('Build process exited with code: ' + code);
          } else if (buildProcessCommands.length > 0) {
            log.info('Command Ran Successfully');
            execCmdRecursively();
          } else {
            log.info('Build process completed successfully');
            resolve(dependency);
          }
        })
      }
      execCmdRecursively();
    }
  })
}
const copyContents = dependency => {
  return new Promise((resolve, reject) => {
    const filesToCopy = dependency.filesToCopy || {};
    const keys = Object.keys(filesToCopy);
    if (keys.length > 0) {
      log.info('Started to copy contents for ' + dependency.zipName);
      const srcFolderPath = `${TEMP_PATH}/${dependency.folderName}`;
      Promise.all(keys.filter(destFilePath => {
        return isPathDir(path.join(DEST_PATH, destFilePath));
      }).map(destFilePath => {
        const completeDestPath = path.join(DEST_PATH, destFilePath);
        return Promise.all(filesToCopy[destFilePath].map(srcPath => {
          return copy(path.join(srcFolderPath, srcPath), completeDestPath)
        }))
      })).then(() => {
        if (keys.length > 0) {
          log.info('Copying Contents Complete for ' + dependency.zipName);
        }
        resolve(dependency);
      }).catch((err) => {
        reject(err);
      })
    } else {
      resolve(dependency);
    }
  })
}
const bundleContents = dependency => {
  return new Promise((resolve, reject) => {
    const filesToBundle = dependency.filesToBundle || {};
    const keys = Object.keys(filesToBundle);
    if (keys.length > 0) {
      log.info('Started to bundle contents for ' + dependency.zipName);
      const srcFolderPath = `${TEMP_PATH}/${dependency.folderName}`;
      Promise.all(keys.filter(destFilePath => {
        return !isPathDir(path.join(DEST_PATH, destFilePath));
      }).map(destFilePath => {
        const completeDestPath = path.join(DEST_PATH, destFilePath);
        Promise.all(filesToBundle[destFilePath].map(srcPath => {
          return getContent(path.join(srcFolderPath, srcPath));
        })).then(contents => {
          return new Promise((res, rej) => {
            fs.writeFile(completeDestPath, contents.join('\n'), 'utf8', err => {
              if (err) rej(err);
              res()
            });
          })
        }).then(() => {
          if (keys.length > 0) {
            log.info('Bundling Contents Complete for ' + dependency.zipName);
          }
          resolve(dependency)
        }).catch((err) => {
          reject(err)
        });
      }))
    } else {
      resolve(dependency)
    }
  })
}
const deleteFolder = dependency => {
  return new Promise((resolve, reject) => {
    try {
      cleanDir(path.join(TEMP_PATH, dependency.folderName));
      resolve(dependency)
    } catch (e) {
      reject(e)
    }
  })
}
if (cmdOptions.cleanTemp) {
  cleanDir(TEMP_PATH);
}

if (!fs.existsSync(TEMP_PATH)) {
  fs.mkdirSync(TEMP_PATH);
}

const categories = Object.keys(DEPENDENCIES);
const syncDependency = () => {
  const category = categories.shift();
  const dependency = DEPENDENCIES[category];
  if (dependency) {
    dependency.zipName = dependency.zipName || category;
    log.info(`Started Syncing for ${dependency.zipName}`);
    pipe(
      dependency,
      prepareUrl,
      cloneRepo,
      runBuildProcess,
      copyContents,
      bundleContents,
      // deleteFolder
    ).then(() => {
      log.info(`Completed Syncing of ${dependency.zipName}`);
      syncDependency();
    })
  }
}
syncDependency();
