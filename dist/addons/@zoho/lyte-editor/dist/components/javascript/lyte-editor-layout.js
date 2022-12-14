Lyte.Component.register("lyte-editor-layout", {
_template:"<template tag-name=\"lyte-editor-layout\"> <lyte-yield yield-name=\"layout\"></lyte-yield> </template>",
_dynamicNodes : [{"type":"insertYield","position":[1]}],
//No I18n
	data: function () {
		return {

		}
	},
	didConnect: function () {
		/**
		 * Even if there are multiple instances of the lyte-editor inside the yield,
		 * Only the first instance will be taken into account
		 */
		const allLyteEditors = this.$node.querySelectorAll('lyte-editor');//No I18n
		const allLyteEditorToolbars = this.$node.querySelectorAll('lyte-editor-toolbar');//No I18n
		if (allLyteEditors.length > 1) {
			console.warn("There are multiple instances of lyte-editor inside the yield, Only the first instance will be taken into account");//No I18n
		}
		if (allLyteEditorToolbars.length > 1) {
			console.warn("There are multiple instances of lyte-editor-toolbar inside the yield, Only the first instance will be taken into account");//No I18n
		}

		const lyteEditor = allLyteEditors[0];
		const lyteEditorToolbar = allLyteEditorToolbars[0];

		lyteEditor.component.connectWith({
			toolbar: lyteEditorToolbar,
			layout: this.$node
		});
		lyteEditorToolbar.component.connectWith({
			editor: lyteEditor,
			layout: this.$node
		});
		const tools = lyteEditor.component.getData('toolsInstance');//No I18n
		const darkModeToolConfig = tools ? tools.toggleDarkMode : {};
		const isDarkModeEnabled = darkModeToolConfig.current || false;
		if (isDarkModeEnabled) {
			this.$node.classList.add(_led.DARK_MODE_CLASS);
		}
	}
});
