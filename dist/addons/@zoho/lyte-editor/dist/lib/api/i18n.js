_led.addApi('I18n', (function () {
  //ignorei18n_start
  const initialLocale = 'en_us';
  const localePrefix = 'lyte.editor.locale.';
  const wordsUsedInLyteEditor = [
    "reset",
    "dark mode",
    "font size",
    "undo",
    "redo",
    "cut",
    "copy",
    "indent",
    "outdent",
    "duplicate",
    "comment",
    "delete",
    "find",
    "toggle wrap",
    "format",
    "format on type",
    "toggle dark mode",
    "key bindings"
  ];
  const manipulator = {
    currentLocale: initialLocale,
    localePrefix: localePrefix,
    registeredLangs: {}
  }
  const prepareLocaleKey = function (word) {
    return localePrefix + _led.changeCase.toSnake(word)
  }
  manipulator._baseWordMap = wordsUsedInLyteEditor.reduce(function (acc, word) {
    acc[prepareLocaleKey(word)] = word;
    return acc;
  }, {});

  const i18nMap = {
    [manipulator.currentLocale]: manipulator._baseWordMap
  };
  const addLocale = function (langName, config) {
    let newConfig = null;
    if (typeof langName === 'string') {
      if (!i18nMap.hasOwnProperty(langName) || langName === manipulator.currentLocale) {
        if (typeof config === 'function') {
          newConfig = config.call(Lyte.Editor.I18n, Object.assign({}, manipulator._baseWordMap));
        } else if (typeof config === 'object') {
          newConfig = config;
        }
      } else {
        throw new Error(langName + ' is already defined in I18n');
      }
    } else {
      throw new Error('`langName` must be a string');
    }
    if (newConfig) {
      API.registeredLangs[langName] = langName;
      i18nMap[langName] = newConfig;
      manipulator.currentLocale = langName;
    }
  };
  const convertStringToI18nKey = function (string) {
    string = string.replace(/\s+/g, '_').toLowerCase();
    return localePrefix + string;
  };
  const getValueOf = function (word) {
    return i18nMap[manipulator.currentLocale][convertStringToI18nKey(word)] || word;
  };
  const changeLocale = function (langName) {
    if (typeof langName === 'string') {
      if (i18nMap.hasOwnProperty(langName)) {
        manipulator.currentLocale = langName;
      } else {
        throw new Error(langName + ' is not present in I18n Configuration');
      }
    } else {
      throw new Error('`langName` must be a string');
    }
  };
  const overrideLocale = function (langName, object) {
    if (typeof langName === 'string') {
      if (i18nMap.hasOwnProperty(langName)) {
        Object.assign(i18nMap[langName], object);
      } else {
        throw new Error(langName + ' is not present in I18n Configuration');
      }
    } else {
      throw new Error('`langName` must be a string');
    }
  }
  const API = Object.create(manipulator);
  const methods = {
    addLocale: addLocale,
    getValueOf: getValueOf,
    changeLocale: changeLocale,
    overrideLocale: overrideLocale,
    prepareLocaleKey: prepareLocaleKey
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
  //ignorei18n_end
}()));