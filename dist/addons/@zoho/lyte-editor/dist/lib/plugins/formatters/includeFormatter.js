_led.addFeature('includeDocumentFormatter',function(monaco,languagesToAdd){
    const formatters = this._formatters;
    for(let language in formatters){
        if( (languagesToAdd === undefined ) || 
            (this.checkType.array(languagesToAdd) && languagesToAdd.includes(language)) ){
            monaco.languages.registerDocumentFormattingEditProvider(language, {
                provideDocumentFormattingEdits:function(model,options,tokens){
                    return [{
                        range : model.getFullModelRange(),
                        text  : formatters[language](model.getValue())
                    }]
                }
            })
        }
    }
});