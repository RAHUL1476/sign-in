_led.addFeature('updateEnum', (function () {//No I18n
  const updatableEnums = {
    //ignorei18n_start
    LIGHT_THEME: 'vs',
    DARK_THEME: 'vs-dark',
    MONACO_SRC_LOADED: false,
    DARK_MODE_CLASS: 'darkMode'
    //ignorei18n_end
  }
  const type = _led.checkType;
  const createReadOnlyProp = function (propName) {
    return (function (key) {
      Object.defineProperty(this, key, {
        get: function () {
          return _led.deepClone(updatableEnums[key]);
        },
        set: function () {
          return _led.throw.warning(_led.error.READ_ONLY(key));
        }
      })
    }.call(this, propName));
  }
  const updateEnum = function (enumToUpdate, newValue) {
    if (type.string(enumToUpdate) && updatableEnums.hasOwnProperty(enumToUpdate)) {
      updatableEnums[enumToUpdate] = newValue;
    } else {
      _led.throw.error(_led.error.NOT_IN_ALLOWED_VALUES('enumToUpdate', Object.keys(updatableEnums), enumToUpdate));//No I18n
    }
  }
  const enumsToExpose = []
  for (let key in updatableEnums) {
    createReadOnlyProp.call(_led, key);
    if (window.Lyte && window.Lyte.Editor) {
      createReadOnlyProp.call(Lyte.Editor, key);
    } else {
      enumsToExpose.push(key);
    }
  }
  _led.exposeEnumsInLyteEditor = function () {
    enumsToExpose.forEach(function (key) {
      createReadOnlyProp.call(Lyte.Editor, key);
    });
    _led.defineProp.call(Lyte.Editor, _led.DESCRIPTOR_CODES[4], {
      UpdateEnum: updateEnum
    });
  }
  if (window.Lyte && window.Lyte.Editor) {
    _led.defineProp.call(Lyte.Editor, _led.DESCRIPTOR_CODES[4], {
      UpdateEnum: updateEnum
    });
  }
  return updateEnum;
}()));