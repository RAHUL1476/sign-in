_led.addFeature('setCompilerOptionsFor', function (monaco, language, options) {
    const languages = monaco.languages;
    const defaultsMapping = {
        javascript: languages.typescript.javascriptDefaults,
        typescript: languages.typescript.typescriptDefaults
        // this can be extended in future
    }
    const languageDefaults = defaultsMapping[language] || null;
    if (languageDefaults) {
        const compilerOptions = languageDefaults.getCompilerOptions();
        if (_led.checkType.object(options)) {
            Object.assign(compilerOptions, options);
            languageDefaults.setCompilerOptions(compilerOptions);
        }
    }
});