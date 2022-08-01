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