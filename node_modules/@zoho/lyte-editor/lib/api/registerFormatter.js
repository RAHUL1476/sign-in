_led.addApi('registerFormatter', function (language, callback) {
    if (this.checkType.string(language)) {
        if (this.checkType.function(callback)) {
            this._formatters[language] = callback;
        } else {
            this.throw.warn(this.error.EXPECTED, 'function', callback);
        }
    } else {
        this.throw.warn(this.error.EXPECTED, 'string', language);
    }
});