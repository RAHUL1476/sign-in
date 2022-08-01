/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./main-dev.js ***!
  \*********************/
if (!window["common-utils"]) { window["common-utils"] = {} };
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/descriptorCodes.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "descriptorCodes": () => (/* binding */ descriptorCodes)
/* harmony export */ });
const descriptorCodes = (function () {
  const constructOptionForCode = function (value) {
    const options = [
      'writable',
      'enumerable',
      'configurable'
    ]
    this[value] = options.reduce(function (acc, option) {
      if (acc[option] = (value >= this[option])) {
        value -= this[option]
      }
      return acc;
    }.bind(this), {})
  }
  const codes = Object.create(Object.defineProperties({}, {
    writable: { value: 4 },
    enumerable: { value: 2 },
    configurable: { value: 1 }
  }));
  for (let i = 0; i <= 7; i++) {
    constructOptionForCode.call(codes, i);
  }
  return codes;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (descriptorCodes);
// module.exports = descriptorCodes;
// window[PACKAGE_NAME].descriptorCodes = descriptorCodes;
Object(window["common-utils"]).descriptorCodes = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/deepFreezer.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepFreezer": () => (/* binding */ deepFreezer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deepFreezer = function (value) {
  /**
   * ## Freezer - <vignesh.prv> 
   * # Why we need this ?
   * - This is just a deep freezer function which we might need on sending data to users
   * 
   * TODO : Not Much of the validation is done here
   * * For basics requirements this is fine, but on large scale we might need 
   * * a better freezer function which validates its inputs and then freezes it
   * 
   **/
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(deepFreezer)
    } else {
      for (let key in value) {
        deepFreezer(value[key]);
      }
    }
  }
  return Object.freeze(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreezer);
// module.exports = deepFreezer;
// window[PACKAGE_NAME].deepFreezer = deepFreezer;
Object(window["common-utils"]).deepFreezer = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/defineProp.js":
/*!***************************!*\
  !*** ./src/defineProp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defineProp": () => (/* binding */ defineProp)
/* harmony export */ });
const defineProp = function (options, object, value) {
  // - Getters and setters can only be done one by one
  const objToSet = {};
  delete options.value; // * Just in case ... 
  if (typeof object === 'string') {
    if (options.enumerable && typeof value === 'function') {
      value = value.bind(this)
    }
    const overridingObject = (value === undefined ? {} : { value });
    Object.assign(overridingObject, options);
    Object.defineProperty(this, object, overridingObject);
  } else if (!Array.isArray(object) && typeof object === 'object') {
    for (let key in object) {
      let valueToSet = object[key];
      if (options.enumerable && typeof object[key] === 'function') {
        valueToSet = valueToSet.bind(this)
      }
      objToSet[key] = Object.assign({
        value: valueToSet
      }, options);
    }
    Object.defineProperties(this, objToSet);
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProp);
// module.exports = defineProp;
// window[PACKAGE_NAME].defineProp = defineProp;

/***/ }),

/***/ "./src/descriptorCodes.js":
/*!********************************!*\
  !*** ./src/descriptorCodes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "descriptorCodes": () => (/* binding */ descriptorCodes)
/* harmony export */ });
const descriptorCodes = (function () {
  const constructOptionForCode = function (value) {
    const options = [
      'writable',
      'enumerable',
      'configurable'
    ]
    this[value] = options.reduce(function (acc, option) {
      if (acc[option] = (value >= this[option])) {
        value -= this[option]
      }
      return acc;
    }.bind(this), {})
  }
  const codes = Object.create(Object.defineProperties({}, {
    writable: { value: 4 },
    enumerable: { value: 2 },
    configurable: { value: 1 }
  }));
  for (let i = 0; i <= 7; i++) {
    constructOptionForCode.call(codes, i);
  }
  return codes;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (descriptorCodes);
// module.exports = descriptorCodes;
// window[PACKAGE_NAME].descriptorCodes = descriptorCodes;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/deepClone.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProp.js */ "./src/defineProp.js");
/* harmony import */ var _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptorCodes.js */ "./src/descriptorCodes.js");
// const defineProp = window[PACKAGE_NAME].defineProp || require("./defineProp");
// const descriptorCodes = window[PACKAGE_NAME].descriptorCodes || require("./descriptorCodes");




const deepClone = (function () {
  /**
   * ## Deep Clone -(Object Cloning Library) <vignesh.prv> 
   * # Why we need this, why cant we just use Lyte.DeepCopy ?
   * - Sometimes in lyteEditor we need to ignore prototypes while cloning
   * - And sometimes it is necessary to freeze while cloning
   * - For all those functions this wrapper is written
   * 
   * # Does it handle circular and function references ?
   * - At present this wont handle those, but in future as per requirement,
   * - those circular handling and function references can also be added
   * ? How to clone circular objects => https://github.com/davidmarkclements/rfdc/blob/master/index.js
   * 
   * # Problems with this ?
   * - Regex Objects are not properly handled (will be done in future)
   * - Instance comparison is done ,so this might fail when cloning object from other threads
   * 
   **/
  const byPassPrimitives = function (value, callback) {
    // ! This also has the same regex problem as Lyte.deepCopy, and is not yet fixed ... it has to be done
    if (typeof value !== 'object' || value === null) {
      return this.freeze ? Object.freeze(value) : value;
    }
    if (value instanceof Date) {
      return this.freeze ? Object.freeze(new Date(value)) : new Date(value);
    }
    return callback.call(this, value);
  }
  const cloneArray = function (array, callback) {
    const keys = Object.keys(array);
    const arrayClone = new Array(keys.length)
    for (let i = 0; i < keys.length; i++) {
      arrayClone[keys[i]] = byPassPrimitives.call(this, array[keys[i]], callback);
    }
    return arrayClone;
  }
  const cloner = function (object) {
    return byPassPrimitives.call(this, object, function (object) {
      if (Array.isArray(object)) {
        return cloneArray.call(this, object, cloner)
      }
      const clone = {};
      for (let key in object) {
        if (!this.withProto && Object.hasOwnProperty.call(object, key) === false) {
          continue;
        }
        clone[key] = byPassPrimitives.call(this, object[key], cloner);
      }
      return clone;
    })
  }
  const config = (function () {
    const constructOptionForCode = function (value) {
      const options = [
        'withProto',
        'freeze'
      ]
      this[value] = options.reduce(function (acc, option) {
        if (acc[option] = (value >= this[option])) {
          value -= this[option]
        }
        return acc;
      }.bind(this), {})
    }
    const codes = Object.create(Object.defineProperties({}, {
      withProto: { value: 1 },
      freeze: { value: 2 }
    }));
    for (let i = 0; i <= 3; i++) {
      constructOptionForCode.call(codes, i);
    }
    return codes;
  }());
  const methods = {
    withProto: cloner.bind(config[1]),
    andFreeze: cloner.bind(config[2]),
    withProtoAndFreeze: cloner.bind(config[3])
  }
  return _defineProp_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(cloner.bind(config[0]), _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_1__["default"][0], methods);
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepClone);
// module.exports = deepClone;
// window[PACKAGE_NAME].deepClone = deepClone;
})();

Object(window["common-utils"]).deepClone = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/defineProp.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defineProp": () => (/* binding */ defineProp)
/* harmony export */ });
const defineProp = function (options, object, value) {
  // - Getters and setters can only be done one by one
  const objToSet = {};
  delete options.value; // * Just in case ... 
  if (typeof object === 'string') {
    if (options.enumerable && typeof value === 'function') {
      value = value.bind(this)
    }
    const overridingObject = (value === undefined ? {} : { value });
    Object.assign(overridingObject, options);
    Object.defineProperty(this, object, overridingObject);
  } else if (!Array.isArray(object) && typeof object === 'object') {
    for (let key in object) {
      let valueToSet = object[key];
      if (options.enumerable && typeof object[key] === 'function') {
        valueToSet = valueToSet.bind(this)
      }
      objToSet[key] = Object.assign({
        value: valueToSet
      }, options);
    }
    Object.defineProperties(this, objToSet);
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProp);
// module.exports = defineProp;
// window[PACKAGE_NAME].defineProp = defineProp;
Object(window["common-utils"]).defineProp = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/changeCase.js":
/*!***************************!*\
  !*** ./src/changeCase.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCase": () => (/* binding */ changeCase),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepFreezer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFreezer.js */ "./src/deepFreezer.js");

const changeCase = (function () {//No I18n
  const descriptors = {
    writable: true,
    enumerable: false,
    configurable: false
  }
  const symbols = "~`!@#$%^&*(){}\\[\\]<>:;\"'|\\/?\\-_\\s\\n\\t\\."; //No I18n
  const regex = {
    words: new RegExp("(^|[" + symbols + "]+?)([a-zA-Z0-9]+)", "g"),//No I18n
    onlyLower: new RegExp("(^|[" + symbols + "]+?)([a-z]+)", "g"),//No I18n
    onlyUpper: new RegExp("(^|[" + symbols + "]+?)([A-Z]+)", "g")//No I18n
  }
  const manipulator = (0,_deepFreezer_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    $extend: function (name, callback) {
      // ? Once added can be re-written by cannot be deleted
      Object.defineProperty(
        API,
        name,
        Object.assign({
          value: callback
        }, descriptors)
      );
      return callback.bind(API);
    },
    upWord: function (word) {
      return word.toUpperCase();
    },
    lowWord: function (word) {
      return word.toLowerCase();
    },
    capFirst: function (word) {
      return this.upWord(word[0]) + this.lowWord(word.slice(1))
    },
    rmSpace: function (word) {
      return word.replace(/\s+/g, '')
    },
    prepare: function (word) {
      const splitCapsAndSmall = /([a-z])([A-Z])/g;
      const splitConsecutiveCaps = /([A-Z])([A-Z])/g;
      const symbolsAtEnd = new RegExp("([" + symbols + "]+)$")
      word = word.replace(splitCapsAndSmall, '$1 $2');
      word = word.replace(splitConsecutiveCaps,'$1 $2 ').trim();
      word = word.replace(symbolsAtEnd, '');
      return word;
    }
  })
  const toUpper = manipulator.upWord;
  const toLower = manipulator.lowWord;
  const toPascal = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const match = arguments[2];
      return this.capFirst(match);
    }.bind(this))
  }
  const toCamel = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return isAtFirst ? this.lowWord(match) : this.capFirst(match);
    }.bind(this))
  }
  const toConstant = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return (isAtFirst ? "" : "_") + this.upWord(match);
    }.bind(this))
  }
  const toSnake = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return (isAtFirst ? "" : "_") + this.lowWord(match);
    }.bind(this))
  }
  const toKebab = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const omitableFirstChars = ['','_'];
      const firstChar = arguments[1];
      const isAtFirst = omitableFirstChars.includes(firstChar);
      const match = arguments[2];
      return (isAtFirst ? firstChar : "-") + this.lowWord(match);
    }.bind(this))
  }
  const toCapital = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return (isAtFirst ? "" : " ") + this.capFirst(match);
    }.bind(this))
  }
  const API = Object.create(manipulator);

  const methods = {
    // ? methods have to be extended here
    toUpper: toUpper,
    toLower: toLower,
    toPascal: toPascal,
    toConstant: toConstant,
    toSnake: toSnake,
    toKebab: toKebab,
    toCamel: toCamel,
    toCapital: toCapital
  }
  for (const methodName in methods) {
    Object.defineProperty(
      API,
      methodName,
      Object.assign({
        value: methods[methodName]
      }, descriptors)
    );
  }
  return API;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeCase);

/***/ }),

/***/ "./src/deepFreezer.js":
/*!****************************!*\
  !*** ./src/deepFreezer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepFreezer": () => (/* binding */ deepFreezer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deepFreezer = function (value) {
  /**
   * ## Freezer - <vignesh.prv> 
   * # Why we need this ?
   * - This is just a deep freezer function which we might need on sending data to users
   * 
   * TODO : Not Much of the validation is done here
   * * For basics requirements this is fine, but on large scale we might need 
   * * a better freezer function which validates its inputs and then freezes it
   * 
   **/
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(deepFreezer)
    } else {
      for (let key in value) {
        deepFreezer(value[key]);
      }
    }
  }
  return Object.freeze(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreezer);
// module.exports = deepFreezer;
// window[PACKAGE_NAME].deepFreezer = deepFreezer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/throwHandler.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "throwHandler": () => (/* binding */ throwHandler)
/* harmony export */ });
/* harmony import */ var _changeCase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeCase.js */ "./src/changeCase.js");
// const changeCase = window[PACKAGE_NAME].changeCase || require('./changeCase');//No I18n

const throwHandler = function (objectOfOutputTypes,arrayListOfCustomErrors) {//No I18n
  function CustomError (errorName, message) {
    const errInstance = new Error(message);
    errInstance.name = errorName;
    const stack = errInstance.stack.split('\n'); //No I18n
    stack.splice(1, 3);
    errInstance.stack = stack.join('\n'); //No I18n
    // ! Stack trace is changed - the wrapper code trace is removed
    Object.setPrototypeOf(errInstance, Object.getPrototypeOf(this));
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(errInstance, CustomError);
    // }
    return errInstance;
  }

  CustomError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: Error,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(CustomError, Error);
  } else {
    CustomError.__proto__ = Error;
  }
  /**
   * ? More Error classes can be added based on the necessity
   */
  const customErrors = (function (customErrors) {
    return customErrors.reduce(function (acc, customError) {
      acc[customError] = function (msg) {
        throw new CustomError(_changeCase_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPascal(customError), msg);
      }
      return acc;
    }, {})
  }(arrayListOfCustomErrors || []));

  const outputTypes = Object.assign(objectOfOutputTypes || {}, customErrors)
  const throwFnFor = function (type) {
    return function (errorCode) {
      const args = Array.from(arguments);
      args.shift();
      const msgDef = errorCode;
      const msg = typeof msgDef === 'string' ? msgDef : msgDef.apply(null, args); //No I18n
      outputTypes[type](msg);
    }
  }
  const handler = {};
  for (let type in outputTypes) {
    handler[type] = throwFnFor(type);
  }
  return handler;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throwHandler);
// window[PACKAGE_NAME].throwHandler = throwHandler;
})();

Object(window["common-utils"]).throwHandler = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deepFreezer.js":
/*!****************************!*\
  !*** ./src/deepFreezer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepFreezer": () => (/* binding */ deepFreezer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deepFreezer = function (value) {
  /**
   * ## Freezer - <vignesh.prv> 
   * # Why we need this ?
   * - This is just a deep freezer function which we might need on sending data to users
   * 
   * TODO : Not Much of the validation is done here
   * * For basics requirements this is fine, but on large scale we might need 
   * * a better freezer function which validates its inputs and then freezes it
   * 
   **/
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(deepFreezer)
    } else {
      for (let key in value) {
        deepFreezer(value[key]);
      }
    }
  }
  return Object.freeze(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreezer);
// module.exports = deepFreezer;
// window[PACKAGE_NAME].deepFreezer = deepFreezer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/checkType.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkType": () => (/* binding */ checkType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepFreezer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFreezer */ "./src/deepFreezer.js");

/**
 * ## Check Type ( type checking library ) <vignesh.prv>
 * # Why we need this ?
 * - Increasingly we are checking types of user inputs and various values
 * - This will help us to register a type pattern well before and thus 
 * - making it easier to check the input
 * 
 * * Example : 
 * - If there is a input which is of type object and has some required keys 
 * - and some allowable keys ( if present , they have to be type checked )
 * 
 * ? tool = {
 * ?  label : String, // Required
 * ?  callback : Function, // Required
 * ?  title : String // Allowable
 * ? }
 * 
 * - We can create a type 'tool' for the above configuration, thus now we can 
 * - check for derived type 'tool'.
 * 
 * ! This will be more helpful when the types are subjected to change
 * ! Error message to the user can be verbose from this
 * 
 * # What if the value can have more than one structure ?
 * - Here, in checktype there are 2 logical operator APIs are available
 * - 'OR' & 'AND' which makes it easy to incorporate more than one structure
 * - This also helps us to atomize the types and reuse the existing type checks
 * 
 * # What is API "later" means ?
 * - As the name suggest the API "later" will get registered later.
 * - Normally, when we extend a existing type, the function on which the extension is made has 
 * - to be present.
 * - But in this case, There is no need for such thing,On registering this later will bind an 
 * - Symbol of type's label 
 * - Only on performing the check function, this Symbol will be parsed and if there is no such
 * - type registered the function will be ignored under the hood and 'false' will be returned
 * 
 * ! Once a type is registered it cannot be re-registered and delete
 * ! It will be available windowly once registered
 * 
 * # What if we need more control over the types ?
 * - On registering , There is a third argument which accepts a callback, from which more
 * - customized checks can be done
 * 
 */

const checkType = (function () {//No I18n
  const errorMsgs = {
    //ignorei18n_start
    MISSING_KEY: function (key, object) {
      object = typeof object === 'string' ? object : JSON.stringify(object, null, 4)
      return key + " is a required key in the object.\nStringified Object for reference :\n" + object
    },
    TYPE_MUST_BE: function (type, key, additional) {
      return 'The value for the ' + key + ' should be of type ' + (Array.isArray(type) ? type.join(' | ') : type) + '. ' + (additional || '')
    },
    INVALID_VALUE: function (key, object) {
      return 'Value for ' + key + ' is invalid, Source object : ' + JSON.stringify(object, null, 2)
    },
    VALUE_EXISTS: function (type, object) {
      return type + ' already exists' + (object && ' in ' + object) + '. Please try another name'
    }
    //ignorei18n_end
  }
  // const console = 'console';//No I18n
  // const logError = window[console].error;//No I18n
  const symbolMap = {};
  let skipExistsCheck = false;
  const checkInSymbols = function (mightBeSymbol) {
    if (typeof mightBeSymbol === 'symbol') {//No I18n
      const type = symbolMap[mightBeSymbol];
      return typeChecks[type] || mightBeSymbol;
    }
    return mightBeSymbol;
  }
  const basicTypeChecks = {
    STRING: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'string') {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'nonEmptyString': {
                if (typeof constraint === 'boolean') {
                  if (constraint) {
                    valid = value.trim().length > 0;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'length': {
                if (typeof constraint === 'function') {//No I18n
                  if (!constraint(value.length)) {
                    valid = false;
                  }
                } else if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint !== value.length) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'allowableValues': {
                if (Array.isArray(constraint)) {
                  if (!constraint.includes(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'matchRegex': {
                if (constraint instanceof RegExp) {
                  if (!constraint.test(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    NUMBER: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'number') {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'min': {
                if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint > value) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'max': {
                if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint < value) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'whole': {
                if (typeof constraint === 'boolean' && constraint) {//No I18n
                  if ((value - Math.floor(value)) !== 0) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'positive': {
                if (typeof constraint === 'boolean') {//No I18n
                  if (constraint && value < 0) {
                    valid = false;
                  }
                  if (!constraint && value > 0) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'allowableValues': {
                if (Array.isArray(constraint)) {
                  if (!constraint.includes(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    ARRAY: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (!Array.isArray(value)) {
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'size': {
                if (typeof constraint === 'function') {//No I18n
                  if (!constraint(value.length)) {
                    valid = false;
                  }
                } else if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint !== value.length) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'instanceOf': {
                if (typeof constraint === 'function') {//No I18n
                  valid = value instanceof constraint
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'every': {
                if (typeof constraint === 'function') {
                  valid = value.every(function (eachValue) { return constraint(eachValue) });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'some': {
                if (typeof constraint === 'function') {
                  valid = value.some(function (eachValue) { return constraint(eachValue) });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    OBJECT: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'object' || Array.isArray(value)) {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'requiredKeys': {
                if (Array.isArray(constraint)) {//No I18n
                  valid = constraint.every(function (keyName) {
                    return value.hasOwnProperty(keyName)
                  });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'instanceOf': {
                if (typeof constraint === 'function') {//No I18n
                  valid = value instanceof constraint
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'required': {
                if (typeChecks.object(constraint)) {
                  for (let keyName in constraint) {
                    if (value.hasOwnProperty(keyName)) {
                      const validatorFn = constraint[keyName];
                      if (typeChecks.function(validatorFn)) {
                        if (!validatorFn(value[keyName])) {
                          valid = false;
                          break;
                        }
                      } else if (constraintFailure) {
                        valid = false;
                        break;
                      }
                    } else {
                      // logError(errorMsgs.MISSING_KEY(keyName, value));
                      valid = false;
                      break;
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                }
              }
                break;
              case 'allowable': {
                if (typeChecks.object(constraint)) {
                  for (let keyName in constraint) {
                    if (value.hasOwnProperty(keyName)) {
                      const validatorFn = constraint[keyName];
                      if (typeChecks.function(validatorFn)) {
                        if (!validatorFn(value[keyName])) {
                          // logError(errorMsgs.INVALID_VALUE(keyName, value));
                          valid = false;
                          break;
                        }
                      } else if (constraintFailure) {
                        valid = false;
                        break;
                      }
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('allowable', 'object'));//No I18n
                }
              }
                break;
              case 'everyValue': {
                if (typeof constraint === 'function') {//No I18n
                  valid = Object.keys(value).every(function (key) {
                    const eachValue = value[key];
                    return constraint(eachValue);
                  })
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'prototype': {
                if (typeChecks.object(constraint)) {
                  if (constraint.required) {
                    const subConstraint = constraint.required;
                    if (typeChecks.object(subConstraint)) {
                      for (let keyName in subConstraint) {
                        if (keyName in value) {
                          const validatorFn = subConstraint[keyName];
                          if (typeChecks.function(validatorFn)) {
                            if (!validatorFn(value[keyName])) {
                              valid = false;
                              break;
                            }
                          } else if (constraintFailure) {
                            valid = false;
                            break;
                          }
                        } else {
                          // logError(errorMsgs.MISSING_KEY(keyName, value));
                          valid = false;
                          break;
                        }
                      }
                    } else if (constraintFailure) {
                      valid = false;
                    } else {
                      throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                    }
                  }
                  if (constraint.allowable) {
                    const subConstraint = constraint.allowable;
                    if (typeChecks.object(subConstraint)) {
                      for (let keyName in subConstraint) {
                        if (keyName in value) {
                          const validatorFn = subConstraint[keyName];
                          if (typeChecks.function(validatorFn)) {
                            if (!validatorFn(value[keyName])) {
                              // logError(errorMsgs.INVALID_VALUE(keyName, value));
                              valid = false;
                              break;
                            }
                          } else if (constraintFailure) {
                            valid = false;
                            break;
                          }
                        }
                      }
                    } else if (constraintFailure) {
                      valid = false;
                    } else {
                      throw new Error(errorMsgs.TYPE_MUST_BE('allowable', 'object'));//No I18n
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                }
              }
                break;
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    }
  }
  const extender = function (name, options, extendFrom, callback) {
    if (!skipExistsCheck && this[name]) {
      throw new Error(errorMsgs.VALUE_EXISTS(name, 'Type Checks'));//No I18n
    } else if (basicTypeChecks.hasOwnProperty(extendFrom)) {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string. Found ' + name);//No I18n
      } else {
        this[name] = basicTypeChecks[extendFrom](options, callback)
        return this[name];
      }
    }
    return false;
  }
  const safeExtender = function (name, options, extendFrom, callback) {
    if (this[name]) {
      return this[name];
    } else {
      skipExistsCheck = true;
      const output = extender.call(this, name, options, extendFrom, callback);
      skipExistsCheck = false;
      return output;
    }
  }
  for (let basicType in basicTypeChecks) {
    extender[basicType.toLowerCase()] = function (name, options, callback) {
      return this.call(typeChecks, name, options, basicType, callback);
    }
    safeExtender[basicType.toLowerCase()] = function (name, options, callback) {
      return this.call(typeChecks, name, options, basicType, callback);
    }
  }
  const manipulator = (0,_deepFreezer__WEBPACK_IMPORTED_MODULE_0__["default"])({
    $extend: extender,
    $safeExtend: safeExtender,
    later: function (typeName) {
      const symbol = Symbol(typeName);
      symbolMap[symbol] = typeName;
      return symbol;
    },
    or: function () {
      const args = Array.from(arguments);
      return function (value) {
        return args.some(function (typeCheck) {
          typeCheck = checkInSymbols(typeCheck);
          if (typeof typeCheck !== 'function') {//No I18n
            return false;
          }
          return typeCheck(value, true); // Constraint Failure is allowable here
        })
      }
    },
    and: function () {
      const args = Array.from(arguments);
      return function (value) {
        return args.every(function (typeCheck) {
          typeCheck = checkInSymbols(typeCheck);
          if (typeof typeCheck !== 'function') {//No I18n
            return false;
          }
          return typeCheck(value, true); // Constraint Failure is allowable here
        })
      }
    },
    dispose: function () {
      for (let key in this) {
        delete this[key];
      }
    }
  })
  const typeChecks = Object.assign(Object.create(manipulator), {
    boolean: function (value) {
      return typeof value === 'boolean';//No I18n
    },
    regex: function (value) {
      return (function () {
        // ? This is done to take the current RegExp Instance whenever the function runs
        return value instanceof RegExp;
      }());
    },
    function: function (value) {
      return typeof value === 'function';//No I18n
    }
  })
  typeChecks.$extend.string('string', {});
  typeChecks.$extend.number('number', {});
  typeChecks.$extend.array('array', {});
  typeChecks.$extend.object('object', {});
  return typeChecks;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkType);
// window[PACKAGE_NAME].checkType = checkType;
})();

Object(window["common-utils"]).checkType = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deepFreezer.js":
/*!****************************!*\
  !*** ./src/deepFreezer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepFreezer": () => (/* binding */ deepFreezer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deepFreezer = function (value) {
  /**
   * ## Freezer - <vignesh.prv> 
   * # Why we need this ?
   * - This is just a deep freezer function which we might need on sending data to users
   * 
   * TODO : Not Much of the validation is done here
   * * For basics requirements this is fine, but on large scale we might need 
   * * a better freezer function which validates its inputs and then freezes it
   * 
   **/
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(deepFreezer)
    } else {
      for (let key in value) {
        deepFreezer(value[key]);
      }
    }
  }
  return Object.freeze(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreezer);
// module.exports = deepFreezer;
// window[PACKAGE_NAME].deepFreezer = deepFreezer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/changeCase.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeCase": () => (/* binding */ changeCase),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepFreezer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFreezer.js */ "./src/deepFreezer.js");

const changeCase = (function () {//No I18n
  const descriptors = {
    writable: true,
    enumerable: false,
    configurable: false
  }
  const symbols = "~`!@#$%^&*(){}\\[\\]<>:;\"'|\\/?\\-_\\s\\n\\t\\."; //No I18n
  const regex = {
    words: new RegExp("(^|[" + symbols + "]+?)([a-zA-Z0-9]+)", "g"),//No I18n
    onlyLower: new RegExp("(^|[" + symbols + "]+?)([a-z]+)", "g"),//No I18n
    onlyUpper: new RegExp("(^|[" + symbols + "]+?)([A-Z]+)", "g")//No I18n
  }
  const manipulator = (0,_deepFreezer_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    $extend: function (name, callback) {
      // ? Once added can be re-written by cannot be deleted
      Object.defineProperty(
        API,
        name,
        Object.assign({
          value: callback
        }, descriptors)
      );
      return callback.bind(API);
    },
    upWord: function (word) {
      return word.toUpperCase();
    },
    lowWord: function (word) {
      return word.toLowerCase();
    },
    capFirst: function (word) {
      return this.upWord(word[0]) + this.lowWord(word.slice(1))
    },
    rmSpace: function (word) {
      return word.replace(/\s+/g, '')
    },
    prepare: function (word) {
      const splitCapsAndSmall = /([a-z])([A-Z])/g;
      const splitConsecutiveCaps = /([A-Z])([A-Z])/g;
      const symbolsAtEnd = new RegExp("([" + symbols + "]+)$")
      word = word.replace(splitCapsAndSmall, '$1 $2');
      word = word.replace(splitConsecutiveCaps,'$1 $2 ').trim();
      word = word.replace(symbolsAtEnd, '');
      return word;
    }
  })
  const toUpper = manipulator.upWord;
  const toLower = manipulator.lowWord;
  const toPascal = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const match = arguments[2];
      return this.capFirst(match);
    }.bind(this))
  }
  const toCamel = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return isAtFirst ? this.lowWord(match) : this.capFirst(match);
    }.bind(this))
  }
  const toConstant = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return (isAtFirst ? "" : "_") + this.upWord(match);
    }.bind(this))
  }
  const toSnake = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return (isAtFirst ? "" : "_") + this.lowWord(match);
    }.bind(this))
  }
  const toKebab = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const omitableFirstChars = ['','_'];
      const firstChar = arguments[1];
      const isAtFirst = omitableFirstChars.includes(firstChar);
      const match = arguments[2];
      return (isAtFirst ? firstChar : "-") + this.lowWord(match);
    }.bind(this))
  }
  const toCapital = function (str) {
    str = this.prepare(str);
    return str.replace(regex.words, function () {
      const isAtFirst = arguments[1] === '';
      const match = arguments[2];
      return (isAtFirst ? "" : " ") + this.capFirst(match);
    }.bind(this))
  }
  const API = Object.create(manipulator);

  const methods = {
    // ? methods have to be extended here
    toUpper: toUpper,
    toLower: toLower,
    toPascal: toPascal,
    toConstant: toConstant,
    toSnake: toSnake,
    toKebab: toKebab,
    toCamel: toCamel,
    toCapital: toCapital
  }
  for (const methodName in methods) {
    Object.defineProperty(
      API,
      methodName,
      Object.assign({
        value: methods[methodName]
      }, descriptors)
    );
  }
  return API;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeCase);
})();

Object(window["common-utils"]).changeCase = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/defineProp.js":
/*!***************************!*\
  !*** ./src/defineProp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defineProp": () => (/* binding */ defineProp)
/* harmony export */ });
const defineProp = function (options, object, value) {
  // - Getters and setters can only be done one by one
  const objToSet = {};
  delete options.value; // * Just in case ... 
  if (typeof object === 'string') {
    if (options.enumerable && typeof value === 'function') {
      value = value.bind(this)
    }
    const overridingObject = (value === undefined ? {} : { value });
    Object.assign(overridingObject, options);
    Object.defineProperty(this, object, overridingObject);
  } else if (!Array.isArray(object) && typeof object === 'object') {
    for (let key in object) {
      let valueToSet = object[key];
      if (options.enumerable && typeof object[key] === 'function') {
        valueToSet = valueToSet.bind(this)
      }
      objToSet[key] = Object.assign({
        value: valueToSet
      }, options);
    }
    Object.defineProperties(this, objToSet);
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProp);
// module.exports = defineProp;
// window[PACKAGE_NAME].defineProp = defineProp;

/***/ }),

/***/ "./src/descriptorCodes.js":
/*!********************************!*\
  !*** ./src/descriptorCodes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "descriptorCodes": () => (/* binding */ descriptorCodes)
/* harmony export */ });
const descriptorCodes = (function () {
  const constructOptionForCode = function (value) {
    const options = [
      'writable',
      'enumerable',
      'configurable'
    ]
    this[value] = options.reduce(function (acc, option) {
      if (acc[option] = (value >= this[option])) {
        value -= this[option]
      }
      return acc;
    }.bind(this), {})
  }
  const codes = Object.create(Object.defineProperties({}, {
    writable: { value: 4 },
    enumerable: { value: 2 },
    configurable: { value: 1 }
  }));
  for (let i = 0; i <= 7; i++) {
    constructOptionForCode.call(codes, i);
  }
  return codes;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (descriptorCodes);
// module.exports = descriptorCodes;
// window[PACKAGE_NAME].descriptorCodes = descriptorCodes;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/devLog.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "devLog": () => (/* binding */ devLog)
/* harmony export */ });
/* harmony import */ var _defineProp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProp.js */ "./src/defineProp.js");
/* harmony import */ var _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptorCodes.js */ "./src/descriptorCodes.js");


const devLog = (function () {
  /**
   * # DevLog ( Logs which helps to debug ) <vignesh.prv>
   * ## Why we need this ?
   * - If there is an issue in production (or) any deployed instance ,we will have a 
   * - hard time in finding the place from where it started to go wrong
   * - This will help us at that time
   * - Logging should be done whenever necessary 
   * 
   * ## Where these logs will be present ?
   * - `CONSOLE.DEBUG` is used for the logging purpose , so setting the log level VERBOSE
   * - will display those logs
   * 
   * ## How to start & stop logging ?
   * - startDebuggerMode
   * - stopDebuggerMode
   * 
   * ## Why Time is logged ?
   * - For browsers , other than Chromium, time will not be displayed in logs
   * - Time in logs can be activated by making logTime as True 
   * ? eg : startDebuggerMode({ logTime : true })
   * 
   * ## What will Filter do ?
   * - It display only the tags which are mentioned for log
   * ? eg : startDebuggerMode({ filter : ["warn","error"] })
   * 
  **/
  let isDebuggerActive = false;
  const start = function (object) {
    isDebuggerActive = true;
    Object.assign(internalFuncs, object);
  }
  const stop = function () {
    isDebuggerActive = false;
  }
  const initializeWith = function (object) {
    //* Further APIs can be extended here
    object.startDebuggerMode = start;
    object.stopDebuggerMode = stop;
  }
  const internalFuncs = {
    initializeWith,
    logTime: false,
    filter: []
  }
  const defaultStylesFor = {
    label: {
      color: "white",
      padding: "5px",
      "text-transform": "uppercase",
      "font-size": "12px"
    },
    date: {
      color: "white",
      padding: "5px",
      "background-color": "#00818a",
      "font-size": "12px",
      "margin-right": "2px"
    }
  }
  const genStyleString = function (object) {
    let string = "";
    for (let key in object) {
      string += key + ":" + object[key] + ";";
    }
    return string;
  }
  const outputTypes = {
    error: { "background-color": "#f44336" },
    warn: { "background-color": "#ff9800" },
    info: { "background-color": "#1e90ff" }
  }
  const showMsgToDev = function () {
    const args = Array.from(arguments);
    console.debug.apply(null, args);
  }
  const getTime = function () {
    const date = new Date();
    const addZero = function (num) {
      return ("0" + num).slice(-2);
    }
    const hour = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    return "%c" + ([
      addZero(hour),
      addZero(minutes),
      addZero(seconds),
      milliseconds
    ].join(":"));
  }
  const constructMsg = function () {
    if (isDebuggerActive) {
      const args = Array.from(arguments);
      let label = "%c" + this.toUpperCase();//No I18n
      const styleObject = Object.assign({}, defaultStylesFor.label, outputTypes[this]);
      const styleString = genStyleString(styleObject)
      const additionalArgs = [];
      if (API.logTime) {
        additionalArgs.push(getTime() + label, genStyleString(defaultStylesFor.date), styleString);
      } else {
        additionalArgs.push(label, styleString);
      }
      if (API.filter.length === 0 || API.filter.includes(this.toString())) {
        additionalArgs.push.apply(additionalArgs, args);
        showMsgToDev.apply(this, additionalArgs);
      }
    }
  }
  const API = Object.create(internalFuncs)
  const methods = Object.keys(outputTypes).reduce(function (acc, type) {
    acc[type] = constructMsg.bind(type);
    return acc;
  }, {});
  return _defineProp_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(API, _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_1__["default"][6], methods)
}());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (devLog);
// module.exports = devLog;
// window[PACKAGE_NAME].devLog = devLog;

})();

Object(window["common-utils"]).devLog = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkType.js":
/*!**************************!*\
  !*** ./src/checkType.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkType": () => (/* binding */ checkType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepFreezer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFreezer */ "./src/deepFreezer.js");

/**
 * ## Check Type ( type checking library ) <vignesh.prv>
 * # Why we need this ?
 * - Increasingly we are checking types of user inputs and various values
 * - This will help us to register a type pattern well before and thus 
 * - making it easier to check the input
 * 
 * * Example : 
 * - If there is a input which is of type object and has some required keys 
 * - and some allowable keys ( if present , they have to be type checked )
 * 
 * ? tool = {
 * ?  label : String, // Required
 * ?  callback : Function, // Required
 * ?  title : String // Allowable
 * ? }
 * 
 * - We can create a type 'tool' for the above configuration, thus now we can 
 * - check for derived type 'tool'.
 * 
 * ! This will be more helpful when the types are subjected to change
 * ! Error message to the user can be verbose from this
 * 
 * # What if the value can have more than one structure ?
 * - Here, in checktype there are 2 logical operator APIs are available
 * - 'OR' & 'AND' which makes it easy to incorporate more than one structure
 * - This also helps us to atomize the types and reuse the existing type checks
 * 
 * # What is API "later" means ?
 * - As the name suggest the API "later" will get registered later.
 * - Normally, when we extend a existing type, the function on which the extension is made has 
 * - to be present.
 * - But in this case, There is no need for such thing,On registering this later will bind an 
 * - Symbol of type's label 
 * - Only on performing the check function, this Symbol will be parsed and if there is no such
 * - type registered the function will be ignored under the hood and 'false' will be returned
 * 
 * ! Once a type is registered it cannot be re-registered and delete
 * ! It will be available windowly once registered
 * 
 * # What if we need more control over the types ?
 * - On registering , There is a third argument which accepts a callback, from which more
 * - customized checks can be done
 * 
 */

const checkType = (function () {//No I18n
  const errorMsgs = {
    //ignorei18n_start
    MISSING_KEY: function (key, object) {
      object = typeof object === 'string' ? object : JSON.stringify(object, null, 4)
      return key + " is a required key in the object.\nStringified Object for reference :\n" + object
    },
    TYPE_MUST_BE: function (type, key, additional) {
      return 'The value for the ' + key + ' should be of type ' + (Array.isArray(type) ? type.join(' | ') : type) + '. ' + (additional || '')
    },
    INVALID_VALUE: function (key, object) {
      return 'Value for ' + key + ' is invalid, Source object : ' + JSON.stringify(object, null, 2)
    },
    VALUE_EXISTS: function (type, object) {
      return type + ' already exists' + (object && ' in ' + object) + '. Please try another name'
    }
    //ignorei18n_end
  }
  // const console = 'console';//No I18n
  // const logError = window[console].error;//No I18n
  const symbolMap = {};
  let skipExistsCheck = false;
  const checkInSymbols = function (mightBeSymbol) {
    if (typeof mightBeSymbol === 'symbol') {//No I18n
      const type = symbolMap[mightBeSymbol];
      return typeChecks[type] || mightBeSymbol;
    }
    return mightBeSymbol;
  }
  const basicTypeChecks = {
    STRING: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'string') {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'nonEmptyString': {
                if (typeof constraint === 'boolean') {
                  if (constraint) {
                    valid = value.trim().length > 0;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'length': {
                if (typeof constraint === 'function') {//No I18n
                  if (!constraint(value.length)) {
                    valid = false;
                  }
                } else if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint !== value.length) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'allowableValues': {
                if (Array.isArray(constraint)) {
                  if (!constraint.includes(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'matchRegex': {
                if (constraint instanceof RegExp) {
                  if (!constraint.test(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    NUMBER: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'number') {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'min': {
                if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint > value) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'max': {
                if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint < value) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'whole': {
                if (typeof constraint === 'boolean' && constraint) {//No I18n
                  if ((value - Math.floor(value)) !== 0) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'positive': {
                if (typeof constraint === 'boolean') {//No I18n
                  if (constraint && value < 0) {
                    valid = false;
                  }
                  if (!constraint && value > 0) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'allowableValues': {
                if (Array.isArray(constraint)) {
                  if (!constraint.includes(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    ARRAY: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (!Array.isArray(value)) {
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'size': {
                if (typeof constraint === 'function') {//No I18n
                  if (!constraint(value.length)) {
                    valid = false;
                  }
                } else if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint !== value.length) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'instanceOf': {
                if (typeof constraint === 'function') {//No I18n
                  valid = value instanceof constraint
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'every': {
                if (typeof constraint === 'function') {
                  valid = value.every(function (eachValue) { return constraint(eachValue) });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'some': {
                if (typeof constraint === 'function') {
                  valid = value.some(function (eachValue) { return constraint(eachValue) });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    OBJECT: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'object' || Array.isArray(value)) {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'requiredKeys': {
                if (Array.isArray(constraint)) {//No I18n
                  valid = constraint.every(function (keyName) {
                    return value.hasOwnProperty(keyName)
                  });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'instanceOf': {
                if (typeof constraint === 'function') {//No I18n
                  valid = value instanceof constraint
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'required': {
                if (typeChecks.object(constraint)) {
                  for (let keyName in constraint) {
                    if (value.hasOwnProperty(keyName)) {
                      const validatorFn = constraint[keyName];
                      if (typeChecks.function(validatorFn)) {
                        if (!validatorFn(value[keyName])) {
                          valid = false;
                          break;
                        }
                      } else if (constraintFailure) {
                        valid = false;
                        break;
                      }
                    } else {
                      // logError(errorMsgs.MISSING_KEY(keyName, value));
                      valid = false;
                      break;
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                }
              }
                break;
              case 'allowable': {
                if (typeChecks.object(constraint)) {
                  for (let keyName in constraint) {
                    if (value.hasOwnProperty(keyName)) {
                      const validatorFn = constraint[keyName];
                      if (typeChecks.function(validatorFn)) {
                        if (!validatorFn(value[keyName])) {
                          // logError(errorMsgs.INVALID_VALUE(keyName, value));
                          valid = false;
                          break;
                        }
                      } else if (constraintFailure) {
                        valid = false;
                        break;
                      }
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('allowable', 'object'));//No I18n
                }
              }
                break;
              case 'everyValue': {
                if (typeof constraint === 'function') {//No I18n
                  valid = Object.keys(value).every(function (key) {
                    const eachValue = value[key];
                    return constraint(eachValue);
                  })
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'prototype': {
                if (typeChecks.object(constraint)) {
                  if (constraint.required) {
                    const subConstraint = constraint.required;
                    if (typeChecks.object(subConstraint)) {
                      for (let keyName in subConstraint) {
                        if (keyName in value) {
                          const validatorFn = subConstraint[keyName];
                          if (typeChecks.function(validatorFn)) {
                            if (!validatorFn(value[keyName])) {
                              valid = false;
                              break;
                            }
                          } else if (constraintFailure) {
                            valid = false;
                            break;
                          }
                        } else {
                          // logError(errorMsgs.MISSING_KEY(keyName, value));
                          valid = false;
                          break;
                        }
                      }
                    } else if (constraintFailure) {
                      valid = false;
                    } else {
                      throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                    }
                  }
                  if (constraint.allowable) {
                    const subConstraint = constraint.allowable;
                    if (typeChecks.object(subConstraint)) {
                      for (let keyName in subConstraint) {
                        if (keyName in value) {
                          const validatorFn = subConstraint[keyName];
                          if (typeChecks.function(validatorFn)) {
                            if (!validatorFn(value[keyName])) {
                              // logError(errorMsgs.INVALID_VALUE(keyName, value));
                              valid = false;
                              break;
                            }
                          } else if (constraintFailure) {
                            valid = false;
                            break;
                          }
                        }
                      }
                    } else if (constraintFailure) {
                      valid = false;
                    } else {
                      throw new Error(errorMsgs.TYPE_MUST_BE('allowable', 'object'));//No I18n
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                }
              }
                break;
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    }
  }
  const extender = function (name, options, extendFrom, callback) {
    if (!skipExistsCheck && this[name]) {
      throw new Error(errorMsgs.VALUE_EXISTS(name, 'Type Checks'));//No I18n
    } else if (basicTypeChecks.hasOwnProperty(extendFrom)) {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string. Found ' + name);//No I18n
      } else {
        this[name] = basicTypeChecks[extendFrom](options, callback)
        return this[name];
      }
    }
    return false;
  }
  const safeExtender = function (name, options, extendFrom, callback) {
    if (this[name]) {
      return this[name];
    } else {
      skipExistsCheck = true;
      const output = extender.call(this, name, options, extendFrom, callback);
      skipExistsCheck = false;
      return output;
    }
  }
  for (let basicType in basicTypeChecks) {
    extender[basicType.toLowerCase()] = function (name, options, callback) {
      return this.call(typeChecks, name, options, basicType, callback);
    }
    safeExtender[basicType.toLowerCase()] = function (name, options, callback) {
      return this.call(typeChecks, name, options, basicType, callback);
    }
  }
  const manipulator = (0,_deepFreezer__WEBPACK_IMPORTED_MODULE_0__["default"])({
    $extend: extender,
    $safeExtend: safeExtender,
    later: function (typeName) {
      const symbol = Symbol(typeName);
      symbolMap[symbol] = typeName;
      return symbol;
    },
    or: function () {
      const args = Array.from(arguments);
      return function (value) {
        return args.some(function (typeCheck) {
          typeCheck = checkInSymbols(typeCheck);
          if (typeof typeCheck !== 'function') {//No I18n
            return false;
          }
          return typeCheck(value, true); // Constraint Failure is allowable here
        })
      }
    },
    and: function () {
      const args = Array.from(arguments);
      return function (value) {
        return args.every(function (typeCheck) {
          typeCheck = checkInSymbols(typeCheck);
          if (typeof typeCheck !== 'function') {//No I18n
            return false;
          }
          return typeCheck(value, true); // Constraint Failure is allowable here
        })
      }
    },
    dispose: function () {
      for (let key in this) {
        delete this[key];
      }
    }
  })
  const typeChecks = Object.assign(Object.create(manipulator), {
    boolean: function (value) {
      return typeof value === 'boolean';//No I18n
    },
    regex: function (value) {
      return (function () {
        // ? This is done to take the current RegExp Instance whenever the function runs
        return value instanceof RegExp;
      }());
    },
    function: function (value) {
      return typeof value === 'function';//No I18n
    }
  })
  typeChecks.$extend.string('string', {});
  typeChecks.$extend.number('number', {});
  typeChecks.$extend.array('array', {});
  typeChecks.$extend.object('object', {});
  return typeChecks;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkType);
// window[PACKAGE_NAME].checkType = checkType;

/***/ }),

/***/ "./src/deepFreezer.js":
/*!****************************!*\
  !*** ./src/deepFreezer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepFreezer": () => (/* binding */ deepFreezer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deepFreezer = function (value) {
  /**
   * ## Freezer - <vignesh.prv> 
   * # Why we need this ?
   * - This is just a deep freezer function which we might need on sending data to users
   * 
   * TODO : Not Much of the validation is done here
   * * For basics requirements this is fine, but on large scale we might need 
   * * a better freezer function which validates its inputs and then freezes it
   * 
   **/
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(deepFreezer)
    } else {
      for (let key in value) {
        deepFreezer(value[key]);
      }
    }
  }
  return Object.freeze(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreezer);
// module.exports = deepFreezer;
// window[PACKAGE_NAME].deepFreezer = deepFreezer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });
/* harmony import */ var _checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkType.js */ "./src/checkType.js");

const pubsub = function () {//No I18n
  const type = (0,_checkType_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const isNonEmptyString = type.$extend.string('nonEmptyString', { nonEmptyString: true });
  const isArrayOfNonEmptyString = type.$extend.array('arrayOfNonEmptyString', { every: isNonEmptyString });
  const positiveInteger = type.$extend.number('positiveInteger', { positive: true, whole: true, min: 1 });
  const securedChannelConfig = type.$extend.object('securedChannelConfig', {
    everyValue: positiveInteger
  });
  const executeCallback = function (callback, args) {
    Function.prototype.apply.call(callback, undefined, args);
  }
  const pubsubInstance = function () {
    const events = {};
    const fire = function (eventName) {
      if (events.hasOwnProperty(eventName)) {
        const args = Array.from(arguments).slice(1);
        const callbacks = events[eventName];
        // - These callbacks can be wrapped with event propagation preventer "if required"
        callbacks.priority.forEach(function (callback) {
          executeCallback(callback, args);
        });
        callbacks.standard.forEach(function (callback) {
          executeCallback(callback, args);
        });
      }
    }
    const createDisposerFor = function (eventName, callback, givePriority) {
      return {
        dispose: function dispose () {
          const eventsObject = events[eventName];
          const arrayOfCallbacks = eventsObject ? eventsObject[(givePriority ? 'priority' : 'standard')] : null;
          if (arrayOfCallbacks) {
            const indexOfCallback = arrayOfCallbacks.indexOf(callback);
            arrayOfCallbacks.splice(indexOfCallback, 1);
          }
        }
      }
    }
    const addToEventsList = function (eventName, callback, givePriority) {
      if (!events[eventName]) {
        events[eventName] = {
          priority: [],
          standard: []
        };
      }
      if (type.function(callback)) {
        if (givePriority === undefined || type.boolean(givePriority)) {
          if (!events[eventName].priority.includes(callback) ||
            !events[eventName].standard.includes(callback)) { // Just a rare safety check
            events[eventName][(givePriority ? 'priority' : 'standard')].push(callback); //No I18n
            return createDisposerFor(eventName, callback, givePriority);
          }
        } else {
          throw new Error('Priority should be of type boolean');//No I18n
        }
      } else {
        throw new Error('Callback is not a function.\nEvents should be subscribed with a callback function');//No I18n
      }

    }
    const subscribeTo = function (eventNames, callback, givePriority) {
      givePriority = givePriority || false;
      if (isNonEmptyString(eventNames)) {
        return addToEventsList(eventNames, callback, givePriority);
      } else if (isArrayOfNonEmptyString(eventNames)) {
        return eventNames.reduce(function (acc, eventName) {
          acc[eventName] = addToEventsList(eventName, callback, givePriority);
          return acc;
        }, {});
      } else {
        throw new Error('Event Names are expected to be a Non Empty String (or) Array Of Non Empty Strings');//No I18n
      }
    }
    const manipulator = {
      _events: events
    }
    const API = Object.create(manipulator);
    Object.assign(API, {
      fire,
      subscribeTo
    });
    return API;
  }
  const securedPubSubInstance = function (instance) {
    const actualPubsub = pubsubInstance();
    const secured = Object.create(actualPubsub);
    const fireQueue = {};
    const isAllMembersConnected = function () {
      for (let key in instance.currentConfig) {
        if (instance.currentConfig[key] !== 0) {
          return false;
        }
      }
      return true;
    }
    const overrideSubscribeTo = function (event, callback) {
      const args = Array.from(arguments);
      if (fireQueue[event]) {
        fireQueue[event].forEach(function (savedArgs) {
          executeCallback(callback, savedArgs.slice(1));
        });
      } else {
        actualPubsub.subscribeTo.apply(actualPubsub, args);
      }
    }
    const overrideFire = function (event) {
      const args = Array.from(arguments);
      if (isAllMembersConnected()) {
        actualPubsub.fire.apply(actualPubsub, args);
      } else {
        if (!fireQueue[event]) {
          fireQueue[event] = [];
        }
        fireQueue[event].push(args);
      }
    }
    const methodsToOverride = {
      fire: overrideFire,
      subscribeTo: overrideSubscribeTo
    }
    Object.assign(secured, methodsToOverride)
    return secured;
  }
  const securedChannel = (function () {
    const channels = {};
    const registerConfigurationOfSecuredChannel = function (label, configuration) {
      const configsToRegister = {};
      if (type.string(label)) {
        if (securedChannelConfig(configuration)) {
          configsToRegister[label] = configuration;
        } else {
          throw new Error('Configuration for ' + label + ' is not valid, All keys should have a positive integer value');//No I18n
        }
      } else if (type.object(label)) {
        for (let key in label) {
          const config = label[key];
          if (!securedChannelConfig(config)) {
            throw new Error('Configuration for ' + key + ' is not valid, All keys should have a positive integer value');//No I18n
          } else {
            configsToRegister[key] = config;
          }
        }
      } else {
        throw new Error('Expected , label must be a string (or) object. Found label : ' + label);
      }
      for (let key in configsToRegister) {
        if (channels.hasOwnProperty(key)) {
          throw new Error('Entry for ' + key + ' already exists in config, Try someother name');
        } else {
          channels[key] = {
            config: configsToRegister[key],
            instances: {}
          };
          channels[key].dispose = (function (key) {
            return function () {
              const instances = channels[key].instances;
              for (let key in instances) {
                delete instances[key];
              }
              delete channels[key];
            }
          }(key));
        }
      }
    }
    const listAllRegisteredConfigs = function () {
      return Object.keys(channels);
    }
    const createConnectionToSecuredChannel = function (id, channelLabel, memberLabel) {
      if (channels[channelLabel]) {
        const channel = channels[channelLabel];
        const instances = channel.instances;
        if (!instances[id]) {
          instances[id] = {
            currentConfig: Object.assign({}, channel.config),
            members: {},
          }
          instances[id].pubsubInstance = securedPubSubInstance(instances[id]);
          instances[id].reset = (function (id) {
            return function () {
              const members = instances[id].members;
              for (let id in members) {
                delete members[id];
              }
              instances[id].currentConfig = Object.assign({}, channel.config)
            }
          }(id));
        }
        const instance = instances[id];
        if (instance.currentConfig[memberLabel]) {
          const isSlotForMemberAvailable = instance.currentConfig[memberLabel] > 0;
          if (isSlotForMemberAvailable) {
            const index = (instance.currentConfig[memberLabel]--);
            const keyName = memberLabel + '_' + index;
            instance[keyName] = true;
            return instance.pubsubInstance;
          } else {
            throw new Error('No Slot for' + memberLabel + ' is available in the config of ' + channelLabel);
          }
        } else {
          throw new Error('Entry for ' + memberLabel + ' is not found in the config of ' + channelLabel);
        }
      } else {
        throw new Error('Entry for ' + channelLabel + ' is not found in the secured channels list');
      }
    }
    const manipulator = {
      getChannelFromId: function (id) {
        return channels[id];
      }
    };
    const API = Object.create(manipulator);
    const methods = {
      getConnection: createConnectionToSecuredChannel,
      registerConfig: registerConfigurationOfSecuredChannel,
      listConfigs: listAllRegisteredConfigs
    }
    Object.assign(API, methods);
    return API;
  }());
  const API = pubsubInstance();
  Object.assign(API, {
    securedChannel: securedChannel
  });
  return API;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);
// window[PACKAGE_NAME].pubsub = pubsub;
})();

Object(window["common-utils"]).pubsub = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/path.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "path": () => (/* binding */ path)
/* harmony export */ });
const path = (function () {
  const SLASH_CHAR_CODE = 47;
  const DOT_CHAR_CODE = 46;
  const DOT = '.';//No I18n
  const SLASH = '/';//No I18n
  function isString (path) {
    if (typeof path !== 'string') {
      throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
    }
  }
  function isAbsolute (path) {
    isString(path);
    return path.length > 0 && path.charCodeAt(0) === SLASH_CHAR_CODE;// Slash
  }
  function parse (path) {
    isString(path);
    const output = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };
    if (path.length === 0) {
      return output;
    }
    let code = path.charCodeAt(0);
    const isAbsolute = code === SLASH_CHAR_CODE;
    let start;
    if (isAbsolute) {
      output.root = SLASH;
      start = 1;
    } else {
      start = 0;
    }
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    let preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === SLASH_CHAR_CODE) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === DOT_CHAR_CODE) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1
        };
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) {
          output.base = output.name = path.slice(1, end);
        } else {
          output.base = output.name = path.slice(startPart, end);
        }
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        output.name = path.slice(1, startDot);
        output.base = path.slice(1, end);
      } else {
        output.name = path.slice(startPart, startDot);
        output.base = path.slice(startPart, end);
      }
      output.ext = path.slice(startDot, end);
    }

    if (startPart > 0) {
      output.dir = path.slice(0, startPart - 1)
    }
    else if (isAbsolute) {
      output.dir = SLASH;
    }

    return output;
  }
  function normalizeStringPosix (path, allowAboveRoot) {
    let result = '';
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code;
    for (let i = 0; i <= path.length; ++i) {
      if (i < path.length) {
        code = path.charCodeAt(i);
      } else if (code === SLASH_CHAR_CODE) {
        // NOOP
        break;
      } else {
        code = SLASH_CHAR_CODE;
      }
      if (code === SLASH_CHAR_CODE) {
        if (lastSlash === i - 1 || dots === 1) {
          lastSlash = i;
          dots = 0;
        } else if (lastSlash !== i - 1 && dots === 2) {
          if (result.length < 2 ||
            lastSegmentLength !== 2 ||
            result.charCodeAt(result.length - 1) !== DOT_CHAR_CODE ||
            result.charCodeAt(result.length - 2) !== DOT_CHAR_CODE) {
            if (result.length > 2) {
              let lastSlashIndex = result.lastIndexOf(SLASH);
              if (lastSlashIndex !== result.length - 1) {
                if (lastSlashIndex === -1) {
                  result = '';
                  lastSegmentLength = 0;
                } else {
                  result = result.slice(0, lastSlashIndex);
                  lastSegmentLength = result.length - 1 - result.lastIndexOf(SLASH);
                }
                lastSlash = i;
                dots = 0;
                continue;
              }
            } else if (result.length === 2 || result.length === 1) {
              result = '';
              lastSegmentLength = 0;
              lastSlash = i;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (result.length > 0) {
              result += '/..';
            } else {
              result = '..';
            }
            lastSegmentLength = 2;
          }
          lastSlash = i;
          dots = 0;
        } else {
          if (result.length > 0) {
            result += SLASH + path.slice(lastSlash + 1, i);
          }
          else {
            result = path.slice(lastSlash + 1, i);
          }
          lastSegmentLength = i - lastSlash - 1;
          lastSlash = i;
          dots = 0;
        }
      } else if (code === DOT_CHAR_CODE && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return result;
  }
  function normalize (path) {
    isString(path);

    if (path.length === 0) {
      return DOT;
    }

    let isAbsolute = path.charCodeAt(0) === SLASH_CHAR_CODE;
    let trailingSeparator = path.charCodeAt(path.length - 1) === SLASH_CHAR_CODE;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) {
      path = DOT;
    }
    if (path.length > 0 && trailingSeparator) {
      path += SLASH;
    }

    if (isAbsolute) return SLASH + path;
    return path;
  }
  function join () {
    if (arguments.length === 0) {
      return DOT;
    }
    let joined = '';
    for (let i = 0; i < arguments.length; ++i) {
      let arg = arguments[i];
      isString(arg);
      if (arg.length > 0) {
        joined += ((joined === '') ? arg : (SLASH + arg));
      }
    }
    if (joined === '') {
      return DOT;
    }
    return normalize(joined);
  }
  function relative (from, to) {
    isString(from);
    isString(to);

    if (from === to) {
      return '';//No I18n
    }

    // console.log('Before',from)
    // from = resolve(from);
    // console.log('After',from)
    // to = resolve(to);

    // if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== SLASH_CHAR_CODE) {
        break;
      }
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== SLASH_CHAR_CODE) {
        break;
      }
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === SLASH_CHAR_CODE) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === SLASH_CHAR_CODE) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode) {
        break;
      } else if (fromCode === SLASH_CHAR_CODE) {
        lastCommonSep = i;
      }
    }

    var out = '';//No I18n
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === SLASH_CHAR_CODE) {
        if (out.length === 0) {
          out += '..';
        } else {
          out += '/..';
        }
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0) {
      return out + to.slice(toStart + lastCommonSep);
    } else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === SLASH_CHAR_CODE) {
        ++toStart;
      }
      return to.slice(toStart);
    }
  }

  return {
    join,
    isAbsolute,
    normalize,
    parse,
    relative
  }
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (path);
Object(window["common-utils"]).path = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/uuid.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
const uuid = (function () {
  const MINIMUM_CHARS_FOR_FORMAT_LABEL = 3;
  const HEX_VALUE = 16;
  const create = function (format) {
    if (format.match(/[xX]/g).length < MINIMUM_CHARS_FOR_FORMAT_LABEL) {
      throw new Error(
        //ignorei18n_start
        'For Format atleast ' +
        MINIMUM_CHARS_FOR_FORMAT_LABEL +
        ' char should be X|x'
        //ignorei18n_end
      );
    } else {
      return function uuidGenerator() {
        let date = new Date().getTime();
        const getRandom = function () {
          return (date + Math.random() * HEX_VALUE) % HEX_VALUE | 0;
        };
        const uuid = format.replace(/[xX]/g, function (char) {
          date = Math.floor(date / HEX_VALUE);
          return ((getRandom() * getRandom()) | 0x0)
            .toString(HEX_VALUE)
            .slice(0, 1);
        });
        return uuid;
      };
    }
  };
  const createFormat = function (format, id, constructFn, constructEverytime) {
    const defaultConstructFn = function (format, id) {
      return id + '_' + format;
    }
    constructFn = constructFn || defaultConstructFn;
    if (
      format.trim() &&
      /[xX]/g.test(format) &&
      id &&
      typeof format === 'string' && //No I18n
      typeof id === 'string' //No I18n
    ) {
      if (availableFormats.hasOwnProperty(id)) {
        throw new Error(id + '-> This ID already exists. Try a different one'); //No I18n
      } else {
        if (constructEverytime) {
          availableFormats[id] = function () {
            const args = Array.from(arguments);
            const allArgs = [].concat(format, id, args);
            const actualFormat = constructFn.apply(null, allArgs);
            return create(actualFormat)();
          }
        } else {
          availableFormats[id] = create(constructFn(format, id));//No I18n
        }
        availableFormats[id].dispose = function (id) {
          delete availableFormats[id];
        }.bind(null, id);
        return availableFormats[id];
      }
    } else {
      throw new Error(
        //ignorei18n_start
        'Format & ID are required values and it has to be of type string. Found Format : ' +
        format +
        ', ID :' +
        id +
        '.'
        //ignorei18n_end
      );
    }
  };
  const handler = {
    createFormat
  };
  const availableFormats = Object.create(handler);
  return availableFormats;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuid);
// window[PACKAGE_NAME].uuid = uuid;
Object(window["common-utils"]).uuid = __webpack_exports__["default"];
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkType.js":
/*!**************************!*\
  !*** ./src/checkType.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkType": () => (/* binding */ checkType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deepFreezer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deepFreezer */ "./src/deepFreezer.js");

/**
 * ## Check Type ( type checking library ) <vignesh.prv>
 * # Why we need this ?
 * - Increasingly we are checking types of user inputs and various values
 * - This will help us to register a type pattern well before and thus 
 * - making it easier to check the input
 * 
 * * Example : 
 * - If there is a input which is of type object and has some required keys 
 * - and some allowable keys ( if present , they have to be type checked )
 * 
 * ? tool = {
 * ?  label : String, // Required
 * ?  callback : Function, // Required
 * ?  title : String // Allowable
 * ? }
 * 
 * - We can create a type 'tool' for the above configuration, thus now we can 
 * - check for derived type 'tool'.
 * 
 * ! This will be more helpful when the types are subjected to change
 * ! Error message to the user can be verbose from this
 * 
 * # What if the value can have more than one structure ?
 * - Here, in checktype there are 2 logical operator APIs are available
 * - 'OR' & 'AND' which makes it easy to incorporate more than one structure
 * - This also helps us to atomize the types and reuse the existing type checks
 * 
 * # What is API "later" means ?
 * - As the name suggest the API "later" will get registered later.
 * - Normally, when we extend a existing type, the function on which the extension is made has 
 * - to be present.
 * - But in this case, There is no need for such thing,On registering this later will bind an 
 * - Symbol of type's label 
 * - Only on performing the check function, this Symbol will be parsed and if there is no such
 * - type registered the function will be ignored under the hood and 'false' will be returned
 * 
 * ! Once a type is registered it cannot be re-registered and delete
 * ! It will be available windowly once registered
 * 
 * # What if we need more control over the types ?
 * - On registering , There is a third argument which accepts a callback, from which more
 * - customized checks can be done
 * 
 */

const checkType = (function () {//No I18n
  const errorMsgs = {
    //ignorei18n_start
    MISSING_KEY: function (key, object) {
      object = typeof object === 'string' ? object : JSON.stringify(object, null, 4)
      return key + " is a required key in the object.\nStringified Object for reference :\n" + object
    },
    TYPE_MUST_BE: function (type, key, additional) {
      return 'The value for the ' + key + ' should be of type ' + (Array.isArray(type) ? type.join(' | ') : type) + '. ' + (additional || '')
    },
    INVALID_VALUE: function (key, object) {
      return 'Value for ' + key + ' is invalid, Source object : ' + JSON.stringify(object, null, 2)
    },
    VALUE_EXISTS: function (type, object) {
      return type + ' already exists' + (object && ' in ' + object) + '. Please try another name'
    }
    //ignorei18n_end
  }
  // const console = 'console';//No I18n
  // const logError = window[console].error;//No I18n
  const symbolMap = {};
  let skipExistsCheck = false;
  const checkInSymbols = function (mightBeSymbol) {
    if (typeof mightBeSymbol === 'symbol') {//No I18n
      const type = symbolMap[mightBeSymbol];
      return typeChecks[type] || mightBeSymbol;
    }
    return mightBeSymbol;
  }
  const basicTypeChecks = {
    STRING: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'string') {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'nonEmptyString': {
                if (typeof constraint === 'boolean') {
                  if (constraint) {
                    valid = value.trim().length > 0;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'length': {
                if (typeof constraint === 'function') {//No I18n
                  if (!constraint(value.length)) {
                    valid = false;
                  }
                } else if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint !== value.length) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'allowableValues': {
                if (Array.isArray(constraint)) {
                  if (!constraint.includes(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'matchRegex': {
                if (constraint instanceof RegExp) {
                  if (!constraint.test(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    NUMBER: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'number') {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'min': {
                if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint > value) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'max': {
                if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint < value) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'whole': {
                if (typeof constraint === 'boolean' && constraint) {//No I18n
                  if ((value - Math.floor(value)) !== 0) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'positive': {
                if (typeof constraint === 'boolean') {//No I18n
                  if (constraint && value < 0) {
                    valid = false;
                  }
                  if (!constraint && value > 0) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'allowableValues': {
                if (Array.isArray(constraint)) {
                  if (!constraint.includes(value)) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    ARRAY: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (!Array.isArray(value)) {
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'size': {
                if (typeof constraint === 'function') {//No I18n
                  if (!constraint(value.length)) {
                    valid = false;
                  }
                } else if (typeof constraint === 'number' && constraint === constraint) {//No I18n
                  if (constraint !== value.length) {
                    valid = false;
                  }
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'instanceOf': {
                if (typeof constraint === 'function') {//No I18n
                  valid = value instanceof constraint
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'every': {
                if (typeof constraint === 'function') {
                  valid = value.every(function (eachValue) { return constraint(eachValue) });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'some': {
                if (typeof constraint === 'function') {
                  valid = value.some(function (eachValue) { return constraint(eachValue) });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    },
    OBJECT: function (baseConstraints, callback) {
      baseConstraints = baseConstraints ? baseConstraints : {};
      return function (value, runTimeConstraints, onConstraintFailure) {
        const constraints = Object.assign({}, baseConstraints, runTimeConstraints);
        const constraintFailure = typeof onConstraintFailure === 'boolean' ? onConstraintFailure : false;//No I18n
        if (typeof value !== 'object' || Array.isArray(value)) {//No I18n
          return false;
        }
        let valid = true;
        for (let key in constraints) {
          const constraint = checkInSymbols(constraints[key]);
          if (typeof constraint !== 'symbol') {//No I18n
            switch (key) {
              case 'requiredKeys': {
                if (Array.isArray(constraint)) {//No I18n
                  valid = constraint.every(function (keyName) {
                    return value.hasOwnProperty(keyName)
                  });
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'instanceOf': {
                if (typeof constraint === 'function') {//No I18n
                  valid = value instanceof constraint
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'required': {
                if (typeChecks.object(constraint)) {
                  for (let keyName in constraint) {
                    if (value.hasOwnProperty(keyName)) {
                      const validatorFn = constraint[keyName];
                      if (typeChecks.function(validatorFn)) {
                        if (!validatorFn(value[keyName])) {
                          valid = false;
                          break;
                        }
                      } else if (constraintFailure) {
                        valid = false;
                        break;
                      }
                    } else {
                      // logError(errorMsgs.MISSING_KEY(keyName, value));
                      valid = false;
                      break;
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                }
              }
                break;
              case 'allowable': {
                if (typeChecks.object(constraint)) {
                  for (let keyName in constraint) {
                    if (value.hasOwnProperty(keyName)) {
                      const validatorFn = constraint[keyName];
                      if (typeChecks.function(validatorFn)) {
                        if (!validatorFn(value[keyName])) {
                          // logError(errorMsgs.INVALID_VALUE(keyName, value));
                          valid = false;
                          break;
                        }
                      } else if (constraintFailure) {
                        valid = false;
                        break;
                      }
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('allowable', 'object'));//No I18n
                }
              }
                break;
              case 'everyValue': {
                if (typeof constraint === 'function') {//No I18n
                  valid = Object.keys(value).every(function (key) {
                    const eachValue = value[key];
                    return constraint(eachValue);
                  })
                } else if (constraintFailure) {
                  valid = false;
                }
              }
                break;
              case 'prototype': {
                if (typeChecks.object(constraint)) {
                  if (constraint.required) {
                    const subConstraint = constraint.required;
                    if (typeChecks.object(subConstraint)) {
                      for (let keyName in subConstraint) {
                        if (keyName in value) {
                          const validatorFn = subConstraint[keyName];
                          if (typeChecks.function(validatorFn)) {
                            if (!validatorFn(value[keyName])) {
                              valid = false;
                              break;
                            }
                          } else if (constraintFailure) {
                            valid = false;
                            break;
                          }
                        } else {
                          // logError(errorMsgs.MISSING_KEY(keyName, value));
                          valid = false;
                          break;
                        }
                      }
                    } else if (constraintFailure) {
                      valid = false;
                    } else {
                      throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                    }
                  }
                  if (constraint.allowable) {
                    const subConstraint = constraint.allowable;
                    if (typeChecks.object(subConstraint)) {
                      for (let keyName in subConstraint) {
                        if (keyName in value) {
                          const validatorFn = subConstraint[keyName];
                          if (typeChecks.function(validatorFn)) {
                            if (!validatorFn(value[keyName])) {
                              // logError(errorMsgs.INVALID_VALUE(keyName, value));
                              valid = false;
                              break;
                            }
                          } else if (constraintFailure) {
                            valid = false;
                            break;
                          }
                        }
                      }
                    } else if (constraintFailure) {
                      valid = false;
                    } else {
                      throw new Error(errorMsgs.TYPE_MUST_BE('allowable', 'object'));//No I18n
                    }
                  }
                } else if (constraintFailure) {
                  valid = false;
                } else {
                  throw new Error(errorMsgs.TYPE_MUST_BE('required', 'object'));//No I18n
                }
              }
                break;
            }
          } else {
            valid = false;
          }
        }
        return (valid && callback) ? callback(value) : valid;
      }
    }
  }
  const extender = function (name, options, extendFrom, callback) {
    if (!skipExistsCheck && this[name]) {
      throw new Error(errorMsgs.VALUE_EXISTS(name, 'Type Checks'));//No I18n
    } else if (basicTypeChecks.hasOwnProperty(extendFrom)) {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string. Found ' + name);//No I18n
      } else {
        this[name] = basicTypeChecks[extendFrom](options, callback)
        return this[name];
      }
    }
    return false;
  }
  const safeExtender = function (name, options, extendFrom, callback) {
    if (this[name]) {
      return this[name];
    } else {
      skipExistsCheck = true;
      const output = extender.call(this, name, options, extendFrom, callback);
      skipExistsCheck = false;
      return output;
    }
  }
  for (let basicType in basicTypeChecks) {
    extender[basicType.toLowerCase()] = function (name, options, callback) {
      return this.call(typeChecks, name, options, basicType, callback);
    }
    safeExtender[basicType.toLowerCase()] = function (name, options, callback) {
      return this.call(typeChecks, name, options, basicType, callback);
    }
  }
  const manipulator = (0,_deepFreezer__WEBPACK_IMPORTED_MODULE_0__["default"])({
    $extend: extender,
    $safeExtend: safeExtender,
    later: function (typeName) {
      const symbol = Symbol(typeName);
      symbolMap[symbol] = typeName;
      return symbol;
    },
    or: function () {
      const args = Array.from(arguments);
      return function (value) {
        return args.some(function (typeCheck) {
          typeCheck = checkInSymbols(typeCheck);
          if (typeof typeCheck !== 'function') {//No I18n
            return false;
          }
          return typeCheck(value, true); // Constraint Failure is allowable here
        })
      }
    },
    and: function () {
      const args = Array.from(arguments);
      return function (value) {
        return args.every(function (typeCheck) {
          typeCheck = checkInSymbols(typeCheck);
          if (typeof typeCheck !== 'function') {//No I18n
            return false;
          }
          return typeCheck(value, true); // Constraint Failure is allowable here
        })
      }
    },
    dispose: function () {
      for (let key in this) {
        delete this[key];
      }
    }
  })
  const typeChecks = Object.assign(Object.create(manipulator), {
    boolean: function (value) {
      return typeof value === 'boolean';//No I18n
    },
    regex: function (value) {
      return (function () {
        // ? This is done to take the current RegExp Instance whenever the function runs
        return value instanceof RegExp;
      }());
    },
    function: function (value) {
      return typeof value === 'function';//No I18n
    }
  })
  typeChecks.$extend.string('string', {});
  typeChecks.$extend.number('number', {});
  typeChecks.$extend.array('array', {});
  typeChecks.$extend.object('object', {});
  return typeChecks;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkType);
// window[PACKAGE_NAME].checkType = checkType;

/***/ }),

/***/ "./src/deepFreezer.js":
/*!****************************!*\
  !*** ./src/deepFreezer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepFreezer": () => (/* binding */ deepFreezer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const deepFreezer = function (value) {
  /**
   * ## Freezer - <vignesh.prv> 
   * # Why we need this ?
   * - This is just a deep freezer function which we might need on sending data to users
   * 
   * TODO : Not Much of the validation is done here
   * * For basics requirements this is fine, but on large scale we might need 
   * * a better freezer function which validates its inputs and then freezes it
   * 
   **/
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      value.forEach(deepFreezer)
    } else {
      for (let key in value) {
        deepFreezer(value[key]);
      }
    }
  }
  return Object.freeze(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreezer);
// module.exports = deepFreezer;
// window[PACKAGE_NAME].deepFreezer = deepFreezer;

/***/ }),

/***/ "./src/defineProp.js":
/*!***************************!*\
  !*** ./src/defineProp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defineProp": () => (/* binding */ defineProp)
/* harmony export */ });
const defineProp = function (options, object, value) {
  // - Getters and setters can only be done one by one
  const objToSet = {};
  delete options.value; // * Just in case ... 
  if (typeof object === 'string') {
    if (options.enumerable && typeof value === 'function') {
      value = value.bind(this)
    }
    const overridingObject = (value === undefined ? {} : { value });
    Object.assign(overridingObject, options);
    Object.defineProperty(this, object, overridingObject);
  } else if (!Array.isArray(object) && typeof object === 'object') {
    for (let key in object) {
      let valueToSet = object[key];
      if (options.enumerable && typeof object[key] === 'function') {
        valueToSet = valueToSet.bind(this)
      }
      objToSet[key] = Object.assign({
        value: valueToSet
      }, options);
    }
    Object.defineProperties(this, objToSet);
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProp);
// module.exports = defineProp;
// window[PACKAGE_NAME].defineProp = defineProp;

/***/ }),

/***/ "./src/descriptorCodes.js":
/*!********************************!*\
  !*** ./src/descriptorCodes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "descriptorCodes": () => (/* binding */ descriptorCodes)
/* harmony export */ });
const descriptorCodes = (function () {
  const constructOptionForCode = function (value) {
    const options = [
      'writable',
      'enumerable',
      'configurable'
    ]
    this[value] = options.reduce(function (acc, option) {
      if (acc[option] = (value >= this[option])) {
        value -= this[option]
      }
      return acc;
    }.bind(this), {})
  }
  const codes = Object.create(Object.defineProperties({}, {
    writable: { value: 4 },
    enumerable: { value: 2 },
    configurable: { value: 1 }
  }));
  for (let i = 0; i <= 7; i++) {
    constructOptionForCode.call(codes, i);
  }
  return codes;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (descriptorCodes);
// module.exports = descriptorCodes;
// window[PACKAGE_NAME].descriptorCodes = descriptorCodes;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _checkType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkType.js */ "./src/checkType.js");
/* harmony import */ var _defineProp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProp.js */ "./src/defineProp.js");
/* harmony import */ var _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptorCodes.js */ "./src/descriptorCodes.js");



const state = (function () { //No I18n
  const type = (0,_checkType_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const statesObject = {};
  function State (label) {
    let value = null;
    const API = Object.create(null);
    let callbacks = [];
    const removeAfterExecution = [];
    const oneTimeListener = function (callback) {
      if (onChangeListener(callback)) {
        removeAfterExecution.push(callback);
      }
    }
    const onChangeListener = function (callback) {
      if (type.function(callback)) {
        callbacks.push(callback);
        return true;
      }
      throw new Error('Type must be a function for callback');
    }
    const set = function (newValue) {
      if (newValue === undefined) {
        console.warn('New value cannot be undefined, ( Tip : If you want a falsy value use null / false )')
      } else {
        const oldValue = value;
        value = newValue;
        triggerCallbacks(newValue, oldValue);
      }
    }
    const triggerCallbacks = function (newValue, oldValue) {
      for (let index = 0, length = callbacks.length; index < length; index++) {
        const callback = callbacks[index];
        callback.call(null, newValue, oldValue, API);
        const indexOfRemoval = removeAfterExecution.indexOf(callback);
        if (indexOfRemoval !== -1) {
          removeAfterExecution.splice(indexOfRemoval, 1);
          callbacks[index] = null;
        }
      }
      callbacks = callbacks.filter(function (callback) {
        return callback !== null;
      });
    }
    const methods = {
      oneTimeListener,
      onChangeListener,
      set
    }
    Object.defineProperties(API, {
      value: {
        enumerable: false,
        configurable: false,
        get: function () {
          return value
        },
        set: function () {
          console.warn('This value is a read-only property. Please use "set" method');//No I18n
        }
      }
    })
    return _defineProp_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(API, _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_2__["default"][4], methods);
  }
  const extend = function (label, value) {
    statesObject[label] = new State(label);
    statesObject[label].set(value);
    return statesObject[label];
  }
  const destroy = function (destroyAll, label) {
    if (destroyAll) {
      for (let label in statesObject) {
        delete statesObject[label];
      }
      return true;
    }
    if (!type.string(label)) {
      console.warn('"' + label + '" is not a valid label');//No I18n
      return null;
    }
    if (!statesObject[label]) {
      console.warn(label + ' is not present in created states');//No I18n
      return null;
    }
    delete statesObject[label];
    return true;
  }
  const list = function () {
    return Object.keys(statesObject);
  }
  const registerOnChangeListener = function (label, callback, isOneTimeListener) {
    if (statesObject.hasOwnProperty(label)) {
      if (isOneTimeListener === true) { // This true is made for a purpose
        statesObject[label].oneTimeListener(callback);
      } else {
        statesObject[label].onChangeListener(callback);
      }
    } else {
      throw new Error(label + ' state not found');//No I18n
    }
  }
  const manipulator = {
    registeredStates: statesObject,
    $extend: extend
  };
  const API = Object.create(manipulator)
  const methods = {
    list,
    destroy: destroy.bind(null, false),
    destroyAll: destroy.bind(null, true),
    registerOnChangeListener
  }
  return _defineProp_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(API, _descriptorCodes_js__WEBPACK_IMPORTED_MODULE_2__["default"][4], methods);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);
})();

Object(window["common-utils"]).state = __webpack_exports__["default"];
/******/ })()
;
window._led = (function () {
  //ignorei18n_start
  let noOfEditorsLoaded = 0;
  const instances = {};
  const references = {};
  const commonUtils = window["common-utils"];
  const editorTypes = {
    BASIC_EDITOR: 'basicEditor',
    DIFF_EDITOR: 'diffEditor'
  };
  const enumerables = commonUtils.deepFreezer({
    VERSION: '2.2.10',
    EDITOR_SRC_NAME: 'Monaco Editor',
    // LIGHT_THEME: 'vs',
    // DARK_THEME: 'vs-dark',
    // DARK_MODE_CLASS: "darkMode",
    // MONACO_SRC_LOADED: false,
    EDITOR_TYPES: editorTypes,
    SUPPORTED_LANGUAGES: [
      'javascript',
      'html',
      'css'
    ],
    DESCRIPTOR_CODES: commonUtils.descriptorCodes,
    EDITOR_OPTIONS: {
      [editorTypes.BASIC_EDITOR]: {
        wordWrap: 'on',
        theme: this.LIGHT_THEME,
        formatOnType: true,
        fontSize: '14px'
      },
      [editorTypes.DIFF_EDITOR]: {}
    },
    ACTIONS_MAP: { // ! this should not be modified at any cost in runtime
      copy: "editor.action.clipboardCopyAction",
      cut: "editor.action.clipboardCutAction",
      toggleComment: "editor.action.commentLine",
      addComment: "editor.action.addCommentLine",
      blockComment: "editor.action.blockComment",
      removeComment: "editor.action.removeCommentLine",
      undo: 'undo',
      redo: 'redo',
      format: "editor.action.formatDocument",
      formatSelection: "editor.action.formatSelection",
      delete: "editor.action.deleteLines",
      indent: "editor.action.indentLines",
      outdent: "editor.action.outdentLines",
      openQuickCommand: "editor.action.quickCommand",
      showContextMenu: "editor.action.showContextMenu",
      find: "actions.find",
      duplicate: "editor.action.duplicateSelection"
    },
    LANGS_SUPPORTED_BY_MONACO: {
      /* DONT MODIFY THE CONTENT BELOW, THIS IS AUTOMATICALLY GENERATED */
      /* #I18N_LANG_MAP_FOR_MONACO - START */
      'de': 'de',
      'es': 'es',
      'fr': 'fr',
      'it': 'it',
      'ja': 'ja',
      'ko': 'ko',
      'ru': 'ru',
      'zh-cn': 'zh-cn',
      'zh-tw': 'zh-tw'
      /* #I18N_LANG_MAP_FOR_MONACO - END */
      /* DONT MODIFY THE CONTENT ABOVE, THIS IS AUTOMATICALLY GENERATED */
    }
  });
  const internalObjects = Object.freeze({
    // ? these are the properties which are used by the API functions of lyteEditor
    // ? these can be manipulated but should not be deleted as this is the default state
    _customOptions: {
      [editorTypes.BASIC_EDITOR]: [],
      [editorTypes.DIFF_EDITOR]: []
    },
    _apiToAdd: {},
    _formatters: {},
    _validators: {},
    _formatterFuncs: {},
    _langConfig: {},
    _staticLibs: [],
    _labelledLibs: {},
    _configMap: {
      jsKeys: [
        'compilerOptions',
        'diagnosticsOptions',
        'workerOptions'
      ],
      jsonKeys: [
        'diagnosticsOptions',
        'modeConfiguration'
      ],
      htmlKeys: [
        'options',
        'modeConfiguration'
      ],
      cssKeys: [
        'diagnosticsOptions',
        'modeConfiguration'
      ]
    },
    _loaded: {
      css: false
    },
    _stringToArray: function (stringOrArray) {
      const array = [];
      if (this.checkType.array(stringOrArray)) {
        array.push.apply(array, stringOrArray)
      } else if (this.checkType.string(stringOrArray)) {
        array.push.call(array, stringOrArray)
      } else {
        this.throw.error(_led.error.EXPECTED, 'string (or) array', stringOrArray);
      }
      return array;
    },
    addFeature: function (key, value, options) {
      options = options || {};
      Object.defineProperty(internalApi, key, {
        value: value,
        writable: options.writable || false,
        enumerable: options.enumerable || false,
        configurable: options.configurable || false
      })
    },
    addApi: function (key, value, options) {
      options = options || {};
      Object.defineProperty(internalApi, key, {
        value: value,
        writable: options.writable || false,
        enumerable: options.enumerable || false,
        configurable: options.configurable || true
      });
      if (window.Lyte && window.Lyte.Editor) {
        Object.defineProperty(Lyte.Editor, _led.changeCase.toPascal(key), {
          value: value,
          writable: options.writable || false,
          enumerable: options.enumerable || false,
          configurable: options.configurable || true
        });
      } else {
        _led._apiToAdd[_led.changeCase.toPascal(key)] = {
          value: value,
          writable: options.writable || false,
          enumerable: options.enumerable || false,
          configurable: options.configurable || true
        }
      }
    }
  });

  const internalApi = Object.create(Object.assign({}, enumerables, internalObjects));
  const fnsToAddInInternalApi = {
    getId: function () {
      return 'lyteEditor_' + (('00' + ++noOfEditorsLoaded).slice(-3))//No I18n
    },
    setInstance: function (id, instance) {
      instances[id] = instance;
    },
    flush: function (id) {
      delete instances[id];
      this.removeReferencesOf(id);
      /**
       * This is to completely remove the instance of the lyteEditor from 
       * global scope
       */
      // if (Object.keys(instances).length === 0) {
      //     // delete _led.monaco;
      // }
    },
    holdReferenceOf: function (node, event, func, id) {
      if (!references.hasOwnProperty(id)) {
        references[id] = [];
      }
      references[id].push([node, event, func]);
    },
    removeReferencesOf: function (id) {
      if (references[id]) {
        references[id].forEach(function (reference) {
          const node = reference[0];
          const event = reference[1];
          const func = reference[2];
          node.removeEventListener(event, func);
        })
      }
    },
    checkEquality: function (actualContent, defaultContent, language, excludeFormat) {
      if (!excludeFormat) {
        if (this._formatters.hasOwnProperty(language)) {
          actualContent = this._formatters[language](actualContent);
          defaultContent = this._formatters[language](defaultContent);
        }
      }
      return actualContent === defaultContent;
    }
  };
  for (let key in fnsToAddInInternalApi) {
    internalApi.addFeature(key, fnsToAddInInternalApi[key]);
  }
  const apiValues = {
    _libs: [],
    _themes: [],
    _listenersAddedToWindow: false,
    I18N_LANG_MAP_FOR_MONACO: internalApi.LANGS_SUPPORTED_BY_MONACO
  }
  //ignorei18n_end
  const exposableApi = {
    urlMappings: {},
    // updateEnum: function (enumerable, value) {
    //   const type = _led.checkType;
    //   const isEnumerable = type.isEnumerable;
    //   const modify = function (key, val) {
    //     Object.defineProperty(internalApi, key, {
    //       value: val,
    //       writable: true
    //     });
    //   }
    //   if (isEnumerable(enumerable)) {
    //     modify(enumerable, value);
    //   } else if (type.object(enumerable)) {
    //     for (let key in enumerable) {
    //       if (isEnumerable(key)) {
    //         modify(key, enumerable[key]);
    //       }
    //     }
    //   }
    // }
  }
  const _led = Object.create(internalApi);
  _led.addFeature('deepClone', commonUtils.deepClone);//No I18n
  _led.addFeature('defineProp', commonUtils.defineProp);//No I18n
  _led.addFeature('deepFreezer', commonUtils.deepFreezer);//No I18n
  _led.addFeature('changeCase', commonUtils.changeCase());//No I18n
  _led.addFeature('pubsub', commonUtils.pubsub());//No I18n
  _led.addFeature('devLog', commonUtils.devLog);//No I18n
  _led.addFeature('path', commonUtils.path);//No I18n
  _led.addFeature('uuid', commonUtils.uuid());//No I18n
  _led.addFeature('state', commonUtils.state());//No I18n

  _led.constructExposableObject = function () {
    Lyte.Editor = Object.create(Object.assign({}, enumerables, apiValues));
    // _led.defineProp.call(Lyte.Editor, _led.DESCRIPTOR_CODES[0], enumerables);
    for (let key in _led._apiToAdd) {
      Object.defineProperty(Lyte.Editor, key, _led._apiToAdd[key]);
    }
  }
  if (window.Lyte) {
    _led.constructExposableObject();
  }
  for (let key in exposableApi) {
    _led.addApi(key, exposableApi[key]);
  }

  return _led;
}());
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
_led.addApi('error', (function () {//No I18n
  const extender = function (label, callback, dontLog) {
    const permission = _led.DESCRIPTOR_CODES[0];
    if (typeof label === 'string') {
      if (this[label]) {
        _led.throw.error(_led.error.ERROR_EXISTS(label))
      } else {
        _led.defineProp.call(this, permission, {
          [label]: callback
        })
        if (dontLog) {
          this.$dontLogFor.push(label);
        }
        return true;
      }
    } else if (!Array.isArray(label) && typeof label === 'object') {
      for (let key in label) {
        const value = label[key];
        if (this[key]) {
          _led.throw.error(_led.error.ERROR_EXISTS(label))
        } else {
          if (typeof value === 'function') {
            _led.defineProp.call(this, permission, {
              [key]: value
            })
          } else if (!Array.isArray(value) && typeof value === 'object') {
            const obj = value;
            _led.defineProp.call(this, permission, {
              [key]: obj.value
            })
            if (obj.dontLog) {
              this.$dontLogFor.push(key);
            }
          }
        }
      }
      return true;
    }
    return false;
  }
  const internalFuncs = {
    $extend: extender,
    $dontLogFor: []
  }
  const API = Object.create(internalFuncs);
  const globalErrors = {
    ERROR_EXISTS: function (label) {
      return 'ErrorCode named ' + label + ' already exists.Please use a different name';//No I18n
    }
  };
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], globalErrors);
})());
//ignorei18n_start
_led.error.$extend({
  UNDEFINED_DEPENDENCY: function (dependency) {
    return dependency + ' is not defined. Please load ' + dependency + ' to render Lyte Editor'
  },
  INVALID_BASE_PATH: function (basePath) {
    return 'Provided basepath (' + basePath + ') is invalid';
  },
  EXPECTED: function (expectedType, found, identifier) {
    return (identifier ? 'For ' + identifier : '') + ' Expected ' + expectedType + (found !== undefined ? ', instead found :' + found + '' : '')
  },
  VERSION_MISMATCH: function (name, version) {
    return 'Version mismatch';
    // return 'Lyte Editor requires newer version of '+name+',So please upgrade '+name+' to '+version;
  },
  LIB_EXISTS: function (libName) {
    return libName + ' is already present in cache,Incase if you want to overwrite it, rerun the same function with `true` as the second argument';
  },
  REQUIRES_SRC_PATH: function (srcPath) {
    return 'Please provide proper source path for loading files. Found : ' + srcPath
  },
  FILE_NOT_LOADED: function (src, error) {
    return 'File path : "' + src + '" is not properly loaded \n' + (error ? error : '')
  },
  VALUE_EXISTS: function (type, object) {
    return type + ' already exists' + (object && ' in ' + object) + '. Please try another name'
  },
  TYPE_MUST_BE: function (type, key, additional) {
    return 'The value for the ' + key + ' should be of type ' + (Array.isArray(type) ? type.join(' | ') : type) + '. ' + (additional || '')
  },
  NOT_FOUND: function (identifier, object) {
    object = typeof object === 'string' ? object : JSON.stringify(object, null, 4)
    return identifier + ' is not found in the object ' + object + ' . Please verify it'
  },
  READ_ONLY: function (propName) {
    return propName + ' is a read-only property.'
  },
  NOT_IN_ALLOWED_VALUES: function (key, actualValue, allowedValues) {
    return 'Allowed values for ' + key + ' are ' + allowedValues.join(',') + '. Found '+actualValue
  }
});
//ignorei18n_end
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

_led.addFeature('updateEnum', (function () {//No I18n
  const updatableEnums = {
    //ignorei18n_start
    LIGHT_THEME: 'vs',
    DARK_THEME: 'vs-dark',
    MONACO_SRC_LOADED: false,
    DARK_MODE_CLASS: 'darkMode'
    //ignorei18n_end
  }
  const type = _led.checkType;
  const createReadOnlyProp = function (propName) {
    return (function (key) {
      Object.defineProperty(this, key, {
        get: function () {
          return _led.deepClone(updatableEnums[key]);
        },
        set: function () {
          return _led.throw.warning(_led.error.READ_ONLY(key));
        }
      })
    }.call(this, propName));
  }
  const updateEnum = function (enumToUpdate, newValue) {
    if (type.string(enumToUpdate) && updatableEnums.hasOwnProperty(enumToUpdate)) {
      updatableEnums[enumToUpdate] = newValue;
    } else {
      _led.throw.error(_led.error.NOT_IN_ALLOWED_VALUES('enumToUpdate', Object.keys(updatableEnums), enumToUpdate));//No I18n
    }
  }
  const enumsToExpose = []
  for (let key in updatableEnums) {
    createReadOnlyProp.call(_led, key);
    if (window.Lyte && window.Lyte.Editor) {
      createReadOnlyProp.call(Lyte.Editor, key);
    } else {
      enumsToExpose.push(key);
    }
  }
  _led.exposeEnumsInLyteEditor = function () {
    enumsToExpose.forEach(function (key) {
      createReadOnlyProp.call(Lyte.Editor, key);
    });
    _led.defineProp.call(Lyte.Editor, _led.DESCRIPTOR_CODES[4], {
      UpdateEnum: updateEnum
    });
  }
  if (window.Lyte && window.Lyte.Editor) {
    _led.defineProp.call(Lyte.Editor, _led.DESCRIPTOR_CODES[4], {
      UpdateEnum: updateEnum
    });
  }
  return updateEnum;
}()));
_led.addFeature('getPathExtension', function (path) {
    path = path.trim();
    const regexToGetExt = /\.([a-zA-Z]+)(?=\?|$)/;
    const type = regexToGetExt.exec(path);
    return type.length ? type[1] : null;
});
_led.addFeature('loadResources', function (filePath, doc, attrsToSet, onEvery, onAfterAll, onError) {
    attrsToSet = attrsToSet || {};
    onEvery = onEvery || function () { };
    onError = onError || function () { };
    onAfterAll = onAfterAll || function () { };
    const createTag = function (path, doc) {
        return new Promise(function (resolve, reject) {
            path = _led.urlMappings[path] || path;
            const ext = _led.getPathExtension(path);
            let tag = null;
            const attrs = attrsToSet[ext];
            switch (ext) {
                case 'css': {
                    tag = doc.createElement('link');
                    tag.href = path;
                    tag.rel = 'stylesheet';//No I18n
                }
                    break;
                case 'js': {
                    tag = doc.createElement('script');
                    tag.src = path;
                    /* 
                        Defer will maintain the order of execution of the js files irrespective of the loading time
                        So all the tags here are deferred as without defer the file caching issue is present on slow networks
                    */
                    // tag.defer = true;
                    tag.type = 'text/javascript';//No I18n
                }
                    break;
                default: {
                    reject('File type is invalid')
                }
            }
            if (tag) {
                if (attrs) {
                    for (let attr in attrs) {
                        tag.setAttribute(attr, attrs[attr]);
                    }
                }
                tag.onload = function () { resolve(tag) };
                tag.onerror = function (err) { reject(tag, err) };
                doc.head.appendChild(tag);
            }
        });
    }
    let links = [];
    if (this.checkType.string(filePath)) {
        links.push(filePath)
    } else if (this.checkType.array(filePath)) {
        links.push.apply(links, filePath);
    } else {
        _led.throw.warning(_led.error.EXPECTED, 'string (or) array', filePath);//No I18n
        return null;
    }
    Promise.all(links.map(function (link) {
        return createTag(link, doc)
            .then(function (tag) {
                return onEvery(tag) || Promise.resolve(link);
            }).catch(function (tag, error) {
                return onError(tag, error) || Promise.reject(link, error);
            })
    })).then(function (array) {
        onAfterAll(array)
    }).catch(function (link, error) {
        _led.throw.error(_led.error.FILE_NOT_LOADED, link, error);//No I18n
    })
});
_led.addFeature('loadBaseCss', function () {
    if (!_led._loaded.css) {
        const link = document.createElement('link');
        link.rel = "stylesheet";//No I18n
        link.href = _led.pathFor.lyteEditorCss;
        document.head.appendChild(link);
        _led._loaded.css = true;
        /*
            ERROR : css.js:56 Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
            Dont know why this issue occurs when 'Lyte.injectResources' is used
            This problem started when shadowRoot is added , before that this code was working fine
            Have to report this to LN.
            ``` 
                Lyte.injectResources(basePath,null,function(){
                _led._loaded.css = true;
                })
            ```
        */

    }
});
_led.addFeature('copyStylesToShadowRoot', function (shadowRoot) {
    const links = Array.from(document.getElementsByTagName('link'));
    const hrefRegex = /vs\/(base|editor|platform)/;
    links.forEach(function (link) {
        if (hrefRegex.test(link.getAttribute('href'))) {
            shadowRoot.appendChild(link.cloneNode());
        }
    });
    // const iconCss = `@font-face { font-family: "codicon"; src: url("${getCodiconPath()}") format("truetype"); }`;
    // const style = document.createElement('style');
    // style.type = 'text/css';
    // style.media = 'screen';
    // document.getElementsByTagName('head')[0].appendChild(style);
    // style.innerHTML = iconCss;
});
_led.addFeature('getBrowserInfo', function () {
    let temp;
    const info = {};
    const userAgent = navigator.userAgent;
    const agentRegex = /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d.]+)/i;
    const match = userAgent.match(agentRegex) || [];
    const name = match[1];
    const version = match[2];
    if (/trident/i.test(name)) {
        temp = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        info.name = "IE"; //No I18n
        info.version = temp[1] || '';//No I18n
        return info;
    }
    if (name === 'Chrome') {//No I18n
        temp = userAgent.match(/\b(OPR|Edge?)\/(\d+)/);
        if (temp !==null) {
            return temp.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');//No I18n
        }
    }
    if (version) {
        info.name = name;
        info.version = version;
    } else {
        info.name = navigator.appName;
        info.version = navigator.appVersion;
    }
    if ((temp = userAgent.match(/version\/(\d+)/i)) !==null) {
        info.version = temp[1];
    }
    return info;
});
_led.addFeature('includeLangConfig', function (monaco, language, config) {
  const configMap = _led._configMap;
  const jsKeys = configMap.jsKeys;
  const jsonKeys = configMap.jsonKeys;
  const htmlKeys = configMap.htmlKeys;
  const cssKeys = configMap.cssKeys;
  const configurableLangs = {
    javascript: jsKeys,
    typescript: jsonKeys,
    json: jsonKeys,
    css: cssKeys,
    scss: cssKeys,
    less: cssKeys,
    html: htmlKeys,
    razor: htmlKeys,
    handlebars: htmlKeys
  }
  const langConfigs = _led._langConfig;
  const convertTo = (function () {
    const add = function (prefix, key) {
      return prefix + key.slice(0, 1).toUpperCase() + key.slice(1);
    }
    return {
      getter: add.bind(null, 'get'),
      setter: add.bind(null, 'set'),
      defaults: function (lang) {
        return lang + 'Defaults'
      },
      baseLang: function (lang) {
        let baseLang = null;
        switch (lang) {
          case 'html':
          case 'razor':
          case 'handlerbars': {
            baseLang = 'html';
          }
            break;
          case 'json': {
            baseLang = 'json'
          }
            break;
          case 'javascript':
          case 'typescript': {
            baseLang = 'typescript'
          }
            break;
        }
        return baseLang;
      }
    }
  }())
  const setLangConfig = function (language, langConfig) {
    if (configurableLangs.hasOwnProperty(language)) {
      const configurableKeys = configurableLangs[language];
      const defaultsKey = convertTo.defaults(language);
      const baseLang = convertTo.baseLang(language); // This wont become null as this entered the previous if condition
      const configObj = monaco.languages[baseLang][defaultsKey];
      for (let key in langConfig) {
        if (configurableKeys.indexOf(key) !== -1) {
          const setKey = convertTo.setter(key);
          const presentVal = configObj[key];
          const newVal = langConfig[key];
          configObj[setKey](Object.assign(presentVal, newVal));
        }
      }
    }
  }
  if (language) {
    if (config) {
      setLangConfig(language, config);
    } else {
      setLangConfig(language, langConfigs[language]);
    }
  } else {
    for (let lang in langConfigs) {
      setLangConfig(lang, langConfigs[lang]);
    }
  }
})

// ! Test this language configuration for json and js

// Lyte.Editor.addLib = (function(libName,definition){ // !Deprecated @1.1.2
//     let string = definition.toString();
//     string = string.replace(/^function\(\)\{\n/,'').replace(/\n}$/,'');
//     if(!lyteEditor.monaco){
//         Lyte.Editor._libs.push({ libName : libName,value : string });
//     }else{
//         lyteEditor.addLib(string);
//     }
// });
_led.addApi('completionProvider', (function () {//No I18n
  const instances = {};
  const instancesToLoad = {};
  const type = _led.checkType;
  let MONACO_SRC_LOADED = _led.MONACO_SRC_LOADED;
  let monaco = null;
  type.$extend.array('triggerCharacters', { every: type.string });//No I18n
  type.$extend.object('completionProviderInstance', {//No I18n
    required: {
      provideCompletionItems: type.function
    },
    allowable: {
      triggerCharacters: type.triggerCharacters,
      resolveCompletionItem: type.function,
      checkForDesiredModel: type.function
    }
  });
  const registerToMonaco = function (langName, id, instance) {
    try {
      const callee = Object.assign({}, instance, { monaco: monaco });
      const completionProviderFn = instance.provideCompletionItems;
      instance.provideCompletionItems = function (model) {
        if (instance.checkForDesiredModel) {
          const isCurrentModelDesired = instance.checkForDesiredModel(model);
          if (isCurrentModelDesired) {
            return completionProviderFn.apply(callee, arguments);
          }
        } else {
          return completionProviderFn.apply(callee, arguments);
        }
      }
      const disposable = monaco.languages.registerCompletionItemProvider(langName, instance);
      Object.assign(instances[langName][id], disposable);
      return true;
    } catch (e) {
      _led.throw.errorLog(e);
      return false;
    }
  }
  const extender = function (langName, objectOfInstances) {
    if (type.string(langName)) {
      if (!instances.hasOwnProperty(langName)) {
        instances[langName] = {};
      }
      for (let id in objectOfInstances) {
        const instance = objectOfInstances[id];
        if (type.completionProviderInstance(instance)) {
          if (!instances[langName].hasOwnProperty(id)) {
            instances[langName][id] = instance;
            if (MONACO_SRC_LOADED) {
              registerToMonaco(langName, id, instance);
            } else {
              if (!instancesToLoad.hasOwnProperty(langName)) {
                instancesToLoad[langName] = [];
              }
              instancesToLoad[langName].push(id);
            }
          } else {
            _led.throw.error(id + ' is already present for the language ' + langName + '.Please give a new id');//No I18n
            return false;
          }
        } else {
          _led.throw.error("Completion Provider Instance is invalid. Refer the documentation for proper structure");//No I18n
          return false;
        }
      }
      return true;
    } else {
      _led.throw.error(_led.error.EXPECTED, 'string', null, 'languageName');//No I18n
      return false;
    }
  };
  const overrider = function (langName, overrider) {
    if (type.string(langName)) {
      if (instances.hasOwnProperty(langName)) {
        const instancesForLang = instances[langName];
        for (let id in overrider) {
          if (instancesForLang.hasOwnProperty(id)) {
            const overriddenInstance = Object.assign({}, instancesForLang[id], overrider);
            if (type.completionProviderInstance(overriddenInstance)) {
              instancesForLang[id] = overriddenInstance;
            } else {
              _led.throw.error("Completion Provider Instance is invalid. Refer the documentation for proper structure");//No I18n
            }
          } else {
            _led.throw.warning(_led.error.NOT_FOUND, id, 'Completion Provider Instance for ' + langName);//No I18n
          }
        }
      } else {
        _led.throw.warning(_led.error.NOT_FOUND, langName, 'Complete Provider Instance');//No I18n
      }
    } else {
      _led.throw.error(_led.error.EXPECTED, 'string', null, 'languageName');//No I18n
    }
  };
  const disposer = function (langName, id) {
    if (type.string(langName)) {
      if (instances.hasOwnProperty(langName)) {
        const instancesForLang = instances[langName];
        if (instancesForLang.hasOwnProperty(id)) {
          if (!instancesToLoad[langName] || !instancesToLoad[langName].includes(id)) {
            instancesForLang[id].dispose();
          } else {
            delete instancesToLoad[langName][id];
            _led.devLog.info(id + ' Completion Provider Instance is not yet loaded, but deleted');//No I18n
          }
          delete instancesForLang[id];
        } else {
          _led.throw.warning(_led.error.NOT_FOUND, id, 'Completion Provider Instance for ' + langName);//No I18n
        }
      } else {
        _led.throw.warning(_led.error.NOT_FOUND, langName, 'Complete Provider Instance');//No I18n
      }
    } else {
      _led.throw.error(_led.error.EXPECTED, 'string', null, 'languageName');//No I18n
    }
  };
  const getCopyOfInstances = function () {
    return _led.deepClone.andFreeze(instances);
  }
  const registerAllInstancesToLoad = function () {
    for (let langName in instancesToLoad) {
      const idsToLoad = instancesToLoad[langName];
      for (let i = 0, len = idsToLoad.length; i < len; i++) {
        const id = idsToLoad[i];
        const instance = instances[langName][id];
        if (instance) {
          if (registerToMonaco(langName, id, instance)) {
            idsToLoad[i] = null;
          }
        }
      }
      instancesToLoad[langName] = instancesToLoad[langName].filter(function (id) { return id !== null });
      if (instancesToLoad[langName].length === 0) {
        delete instancesToLoad[langName];
      }
    }
  }
   _led.pubsub.subscribeTo('MONACO_LOADED', function (monacoInstance) {//No I18n
    MONACO_SRC_LOADED = _led.MONACO_SRC_LOADED;
    monaco = monacoInstance;
    registerAllInstancesToLoad();
  });

  const internalFuncs = {
    registeredInstances: getCopyOfInstances
  };
  const API = Object.create(internalFuncs);
  const methods = {
    Register: extender,
    Override: overrider,
    Dispose: disposer
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());
/**
 * This API is dependant on the restrictedEditor, so dont remove that
*/
_led.addApi('codeBlock', (function () { //No I18n
	const genUuidForCodeBlock = _led.uuid.createFormat('XX-XX-XX', 'codeblock', function (format, id) {//No I18n
		return id + '_' + format;
	});
	const instances = {};
	const uriMappings = {};
	let codeBlockState = null;
	const type = _led.checkType;
	type.$extend.string('language', {
		allowableValues: _led.SUPPORTED_LANGUAGES
	})
	type.$extend.array('editableRanges', {
		every: type.$extend.object('editableRange', {
			required: {
				range: type.$extend.array('arrayOfFourIntegers', {
					every: type.number,
					size: 4
				})
			},
			allowable: {
				allowMultiple: type.boolean
			}
		})
	})
	type.$extend.object('codeBlockInstance', {
		required: {
			language: type.language
		},
		allowable: {
			blueprint: type.string,
			content: type.string,
			editableRanges: type.editableRanges,
			onEdit: type.function,
			onSave: type.function
		}
	}, function (value) {
		if (value.editableRanges && !value.content) {
			_led.throw.error("Content is required for editableRanges to work properly"); //NoI18n
		} else {
			return true;
		}
	});
	type.$extend.object('codeBlockEntity', {
		required: {
			uri: type.object,
			instanceName: type.string,
			id: type.string
		}
	});

	const executeCallback = function (fn, args) {
		if (fn) {
			return fn.apply(null, args);
		}
		return null;
	}
	const createCodeBlock = function CodeBlock (parameters, instanceName) {
		const $override = function (object) {
			for (let key in object) {
				//! This check is must ,So no internal variables are allowed to change
				//! during this override
				if (API.hasOwnProperty(key)) {
					API[key] = object[key];
				}
			}
		}
		const createEntity = function CodeBlockEntity (fileName, monaco, options) {
			// let activeCodeBlock = null;
			if (_led.MONACO_SRC_LOADED) {
				if (!API.createdEntities.hasOwnProperty(fileName)) {
					const language = API.language;
					const uri = new monaco.Uri(instanceName, '', fileName);//No I18n
					const model = monaco.editor.createModel('', language, uri);
					API.monaco = monaco;
					API.addRestrictionsToModel(fileName, model, options, language, uri);
					const methods = {
						language: language,
						instanceName: instanceName,
						id: fileName,
						uri: uri,
						_options: {},
						setValue: function (value, force) {
							if (!force) {
								_led.throw.warning('Setting value may break the restricted editor. Hope you know what you are doing!.\nPlease add `true` as the second argument to by-pass this warning')
							} else {
								return model.setValue(value);
							}
						},
						getValue: function () {
							return model.getValue();
						},
						activate: function () {
							activeCodeBlock = instanceName;
							activeEntity = fileName;
							if (codeBlockState) {
								codeBlockState.set(true);
							}
							return model;
						},
						deactivate: function () {
							activeCodeBlock = null;
							activeEntity = null;
							if (codeBlockState) {
								codeBlockState.set(false);
							}
						},
						saveModel: function () {
							const modelValue = model.getValue();
							executeCallback(parameters.onSave, [modelValue]);
						},
						updateEntity: function (options) {
							const valueToSet = type.string(options) ? options : modifyValue(options);
							if (regexForValidation.test(valueToSet)) {
								model.setValue(valueToSet);
								Object.assign(methods._options, options);
							}
						}
					};
					uriMappings[uri] = {
						id: fileName,
						codeBlockName: instanceName
					};
					API.createdEntities[fileName] = methods;
					return API.createdEntities[fileName];
				}
				_led.throw.error(_led.error.VALUE_EXISTS(fileName, instanceName + " CodeBlock Instance"));//No I18n
			} else {
				_led.throw.error(_led.error.UNDEFINED_DEPENDENCY, _led.EDITOR_SRC_NAME);
			}
			return null;
		};
		const listAll = function () {
			return Object.keys(API.createdEntities);
		};
		const deleteEntity = function (entityId) {
			if (_led.checkType.string(entityId)) {
				const entity = API.createdEntities[entityId];
				const uri = entity ? entity.uri : null;
				if (uri) {
					API.monaco.editor.getModel(uri).dispose();
					delete uriMappings[uri];
				}
				delete API.createdEntities[entityId];
			}
		};
		const deleteAll = function () {
			for (let entityId in API.createdEntities) {
				const uri = API.createdEntities[entityId].uri;
				delete uriMappings[uri];
				delete API.createdEntities[entityId];
			}
		};
		const getActiveEntity = function () {
			return API.createdEntities[activeEntity];
		};
		const getEntity = function (id) {
			if (type.string(id)) {
				if (API.createdEntities.hasOwnProperty(id)) {
					return API.createdEntities[id];
				} else {
					_led.throw.warning(_led.error.NOT_FOUND, id, 'createdEntities');//No I18n
					return null;
				}
			} else {
				_led.throw.error(_led.error.TYPE_MUST_BE, 'string', 'id', id);//No I18n
			}
		}
		const addRestrictionsToModel = function (fileName, model, options, language, uri) {
			language = language || model.getLanguageIdentifier().language;
			uri = uri || model.uri.toString();
			fileName = fileName || genUuidForCodeBlock();//No I18n

			model.setValue(parameters.content);
			const rangeConstructor = API.monaco.Range;
			return _led.restrictedEditor.addRangeRestrictionsTo(
				model,
				parameters.editableRanges,
				rangeConstructor
			);
		}
		const doesRangesIntersect = function (ranges) {
			if (ranges.length > 1) {
				const areRangesIntersecting = function (range1, range2) {
					/**
					 * 0 - startLineNumber
					 * 1 - startColumn
					 * 2 - endLineNumber
					 * 3 - endColumn
					*/
					return !(
						range1[2] < range2[0] ||
						range1[2] === range2[0] && range1[3] <= range2[1] ||
						range2[2] < range1[0] ||
						range2[2] === range1[0] && range2[3] <= range1[1]
					);
				}
				const length = ranges.length;
				for (let i = 0; i < length; i++) {
					for (let j = 0; j < length; j++) {
						if (i !== j && areRangesIntersecting(ranges[i], ranges[j])) {
							return true;
						}
					}
				}
				return false;
			}
			return false;
		}
		const providedRanges = parameters.editableRanges.map(function (rangeObject) {
			rangeObject.range = _led.restrictedEditor.normalizeRange(rangeObject.range, parameters.content);
			return rangeObject.range;
		});
		if (doesRangesIntersect(providedRanges)) {
			_led.throw.error('Ranges are overlapping');
		} else {
			/**
			 * 0 - startLineNumber
			 * 1 - startColumn
			 * 2 - endLineNumber
			 * 3 - endColumn
			*/
			parameters.editableRanges = parameters.editableRanges.sort(
				_led.restrictedEditor.sortRangesInAscendingOrder
			);
		}

		let activeEntity = null;
		const internalVars = {
			//- This instance is the usable entity created using one Codeblock instance
			createdEntities: {},
			$override
		}
		for (let key in internalVars) {
			//! This will prevent parameter from overriding the internal variables
			delete parameters[key];
		}
		Object.assign(internalVars, parameters);
		const API = Object.create(internalVars);
		const methods = {
			createEntity,
			listAll,
			delete: deleteEntity,
			deleteAll,
			getActiveEntity,
			getEntity,
			addRestrictionsToModel
		};
		Object.assign(API, methods);
		return API;
	}
	const extender = function (instanceName, object) {
		if (type.string(instanceName)) {
			if (instances.hasOwnProperty(instanceName)) {
				_led.throw.error(_led.error.VALUE_EXISTS(instanceName, 'Code Block'));//No I18n
			} else if (type.codeBlockInstance(object)) {
				instances[instanceName] = createCodeBlock(object, instanceName);
			} else {
				_led.throw.error("Code Block Instance is invalid. Refer the documentation for proper structure")
			}
		} else {
			_led.throw.error(_led.error.TYPE_MUST_BE('string', 'instance name'));//No I18n
		}
	}
	const overrider = function (instanceName, object) {
		if (type.string(instanceName) && instances.hasOwnProperty(instanceName)) {
			const tempObject = _led.deepClone(instances[instanceName]);
			Object.assign(tempObject, object);
			if (type.codeBlockInstance(tempObject)) {
				instances[instanceName] = instances[instanceName].$override(object);
			}
		}
	}
	const registeredInstances = function () {
		//? This will be used to show in the left side panel 
		const registeredInstances = Object.keys(instances);
		return registeredInstances.filter(function (instanceName) {
			return !internalFuncs.hasOwnProperty(instanceName);
		});
	}
	const getCodeBlockEntity = function (uri) {
		return uriMappings[uri] || {};
	}

	const internalFuncs = {
		registeredInstances,
		getCodeBlockEntity
	};
	const API = Object.create(Object.assign(instances, internalFuncs));
	const methods = {
		Register: extender,
		Override: overrider
	}

	return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());
_led.addApi('defineTheme', function (themeName, configuration) {//No I18n
	if (!Lyte.Editor._themes) {
		Lyte.Editor._themes = [];
	}
	Lyte.Editor._themes.push([themeName, configuration]);
});
_led.addApi('editorActions', (function () { //No I18n
  const type = _led.checkType;
  type.$extend.object('editorActionInstance', { //No I18n
    required: {
      id: type.string,
      run: type.function,
      label: type.string
    },
    allowable: {
      keybindings: type.arrayOfNumbers,
      contextMenuGroupId: type.string,
      precondition: type.string,
      keybindingsContext: type.string
    }
  });
  type.$extend.array('listOfEditorActions', { //No I18n
    every: type.editorActionInstance
  });

  const editorActions = (function () {
    const actions = {};
    return {
      add: function (id, object) {
        object.contextMenuOrder = Object.keys(actions).length + 1;
        if (!object.hasOwnProperty('contextMenuGroupId')) {
          object.contextMenuGroupId = 'custom';//No I18n
        }
        actions[id] = object;
        return actions[id];
      },
      dispose: function (id) {
        const itemToDispose = actions[id];
        if (itemToDispose) {
          if (itemToDispose.hasOwnProperty('dispose')) {
            itemToDispose.dispose();
          }
          delete actions[id];
        }
      },
      disposeAll: function () {
        for (let id in actions) {
          this.dispose(id);
        }
      },
      list: function () {
        const arrayOfEditorActions = [];
        for (let key in actions) {
          arrayOfEditorActions.push(actions[key]);
        }
      },
      has: function (id) {
        return !!actions[id];
      }
    }
  }());
  const extender = function (callback, monaco, editor) {
    const argsToPass = [{
      KeyCode: monaco.KeyCode,
      KeyMod: monaco.KeyMod
    }];
    const arrayOfEditorActions = callback.apply(null, argsToPass);
    if (type.listOfEditorActions(arrayOfEditorActions)) {
      arrayOfEditorActions.forEach(function (menuItem) {
        const value = editorActions.add(menuItem.id, menuItem);
        value.dispose = editor.addAction(Object.assign({}, value, {
          label : Lyte.Editor.I18n.getValueOf(value.label)
        }));
      });
    } else {
      _led.throw.error(_led.error.TYPE_MUST_BE, 'Array<EditorActionItem>. Refer Documentation for the structure of EditorActionItem', 'Menu Items');//No I18n
    }
  }
  const disposeAction = function (id) {
    if (editorActions.has(id)) {
      editorActions.dispose(id);
    } else {
      _led.throw.warning('There is no Menu Item registered under the name ' + id);//No I18n
    }
    return editorActions.list;
  }

  const internalFuncs = {
    dispose: disposeAction,
    disposeAll: editorActions.disposeAll,
    list: editorActions.list
  };
  const API = Object.create(internalFuncs);
  const methods = {
    extend: extender
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());
_led.addApi('I18n', (function () {
  //ignorei18n_start
  const initialLocale = 'en_us';
  const localePrefix = 'lyte.editor.locale.';
  const wordsUsedInLyteEditor = [
    "reset",
    "dark mode",
    "font size",
    "undo",
    "redo",
    "cut",
    "copy",
    "indent",
    "outdent",
    "duplicate",
    "comment",
    "delete",
    "find",
    "toggle wrap",
    "format",
    "format on type",
    "toggle dark mode",
    "key bindings"
  ];
  const manipulator = {
    currentLocale: initialLocale,
    localePrefix: localePrefix,
    registeredLangs: {}
  }
  const prepareLocaleKey = function (word) {
    return localePrefix + _led.changeCase.toSnake(word)
  }
  manipulator._baseWordMap = wordsUsedInLyteEditor.reduce(function (acc, word) {
    acc[prepareLocaleKey(word)] = word;
    return acc;
  }, {});

  const i18nMap = {
    [manipulator.currentLocale]: manipulator._baseWordMap
  };
  const addLocale = function (langName, config) {
    let newConfig = null;
    if (typeof langName === 'string') {
      if (!i18nMap.hasOwnProperty(langName) || langName === manipulator.currentLocale) {
        if (typeof config === 'function') {
          newConfig = config.call(Lyte.Editor.I18n, Object.assign({}, manipulator._baseWordMap));
        } else if (typeof config === 'object') {
          newConfig = config;
        }
      } else {
        throw new Error(langName + ' is already defined in I18n');
      }
    } else {
      throw new Error('`langName` must be a string');
    }
    if (newConfig) {
      API.registeredLangs[langName] = langName;
      i18nMap[langName] = newConfig;
      manipulator.currentLocale = langName;
    }
  };
  const convertStringToI18nKey = function (string) {
    string = string.replace(/\s+/g, '_').toLowerCase();
    return localePrefix + string;
  };
  const getValueOf = function (word) {
    return i18nMap[manipulator.currentLocale][convertStringToI18nKey(word)] || word;
  };
  const changeLocale = function (langName) {
    if (typeof langName === 'string') {
      if (i18nMap.hasOwnProperty(langName)) {
        manipulator.currentLocale = langName;
      } else {
        throw new Error(langName + ' is not present in I18n Configuration');
      }
    } else {
      throw new Error('`langName` must be a string');
    }
  };
  const overrideLocale = function (langName, object) {
    if (typeof langName === 'string') {
      if (i18nMap.hasOwnProperty(langName)) {
        Object.assign(i18nMap[langName], object);
      } else {
        throw new Error(langName + ' is not present in I18n Configuration');
      }
    } else {
      throw new Error('`langName` must be a string');
    }
  }
  const API = Object.create(manipulator);
  const methods = {
    addLocale: addLocale,
    getValueOf: getValueOf,
    changeLocale: changeLocale,
    overrideLocale: overrideLocale,
    prepareLocaleKey: prepareLocaleKey
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
  //ignorei18n_end
}()));
_led.addApi('registerFormatter', function (language, callback) {
    if (this.checkType.string(language)) {
        if (this.checkType.function(callback)) {
            this._formatters[language] = callback;
        } else {
            this.throw.warn(this.error.EXPECTED, 'function', callback);
        }
    } else {
        this.throw.warn(this.error.EXPECTED, 'string', language);
    }
});
_led.addApi('registerValidator', function (language, callback) {//No I18n
    if (_led.checkType.string(language)) {
        if (_led.checkType.function(callback)) {
            _led._validators[language] = callback;
        } else {
            _led.throw.warn(_led.error.EXPECTED, 'function', callback);//No I18n
        }
    } else {
        _led.throw.warn(_led.error.EXPECTED, 'string', language);//No I18n 
    }
});
_led.addApi('restrictedEditor', (function () {//No I18n
  const modelsWithRestrictions = {};
  const type = _led.checkType;
  const sortRangesInAscendingOrder = function (rangeObject1, rangeObject2) {
    const rangeA = rangeObject1.range;
    const rangeB = rangeObject2.range;
    if (
      rangeA[0] < rangeB[0] ||
      (rangeA[0] === rangeB[0] && rangeA[3] < rangeB[1])
    ) {
      return 1;
    }
  }
  const normalizeRange = function (range, content) {
    const lines = content.split('\n');
    const noOfLines = lines.length;
    const normalizedRange = [];
    range.forEach(function (value, index) {
      if (value === 0) {
        _led.throw.error('Range values cannot be zero');//No I18n
      }
      switch (index) {
        case 0: {
          if (value < 0) {
            _led.throw.error('Start Line of Range cannot be negative');//No I18n
          } else if (value > noOfLines) {
            _led.throw.error('Provided Start Line(' + value + ') is out of bounds. Max Lines in content is ' + noOfLines);//No I18n
          }
          normalizedRange[index] = value;
        }
          break;
        case 1: {
          let actualStartCol = value;
          const startLineNo = normalizedRange[0];
          const maxCols = lines[startLineNo - 1].length
          if (actualStartCol < 0) {
            actualStartCol = maxCols - Math.abs(actualStartCol);
            if (actualStartCol < 0) {
              _led.throw.error('Provided Start Column(' + value + ') is out of bounds. Max Column in line ' + startLineNo + ' is ' + maxCols);//No I18n
            }
          } else if (actualStartCol > (maxCols + 1)) {
            _led.throw.error('Provided Start Column(' + value + ') is out of bounds. Max Column in line ' + startLineNo + ' is ' + maxCols);//No I18n
          }
          normalizedRange[index] = actualStartCol;
        }
          break;
        case 2: {
          let actualEndLine = value;
          if (actualEndLine < 0) {
            actualEndLine = noOfLines - Math.abs(value);
            if (actualEndLine < 0) {
              _led.throw.error('Provided End Line(' + value + ') is out of bounds. Max Lines in content is ' + noOfLines);//No I18n
            }
            if (actualEndLine < normalizedRange[0]) {
              _led.throw.warning('Provided End Line(' + value + ') is less than the start Line, the Restriction may not behave as expected');//No I18n
            }
          } else if (value > noOfLines) {
            _led.throw.error('Provided End Line(' + value + ') is out of bounds. Max Lines in content is ' + noOfLines);//No I18n
          }
          normalizedRange[index] = actualEndLine;
        }
          break;
        case 3: {
          let actualEndCol = value;
          const endLineNo = normalizedRange[2];
          const maxCols = lines[endLineNo - 1].length
          if (actualEndCol < 0) {
            actualEndCol = maxCols - Math.abs(actualEndCol);
            if (actualEndCol < 0) {
              _led.throw.error('Provided End Column(' + value + ') is out of bounds. Max Column in line ' + endLineNo + ' is ' + maxCols);//No I18n
            }
          } else if (actualEndCol > (maxCols + 1)) {
            _led.throw.error('Provided Start Column(' + value + ') is out of bounds. Max Column in line ' + endLineNo + ' is ' + maxCols);//No I18n
          }
          normalizedRange[index] = actualEndCol;
        }
          break;
      }
    })
    return normalizedRange;
  }
  const addRangeRestrictionsTo = function (model, ranges, rangeConstructor) {
    let restrictions = _led.deepClone(ranges).sort(sortRangesInAscendingOrder);
    const prepareRestrictions = function (restrictions) {
      const content = model.getValue();
      restrictions.forEach(function (restriction, index) {
        const range = normalizeRange(restriction.range, content);
        const startLine = range[0];
        const startCol = range[1];
        const endLine = range[2];
        const endCol = range[3];
        restriction._originalRange = range.slice();
        restriction.range = new rangeConstructor(startLine, startCol, endLine, endCol);
        restriction.index = index;
        if (!restriction.allowMultiline) {
          restriction.allowMultiline = rangeConstructor.spansMultipleLines(restriction.range)
        }
        if (!restriction.label) {
          restriction.label = `[${startLine},${startCol} -> ${endLine}${endCol}]`;
        }
      });
    }
    const getCurrentEditableRanges = function () {
      return restrictions.reduce(function (acc, restriction) {
        acc[restriction.label] = {
          allowMultiline: restriction.allowMultiline || false,
          index: restriction.index,
          range: Object.assign({}, restriction.range),
          originalRange: restriction._originalRange.slice()
        };
        return acc;
      }, {});
    }
    const getValueInEditableRanges = function () {
      return restrictions.reduce(function (acc, restriction) {
        acc[restriction.label] = model.getValueInRange(restriction.range);
        return acc;
      }, {});
    }
    const disposeRestrictions = function () {
      model._restrictionChangeListener.dispose();
      delete model.editInRestrictedArea;
      delete model.disposeRestrictions;
      delete model.getValueInEditableRanges;
      delete model.updateRestrictions;
      delete model.getCurrentEditableRanges;
      delete model._isLyteRestrictedModel;
      delete model._isCursorAtCheckPoint;
      delete model._currentCursorPositions;
      delete model._editableRangeChangeListener;
      delete model._restrictionChangeListener;
      return model;
    }
    const isCursorAtCheckPoint = function (positions) {
      positions.some(function (position) {
        const posLineNumber = position.lineNumber;
        const posCol = position.column;
        const length = restrictions.length;
        for (let i = 0; i < length; i++) {
          const range = restrictions[i].range;
          if (
            (range.startLineNumber === posLineNumber && range.startColumn === posCol) ||
            (range.endLineNumber === posLineNumber && range.endColumn === posCol)
          ) {
            model.pushStackElement();
            return true;
          }
        }
      });
    }
    const addEditableRangeListener = function (callback) {
      if (type.function(callback)) {
        model._editableRangeChangeListener.push(callback);
      }
    }
    const triggerChangeListenersWith = function (currentChanges, allChanges) {
      const currentRanges = getCurrentEditableRanges();
      model._editableRangeChangeListener.forEach(function (callback) {
        callback.call(model, currentChanges, allChanges, currentRanges);
      });
    }
    const doUndo = function () {
      return Promise.resolve().then(function () {
        model.editInRestrictedArea = true;
        model.undo();
        model.editInRestrictedArea = false;
      });
    };
    const updateRange = function (restriction, range, finalLine, finalColumn, changes, changeIndex) {
      let oldRangeEndLineNumber = range.endLineNumber;
      let oldRangeEndColumn = range.endColumn;
      restriction.range = range.setEndPosition(finalLine, finalColumn);
      const length = restrictions.length;
      let changesLength = changes.length;
      const diffInCol = finalColumn - oldRangeEndColumn;
      const diffInRow = finalLine - oldRangeEndLineNumber;

      const cursorPositions = model._currentCursorPositions || [];
      const noOfCursorPositions = cursorPositions.length;
      // if (noOfCursorPositions > 0) {
      if (changesLength !== noOfCursorPositions) {
        changes = changes.filter(function (change) {
          const range = change.range;
          for (let i = 0; i < noOfCursorPositions; i++) {
            const cursorPosition = cursorPositions[i];
            if (
              (range.startLineNumber === cursorPosition.startLineNumber) &&
              (range.endLineNumber === cursorPosition.endLineNumber) &&
              (range.startColumn === cursorPosition.startColumn) &&
              (range.endColumn === cursorPosition.endColumn)
            ) {
              return true;
            }
          }
          return false;
        });
        changesLength = changes.length;
      }
      if (diffInRow !== 0) {
        for (let i = restriction.index + 1; i < length; i++) {
          const nextRestriction = restrictions[i];
          const nextRange = nextRestriction.range;
          if (oldRangeEndLineNumber === nextRange.startLineNumber) {
            nextRange.startColumn += diffInCol;
          }
          if (oldRangeEndLineNumber === nextRange.endLineNumber) {
            nextRange.endColumn += diffInCol;
          }
          nextRange.startLineNumber += diffInRow;
          nextRange.endLineNumber += diffInRow;
          nextRestriction.range = nextRange;
        }
        for (let i = changeIndex + 1; i < changesLength; i++) {
          const nextChange = changes[i];
          const rangeInChange = nextChange.range;
          const rangeAsString = rangeInChange.toString();
          const rangeMapValue = rangeMap[rangeAsString];
          delete rangeMap[rangeAsString];
          if (oldRangeEndLineNumber === rangeInChange.startLineNumber) {
            rangeInChange.startColumn += diffInCol;
          }
          if (oldRangeEndLineNumber === rangeInChange.endLineNumber) {
            rangeInChange.endColumn += diffInCol;
          }
          rangeInChange.startLineNumber += diffInRow;
          rangeInChange.endLineNumber += diffInRow;
          nextChange.range = rangeInChange;
          rangeMap[rangeInChange.toString()] = rangeMapValue;
        }
      } else {
        // Only Column might have changed
        for (let i = restriction.index + 1; i < length; i++) {
          const nextRestriction = restrictions[i];
          const nextRange = nextRestriction.range;
          if (nextRange.startLineNumber > oldRangeEndLineNumber) {
            break;
          } else {
            nextRange.startColumn += diffInCol;
            nextRange.endColumn += diffInCol;
            nextRestriction.range = nextRange;
          }
        }
        for (let i = changeIndex + 1; i < changesLength; i++) {
          // rangeMap
          const nextChange = changes[i];
          const rangeInChange = nextChange.range;
          const rangeAsString = rangeInChange.toString();
          const rangeMapValue = rangeMap[rangeAsString];
          delete rangeMap[rangeAsString];
          if (rangeInChange.startLineNumber > oldRangeEndLineNumber) {
            rangeMap[rangeInChange.toString()] = rangeMapValue;
            break;
          } else {
            rangeInChange.startColumn += diffInCol;
            rangeInChange.endColumn += diffInCol;
            nextChange.range = rangeInChange;
            rangeMap[rangeInChange.toString()] = rangeMapValue;
          }
        }
      }
      // }
    };
    const getInfoFrom = function (change, editableRange) {
      const info = {};
      const range = change.range;
      // Get State
      if (change.text === '') {
        info.isDeletion = true;
      } else if (
        (range.startLineNumber === range.endLineNumber) &&
        (range.startColumn === range.endColumn)
      ) {
        info.isAddition = true;
      } else {
        info.isReplacement = true;
      }
      // Get Position Of Range
      info.startLineOfRange = range.startLineNumber === editableRange.startLineNumber;
      info.startColumnOfRange = range.startColumn === editableRange.startColumn;

      info.endLineOfRange = range.endLineNumber === editableRange.endLineNumber;
      info.endColumnOfRange = range.endColumn === editableRange.endColumn;

      info.middleLineOfRange = !info.startLineOfRange && !info.endLineOfRange;

      // Editable Range Span
      if (editableRange.startLineNumber === editableRange.endLineNumber) {
        info.rangeIsSingleLine = true;
      } else {
        info.rangeIsMultiLine = true;
      }
      return info;
    };
    const updateRestrictions = function (ranges) {
      restrictions = _led.deepClone(ranges).sort(sortRangesInAscendingOrder);
      prepareRestrictions(restrictions);
    }

    const manipulatorApi = {
      _isLyteRestrictedModel: true,
      _isRestrictedValueValid: true,
      _editableRangeChangeListener: [],
      _isCursorAtCheckPoint: isCursorAtCheckPoint
    }

    prepareRestrictions(restrictions);
    manipulatorApi._restrictionChangeListener = model.onDidChangeContentFast(function (contentChangedEvent) {
      const isUndoing = contentChangedEvent.isUndoing;
      model._isRestrictedValueValid = true;
      if (!(isUndoing && model.editInRestrictedArea)) {
        const changes = contentChangedEvent.changes.sort(sortRangesInAscendingOrder);
        const rangeMap = {};
        const length = restrictions.length;
        const isAllChangesValid = changes.every(function (change) {
          const editedRange = change.range;
          const rangeAsString = editedRange.toString();
          rangeMap[rangeAsString] = null;
          for (let i = 0; i < length; i++) {
            const restriction = restrictions[i];
            const range = restriction.range;
            if (range.containsRange(editedRange)) {
              if (!restriction.allowMultiline && change.text.includes('\n')) {
                return false;
              }
              rangeMap[rangeAsString] = restriction;
              return true;
            }
          }
          return false;
        })
        if (isAllChangesValid) {
          changes.forEach(function (change, changeIndex) {
            const changedRange = change.range;
            const restriction = rangeMap[changedRange.toString()];
            const editableRange = restriction.range;
            const text = change.text || '';
            /**
             * Things to check before implementing the change
             * - A | D | R => Addition | Deletion | Replacement
             * - MC | SC => MultiLineChange | SingleLineChange
             * - SOR | MOR | EOR => Change Occured in - Start Of Range | Middle Of Range | End Of Range
             * - SSL | SML => Editable Range - Spans Single Line | Spans Multiple Line
             */
            const noOfLinesAdded = (text.match(/\n/g) || []).length;
            const noOfColsAddedAtLastLine = text.split(/\n/g).pop().length;

            const lineDiffInRange = changedRange.endLineNumber - changedRange.startLineNumber;
            const colDiffInRange = changedRange.endColumn - changedRange.startColumn;

            let finalLine = editableRange.endLineNumber;
            let finalColumn = editableRange.endColumn;

            let columnsCarriedToEnd = 0;
            if (
              (editableRange.endLineNumber === changedRange.startLineNumber) ||
              (editableRange.endLineNumber === changedRange.endLineNumber)
            ) {
              columnsCarriedToEnd += (editableRange.endColumn - changedRange.startColumn) + 1;
            }

            const info = getInfoFrom(change, editableRange);
            if (info.isAddition || info.isReplacement) {
              if (info.rangeIsSingleLine) {
                /**
                 * Only Column Change has occurred , so regardless of the position of the change
                 * Addition of noOfCols is enough
                 */
                if (noOfLinesAdded === 0) {
                  finalColumn += noOfColsAddedAtLastLine;
                } else {
                  finalLine += noOfLinesAdded;
                  if (info.startColumnOfRange) {
                    finalColumn += noOfColsAddedAtLastLine
                  } else if (info.endColumnOfRange) {
                    finalColumn = (noOfColsAddedAtLastLine + 1)
                  } else {
                    finalColumn = (noOfColsAddedAtLastLine + columnsCarriedToEnd)
                  }
                }
              }
              if (info.rangeIsMultiLine) {
                // Handling for Start Of Range is not required
                finalLine += noOfLinesAdded;
                if (info.endLineOfRange) {
                  if (noOfLinesAdded === 0) {
                    finalColumn += noOfColsAddedAtLastLine;
                  } else {
                    finalColumn = (columnsCarriedToEnd + noOfColsAddedAtLastLine);
                  }
                }
              }
            }
            if (info.isDeletion || info.isReplacement) {
              if (info.rangeIsSingleLine) {
                finalColumn -= colDiffInRange;
              }
              if (info.rangeIsMultiLine) {
                if (info.endLineOfRange) {
                  finalLine -= lineDiffInRange;
                  finalColumn -= colDiffInRange;
                } else {
                  finalLine -= lineDiffInRange;
                }
              }
            }
            updateRange(restriction, editableRange, finalLine, finalColumn, changes, changeIndex);
          });
          const values = model.getValueInEditableRanges();
          const currentlyEditedRanges = {};
          for (let key in rangeMap) {
            const restriction = rangeMap[key];
            const range = restriction.range;
            const rangeString = restriction.label || range.toString();
            currentlyEditedRanges[rangeString] = values[rangeString];
          }
          triggerChangeListenersWith(currentlyEditedRanges, values);
        } else {
          doUndo();
        }
      } else if (model.editInRestrictedArea) {
        model._isRestrictedValueValid = false;
      }
    });
    const exposedApi = {
      editInRestrictedArea: false,
      getCurrentEditableRanges: getCurrentEditableRanges,
      getValueInEditableRanges: getValueInEditableRanges,
      disposeRestrictions: disposeRestrictions,
      onDidChangeContentInEditableRange: addEditableRangeListener,
      updateRestrictions: updateRestrictions
    }
    _led.defineProp.call(model, _led.DESCRIPTOR_CODES[5], manipulatorApi);
    _led.defineProp.call(model, _led.DESCRIPTOR_CODES[7], exposedApi);
    return model;
  }
  const disposeModel = function (model) {
    if (model._isLyteRestrictedModel) {
      model.disposeRestrictions();
      const uri = model.uri.toString();
      delete modelsWithRestrictions[uri];
      return true;
    }
    return false;
  }
  const disposeAllRestrictedModels = function () {
    const listOfModelUris = Object.keys(modelsWithRestrictions);
    for (let i = 0; i < listOfModelUris.length; i++) {
      const model = modelsWithRestrictions[listOfModelUris[i]];
      disposeModel(model);
    }
  }
  const updateRangeRestrictionsTo = function (model, restrictions) {
    if (model._isLyteRestrictedModel) {
      model.updateRestrictions(restrictions);
      return true;
    }
    return null;
  }

  const manipulator = {
    sortRangesInAscendingOrder: sortRangesInAscendingOrder,
    normalizeRange: normalizeRange
  }
  const API = Object.create(manipulator);
  const methods = {
    addRangeRestrictionsTo: addRangeRestrictionsTo,
    updateRangeRestrictionsTo: updateRangeRestrictionsTo,
    disposeModel: disposeModel,
    disposeAllRestrictedModels: disposeAllRestrictedModels
  }
  return _led.defineProp.call(API, _led.DESCRIPTOR_CODES[4], methods);
})());
_led.addApi('setLangConfig', function (language, config) {
  if (_led.checkType.string(language)) {
    if (_led.checkType.object(config)) {
      _led._langConfig[language] = config;
    } else {
      _led.throw.warn(_led.error.EXPECTED, 'object', config);//No I18n
    }
  } else {
    _led.throw.warn(_led.error.EXPECTED, 'string', language);//No I18n
  }
});
_led.addFeature('debounce', (function () { //No I18n
  return (function (callback, delay, args) {
    args = args !== undefined ? args : [];
    delay = typeof delay !== 'number' ? 50 : delay < 50 ? 50 : delay;//No I18n
    return (function () {
      clearTimeout(this.__debounceFn);
      this.__debounceFn = setTimeout(function () {
        callback.apply(this, args);
      }.bind(this), delay);
    }.bind(this))();
  }).bind(this);
}.call(_led)));
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

_led.addFeature('createArgsCache', function () {
  const cache = {};
  const saveArgsOfFn = function (fnName) {
    const args = Array.from(arguments).slice(1);
    cache[fnName] = args;
  }
  const getArgsOfFn = function (fnName) {
    return cache[fnName] || [];
  }
  const callFnWithSavedArgs = function (fnName) {
    return this[fnName].apply(this, getArgsOfFn(fnName));
  }
  const callFnAndRmItFromCache = function (fnName) {
    const fnReturn = callFnWithSavedArgs.apply(this, arguments);
    delete cache[fnName];
    return fnReturn;
  }
  const isFnInCache = function (fnName) {
    return cache.hasOwnProperty(fnName);
  }
  return {
    saveFor: saveArgsOfFn,
    getFor: getArgsOfFn,
    callFn: callFnWithSavedArgs,
    callFnAndRmCache: callFnAndRmItFromCache,
    hasFn: isFnInCache
  }
});
// Lyte.Editor.extendHtmlCompletions = function(jsonData){
//     const defaults = {
//         //ignorei18n_start
//         property : 'Enum',
//         method : 'Method',
//         subComponent : 'Property',
//         snippet : 'Snippet'
//         //ignorei18n_end
//     }
//     const stringToHtml = function(text) {
//         const parser = new DOMParser();
//         const htmlDoc = parser.parseFromString(text, 'text/html');//No I18n
//         return htmlDoc;
//     }
//     const constructTagCompletion = function(tagName,tagInfo){
//         return {
//             label : tagInfo.label || tagName,
//             kind : monaco.languages.CompletionItemKind[defaults.subComponent],
//             detail : tagInfo.detail,
//             insertText : tagInfo.insertText || tagName,
//             documentation : tagInfo.documentation
//         }
//     }
//     const extractTagCompletions = function(monaco,jsonData,keyword,parentTag){
//         const suggestions = [];
//         const hasPrivateSubComponents = function(parentTag){
//             if(jsonData.hasOwnProperty(parentTag)){
//                 return !!jsonData[parentTag].subComponents;
//             }
//             return false;
//         }
//         if(hasPrivateSubComponents(parentTag)){
//             for(let comp in jsonData[parentTag].subComponents){
//                 if(comp.indexOf(keyword) > -1){
//                     suggestions.push(constructTagCompletion(comp,jsonData[parentTag].subComponents[comp]))
//                 }
//             }
//         }
//         for(let comp in jsonData){
//             if(comp.indexOf(keyword) > -1 && comp !== parentTag){
//                 suggestions.push(constructTagCompletion(comp,jsonData[comp]));
//             }
//         }
//         return {
//             suggestions : suggestions
//         }
//     }
//     const constructAttrCompletion = function(tagName,tagInfo,type){
//         let insertText = '',label = tagInfo.label || tagName;
//         if(type === 'property'){//No I18n
//             insertText = label + '="${1}"'//No I18n
//         }else if(type === 'method'){//No I18n
//             insertText = label + '="{{method(\'${1}\')}}"'//No I18n
//         }
//         return {
//             label : label,
//             kind : monaco.languages.CompletionItemKind[defaults[type]],
//             detail : tagInfo.detail,
//             insertText : insertText,
//             documentation : tagInfo.documentation,
//             insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//         }
//     }
//     const extractAttrCompletions = function(monaco,jsonData,keyword,parentTag){
//         const suggestions = [];
//         const hasPrivateAttrs = function(parentTag){
//             if(jsonData.hasOwnProperty(parentTag)){
//                 return !!jsonData[parentTag].properties || !!jsonData[parentTag].methods;
//             }
//             return false;
//         }
//         if(hasPrivateAttrs(parentTag)){
//             for(let comp in jsonData[parentTag].properties){
//                 if(comp.indexOf(keyword) > -1){
//                     suggestions.push(constructAttrCompletion(comp,jsonData[parentTag].properties[comp],'property'))
//                 }
//             }
//             for(let comp in jsonData[parentTag].methods){
//                 if(comp.indexOf(keyword) > -1){
//                     suggestions.push(constructAttrCompletion(comp,jsonData[parentTag].methods[comp],'method'))
//                 }
//             }
//         }
//         return {
//             suggestions : suggestions
//         }
//     }
//     // Actual Completion Provider
//     // extend this to omit tags
//     function getLastOpenedTag(text) {
//         var tags = text.match(/<\/*(?=\S*)([a-zA-Z-0-9]+)/g);
//         if (!tags) {
//             return undefined;
//         }
//         var closingTags = [];
//         for (var i = tags.length - 1; i >= 0; i--) {
//             if (tags[i].indexOf('</') === 0) {
//                 closingTags.push(tags[i].substring('</'.length));
//             }
//             else {
//                 var tagPosition = text.lastIndexOf(tags[i]);
//                 var tag = tags[i].substring('<'.length);
//                 var closingBracketIdx = text.indexOf('/>', tagPosition);
//                 if (closingBracketIdx === -1) {
//                     if (!closingTags.length || closingTags[closingTags.length - 1] !== tag) {
//                         text = text.substring(tagPosition);
//                         return {
//                             tagName: tag,
//                             isAttributeSearch: text.indexOf('<') > text.indexOf('>')
//                         };
//                     }
//                     closingTags.splice(closingTags.length - 1, 1);
//                 }
//                 text = text.substring(0, tagPosition);
//             }
//         }
//     }
//     const isTagClosing = function(text){
//         for(var i = text.length ; i >=0 ; i--){
//             if(text[i] === '<'){
//                 return false;
//             }else if(text[i] === '/'){
//                 return true;
//             }
//         }
//         return false;
//     }
//     function getDynamicCompletionsSnippet(){
//         return [
//             {
//                 label : 'lyte-for',
//                 filterText:'forEach',
//                 kind : monaco.languages.CompletionItemKind[defaults.snippet],
//                 detail : 'This is used to create a for Each loop',
//                 insertText : '<template is="for" items="{{${1:array}}}" item="${2:arrayItem}" index="${3:arrayIndex}">\n${4:logic}\n</template>',
//                 documentation : 'This snippet is used to create multiple copies of nodes based on the given array',
//                 insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//             },
//             {
//                 label : 'lyte-forIn',
//                 filterText : 'forIn',
//                 kind : monaco.languages.CompletionItemKind[defaults.snippet],
//                 detail : 'This is used to create a for Each loop',
//                 insertText : '<template is="forIn" items="{{${1:object}}}" value="${2:value}" key="${3:key}">\n${4:logic}\n</template>',
//                 documentation : 'This snippet is used to create multiple copies of nodes based on the given array',
//                 insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//             }
//         ]
//     }
//     function getHtmlCompletionProvider(monaco,editor){
//         return {
//             triggerCharacters: ['.', ':', '<', '"', '=', '/','>','{',"'"],
//             provideCompletionItems: function(model,position,trigger) {
//                 const textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
//                 const lastOpenedTag = getLastOpenedTag(textUntilPosition);
//                 if(trigger.triggerCharacter === '>'){
//                     if(!isTagClosing(textUntilPosition)){
//                         model.applyEdits([{
//                             range: monaco.Range.fromPositions(editor.getPosition()),
//                             text: "</"+lastOpenedTag.tagName+">",
//                             forceMoveMarkers : false
//                         }]);
//                         editor.setPosition(position);
//                     }
//                     return {};
//                 }else if(trigger.triggerCharacter === '{'){
//                     const value = model.getValueInRange({
//                         startLineNumber : position.lineNumber,
//                         startColumn : position.column - 2,
//                         endColumn : position.column,
//                         endLineNumber : position.lineNumber
//                     });
//                     if(value === "{{"){
//                         return {
//                             suggestions : [
//                                 {
//                                     label : 'features',
//                                     kind : monaco.languages.CompletionItemKind[defaults.property],
//                                     insertText : 'features',
//                                     documentation : 'This is a data attributes',
//                                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//                                 },{
//                                     label : 'data attribute',
//                                     kind : monaco.languages.CompletionItemKind[defaults.property],
//                                     insertText : 'data attribute',
//                                     documentation : 'This is a data attributes',
//                                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//                                 },{
//                                     label : 'sample',
//                                     kind : monaco.languages.CompletionItemKind[defaults.property],
//                                     insertText : 'sample',
//                                     documentation : 'This is a data attributes',
//                                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//                                 }
//                             ]
//                         }
//                     }else{
//                         model.applyEdits([{
//                             range: monaco.Range.fromPositions(editor.getPosition()),
//                             text: "}",
//                             forceMoveMarkers : false
//                         }]);
//                     }
//                     editor.setPosition(position);
//                     // if double brackets are found provide all data as suggestion
//                     return {};
//                 }
//                 if(lastOpenedTag.isAttributeSearch){
//                     return extractAttrCompletions(monaco,jsonData,'',lastOpenedTag.tagName)
//                 }else if(trigger.triggerKind === 0){
//                     return { suggestions : getDynamicCompletionsSnippet() }
//                 }else{
//                     const completions = extractTagCompletions(monaco,jsonData,'',lastOpenedTag.tagName);
//                     // uncomment this for tag closing
//                     // if(trigger.triggerCharacter === '/'){
//                     // 	completions.suggestions.unshift(constructTagCompletion(lastOpenedTag.tagName,{
//                     // 		insertText : lastOpenedTag+'>'
//                     // 	}))
//                     // }
//                     return completions;
//                 }
//             }
//         }
//     }
// }

_led.addFeature('addLib', function (monaco, lib, nonStatic) {
  try {
    const jsDefaults = monaco.languages.typescript.javascriptDefaults;
    if (this.checkType.string(lib)) {
      jsDefaults.addExtraLib(lib);
      if (!nonStatic) {
        this._staticLibs.push(lib);
      }
    }
  } catch (error) {
    console.error(error);
  }
})
_led.addFeature('destroyAllLibs', function (monaco) {
  monaco.languages.typescript.javascriptDefaults.setExtraLibs();
})
_led.addFeature('refreshAllLibs', function (monaco, libs) {
  // this will remove all the previously loaded libs
  this.destroyAllLibs(monaco);
  this._staticLibs = [];
  if (Array.isArray(libs)) {
    libs.forEach(function (lib) {
      this.addLib(monaco, lib)
    }.bind(this));
  }
})
_led.addFeature('makeRequest', function (link, comp, resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        resolve(xhr);
      } else if (this.status === 404) {
        reject(xhr);
      } else {
        reject(xhr);
      }
    }
  };
  xhr.link = link;
  const canMakeCall = comp.triggerMethod('onBeforeEachRequest', xhr);
  if (canMakeCall !== false) {
    xhr.open("GET", xhr.link, true);//No I18n
    xhr.send();
  } else {
    reject({
      link: link,
      status: 'cancelled'//No I18n
    });
  }
})
_led.addFeature('addLibFrom', function (monaco, link, comp, nonStatic) {
  return new Promise(function (resolve, reject) {
    _led.makeRequest(link, comp, resolve, reject)
  }).then(function (xhr) {
    const lib = comp.triggerMethod('onAfterEachRequest', xhr);
    if (lib !== false) {
      const value = lib || xhr.responseText;
      _led.addLib(monaco, value, nonStatic);
      return {
        link: xhr.link,
        value: value,
        status: 'success'//No I18n
      };
    }
    return {
      link: xhr.link,
      status: 'cancelled'//No I18n
    }
  }).catch(function (xhr) {
    const lib = comp.triggerMethod('onAfterEachRequest', xhr);
    if (lib !== undefined) {
      if (_led.checkType.string(lib)) {
        const value = lib || xhr.responseText;
        _led.addLib(monaco, value, nonStatic);
        return {
          link: xhr.link,
          xhrFailed: true,
          value: value,
          status: 'success'//No I18n
        };
      }
      _led.throw.error(_led.error.EXPECTED, 'string', lib);//No I18n
    }
    return {
      link: xhr.link,
      status: 'failed'//No I18n
    };
  })
})
_led.addFeature('refreshAllLibsFrom', function (monaco, links, comp) {
  if (_led.checkType.array(links)) {
    Promise.all(links.map(function (link) {
      return _led.addLibFrom(monaco, link, comp);
    })).then(function (array) {
      comp.triggerMethod('onAfterAllRequests', array);
    })
  } else {
    _led.throw.error(_led.error.EXPECTED, 'array', links);//No I18n
  }
})

_led.addFeature('tools', function () {//No I18n
  const fontSizeOptions = [8, 9, 10, 11, 12, 14, 16, 18, 24, 36, 48, 58, 70];
  const util = {
    classPrefix: 'lyteEditorTool-',//No I18n
    deCamelize: function (string, separator) {
      separator = separator === undefined ? ' ' : separator;
      return string.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    },
    generateToolObjFor: function (meta) {
      if (_led.checkType.object(meta) || _led.checkType.string(meta)) {
        meta = [meta];
      }
      if (_led.checkType.array(meta)) {
        meta.forEach(function (value) {
          if (_led.checkType.object(value)) {
            for (let name in value) {
              const object = value[name];
              const defaults = {
                title: this.deCamelize(name),
                triggerAction: name,
                class: this.classPrefix + name
              }
              this[name] = Object.assign(defaults, object);
              if (this[name].align === 'right' && !this[name].hasOwnProperty('preventHoverClass')) {//No I18n
                this[name].preventHoverClass = true;
              }
            }
          } else if (_led.checkType.string(value)) {
            this[value] = {
              title: this.deCamelize(value),
              triggerAction: value,
              class: this.classPrefix + value
            }
          }
        }.bind(this));
      }
      return this;
    },
    getValInPx: function (array) {
      return array.map(function (val) {
        return val + 'px';//No I18n
      })
    }
  }
  const defaultMetaObject = [
    //ignorei18n_start
    {
      fontSize: {
        options: util.getValInPx(fontSizeOptions),
        label: 'Font Size',//No I18n,
        noTitle: true,
        sortFunc: function (val1, val2) {
          return parseInt(val1) - parseInt(val2);
        },
        preventHoverClass: true
      }
    },
    'undo',
    'redo',
    'copy',
    'cut',
    {
      comment: {
        title: 'Toggle comment',
        triggerAction: 'toggleComment'
      }
    },
    'indent',
    'outdent',
    'duplicate',
    'delete',
    'find',
    {
      toggleWrap: {
        title: 'Toggle Wrap'
      }
    },
    'format',
    'formatOnType',
    {
      reset: {
        align: 'right',
        noTitle: true
      }
    },
    {
      toggleDarkMode: {
        title: 'Toggle Dark Mode',
        align: 'right',
        noTitle: true
      }
    },
    {
      keyBindings: {
        title: 'Key Bindings',
        align: 'right',
        triggerAction: 'openQuickCommand'
      }
    },
    {
      help: {
        align: 'right'
      }
    }
    //ignorei18n_end
  ]
  const tools = Object.create(util);
  return tools.generateToolObjFor(defaultMetaObject);
});
_led.addFeature('overrideTools', function (overrider, current, baseToolsObject) {//No I18n
  const toolsObj = {
    leftAligned: {},
    rightAligned: {}
  }
  if (_led.checkType.array(overrider)) {
    overrider.forEach(function (value) {
      let toolObj, key;
      if (_led.checkType.string(value)) {
        key = value;
        toolObj = baseToolsObject[value];
      } else if (_led.checkType.object(value)) {
        key = Object.keys(value)[0];
        if (!baseToolsObject.hasOwnProperty(key)) {
          baseToolsObject.generateToolObjFor(key)
        }
        toolObj = Object.assign({}, baseToolsObject[key], value[key]);
      }
      if (toolObj) {
        if (current.hasOwnProperty(key)) {
          if (current[key] !== undefined) {
            toolObj.current = current[key];
          }
          if (toolObj.hasOwnProperty('options') && !toolObj.options.includes(current[key])) {
            if (current[key] !== undefined) {
              toolObj.options.push(current[key]);
            }
            if (toolObj.sortFunc) {
              toolObj.options.sort(toolObj.sortFunc);
            }
          }
        }
        if (toolObj.align === 'right') {
          toolsObj.rightAligned[key] = toolObj;
        } else {
          toolsObj.leftAligned[key] = toolObj;
        }
      }
    });
  }
  return toolsObj;
});

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
_led.addFeature('setCompilerOptionsFor', function (monaco, language, options) {
    const languages = monaco.languages;
    const defaultsMapping = {
        javascript: languages.typescript.javascriptDefaults,
        typescript: languages.typescript.typescriptDefaults
        // this can be extended in future
    }
    const languageDefaults = defaultsMapping[language] || null;
    if (languageDefaults) {
        const compilerOptions = languageDefaults.getCompilerOptions();
        if (_led.checkType.object(options)) {
            Object.assign(compilerOptions, options);
            languageDefaults.setCompilerOptions(compilerOptions);
        }
    }
});
_led.addFeature('prerequisitesForAction', (function () {//No I18n
  const type = _led.checkType;
  const additionalCallbacks = [];
  const mainFn = function (action, editor) {
    switch (action) {
      case 'cut':
      case 'copy':
      case 'undo':
      case 'redo':
      case 'find':
      case 'openQuickCommand': {
        editor.focus();
      }
        break;
    }
    additionalCallbacks.forEach(function (callback) {
      callback(action, editor);
    });
  }
  mainFn.extend = function (callback) {
    if (type.function(callback)) {
      additionalCallbacks.push(callback);
    } else {
      _led.throw.error(_led.error.TYPE_MUST_BE, 'function');//No I18n
    }
  }
  return mainFn;
}()));
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
(function () {
  const statesInEditor = {
    MONACO_LOADING_TRIGGERED : false,
    MONACO_LOADED : false
  };
  for(let stateLabel in statesInEditor) {
    _led.state.$extend(stateLabel, statesInEditor[stateLabel]);
  }
}());

// // (function(){
// //     // const func = function(argsObj,returnValue){
// //     //     let string = 'function(';//No I18n
// //     //     let args = [];
// //     //     for(let key in argsObj){
// //     //         let value = argsObj[key];
// //     //         // if(typeof value === 'object' && !Array.isArray(value) && typeof value !== 'function'){//No I18n
// //     //         //     value = JSON.stringify(value,null,4);
// //     //         //     console.log(value);
// //     //         // }
// //     //         args.push(key+":"+value) //No I18n
// //     //     }
// //     //     return string + args.join(',') + ')'+ (returnValue ?':'+returnValue: '');//No I18n
// //     // }
// //     //ignorei18n_start
// //     const string = 'string';
// //     const object = 'object';
// //     const boolean = 'boolean';
// //     const array = 'array';
// //     const any = 'any';
// //     const node = 'node';
// //     const context = 'context';
// //     const func = 'func'; // functions are always optional
// //     const required = function(type){
// //         return { _type : type , _required : true }
// //     }
// //     const definitions = {
// //         Lyte : {
// //             Component : {
// //                 register : {
// //                     _args :{
// //                         componentName : required(string),
// //                         componentDefinition : {
// //                             data        : { _type: func, _desc : 'Provide all the component data here'      },
// //                             constructor : { _type: func, _desc : 'Called before initializing the component' },
// //                             init        : { _type: func, _desc : 'Called before the component is rendered'  },
// //                             didConnect  : { _type: func, _desc : 'Called after the component has been rendered'},
// //                             didDestroy  : { _type: func, _desc : 'Called when the component is removed from the DOM'},
// //                             getData : { 
// //                                 _desc : 'Fetches the data from the component',
// //                                 _args : { dataName : string },
// //                                 _return : any
// //                             },
// //                             setData : {
// //                                 _desc : 'Assigns the data to the component',
// //                                 _args : { dataName : [ required(string) , object ], value : any },
// //                                 _return : any
// //                             },
// //                             actions : object,
// //                             methods : object
// //                         },
// //                         options : {
// //                             mixins : array
// //                         }
// //                     }
// //                 },
// //                 set : {
// //                     _args : {
// //                         object : required(object),
// //                         key    : required(string),
// //                         value  : required(any)
// //                     }
// //                 },
// //                 addLyteEventListener: {
// //                     _args : {
// //                         element : node,
// //                         eventName : string,
// //                         func : func,
// //                         context : context
// //                     },
// //                     _return : {
// //                         listenerId : string
// //                     }
// //                 },
// //                 appendChild : {
// //                     _args : {
// //                         outlet : required(node),
// //                         component : required(node)
// //                     }
// //                 },
// //                 registerHelper : {
// //                     _args : {
// //                         helperName : string,
// //                         callback : func
// //                     }
// //                 },
// //                 registerCustomPropHandler : {
// //                     _args : {
// //                         propName : required(string)
// //                     }
// //                 },
// //                 registeredComponents : object,
// //                 registeredHelpers : object,
// //                 render : {
// //                     _args : {
// //                         componentName : required(string),
// //                         data : required(object),
// //                         outlet : required(string)
// //                     }
// //                 },
// //                 removeEventListener : {
// //                     _args : {
// //                         element : required(node),
// //                         listenerId : required(string)
// //                     }
// //                 },
// //                 unregisterComponent : {
// //                     _args : {
// //                         componentName : required(string)
// //                     }
// //                 },
// //                 throwEvent : {
// //                     _args : {
// //                         eventName : required(string)
// //                     }
// //                 }
// //                 // insertAfter 
// //                 // insertBefore
// //                 // replaceWith
// //             }
// //         }
// //         //ignorei18n_end
// //     }
// //     const generateStringFrom = function(definitions){
// //         let string = '';
// //         for(let key in definitions){
// //             let value = definitions[key];
// //             if(typeof value === 'object' && !Array.isArray(value)){
// //                 value = generateStringFrom(value);
// //             }
// //             string += ('{'+key+":"+value+'}')
// //         }
// //         return string;
// //     }
// //     // lyteEditor._lyteCoreDefinitions = generateStringFrom(definitions);
// //     console.log(generateStringFrom(definitions));
// // }())
// Lyte.Editor.addLib('LyteCore',function(){
//     /**
//      * @module Lyte
//      */
//     // var Lyte = {
//     //     Component : {
//     //         /**
//     //          * @typedef {object} componentDefinition
//     //          * @property {function} [data] - All the component data is initialized here
//     //          * @property {function} [constructor] - Called before initializing the component
//     //          * @property {function} [init] - Called before the component is rendered
//     //          * @property {function} [didConnect] - Called after the component is rendered
//     //          * @property {function} [didDestroy] - Called after the component is removed from DOM
//     //          * @property {function} [getData]
//     //          * @property {function} [setData]
//     //          * @property {object} [actions]
//     //          * @property {object} [methods]
//     //          */
//     //         /**
//     //          * @typedef {object} componentOptions
//     //          * @property {array} [mixins]
//     //          */
//     //         /**
//     //          * Registers a web-component
//     //          * @param {string} name - This name is the identifier of the web component and it should be hyphenated by convention
//     //          * @param {componentDefinition} definition - The actual behaviour of the component is written here
//     //          * @param {componentOptions} [options] - Additional functionalities are added here
//     //          */
//     //         register : function(name,definition,options){ }
//     //     }
//     // }
//     function Router(){
//         /**
//          * This is a router function
//          * @param {string} sample
//          * @param {string} [arg]
//          */
//         this.routerFunction = function(sample,arg){

//         }
//         return this;
//     }
//     var Lyte = {};
//     Lyte.Router = new Router()
//     Lyte.Router1 = {
//         /**
//          * This is another Router function
//          * @param {string} sample 
//          * @param {any} [arg]       
//          */
//         routerFunction:function(sample,arg){

//         }
//     }
// })
// the ui component must be hardcoded here...
// later the content will be from lyte-ui-component npm package
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
Lyte.Component.register("lyte-editor", {
_template:"<template tag-name=\"lyte-editor\"> <template is=\"if\" value=\"{{ltPropColorize}}\"><template case=\"true\"><pre class=\"colorizeElement\"><code data-lang=\"{{ltPropLanguage}}\" class=\"readOnlyEditor\">{{ltPropValue}}</code></pre></template><template case=\"false\"> <template is=\"if\" value=\"{{ltPropRenderScopedToolbar}}\"><template case=\"true\"> <template is=\"if\" value=\"{{expHandlers(ltPropToolbarYield,'&amp;&amp;',hasYieldedToolbar)}}\"><template case=\"true\"><lyte-yield class=\"lyteEditorToolBar\" yield-name=\"toolbar\"> </lyte-yield></template><template case=\"false\"><template is=\"if\" value=\"{{hasToolbarData}}\"><template case=\"true\"><lyte-editor-toolbar tools-instance=\"{{toolsInstance}}\" current-toolbar-data=\"{{currentToolbarData}}\" class=\"lyteEditorToolBar\" toolbar=\"{{providedToolbarData}}\"> </lyte-editor-toolbar></template></template></template></template> </template></template> <template is=\"if\" value=\"{{ltPropRenderInShadowRoot}}\"><template case=\"true\"> <div id=\"{{_id}}\" class=\"lyteEditor\"> <div class=\"basicEditor\"></div> <div class=\"diffEditor\"></div> </div> </template><template case=\"false\"> <iframe onload=\"{{action('iframeLoaded',this)}}\" src=\"{{editorHtmlPath}}\" id=\"{{_id}}\" height=\"100%\" width=\"100%\"> </iframe> </template></template> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0,0]},{"type":"text","position":[0,0,0]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[0]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"componentDynamic","position":[0]}]}},"default":{}}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}}]}},"default":{}}],
_observedAttributes :["ltPropValue","ltPropLanguage","ltPropOptions","ltPropBasePath","ltPropToolbar","ltPropResourceLinks","ltPropDefaultValue","ltPropLoadOnDemand","ltPropCustomCssPath","ltPropResourceStrings","ltPropCompilerOptions","ltPropCdnLink","ltPropBaseCssAdded","ltPropRenderInShadowRoot","ltPropColorize","ltPropColorizeOptions","ltPropListenForMarkingsChange","ltPropI18nLanguage","ltPropEditorType","ltPropDiffEditorToolbar","ltPropDiffEditorOptions","ltPropOriginalDiffModel","ltPropModifiedDiffModel","ltPropRenderScopedToolbar","ltPropHideReadOnlyPrompt","_id","editorInstance","diffEditorInstance","diffNavigatorInstance","hasYieldedToolbar","current","editorHtmlPath","monaco","originalDiffModel","modifiedDiffModel","hasToolbarData","providedToolbarData","currentToolbarData","basicToolbarState","diffToolbarState","modifiedDiffEditorInstance","originalDiffEditorInstance","_loadBasicEditorTriggered","_loadDiffEditorTriggered","basicEditorOptionsToUpdate","diffEditorOptionsToUpdate","toolsInstance","connectedToolbar","connectedLayout","valueLoadedFromModel"],

	data: function () {
		return {
			//ignorei18n_start
			// exposed variables
			ltPropValue: Lyte.attr('string', { default: '' }),
			ltPropLanguage: Lyte.attr('string', { default: 'plaintext' }),
			ltPropOptions: Lyte.attr('object', { default: {} }),
			ltPropBasePath: Lyte.attr('string', { default: '' }),
			ltPropToolbar: Lyte.attr('array'),//No I18n
			// ltPropToolbarYield: Lyte.attr('boolean', { default: false }),
			ltPropResourceLinks: Lyte.attr('array', { default: [] }),
			ltPropDefaultValue: Lyte.attr('string'),
			ltPropLoadOnDemand: Lyte.attr('object', {
				default: {
					[Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR]: false,
					[Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR]: false
				}
			}),
			ltPropCustomCssPath: Lyte.attr('string'),
			ltPropResourceStrings: Lyte.attr('array', { default: [] }),
			ltPropCompilerOptions: Lyte.attr('object', { default: {} }),
			ltPropCdnLink: Lyte.attr('string', { default: '' }),
			ltPropBaseCssAdded: Lyte.attr('boolean', { default: false }),
			ltPropRenderInShadowRoot: Lyte.attr('boolean', { default: false }), //No I18n
			ltPropColorize: Lyte.attr('boolean', { default: false }),//No I18n
			ltPropColorizeOptions: Lyte.attr('object', { default: {} }),//No I18n
			ltPropListenForMarkingsChange: Lyte.attr('boolean', { default: false }),//No I18n
			ltPropI18nLanguage: Lyte.attr('string'),//No I18n
			ltPropEditorType: Lyte.attr('string', { default: Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR }),
			ltPropDiffEditorToolbar: Lyte.attr('array'),//No I18n
			ltPropDiffEditorOptions: Lyte.attr('object', { default: {} }),
			ltPropOriginalDiffModel: Lyte.attr('object'),
			ltPropModifiedDiffModel: Lyte.attr('object'),
			ltPropRenderScopedToolbar: Lyte.attr('boolean', { default: true }),
			ltPropHideReadOnlyPrompt: Lyte.attr('boolean', { default: false }),
			// internal variables
			_id: Lyte.attr('string'),
			editorInstance: Lyte.attr('object'),
			diffEditorInstance: Lyte.attr('object'),
			diffNavigatorInstance: Lyte.attr('object'),
			hasYieldedToolbar: Lyte.attr('boolean', { default: false }),
			current: Lyte.attr('object'),
			editorHtmlPath: Lyte.attr('string', { default: '' }),
			monaco: Lyte.attr('object', { default: {} }),
			originalDiffModel: Lyte.attr('object'),
			modifiedDiffModel: Lyte.attr('object'),
			hasToolbarData: Lyte.attr('boolean', { default: false }),
			providedToolbarData: Lyte.attr('array'),
			currentToolbarData: Lyte.attr('object', { default: {} }),
			basicToolbarState: Lyte.attr('object', { default: {} }),
			diffToolbarState: Lyte.attr('object', { default: {} }),
			modifiedDiffEditorInstance: Lyte.attr('object'),
			originalDiffEditorInstance: Lyte.attr('object'),
			_loadBasicEditorTriggered: Lyte.attr('boolean', { default: false }),
			_loadDiffEditorTriggered: Lyte.attr('boolean', { default: false }),
			basicEditorOptionsToUpdate: Lyte.attr('object', { default: {} }),
			diffEditorOptionsToUpdate: Lyte.attr('object', { default: {} }),
			toolsInstance: Lyte.attr('object', { default: {} }),
			connectedToolbar: Lyte.attr('object'),
			connectedLayout: Lyte.attr('object'),
			valueLoadedFromModel: Lyte.attr('boolean', { default: false })
			//ignorei18n_end
		}
	},
	init: function () {
		if (!this.data.ltPropBasePath && _led.basePath) {
			this.setData('ltPropBasePath', _led.basePath);
		}
		let basePath = this.data.ltPropBasePath || _led.basePath;
		_led.initializeGlobalPaths(basePath, this.data.ltPropCdnLink);
		if (basePath && _led.checkType.isLink(basePath.trim())) {
			if (!this.data.ltPropBaseCssAdded) {
				_led.loadBaseCss();
			}
		} else {
			_led.throw.error(_led.error.INVALID_BASE_PATH, basePath);
		}
		this.setData('toolsInstance', _led.tools()); //No I18n
		this.setData('editorHtmlPath', _led.pathFor.iframeEditor.html);//No I18n
		this.setData('_id', _led.getId());
		this.triggerMethod('onBeforeLoad', this);
		this.throwCustomEvent('before-load', this);//No I18n
		// this.throwEvent('beforeload', this);// ! Deprecated @2.0.0
		const providedToolbarData = this.basedOnTypeGet('providedToolbarData');//No I18n
		this.setData({
			providedToolbarData: providedToolbarData || [],
			hasToolbarData: !!providedToolbarData,
			hasYieldedToolbar: !!this.$node.querySelector('template[yield-name="toolbar"]')//No I18n
		});
		this.generateCurrentOptions();
		if (!this.argsCache) {
			this.argsCache = {};
		}
		this.argsCache[this.data._id] = _led.createArgsCache();
	},
	connectWith: function (object) {
		for (let key in object) {
			const node = object[key];
			switch (key) {
				case 'toolbar': {
					this.setData('connectedToolbar', node);//No I18n
				}
					break;
				case 'layout': {
					this.setData('connectedLayout', node);//No I18n
				}
			}
		}
	},
	throwCustomEvent: function (eventName, args) {
		const config = {
			bubbles: false,
			cancelable: false
		}
		const customEvent = new Event(eventName, config);
		customEvent.arguments = args;
		this.$node.dispatchEvent(customEvent);
	},
	activateEditorBasedOnType: function (nodeToQuery) {
		const classToMakeActive = this.data.ltPropEditorType;
		const activeClass = 'activeEditor';//No I18n
		const alreadyActiveNode = nodeToQuery.querySelector('.' + activeClass)
		const isSameNodeAlreadyActive = alreadyActiveNode ? alreadyActiveNode.classList.contains(classToMakeActive) : false;
		if (!isSameNodeAlreadyActive) {
			if (alreadyActiveNode) {
				alreadyActiveNode.classList.remove(activeClass);
			}
			nodeToQuery.querySelector('.' + classToMakeActive).classList.add(activeClass);//No I18n
		}
	},
	generateCurrentOptions: function () {
		const options = this.data.ltPropOptions || {};
		const diffOptions = this.data.ltPropDiffEditorOptions || {};
		const generateStateFrom = function (opts) {
			const state = {};
			if (opts.hasOwnProperty('theme')) {
				if (opts.theme !== _led.DARK_THEME && opts.theme !== _led.LIGHT_THEME) {
					const ltPropToolbar = this.data.ltPropToolbar;
					const ltPropDiffEditorToolbar = this.data.ltPropDiffEditorToolbar;
					if (ltPropToolbar || ltPropDiffEditorToolbar) {
						if (opts.isDarkTheme) {
							state.toggleDarkMode = true;
							_led.updateEnum('DARK_THEME', opts.theme);//No I18n
						} else {
							_led.updateEnum('LIGHT_THEME', opts.theme);//No I18n
						}
					}
				}
				state.theme = opts.theme;
			}
			return Object.assign(state, {
				fontSize: opts.fontSize,
				toggleWrap: opts.wordWrap,
				formatOnType: opts.formatOnType
			});
		}
		this.setData('basicToolbarState', generateStateFrom.call(this, options));//No I18n
		this.setData('diffToolbarState', generateStateFrom.call(this, diffOptions));//No I18n
	},
	overrideOptionsWith: function (options) {
		const editorType = this.data.ltPropEditorType;
		const defaultOptions = _led.EDITOR_OPTIONS[editorType];
		const filteredOptions = Object.assign({}, defaultOptions, options);
		const customOptions = _led._customOptions[editorType];
		customOptions.forEach(function (opt) {
			delete filteredOptions[opt];
		})
		return filteredOptions;
	},
	applyCurrentToolbarData: function () {
		const toolbar = this.data.connectedToolbar || this.$node.querySelector('lyte-editor-toolbar');//No I18n
		if (toolbar) {
			let current = this.basedOnTypeGet('toolbarState');//No I18n
			const options = this.data.ltPropOptions;//No I18n
			const diffOptions = this.data.ltPropDiffEditorOptions;
			/**
			 * ! Exceptional Handling < Same Reference problem >
			 * This is done as there is a possibility that ltPropOptions and 
			 * ltPropDiffEditorOptions can have the same reference
			 * And lyte-editor wont get any hold of the changed event as 
			 * the changes in the ltPropOptions and ltPropDiffEditorOptions are linked
			 * 
			 * So, this check has been introduced
			 * If the references are different, the options update should 
			 * only be done via the updateOptions / updateDiffEditorOptions util
			 */
			if (options === diffOptions) {
				Object.assign(current, options);
				current = this.modifyOptionsForState(current);
			}
			this.setData('currentToolbarData', current);//No I18n
			for (let key in current) {
				this.$node.triggerAction(key, current[key]);
			}
		}
	},
	syncToolbarValuesWithOptions: function (editorType, options) {
		const toolbar = this.data.connectedToolbar || this.$node.querySelector('lyte-editor-toolbar');//No I18n
		if (toolbar) {
			const providedToolbarData = this.basedOnTypeGet('providedToolbarData', editorType) || [];
			providedToolbarData.forEach(function (tool) {
				if (_led.checkType.object(tool)) {
					const key = Object.keys(tool)[0];
					if (key && tool[key].hasOwnProperty('default')) {
						options[key] = tool[key].default;
					}
				}
			})
		}
	},
	syncOptions: function () {
		const instance = this.basedOnTypeGet('instance');//No I18n
		const options = this.basedOnTypeGet('options');//No I18n
		instance.updateOptions(options);
	},
	setCompilerOptions: function (monaco, compilerOptions) {
		for (let language in compilerOptions) {
			_led.setCompilerOptionsFor(monaco, language, compilerOptions[language]);
		}
	},
	includePlugins: function (monaco, instance) {
		const data = this.data;
		const pluginArgMap = {
			includeDocumentFormatter: [monaco],
			includeDocumentValidator: [monaco, instance, data],
			includeLangConfig: [monaco]
		}
		for (let plugin in pluginArgMap) {
			if (_led[plugin]) {
				_led[plugin].apply(_led, pluginArgMap[plugin])
			}
		}
	},
	modifyMarkingsObject: function (monaco, marking) {
		return {
			range: {
				startColumn: marking.startColumn,
				endColumn: marking.endColumn,
				startLineNumber: marking.startLineNumber,
				endLineNumber: marking.endLineNumber
			},
			severity: monaco.MarkerSeverity[marking.severity],
			message: marking.message
		};
	},
	constructLayoutInfo: function (instance, editorType) {
		// - This can be increased in future
		const propGetterFuncMap = {
			//ignorei18n_start
			scrollHeight: 'getScrollHeight',
			editorLayoutInfo: 'getLayoutInfo',
			scrollLeft: 'getScrollLeft',
			scrollTop: 'getScrollTop'
			//ignorei18n_end
		}
		const definedProps = {};
		const baseKey = 'ltProp' + _led.changeCase.toPascal(editorType) + 'Info';//No I18n
		const object = {};
		if (this.data.hasOwnProperty(baseKey)) {
			delete this.data[baseKey];
		}
		Object.defineProperty(this.data, baseKey, {
			get: function () {
				return object;
			},
			set: _led.error.READ_ONLY.bind(_led, baseKey)
		});
		for (let propName in propGetterFuncMap) {
			definedProps[propName] = {
				get: (instance[propGetterFuncMap[propName]]).bind(instance),
				set: _led.error.READ_ONLY.bind(_led, propName)
			}
		}
		Object.defineProperties(object, definedProps);
	},
	loadCustomCssToDoc: function (customCssPath) {
		if (this.data.ltPropRenderInShadowRoot) {
			const editorWrapper = this.$node.querySelector('#' + this.data._id);
			for (let i = 0, len = editorWrapper.childElementCount; i < len; i++) {
				const childNode = editorWrapper.children[i];
				const shadowDocFrag = childNode.shadowRoot;
				if (shadowDocFrag) {
					_led.loadCustomCss(customCssPath, document, shadowDocFrag);
				}
			}
		} else {
			const iframe = this.$node.querySelector('#' + this.data._id);
			const iframeDoc = iframe.contentDocument;
			_led.loadCustomCss(customCssPath, iframeDoc);
		}
	},
	handleReadOnlyEditors: function (editorDiv, isReadOnly) {
		const hideReadOnlyPrompt = this.data.ltPropHideReadOnlyPrompt;
		if (hideReadOnlyPrompt) {
			const toggleClass = 'lyte-readonly-editor';//No I18n
			if (isReadOnly) {
				editorDiv.classList.add(toggleClass);
			} else {
				editorDiv.classList.remove(toggleClass);
			}
		}
	},
	loadBasicEditor: function (monaco, editorDiv, options) {
		const editorType = Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR;
		this.syncToolbarValuesWithOptions(editorType, options);
		const editorInstance = monaco.editor.create(editorDiv, options);
		this.setData('editorInstance', editorInstance);
		this.handleReadOnlyEditors(editorDiv, options.readOnly || false);
		this.applyCurrentToolbarData();
		this.$node.editorActions._extendAllCallbacks(monaco, editorInstance, editorType);
		// this.throwEvent('after-basic-editor-load', this, monaco, editorInstance);// ! Deprecated @2.0.0
		// this.throwCustomEvent('onBasicEditorLoad', this, monaco, editorInstance);// ! Deprecated @2.0.0
		this.includePlugins(monaco, editorInstance);
		this.constructLayoutInfo(editorInstance, editorType);
		editorInstance.onDidChangeModelContent(function (obj) {
			const model = editorInstance.getModel();
			if (!model._isLyteRestrictedModel) {
				this.preventObserverLooping = true;
				this.setData('ltPropValue', editorInstance.getValue());//No I18n
				this.triggerMethod('onValueChange', obj, this.data.ltPropValue);//No I18n
			} else if (model._isRestrictedValueValid) {
				this.preventObserverLooping = true;
				this.setData('ltPropValue', editorInstance.getValue());//No I18n
				const currentRanges = model.getCurrentEditableRanges();
				this.triggerMethod('onValueChange', obj, this.data.ltPropValue, currentRanges);//No I18n
			}
		}.bind(this));
		let themeChanged = false;
		editorInstance._themeService.onDidColorThemeChange(function (info) {
			themeChanged = true;
			const lyteEditorNode = this.$node;
			const toolName = 'toggleDarkMode';//No I18n
			const data = this.data || {};
			const dataOptions = this.data.ltPropOptions || {};
			const scopedToolbar = lyteEditorNode ? lyteEditorNode.querySelector('lyte-editor-toolbar') : null;//No I18n
			const toolbar = data.connectedToolbar || scopedToolbar;
			if (toolbar) {
				const infoOfThemeTool = toolbar.getInfoOfTool(toolName);
				if (infoOfThemeTool && !infoOfThemeTool.throwEvent) {
					const themeName = info.themeName;
					const actualValue = themeName === _led.DARK_THEME
					if (infoOfThemeTool.current !== actualValue) {
						Lyte.Component.set(infoOfThemeTool, 'current', actualValue);//No I18n
					}
				}
			}
			Lyte.Component.set(dataOptions, 'theme', info.themeName);
			this.triggerMethod('onOptionsUpdate', { theme: info.themeName }, dataOptions);
		}.bind(this));
		editorInstance.onDidChangeConfiguration(function (monaco, editorDiv, instance, editorOptions) {
			const options = this.data.basicEditorOptionsToUpdate;
			const dataOptions = this.data.ltPropOptions || {};
			const EditorOption = monaco.editor.EditorOption;
			const actuallyUpdatedOptions = {};
			for (let key in options) {
				if (editorOptions.hasChanged(EditorOption[key])) {
					const value = options[key];
					actuallyUpdatedOptions[key] = value;
					Lyte.Component.set(dataOptions, key, value);
				}
			}
			if (themeChanged) {
				actuallyUpdatedOptions.theme = options.theme;
				themeChanged = false;
			}
			if (actuallyUpdatedOptions.hasOwnProperty('readOnly')) {
				const readOnly = instance.getOption(EditorOption.readOnly);
				this.handleReadOnlyEditors(editorDiv, readOnly);
			}
			if (Object.keys(actuallyUpdatedOptions).length > 0) {
				this.triggerMethod('onOptionsUpdate', actuallyUpdatedOptions, dataOptions);
			}
		}.bind(this, monaco, editorDiv, editorInstance));
		const listenForMarkingsChange = this.data.ltPropListenForMarkingsChange;
		if (listenForMarkingsChange) {
			monaco.editor.onDidChangeMarkers(function () {
				const model = editorInstance.getModel();
				const markings = monaco.editor.getModelMarkers(model.id);
				this.triggerMethod('onMarkingsChange', markings.map(this.modifyMarkingsObject.bind(this, monaco)));//No I18n
			}.bind(this));
		}
		this.triggerMethod('onBasicEditorLoad', this, monaco, editorInstance);//No I18n
	},
	loadDiffEditor: function (monaco, editorDiv, options) {
		const diffEditorInstance = monaco.editor.createDiffEditor(editorDiv, options);
		const editorType = Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR;
		this.setData('diffEditorInstance', diffEditorInstance);//No I18n
		this.handleReadOnlyEditors(editorDiv, options.readOnly || false);
		let originalModel = this.data.originalDiffModel;
		let modifiedModel = this.data.modifiedDiffModel;
		if (!originalModel) {
			this.updateDiffModel({
				modelDef: this.data.ltPropOriginalDiffModel,
				dataName: 'originalDiffModel'//No I18n
			});
		}
		if (!modifiedModel) {
			this.updateDiffModel({
				modelDef: this.data.ltPropModifiedDiffModel,
				dataName: 'modifiedDiffModel'//No I18n
			});
		}
		this.loadDiffModelToInstance();
		this.applyCurrentToolbarData();
		const modifiedDiffEditorInstance = diffEditorInstance.getModifiedEditor();
		const originalDiffEditorInstance = diffEditorInstance.getOriginalEditor();
		this.includePlugins(monaco, modifiedDiffEditorInstance);
		this.constructLayoutInfo(modifiedDiffEditorInstance, Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR);
		this.$node.editorActions._extendAllCallbacks(monaco, diffEditorInstance, editorType);
		// this.throwEvent('after-diff-editor-load', this, monaco, editorInstance);// ! Deprecated @2.0.0
		// this.throwCustomEvent('onDiffEditorLoad', this, monaco, editorInstance);
		// diffEditorInstance.onDidUpdateDiff(function () {
		// 	this.preventObserverLooping = true;
		// 	const models = diffEditorInstance.getModel();
		// 	const valuesOfModels = {};
		// 	for (let key in models) {
		// 		const model = models[key];
		// 		valuesOfModels[key] = model.getValue();
		// 	}
		// 	this.setData('ltPropModifiedDiffModel.value', valuesOfModels.modified);
		// 	this.setData('ltPropOriginalDiffModel.value', valuesOfModels.original);
		// 	this.triggerMethod('onDiffEditorValueChange', valuesOfModels);
		// }.bind(this));

		modifiedDiffEditorInstance.onDidChangeModelContent(function (obj) {
			const model = modifiedDiffEditorInstance.getModel();
			if (!model._isLyteRestrictedModel) {
				this.preventObserverLooping = true;
				this.setData('ltPropModifiedDiffModel.value', modifiedDiffEditorInstance.getValue());//No I18n
				this.triggerMethod('onModifiedDiffModelValueChange', obj, this.data.ltPropModifiedDiffModel.value);//No I18n
			} else if (model._isRestrictedValueValid) {
				this.preventObserverLooping = true;
				this.setData('ltPropModifiedDiffModel.value', modifiedDiffEditorInstance.getValue());//No I18n
				this.triggerMethod('onModifiedDiffModelValueChange', obj, this.data.ltPropModifiedDiffModel.value);//No I18n
			}
		}.bind(this));
		originalDiffEditorInstance.onDidChangeModelContent(function (obj) {
			this.preventObserverLooping = true;
			this.setData('ltPropOriginalDiffModel.value', originalDiffEditorInstance.getValue());//No I18n
			this.triggerMethod('onOriginalDiffModelValueChange', obj, this.data.ltPropOriginalDiffModel.value);//No I18n
		}.bind(this));

		let themeChanged = false;
		modifiedDiffEditorInstance._themeService.onDidColorThemeChange(function (info) {
			themeChanged = true;
			const lyteEditorNode = this.$node;
			const toolName = 'toggleDarkMode';//No I18n
			const data = this.data || {};
			const dataOptions = this.data.ltPropDiffEditorOptions || {};
			const scopedToolbar = lyteEditorNode ? lyteEditorNode.querySelector('lyte-editor-toolbar') : null;//No I18n
			const toolbar = data.connectedToolbar || scopedToolbar;
			if (toolbar) {
				const infoOfThemeTool = toolbar.getInfoOfTool(toolName);
				if (infoOfThemeTool && !infoOfThemeTool.throwEvent) {
					const themeName = info.themeName;
					const actualValue = themeName === _led.DARK_THEME
					if (infoOfThemeTool.current !== actualValue) {
						Lyte.Component.set(infoOfThemeTool, 'current', actualValue);//No I18n
					}
				}
			}
			Lyte.Component.set(dataOptions, 'theme', info.themeName);
			this.triggerMethod('onDiffEditorOptionsUpdate', { theme: info.themeName }, dataOptions);
		}.bind(this));
		modifiedDiffEditorInstance.onDidChangeConfiguration(function (monaco, editorDiv, instance, editorOptions) {
			const options = this.data.diffEditorOptionsToUpdate;
			const dataOptions = this.data.ltPropDiffEditorOptions || {};
			const EditorOption = monaco.editor.EditorOption;
			const actuallyUpdatedOptions = {};
			for (let key in options) {
				if (editorOptions.hasChanged(EditorOption[key])) {
					const value = options[key];
					actuallyUpdatedOptions[key] = value;
					Lyte.Component.set(dataOptions, key, value);
				}
			}
			if (themeChanged) {
				actuallyUpdatedOptions.theme = options.theme;
				themeChanged = false;
			}
			if (actuallyUpdatedOptions.hasOwnProperty('readOnly')) {
				const readOnly = instance.getOption(EditorOption.readOnly);
				this.handleReadOnlyEditors(editorDiv, readOnly);
			}
			this.triggerMethod('onDiffEditorOptionsUpdate', actuallyUpdatedOptions, dataOptions);//No I18n
		}.bind(this, monaco, editorDiv, modifiedDiffEditorInstance));

		this.setData({
			modifiedDiffEditorInstance: modifiedDiffEditorInstance,
			originalDiffEditorInstance: originalDiffEditorInstance
		})
		this.triggerMethod('onDiffEditorLoad', this, monaco, diffEditorInstance);//No I18n
	},
	updateDiffModel: function (definition) {
		const monaco = this.data.monaco;
		if (monaco) {
			definition = definition || {};
			const changedKey = definition.changedKey;
			const modelDef = definition.modelDef || {};
			const dataName = definition.dataName;

			const value = modelDef.value || '';
			const language = modelDef.language;
			const uri = modelDef.uri;

			const actualModel = this.data[dataName] || monaco.editor.createModel(value, language, uri);

			if (changedKey) {
				switch (changedKey) {
					case 'value': {
						actualModel.setValue(modelDef[changedKey]);
					}
						break;
					case 'language': {
						monaco.editor.setModelLanguage(actualModel, modelDef[changedKey]);
					}
						break;
				}
			}
			this.setData(dataName, actualModel);
		}
	},
	loadDiffModelToInstance: function () {
		const diffEditorInstance = this.data.diffEditorInstance;
		const originalDiffModel = this.data.originalDiffModel;
		const modifiedDiffModel = this.data.modifiedDiffModel;
		if (diffEditorInstance && originalDiffModel && modifiedDiffModel) {
			diffEditorInstance.setModel({
				original: originalDiffModel,
				modified: modifiedDiffModel
			});
		}
	},
	addAllPreloadedValues: function (monaco) {
		// all the api should have an entry here
		_led.addPreloadedThemes(monaco);
	},
	checkForCheckPointsInModel: function () {
		const editorType = this.data.ltPropEditorType;
		const instanceOfEditor = this.basedOnTypeGet('instanceOfEditor');//No I18n
		if (editorType === _led.EDITOR_TYPES.BASIC_EDITOR) {
			const model = instanceOfEditor.getModel();
			if (model._isCursorAtCheckPoint) {
				const selections = instanceOfEditor.getSelections()
				const positions = selections.map(function (selection) {
					return {
						lineNumber: selection.positionLineNumber,
						column: selection.positionColumn
					}
				});
				model._isCursorAtCheckPoint(positions);
				model._currentCursorPositions = selections;
			}
		}
	},
	initializeShadowRoot: function (data) {
		const className = this.data.ltPropEditorType;
		const selector = '#' + data._id + ' .' + className;//No I18n
		const shadowParent = this.$node.querySelector(selector);
		const shadowRoot = shadowParent.attachShadow({ mode: 'open' }); //No I18n
		const actualPath = _led.pathFor.monaco.baseFolder;
		const editorDiv = document.createElement('div');
		shadowRoot.appendChild(editorDiv);
		editorDiv.style.width = "100%";//No I18n
		editorDiv.style.height = "100%";//No I18n
		const innerStyle = document.createElement('style');
		const content = [
			//ignorei18n_start
			'@import "' + actualPath + '/editor/editor.main.css";',
			'@import "' + _led.pathFor.editorContextCss
			//ignorei18n_end
		];
		innerStyle.innerText = content.join('\n');//No I18n
		shadowRoot.appendChild(innerStyle);
		_led.addFontFaceForShadowRoot(data, document);
		return editorDiv;
	},
	initializeBasicEditor: function (doc, monaco, data) {
		const argsCache = this.argsCache[this.data._id];
		let editorDiv = null;
		if (this.data.ltPropRenderInShadowRoot) {
			editorDiv = this.initializeShadowRoot(data);
		} else {
			editorDiv = doc.querySelector('.lyteEditor .basicEditor');//No I18n
		}
		if (!editorDiv._fnToValidateCheckPointsAdded) {
			const listenerFn = this.checkForCheckPointsInModel.bind(this);
			editorDiv.addEventListener('keydown', listenerFn, true);
			editorDiv._fnToValidateCheckPointsAdded = listenerFn;
		}
		const options = this.overrideOptionsWith(data.ltPropOptions);
		const customCssPath = data.ltPropCustomCssPath;
		const compilerOptions = data.ltPropCompilerOptions || {};
		this.setCompilerOptions(monaco, compilerOptions);
		this.addAllPreloadedValues(monaco);
		options.value = data.ltPropValue || data.ltPropDefaultValue;
		options.language = data.ltPropLanguage;

		argsCache.saveFor('loadBasicEditor', monaco, editorDiv, options);//No I18n
		if (!data.ltPropLoadOnDemand[Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR] || this.data._loadBasicEditorTriggered) {
			argsCache.callFnAndRmCache.call(this, 'loadBasicEditor');//No I18n
			delete this.data._loadBasicEditorTriggered;
		}
		if (this.data.ltPropDefaultValue === undefined) {
			this.setData('ltPropDefaultValue', this.data.ltPropValue);//No I18n
		}
		if (customCssPath) {
			this.loadCustomCssToDoc(customCssPath);
		}
	},
	initializeDiffEditor: function (doc, monaco, data) {
		const argsCache = this.argsCache[this.data._id];
		let editorDiv = null;
		if (this.data.ltPropRenderInShadowRoot) {
			editorDiv = this.initializeShadowRoot(data);
		} else {
			editorDiv = doc.querySelector('.lyteEditor .diffEditor');//No I18n
		}
		if (!editorDiv._fnToValidateCheckPointsAdded) {
			const listenerFn = this.checkForCheckPointsInModel.bind(this);
			editorDiv.addEventListener('keydown', listenerFn, true);
			editorDiv._fnToValidateCheckPointsAdded = listenerFn;
		}
		const options = this.overrideOptionsWith(data.ltPropDiffEditorOptions);
		const customCssPath = data.ltPropCustomCssPath;
		const compilerOptions = data.ltPropCompilerOptions || {};
		this.setCompilerOptions(monaco, compilerOptions);
		this.addAllPreloadedValues(monaco);

		argsCache.saveFor('loadDiffEditor', monaco, editorDiv, options);//No I18n
		if (!data.ltPropLoadOnDemand[Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR] || this.data._loadDiffEditorTriggered) {
			argsCache.callFnAndRmCache.call(this, 'loadDiffEditor');//No I18n
			delete this.data._loadDiffEditorTriggered;
		}
		if (customCssPath) {
			this.loadCustomCssToDoc(customCssPath);
		}
	},
	initializeEditor: function (doc, win, monaco) {
		this.setData('monaco', monaco);//No I18n
		_led.updateEnum('MONACO_SRC_LOADED', true);//No I18n
		_led.pubsub.fire('MONACO_LOADED', monaco);//No I18n
		this.throwEvent('editor-core-loaded');//No I18n
		const data = this.getData();
		const argsCache = this.argsCache[this.data._id];
		win.addEventListener('resize', _led.updateEditorLayout.bind(_led, this));
		if (!data.ltPropRenderInShadowRoot || !_led._listenersAddedToWindow) {
			/**
			 * data.ltPropRenderInShadowRoot => A
			 * _led._listenersAddedToWindow => B
			 * 					
			 * # Case 1 : Rendered in Shadow root
			 * - Add these listener to the window,only if the `addedListener` value is false
			 * - State A - true =>   Output State depends on failure of State B and it will be inverse of State B
			 * 
			 * # Case 2 : Rendered in Iframe
			 * - Add these listener to the window regardless of 2nd state
			 * - State A - false =>   Output State does not depend on State B
			 * 
			 */
			// https://github.com/microsoft/monaco-editor/issues/2382#issuecomment-796741318
			win.addEventListener('unhandledrejection', function (event) {
				if (event.reason && event.reason.name === 'Canceled') {
					// monaco editor promise cancellation
					event.preventDefault();
				}
			});
			if (data.ltPropRenderInShadowRoot) {
				_led._listenersAddedToWindow = true;
			}
		}


		const resourceLinks = data.ltPropResourceLinks || [];
		const resourceStrings = data.ltPropResourceStrings || [];

		_led.refreshAllLibsFrom(monaco, resourceLinks, this);
		resourceStrings.forEach(function (string) {
			_led.addLib(monaco, string);
		});

		argsCache.saveFor('initializeBasicEditor', doc, monaco, data);
		argsCache.saveFor('initializeDiffEditor', doc, monaco, data);

		if (data.ltPropEditorType === Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR) {
			argsCache.callFn.call(this, 'initializeBasicEditor');//No I18n
		} else if (data.ltPropEditorType === Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR) {
			argsCache.callFn.call(this, 'initializeDiffEditor');//No I18n
		}
	},
	addUtilFunction: function (key, callback) {
		const node = this.$node;
		node[key] = callback;
	},
	triggerMethod: function (methodName) {
		if (this.methods.hasOwnProperty(methodName)) {
			return this.executeMethod.apply(this, Array.from(arguments))
		}
	},
	addEventListenersToTools: function () {
		const yieldedToolbar = this.$node.querySelector('lyte-yield[yield-name="toolbar"]');
		const toolNodes = yieldedToolbar.querySelectorAll('[trigger-action]');
		const node = this.$node;
		const id = this.data._id;
		toolNodes.forEach(function (toolNode) {
			const actionName = toolNode.getAttribute('trigger-action');
			const listenerFunc = function () {
				const tool = this.data.toolsInstance[actionName];
				if (tool) {
					node.triggerAction(actionName, tool.current, tool);
				}
			}
			_led.holdReferenceOf(toolNode, 'click', listenerFunc, id);
			toolNode.addEventListener('click', listenerFunc, true);
		});
	},
	injectSourceFiles: function (iframe) {
		const iframeDoc = iframe.contentDocument;
		const iframeWin = iframe.contentWindow;
		// const data = this.getData();
		// Send the necessary data from here
		iframeWin.infoFromParent = {
			_led: _led,
			editorComp: this
		}
		_led.loadResources(_led.path.relative(_led.pathFor.iframeEditor.baseFolder, _led.pathFor.iframeEditor.js), iframeDoc);//No I18n
		// ? initializeEditor will be called from iframe - editor.js
	},
	colorizeElement: function (monaco) {
		this.setData('monaco', monaco);//No I18n
		this.throwEvent('editor-core-loaded');//No I18n
		const options = this.data.ltPropColorizeOptions;
		const colorizeNode = this.$node.querySelector('.colorizeElement code');//No I18n
		monaco.editor.colorizeElement(colorizeNode, options);//No I18n
	},
	getConfigForRequire: function (insideIframe) {
		const data = this.getData();
		let actualPath = _led.pathFor.monaco.baseFolder;
		const i18nLang = data.ltPropI18nLanguage;
		const listOfSupportedLanguages = _led.LANGS_SUPPORTED_BY_MONACO;
		const isLanguageSupported = listOfSupportedLanguages.hasOwnProperty(i18nLang);

		if (insideIframe) {
			actualPath = _led.path.relative(_led.pathFor.iframeEditor.baseFolder, actualPath);
		}

		const config = {
			'paths': { vs: actualPath } //No I18n
			// 'vs/css': { disabled: true }
		};
		if (isLanguageSupported) {
			config["vs/nls"] = { //No I18n
				availableLanguages: {
					"*": i18nLang
				}
			}
		}
		return config;
	},
	basedOnTypeGet: function (valueToGet, providedEditorType) {
		const EditorTypes = Lyte.Editor.EDITOR_TYPES;
		const basicEditor = EditorTypes.BASIC_EDITOR;
		const diffEditor = EditorTypes.DIFF_EDITOR;
		const type = _led.checkType;
		const editorType = providedEditorType || this.data.ltPropEditorType;
		if (!this.valueMappings) {
			this.valueMappings = {
				cacheObject: {
					[basicEditor]: this.data.basicEditorOptionsToUpdate,
					[diffEditor]: this.data.diffEditorOptionsToUpdate
				},
				instance: {
					[basicEditor]: this.getData.bind(this, 'editorInstance'),
					[diffEditor]: this.getData.bind(this, 'diffEditorInstance')
				},
				instanceOfEditor: {
					[basicEditor]: this.getData.bind(this, 'editorInstance'),
					[diffEditor]: function () {
						const diffEditorInstance = this.getData('diffEditorInstance');//No I18n
						if (diffEditorInstance) {
							return diffEditorInstance.getModifiedEditor();
						}
					}
				},
				optionsUpdateMethodName: {
					[basicEditor]: 'onOptionsUpdate',//No I18n
					[diffEditor]: 'onDiffEditorOptionsUpdate'//No I18n
				},
				toolbarState: {
					[basicEditor]: this.getData.bind(this, 'basicToolbarState'),
					[diffEditor]: this.getData.bind(this, 'diffToolbarState')
				},
				providedToolbarData: {
					[basicEditor]: this.getData.bind(this, 'ltPropToolbar'),
					[diffEditor]: this.getData.bind(this, 'ltPropDiffEditorToolbar')
				},
				modelInstance: {
					[basicEditor]: function () {
						const editorInstance = this.data.editorInstance;
						return editorInstance.getModel();
					},
					[diffEditor]: function () {
						const diffEditorInstance = this.data.diffEditorInstance;
						return diffEditorInstance.getModifiedEditor().getModel();
					}
				},
				options: {
					[basicEditor]: this.getData.bind(this, 'ltPropOptions'),
					[diffEditor]: this.getData.bind(this, 'ltPropDiffEditorOptions')
				},
				optionsDataName: {
					[basicEditor]: 'ltPropOptions',//No I18n
					[diffEditor]: 'ltPropDiffEditorOptions'//No I18n
				}
			};
			this.valueMappings.editorState = {
				[basicEditor]: {
					type: basicEditor,
					editorInstance: this.valueMappings.instance[basicEditor],
					toolbar: this.valueMappings.toolbarState[basicEditor]
				},
				[diffEditor]: {
					type: diffEditor,
					editorInstance: this.valueMappings.instance[diffEditor],
					toolbar: this.valueMappings.toolbarState[diffEditor]
				}
			}
		}
		if (Array.isArray(valueToGet)) {
			return valueToGet.reduce(function (acc, valKey) {
				let value = this.valueMappings[valKey][editorType];
				if (type.function(value)) {
					value = value.call(this);
				}
				acc[valKey] = value;
				return acc;
			}.bind(this), {})
		} else {
			const valueObject = this.valueMappings[valueToGet] || {};
			let value = valueObject[editorType];
			if (type.function(value)) {
				return value.call(this);
			}
			return value || null;
		}
	},
	getRawOptions: function (instance) {
		const instanceType = instance.getEditorType();
		const monaco = this.data.monaco;
		let rawOptions = {};
		if (monaco) {
			switch (instanceType) {
				case monaco.editor.EditorType.IDiffEditor: {
					rawOptions = instance.getModifiedEditor().getRawOptions();
				}
					break;
				case monaco.editor.EditorType.ICodeEditor: {
					rawOptions = instance.getRawOptions();
				}
					break;
			}
		}
		return rawOptions;
	},
	modifyOptionsForState: function (options) {
		const modifiedOptions = {};
		for (let key in options) {
			switch (key) {
				case 'theme': {
					modifiedOptions.toggleDarkMode = options[key] === _led.DARK_THEME;
					modifiedOptions.theme = options[key];
				}
					break;
				case 'fontSize': {

				}
					break;
				default: {
					modifiedOptions[key] = options[key];
				}
			}
		}
		return modifiedOptions;
	},
	getArgsForOptionUpdate: function (key, value, internalUpdate, editorType) {
		const type = _led.checkType;
		let options = {};
		if (type.object(key)) {
			options = key;
		} else if (type.string(key)) {
			options = { [key]: value };
		} else {
			_led.throw.error(_led.error.TYPE_MUST_BE, 'object (or) a string key & value', 'options');//No I18n
			return;
		}
		const internalVars = this.basedOnTypeGet(['instance', 'cacheObject'], editorType);//No I18n
		const instance = internalVars.instance;
		const cacheObject = internalVars.cacheObject;
		return [
			instance,
			options,
			cacheObject,
			internalUpdate,
			editorType
		]
	},
	overrideToolsIfNecessary: function (toolObject, toolbar) {
		if (toolObject.hasOwnProperty('options') && !toolObject.options.includes(toolObject.current)) {
			toolbar.component.overrideTools();
		}
	},
	updateOptionsInInstance: function (instance, options, cacheObject, internalUpdate, desiredEditorType) {
		if (instance) {
			const actualEditorType = this.data.ltPropEditorType;
			desiredEditorType = desiredEditorType || actualEditorType;
			const state = this.basedOnTypeGet('toolbarState', desiredEditorType);//No I18n
			Object.assign(cacheObject, options);
			const toolbar = this.data.connectedToolbar || this.$node.querySelector('lyte-editor-toolbar');//No I18n
			if (toolbar) {
				const tools = toolbar.component.data.tools;
				if (internalUpdate !== true && desiredEditorType === actualEditorType) { // ? Dont remove true , it is there for a purpose
					for (let keyName in options) {
						const optionValue = options[keyName];
						switch (keyName) {
							case 'theme': {
								const toggleDarkMode = optionValue === _led.DARK_THEME ? true : (optionValue === _led.LIGHT_THEME ? false : null);
								if (toggleDarkMode !== null) {
									const toolObject = tools.leftAligned.toggleDarkMode || tools.rightAligned.toggleDarkMode || {};
									Lyte.Component.set(toolObject, 'current', toggleDarkMode);//No I18n
									Lyte.Component.set(state, keyName, toggleDarkMode);
									this.overrideToolsIfNecessary(toolObject, toolbar);
								}
							}
								break;
							case 'fontSize': {
								const toolObject = tools.leftAligned[keyName] || tools.rightAligned[keyName] || {};
								Lyte.Component.set(toolObject, 'current', optionValue);//No I18n
								Lyte.Component.set(state, keyName, optionValue);
								this.overrideToolsIfNecessary(toolObject, toolbar);
							}
								break;
							case 'toggleWrap': {
								const toolObject = tools.leftAligned[keyName] || tools.rightAligned[keyName] || {};
								Lyte.Component.set(toolObject, 'isActive', optionValue === 'on');//No I18n
								Lyte.Component.set(state, keyName, optionValue);
								this.overrideToolsIfNecessary(toolObject, toolbar);
							}
								break;
							case 'formatOnType': {
								const toolObject = tools.leftAligned[keyName] || tools.rightAligned[keyName] || {};
								Lyte.Component.set(toolObject, 'isActive', optionValue);//No I18n
								Lyte.Component.set(state, keyName, optionValue);
								this.overrideToolsIfNecessary(toolObject, toolbar);
							}
								break;
						}
					}
				} else {
					const modifiedOptions = this.modifyOptionsForState(options);
					Object.assign(state, modifiedOptions);
				}
			}
			instance.updateOptions(options);
			const exposedOptionsData = this.basedOnTypeGet('options');
			for (let key in options) {
				Lyte.Component.set(exposedOptionsData, key, options[key]);
			}
			const methodName = this.basedOnTypeGet('optionsUpdateMethodName');//No I18n
			this.triggerMethod(methodName, options, exposedOptionsData);
		}
	},
	updateOptionsWrapper: function (key, value, internalUpdate, editorType) {
		const argsForUpdate = this.getArgsForOptionUpdate(
			key,
			value,
			internalUpdate,
			editorType
		);
		this.updateOptionsInInstance.apply(this, argsForUpdate);
	},
	didConnect: function () {
		const data = this.getData();
		if (data.hasYieldedToolbar) {
			this.addEventListenersToTools();
		}
		// const actualPath = _led.pathFor.monaco.baseFolder;
		const config = this.getConfigForRequire();
		if (data.ltPropColorize) {
			if (window.monaco) {
				this.colorizeElement(window.monaco);
			} else {
				_led.loadResources(_led.pathFor.monaco.loaderFile, document, null, null, (function () {//No I18n
					require.config(config);
					require(["vs/editor/editor.main"], this.colorizeElement.bind(this)); //No I18n
				}).bind(this));
			}
		} else if (data.ltPropRenderInShadowRoot) {
			this.activateEditorBasedOnType(this.$node);
			const states = _led.state.registeredStates;
			const monacoLoadingTriggered = states.MONACO_LOADING_TRIGGERED;
			const monacoLoaded = states.MONACO_LOADED;
			const isLoadingOfMonacoTriggered = monacoLoadingTriggered.value;
			const isMonacoLoaded = monacoLoaded.value;
			if (isMonacoLoaded) {
				this.initializeEditor(document, window, window.monaco);
			} else {
				if (isLoadingOfMonacoTriggered) {
					monacoLoaded.oneTimeListener(function () {
						this.initializeEditor(document, window, window.monaco);
					}.bind(this));
				} else {
					monacoLoadingTriggered.set(true);
					// _led.loadResources(_led.pathFor.editorContextCss, document);//No I18n
					_led.loadResources(_led.pathFor.monaco.loaderFile, document, null, null, (function () {//No I18n
						require.config(config);
						require(["vs/editor/editor.main"], function () { //No I18n
							monacoLoaded.set(true);
							this.initializeEditor(document, window, window.monaco);
						}.bind(this)); //No I18n
					}).bind(this));
				}
			}
		}
	},
	didDestroy: function () {
		if (this.data.editorInstance) {
			this.data.editorInstance.dispose();
		}
		if (this.data.diffEditorInstance) {
			this.data.diffEditorInstance.dispose();
		}
		this.disposeUtils();
		delete this.disposeUtils;
		delete this.data.editorInstance;
		delete this.data.diffEditorInstance;
		delete this.argsCache;
		delete this.valueMappings;
		_led.flush(this.getData('_id'));
	},
	actions: {
		triggerEditorAction: function () {
			this.$node.triggerAction.apply(this, arguments);
		},
		updateOptions: function (key, value) {
			this.updateOptionsWrapper(key, value, true);
		},
		iframeLoaded: function (iframe) {
			this.activateEditorBasedOnType(iframe.contentDocument.body);
			this.injectSourceFiles(iframe);
		}
	},
	methods: {
		checkTheme: function (node) {
			/**
			 * !Deprecated Content. Has to be removed in next version 
			 */
			// const editorInstance = this.getData('editorInstance');
			// if (editor) {
			// 	const currentTheme = editor._themeService.getTheme().themeName;
			// 	const darkModeClass = _led.DARK_MODE_CLASS;//No I18n
			// 	if (currentTheme === _led.DARK_THEME) {
			// 		node.setData('ltPropWrapperClass', [wrapperClass, darkModeClass].join(' '));//No I18n
			// 	} else {
			// 		node.setData('ltPropWrapperClass', wrapperClass);//No I18n
			// 	}
			// }
		}
	},
	observer: function (changeObj) {
		const basicEditorInstance = this.data.editorInstance;
		const diffEditorInstance = this.data.diffEditorInstance;
		const monaco = this.data.monaco;
		if ((basicEditorInstance || diffEditorInstance) && changeObj) {
			switch (changeObj.item) {
				case 'ltPropValue': {
					if (!this.preventObserverLooping) {
						if (basicEditorInstance) {
							if (this.data.valueLoadedFromModel) {
								const newModel = monaco.editor.createModel(changeObj.newValue, this.data.ltPropLanguage);
								basicEditorInstance.setModel(newModel);
							} else {
								basicEditorInstance.setValue(changeObj.newValue);
							}
							this.setData('valueLoadedFromModel', false);
						}
					}
					this.preventObserverLooping = false;
				}
					break;
				case 'ltPropLanguage': {
					if (basicEditorInstance) {
						monaco.editor.setModelLanguage(basicEditorInstance.getModel(), changeObj.newValue);
					}
				}
					break;
				case 'ltPropResourceStrings': {
					if (changeObj.type === 'array') {
						changeObj.insertedItems.forEach(function (lib) {
							_led.addLib(monaco, lib);
						})
					} else if (changeObj.type === 'change') {
						_led.refreshAllLibs(monaco, changeObj.newValue);
					}
				}
					break;
				case 'ltPropResourceLinks': {
					if (changeObj.type === 'array') {
						changeObj.insertedItems.forEach(function (link) {
							_led.addLibFrom(monaco, link, this);
						}.bind(this))
					} else if (changeObj.type === 'change') {
						_led.refreshAllLibsFrom(monaco, changeObj.newValue, this);
					}
				}
					break;
				case 'ltPropCustomCssPath': {
					this.loadCustomCssToDoc(changeObj.newValue);
				}
					break;
				case 'ltPropEditorType': {
					// if (!this._internalChangeForLtPropEditorType) {
					const newValue = changeObj.newValue;
					const oldValue = changeObj.oldValue;
					const argsCache = this.argsCache[this.data._id];
					const currentEditorState = this.basedOnTypeGet('editorState', oldValue);//No I18n
					// const proceedToChangeEditorType = this.triggerMethod('onBeforeEditorTypeChange', currentEditorState);
					// if (proceedToChangeEditorType !== false) {
					if (newValue === Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR && !this.data.editorInstance) {
						argsCache.callFn.call(this, 'initializeBasicEditor');//No I18n
					} else if (newValue === Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR && !this.data.diffEditorInstance) {
						argsCache.callFn.call(this, 'initializeDiffEditor');//No I18n
					}
					if (this.data.ltPropRenderInShadowRoot) {
						this.activateEditorBasedOnType(this.$node);
					} else {
						const iframe = this.$node.querySelector('#' + this.data._id);
						const iframeBody = iframe.contentDocument.body;
						this.activateEditorBasedOnType(iframeBody);
					}
					const newEditorState = this.basedOnTypeGet('editorState', newValue);//No I18n
					// Here, currentEditorState - will be previous editor state
					const providedToolbarData = this.basedOnTypeGet('providedToolbarData');//No I18n
					this.setData({
						providedToolbarData: providedToolbarData || [],
						hasToolbarData: !!providedToolbarData
					});
					this.applyCurrentToolbarData();
					this.syncOptions();
					this.triggerMethod('onEditorTypeChange', newEditorState, currentEditorState);//No I18n
					// } else {
					// 	this._internalChangeForLtPropEditorType = true;
					// 	this.data.ltPropEditorType = oldValue;
					// 	// this.setData('ltPropEditorType', oldValue);
					// 	delete this._internalChangeForLtPropEditorType;
					// }
					// }
				}
					break;
				case 'ltPropModifiedDiffModel.value':
				case 'ltPropModifiedDiffModel.language':
				case 'ltPropOriginalDiffModel.language':
				case 'ltPropOriginalDiffModel.value': {
					if (!this.preventObserverLooping) {
						const item = changeObj.item;
						const objectName = item.split('.')[0];
						const changedKey = item.split('.')[1];
						const dataName = objectName.replace(/^ltProp([A-Z])(.*)$/, function () {
							const args = Array.from(arguments);
							return args[1].toLowerCase() + args[2];
						})
						this.updateDiffModel({
							changedKey: changedKey,
							modelDef: this.data[objectName],
							dataName: dataName
						});
						this.loadDiffModelToInstance();
					}
					this.preventObserverLooping = false;
				}
					break;
			}
		}
	}.observes(
		//ignorei18n_start
		'ltPropValue',
		'ltPropLanguage',
		'ltPropToolbar',
		'ltPropResourceStrings',
		'ltPropResourceStrings.[]',
		'ltPropResourceLinks',
		'ltPropResourceLinks.[]',
		'ltPropCustomCssPath',
		'ltPropEditorType',
		'ltPropOriginalDiffModel.value',
		'ltPropOriginalDiffModel.language',
		'ltPropOriginalDiffModel.uri',
		'ltPropModifiedDiffModel.value',
		'ltPropModifiedDiffModel.language',
		'ltPropModifiedDiffModel.uri'
		//ignorei18n_end
	),
	toolbarDataChangeObserver: function (changeObj) {
		const toolbar = this.data.connectedToolbar;
		if (toolbar) {
			const dataNameMap = {
				//ignorei18n_start
				providedToolbarData: 'toolbar'
				//ignorei18n_end
			};
			switch (changeObj.item) {
				case 'toolsInstance':
				case 'currentToolbarData':
				case 'providedToolbarData': {
					const actualDataName = dataNameMap[changeObj.item] || changeObj.item;
					toolbar.setData(actualDataName, changeObj.newValue);
				}
					break;
			}
		}
	}.observes(
		//ignorei18n_start
		'providedToolbarData',
		'currentToolbarData',
		'toolsInstance'
		//ignorei18n_end
	),
	utils: function () {
		const utils = {
			loadBasicEditor: function () {
				const fnName = 'loadBasicEditor';//No I18n
				const argsCache = this.argsCache[this.data._id];
				if (this.data.ltPropLoadOnDemand[Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR]) {
					if (argsCache.hasFn(fnName)) {
						argsCache.callFnAndRmCache.call(this, fnName);
					} else {
						this.data._loadBasicEditorTriggered = true;
					}
				}
			},
			loadDiffEditor: function () {
				const fnName = 'loadDiffEditor';//No I18n
				const argsCache = this.argsCache[this.data._id];
				if (this.data.ltPropLoadOnDemand[Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR]) {
					if (argsCache.hasFn(fnName)) {
						argsCache.callFnAndRmCache.call(this, fnName);
					} else {
						this.data._loadDiffEditorTriggered = true;
					}
				}
			},
			getModelInfo: function (fromSelection) {
				const model = this.basedOnTypeGet('modelInstance');//No I18n
				const fullRange = model.getFullModelRange();
				const populateInfo = function (range) {
					return {
						characterCount: model.getCharacterCountInRange(range),
						lineCount: range.endLineNumber - range.startLineNumber + 1,
						range: {
							startLineNumber: range.startLineNumber,
							endLineNumber: range.endLineNumber,
							startColumn: range.startColumn,
							endColumn: range.endColumn
						}
					}
				}
				const modelInfo = populateInfo(fullRange)
				if (fromSelection) {
					const instance = this.basedOnTypeGet('instance');//No I18n
					const selections = instance.getSelections();
					modelInfo.selections = selections.map(populateInfo).sort(function (sel1, sel2) {
						const range1 = sel1.range;
						const range2 = sel2.range;
						const sameLine = range1.startLineNumber === range2.startLineNumber;
						return sameLine ? range1.startColumn - range2.startColumn : range1.startLineNumber - range2.startLineNumber;
					});
				}
				return modelInfo;
			},
			updateOptions: function (key, value) {
				const desiredEditorType = Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR;
				const actualEditorType = this.data.ltPropEditorType;
				const args = [key, value, false, desiredEditorType];
				this.updateOptionsWrapper.apply(this, args);
				if (desiredEditorType === actualEditorType) {
					this.applyCurrentToolbarData();
				}
			},
			updateDiffEditorOptions: function (key, value) {
				const desiredEditorType = Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR;
				const actualEditorType = this.data.ltPropEditorType;
				const args = [key, value, false, desiredEditorType];
				this.updateOptionsWrapper.apply(this, args);
				if (desiredEditorType === actualEditorType) {
					this.applyCurrentToolbarData();
				}
			},
			updateDiffNavigatorOptions: function (key, value) {
				const diffNavigatorInstance = this.data.diffNavigatorInstance;
				if (diffNavigatorInstance) {
					const monaco = this.data.monaco;
					const diffEditorInstance = this.data.diffEditorInstance;
					const type = _led.checkType;
					let options = {};
					if (type.object(key)) {
						options = key;
					} else if (type.string(key)) {
						options = { [key]: value };
					} else {
						_led.throw.error(_led.error.TYPE_MUST_BE, 'object (or) a string key & value', 'options');//No I18n
						return;
					}
					diffNavigatorInstance.dispose();
					const navigatorInstance = monaco.editor.createDiffNavigator(diffEditorInstance, options);
					this.setData('diffNavigatorInstance', navigatorInstance);//No I18n
					return navigatorInstance;
				}
				_led.throw.warning('DiffNavigatorInstance is not available');//No I18n
				return null;
			},
			createDiffNavigator: function (options) {
				const monaco = this.data.monaco;
				const diffEditorInstance = this.data.diffEditorInstance;
				const diffNavigatorInstance = this.data.diffNavigatorInstance;
				if (!diffNavigatorInstance) {
					if (monaco && diffEditorInstance) {
						const navigatorInstance = monaco.editor.createDiffNavigator(diffEditorInstance, options);
						this.setData('diffNavigatorInstance', navigatorInstance);//No I18n
					} else {
						_led.throw.warning('Monaco Editor and diffEditorInstance has to be present for creating diffNavigator');//No I18n
						return null;
					}
				}
				return this.data.diffNavigatorInstance;
			},
			triggerAction: function (action, value, tool, node, event) {
				const instance = this.basedOnTypeGet('instance');//No I18n
				const id = this.getData('_id');
				const actionsMap = _led.ACTIONS_MAP;
				const type = _led.checkType;
				if (tool && tool.hasOwnProperty('throwEvent')) {
					const throwEvent = tool.throwEvent;
					if (type.boolean(throwEvent) && throwEvent) {
						this.triggerMethod('onToolClick', tool, node, event);//No I18n
					}
					// Revert Back to Boolean Type 
					// else if (type.object(throwEvent)) {
					// 	const editorType = this.data.ltPropEditorType;
					// 	if (type.boolean(throwEvent[editorType]) && throwEvent[editorType]) {
					// 		this.triggerMethod('onToolClick', tool, node, event);//No I18n
					// 	}
					// }
				} else if (actionsMap.hasOwnProperty(action)) {
					_led.prerequisitesForAction(action, instance);
					instance.trigger(id, actionsMap[action]);
				} else if (instance) {
					const state = this.basedOnTypeGet('toolbarState');//No I18n
					const rawOptions = this.getRawOptions(instance);
					switch (action) {
						case 'theme': {
							let options = this.basedOnTypeGet('options');//No I18n
							const optionsDataName = this.basedOnTypeGet('optionsDataName');//No I18n
							if (options === undefined) {
								options = {};
								this.setData(optionsDataName, options);//No I18n
							}
							const connectedLayout = this.data.connectedLayout;
							const dropOptions = document.querySelector('.lyteEditorFontOptions');
							const nodesToChange = [dropOptions, this.$node];
							if (connectedLayout) {
								nodesToChange.push(connectedLayout);
							}
							const darkModeClass = _led.DARK_MODE_CLASS;
							const addClass = function (nodeToAddClass) {
								return nodeToAddClass && nodeToAddClass.classList.add(darkModeClass)
							};
							const removeClass = function (nodeToRemoveClass) {
								return nodeToRemoveClass && nodeToRemoveClass.classList.remove(darkModeClass)
							};
							const theme = value;
							let themeChangeHappened = false;
							if (options.theme !== value) {
								themeChangeHappened = true;
							}
							instance._themeService.setTheme(theme);
							if (value === _led.DARK_THEME) {
								nodesToChange.forEach(addClass);
							} else {
								nodesToChange.forEach(removeClass);
							}
							Lyte.Component.set(state, action, value);
							Lyte.Component.set(this.data.ltPropOptions, 'theme', theme);//No I18n
							const methodName = this.basedOnTypeGet('optionsUpdateMethodName');//No I18n
							if (themeChangeHappened) {
								this.triggerMethod(methodName, {
									theme: theme
								}, this.data.ltPropOptions);
							}
						}
							break;
						case 'toggleWrap': {
							const optionToSet = tool ? (rawOptions.wordWrap === 'on' ? 'off' : 'on') : value;//No I18n
							this.updateOptionsWrapper('wordWrap', optionToSet, true);//No I18n
							const toolObj = tool || this.data.toolsInstance[action];
							// const classToAdd = toolObj.class;
							// if (classToAdd) {
							// const wrapper = this.data.connectedToolbar || node || this.$node;
							// let toolItem = wrapper.querySelector('.' + classToAdd);
							// if (toolItem) {
							const valueToSet = optionToSet === 'on';//No I18n
							Lyte.Component.set(toolObj, 'isActive', valueToSet);//No I18n
							Lyte.Component.set(state, action, optionToSet);
							// }
							// }
						}
							break;
						case 'fontSize': {
							this.updateOptionsWrapper('fontSize', value, true);//No I18n
							const toolObj = tool || this.data.toolsInstance[action];
							Lyte.Component.set(toolObj, 'current', value);//No I18n
							Lyte.Component.set(state, action, value);
						}
							break;
						case 'reset': {
							const editorType = this.data.ltPropEditorType;
							if (editorType === Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR) {
								instance.setValue(this.data.ltPropDefaultValue);
								this.data.ltPropValue = this.data.ltPropDefaultValue;
							}
						}
							break;
						case 'formatOnType': {
							const optionToSet = tool ? !rawOptions.formatOnType : value;//No I18n
							this.updateOptionsWrapper('formatOnType', optionToSet, true);//No I18n
							const toolObj = tool || this.data.toolsInstance[action];
							// const classToAdd = toolObj.class;
							// if (classToAdd) {
							// const wrapper = this.data.connectedToolbar || node || this.$node;
							// let toolItem = wrapper.querySelector('.' + classToAdd);
							// if (toolItem) {
							Lyte.Component.set(toolObj, 'isActive', optionToSet);
							Lyte.Component.set(state, action, optionToSet);
							// }
							// }
						}
					}
				}
			},
			hasModifiedContent: function (excludeFormat) {
				const actualContent = this.data.ltPropValue;
				const defaultContent = this.data.ltPropDefaultValue;
				const language = this.data.ltPropLanguage;
				return !_led.checkEquality(actualContent, defaultContent, language, excludeFormat);
			},
			getMarkingsInModel: function (type) {
				const model = this.basedOnTypeGet('modelInstance');//No I18n
				const modelId = model.id;
				const monaco = this.data.monaco;
				const severity = monaco.MarkerSeverity;
				let markers = [];
				const filterOutRequiredContents = function (marker) {
					return {
						startColumn: marker.startColumn,
						startLineNumber: marker.startLineNumber,
						endColumn: marker.endColumn,
						endLineNumber: marker.endLineNumber,
						message: marker.message,
						severity: severity[marker.severity]
					}
				}
				if (type === undefined) {
					markers = monaco.editor.getModelMarkers(modelId);
				} else if (!_led.checkType.number(type) && severity.hasOwnProperty(type)) {
					markers = monaco.editor.getModelMarkers(modelId).filter(function (marker) {
						return marker.severity === severity[type]
					}).map(filterOutRequiredContents)
				}
				return markers.map(filterOutRequiredContents);
			},
			labelledLibs: (function () {
				const cache = _led.cache;
				const objectCheck = _led.checkType.object;
				const arrayCheck = _led.checkType.array;
				const stringCheck = _led.checkType.string;
				const addAs = function (datatype, objectToAdd, overwrite) {
					const monaco = this.data.monaco;
					const mappings = {
						string: 'add',
						link: 'addLink'
					}
					const fnToCall = mappings[datatype];
					if (fnToCall) {
						if (objectCheck(objectToAdd)) {
							for (let label in objectToAdd) {
								const value = objectToAdd[label];
								if (stringCheck(value)) {
									objectToAdd[label] = [value];
								} else if (!arrayCheck(value)) {
									_led.throw.warning(_led.error.EXPECTED, 'string (or) array', { [label]: value })
								}
							}
							_led.cache[fnToCall](monaco, objectToAdd, this, overwrite);
						} else {
							_led.throw.warning(_led.error.EXPECTED, 'object', objectToAdd);//No I18n
						}
					}
				}
				return {
					getAll: cache.list,
					getActive: cache.active,
					emptyCache: cache.emptyCache,
					resetLibs: function () {
						const monaco = this.data.monaco;
						return cache.reinitialize(monaco);
					}.bind(this),
					add: addAs.bind(this, 'string'),
					addLink: addAs.bind(this, 'link'),
					removeFromCache: cache.removeFromCache,
					modify: function (toActivate, toDeactivate) {
						const monaco = this.data.monaco;
						cache.storeActiveState();
						if (arrayCheck(toDeactivate)) {
							cache.deactivate(toDeactivate)
						} else if (toDeactivate === true) {
							cache.deactivateAll()
						}
						if (arrayCheck(toActivate)) {
							cache.activate(toActivate)
						} else if (toActivate === true) {
							cache.activateAll()
						}
						cache.loadActiveLibs(monaco);
					}.bind(this)
				}
			}.call(this)),
			restrictedEditor: (function () {
				const type = _led.checkType;
				const createdCodeBlocks = [];
				const create = function (uid, codeBlockName, options) {
					options = options ? options : {};
					if (type.string(uid) && type.string(codeBlockName) && (type.object(options) || type.string(options))) {
						const codeBlockInstance = _led.codeBlock[codeBlockName];
						if (codeBlockInstance) {
							const monaco = this.data.monaco;
							const entityOfCodeBlock = codeBlockInstance.createEntity(uid, monaco, options);
							createdCodeBlocks.push(entityOfCodeBlock);
							return entityOfCodeBlock;
						}
						_led.throw.error(_led.error.NOT_FOUND, codeBlockName, 'CodeBlock');//No I18n
					} else {
						const errorMessage = [
							_led.error.EXPECTED('string', typeof uid, 'uid'),//No I18n
							_led.error.EXPECTED('string', typeof codeBlockName, 'codeBlockName'), //No I18n
							_led.error.EXPECTED('object (or) string', typeof options, 'options') //No I18n
						].join('\n');//No I18n
						_led.throw.error(errorMessage);
					}
				};
				const setModelToEditor = function (entityOfCodeBlock, defaultValue, codeBlockInstance) {
					const monaco = this.data.monaco;
					const instanceOfEditor = this.basedOnTypeGet('instanceOfEditor');//No I18n

					// On Model Loaded in Editor
					const editorType = this.data.ltPropEditorType;
					const EditorTypes = Lyte.Editor.EDITOR_TYPES;
					switch (editorType) {
						case EditorTypes.BASIC_EDITOR: {
							const uri = entityOfCodeBlock.uri;
							const createdModelInstance = monaco.editor.getModel(uri);
							instanceOfEditor.setModel(createdModelInstance);
							const value = instanceOfEditor.getValue();
							const language = entityOfCodeBlock.language;
							this.setData({
								ltPropDefaultValue: defaultValue !== undefined ? defaultValue : value,
								ltPropValue: value,
								ltPropLanguage: language
							})
						}
							break;
						case EditorTypes.DIFF_EDITOR: {
							let modifiedDiffModel = this.data.modifiedDiffModel;
							let originalDiffModel = this.data.originalDiffModel;
							const fileName = entityOfCodeBlock.id;
							const options = entityOfCodeBlock._options;
							const language = entityOfCodeBlock.language;
							const uri = entityOfCodeBlock.uri;
							if (!modifiedDiffModel) {
								modifiedDiffModel = monaco.editor.getModel(uri);
							}
							if (!originalDiffModel) {
								originalDiffModel = monaco.editor.getModel(uri);
							}
							codeBlockInstance.addRestrictionsToModel(
								fileName,
								modifiedDiffModel,
								options,
								language,
								uri,
								entityOfCodeBlock
							);
							originalDiffModel.setValue(modifiedDiffModel.getValue());
							this.setData('modifiedDiffModel', modifiedDiffModel);//No I18n
							this.setData('originalDiffModel', originalDiffModel);//No I18n
							this.loadDiffModelToInstance();
						}
							break;
					}
				}.bind(this);
				const load = function (uid, codeBlockName, options, defaultValue) {
					options = options ? options : {};
					if (type.codeBlockEntity(uid)) {
						const codeBlockInstance = _led.codeBlock[uid.instanceName];
						const entityOfCodeBlock = uid;
						setModelToEditor(entityOfCodeBlock, defaultValue, codeBlockInstance);
						return entityOfCodeBlock;
					} else {
						if (type.string(uid) && type.string(codeBlockName) && (type.object(options) || type.string(options))) {
							const codeBlockInstance = _led.codeBlock[codeBlockName];
							if (codeBlockInstance && codeBlockInstance.createdEntities.hasOwnProperty(uid)) {
								const entityOfCodeBlock = codeBlockInstance.createdEntities[uid];
								entityOfCodeBlock.updateEntity(options);
								setModelToEditor(entityOfCodeBlock, defaultValue, codeBlockInstance);
								return entityOfCodeBlock;
							} else {
								_led.throw.warning(_led.error.NOT_FOUND, uid, codeBlockName + ' inside CodeBlock');//No I18n
							}
						} else {
							const errorMessage = [
								_led.error.EXPECTED('string', typeof uid, 'uid'),//No I18n
								_led.error.EXPECTED('string', typeof codeBlockName, 'codeBlockName'), //No I18n
								_led.error.EXPECTED('object (or) string', typeof options, 'options') //No I18n
							].join('\n');//No I18n
							_led.throw.error(errorMessage);
						}
					}
				};
				const createAndLoad = function (uid, codeBlockName, options, defaultValue) {
					const entityOfCodeBlock = API.create(uid, codeBlockName, options);
					createdCodeBlocks.push(entityOfCodeBlock);
					API.load(entityOfCodeBlock, null, null, defaultValue);
					return entityOfCodeBlock;
				};
				const getCurrentMutableValues = function () {
					const uri = this.basedOnTypeGet('modelInstance').uri;//No I18n
					const uriMapping = _led.codeBlock.getCodeBlockEntity(uri);
					const id = uriMapping.id;
					const codeBlockName = uriMapping.codeBlockName;
					if (id && codeBlockName) {
						return _led.codeBlock[codeBlockName].createdEntities[id].getMutableValues();
					}
					return {};
				};
				const getCurrentCodeBlock = function () {
					const uri = this.basedOnTypeGet('modelInstance').uri;//No I18n
					const uriMapping = _led.codeBlock.getCodeBlockEntity(uri);
					const id = uriMapping.id;
					const codeBlockName = uriMapping.codeBlockName;
					if (id && codeBlockName) {
						return _led.codeBlock[codeBlockName].createdEntities[id];
					}
					return {};
				}
				const disposeUtil = function () {
					if (!API.preventDisposalOfCodeBlocks) {
						createdCodeBlocks.forEach(function (codeBlock) {
							const instanceName = codeBlock.instanceName;
							const id = codeBlock.id;
							_led.codeBlock[instanceName].delete(id);
						});
					}
				}
				const createModelWithRangeRestriction = function (content, options, rangeRestrictions) {
					const model = this.$node.createModel(content, options);
					if (model) {
						const monaco = this.data.monaco;
						const rangeConstructor = monaco.Range;
						return _led.restrictedEditor.addRangeRestrictionsTo(model, rangeRestrictions, rangeConstructor);
					}
					return null;
				}
				const updateRangeRestrictionsTo = function (model, rangeRestrictions) {
					if (model) {
						return _led.restrictedEditor.updateRangeRestrictionsTo(model, rangeRestrictions);
					}
					return null;
				}
				const methods = {
					create,
					load,
					createAndLoad,
					getCurrentMutableValues,
					getCurrentCodeBlock,
					disposeUtil,
					createModelWithRangeRestriction,
					updateRangeRestrictionsTo,
					preventDisposalOfCodeBlocks: false
				}
				const API = {};
				for (let method in methods) {
					if (type.function(methods[method])) {
						API[method] = methods[method].bind(this);
					} else {
						API[method] = methods[method];
					}
				}
				return API;
			}.call(this)),
			updateEditorLayout: function () {
				_led.updateEditorLayout(this);
			},
			editorActions: (function () {
				const type = _led.checkType;
				const editorActionHandler = _led.editorActions;
				let listOfCallbacks = [];
				const addAction = function (callbackFn, editorType) {
					if (type.function(callbackFn)) {
						const monaco = this.data.monaco;
						if (editorType === undefined) {
							const EditorTypes = Lyte.Editor.EDITOR_TYPES
							const editorInstance = this.data.editorInstance;
							const diffEditorInstance = this.data.diffEditorInstance;
							if (editorInstance) {
								editorActionHandler.extend(callbackFn, monaco, editorInstance);
							} else {
								listOfCallbacks.push({
									callbackFn: callbackFn,
									editorType: EditorTypes.BASIC_EDITOR
								});
							}
							if (diffEditorInstance) {
								editorActionHandler.extend(callbackFn, monaco, diffEditorInstance);
							} else {
								listOfCallbacks.push({
									callbackFn: callbackFn,
									editorType: EditorTypes.DIFF_EDITOR
								});
							}
						} else if (_led.MONACO_SRC_LOADED && instance) {
							const instance = this.basedOnTypeGet('instance', editorType);//No I18n
							editorActionHandler.extend(callbackFn, monaco, instance);
							return true;
						} else {
							listOfCallbacks.push({
								callbackFn: callbackFn,
								editorType: editorType || null
							});
							return true;
						}
					} else {
						_led.throw.error(_led.error.TYPE_MUST_BE, 'function', 'callbackFn');//No I18n
						return false;
					}
				}
				const extendAllCallbacks = function (monaco, instance, loadedEditorType) {
					for (let i = 0, len = listOfCallbacks.length; i < len; i++) {
						const object = listOfCallbacks[i];
						const callbackFn = object.callbackFn;
						const editorType = object.editorType;
						if (loadedEditorType === editorType || editorType === null) {
							editorActionHandler.extend(callbackFn, monaco, instance);
							if (editorType !== null) {
								listOfCallbacks[i] = null;
							}
						}
					}
					listOfCallbacks = listOfCallbacks.filter(type.object);
				}

				const methods = {
					_extendAllCallbacks: extendAllCallbacks.bind(this),
					add: addAction,
					dispose: editorActionHandler.dispose,
					disposeAll: editorActionHandler.disposeAll,
					list: editorActionHandler.list
				}
				const API = {};
				for (let method in methods) {
					if (type.function(methods[method])) {
						API[method] = methods[method].bind(this);
					} else {
						API[method] = methods[method];
					}
				}
				return API;
			}.call(this)),
			updateCompilerOptions: function (compilerOptions) {
				const monaco = this.data.monaco;
				if (monaco) {
					this.setCompilerOptions(monaco, compilerOptions);
				} else {
					_led.throw.warning('Monaco Editor is not available. Please call this function after (or) inside editor-core-loaded event');//No I18n
				}
			},
			getCurrentTheme: function () {
				const instance = this.basedOnTypeGet('instance');//No I18n
				return instance._themeService.getColorTheme().themeName;
			},
			createModel: function (content, options) {
				if (_led.MONACO_SRC_LOADED) {
					const monaco = this.data.monaco;
					options = options || {};
					const language = options.language;
					const uri = options.uri;
					const path = options.path;
					const actualUri = uri ? uri : path ? new monaco.Uri('', '', path) : undefined;
					return monaco.editor.createModel(content, language, actualUri);
				} else {
					_led.throw.warning('Monaco Editor is not available. Please call this function after (or) inside editor-core-loaded event');//No I18n
					return null;
				}
			},
			setBasicEditorModel: function (model) {
				const editorType = this.data.ltPropEditorType;
				if (editorType === Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR) {
					const instance = this.basedOnTypeGet('instance');//No I18n
					if (instance) {
						this.setData('valueLoadedFromModel', true);
						instance.setModel(model);
					} else {
						_led.throw.warning('EditorInstance is not available. Please call this function inside `onBasicEditorLoad` method');//No I18n
						return null;
					}
				} else {
					_led.throw.warning('Current Editor Type is not a Basic Editor');//No I18n
				}
			}
		}
		for (let util in utils) {
			if (_led.checkType.function(utils[util])) {
				this.$node[util] = utils[util].bind(this);
			} else {
				this.$node[util] = utils[util];
			}
		}
		this.disposeUtils = function () {
			for (let utilName in utils) {
				if (this.$node[utilName].disposeUtil) {
					this.$node[utilName].disposeUtil();
				}
				delete this.$node[utilName];
			}
		}
	}.on('init')
});
Lyte.Component.register("lyte-editor-toolbar", {
_template:"<template tag-name=\"lyte-editor-toolbar\"> <template object=\"{{tools}}\" value=\"toolObject\" key=\"alignment\" is=\"forIn\"> <div class=\"{{alignment}}Tools\"> <template object=\"{{toolObject}}\" value=\"tool\" key=\"toolname\" is=\"forIn\"><div lt-prop-title=\"{{if(tool.noTitle,'',getI18nOf(toolname))}}\" lt-prop-tooltip-config=\"{{tooltipConfig}}\" lt-prop-tooltip-class=\"toolTipCapCase\" class=\"lyteEditorToolItem {{concat(if(tool.isActive,' active',''),if(tool.preventHoverClass,' preventHover',''))}}\" onclick=\"{{action('triggerAction',tool,this)}}\"><template value=\"{{toolname}}\" is=\"switch\"><template case=\"fontSize\"><div class=\"{{tool.class}} custom\"> <span>{{getI18nOf(expHandlers(tool.label,'||',tool.title))}}</span> <lyte-dropdown lt-prop-box-class=\"lyteEditorFontOptions\" lt-prop-selected=\"{{getI18nOf(expHandlers(expHandlers(tool.current,'||',tool.default),'||',tool.options[0]))}}\" lt-prop-options=\"{{getI18nOf(tool.options)}}\" on-option-selected=\"{{method('alterFontSize',tool,this)}}\"> </lyte-dropdown> </div></template><template case=\"reset\"><div class=\"{{tool.class}} custom\"> <span>{{getI18nOf(\"reset\")}}</span> </div></template><template case=\"toggleDarkMode\"><div class=\"{{tool.class}} custom\"> <span>{{getI18nOf(\"dark mode\")}}</span> <lyte-checkbox lt-prop-checked=\"{{tool.current}}\" on-changed=\"{{method('changeMode',tool,this)}}\" lt-prop-type=\"switch\"> </lyte-checkbox> </div></template><template default=\"\"><div class=\"{{concat(tool.class,if(tool.isActive,' active',''))}}\"> </div></template></template></div></template> </div> </template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"forIn","position":[1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"forIn","position":[1,1],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"attr","position":[0,0]},{"type":"switch","position":[0,0],"cases":{"fontSize":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"text","position":[0,1,0]},{"type":"attr","position":[0,3]},{"type":"componentDynamic","position":[0,3]}]},"reset":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"text","position":[0,1,0]}]},"toggleDarkMode":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"text","position":[0,1,0]},{"type":"attr","position":[0,3]},{"type":"componentDynamic","position":[0,3]}]}},"default":{"dynamicNodes":[{"type":"attr","position":[0]}]}}]}]}],
_observedAttributes :["toolsInstance","toolbar","tools","tooltipConfig","currentToolbarData","connectedEditor"],

	data: function () {
		return {
			toolsInstance: Lyte.attr('object', { default: {} }),//No I18n
			toolbar: Lyte.attr('array'),
			tools: Lyte.attr('object'),
			tooltipConfig: Lyte.attr('string'),
			currentToolbarData: Lyte.attr('object'),//No I18n
			connectedEditor: Lyte.attr('object')//No I18n
		}
	},
	init: function () {
		this.setData('tooltipConfig', JSON.stringify({
			position: 'bottom',
			showdelay: 500,
			appearance: 'box',
			margin: 5,
			maxdisplaytime: 3000
		}));
	},
	connectWith: function (object) {
		for (let key in object) {
			const node = object[key];
			switch (key) {
				case 'editor': {
					const data = node.getData();
					this.setData({
						connectedEditor: node,
						toolsInstance: data.toolsInstance,
						currentToolbarData: data.currentToolbarData,
						toolbar: data.providedToolbarData
					});
				}
			}
		}
	},
	overrideTools: function () {
		const toolsInstance = this.data.toolsInstance;
		const tools = _led.overrideTools(this.data.toolbar, this.data.currentToolbarData, toolsInstance);
		this.setData('tools', tools);//No I18n
	},
	triggerEventInEditor: function () {
		const connectedEditor = this.data.connectedEditor;
		const args = Array.from(arguments);
		if (connectedEditor) {
			connectedEditor.triggerAction.apply(connectedEditor.component, args.slice(1));
		} else {
			this.throwEvent.apply(this, args);
		}
	},
	toolsObserver: function () {
		if (this.data.toolbar && this.data.currentToolbarData) {
			this.overrideTools();
		}
	}.observes('toolbar', 'currentToolbarData').on('init'),//No I18n
	actions: {
		triggerAction: function (tool, node, event) {
			const preventEventThrowFor = [
				//ignorei18n_start
				'fontSize',
				'toggleDarkMode'
				//ignorei18n_end
			]
			if (!preventEventThrowFor.includes(tool.triggerAction)) {
				this.triggerEventInEditor('triggerEditorAction', tool.triggerAction, tool.current, tool, node, event);//No I18n
			}
		}
	},
	methods: {
		alterFontSize: function (tool, node, event, selectedValue) {
			this.triggerEventInEditor('triggerEditorAction', 'fontSize', selectedValue, tool, node, event);//No I18n
		},
		changeMode: function (tool, node, input, checkbox, event) {
			const theme = input.checked ? _led.DARK_THEME : _led.LIGHT_THEME;
			this.triggerEventInEditor('triggerEditorAction', 'theme', theme, tool, node, event);//No I18n
		}
	},
	utils: function () {
		const utils = {
			getInfoOfTool: function (toolName) {
				const tools = this.data.tools;
				for (let alignment in tools) {
					if (tools[alignment].hasOwnProperty(toolName)) {
						return tools[alignment][toolName];
					}
				}
				return null;
			}
		}
		for (let util in utils) {
			if (_led.checkType.function(utils[util])) {
				this.$node[util] = utils[util].bind(this);
			} else {
				this.$node[util] = utils[util];
			}
		}
		this.disposeUtils = function () {
			for (let util in utils) {
				delete this.$node[util];
			}
		}
	}.on('init')
});