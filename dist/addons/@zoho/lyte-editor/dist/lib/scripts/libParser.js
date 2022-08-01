_led.addFeature('addLib', function (monaco, lib, nonStatic) {
  try {
    const jsDefaults = monaco.languages.typescript.javascriptDefaults;
    if (this.checkType.string(lib)) {
      jsDefaults.addExtraLib(lib);
      if (!nonStatic) {
        this._staticLibs.push(lib);
      }
    }
  } catch (error) {
    console.error(error);
  }
})
_led.addFeature('destroyAllLibs', function (monaco) {
  monaco.languages.typescript.javascriptDefaults.setExtraLibs();
})
_led.addFeature('refreshAllLibs', function (monaco, libs) {
  // this will remove all the previously loaded libs
  this.destroyAllLibs(monaco);
  this._staticLibs = [];
  if (Array.isArray(libs)) {
    libs.forEach(function (lib) {
      this.addLib(monaco, lib)
    }.bind(this));
  }
})
_led.addFeature('makeRequest', function (link, comp, resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        resolve(xhr);
      } else if (this.status === 404) {
        reject(xhr);
      } else {
        reject(xhr);
      }
    }
  };
  xhr.link = link;
  const canMakeCall = comp.triggerMethod('onBeforeEachRequest', xhr);
  if (canMakeCall !== false) {
    xhr.open("GET", xhr.link, true);//No I18n
    xhr.send();
  } else {
    reject({
      link: link,
      status: 'cancelled'//No I18n
    });
  }
})
_led.addFeature('addLibFrom', function (monaco, link, comp, nonStatic) {
  return new Promise(function (resolve, reject) {
    _led.makeRequest(link, comp, resolve, reject)
  }).then(function (xhr) {
    const lib = comp.triggerMethod('onAfterEachRequest', xhr);
    if (lib !== false) {
      const value = lib || xhr.responseText;
      _led.addLib(monaco, value, nonStatic);
      return {
        link: xhr.link,
        value: value,
        status: 'success'//No I18n
      };
    }
    return {
      link: xhr.link,
      status: 'cancelled'//No I18n
    }
  }).catch(function (xhr) {
    const lib = comp.triggerMethod('onAfterEachRequest', xhr);
    if (lib !== undefined) {
      if (_led.checkType.string(lib)) {
        const value = lib || xhr.responseText;
        _led.addLib(monaco, value, nonStatic);
        return {
          link: xhr.link,
          xhrFailed: true,
          value: value,
          status: 'success'//No I18n
        };
      }
      _led.throw.error(_led.error.EXPECTED, 'string', lib);//No I18n
    }
    return {
      link: xhr.link,
      status: 'failed'//No I18n
    };
  })
})
_led.addFeature('refreshAllLibsFrom', function (monaco, links, comp) {
  if (_led.checkType.array(links)) {
    Promise.all(links.map(function (link) {
      return _led.addLibFrom(monaco, link, comp);
    })).then(function (array) {
      comp.triggerMethod('onAfterAllRequests', array);
    })
  } else {
    _led.throw.error(_led.error.EXPECTED, 'array', links);//No I18n
  }
})
