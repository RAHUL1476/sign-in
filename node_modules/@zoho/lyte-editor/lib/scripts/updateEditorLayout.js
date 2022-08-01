_led.addFeature('updateEditorLayout', function (editorComponent) { //No I18n
  /** 
   * Removed Debounce as the home page of the monaco editor didnt add this
   * and performance of that page was quite good
   * Can add this if it is required
   * Moreover, if this api has to work then for every editor instance,
   * there should be an updateEditorLayout api
   */
  // _led.debounce(function () {
  const data = editorComponent.data || {};
  const diffEditorInstance = data.diffEditorInstance;
  const editorInstance = data.editorInstance;
  if (editorInstance) {
    editorInstance.layout();
  }
  if (diffEditorInstance) {
    diffEditorInstance.layout();
  }
  // }, 300);
});