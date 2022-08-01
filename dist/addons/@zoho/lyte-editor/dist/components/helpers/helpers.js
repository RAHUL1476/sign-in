Lyte.Component.registerHelper('getI18nOf', function (string) {//No I18n
  if (Array.isArray(string)) {
    return string.map(function (item) {
      item = _led.changeCase.toSnake(item);
      return Lyte.Editor.I18n.getValueOf(item);
    });
  }
  string = _led.changeCase.toSnake(string);
  return Lyte.Editor.I18n.getValueOf(string);
});