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
  const uicompPath = path.join(basePath, "/node_modules/@zoho/lyte-ui-component");
  const cliPath = path.join(basePath, "/node_modules/@zoho/lyte-cli");
  const editorPath = path.join(basePath, "/node_modules/@zoho/lyte-editor");
  const dependencyPath = path.join(editorPath, "/lib/dependencies");
  exec(
    `${cliPath}/bin/lyte build --production`,
    { cwd: uicompPath },
    function (err, stdout, stderr) {
      if (err) {
        throw new Error(err);
      }
      if (stderr) {
        console.error(stderr);
        return;
      }
      exec(
        `${editorPath}/lib/builder/copyDependencies.js ${basePath}/node_modules/ ${dependencyPath}`,
        { cwd: editorPath },
        function (err, stdout, stderr) {
          if (err) {
            throw new Error(err);
          }
          if (stderr) {
            console.error(stderr);
            return;
          }
          exec(
            `${cliPath}/bin/lyte build --nonlyteapp --production`,
            { cwd: editorPath },
            function (err, stdout, stderr) {
              if (err) {
                throw new Error(err);
              }
              if (stderr) {
                console.error(stderr);
                return;
              }
            }
          )
        })
    });
}
//ignorei18n_end