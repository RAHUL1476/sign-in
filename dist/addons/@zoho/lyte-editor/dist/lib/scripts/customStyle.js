_led.addFeature('addPreloadedThemes', function (monaco) {//No I18n
	const themes = Lyte.Editor._themes;
	themes.forEach(function (themeConf) {
		_led.addThemeToMonaco.apply(_led, [].concat(monaco, themeConf));
	});
});
_led.addFeature('addThemeToMonaco', function (monaco, themeName, configuration) {//No I18n
	monaco.editor.defineTheme(themeName, configuration);
});
_led.addFeature('loadCustomCss', function (href, doc, shadowDocFrag) {//No I18n
	const identifierAttr = 'custom-style-from-lyte-editor';//No I18n
	let oldLinkTag = null;
	if (shadowDocFrag) {
		oldLinkTag = shadowDocFrag.querySelector('link[' + identifierAttr + ']');//No I18n
	} else {
		oldLinkTag = doc.querySelector('link[' + identifierAttr + ']');//No I18n
	}
	if (oldLinkTag) {
		if (oldLinkTag.getAttribute('href') === href) { return; }
		oldLinkTag.parentNode.removeChild(oldLinkTag);
	}
	const ext = _led.getPathExtension(href);
	if (ext === 'css') {//No I18n
		if (shadowDocFrag) {
			const newLinkTag = doc.createElement('link');
			newLinkTag.rel = 'stylesheet';//No I18n
			newLinkTag.href = href;
			newLinkTag.setAttribute(identifierAttr, true);
			shadowDocFrag.appendChild(newLinkTag);
		} else {
			_led.loadResources(href, doc, null, function (tag) {
				tag.setAttribute(identifierAttr, true);
			});
		}
	} else {
		console.warn('The path(' + href + ') for custom css is not a css file');
	}
});
_led.addFeature('addFontFaceForShadowRoot', function (data, doc) {
	const fontFaceStyle = doc.head.querySelector('style[monaco-shadow-root-font-face]');
	if (!fontFaceStyle) {
		const iconPath = _led.pathFor.monaco.iconFile;
		const style = doc.createElement('style');
		style.setAttribute('monaco-shadow-root-font-face', true);
		style.innerHTML = [
			"@font-face {",
			"	font-family: 'codicon';",
			"	src: url('" + iconPath + "') format('truetype');",
			"}"
		].join('\n');
		doc.head.appendChild(style);
	}
});