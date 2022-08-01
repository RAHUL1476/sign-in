_led.addFeature('loadDependencies', function (srcPath, urlMappings) {
  // this will work fine only for non-lyte apps
  // have to change this file
  let path;
  if (_led.checkType.object(urlMappings)) {
    _led.urlMappings = urlMappings;
  }
  if (_led.checkType.string(srcPath)) {
    srcPath = srcPath.trim();
    srcPath = srcPath.slice(-1) === '/' ? srcPath.slice(0, -1) : srcPath;
    path = srcPath;
  } else {
    _led.throw.error(_led.error.REQUIRES_SRC_PATH, srcPath);
  }
  _led.basePath = path;
  const basePathForPkgs = _led.path.join(path, 'dependencies');//No I18n
  const startsWithUnderscore = _led.checkType.startsWithUnderscore;
  const dependencies = _led.dependencies;
  const includeFilesOf = {
    lyte: function () {
      const minimumLyteVersion = "3.0.0";//No I18n
      const toNum = function (string) {
        string = string || '';//No I18n
        return parseInt(string.replace(/\./g, ''));
      }
      if (window.Lyte && (window.Lyte.version !== undefined) && toNum(window.Lyte.version) >= toNum(minimumLyteVersion)) {
        return false;
      }
      return true;
    },
    "lyte-dom": function () {
      return !window.lyteDomObj;
    },
    "lyte-ui-component": function () {
      const filesToInclude = {};
      const uiCompDependencies = dependencies["lyte-ui-component"];
      for (let key in uiCompDependencies) {
        if (!startsWithUnderscore(key.trim())) {
          switch (key) {
            case 'helper': {
              filesToInclude.helper = !window._lyteUiUtils;
            }
              break;
            case 'I18n': {
              filesToInclude.I18n = !window._lyteUiComponentsLocale;
            }
              break;
            default: {
              filesToInclude[key] = !Lyte.Component.registeredComponents[key];
            }
          }
        }
      }
      return filesToInclude;
    },
    "lyte-editor": function () {
      return true; // this is an implicit value as it is needed everytime
    }
  }

  const loadedContent = (function () {
    const loadedFiles = [];
    const loadedPackages = [];
    const watcher = (function () {
      let watcherArray = [];
      const loadedDependency = [];
      const filterOutLoaded = function (array) {
        return array.filter(function (value) {
          return !loadedDependency.includes(value);
        });
      }
      return {
        removeLoaded: function (dependency) {
          watcherArray.forEach(function (value, currIndex) {
            const dependents = value[0];
            const callback = value[1];
            const index = dependents.indexOf(dependency);
            if (index > -1) {
              dependents.splice(index, 1);
              if (dependents.length === 0) {
                Function.prototype.apply.call(callback);
                watcherArray[currIndex] = null;
              }
            }
          })
          watcherArray = watcherArray.filter(function (value) {
            return value; // filtering null values
          })
          loadedDependency.push(dependency);
        },
        add: function (array, callback) {
          watcherArray.push([filterOutLoaded(array), callback]);
        }
      }
    }());
    return {
      addFile: function (file) {
        loadedFiles.push(file);
        watcher.removeLoaded(file);
      },
      addPackage: function (pkg) {
        loadedPackages.push(pkg);
        watcher.removeLoaded(pkg);
      },
      watchFor: function (array, callback) {
        watcher.add(array, callback);
      }
    }
  }());
  loadedContent.watchFor(['lyte'], function () {
    _led.constructExposableObject();
    if (_led.exposeEnumsInLyteEditor) {
      _led.exposeEnumsInLyteEditor();
    }
    // Lyte.Editor = Object.create(_led.exposableObject);
  })
  const booleanCheck = _led.checkType.boolean;
  const objectCheck = _led.checkType.object;
  const arrayCheck = _led.checkType.array;
  const appendBasePath = function (files, pkg) {
    files = Array.isArray(files) ? files : [files];
    return files.map(function (path) {
      return _led.path.join(basePathForPkgs, pkg, path);//No I18n
    })
  }
  const loadResource = function (files, pkg, everyCallback, allCallback) {
    _led.loadResources(
      appendBasePath(files, pkg),
      document,
      null,
      everyCallback,
      /* 
      //this function is an enhancement , which can provide a functionality to watch loading of induvidual files in modules
      function (tag) { 
        let length = array.length;
        while (length--) {
          const nodeName = tag.nodeName.toLowerCase();
          const path = (nodeName === 'script' ? tag.src : (nodeName === 'link' ? tag.href : ''));//No I18n 
          if (path.endsWith(array[length])) {
            loadedContent.addFile(array[length]);
          }
        }
      }, */
      function () {
        if (allCallback) {
          if (typeof allCallback === 'function') {
            allCallback();
          }
        } else {
          loadedContent.addPackage(pkg);
        }
      }
    )
  }
  for (let pkg in includeFilesOf) {
    const pkgCondition = includeFilesOf[pkg];
    const dependency = dependencies[pkg];
    if (arrayCheck(dependency)) {
      // For array's condition output should be only boolean
      const conditionOutput = pkgCondition();
      if (booleanCheck(conditionOutput)) {
        if (conditionOutput) {
          loadResource(dependency, pkg);
        } else {
          loadedContent.addPackage(pkg);
        }
      }
    } else if (objectCheck(dependency)) {
      // eslint-disable-next-line no-loop-func
      const includeFilesBasedOn = function (pkgCondition) {
        const conditionOutput = pkgCondition();
        const appendDir = function (path) {
          return dependency._dir ? dependency._dir + path : path;
        }
        if (dependency._loadInOrder) {
          const filesToLoad = dependency._filesToLoad || [];
          const loadFile = function (index) {
            index = index || 0;
            if (filesToLoad[index] !== undefined) {
              const path = appendDir(filesToLoad[index]);
              loadResource(path, pkg, callback(index + 1), true);
            }
          }
          const callback = function (index) {
            if (index < filesToLoad.length) {
              return loadFile.bind(this, index)
            }
            return function () {
              loadedContent.addPackage(pkg);
            }
          }
          loadFile();
        } else {
          const contentToInclude = [];
          for (let key in dependency) {
            if (!startsWithUnderscore(key.trim())) {
              if ((booleanCheck(conditionOutput) && conditionOutput) || (objectCheck(conditionOutput) && conditionOutput[key])) {
                contentToInclude.push.apply(contentToInclude, dependency[key].map(appendDir));
              }
            }
          }
          if (contentToInclude.length === 0) {
            loadedContent.addPackage(pkg);
          } else {
            loadResource(contentToInclude, pkg);
          }
        }
      }
      if (dependency._needs) {
        loadedContent.watchFor(dependency._needs, function () {
          includeFilesBasedOn(pkgCondition)
        })
      } else {
        includeFilesBasedOn(pkgCondition);
      }
    }
  }
});