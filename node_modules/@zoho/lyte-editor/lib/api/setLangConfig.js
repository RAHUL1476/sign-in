_led.addApi('setLangConfig', function (language, config) {
  if (_led.checkType.string(language)) {
    if (_led.checkType.object(config)) {
      _led._langConfig[language] = config;
    } else {
      _led.throw.warn(_led.error.EXPECTED, 'object', config);//No I18n
    }
  } else {
    _led.throw.warn(_led.error.EXPECTED, 'string', language);//No I18n
  }
});