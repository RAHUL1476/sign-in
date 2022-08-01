/* eslint-disable no-console */
_led.addFeature('throw', (function () {
  const throwHandler = window["common-utils"].throwHandler;//No I18n
  const arrayListOfCustomErrors = [
    //ignorei18n_start
    'ValidationError'
    //ignorei18n_end
  ];
  const objectOfOutputTypes = {
    warning: console.warn,
    errorLog: console.error,
    error: function (msg) { throw new Error(msg) }
  }
  return throwHandler(objectOfOutputTypes, arrayListOfCustomErrors);
}()));
