_led.addApi('completionProvider', (function () {//No I18n
  const instances = {};
  const instancesToLoad = {};
  const type = _led.checkType;
  let MONACO_SRC_LOADED = _led.MONACO_SRC_LOADED;
  let monaco = null;
  type.$extend.array('triggerCharacters', { every: type.string });//No I18n
  type.$extend.object('completionProviderInstance', {//No I18n
    required: {
      provideCompletionItems: type.function
    },
    allowable: {
      triggerCharacters: type.triggerCharacters,
      resolveCompletionItem: type.function,
      checkForDesiredModel: type.function
    }
  });
  const registerToMonaco = function (langName, id, instance) {
    try {
      const callee = Object.assign({}, instance, { monaco: monaco });
      const completionProviderFn = instance.provideCompletionItems;
      instance.provideCompletionItems = function (model) {
        if (instance.checkForDesiredModel) {
          const isCurrentModelDesired = instance.checkForDesiredModel(model);
          if (isCurrentModelDesired) {
            return completionProviderFn.apply(callee, arguments);
          }
        } else {
          return completionProviderFn.apply(callee, arguments);
        }
      }
      const disposable = monaco.languages.registerCompletionItemProvider(langName, instance);
      Object.assign(instances[langName][id], disposable);
      return true;
    } catch (e) {
      _led.throw.errorLog(e);
      return false;
    }
  }
  const extender = function (langName, objectOfInstances) {
    if (type.string(langName)) {
      if (!instances.hasOwnProperty(langName)) {
        instances[langName] = {};
      }
      for (let id in objectOfInstances) {
        const instance = objectOfInstances[id];
        if (type.completionProviderInstance(instance)) {
          if (!instances[langName].hasOwnProperty(id)) {
            instances[langName][id] = instance;
            if (MONACO_SRC_LOADED) {
              registerToMonaco(langName, id, instance);
            } else {
              if (!instancesToLoad.hasOwnProperty(langName)) {
                instancesToLoad[langName] = [];
              }
              instancesToLoad[langName].push(id);
            }
          } else {
            _led.throw.error(id + ' is already present for the language ' + langName + '.Please give a new id');//No I18n
            return false;
          }
        } else {
          _led.throw.error("Completion Provider Instance is invalid. Refer the documentation for proper structure");//No I18n
          return false;
        }
      }
      return true;
    } else {
      _led.throw.error(_led.error.EXPECTED, 'string', null, 'languageName');//No I18n
      return false;
    }
  };
  const overrider = function (langName, overrider) {
    if (type.string(langName)) {
      if (instances.hasOwnProperty(langName)) {
        const instancesForLang = instances[langName];
        for (let id in overrider) {
          if (instancesForLang.hasOwnProperty(id)) {
            const overriddenInstance = Object.assign({}, instancesForLang[id], overrider);
            if (type.completionProviderInstance(overriddenInstance)) {
              instancesForLang[id] = overriddenInstance;
            } else {
              _led.throw.error("Completion Provider Instance is invalid. Refer the documentation for proper structure");//No I18n
            }
          } else {
            _led.throw.warning(_led.error.NOT_FOUND, id, 'Completion Provider Instance for ' + langName);//No I18n
          }
        }
      } else {
        _led.throw.warning(_led.error.NOT_FOUND, langName, 'Complete Provider Instance');//No I18n
      }
    } else {
      _led.throw.error(_led.error.EXPECTED, 'string', null, 'languageName');//No I18n
    }
  };
  const disposer = function (langName, id) {
    if (type.string(langName)) {
      if (instances.hasOwnProperty(langName)) {
        const instancesForLang = instances[langName];
        if (instancesForLang.hasOwnProperty(id)) {
          if (!instancesToLoad[langName] || !instancesToLoad[langName].includes(id)) {
            instancesForLang[id].dispose();
          } else {
            delete instancesToLoad[langName][id];
            _led.devLog.info(id + ' Completion Provider Instance is not yet loaded, but deleted');//No I18n
          }
          delete instancesForLang[id];
        } else {
          _led.throw.warning(_led.error.NOT_FOUND, id, 'Completion Provider Instance for ' + langName);//No I18n
        }
      } else {
        _led.throw.warning(_led.error.NOT_FOUND, langName, 'Complete Provider Instance');//No I18n
      }
    } else {
      _led.throw.error(_led.error.EXPECTED, 'string', null, 'languageName');//No I18n
    }
  };
  const getCopyOfInstances = function () {
    return _led.deepClone.andFreeze(instances);
  }
  const registerAllInstancesToLoad = function () {
    for (let langName in instancesToLoad) {
      const idsToLoad = instancesToLoad[langName];
      for (let i = 0, len = idsToLoad.length; i < len; i++) {
        const id = idsToLoad[i];
        const instance = instances[langName][id];
        if (instance) {
          if (registerToMonaco(langName, id, instance)) {
            idsToLoad[i] = null;
          }
        }
      }
      instancesToLoad[langName] = instancesToLoad[langName].filter(function (id) { return id !== null });
      if (instancesToLoad[langName].length === 0) {
        delete instancesToLoad[langName];
      }
    }
  }
   _led.pubsub.subscribeTo('MONACO_LOADED', function (monacoInstance) {//No I18n
    MONACO_SRC_LOADED = _led.MONACO_SRC_LOADED;
    monaco = monacoInstance;
    registerAllInstancesToLoad();
  });

  const internalFuncs = {
    registeredInstances: getCopyOfInstances
  };
  const API = Object.create(internalFuncs);
  const methods = {
    Register: extender,
    Override: overrider,
    Dispose: disposer
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());