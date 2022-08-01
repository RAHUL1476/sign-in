# if [[ -z $1 ]]; then 
#     BASEPATH=${INIT_CWD}
# else
#     BASEPATH=$1 # this is for testing purpose
# fi

echo "INIT_CWD = $INIT_CWD"
BASEPATH=$INIT_CWD;
echo "${BASEPATH} : this is the basepath used in post install"
FILE=${BASEPATH}/build/build.js; # Temporary check soon this will change to 'lyte-cli' check
if test -f "$FILE"; then
    echo $FILE - Lyte Configuration File found. Skipping build process
else
    # Global Paths
    UICOMP_PATH="${BASEPATH}/node_modules/@zoho/lyte-ui-component";
    CLI_PATH="${BASEPATH}/node_modules/@zoho/lyte-cli";
    EDITOR_PATH="${BASEPATH}/node_modules/@zoho/lyte-editor";
    DEPENDENCY_PATH="${EDITOR_PATH}/lib/dependencies";
    LYTE_PATH="${BASEPATH}/node_modules/@zoho/lyte";
    LYTEDOM_PATH="${BASEPATH}/node_modules/@zoho/lyte-dom";

    # Building Addons
	cd ${UICOMP_PATH}
    ${CLI_PATH}/bin/lyte build --production
    # Copy Dependencies
    cd ${EDITOR_PATH}
    node ${EDITOR_PATH}/lib/builder/copyDependencies.js ${BASEPATH}/node_modules/ ${DEPENDENCY_PATH}
    wait
    cd ${EDITOR_PATH}
    ${CLI_PATH}/bin/lyte build --nonlyteapp --production
fi