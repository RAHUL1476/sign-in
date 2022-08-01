_led.addApi('editorActions', (function () { //No I18n
  const type = _led.checkType;
  type.$extend.object('editorActionInstance', { //No I18n
    required: {
      id: type.string,
      run: type.function,
      label: type.string
    },
    allowable: {
      keybindings: type.arrayOfNumbers,
      contextMenuGroupId: type.string,
      precondition: type.string,
      keybindingsContext: type.string
    }
  });
  type.$extend.array('listOfEditorActions', { //No I18n
    every: type.editorActionInstance
  });

  const editorActions = (function () {
    const actions = {};
    return {
      add: function (id, object) {
        object.contextMenuOrder = Object.keys(actions).length + 1;
        if (!object.hasOwnProperty('contextMenuGroupId')) {
          object.contextMenuGroupId = 'custom';//No I18n
        }
        actions[id] = object;
        return actions[id];
      },
      dispose: function (id) {
        const itemToDispose = actions[id];
        if (itemToDispose) {
          if (itemToDispose.hasOwnProperty('dispose')) {
            itemToDispose.dispose();
          }
          delete actions[id];
        }
      },
      disposeAll: function () {
        for (let id in actions) {
          this.dispose(id);
        }
      },
      list: function () {
        const arrayOfEditorActions = [];
        for (let key in actions) {
          arrayOfEditorActions.push(actions[key]);
        }
      },
      has: function (id) {
        return !!actions[id];
      }
    }
  }());
  const extender = function (callback, monaco, editor) {
    const argsToPass = [{
      KeyCode: monaco.KeyCode,
      KeyMod: monaco.KeyMod
    }];
    const arrayOfEditorActions = callback.apply(null, argsToPass);
    if (type.listOfEditorActions(arrayOfEditorActions)) {
      arrayOfEditorActions.forEach(function (menuItem) {
        const value = editorActions.add(menuItem.id, menuItem);
        value.dispose = editor.addAction(Object.assign({}, value, {
          label : Lyte.Editor.I18n.getValueOf(value.label)
        }));
      });
    } else {
      _led.throw.error(_led.error.TYPE_MUST_BE, 'Array<EditorActionItem>. Refer Documentation for the structure of EditorActionItem', 'Menu Items');//No I18n
    }
  }
  const disposeAction = function (id) {
    if (editorActions.has(id)) {
      editorActions.dispose(id);
    } else {
      _led.throw.warning('There is no Menu Item registered under the name ' + id);//No I18n
    }
    return editorActions.list;
  }

  const internalFuncs = {
    dispose: disposeAction,
    disposeAll: editorActions.disposeAll,
    list: editorActions.list
  };
  const API = Object.create(internalFuncs);
  const methods = {
    extend: extender
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());