_led.addFeature('debounce', (function () { //No I18n
  return (function (callback, delay, args) {
    args = args !== undefined ? args : [];
    delay = typeof delay !== 'number' ? 50 : delay < 50 ? 50 : delay;//No I18n
    return (function () {
      clearTimeout(this.__debounceFn);
      this.__debounceFn = setTimeout(function () {
        callback.apply(this, args);
      }.bind(this), delay);
    }.bind(this))();
  }).bind(this);
}.call(_led)));