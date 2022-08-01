_led.addApi('error', (function () {//No I18n
  const extender = function (label, callback, dontLog) {
    const permission = _led.DESCRIPTOR_CODES[0];
    if (typeof label === 'string') {
      if (this[label]) {
        _led.throw.error(_led.error.ERROR_EXISTS(label))
      } else {
        _led.defineProp.call(this, permission, {
          [label]: callback
        })
        if (dontLog) {
          this.$dontLogFor.push(label);
        }
        return true;
      }
    } else if (!Array.isArray(label) && typeof label === 'object') {
      for (let key in label) {
        const value = label[key];
        if (this[key]) {
          _led.throw.error(_led.error.ERROR_EXISTS(label))
        } else {
          if (typeof value === 'function') {
            _led.defineProp.call(this, permission, {
              [key]: value
            })
          } else if (!Array.isArray(value) && typeof value === 'object') {
            const obj = value;
            _led.defineProp.call(this, permission, {
              [key]: obj.value
            })
            if (obj.dontLog) {
              this.$dontLogFor.push(key);
            }
          }
        }
      }
      return true;
    }
    return false;
  }
  const internalFuncs = {
    $extend: extender,
    $dontLogFor: []
  }
  const API = Object.create(internalFuncs);
  const globalErrors = {
    ERROR_EXISTS: function (label) {
      return 'ErrorCode named ' + label + ' already exists.Please use a different name';//No I18n
    }
  };
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], globalErrors);
})());