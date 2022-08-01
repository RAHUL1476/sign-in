//ignorei18n_start
const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const basePath = process.env.INIT_CWD;
console.log(`${basePath} : this is the basepath used in preinstall`)
const buildJsPath = path.join(basePath, '/build/build.js');
const isBuildFileExists = fs.existsSync(buildJsPath);
if (isBuildFileExists) {
  console.log(`${buildJsPath} - Lyte Configuration File found. Skipping dependency installation process`);
} else {
  console.log("Non Lyte Application");
  const dependenciesToInstall = [
    'lyte-cli@3.1.0',
    'lyte@3.0.0',
    'lyte-dom@2.0.4',
    'lyte-ui-components'
  ]
  const baseCommand = 'npm install';
  const command = baseCommand + dependenciesToInstall.join(' ') + '--registry http://integ-docker:4873';
  exec(command, { cwd: basePath }, function (err, stdout, stderr) {
    if (err) {
      console.error(err.message);
      throw new Error(err);
    }
    if (stderr) {
      console.error(stderr);
      return;
    }
    console.log('Dependency loading completed successfully');
  });
}
//ignorei18n_end