_led.addFeature('initializeGlobalPaths', function (basePath, cdnLink) {
  const path = _led.path;
  const globalPath = {
    monaco: {},
    iframeEditor: {},
    lyteEditorCss: path.join(basePath, '/css/lyte-editor.css'),
    editorContextCss: path.join(basePath, '/css/editor-context.css')
  };

  globalPath.monaco.baseFolder = path.join((cdnLink || path.join(basePath, '/dependencies/monaco-editor')), '/min/vs');
  globalPath.monaco.iconFile = path.join(globalPath.monaco.baseFolder, '/base/browser/ui/codicons/codicon/codicon.ttf');
  globalPath.monaco.loaderFile = path.join(globalPath.monaco.baseFolder, 'loader.js');
  globalPath.iframeEditor.baseFolder = path.join(basePath, 'dependencies/lyte-editor');//No I18n
  globalPath.iframeEditor.html = path.join(globalPath.iframeEditor.baseFolder, 'editor.html');//No I18n
  globalPath.iframeEditor.js = path.join(globalPath.iframeEditor.baseFolder, 'editor.js');//No I18n

  _led.pathFor = _led.deepFreezer(globalPath);
});