_led.addFeature('checkType', (function () {
  const typeChecks = window["common-utils"].checkType();//No I18n
  const regexForLink = new RegExp(/(^(http:\/\/)?(\/){0,2}([a-zA-Z-_0-9.:@](\/)?)+$)/);
  typeChecks.$extend.string('pxDimension', { matchRegex: /^(\d)+\s*px$/ }); //No I18n
  typeChecks.$extend.string('isLink', { matchRegex: regexForLink }); //No I18n
  typeChecks.$extend.string('startsWithUnderscore', { matchRegex: /^_.*/ });//No I18n
  typeChecks.$extend.array('arrayOfNumbers',{ every : typeChecks.number }); //No I18n
  // ? For Globally needed type checks, it has to be extended here
  // ? Local type checks can be extended, wherever required... but once extended ,it will be available globally
  return typeChecks;
}()));