_led.addFeature('tools', function () {//No I18n
  const fontSizeOptions = [8, 9, 10, 11, 12, 14, 16, 18, 24, 36, 48, 58, 70];
  const util = {
    classPrefix: 'lyteEditorTool-',//No I18n
    deCamelize: function (string, separator) {
      separator = separator === undefined ? ' ' : separator;
      return string.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    },
    generateToolObjFor: function (meta) {
      if (_led.checkType.object(meta) || _led.checkType.string(meta)) {
        meta = [meta];
      }
      if (_led.checkType.array(meta)) {
        meta.forEach(function (value) {
          if (_led.checkType.object(value)) {
            for (let name in value) {
              const object = value[name];
              const defaults = {
                title: this.deCamelize(name),
                triggerAction: name,
                class: this.classPrefix + name
              }
              this[name] = Object.assign(defaults, object);
              if (this[name].align === 'right' && !this[name].hasOwnProperty('preventHoverClass')) {//No I18n
                this[name].preventHoverClass = true;
              }
            }
          } else if (_led.checkType.string(value)) {
            this[value] = {
              title: this.deCamelize(value),
              triggerAction: value,
              class: this.classPrefix + value
            }
          }
        }.bind(this));
      }
      return this;
    },
    getValInPx: function (array) {
      return array.map(function (val) {
        return val + 'px';//No I18n
      })
    }
  }
  const defaultMetaObject = [
    //ignorei18n_start
    {
      fontSize: {
        options: util.getValInPx(fontSizeOptions),
        label: 'Font Size',//No I18n,
        noTitle: true,
        sortFunc: function (val1, val2) {
          return parseInt(val1) - parseInt(val2);
        },
        preventHoverClass: true
      }
    },
    'undo',
    'redo',
    'copy',
    'cut',
    {
      comment: {
        title: 'Toggle comment',
        triggerAction: 'toggleComment'
      }
    },
    'indent',
    'outdent',
    'duplicate',
    'delete',
    'find',
    {
      toggleWrap: {
        title: 'Toggle Wrap'
      }
    },
    'format',
    'formatOnType',
    {
      reset: {
        align: 'right',
        noTitle: true
      }
    },
    {
      toggleDarkMode: {
        title: 'Toggle Dark Mode',
        align: 'right',
        noTitle: true
      }
    },
    {
      keyBindings: {
        title: 'Key Bindings',
        align: 'right',
        triggerAction: 'openQuickCommand'
      }
    },
    {
      help: {
        align: 'right'
      }
    }
    //ignorei18n_end
  ]
  const tools = Object.create(util);
  return tools.generateToolObjFor(defaultMetaObject);
});
_led.addFeature('overrideTools', function (overrider, current, baseToolsObject) {//No I18n
  const toolsObj = {
    leftAligned: {},
    rightAligned: {}
  }
  if (_led.checkType.array(overrider)) {
    overrider.forEach(function (value) {
      let toolObj, key;
      if (_led.checkType.string(value)) {
        key = value;
        toolObj = baseToolsObject[value];
      } else if (_led.checkType.object(value)) {
        key = Object.keys(value)[0];
        if (!baseToolsObject.hasOwnProperty(key)) {
          baseToolsObject.generateToolObjFor(key)
        }
        toolObj = Object.assign({}, baseToolsObject[key], value[key]);
      }
      if (toolObj) {
        if (current.hasOwnProperty(key)) {
          if (current[key] !== undefined) {
            toolObj.current = current[key];
          }
          if (toolObj.hasOwnProperty('options') && !toolObj.options.includes(current[key])) {
            if (current[key] !== undefined) {
              toolObj.options.push(current[key]);
            }
            if (toolObj.sortFunc) {
              toolObj.options.sort(toolObj.sortFunc);
            }
          }
        }
        if (toolObj.align === 'right') {
          toolsObj.rightAligned[key] = toolObj;
        } else {
          toolsObj.leftAligned[key] = toolObj;
        }
      }
    });
  }
  return toolsObj;
});
