//ignorei18n_start
_led.error.$extend({
  UNDEFINED_DEPENDENCY: function (dependency) {
    return dependency + ' is not defined. Please load ' + dependency + ' to render Lyte Editor'
  },
  INVALID_BASE_PATH: function (basePath) {
    return 'Provided basepath (' + basePath + ') is invalid';
  },
  EXPECTED: function (expectedType, found, identifier) {
    return (identifier ? 'For ' + identifier : '') + ' Expected ' + expectedType + (found !== undefined ? ', instead found :' + found + '' : '')
  },
  VERSION_MISMATCH: function (name, version) {
    return 'Version mismatch';
    // return 'Lyte Editor requires newer version of '+name+',So please upgrade '+name+' to '+version;
  },
  LIB_EXISTS: function (libName) {
    return libName + ' is already present in cache,Incase if you want to overwrite it, rerun the same function with `true` as the second argument';
  },
  REQUIRES_SRC_PATH: function (srcPath) {
    return 'Please provide proper source path for loading files. Found : ' + srcPath
  },
  FILE_NOT_LOADED: function (src, error) {
    return 'File path : "' + src + '" is not properly loaded \n' + (error ? error : '')
  },
  VALUE_EXISTS: function (type, object) {
    return type + ' already exists' + (object && ' in ' + object) + '. Please try another name'
  },
  TYPE_MUST_BE: function (type, key, additional) {
    return 'The value for the ' + key + ' should be of type ' + (Array.isArray(type) ? type.join(' | ') : type) + '. ' + (additional || '')
  },
  NOT_FOUND: function (identifier, object) {
    object = typeof object === 'string' ? object : JSON.stringify(object, null, 4)
    return identifier + ' is not found in the object ' + object + ' . Please verify it'
  },
  READ_ONLY: function (propName) {
    return propName + ' is a read-only property.'
  },
  NOT_IN_ALLOWED_VALUES: function (key, actualValue, allowedValues) {
    return 'Allowed values for ' + key + ' are ' + allowedValues.join(',') + '. Found '+actualValue
  }
});
//ignorei18n_end