npm install lyte-cli@3.0.1-beta-5 lyte@3.0.0 lyte-dom@2.0.4 lyte-ui-component@3.10.0 --registry http://integ-docker:4873

BASEPATH="$(pwd)";

# Global Paths
UICOMP_PATH="${BASEPATH}/node_modules/@zoho/lyte-ui-component"
CLI_PATH="${BASEPATH}/node_modules/@zoho/lyte-cli"
EDITOR_PATH="${BASEPATH}/node_modules/@zoho/lyte-editor"
DEPENDENCY_PATH="${EDITOR_PATH}/lib/dependencies"
LYTE_PATH="${BASEPATH}/node_modules/@zoho/lyte"
LYTEDOM_PATH="${BASEPATH}/node_modules/@zoho/lyte-dom"

# Building Addons
cd ${UICOMP_PATH}
${CLI_PATH}/bin/lyte build --production
# Copy Dependencies
cd ${EDITOR_PATH}
node ${EDITOR_PATH}/lib/builder/copyDependencies.js ${BASEPATH}/node_modules/ ${DEPENDENCY_PATH}
wait
cd ${EDITOR_PATH}
${CLI_PATH}/bin/lyte build --nonlyteapp --production
