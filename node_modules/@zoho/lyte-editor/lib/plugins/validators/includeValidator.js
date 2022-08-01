_led.addFeature('includeDocumentValidator', function (monaco, editorInstance, data) { //No I18n
  const validators = this._validators;
  if (Object.keys(validators).length > 0) {
    const doValidation = function () {
      const model = editorInstance.getModel();
      const value = model.getValue();
      const modelLanguage = model.getLanguageIdentifier().language;
      if (validators[modelLanguage]) {
        const markers = validators[modelLanguage].call(_led, value);
        if (_led.checkType.array(markers)) {
          monaco.editor.setModelMarkers(model, modelLanguage, []);
          markers.forEach(function (marker) {
            if (_led.checkType.object(marker)) {
              const getSeverity = function (type) {
                let fallbackValue = monaco.MarkerSeverity.Error;
                if (_led.checkType.string(type)) {
                  type = type ? type.toLowerCase() : '';
                  type = type.slice(0, 1).toUpperCase() + type.slice(1);
                  return monaco.MarkerSeverity[type] || fallbackValue;
                }
                return fallbackValue;
              }
              if (marker && marker.lineNumber !== null) {
                monaco.editor.setModelMarkers(model, modelLanguage, [{
                  startLineNumber: marker.lineNumber,
                  startColumn: model.getLineFirstNonWhitespaceColumn(marker.lineNumber),
                  endColumn: model.getLineLength(marker.lineNumber),
                  endLineNumber: marker.lineNumber,
                  message: marker.message || 'Unknown Error',//No I18n
                  severity: getSeverity(marker.type)
                }]);
              }
            } else {
              _led.throw.warning(_led.error.EXPECTED, 'object', marker);//No I18n
            }
          })
        } else {
          _led.throw.warning(_led.error.EXPECTED, 'array', markers);//No I18n
        }
      }
    }
    // ? Did this for validating the first time
    doValidation();
    editorInstance.onDidChangeModelContent(doValidation)
  }
});