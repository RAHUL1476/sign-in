window._led = (function () {
  //ignorei18n_start
  let noOfEditorsLoaded = 0;
  const instances = {};
  const references = {};
  const commonUtils = window["common-utils"];
  const editorTypes = {
    BASIC_EDITOR: 'basicEditor',
    DIFF_EDITOR: 'diffEditor'
  };
  const enumerables = commonUtils.deepFreezer({
    VERSION: '2.2.10',
    EDITOR_SRC_NAME: 'Monaco Editor',
    // LIGHT_THEME: 'vs',
    // DARK_THEME: 'vs-dark',
    // DARK_MODE_CLASS: "darkMode",
    // MONACO_SRC_LOADED: false,
    EDITOR_TYPES: editorTypes,
    SUPPORTED_LANGUAGES: [
      'javascript',
      'html',
      'css'
    ],
    DESCRIPTOR_CODES: commonUtils.descriptorCodes,
    EDITOR_OPTIONS: {
      [editorTypes.BASIC_EDITOR]: {
        wordWrap: 'on',
        theme: this.LIGHT_THEME,
        formatOnType: true,
        fontSize: '14px'
      },
      [editorTypes.DIFF_EDITOR]: {}
    },
    ACTIONS_MAP: { // ! this should not be modified at any cost in runtime
      copy: "editor.action.clipboardCopyAction",
      cut: "editor.action.clipboardCutAction",
      toggleComment: "editor.action.commentLine",
      addComment: "editor.action.addCommentLine",
      blockComment: "editor.action.blockComment",
      removeComment: "editor.action.removeCommentLine",
      undo: 'undo',
      redo: 'redo',
      format: "editor.action.formatDocument",
      formatSelection: "editor.action.formatSelection",
      delete: "editor.action.deleteLines",
      indent: "editor.action.indentLines",
      outdent: "editor.action.outdentLines",
      openQuickCommand: "editor.action.quickCommand",
      showContextMenu: "editor.action.showContextMenu",
      find: "actions.find",
      duplicate: "editor.action.duplicateSelection"
    },
    LANGS_SUPPORTED_BY_MONACO: {
      /* DONT MODIFY THE CONTENT BELOW, THIS IS AUTOMATICALLY GENERATED */
      /* #I18N_LANG_MAP_FOR_MONACO - START */
      'de': 'de',
      'es': 'es',
      'fr': 'fr',
      'it': 'it',
      'ja': 'ja',
      'ko': 'ko',
      'ru': 'ru',
      'zh-cn': 'zh-cn',
      'zh-tw': 'zh-tw'
      /* #I18N_LANG_MAP_FOR_MONACO - END */
      /* DONT MODIFY THE CONTENT ABOVE, THIS IS AUTOMATICALLY GENERATED */
    }
  });
  const internalObjects = Object.freeze({
    // ? these are the properties which are used by the API functions of lyteEditor
    // ? these can be manipulated but should not be deleted as this is the default state
    _customOptions: {
      [editorTypes.BASIC_EDITOR]: [],
      [editorTypes.DIFF_EDITOR]: []
    },
    _apiToAdd: {},
    _formatters: {},
    _validators: {},
    _formatterFuncs: {},
    _langConfig: {},
    _staticLibs: [],
    _labelledLibs: {},
    _configMap: {
      jsKeys: [
        'compilerOptions',
        'diagnosticsOptions',
        'workerOptions'
      ],
      jsonKeys: [
        'diagnosticsOptions',
        'modeConfiguration'
      ],
      htmlKeys: [
        'options',
        'modeConfiguration'
      ],
      cssKeys: [
        'diagnosticsOptions',
        'modeConfiguration'
      ]
    },
    _loaded: {
      css: false
    },
    _stringToArray: function (stringOrArray) {
      const array = [];
      if (this.checkType.array(stringOrArray)) {
        array.push.apply(array, stringOrArray)
      } else if (this.checkType.string(stringOrArray)) {
        array.push.call(array, stringOrArray)
      } else {
        this.throw.error(_led.error.EXPECTED, 'string (or) array', stringOrArray);
      }
      return array;
    },
    addFeature: function (key, value, options) {
      options = options || {};
      Object.defineProperty(internalApi, key, {
        value: value,
        writable: options.writable || false,
        enumerable: options.enumerable || false,
        configurable: options.configurable || false
      })
    },
    addApi: function (key, value, options) {
      options = options || {};
      Object.defineProperty(internalApi, key, {
        value: value,
        writable: options.writable || false,
        enumerable: options.enumerable || false,
        configurable: options.configurable || true
      });
      if (window.Lyte && window.Lyte.Editor) {
        Object.defineProperty(Lyte.Editor, _led.changeCase.toPascal(key), {
          value: value,
          writable: options.writable || false,
          enumerable: options.enumerable || false,
          configurable: options.configurable || true
        });
      } else {
        _led._apiToAdd[_led.changeCase.toPascal(key)] = {
          value: value,
          writable: options.writable || false,
          enumerable: options.enumerable || false,
          configurable: options.configurable || true
        }
      }
    }
  });

  const internalApi = Object.create(Object.assign({}, enumerables, internalObjects));
  const fnsToAddInInternalApi = {
    getId: function () {
      return 'lyteEditor_' + (('00' + ++noOfEditorsLoaded).slice(-3))//No I18n
    },
    setInstance: function (id, instance) {
      instances[id] = instance;
    },
    flush: function (id) {
      delete instances[id];
      this.removeReferencesOf(id);
      /**
       * This is to completely remove the instance of the lyteEditor from 
       * global scope
       */
      // if (Object.keys(instances).length === 0) {
      //     // delete _led.monaco;
      // }
    },
    holdReferenceOf: function (node, event, func, id) {
      if (!references.hasOwnProperty(id)) {
        references[id] = [];
      }
      references[id].push([node, event, func]);
    },
    removeReferencesOf: function (id) {
      if (references[id]) {
        references[id].forEach(function (reference) {
          const node = reference[0];
          const event = reference[1];
          const func = reference[2];
          node.removeEventListener(event, func);
        })
      }
    },
    checkEquality: function (actualContent, defaultContent, language, excludeFormat) {
      if (!excludeFormat) {
        if (this._formatters.hasOwnProperty(language)) {
          actualContent = this._formatters[language](actualContent);
          defaultContent = this._formatters[language](defaultContent);
        }
      }
      return actualContent === defaultContent;
    }
  };
  for (let key in fnsToAddInInternalApi) {
    internalApi.addFeature(key, fnsToAddInInternalApi[key]);
  }
  const apiValues = {
    _libs: [],
    _themes: [],
    _listenersAddedToWindow: false,
    I18N_LANG_MAP_FOR_MONACO: internalApi.LANGS_SUPPORTED_BY_MONACO
  }
  //ignorei18n_end
  const exposableApi = {
    urlMappings: {},
    // updateEnum: function (enumerable, value) {
    //   const type = _led.checkType;
    //   const isEnumerable = type.isEnumerable;
    //   const modify = function (key, val) {
    //     Object.defineProperty(internalApi, key, {
    //       value: val,
    //       writable: true
    //     });
    //   }
    //   if (isEnumerable(enumerable)) {
    //     modify(enumerable, value);
    //   } else if (type.object(enumerable)) {
    //     for (let key in enumerable) {
    //       if (isEnumerable(key)) {
    //         modify(key, enumerable[key]);
    //       }
    //     }
    //   }
    // }
  }
  const _led = Object.create(internalApi);
  _led.addFeature('deepClone', commonUtils.deepClone);//No I18n
  _led.addFeature('defineProp', commonUtils.defineProp);//No I18n
  _led.addFeature('deepFreezer', commonUtils.deepFreezer);//No I18n
  _led.addFeature('changeCase', commonUtils.changeCase());//No I18n
  _led.addFeature('pubsub', commonUtils.pubsub());//No I18n
  _led.addFeature('devLog', commonUtils.devLog);//No I18n
  _led.addFeature('path', commonUtils.path);//No I18n
  _led.addFeature('uuid', commonUtils.uuid());//No I18n
  _led.addFeature('state', commonUtils.state());//No I18n

  _led.constructExposableObject = function () {
    Lyte.Editor = Object.create(Object.assign({}, enumerables, apiValues));
    // _led.defineProp.call(Lyte.Editor, _led.DESCRIPTOR_CODES[0], enumerables);
    for (let key in _led._apiToAdd) {
      Object.defineProperty(Lyte.Editor, key, _led._apiToAdd[key]);
    }
  }
  if (window.Lyte) {
    _led.constructExposableObject();
  }
  for (let key in exposableApi) {
    _led.addApi(key, exposableApi[key]);
  }

  return _led;
}());