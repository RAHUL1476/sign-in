_led.addFeature('includeLangConfig', function (monaco, language, config) {
  const configMap = _led._configMap;
  const jsKeys = configMap.jsKeys;
  const jsonKeys = configMap.jsonKeys;
  const htmlKeys = configMap.htmlKeys;
  const cssKeys = configMap.cssKeys;
  const configurableLangs = {
    javascript: jsKeys,
    typescript: jsonKeys,
    json: jsonKeys,
    css: cssKeys,
    scss: cssKeys,
    less: cssKeys,
    html: htmlKeys,
    razor: htmlKeys,
    handlebars: htmlKeys
  }
  const langConfigs = _led._langConfig;
  const convertTo = (function () {
    const add = function (prefix, key) {
      return prefix + key.slice(0, 1).toUpperCase() + key.slice(1);
    }
    return {
      getter: add.bind(null, 'get'),
      setter: add.bind(null, 'set'),
      defaults: function (lang) {
        return lang + 'Defaults'
      },
      baseLang: function (lang) {
        let baseLang = null;
        switch (lang) {
          case 'html':
          case 'razor':
          case 'handlerbars': {
            baseLang = 'html';
          }
            break;
          case 'json': {
            baseLang = 'json'
          }
            break;
          case 'javascript':
          case 'typescript': {
            baseLang = 'typescript'
          }
            break;
        }
        return baseLang;
      }
    }
  }())
  const setLangConfig = function (language, langConfig) {
    if (configurableLangs.hasOwnProperty(language)) {
      const configurableKeys = configurableLangs[language];
      const defaultsKey = convertTo.defaults(language);
      const baseLang = convertTo.baseLang(language); // This wont become null as this entered the previous if condition
      const configObj = monaco.languages[baseLang][defaultsKey];
      for (let key in langConfig) {
        if (configurableKeys.indexOf(key) !== -1) {
          const setKey = convertTo.setter(key);
          const presentVal = configObj[key];
          const newVal = langConfig[key];
          configObj[setKey](Object.assign(presentVal, newVal));
        }
      }
    }
  }
  if (language) {
    if (config) {
      setLangConfig(language, config);
    } else {
      setLangConfig(language, langConfigs[language]);
    }
  } else {
    for (let lang in langConfigs) {
      setLangConfig(lang, langConfigs[lang]);
    }
  }
})

// ! Test this language configuration for json and js
