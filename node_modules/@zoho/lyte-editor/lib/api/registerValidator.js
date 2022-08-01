_led.addApi('registerValidator', function (language, callback) {//No I18n
    if (_led.checkType.string(language)) {
        if (_led.checkType.function(callback)) {
            _led._validators[language] = callback;
        } else {
            _led.throw.warn(_led.error.EXPECTED, 'function', callback);//No I18n
        }
    } else {
        _led.throw.warn(_led.error.EXPECTED, 'string', language);//No I18n 
    }
});