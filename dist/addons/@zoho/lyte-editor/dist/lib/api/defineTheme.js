_led.addApi('defineTheme', function (themeName, configuration) {//No I18n
	if (!Lyte.Editor._themes) {
		Lyte.Editor._themes = [];
	}
	Lyte.Editor._themes.push([themeName, configuration]);
});