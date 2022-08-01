// ? just creating a closure to hold all those lexical scoped variables
(function () {
  const $info = window.infoFromParent;
  const _led = $info._led;
  const editorComp = $info.editorComp;
  const loadResources = _led.loadResources.bind(_led);
  const config = editorComp.getConfigForRequire(true);

  const normalizePath = function (path) {
    const relPath = _led.path.relative(_led.pathFor.iframeEditor.baseFolder, path);
    // this below line will make the path as absolute
    return _led.path.join('/', _led.pathFor.iframeEditor.baseFolder, relPath);
  }

  const editorContextCssFile = normalizePath(_led.pathFor.editorContextCss);
  const monacoLoaderFile = normalizePath(_led.pathFor.monaco.loaderFile);
  loadResources(editorContextCssFile, document);
  loadResources(monacoLoaderFile, document, null, null, function () {
    require.config(config);
    require(["vs/editor/editor.main"], $info.editorComp.initializeEditor.bind($info.editorComp, document, window));//No I18n
  });
}());