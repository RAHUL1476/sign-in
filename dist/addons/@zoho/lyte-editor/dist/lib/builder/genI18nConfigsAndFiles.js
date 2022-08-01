const fs = require('fs');//No I18n
const path = require('path');//No I18n

const INPUT_PATH = path.join(__dirname, '../../I18n/properties');//No I18n
const OUTPUT_PATH = path.join(__dirname, '../../I18n/');//No I18n

const EDITOR_SRC_PATH = path.join(__dirname, '../../lib/scripts/_led.js');
const MONACO_BASE_PATH = path.join(__dirname, '../../node_modules/monaco-editor/dev/vs/editor');

const INPUT_PATH_EXIST = fs.existsSync(INPUT_PATH);
if (INPUT_PATH_EXIST) {

  fs.readdir(MONACO_BASE_PATH, function (err, files) {
    if (err) throw err;
    const REGEX_FOR_NLS = /^editor\.main\.nls\.(?<LANG_NAME>.+)\.js$/;
    const i18nMap = '\t\t\t' + files.reduce(function (acc, fileName) {
      const regexMatch = REGEX_FOR_NLS.exec(fileName);
      if (regexMatch) {
        const langName = regexMatch.groups.LANG_NAME
        acc.push(`'${langName}' : '${langName}'`);
      }
      return acc;
    }, []).join(',\n\t\t\t') + "\n";//No I18n
    const REGEX_FOR_I18N = /(\/\* #I18N_LANG_MAP_FOR_MONACO - START \*\/\n)((?:.*\n)*)(\s*\/\* #I18N_LANG_MAP_FOR_MONACO - END \*\/)/;

    const _ledContent = fs.readFileSync(EDITOR_SRC_PATH, 'utf8');
    const newLedContent = _ledContent.replace(REGEX_FOR_I18N, '$1' + i18nMap + '$3');
    fs.writeFileSync(EDITOR_SRC_PATH, newLedContent);
  });

  const propertiesToObject = (string) => {
    const feedValue = (fn1, fn2) => (arg) => fn2(fn1(arg));
    const pipe = (...fns) => fns.reduce(feedValue);
    const removeSpacesAtLast = string => string.replace(/\\\n(\s)*/g, '');
    const splitLines = string => string.split('\n');
    const removeSpaces = string => string.replace(/\s/g, '');
    const isLineCommented = line => /(\#|\!)/.test(removeSpaces(line)[0]); // check first char
    const removeCommentedLines = lines => lines.filter(line => !isLineCommented(line));
    const getStringFromCode = unicode => String.fromCharCode(parseInt(unicode.replace(/\\u/g, ''), 16));
    const convertUnicodeToString = string => string.replace(/\\u[\dA-F]{4}/gi, getStringFromCode);
    const consolidateObject = lines => lines.reduce((object, validLine) => {
      const [key, value] = validLine.split(/(?<!\\)=/);
      object[key.trim()] = convertUnicodeToString(value.trim());
      return object;
    }, {});
    return pipe(
      removeSpacesAtLast,
      splitLines,
      removeCommentedLines,
      consolidateObject
    )(string);
  };
  const constructOutputFileContent = function (langName, object) {
    //ignorei18n_start
    const baseContent = `//ignorei18n_start
Lyte.Editor.I18n.addLocale('${langName}', function (wordMap) {//No I18n
  return Object.assign(wordMap,
  `+ JSON.stringify(object, null, 2) + `
  );
});
//ignorei18n_end`
    return baseContent;
    //ignorei18n_end
  }
  fs.readdirSync(INPUT_PATH).forEach(file => {
    const absFilePath = path.join(INPUT_PATH, file);
    const contents = fs.readFileSync(absFilePath, 'utf8');//No I18n
    const object = propertiesToObject(contents);
    const actualFileName = path.parse(file).name;
    const outputFileName = actualFileName.replace(/I18n_(.*)$/, '$1').toLowerCase();//No I18n
    fs.writeFileSync(path.join(OUTPUT_PATH, outputFileName) + ".js", constructOutputFileContent(outputFileName, object));//No I18n
  });
}
