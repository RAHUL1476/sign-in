_led.addFeature('cache', (function () {
	const toBeActivated = [];
	const activeLibs = [];
	const libs = _led._labelledLibs;
	const nonStatic = true;
	const API = {
		list: function () {
			return Object.assign({}, libs);
		},
		active: function () {
			return activeLibs.slice();
		},
		emptyCache: function () {
			for (let label in _led._labelledLibs) {
				delete _led._labelledLibs[label];
			}
		},
		reinitialize: function (monaco, dontEmptyCache) {
			if (!dontEmptyCache) {
				_led.cache.emptyCache();
			}
			_led.destroyAllLibs(monaco);
			_led._staticLibs.forEach(_led.addLib.bind(_led, monaco));
		},
		add: function (monaco, objectToAdd, comp, overwrite) {
			/*
			? 1 - Overwrite false and label already exists
			* Throw a warning and inform them to call this function again with true as 2nd arg
			? 2 - Overwrite true 
			* Normal behaviour
			*/
			const addToLib = function (value) {
				_led.addLib(monaco, value, nonStatic)
			}
			overwrite = overwrite === undefined ? false : overwrite;
			if (overwrite) {
				_led.cache.reinitialize(monaco)
			}
			for (let label in objectToAdd) {
				const valuesToAdd = objectToAdd[label];
				if (!libs.hasOwnProperty(label)) {
					libs[label] = valuesToAdd;
					valuesToAdd.forEach(addToLib);
					if (activeLibs.indexOf(label) === -1) {
						activeLibs.push(label);
					}
				} else {
					_led.throw.warning(_led.error.LIB_EXISTS, label);
				}
			}
		},
		addLink: function (monaco, objectToAdd, comp, overwrite) {
			/*
			? 1 - Overwrite false and label already exists
			* Throw a warning and inform them to call this function again with true as 2nd arg
			? 2 - Overwrite true 
			* Normal behaviour
			*/
			const addToLib = function (link) {
				return _led.addLibFrom(monaco, link, comp, nonStatic);
			}
			overwrite = overwrite === undefined ? false : overwrite;
			if (overwrite) {
				_led.cache.reinitialize(monaco)
			}
			for (let label in objectToAdd) {
				if (!libs.hasOwnProperty(label)) {
					const linksToAdd = objectToAdd[label];
					Promise.all(linksToAdd.map(addToLib)).then(function (array) {
						comp.triggerMethod('onAfterAllRequests', array);
						libs[label] = array;
						if (activeLibs.indexOf(label) === -1) {
							activeLibs.push(label);
						}
					})
				} else {
					_led.throw.warning(_led.error.LIB_EXISTS, label);
				}
			}
		},
		storeActiveState: function () {
			while (toBeActivated.length) {
				toBeActivated.pop();
			}
			toBeActivated.push.apply(toBeActivated, activeLibs);
		},
		removeFromCache: function (labelsToRemove) {
			if (_led.checkType.array(labelsToRemove)) {
				labelsToRemove.forEach(function (label) {
					delete libs[label];
				})
			} else if (_led.checkType.string(labelsToRemove)) {
				delete libs[labelsToRemove];
			} else {
				_led.throw.error(_led.error.EXPECTED, 'string (or) array', labelsToRemove);//No I18n
			}
		},
		deactivate: function (libsToDeactivate) {
			libsToDeactivate.forEach(function (lib) {
				const index = toBeActivated.indexOf(lib);
				if (index > -1) {
					toBeActivated.splice(index, 1);
				}
			})
		},
		deactivateAll: function () {
			while (toBeActivated.length) {
				toBeActivated.pop();
			}
		},
		activate: function (libsToActivate) {
			libsToActivate.forEach(function (libName) {
				if (libs[libName] && !toBeActivated.includes(libName)) {
					toBeActivated.push(libName);
				}
			})
		},
		activateAll: function () {
			for (let label in libs) {
				toBeActivated.push(label);
			}
		},
		loadActiveLibs: function (monaco) {
			const isActiveStateChanged = function () {
				if (activeLibs.length !== toBeActivated.length) {
					return true;
				}
				return toBeActivated.some(function (lib) { return !activeLibs.includes(lib) })
			}
			/*
			? Loading libs is a costly operation , it will reinitiate the 
			? worker , so this is wrapped inside this check
			*/
			if (isActiveStateChanged()) {
				_led.cache.reinitialize(monaco, true);
				const arrayCheck = _led.checkType.array;
				const stringCheck = _led.checkType.string;
				const objectCheck = _led.checkType.object;
				toBeActivated.forEach(function (label) {
					const array = libs[label];
					if (arrayCheck(array)) {
						array.forEach(function (lib) {
							if (stringCheck(lib)) {
								_led.addLib(monaco, lib, nonStatic);
							} else if (objectCheck(lib) && lib.value) {
								_led.addLib(monaco, lib.value, nonStatic);
							}
						})
					}
				});
				/* 
				 ? this while loop is done purposely, 
				 ? A fair trade off for performance to resilient code
				*/
				while (activeLibs.length) {
					activeLibs.pop()
				}
				activeLibs.push.apply(activeLibs, toBeActivated);
			}
		}
	};
	return API;
}.call(Object.getPrototypeOf(_led))));
