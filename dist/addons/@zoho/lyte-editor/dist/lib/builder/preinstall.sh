# if [[ -z $1 ]]; then 
#     BASEPATH=${INIT_CWD}
# else
#     BASEPATH=$1 #this is for testing purpose
# fi
BASEPATH=$1;
echo "${BASEPATH} : this is the basepath used in preinstall"
FILE=${BASEPATH}/build/build.js; # Temporary check soon this will change to 'lyte-cli' check
if test -f "$FILE"; then
    echo $FILE - Lyte Configuration File found. Skipping dependency installation process
else
    echo "Non Lyte App"
    # Dependency installation for lyte-editor-standalone
    cd $BASEPATH
    npm install lyte-cli@3.0.0 lyte@3.0.0 lyte-dom@2.0.4 lyte-ui-component@2.2.14 --registry http://integ-docker:4873
fi