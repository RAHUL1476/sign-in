BASEPATH=$1
PACKAGE_NAME=$(node -pe "require('./package.json').name");
if [[ $PACKAGE_NAME != "lyte-editor" ]]
then
  node $BASEPATH/node_modules/@zoho/lyte-editor/build/runscript.js $BASEPATH
  sh lib/builder/loader.sh $BASEPATH
fi