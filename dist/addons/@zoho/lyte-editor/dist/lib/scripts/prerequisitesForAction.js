_led.addFeature('prerequisitesForAction', (function () {//No I18n
  const type = _led.checkType;
  const additionalCallbacks = [];
  const mainFn = function (action, editor) {
    switch (action) {
      case 'cut':
      case 'copy':
      case 'undo':
      case 'redo':
      case 'find':
      case 'openQuickCommand': {
        editor.focus();
      }
        break;
    }
    additionalCallbacks.forEach(function (callback) {
      callback(action, editor);
    });
  }
  mainFn.extend = function (callback) {
    if (type.function(callback)) {
      additionalCallbacks.push(callback);
    } else {
      _led.throw.error(_led.error.TYPE_MUST_BE, 'function');//No I18n
    }
  }
  return mainFn;
}()));