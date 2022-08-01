(function () {
  const statesInEditor = {
    MONACO_LOADING_TRIGGERED : false,
    MONACO_LOADED : false
  };
  for(let stateLabel in statesInEditor) {
    _led.state.$extend(stateLabel, statesInEditor[stateLabel]);
  }
}());