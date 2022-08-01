_led.addFeature('createArgsCache', function () {
  const cache = {};
  const saveArgsOfFn = function (fnName) {
    const args = Array.from(arguments).slice(1);
    cache[fnName] = args;
  }
  const getArgsOfFn = function (fnName) {
    return cache[fnName] || [];
  }
  const callFnWithSavedArgs = function (fnName) {
    return this[fnName].apply(this, getArgsOfFn(fnName));
  }
  const callFnAndRmItFromCache = function (fnName) {
    const fnReturn = callFnWithSavedArgs.apply(this, arguments);
    delete cache[fnName];
    return fnReturn;
  }
  const isFnInCache = function (fnName) {
    return cache.hasOwnProperty(fnName);
  }
  return {
    saveFor: saveArgsOfFn,
    getFor: getArgsOfFn,
    callFn: callFnWithSavedArgs,
    callFnAndRmCache: callFnAndRmItFromCache,
    hasFn: isFnInCache
  }
});