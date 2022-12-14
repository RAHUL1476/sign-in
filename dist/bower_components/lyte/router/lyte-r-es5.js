var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*Polyfills for functions not available in other browsers. */

/*Polyfill for Node.after
//Not supported out of the box in IE and Edge. 
//from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md */
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('after')) {
			return;
		}
		Object.defineProperty(item, 'after', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function after() {
				var argArr = Array.prototype.slice.call(arguments),
				    docFrag = document.createDocumentFragment();

				argArr.forEach(function (argItem) {
					var isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.parentNode.insertBefore(docFrag, this.nextSibling);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/*Polyfill for replaceWith. 
//Not supported out of the box for IE and Edge. */
function ReplaceWith(Ele) {
	var parent = this.parentNode,
	    i = arguments.length,
	    firstIsNode = +(parent && (typeof Ele === 'undefined' ? 'undefined' : _typeof(Ele)) === 'object');
	if (!parent) {
		return;
	}

	while (i-- > firstIsNode) {
		if (parent && _typeof(arguments[i]) !== 'object') {
			arguments[i] = document.createTextNode(arguments[i]);
		}if (!parent && arguments[i].parentNode) {
			arguments[i].parentNode.removeChild(arguments[i]);
			continue;
		}
		parent.insertBefore(this.previousSibling, arguments[i]);
	}
	if (firstIsNode) {
		parent.replaceChild(this, Ele);
	}
}
if (!Element.prototype.replaceWith) {
	Element.prototype.replaceWith = ReplaceWith;
}
if (!CharacterData.prototype.replaceWith) {
	CharacterData.prototype.replaceWith = ReplaceWith;
}
if (!DocumentType.prototype.replaceWith) {
	DocumentType.prototype.replaceWith = ReplaceWith;
}

/*Polyfill for startsWith
//Not supported out of the box for  IE */
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (searchString, position) {
		position = position || 0;
		return this.indexOf(searchString, position) === position;
	};
}

/*Polyfill for endsWith
//Not supported out of the box for  IE */
if (!String.prototype.endsWith) {
	String.prototype.endsWith = function (search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}

var Lyte = {
	version: "3.0.0",
	$: {},
	registeredMixins: {},
	Mixin: {},
	debug: false,
	performance: false,
	toBeRegistered: [],
	registeredCustomComponent: {}
},
    tags = { ".js": 'script', ".css": 'link' };
var consoleTime = [];

Lyte.$.assetsDiv = document.createElement("div");
Lyte.$.assetsDiv.setAttribute("id", "lyteAssetsDiv");

Lyte.registerErrorCodes = function (obj) {
	Object.assign(Lyte.errorCodes, obj);
};

Lyte.establishObserverBindings = function (observers, fromStore, properties, model) {
	var scope = this;
	if (fromStore) {
		scope = fromStore;
	}
	for (var i = 0; i < observers.length; i++) {
		var props = observers[i].properties;
		for (var j = 0; j < props.length; j++) {
			var actProp;
			var isArrayObserver = false;
			if (props[j].indexOf('.[]') !== -1) {
				isArrayObserver = true;
				actProp = Lyte.getProperty.call(this, props[j].substring(0, props[j].indexOf('.[]')), fromStore, properties);
			} else {
				if (props[j].indexOf('.*') !== -1) {
					var prop = props[j].split(".")[0];
					var isDeepObs = !fromStore && this.component.__data[prop] && this.component.__data[prop].watch || fromStore && model && model.fieldList && model.fieldList[prop] && model.fieldList[prop].watch ? true : false;
					if (!isDeepObs) {
						continue;
					}
				}
				actProp = Lyte.getProperty.call(this, props[j], fromStore, properties);
			}
			if (!actProp._observers) {
				Object.defineProperty(actProp, '_observers', {
					value: new Set(),
					enumerable: false,
					writable: true,
					configurable: true
				});
			}
			actProp._observers.add({ callee: scope, observer: observers[i], isArrayObserver: isArrayObserver });
		}
	}
};

Lyte.getProperty = function (key, fromStore, properties) {
	var arr = key.split('.');
	var property = this;
	if (fromStore) {
		property = properties;
		if (!properties[arr[0]]) {
			properties[arr[0]] = {};
		}
		property = properties[arr[0]];
	} else {
		if (!property._properties[arr[0]]) {
			property._properties[arr[0]] = {};
		}
		property = property._properties[arr[0]];
	}

	Object.defineProperty(property, '_path', { enumerable: false, value: arr[0] });
	for (var i = 1; i < arr.length; i++) {
		if (!property[arr[i]]) {
			property[arr[i]] = {};
			Object.defineProperty(property[arr[i]], '_path', { enumerable: false, value: property._path + "." + arr[i] });
		}
		property = property[arr[i]];
	}
	return property;
};

Lyte.getErrorMessage = function (code) {
	var args = Array.from(arguments).slice(1);
	if (Lyte.errorCodes[code]) {
		return Lyte.errorCodes[code].replace(/{(\d+)}/g, function (t, i) {
			return args[i];
		});
	} else {
		return code;
	}
};

Lyte.error = function () {
	var errorObj = arguments[0],
	    parse = errorObj.stack;
	errorObj = parse ? errorObj : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
	if (Lyte.onerror) {
		Lyte.onerror.call(this, errorObj, arguments[1]);
	}
	Lyte.triggerEvent("error", errorObj, arguments[1]);
	var safari = errorObj.stack && errorObj.stack.indexOf(errorObj.message) == -1;
	if (parse && !safari) {
		errorObj = JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj)));
	}
	if (arguments[1]) {
		console.error(errorObj.stack ? safari ? errorObj : errorObj.stack : errorObj.message, arguments[1]);
	} else {
		console.error(errorObj.stack ? safari ? errorObj : errorObj.stack : errorObj.message);
	}
};

Lyte.warn = function () {
	var errorObj = arguments[0];
	errorObj = errorObj.stack ? JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj))) : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
	console.warn(errorObj.stack ? errorObj.stack.indexOf(errorObj.message) != -1 ? errorObj.stack.replace("Error: ", "") : errorObj : errorObj.message);
};

var requiredMixins = {};
Lyte.Mixin.register = function (name, mixin) {
	Lyte.registeredMixins[name] = mixin;
	var req;
	if (req = requiredMixins[name]) {
		for (var key in req) {
			Lyte.$.requiredMixins[key](mixin, req[key], key);
		}
	}
};

Lyte.$.requiredMixins = function (mixin, dir, type) {
	var req = requiredMixins[mixin] ? requiredMixins[mixin] : requiredMixins[mixin] = {};
	if (!req[type]) {
		req[type] = [dir];
	} else {
		req[type].push(dir);
	}
};

Lyte.Mixin.exists = function (name) {
	if (!Lyte.registeredMixins[name]) {
		// Lyte.error('Mixin used before being registered.');
		return false;
	}
	return true;
};

Lyte.log = function (text, src, color) {
	if (Lyte.debug) {
		if (color) {
			console.log("%c" + text, 'color:' + color);
		} else {
			console.log(text);
		}
	}
};

Lyte.time = function (fn) {
	if (Lyte.performance) {
		var index;
		if ((index = consoleTime.indexOf(fn)) != -1) {
			consoleTime.splice(index, 1);
			console.timeEnd(fn);
		} else {
			consoleTime.push(fn);
			console.time(fn);
		}
	}
};

Lyte.isRecord = function (object) {
	if (object && object.$ && object.$.hasOwnProperty("isModified")) {
		return true;
	}
	return false;
};

Lyte.isComponent = function (object) {
	if (object && object.$node && object.__data) {
		return true;
	}
	return false;
};

/* --------- lyte router v2 changes starts---- */
var reqFiles = {};

Lyte.injectResources = function (files, every, completed) {
	var successFiles = [],
	    errorFiles = [];
	every = every || function () {};
	completed = completed || function () {};
	return new Promise(function (resolve) {
		processRequirements(files, resolve);
	}).then(function () {
		completed(successFiles, errorFiles);
	});

	function processRequirements(files, resolve) {
		if (!files) {
			resolve();
		} else {
			if (!Array.isArray(files)) {
				files = [files];
			}
			if (!files.length) {
				resolve();
			}
			var len = -files.length;
			files.forEach(function (file) {
				if (typeof file == "string") {
					requestFile(file, Lyte.injectResources.availableTags[file], function () {
						loaded();
					});
				} else if (Array.isArray(file)) {
					new Promise(function (r) {
						processRequirements(file, r);
					}).then(function () {
						loaded();
					});
				} else {
					new Promise(function (r) {
						processRequirements(file.parent, r);
					}).then(function () {
						new Promise(function (r1) {
							processRequirements(file.child, r1);
						}).then(function () {
							loaded();
						});
					});
				}
			});
		}

		function loaded() {
			len++;
			if (len == 0) {
				resolve();
			}
		}

		function requestFile(file, cached, resolve) {
			if (reqFiles[file]) {
				reqFiles[file].push(resolve);
			} else {
				reqFiles[file] = [resolve];
				if (cached && cached.event.type != "error") {
					if (Lyte.removeFromCache.arr.indexOf(file) != -1) {
						Lyte.removeFromCache.arr.splice(Lyte.removeFromCache.arr.indexOf(file), 1);
					}
					fileLoaded.call(cached.tag, cached.event, true);
					resolve();
				} else {
					makeRequest(file, function (event) {
						reqFiles[file].forEach(function (resolve) {
							resolve();
						});
						fileLoaded.call(this, event);
						every.call(this, event);
					});
				}
			}
		}

		function fileLoaded(event, cached) {
			var file = this.getAttribute('src') || this.getAttribute('href');
			delete reqFiles[file];
			if (!cached) {
				if (Lyte.injectResources.availableTags[file]) {
					Lyte.injectResources.availableTags[file].tag.remove();
				}
				this.onerror = this.onload = undefined;
				Lyte.injectResources.availableTags[file] = { tag: this, event: { type: event.type } };
			}
		}
	}

	function makeRequest(file, callBack) {
		var tag,
		    type = file.match(/\.[a-zA-Z]+(?=\?|$)/);
		tag = document.createElement(tags[type]);
		if (!type) {
			Lyte.error('Type of file is not specified in injectResources.');
			return;
		} else if (type == '.css') {
			tag.setAttribute('href', file);
			tag.setAttribute('type', "text/css");
			tag.setAttribute('rel', "stylesheet");
		} else {
			tag.setAttribute('src', file);
		}
		tag.onerror = tag.onload = function (event) {
			if (event.type == "error") {
				errorFiles.push(event);
			} else {
				successFiles.push(event);
			}
			if (callBack) {
				callBack.call(this, event);
			}
		};
		var ev = every.internal || {};
		ev.tag = tag;
		Lyte.triggerEvent("onBeforeInject", ev);
		Lyte.$.assetsDiv.appendChild(tag);
	};
};

Lyte.injectResources.availableTags = [];

Lyte.removeFromCache = function (arr) {
	Lyte.removeFromCache.assign(arr);
	if (Lyte.removeFromCache.arr.length) {
		Lyte.removeFromCache.arr.forEach(function (file) {
			if (Lyte.injectResources.availableTags[file]) {
				Lyte.injectResources.availableTags[file].tag.remove();
				delete Lyte.injectResources.availableTags[file];
			}
		});
		Lyte.removeFromCache.arr = [];
	}
};

Lyte.removeFromCache.arr = [];

Lyte.removeFromCache.assign = function (arr) {
	arr = arr == "*" ? Object.keys(Lyte.injectResources.availableTags) : Array.isArray(arr) ? arr : [arr];
	Lyte.removeFromCache.arr = Lyte.removeFromCache.arr.concat(arr);
	return;
};

/* --------- lyte router v2 changes ends ---- */

Lyte.checkProperty = function (property, dataVal, key, fieldVal, record, type) {
	var exts = "extends";
	switch (property) {
		case "type":
			if (Lyte.Transform.hasOwnProperty(fieldVal) && dataVal !== undefined && dataVal !== null) {
				if (Array.isArray(dataVal)) {
					if (Lyte.Transform[fieldVal][exts] != "array") {
						return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
					}
				} else if (Lyte.Transform[fieldVal][exts] != (typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal))) {
					return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
				}
			} else if (dataVal !== undefined && dataVal !== null) {
				if (Array.isArray(dataVal)) {
					if (fieldVal != "array") {
						return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
					}
				} else if (fieldVal != (typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal))) {
					return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
				}
			}
			break;
		case "mandatory":
			if (fieldVal && (dataVal == undefined || dataVal == null || dataVal === "")) {
				return { code: "ERR02", message: Lyte.errorCodes.ERR02 };
			}
			break;
		case "maximum":
			if (typeof dataVal == "number" && dataVal > fieldVal) {
				return { code: "ERR04", message: Lyte.errorCodes.ERR04, expected: fieldVal };
			}
			break;
		case "minimum":
			if (typeof dataVal == "number" && dataVal < fieldVal) {
				return { code: "ERR05", message: Lyte.errorCodes.ERR05, expected: fieldVal };
			}
			break;
		case "maxLength":
		case "maxItems":
			if (dataVal && dataVal.length > fieldVal) {
				return { code: "ERR06", message: Lyte.errorCodes.ERR06, expected: fieldVal };
			}
			break;
		case "minLength":
		case "minItems":
			if (dataVal && dataVal.length < fieldVal) {
				return { code: "ERR07", message: Lyte.errorCodes.ERR07, expected: fieldVal };
			}
			break;
		case "pattern":
			if (typeof dataVal == "string" && !new RegExp(fieldVal).test(dataVal)) {
				return { code: "ERR08", message: Lyte.errorCodes.ERR08, expected: fieldVal };
			}
			break;
		case "uniqueItems":
			{
				if (Array.isArray(dataVal) && fieldVal) {
					var newArr = [];
					for (var i = 0; i < dataVal.length; i++) {
						var val = dataVal[i];
						if (newArr.indexOf(val) != -1) {
							return { code: "ERR09", message: Lyte.errorCodes.ERR09 };
						}
						newArr.push(val);
					}
				}
				break;
			}
		case "constant":
			if (Array.isArray(dataVal)) {
				var resp = dataVal.length == fieldVal.length && dataVal.every(function (v, i) {
					return v === fieldVal[i];
				});
				if (!resp) {
					return { code: "ERR10", message: Lyte.errorCodes.ERR10, expected: fieldVal };
				}
			} else if ((typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal)) == "object") {
				var resp = store.adapter.$.compareObjects(dataVal, fieldVal);
				if (!resp) {
					return { code: "ERR10", message: Lyte.errorCodes.ERR10, expected: fieldVal };
				}
			} else if (dataVal && dataVal != fieldVal) {
				return { code: "ERR10", message: Lyte.errorCodes.ERR10, expected: fieldVal };
			}
			break;
		case "items":
			{
				if (Array.isArray(dataVal)) {
					for (var i = 0; i < dataVal.length; i++) {
						for (var property in fieldVal) {
							var resp = Lyte.checkProperty(property, dataVal[i], i, fieldVal[property]);
							if (resp != true) {
								return resp;
							}
						}
					}
				}
				break;
			}
		case "properties":
			if ((typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal)) == "object" && !Array.isArray(dataVal)) {
				for (var key in dataVal) {
					for (var property in fieldVal) {
						var resp = Lyte.checkProperty(property, dataVal[key], key, fieldVal[property]);
						if (resp != true) {
							return resp;
						}
					}
				}
			}
			break;
		case "validation":
			{
				var resp = Lyte.customValidator[fieldVal].apply(record, [key, dataVal]);
				if (resp != true) {
					return resp;
				}
			}
	}
	return true;
};

Lyte.types = ["string", "object", "number", "boolean", "array"];

Lyte.attr = function (type, opts) {
	var obj = {};
	obj.type = type;
	if (opts == undefined) {
		opts = {};
	}
	if (this.types.indexOf(type) == -1 && !Lyte.Transform.hasOwnProperty(type)) {
		throw new Error("Not a valid field type - " + type);
	}
	Object.assign(obj, opts);
	return obj;
};

Lyte.defineRelation = function (name, type, opts) {
	var relation = { type: "relation", relType: type, relatedTo: name };
	if (opts) {
		relation.opts = opts;
	}
	return relation;
};

Lyte.belongsTo = function (name, opts) {
	return this.defineRelation(name, "belongsTo", opts);
};

Lyte.hasMany = function (name, opts) {
	return this.defineRelation(name, "hasMany", opts);
};

Lyte.Transform = {};

Lyte.customValidator = {};

Lyte.registerDataType = function (fieldTypeName, properties) {
	var exts = "extends";
	if (this.Transform.hasOwnProperty(fieldTypeName)) {
		Lyte.error("Custom Field Type - " + fieldTypeName + " -  already exists.");
		return;
	}
	if (properties[exts] == undefined || Lyte.types.indexOf(properties[exts]) == -1) {
		Lyte.error("Not a valid field type - " + properties[exts]);
		return;
	}
	this.Transform[fieldTypeName] = properties;
};

Lyte.registerValidator = function (customValidatorName, func) {
	if (this.customValidator.hasOwnProperty(customValidatorName)) {
		Lyte.error("Custom Validator with name - " + customValidatorName + " - already exists");
		return;
	}
	this.customValidator[customValidatorName] = func;
};

Lyte.patterns = {
	email: /^([A-Za-z0-9._%\-'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/,
	url: /(^(ht|f)tp(s?):\/\/[0-9a-zA-Z][-.\w]*(:[0-9])*(\/?)([a-zA-Z0-9\-.?,:'/\\+=&amp;%$#_[\]@!()*;~]*)?$)/,
	ampm: /^(AM|PM|am|pm)$/,
	hour: /^(0?[0-9]|1[0-9]|2[0-4])$/,
	minute: /^(0?[0-9]|[1-5][0-9]|60)$/,
	boolean: /^(true|false|TRUE|FALSE)$/,
	alphaNumeric: /([a-zA-Z0-9])+/,
	alphabetsOnly: /([a-zA-Z])+/,
	numeric: /([0-9])+/,
	phoneNo: /^[0-9a-zA-Z+.()\-;\s]+$/
};

Lyte.validate = function (object, key, value, component) {
	var definition = component.__data[key];
	var isError = false;
	var type = definition ? definition.type : undefined;
	for (var defKey in definition) {
		isError = Lyte.checkProperty(defKey, value, key, definition[defKey], object, type);
		if (isError !== true) {
			return isError;
		}
	}
	return false;
};

Lyte.registerPattern = function (patternName, pattern) {
	this.patterns[patternName] = pattern;
};

Lyte.errorCodes = {
	ERR01: "Primary key cannot be modified", ERR02: "Mandatory field cannot be empty", ERR03: "Type of value does not match the specified data type", ERR04: "Value is greater than the maximum value allowed",
	ERR05: "Value is less than the minimum value allowed", ERR06: "Length of string/array is greater than the maximum limit allowed", ERR07: "Length of string/array is less than the minimum limit allowed",
	ERR08: "String does not match the specified pattern", ERR09: "Values in array are not unique", ERR10: "Value is not equal to the specified constant", ERR11: "Model of related field is not defined",
	ERR12: "Model of backward relation is not defined", ERR13: "Record not found", ERR14: "Model does not match the related field model", ERR15: "Error in creating a record as a relation",
	ERR16: "Record with primary key already exists", ERR17: "Value cannot be changed because record has been deleted", ERR18: "Action not defined", ERR19: "Model not defined",
	ERR20: "Key not specified", ERR21: "'belongsTo' relationship expects a single object/id", ERR22: "Type not specified for polymorphic relation", ERR23: "Primary Key value not present", ERR24: "Error while relating record", ERR25: "Backward relation not present"
};

Lyte.registeredGlobalEvents = {};
Lyte.triggerEvent = function () {
	var args = Array.prototype.slice.call(arguments, 1);
	var eventName = arguments[0];
	var stopEvent = false;
	var s = this.registeredGlobalEvents[eventName];
	if (!s) {
		s = this.registeredGlobalEvents[eventName] = { "listeners": [] };
	} else {
		for (var i = 0; i < s.listeners.length; i++) {
			var func = s.listeners[i];
			if (func) {
				var ret = func.apply(this, args);
				if (ret === false) {
					stopEvent = true;
					break;
				}
			}
		}
	}
	var customEvent = new CustomEvent(eventName, { "detail": args });
	if (!stopEvent) {
		document.dispatchEvent(customEvent);
	}
};

Lyte.addEventListener = function (eventName, func) {
	if (typeof func !== "function") {
		Lyte.error("Second parameter to Lyte.Component.addGlobalEventListener() must be a function");
		return;
	}
	var s = this.registeredGlobalEvents[eventName];
	if (!s) {
		s = this.registeredGlobalEvents[eventName] = { "listeners": [] };
	}
	var d = s.listeners.push(func);
	return eventName + "-" + (d - 1);
};

Lyte.removeEventListener = function (id) {
	if (!id) {
		Lyte.error("listener unique id not specified");
		return;
	}
	var globalId = id.split("-");
	var s = this.registeredGlobalEvents[globalId[0]];
	if (!s || !s.listeners[globalId[1]]) {
		Lyte.error("No such listener registered");
		return;
	}
	s.listeners[globalId[1]] = null;
};

Lyte.deepCopyObject = function (obj) {
	var targetVal = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
	var current,
	    copies = [{ source: obj, target: targetVal }],
	    keys,
	    propertyIndex,
	    descriptor,
	    nextSource,
	    indexOf,
	    sourceReferences = [obj];
	var cloneObject = copies[0].target,
	    targetReferences = [cloneObject];
	while (current = copies.shift()) {
		keys = Object.keys(current.source);
		for (propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
			descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
			if (!descriptor) {
				continue;
			}
			if (!descriptor.value || _typeof(descriptor.value) != "object") {
				Object.defineProperty(current.target, keys[propertyIndex], descriptor);
				continue;
			}
			nextSource = descriptor.value;
			descriptor.value = Array.isArray(nextSource) ? [] : nextSource instanceof Set ? new Set() : Object.create(Object.getPrototypeOf(nextSource));
			indexOf = sourceReferences.indexOf(nextSource);
			if (indexOf != -1) {
				descriptor.value = targetReferences[indexOf];
				Object.defineProperty(current.target, keys[propertyIndex], descriptor);
				continue;
			}
			sourceReferences.push(nextSource);
			targetReferences.push(descriptor.value);
			Object.defineProperty(current.target, keys[propertyIndex], descriptor);
			copies.push({ source: nextSource, target: descriptor.value });
		}
		if (Lyte.isRecord(current.source)) {
			Object.defineProperty(current.target, "$", {
				value: {}
			});
			current.target.$.isNew = current.source.$.isNew;
			current.target.$.isModified = current.source.$.isModified;
			current.target.$.isDeleted = current.source.$.isDeleted;
			current.target.$.pK = current.source.$.pK;
			current.target.$._attributes = current.source.$._attributes;
			current.target.$.isCloned = true;
			if (current.source.$.hasOwnProperty("deepNest")) {
				current.target.$.deepNest = current.source.$.deepNest;
			}
			if (current.source.$.hasOwnProperty("partialType")) {
				current.target.$.partialType = current.source.$.partialType;
			}
		}
		if (Array.isArray(current.source)) {
			if (current.source.partial) {
				Object.defineProperty(current.target, "partial", {
					value: current.source.partial
				});
			}
		}
	}
	return cloneObject;
};

Lyte.nestScpId = 1;
Lyte.nestScp = {};
Lyte.establishObjectBinding = function (data, attr, fromStore, update) {
	var model, fld, nestObj;
	if (fromStore) {
		model = data.$.model;
		fld = model ? model.fieldList[attr] : undefined;
		if (!fld) {
			return;
		}
	}
	if (update && data._scp && data._scp.length) {
		data._scp.forEach(function (itm, idx) {
			var path = itm.path ? itm.path.split(".") : [];
			path.push(attr);
			Lyte.bindObj(data, attr, itm.id, path);
		});
	} else if ((!fromStore || fld.watch) && data[attr]) {
		data._scpObj || Object.defineProperty(data, "_scpObj", {
			value: {}
		});
		var obj = data._scpObj,
		    id;
		id = obj[attr] = obj[attr] || Lyte.nestScpId++;
		if (fromStore) {
			nestObj = { model: model._name, attr: attr, pK: data.$.pK };
		} else {
			nestObj = { data: data[attr] };
		}
		Lyte.nestScp[id] = Lyte.nestScp[id] || nestObj;
		var path = [];
		fromStore ? path.push(attr) : undefined;
		Lyte.bindObj(data, attr, id, path);
	}
};

Lyte.bindObj = function (data, key, id, path) {
	var value = key != undefined ? data[key] : data;
	if (Array.isArray(value)) {
		value.forEach(function (val, idx) {
			path.push(idx);
			Lyte.bindObj(value, idx, id, path);
			path.pop();
		});
		Lyte.estObjScp(value, id, path);
	} else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == "object") {
		for (var str in value) {
			path.push(str);
			Lyte.bindObj(value, str, id, path);
			path.pop();
		}
		Lyte.estObjScp(value, id, path);
	}
};

Lyte.estObjScp = function (value, id, path) {
	if (!value._scp) {
		Object.defineProperty(value, "_scp", {
			value: [],
			enumerable: false,
			configurable: true
		});
	}
	var obj = {};
	obj.id = id;
	obj.path = path ? path.join(".") : path;
	value._scp.push(obj);
};

Lyte.cmpObjs = function (obj1, obj2) {
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	for (var key in obj1) {
		if (!obj2.hasOwnProperty(key)) {
			return false;
		}
		var ret = Lyte.cmpData(obj1[key], obj2[key]);
		if (ret == false) {
			return false;
		}
	}
	return true;
};

Lyte.cmpData = function (data1, data2) {
	if (Array.isArray(data1)) {
		if (!Array.isArray(data2) || data1.length !== data2.length) {
			return false;
		}
		var len = data1.length,
		    ret;
		for (var i = 0; i < len; i++) {
			ret = Lyte.cmpData(data1[i], data2[i]);
			if (ret == false) {
				return false;
			}
		}
	} else if (data1 && data2 && (typeof data1 === 'undefined' ? 'undefined' : _typeof(data1)) == "object" && (typeof data2 === 'undefined' ? 'undefined' : _typeof(data2)) == "object") {
		return Lyte.cmpObjs(data1, data2);
	} else if (Lyte && Lyte.isRecord(data1) && Lyte.isRecord(data2)) {
		if (data1.$.model._name !== data1.$.model._name || Lyte.getpKVal(data1) !== Lyte.getpKVal(data2)) {
			return false;
		}
	} else if (data1 !== data2) {
		return false;
	}
	return true;
};

Lyte.nestScpRemove = function (data, id) {
	var arr = data._scp;
	if (arr && arr.length) {
		var fil = arr.filter(function (itm) {
			return itm.id == id;
		}) || [];
		fil.forEach(function (ele) {
			var ind = arr.indexOf(ele);
			arr.splice(ind, 1);
		});
		if (!arr.length) {
			delete data._scp;
		}
	}
};

Lyte.removeNestScp = function (value, id) {
	if (Array.isArray(value)) {
		value.forEach(function (val, idx) {
			Lyte.removeNestScp(val, id);
			Lyte.nestScpRemove(val, id);
		});
	} else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == "object") {
		for (var str in value) {
			Lyte.removeNestScp(value[str], id);
		}
		Lyte.nestScpRemove(value, id);
	}
};

Lyte.resolvePromises = function (promises) {
	if (typeof promises == "string" || promises instanceof Promise) {
		return promises;
	} else {
		if (Array.isArray(promises)) {
			return promiseArray(promises);
		} else if ((typeof promises === 'undefined' ? 'undefined' : _typeof(promises)) == "object") {
			return promiseHash(promises);
		}
	}

	function promiseHash(promiseObj) {
		var actPromKeys = [],
		    promises = [],
		    promiseKeys = Object.keys(promiseObj);
		promiseKeys.forEach(function (key) {
			var value = promiseObj[key];
			if (value instanceof Promise) {
				actPromKeys.push(key);
				promises.push(value);
			}
		});
		if (!promises.length) {
			return Promise.resolve(promiseObj);
		} else {
			var obj = {},
			    promise = new Promise(function (resolve, reject) {
				Promise.all(promises).then(function (data) {
					promiseKeys.forEach(function (promiseKey) {
						if (actPromKeys.indexOf(promiseKey) != -1) {
							obj[promiseKey] = data[actPromKeys.indexOf(promiseKey)];
						} else {
							obj[promiseKey] = promiseObj[promiseKey];
						}
					});
					resolve(obj);
				}, function (err) {
					reject(err);
					Lyte.error('Error on resolve promises', err);
				});
			});
			return promise;
		}
	}

	function promiseArray(promiseArray) {
		var array = [],
		    hasPromise = false;
		promiseArray.every(function (item, i) {
			if (item instanceof Promise) {
				hasPromise = true;
				return false;
			}
			return true;
		});
		if (!hasPromise) {
			return Promise.resolve(promiseArray);
		}
		var promise = new Promise(function (resolve, reject) {
			Promise.all(promiseArray).then(function (data) {
				promiseArray.forEach(function (key, index) {
					array[index] = data[index];
				});
				resolve(array);
			}, function (err) {
				reject(err);
				Lyte.error('Error on resolve promises', err);
			});
		});
		return promise;
	}
};

Lyte.createCustomElement = function (customElementName, definition) {
	var constructor = definition.constructor;
	delete definition.constructor;
	this.defProperty = function (obj, key, val) {
		var obj1 = {};
		if (val.get) {
			obj1.get = val.get;
		}
		if (val.set) {
			obj1.set = val.set;
		}
		Object.defineProperty(obj, key, obj1);
	};

	var classDef = function (_HTMLElement) {
		_inherits(classDef, _HTMLElement);

		function classDef() {
			_classCallCheck(this, classDef);

			var _this = _possibleConstructorReturn(this, (classDef.__proto__ || Object.getPrototypeOf(classDef)).call(this));

			if (constructor) {
				constructor.apply(_this, Array.from(arguments));
			}
			return _this;
		}

		return classDef;
	}(HTMLElement);

	var staticDef = definition.static;
	if (staticDef) {
		for (var key in staticDef) {
			if (_typeof(staticDef[key]) === "object") {
				this.defProperty(classDef, key, staticDef[key]);
			} else {
				Object.defineProperty(classDef, key, {
					value: staticDef[key]
				});
			}
		}
		delete definition.static;
	}
	for (var key in definition) {
		if (_typeof(definition[key]) === "object") {
			this.defProperty(classDef.prototype, key, definition[key]);
		} else {
			Object.defineProperty(classDef.prototype, key, { value: definition[key] });
		}
	}
	definition.static = staticDef[key];
	definition.constructor = constructor;
	if (document.readyState === "complete" || document.readyState === "interactive") {
		// document is already ready to go
		customElements.define(customElementName, classDef);
	} else {
		Lyte.toBeRegistered.push({ name: customElementName, def: classDef });
	}
	Lyte.registeredCustomComponent[customElementName] = classDef;
};

function domContentLoaded1() {
	document.head.appendChild(Lyte.$.assetsDiv);
	var comp = Lyte.toBeRegistered;
	if (comp.length) {
		for (var j = 0; j < comp.length; j++) {
			customElements.define(comp[j].name, comp[j].def);
		}
		Lyte.toBeRegistered = [];
	}
}

if (document.readyState === "complete" || document.readyState === "interactive") {
	domContentLoaded1();
} else {
	document.addEventListener("DOMContentLoaded", function (e) {
		domContentLoaded1();
	}, true);
};;(function (window) {
	function Router(routes) {
		/*-----------string declaration starts------------*/
		var functionStr = "function",
		    routeStr = "route",
		    TransitionStr = "Transition",
		    pendingStr = "pending",
		    completedStr = "completed",
		    abortedStr = "aborted",
		    TransitionAbortedStr = TransitionStr + " " + abortedStr + ".",
		    TransitionResumedStr = TransitionStr + " resumed.",
		    TransitionPausedStr = TransitionStr + " paused.",
		    TransitionComletedStr = TransitionStr + " " + completedStr + ".",
		    parseRouteMappingStr = "parseRouteMapping",
		    constructRunLoopStr = "constructRunLoop",
		    RouteTransitionStr = "Route" + TransitionStr,
		    getDependenciesStr = "getDependencies",
		    getResourcesStr = "getResources",
		    beforeStr = "before",
		    afterStr = "after",
		    beforeModelStr = beforeStr + "Model",
		    modelStr = "model",
		    afterModelStr = afterStr + "Model",
		    redirectStr = "redirect",
		    renderTemplateStr = "renderTemplate",
		    afterRenderStr = afterStr + "Render",
		    beforeExitStr = beforeStr + "Exit",
		    didDestroyStr = "didDestroy",
		    willTransitionStr = "will" + TransitionStr,
		    didTransitionStr = "did" + TransitionStr,
		    onErrorStr = "onError",
		    onBeforeLoadStr = "onBeforeLoad",
		    beforeRouteTransitionStr = beforeStr + "Route" + TransitionStr,
		    afterRouteTransitionStr = afterStr + "Route" + TransitionStr,
		    beforeTemplateDestroyStr = beforeStr + "TemplateDestroy",
		    resourcesStr = "resources",
		    dependenciesStr = "dependencies",
		    ltPropStr = "lt-prop",
		    pRoute = ltPropStr + "-" + routeStr,
		    pFragment = ltPropStr + "-fragment",
		    pDp = ltPropStr + "-dp",
		    pQp = ltPropStr + "-qp",
		    pTd = ltPropStr + "-td",
		    pTrans = ltPropStr + "-trans",
		    pRefreshRoute = ltPropStr + "-refresh-" + routeStr,
		    linktoStr = "link-to",
		    LINKTOStr = "LINK-TO",
		    dependencyRequestLog = 'Requesting files in ' + getDependenciesStr + ' will stall execution of route till download completes. Please validate files ' + beforeStr + ' requesting.',
		    renderTemplateWarning = renderTemplateStr + " hook should return either component or HTML. Rendering of HTML directly into the DOM within the " + renderTemplateStr + " hook is deprecated.",
		    addRoutesWarning = "addRoutes function will be deprecated from next version",
		    ltPropWarning = "Error while parsing ltProp in " + linktoStr,

		/*-----------string declaration ends------------*/
		fontColor = 'MediumOrchid',
		    newTransInfo,
		    t = Lyte.time,
		    l = Lyte.log,
		    parse = JSON.parse,
		    LR = this,
		    d = document,
		    dloc = d.location,
		    config = {
			routeHash: {},
			urlCache: {},
			stickyRoutes: {}
		},
		    trans,
		    prevTrans,
		    newTrans,
		    visibleTrans,
		    historyObj,
		    initialLoad = true,
		    allowHistoryChange = false,

		// fromHistoryGo = false,
		routeParser,
		    processedDispatch,
		    emptyFn = function emptyFn() {},
		    run = {},
		    reqestedType = {
			getResources: resourcesStr,
			getDependencies: dependenciesStr
		};

		run[getDependenciesStr] = run[getResourcesStr] = function (hook, index) {
			var r = this.R[index],
			    callback = r[hook],
			    require = callHookWithoutPromise.call(this, callback, this.routes[index], hook, params(index));
			r.__lp[reqestedType[hook] + 'Loaded'] = !callback;
			if (callback && validateTransition(this)) {
				r.__lp[reqestedType[hook]] = require;
				if (require && hook == getDependenciesStr) {
					console.warn(dependencyRequestLog);
				}
				getRequirements.call(this, { reqType: reqestedType[hook], r: r, index: index });
			}
			return callHookWithPromise();
		};

		run[beforeModelStr] = run[modelStr] = run[afterModelStr] = run[redirectStr] = function (hook, index) {
			var routeInstance = this.routes[index],
			    args = [this.R[index][hook], routeInstance, params(index)];
			if ([afterModelStr, redirectStr].indexOf(hook) != -1) {
				args.splice(2, 0, routeInstance.currentModel);
			}
			return callHookWithPromise.apply(this, args);
		};

		run[onErrorStr] = function (hook, index, err, state) {
			setPendingResume.call(trans, trans.prom);
			var instance = this.routes[index];
			for (; index >= 0 && !this.aborted && this.paused; index--) {
				l(onErrorStr + " of " + instance.routeName, routeStr, fontColor);
				if (callAction.call(this, onErrorStr, index, [err, this._trans, params(index), hook]) == false) {
					break;
				}
			}
			consoleErrorFromCallback(err, hook, instance.routeName, state);
		};

		run[willTransitionStr] = function (hook, index) {
			if (callAction.call(prevTrans, hook, index, [trans._trans]) == false) {
				removeHook(trans.runLoop.previous, hook);
			}
			return callHookWithPromise();
		};

		run[beforeRouteTransitionStr] = function () {
			if (newTransInfo && validateTransition(this)) {
				newTransInfo.state = getHistoryState({
					replace: newTransInfo.replace,
					data: trans._trans.data,
					url: trans.url,
					matched: trans.matched
				});
				var obj = {
					prevTrans: prevTrans && prevTrans._trans || undefined,
					trans: trans._trans,
					history: getHistoryObj(newTransInfo)
				};
				LR[beforeRouteTransitionStr](obj.prevTrans, obj.trans, obj.history);
				Lyte.triggerEvent(beforeRouteTransitionStr, obj);
			}
			return callHookWithPromise();
		};

		run[afterRouteTransitionStr] = function (_trans) {
			LR[afterRouteTransitionStr](_trans);
			Lyte.triggerEvent(afterRouteTransitionStr, { trans: _trans });
		};

		run[onBeforeLoadStr] = function () {
			return new Promise(function (resolve, reject) {
				for (var len = trans.matched.route.length, i = 1; i <= len && validateTransition(trans); i++) {
					var l = len - i;
					if (callAction.call(trans, onBeforeLoadStr, l, [params(l)]) == false || i == len) {
						resolve();
						break;
					}
				}
			});
		};

		run[afterRenderStr] = run[didTransitionStr] = function (hook, index) {
			return new Promise(function (resolve, reject) {
				var st = setTimeout(function () {
					if (hook == afterRenderStr) {
						var routeInstance = this.routes[index];
						routeInstance.__lp.rendered = true;
						callHookWithPromise.call(this, this.R[index][hook], routeInstance, routeInstance.currentModel, params(index), routeInstance.component).then(function (data) {
							resolve(data);
						}, function (data) {
							reject(data);
						});
					} else {
						run.removeTemplate.call(this);
						if (callAction.call(this, hook, index, [params(index), trans._trans]) == false) {
							removeHook(trans.runLoop.current, hook);
							index = 0;
						}
						resolve();
						if (index == 0) {
							transitionCompleted({ state: 200 });
						}
					}
				}.bind(this, hook, index), 0);
				this.fns.push(st);
			}.bind(this));
		};

		run[beforeExitStr] = function (hook, index) {
			var prevTransRouteInstance = prevTrans.routes[index],
			    callback = prevTrans.R[index][hook];
			return callHookWithPromise.call(this, callback, prevTransRouteInstance, prevTransRouteInstance.currentModel, params(index, prevTrans));
		};

		run[renderTemplateStr] = function (hook, index) {
			var r = this.R[index],
			    routeInstance = this.routes[index];
			if (r[hook]) {
				run.removeTemplate.call(this);
				var renderTemplate = callHookWithoutPromise.call(this, r[hook], routeInstance, hook, routeInstance.currentModel, params(index));
				if (validateTransition(this)) {
					if (renderTemplate && (routeInstance.outletName = renderTemplate.outlet)) {
						var data = routeInstance.currentModel,
						    outlet;
						if (routeInstance.outlet = outlet = getOutlet(renderTemplate.outlet, routeInstance.parent)) {
							var obj = {
								outlet: renderTemplate.outlet,
								route: routeInstance
							};
							if (renderTemplate.component) {
								if (routeInstance.component && !renderTemplate.reRender && routeInstance.component.tagName.toLocaleLowerCase() == renderTemplate.component && routeInstance.outlet == outlet && outlet.contains(routeInstance.component)) {
									setDataInComponent.call(this, routeInstance.component, data, routeInstance);
								} else {
									Lyte.triggerEvent(beforeTemplateDestroyStr, obj);
									var component = d.createElement(renderTemplate.component);
									component._route = routeInstance.__lp.objPath;
									setDataInComponent(component, data, routeInstance);
									outlet.innerHTML = '';
									outlet.appendChild(routeInstance.component = component);
								}
							} else if (renderTemplate.html) {
								routeInstance.component = undefined;
								Lyte.triggerEvent(beforeTemplateDestroyStr, obj);
								outlet.innerHTML = renderTemplate.html;
								var scripts = outlet.getElementsByTagName('script');
								if (scripts.length) {
									scriptExecution(Array.from(scripts), outlet);
								}
							}
						}
					} else {
						Lyte.warn(renderTemplateWarning);
					}
				}
			} else if (validateTransition(this) && this.runLoop.templateToRemove && this.R.length == index + 1) {
				run.removeTemplate.call(this);
			}
			return callHookWithPromise();
		};

		function setDataInComponent(component, data, routeInstance) {
			if (data) {
				if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == "object" && !Array.isArray(data)) {
					component.setData(data);
				} else {
					processError.call(this, true, Error(getError(203)).stack, routeInstance);
				}
			}
		}

		function getOutlet(outlet, parent) {
			var _outlet;
			if (parent) {
				_outlet = parent.outlet ? parent.outlet.querySelector(outlet) : undefined;
				if (!_outlet) {
					return getOutlet(outlet, parent.parent);
				}
			} else if (!(_outlet = d.querySelector(outlet))) {
				consoleError(428, outlet);
			}
			return _outlet;
		}

		function scriptExecution(scriptNode) {
			for (var i = 0, currentScript; currentScript = scriptNode[i]; i++) {
				var parent = currentScript.parentNode,
				    s = d.createElement("script");
				for (var j = 0, attributes; attributes = currentScript.attributes[j]; j++) {
					s.setAttribute(attributes.name, attributes.value);
				}
				s.innerHTML = currentScript.innerHTML;
				parent.appendChild(s);
				parent.removeChild(currentScript);
			}
		}

		run.removeTemplate = function () {
			var arr = this.runLoop.templateToRemove;
			if (!this.cleared) {
				if (prevTrans && arr) {
					templateDelete(arr);
				}
				this.cleared = true;
				if (visibleTrans != this) {
					visibleTrans = this;
				}
				delete this.runLoop.templateToRemove;
				Lyte.removeFromCache();
			}
		};

		function params(index, t) {
			t = t || trans;
			var routeInstance = t.routes[index];
			return {
				queryParams: routeInstance.__lp.queryParams,
				dynamicParam: routeInstance.__lp.dynamicParam
			};
		}

		function validateTransition(trans) {
			return !trans.aborted && !trans.paused;
		}

		function addToHistory(obj) {
			var type = obj.replace ? "replaceState" : "pushState",
			    url = config.history ? _delimit(shiftBaseURL(obj.url, true)) : '#' + _delimit(obj.url);
			obj.title = obj.title || d.title;
			/* support for windows, undefined is appended to url */
			if (url) {
				window.history[type](obj.state, obj.title, url);
			} else {
				window.history[type](obj.state, obj.title);
			}
			return obj;
		}

		function getMeta() {
			return history.state && history.state.meta;
		}

		function getData() {
			return history.state && history.state.data;
		}

		function getHistoryState(obj) {
			/* 
   	state data which needs to be pushed to history. 
   	- Matched object is added to process url directly with history back and forward.
   	- Index is used to detect browser back or forward.
   */
			return {
				meta: {
					matched: obj.matched,
					url: obj.url,
					index: obj.replace && getMeta() ? getMeta().index : initialLoad ? history.length - 1 : history.length
				},
				data: obj.data
			};
		}

		function getHistoryObj(obj) {
			/* parses history state to history object. */
			if (!LR.history) {
				historyRegistration();
			}
			LR.history.fromHistory = obj.fromHistory ? (LR.history.index = obj.state.meta.index) < history.length - 1 ? 'back' : history.state ? 'reload' : 'forward' : false;
			allowHistoryChange = true;
			LR.history.state = getData() || {};
			LR.history.initial = initialLoad;
			return LR.history;
		}

		this.configureDefaults = function (options) {
			options = options || {};
			config.history = options.history == "html5";
			config.baseURL = options.baseURL;
			config.deferInit = options.deferInit || false;
			config.queryParamOptions = {
				sticky: options.queryParamOptions && options.queryParamOptions.hasOwnProperty('sticky') ? options.queryParamOptions.sticky : true
			};
			this.__lp.config = config;
		};

		this.__lp = {
			version: "3.0.0",
			pendingReg: [],
			getDefinition: function getDefinition(arr, def) {
				if (arr == "*") {
					return config.routes;
				} else {
					def = def || config.routes;
					def = _getObj(arr, def);
					return def && def.__lp && def.__lp.def || undefined;
				}
			}
		};

		this.configureRoutes = function (map) {
			if (!this.__lp.config) {
				this.configureDefaults();
			}
			parseRouteMapping.call(this, map);
			this.__lp.pendingReg.forEach(function (fn) {
				registerRoute.apply({}, fn);
			});
			this.__lp.pendingReg = [];
			if (d.readyState === "complete" || d.readyState === "interactive") {
				init();
			} else {
				window.addEventListener('DOMContentLoaded', function () {
					init();
				});
			}
		};

		function init() {
			if (!config.deferInit && LR.init) {
				LR.init();
			}
		}

		this.init = function (r) {
			delete this.init;
			window.onpopstate = function (onChangeEvent) {
				// if(fromHistoryGo) {
				// 	fromHistoryGo = false;
				// 	return;
				// }
				var url;
				if (!(getMeta() && (url = getMeta().url))) {
					if (config.history) {
						url = getLocation();
					} else {
						var newURL = onChangeEvent && onChangeEvent.newURL || dloc.hash;
						url = checkForEmptyPath(newURL.replace(/.*#/, ''));
					}
				}
				historyObj = {
					fromHistory: true,
					url: url
				};
				if (onChangeEvent && history.state) {
					historyObj.data = history.state;
				}
				dispatch(url);
			};
			if (config.history) {
				window.onpopstate();
			} else {
				historyObj = {
					fromHistory: true,
					url: getLocation()
				};
				dispatch(historyObj.url);
			}
			linkToRegistration();
			return this;
		};

		this.beforeScroll = this[beforeRouteTransitionStr] = this[afterRouteTransitionStr] = emptyFn;

		function setRouteDef(dir, value) {
			var cache = config.routes,
			    dirLen = dir.length - 1;
			dir.forEach(function (key, i) {
				if (dirLen === i) {
					var obj = cache[key];
					if (obj && obj.__lp) {
						obj.__lp.def = value;
					} else if (obj) {
						obj.__lp = { def: value };
					} else {
						cache[key] = { __lp: { def: value } };
					}
				} else if (!cache[key]) {
					cache[key] = {};
				}
				cache = cache[key];
			});
		}

		function linkToRegistration() {
			var LinkTo = function (_HTMLElement2) {
				_inherits(LinkTo, _HTMLElement2);

				function LinkTo() {
					_classCallCheck(this, LinkTo);

					return _possibleConstructorReturn(this, (LinkTo.__proto__ || Object.getPrototypeOf(LinkTo)).apply(this, arguments));
				}

				_createClass(LinkTo, [{
					key: 'attributeChangedCallback',
					value: function attributeChangedCallback(attr, oldValue, newValue) {
						if (this.matched && this.hasAttribute("lyte-rendered")) {
							var firstChild = this.children[0];
							//If attr is ltProp
							if (attr === ltPropStr) {
								this.handleLtProp();
								if (!this.hasAttribute("lt-prop-custom")) {
									this.setCustomAttributes(firstChild, true);
								}
								if (firstChild.tagName === "A") {
									this.constructHref(firstChild);
								}
							} else if (/^(lt-prop-route|lt-prop-fragment|lt-prop-dp|lt-prop-qp)$/.test(attr)) {
								//if it is a route transition attribute
								this.getMatchedObject();
								if (firstChild.tagName === "A") {
									this.constructHref(firstChild, attr, oldValue, newValue);
								}
							} else if (!this.hasAttribute('lt-prop-custom')) {
								//for rest of the attributes
								firstChild.setAttribute(attr.substring(8), newValue);
							}
						}
					}
				}, {
					key: 'connectedCallback',
					value: function connectedCallback() {
						this.ltProp = this.ltProp || {};
						this.handleLtProp();
						if (this.hasAttribute("lyte-rendered")) {
							if (!this.matched) {
								this.getMatchedObject();
							}
							return;
						}
						var isCustom = this.hasAttribute("lt-prop-custom") || this.ltProp.custom,
						    aTag;
						if (isCustom) {
							this.getMatchedObject();
							if ((aTag = this.children[0]) && aTag.tagName === "A") {
								this.constructHref(aTag);
							}
						} else {
							aTag = d.createElement("a");
							while (this.childNodes[0]) {
								aTag.appendChild(this.childNodes[0]);
							}
							this.setCustomAttributes(aTag);
							this.getMatchedObject();
							this.constructHref(aTag);
							this.appendChild(aTag);
						}
						if (Lyte.Component) {
							this._linkToEventId = Lyte.Component.addLyteEventListener(this, "click", function (event) {
								linkToEventListener(event, this);
							}, this);
						} else {
							this.addEventListener("click", linkToEventListener);
						}
						this.setAttribute("lyte-rendered", "");
					}
				}, {
					key: 'modifyLinkToTagsInRoute',
					value: function modifyLinkToTagsInRoute(remove) {
						var strRoute = Array.isArray(this.matched.route) ? this.matched.route.join('.') : this.matched.route;
						if (config.stickyRoutes[strRoute]) {
							var routesObj = config.routes,
							    _routes = void 0;
							if (remove) {
								if (this.matched) {
									_routes = remove;
								} else {
									return;
								}
							} else {
								_routes = this.matched.route;
							}
							if (!_routes) {
								return;
							}
							_routes = Array.isArray(_routes) ? _routes : dotSerperator(_routes);
							_routes.forEach(function (r, i) {
								routesObj = _getObj(r, routesObj);
								if (!routesObj || !routesObj.__lp) {
									consoleError(422, _routes, i);
									return false;
								}
								var def = routesObj.__lp.def.__lp;
								if (remove) {
									var pos = def.linkTags.indexOf(this);
									if (pos !== -1) {
										def.linkTags.splice(pos, 1);
									}
								} else if (def.qpdef) {
									def.linkTags.push(this);
								};
							}.bind(this));
						}
					}
				}, {
					key: 'disconnectedCallback',
					value: function disconnectedCallback() {
						var m = this.modifyLinkToTagsInRoute.bind(this);
						if (!Lyte.Component.shouldIgnoreDisconnect()) {
							if (this.matched && this.matched.route) {
								m(this.matched.route);
							}
							if (this._linkToEventId) {
								Lyte.Component.removeLyteEventListener(this, this._linkToEventId);
							}
						}
					}
				}, {
					key: 'handleLtProp',
					value: function handleLtProp() {
						var ltProp = this.getAttribute(ltPropStr);
						if (ltProp) {
							try {
								this.ltProp = parse(ltProp);
							} catch (e) {
								Lyte.warn(ltPropWarning);
							}
						}
					}
				}, {
					key: 'setCustomAttributes',
					value: function setCustomAttributes(linkTag, onlyLtProp) {
						for (var key in this.ltProp) {
							if (/^(id|class|style|target)$/.test(key)) {
								linkTag.setAttribute(key, this.ltProp[key]);
							}
						}
						if (!onlyLtProp) {
							for (var i = 0, attr, attrName; attr = this.attributes[i]; i++) {
								if ((attrName = attr.nodeName) !== ltPropStr && /^(lt-prop-id|lt-prop-rel|lt-prop-class|lt-prop-style|lt-prop-target)$/.test(attrName)) {
									linkTag.setAttribute(attrName.substring(8), attr.nodeValue);
								}
							}
						}
					}
				}, {
					key: 'constructHref',
					value: function constructHref(linkTag, attr, oldValue) {
						var href,
						    m = this.modifyLinkToTagsInRoute.bind(this);
						if (href = LR.getURL.call(this, this.matched)) {
							linkTag.setAttribute("href", href);
							if (attr === pRoute) {
								m(oldValue);
								m();
							} else {
								m();
							}
						}
					}
				}], [{
					key: 'observedAttributes',
					get: function get() {
						return [pRoute, pDp, pFragment, pQp, ltPropStr, 'lt-prop-class', 'lt-prop-id', 'lt-prop-rel', 'lt-prop-title', 'lt-prop-style', 'lt-prop-target'];
					}
				}]);

				return LinkTo;
			}(HTMLElement);

			LinkTo.prototype.getMatchedObject = function () {
				var matched = this.matched || {},
				    ga = this.getAttribute.bind(this),
				    dynamicParams = ga(pDp) || this.ltProp.dp || [],
				    queryParams = ga(pQp) || this.ltProp.qp || {};
				matched.route = ga(pRoute) || this.ltProp.route;
				matched.fragment = ga(pFragment) || this.ltProp.fragment;
				if (!(dynamicParams instanceof Array)) {
					try {
						dynamicParams = parse(dynamicParams);
					} catch (e) {
						consoleError(498, "dynamicParams", this.outerHTML);
						return;
					}
				}
				if (!(queryParams instanceof Object)) {
					try {
						queryParams = parse(queryParams);
					} catch (e) {
						consoleError(498, "queryParams", this.outerHTML);
					}
				}
				matched.dynamicParams = dynamicParams || [];
				matched.queryParams = queryParams || {};
				return this.matched = matched;
			};
			customElements.define(linktoStr, LinkTo);
		}

		function linkToEventListener(event, linkTo) {
			if (event.button == 2 || event.defaultPrevented) {
				return;
			}
			var targetElem = linkTo || event.currentTarget;
			if (targetElem.children[0].tagName === "A" && (event.ctrlKey == true || event.metaKey == true || event.which == 2 || targetElem.children[0].hasAttribute("target") && targetElem.children[0].getAttribute("target") !== "_self")) {
				return;
			}
			event.preventDefault();
			var currentTransition = LR.getRouteInstance().transition,
			    transitionInstance;
			var matched = Object.assign({}, targetElem.matched);
			matched.route = Array.isArray(matched.route) ? matched.route.join('.') : matched.route;
			if (currentTransition && LR.checkIfSameRoute(matched, currentTransition.info) && targetElem.hasAttribute(pRefreshRoute)) {
				transitionInstance = LR.getRouteInstance(targetElem.getAttribute(pRefreshRoute)).refresh();
			} else {
				transitionInstance = LR.transitionTo(targetElem.matched);
			}
			var transObj = {},
			    transProp;
			if (transProp = targetElem.getAttribute(pTrans)) {
				try {
					transObj = parse(transProp);
				} catch (e) {
					consoleError(498, pTrans, this.outerHTML);
				}
			}
			var transitionData = targetElem.getAttribute(pTd);
			if (transitionData = transitionData || transObj.data) {
				if (typeof transitionData === "string") {
					try {
						transitionData = parse(transitionData);
					} catch (e) {
						consoleError(498, pTd, this.outerHTML);
					}
				}
				transObj.data = transitionData;
			}
			for (var key in transObj) {
				transitionInstance[key] = transObj[key];
			}
		}

		this.checkIfSameRoute = function (transInfo1, transInfo2) {
			if (transInfo1.route == transInfo2.route && transInfo1.fragment == transInfo2.fragment && transInfo1.dynamicParams.length === transInfo2.dynamicParams.length && _compareObj(transInfo1.queryParams, transInfo2.queryParams)) {
				if (transInfo1.dynamicParams.length) {
					for (var i = 0, dynamicParam; dynamicParam = transInfo1.dynamicParams[i]; i++) {
						if (dynamicParam != transInfo2.dynamicParams[i]) {
							return false;
						}
					}
				}
				return true;
			}
			return false;
		};

		this.addRoutes = function (map) {
			Lyte.warn(addRoutesWarning);
			Object.assign(config.routes, parseRouteMapping.call(routeParser, map));
		};

		function dotSerperator(str) {
			return str.split('.').filter(function (s) {
				return s != "";
			});
		}

		function _arrayClean(e) {
			return e != undefined;
		}

		function parseRouteMapping(map) {
			t(parseRouteMappingStr);
			var routesObj = config.routes ? config.routes : config.routes = {},
			    mapObj = {},
			    pathStringArr = [],
			    routeStringArr = [];
			routeParser = {
				route: function route(routeName, obj, nestedFn) {
					if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
						if (!obj.path) {
							obj.path = _delimit(routeName);
						} else {
							if (_presence(obj.path, "?")) {
								var split = obj.path.split('?');
								obj.defQP = frameQueryParams(split[1]);
								obj.path = split[0];
							}
						}
						if (obj.queryParams) {
							obj.defQP = obj.queryParams;
						}
					} else {
						if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == functionStr) {
							nestedFn = obj;
						}
						obj = { path: _delimit(routeName) };
					}
					mapObj = _getObj(pathStringArr, config.routeHash)[obj.path] = { __lp: {} };
					if (obj.path == '/') {
						pathStringArr.push('/');
					} else {
						var trimedPath = obj.path;
						if (dynamicRouteCheck(trimedPath) || wildcardRouteCheck(trimedPath)) {
							_splitPath(trimedPath).every(function (seg, index, arr) {
								if (dynamicRouteCheck(seg) || wildcardRouteCheck(seg)) {
									var dkey;
									if (dynamicRouteCheck(seg)) {
										dkey = seg.replace(":", "");
									} else {
										dkey = seg.replace("*", "");
										obj.wildcard = mapObj.__lp.wildcard = true;
										obj.sufix = mapObj.__lp.sufix = [];
										for (var i = index + 1, j; j = arr[i]; i++) {
											mapObj.__lp.sufix.push(j);
										}
									}
									obj.dkey = mapObj.__lp.dkey = dkey;
									obj.dIndex = mapObj.__lp.dIndex = index;
									return false;
								}
								return true;
							});
						}
						pathStringArr.push(trimedPath);
					}
					var routes = _getObj(routeStringArr, routesObj) || routesObj;
					routeStringArr.push(routeName);
					mapObj.__lp.route = Array.from(routeStringArr);
					routes[routeName] ? Object.assign(routes[routeName].__lp, obj) : routes[routeName] = { __lp: obj };
					if (nestedFn) {
						nestedFn.call(this, {});
					}
					routeStringArr.pop();
					pathStringArr.pop();
				}
			};
			map.call(routeParser, {});
			t(parseRouteMappingStr);
			return routesObj;
		}

		this.replaceWith = function () {
			var args = normalizeMatchedObj.call(this, normalizeTransitionParams.apply(this, arguments));
			if (args) {
				args.replace = true;
				return routeTransition(args);
			}
		};

		this.transitionTo = function () {
			var matched;
			if (matched = normalizeMatchedObj.call(this, normalizeTransitionParams.apply(this, arguments))) {
				return routeTransition(matched);
			}
		};

		this.getURL = function (matched) {
			if (matched) {
				if (!matched.route) {
					matched = normalizeTransitionParams.apply(this, arguments);
				}
				var url,
				    linkTo = this.tagName == LINKTOStr,
				    cache = config.urlCache,
				    matchedCache;
				sticky = config.queryParamOptions.sticky;
				if (!sticky && (matchedCache = cache[Array.isArray(matched.route) ? matched.route.join('.') : matched.route])) {
					url = matchedCache.url;
					if (matched.dynamicParams.length) {
						matched.dynamicParams.forEach(function (key, i) {
							url = url.replace('<<dp>>', key);
						});
					} else if (url.indexOf('<<dp>>') != -1) {
						consoleError(499, matched.route, linkTo ? this : undefined);
					}
					for (var key in matchedCache.defQP) {
						if (!matched.queryParams[key] && matchedCache.defQP[key]) {
							matched.queryParams[key] = matchedCache.defQP[key];
						}
					}
					url = appendQueryParamsAndFrag(url, matched);
				} else {
					if (linkTo) {
						url = constructURLFromRoute.apply(this, arguments);
					} else {
						url = constructURLFromRoute.call(this, matched);
					}
				}
				url = config.history ? shiftBaseURL(url, true) : '#' + url;
				return url;
			}
		};

		this.getRoute = function (url) {
			var matched = traverse(shiftBaseURL(url), true);
			if (matched) {
				matched.dynamicParams = matched.dynamicParams.filter(_arrayClean);
				matched.route = matched.route.join('.');
			}
			return matched;
		};

		function routeTransition(matched) {
			newTransInfo = {
				replace: matched.replace,
				title: trans ? trans.title : d.title,
				fromHistory: false
			};
			var url = dispatchTransition(matched);
			l('Transitioning to ' + matched.route.join('.') + ' ' + url, routeStr);
			return newTrans._trans;
		}

		function getLocation() {
			if (config.history) {
				var path = checkForEmptyPath(dloc.pathname + dloc.search + (dloc.hash || ""));
				path = shiftBaseURL(path);
				return _delimit(path);
			} else {
				return _delimit(checkForEmptyPath(dloc.hash.replace('#', '')));
			}
		}

		function checkForEmptyPath(path) {
			if (!path) {
				addToHistory({
					replace: true,
					state: getHistoryState({
						replace: true,
						data: getData() || undefined,
						url: path = '/'
					}),
					url: path
				});
			}
			return path;
		}

		function shiftBaseURL(path, append) {
			var baseURL;
			if ((baseURL = config.baseURL) && path) {
				baseURL = _delimit(baseURL);
				if (path.indexOf(baseURL) == 0 && !append) {
					return path.replace(baseURL, '');
				} else if (append && path.indexOf(baseURL) == -1) {
					return baseURL + path;
				}
			}
			return path;
		}

		function constructURLFromRoute(matched) {
			if (matched && matched.route) {
				var strRoute;
				if (!Array.isArray(matched.route)) {
					matched.route = dotSerperator(strRoute = matched.route);
				} else {
					strRoute = matched.route.join('.');
				}
				matched.queryParams = matched.queryParams || {};
				matched.dynamicParams = matched.dynamicParams || [];
				var sameRoute = !!trans,
				    dynamicPos = matched.dynamicParams.length != matched.route.length,
				    dynamicParamPos = 0,
				    linkTo = this.tagName == LINKTOStr,
				    routeObj = config.routes,
				    url = templateUrl = '',
				    defQPTemp = {};
				matched.route.forEach(function (route, index) {
					if (sameRoute && trans.matched.route[index] != route) {
						sameRoute = false;
					}
					routeObj = _getObj(route, routeObj);
					if (!routeObj && !routeObj.__lp && routeObj.__lp.path) {
						consoleError(422, matched.route, index);
						return false;
					}
					var def = routeObj.__lp.def;
					if (!def && !linkTo) {
						consoleError(422, matched.route, index);
					}
					var path = routeObj.__lp.path,
					    defaultQP;
					if (!def || !def.__lp) {
						if (defaultQP = routeObj.__lp.defQP) {
							for (var key in defaultQP) {
								if (matched.queryParams && !matched.queryParams.hasOwnProperty(key)) {
									matched.queryParams[key] = defaultQP[key];
								}
							}
						}
					} else if (def.queryParams) {
						defaultQP = routeObj.__lp.defQP;
						var qpdef = def.__lp.qpdef;
						for (var key in qpdef) {
							if (!matched.queryParams.hasOwnProperty(key)) {
								if (sameRoute && qpdef[key].sticky) {
									matched.queryParams[key] = def.__lp.queryParams[key];
								} else if (defaultQP && defaultQP.hasOwnProperty(key)) {
									defQPTemp[key] = matched.queryParams[key] = defaultQP[key];
								}
							}
							if (!linkTo && qpdef[key].refreshModel) {
								matched.refreshModel = true;
							}
						}
					}
					if (routeObj.__lp.dkey) {
						var dynamicPathSplit = _splitPath(path),
						    dynamicPathSplitTemp = _splitPath(path),
						    pos = dynamicPos ? dynamicParamPos : index;
						if (!matched.dynamicParams || !matched.dynamicParams[pos]) {
							consoleError(499, route, linkTo ? this : undefined);
							return false;
						} else {
							dynamicPathSplit[routeObj.__lp.dIndex] = encodeURI(matched.dynamicParams[pos]);
							dynamicPathSplitTemp[routeObj.__lp.dIndex] = _delimit('<<dp>>');
							templateUrl += _delimit(dynamicPathSplitTemp.join('/'));
							url += _delimit(dynamicPathSplit.join('/'));
							dynamicParamPos++;
						}
					} else {
						templateUrl += _delimit(path);
						url += _delimit(path);
					}
				}.bind(this));
				if (!config.stickyRoutes[strRoute]) {
					config.urlCache[strRoute] = { url: validateURL(templateUrl), defQP: defQPTemp };
				}
				return appendQueryParamsAndFrag(url, matched);
			}
		}

		function appendQueryParamsAndFrag(url, matched) {
			url = url[url.length - 1] == '/' && url.length != 1 ? url.slice(0, -1) : url;
			if (matched.queryParams) {
				var ques = true;
				for (var key in matched.queryParams) {
					if (matched.queryParams[key] != undefined) {
						if (ques) {
							url += '?';
							ques = false;
						} else {
							url += '&';
						}
						url += key + '=' + encodeURIComponent(matched.queryParams[key]);
					}
				}
			}
			if (config.history && matched.fragment) {
				url = url + "#" + matched.fragment;
			}
			return validateURL(url);
		}

		function historyRegistration() {
			LR.history = new History();
			function History() {
				return this;
			}

			Object.defineProperty(History.prototype, 'state', {
				get: function get() {
					return getData();
				},
				set: function set(data) {
					if (allowHistoryChange) {
						allowHistoryChange = false;
					} else {
						Lyte.warn('setting on data will not be pushed to history. If needed, use `LR.history.replaceState`.');
					}
					return data;
				}
			});

			History.prototype.replaceState = function () {
				stateChange.apply(Array.from(arguments).push(true));
			};

			History.prototype.pushState = function () {
				stateChange.apply(Array.from(arguments));
			};

			function stateChange(data, title, url, replace) {
				if (!replace) {
					getMeta().index++;
				}
				addToHistory({
					state: {
						meta: getMeta(),
						data: data
					},
					title: title,
					url: url
				});
			}
		}

		var invokeRunLoop;
		function dispatch(path, processed) {
			t(RouteTransitionStr);
			processed = processed || (!initialLoad && getMeta() && getMeta().matched && getMeta().url == getLocation() ? setParamsInDef(getMeta().matched) : traverse(path));
			if (processed && processed.matched.route.length) {
				clearTimeout(invokeRunLoop);
				processed.prevTrans = processed.prevTrans || Lyte.Router.__lp.prevTrans;
				invoke(path, processed);
				invokeRunLoop = setTimeout(function () {
					if (trans && trans.state == 102 && newTrans && LR.checkIfSameRoute(newTrans.info, trans.info) && !trans.aborted && JSON.stringify(trans._data) == JSON.stringify(newTrans._trans.data)) {
						if (trans.iPause == true) {
							trans.resume();
						}
						return;
					} else if (trans && trans.state == 102) {
						trans.abort({ state: 409 });
					}
					trans = newTrans;
					trans._data = trans._trans.data ? Lyte.deepCopyObject(trans._trans.data) : undefined;
					processed.previous = true;
					processed.transComp = processed.transComp || getTransitionDiffernce(processed.prevTrans, processed.matched, processed.R);
					trans.runLoop = constructRunLoop(processedDispatch = processed);
					if (newTransInfo && trans._trans.data) {
						newTransInfo.data = trans._trans.data;
					}
					trans.run();
				}, 0);
			}
		}

		function getTransitionDiffernce(prevTrans, matched, R) {
			var like = true,
			    similar = true,
			    rendered = [],
			    common = [],
			    unRendered = [],
			    templateToRemove,
			    r;

			if (prevTrans) {
				var prevMatched = prevTrans.matched;
				matched.route.forEach(function (route, index) {
					if (similar && route == prevMatched.route[index]) {
						common.push(route);
						r = R ? R[index] : LR.__lp.getDefinition(route.slice(0, index));
						if (like && compareRoute(r, index, prevMatched, matched)) {
							if (prevTrans.routes[index].__lp.rendered) {
								rendered.push(route);
							} else {
								like = false;
								unRendered.push(route);
							}
						} else {
							like = false;
							unRendered.push(route);
						}
					} else {
						similar = false;
						if (templateToRemove == undefined && prevTrans.routes[index] && prevTrans.routes[index].__lp.rendered) {
							templateToRemove = index;
						}
						unRendered.push(route);
					}
				});
				if (prevMatched.route.length > matched.route.length) {
					var index = matched.route.length;
					if (templateToRemove == undefined && prevTrans.routes[index].__lp.rendered) {
						templateToRemove = index;
					}
				}
			} else {
				unRendered = unRendered.concat(matched.route);
			}
			return {
				rendered: rendered,
				unRendered: unRendered,
				common: common,
				templateToRemove: templateToRemove
			};
		}

		function compareRoute(r, index, prevMatched, matched) {
			var same = true,
			    routeObj = _getObj(r.__lp.objPath, config.routes);
			if (!r.queryParams && !routeObj.__lp.dkey) {
				return true;
			}
			if (routeObj.__lp.dkey && prevMatched.dynamicParams[index] != matched.dynamicParams[index]) {
				return false;
			} else if (r.queryParams && matched.refreshModel) {
				r.queryParams.every(function (key) {
					if (same && r.__lp.qpdef[key].refreshModel && (matched.queryParams || prevMatched.queryParams) && matched.queryParams[key] != prevMatched.queryParams[key]) {
						return same = false;
					} else {
						return true;
					}
				});
			}
			return same;
		}

		var basicHooks = [beforeModelStr, modelStr, afterModelStr, redirectStr, renderTemplateStr, afterRenderStr];
		function constructRunLoop(processed) {
			t(constructRunLoopStr);
			var transComp = processed.transComp,
			    runLoop = [],
			    forceFetch = {},
			    req = [],
			    b4Exit = [],
			    willTransit = [],
			    didTransit = [];

			if (processed.previous) {
				var b4RouteTrans = [{ hook: beforeRouteTransitionStr }];
				if (prevTrans) {
					for (var i = prevTrans.matched.route.length - 1, r; r = prevTrans.matched.route[i]; i--) {
						var r1 = trans.matched.route[i];
						if (!r1 || r != r1) {
							b4Exit.push({ hook: beforeExitStr, index: i });
						}
						willTransit.push({ hook: willTransitionStr, index: i });
					}
					t(constructRunLoopStr);
					return { previous: willTransit.concat(b4RouteTrans).concat(b4Exit), current: b4Exit };
				}
				t(constructRunLoopStr);
				return { previous: b4RouteTrans };
			}
			if (transComp.rendered && transComp.rendered.length) {
				transComp.rendered.forEach(function (hook, index) {
					trans.routes[index].__lp.rendered = true;
					runLoop.push({ hook: redirectStr, index: index });
					didTransit.push({ hook: didTransitionStr, index: trans.matched.route.length - index - 1 });
				});
			}
			if (transComp.unRendered && transComp.unRendered.length) {
				transComp.unRendered.forEach(function (hook, index) {
					index = transComp.rendered.length + index;
					if (!transComp.redirected || transComp.redirected && transComp.redirected.index != index) {
						req = req.concat([{ hook: getDependenciesStr, index: index }, { hook: getResourcesStr, index: index }]);
					}
					var routeInstance = trans.routes[index];
					if (_typeof(routeInstance.forceFetch) == functionStr ? callHookWithoutPromise.call(this, routeInstance.forceFetch, routeInstance, "forceFetch", params(index)) : routeInstance.forceFetch) {
						forceFetch[index] = [{ hook: beforeModelStr, index: index }, { hook: modelStr, index: index }, { hook: afterModelStr, index: index }];
						newTrans.routes[index].__lp.fetchStatus = pendingStr;
						[redirectStr, renderTemplateStr, afterRenderStr].forEach(function (h) {
							runLoop.push({ hook: h, index: index });
						});
					} else {
						basicHooks.forEach(function (h) {
							if (transComp.redirected && transComp.redirected.index == index && h != redirectStr) {
								if ([beforeModelStr, modelStr, afterModelStr].indexOf(h) == -1) {
									runLoop.push({ hook: h, index: index });
								}
							} else {
								runLoop.push({ hook: h, index: index });
							}
						});
					}
					didTransit.push({ hook: didTransitionStr, index: trans.matched.route.length - index - 1 });
				});
			}

			runLoop = {
				previous: [],
				current: [{ hook: onBeforeLoadStr }].concat(req.concat(runLoop).concat(didTransit)),
				forceFetch: forceFetch
			};
			runLoop.templateToRemove = prevTrans && prevTrans.runLoop.templateToRemove ? prevTrans.runLoop.templateToRemove : [];
			if (transComp.templateToRemove != undefined) {
				runLoop.templateToRemove.push({ index: transComp.templateToRemove, routes: visibleTrans.routes });
			}
			t(constructRunLoopStr);
			return runLoop;
		}

		function invoke(path, processed) {
			newTrans = new Transition(processed);
			newTrans.url = path;
			newTrans.runLoop = {};
			newTrans._trans = limitTransition(newTrans);
			newTrans.routes = initRoute(processed);
			if (historyObj) {
				newTransInfo = historyObj;
				newTrans._trans.data = getData() || {};
				historyObj.replace = true;
				historyObj = undefined;
			} else if (newTrans._trans.data) {
				LR.history.replaceState(newTrans._trans.data);
			}
		}

		function _getObj(arr, obj) {
			if (!obj) {
				return;
			} else if (!arr) {
				return obj;
			} else if (!Array.isArray(arr) && typeof arr == 'string') {
				arr = dotSerperator(arr);
			}
			arr.every(function (key) {
				if (obj && obj[key]) {
					obj = obj[key];
					return true;
				}
				return obj = false;
			});
			return obj;
		}

		function abortRunningPromises(trans) {
			if (trans.runningProm) {
				trans.runningProm.reject(abortedStr);
			}
			if (trans.fRunningProm) {
				trans.fRunningProm.reject(abortedStr);
			}
		}

		function Transition(processed) {
			this.matched = processed.matched;
			this.target = processed.matched.target;
			this.fns = [];
			this.pending = {};
			this.info = {
				route: processed.matched.target,
				queryParams: processed.matched.queryParams,
				dynamicParams: processed.matched.dynamicParams.filter(_arrayClean)
			};
			if (processed.matched.fragment) {
				this.info.fragment = processed.matched.fragment;
			}
			this.R = processed.R;
			this.running = this.aborted = this.paused = false;
			this.abort = function (obj) {
				if (!this.aborted) {
					abortRunningPromises(this);
					this.aborted = true;
					if (!obj) {
						obj = { state: 308 };
					}
					if (this.running) {
						l(TransitionAbortedStr, routeStr);
					}
					if (!obj.iAbort) {
						delete this.runLoop.templateToRemove;
						// if(prevTrans && prevTrans.url != getLocation() && this.state == 201) {
						// if(prevTrans && visibleTrans && prevTrans.url != getLocation() && trans != visibleTrans) {
						// fromHistoryGo = true;
						// if(getMeta() && getMeta().index != undefined && getMeta().index+1 == history.length) {
						// 	history.go(1);
						// } else {
						// 	history.go(-1);
						// }
						// }  
					}
					transitionCompleted(obj);
				}
			}.bind(this);
			this.pause = function (obj) {
				l(TransitionPausedStr, routeStr);
				if (obj && obj.iPause) {
					this.iPause = true;
				} else {
					this.iPause = false;
					this.state = this._trans.state = 307;
				}
				this.paused = trans.prom || true;
				this.resume = this._trans.resume = function (t) {
					t = t || this;
					if (t.prom != t.eProm) {
						if (!t.pendingResume) {
							t.pendingResume = t.resume;
							delete t._trans.resume;
							delete t.resume;
						}
						return;
					}
					delete t._trans.resume;
					delete t.resume;
					l(TransitionResumedStr, routeStr);
					if (t.paused) {
						var state,
						    prom = t.prom;
						if (t.paused != true) {
							state = t.paused.state;
						}
						if (t.runLoop[state]) {
							if (state == "forceFetch") {
								var newProm = t.runLoop.forceFetch[prom.index];
								if (newProm[0] && prom.hook == newProm[0].hook) {
									newProm.splice(0, 1);
								}
							} else if (t.runLoop[state][0] && t.runLoop[state][0].hook == t.paused.hook && t.runLoop[state][0].index == t.paused.index) {
								removeHook(t.runLoop[state], t.paused.hook, t.paused.index);
							}
						}
						t.paused = false;
						t.state = t._trans.state = 102;
						if (this.forceFetchRunning) {
							if (t.runLoop.forceFetch[prom.index][0]) {
								t.run(t.runLoop.forceFetch[prom.index][0]);
							} else {
								t.routes[prom.index].__lp.fetchStatus = completedStr;
								if (t.pending.forceFetch != undefined && t.pending.forceFetch == prom.index) {
									delete t.pending.forceFetch;
									t.run();
								}
							}
						} else {
							if (state && state == "forceFetch" && !t.runLoop.forceFetch[prom.index][0]) {
								t.routes[prom.index].__lp.fetchStatus = completedStr;
							}
							t.run();
						}
					}
				}.bind(this);
				return this._trans;
			}.bind(this);
		}

		function getRequirements(object) {
			/* download files that are returned from getResources and getDependencies */
			var every = function every() {};
			every.internal = {};
			var reqType = object.reqType,
			    r = object.r,
			    index = object.index,
			    hook = every.internal.hook = trans.prom.hook,
			    errorType = reqType == dependenciesStr ? "errorDependencies" : "errorResources",
			    self = this;
			every.internal.route = r.__lp.objPath;
			Lyte.injectResources(r.__lp[reqType], every, function (successFiles, errorFiles) {
				/* completed callback */
				r.__lp[reqType + 'Loaded'] = true;
				if (!errorFiles.length) {
					var pending;
					if (trans.pending && (pending = trans.pending[reqType]) != undefined && pending == index) {
						delete trans.pending[reqType];
						if ((pending = trans.pending.forceFetch) != undefined && pending == index && trans.forceFetchRunning) {
							delete trans.pending.forceFetch;
							nestedForcedPromises.call(trans, trans.runLoop.forceFetch, trans.fRunningProm.resolve, trans.runLoop.forceFetch[index][0]);
						}
						nestedPromises.call(trans, trans.runLoop, "current", trans.runningProm.resolve);
					}
				} else {
					if (!self.aborted) {
						if (!self.paused) {
							self.pause({ iPause: true });
						}
						run[onErrorStr].call(self, hook, index, r.__lp[errorType] = errorFiles, 424);
					}
				}
			});
		}

		var requirements = {
			get: function get(def, type) {
				return def.__lp[type + 'Loaded'] != false;
			}
		};

		function templateDelete(arr) {
			/* clears outlet, from parent to child */
			arr.forEach(function (obj) {
				for (var inst, i = obj.routes.length - 1; i >= obj.index; i--) {
					inst = obj.routes[i];
					delete inst.__lp.rendered;
					if (inst.outlet) {
						Lyte.triggerEvent(beforeTemplateDestroyStr, { outlet: inst.outletName, route: inst });
						inst.outlet.innerHTML = "";
						if (trans.info.route != inst.transition.info.route) {
							callDidDestroy.call(this, inst, i, obj);
						}
					}
				}
			});
		}

		function callDidDestroy(inst, index, obj) {
			l(didDestroyStr + " of " + inst.routeName, routeStr, fontColor);
			callHookWithoutPromise.call(this, inst.didDestroy, inst, didDestroyStr, inst.currentModel, params(index, obj));
		}

		var stoppableHooks = [getDependenciesStr, getResourcesStr, beforeModelStr, modelStr, afterModelStr];
		// error in these hooks should pause transition and call onerror action
		function errorStoppableHook(hook) {
			return _presence(stoppableHooks, hook);
		}

		function callHookWithPromise(callback, instance) {
			/* executes route hooks which will returns promise */
			if (callback) {
				var args = arguments,
				    resp,
				    t = trans,
				    prom = trans.prom,
				    hook = prom.hook,
				    stopTrans = errorStoppableHook(hook),
				    self = this;
				return Promise.resolve(new Promise(function (resolve, reject) {
					try {
						var result = callback.apply(instance, Array.from(args).slice(2));
						if (stopTrans && result) {
							result = Lyte.resolvePromises(result);
						}
						resp = Promise.resolve(result);
					} catch (err) {
						processError.call(self, stopTrans, err, instance, { promise: { resolve: resolve, reject: reject } });
						return;
					}
					resp.then(function (data) {
						resolve(data);
					}, function (err) {
						t.prom = prom;
						if (hook == modelStr) {
							instance.currentModel = err;
						}
						processError.call(self, stopTrans, err, instance);
					});
				}));
			} else {
				return Promise.resolve();
			}
		}

		function callHookWithoutPromise(callback, instance, hook) {
			/* executes route hooks which wont return promise  */
			if (callback) {
				var stopTrans = errorStoppableHook(hook);
				try {
					return callback.apply(instance, Array.from(arguments).slice(3));
				} catch (err) {
					processError.call(this, stopTrans, err, instance);
					return;
				}
			}
		}

		function callAction(hook, index, args) {
			/* executes route's actions  */
			var action,
			    routeInstance = this.routes[index];
			if (routeInstance.actions && (action = routeInstance.actions[hook])) {
				try {
					if (action.apply(routeInstance, args) == false) {
						return false;
					}
				} catch (e) {
					consoleErrorFromCallback(e, hook, routeInstance.routeName);
					return false;
				}
			}
		}

		function consoleErrorFromCallback(err, hook, routeName, state) {
			if (typeof err == "string" || (typeof err === 'undefined' ? 'undefined' : _typeof(err)) == "object" && err.stack && !err.$) {
				if (!err.stack) {
					err = Error(err);
				}
				err.$ = true;
				var internalErr = getError(state || 420, hook, routeName);
				err.stack = err.stack.replace(err.message, err.message = err.message + "\n\t" + internalErr);
				consoleError(err);
			} else {
				consoleError(state, hook, routeName, err);
			}
		}

		function processError(stopTrans, err, instance, options) {
			/* handles error in hooks */
			if (trans.prom) {
				options = options || {};
				var hook = trans.prom.hook,
				    index = trans.prom.index;
				if (!stopTrans) {
					consoleErrorFromCallback(err, hook, instance.routeName);
					if (_presence([willTransitionStr, didTransitionStr, beforeExitStr], hook)) {
						if (options.promise) {
							options.promise.resolve();
						}
					} else {
						trans.abort({ state: 4, iAbort: true });
					}
				} else {
					trans.pause();
					run[onErrorStr].call(this, hook, index, err, 420);
				}
			}
		}

		function runLoopPromise(fn, fnName, loop, success, failure) {
			success = success || emptyFn;
			failure = failure || function (error) {
				if (error != abortedStr) {
					consoleError(error);
				}
			};
			new Promise(function (resolve, reject) {
				if (fnName == "nestedForcedPromises") {
					this.fRunningProm = { resolve: resolve, reject: reject };
					fn.call(this, this.runLoop.forceFetch, resolve);
				} else {
					this.runningProm = { resolve: resolve, reject: reject };
					fn.call(this, this.runLoop, loop, resolve);
				}
			}.bind(this)).then(success, failure);
		}

		Transition.prototype.run = function (pausedForcedProm) {
			if (pausedForcedProm) {
				nestedForcedPromises.call(this, this.runLoop.forceFetch, this.fRunningProm.resolve, pausedForcedProm);
				return;
			}
			processRunLoop.call(this);
			d.title = this.title = this.routes[this.routes.length - 1].title || d.title;
		};

		function processRunLoop() {
			runLoopPromise.call(this, nestedPromises, "nestedPromises", 'previous', function () {
				if (processedDispatch && !trans.running && !trans.aborted) {
					trans.state = trans._trans.state = 102;
					if (newTransInfo) {
						newTransInfo.state.data = trans._trans.data || newTransInfo.state.data;
						addToHistory(newTransInfo);
					}
					LR.__lp.trans = trans;
					processedDispatch.previous = false;
					trans.runLoop = constructRunLoop(processedDispatch);
					processedDispatch = newTransInfo = undefined;
					trans.running = true;
				}
				runLoopPromise.call(this, nestedPromises, "nestedPromises", 'current');
			}.bind(this));
		}

		function setPendingResume(promise) {
			this.eProm = promise;
			if (this.pendingResume) {
				var resume = this.pendingResume;
				delete this.pendingResume;
				resume();
			}
		}

		function nestedForcedPromises(forcedLoop, resolve, promise) {
			if (validateTransition(this) && forcedLoop) {
				if (!promise) {
					for (var key in forcedLoop) {
						var routeLoop = forcedLoop[key],
						    p = routeLoop[0];
						if (p) {
							if (requirements.get(this.R[p.index], dependenciesStr)) {
								if (!routeLoop[0].running) {
									nestedForcedPromises.call(this, forcedLoop, resolve, routeLoop[0]);
								}
							} else {
								this.pending[dependenciesStr] = p.index;
							}
						}
					}
					return;
				}
				var r = this.R[promise.index],
				    routeInstance = this.routes[promise.index];
				promise.state = "forceFetch";
				trans.prom = promise;
				if (promise.hook == beforeModelStr && !requirements.get(routeInstance, dependenciesStr)) {
					this.pending[dependenciesStr] = promise.index;
					return;
				}
				logCallbacks(promise);
				forcedLoop[promise.index][0].running = true;
				forcedLoop[promise.index].splice(0, 1);
				run[promise.hook].call(this, promise.hook, promise.index).then(function (data) {
					setPendingResume.call(trans, trans.prom);
					if (promise.hook == afterModelStr) {
						routeInstance.__lp.fetchStatus = completedStr;
						if (this.pending.forceFetch != undefined && this.pending.forceFetch == promise.index) {
							delete this.pending.forceFetch;
							nestedPromises.call(this, this.runLoop, "current", this.runningProm.resolve);
						}
					} else if (promise.hook == modelStr) {
						routeInstance.currentModel = data;
						if (forcedLoop[promise.index][0] && forcedLoop[promise.index][0].hook == afterModelStr) {
							nestedForcedPromises.call(this, forcedLoop, resolve, forcedLoop[promise.index][0]);
						}
					} else {
						if (forcedLoop[promise.index][0] && forcedLoop[promise.index][0].hook == modelStr) {
							nestedForcedPromises.call(this, forcedLoop, resolve, forcedLoop[promise.index][0]);
						}
					}
				}.bind(this));
			} else {
				this.forceFetchRunning = false;
			}
		}

		function logCallbacks(promise) {
			if (Lyte.debug) {
				var hook = promise.hook,
				    index = promise.index;
				if ([beforeRouteTransitionStr, onBeforeLoadStr].indexOf(promise.hook) != -1) {
					l(hook, routeStr, fontColor);
					return;
				}
				var route = promise.state == "previous" ? prevTrans.R[index] : trans.R[index];
				l(hook + ' of route ' + route.routeName, routeStr, fontColor);
			}
		}

		function nestedPromises(loop, state, resolve) {
			if (validateTransition(this)) {
				var runLoop = loop[state];
				if (runLoop && runLoop.length) {
					var promise = runLoop[0],
					    r = this.R[promise.index],
					    routeInstance = this.routes[promise.index];
					if (promise.hook == beforeModelStr && !requirements.get(r, dependenciesStr)) {
						this.pending[dependenciesStr] = promise.index;
						return;
					} else if (promise.hook == renderTemplateStr && !requirements.get(r, resourcesStr)) {
						this.pending[resourcesStr] = promise.index;
						return;
					} else if (promise.hook == redirectStr && r.forceFetch && routeInstance.__lp.fetchStatus == pendingStr) {
						if (!this.forceFetchRunning) {
							this.forceFetchRunning = true;
							runLoopPromise.call(this, nestedForcedPromises, "nestedForcedPromises");
						}
						this.pending.forceFetch = promise.index;
						return;
					} else {
						promise.state = state;
						trans.prom = promise;
						logCallbacks(promise);
						t(promise.hook + promise.index);
						run[promise.hook].call(this, promise.hook, promise.index).then(function (data) {
							setPendingResume.call(trans, trans.prom);
							t(promise.hook + promise.index);
							if (promise.hook == modelStr) {
								routeInstance.currentModel = data;
							}
							if (this.runningProm.resolve == resolve) {
								removeHook(loop[state], promise.hook, promise.index);
								nestedPromises.call(this, loop, state, resolve);
							}
						}.bind(this));
					}
				} else if (resolve) {
					resolve();
				}
			} else if (this.paused && this.runningProm) {
				this.runningProm.reject(abortedStr);
			}
		}

		function removeHook(loop, hook, index) {
			for (var i = 0, obj; obj = loop[i]; i++) {
				if (obj.hook == hook) {
					if (index != undefined) {
						if (index == obj.index) {
							loop.splice(i, 1);
							break;
						}
					} else {
						loop.splice(i, 1);
						i--;
					}
				}
			}
		}

		function frameQueryParams(url) {
			if (url && _presence(url, "=")) {
				var qp = {},
				    split,
				    params = _presence(url, "?") ? url.split("?")[1] : url;
				params = _presence(params, "&") ? params.split(/&/g) : [params];
				params.forEach(function (param) {
					qp[(split = param.split('='))[0]] = split[1] ? decodeURIComponent(split[1]) : split[1];
				});
				return qp;
			}
		}

		function frameDynamicParams(url, matched) {
			var routesObj = config.routes,
			    dynamicParam,
			    fdp,
			    framedDP = [],
			    urlSplit = _splitPath(url.split('?')[0]);
			matched.route.forEach(function (r, i, arr) {
				routesObj = _getObj([r], routesObj);
				var routeObj = routesObj.__lp;
				if (routeObj.wildcard) {
					if (routeObj.sufix.length) {
						var dp = urlSplit.slice(0, urlSplit.indexOf(routeObj.sufix[0]));
						fdp = decodeURI(dp.join('/'));
						_pop(dp.concat(routeObj.sufix), urlSplit);
					} else {
						fdp = decodeURI(urlSplit.join('/'));
					}
				} else if (routeObj.dkey) {
					dynamicParam = urlSplit[routeObj.dIndex];
					_pop(_splitPath(routeObj.path), urlSplit);
					fdp = decodeURI(dynamicParam);
				} else {
					_pop(_splitPath(routeObj.path), urlSplit);
					fdp = undefined;
				}
				framedDP.push(fdp);
			});
			return framedDP;
		}

		function _pop(path, urlSplit) {
			path.forEach(function () {
				urlSplit.shift();
			});
		}

		function _presence(str, char) {
			return str.indexOf(char) != -1;
		}

		function transitionCompleted(obj) {
			/* called after a atransition is completed or aborted*/
			if (trans.running) {
				if (trans == newTrans) {
					newTrans = undefined;
				}
				trans.fns.forEach(function (callback) {
					clearTimeout(callback);
				});
				trans.pendingResume = undefined;
				trans.running = false;
				trans.state = trans._trans.state = obj.state;
				if (initialLoad || trans.state == 200) {
					LR.__lp.prevTrans = prevTrans = trans;
					t(RouteTransitionStr);
					l(TransitionComletedStr, routeStr);
					if (config.history && trans.info.fragment) {
						var elem;
						if ((elem = d.getElementById(trans._trans.info.fragment)) && elem.scrollIntoView && LR.beforeScroll(trans._trans) != false) {
							elem.scrollIntoView();
						}
					}
					run[afterRouteTransitionStr](trans._trans);
				} else if (obj.iAbort || visibleTrans == trans) {
					LR.__lp.prevTrans = prevTrans = trans;
					if (trans.state && trans.state != 201) {
						run[afterRouteTransitionStr](trans._trans);
					}
				} else {
					if (trans.state && trans.state != 201) {
						run[afterRouteTransitionStr](trans._trans);
					}
					LR.__lp.trans = trans = prevTrans;
				}
				if (initialLoad) {
					initialLoad = false;
				}
			} else if (prevTrans) {
				LR.__lp.trans = trans = prevTrans;
			}
		}

		function _delimit(seg) {
			return seg[0] == "/" ? seg : "/" + seg;
		}

		function _splitPath(path) {
			return path.match(/[^/?]+/g) || [];
		}

		function validateURL(url) {
			url = url.replace(/\/\//g, '/');
			url = url.replace(/\/\?/g, '?');
			return url;
		}

		function getError() {
			var args = arguments,
			    error;
			switch (args[0]) {
				case 400:
					error = "url '" + args[1] + "' is not defined in router.";
					break;
				case 422:
					error = "There is no route definition for the route " + args[1].splice(0, args[2] + 1).join('.') + ".";
					break;
				case 424:
					error = "File not loaded in " + args[1] + " of route " + args[2] + ".";
					break;
				case 498:
					error = "Invalid argument " + args[1] + (args[2] ? " provided in " + args[2] : ".");
					break;
				case 499:
					error = args[1] ? "Dynamic params for the route " + args[1] + " is not provided" + (args[2] && args[2].outerHTML ? " in " + args[2].outerHTML : ".") : "Transition tried without arguments.";
					break;
				case 420:
					error = "Error on " + args[1] + " of route " + args[2] + ".";
					break;
				case 428:
					error = "There is no outlet named " + args[1] + ".";
					break;
				case 203:
					error = "Data provided for component is not valid.";
					break;
			}
			return 'LR ' + args[0] + ': ' + error;
		}

		function consoleError() {
			Lyte.error(arguments[0].stack ? arguments[0] : getError.apply(this, arguments), arguments[3]);
		}

		function traverse(path, get) {
			if (!path) {
				consoleError(400, '');
				return;
			}
			var selectedPaths = [],
			    fragment;
			if (config.history) {
				var fragSplit = path.split('#');
				if (fragment = fragSplit[1]) {
					path = fragSplit[0];
				}
			}
			var pathSplit = path.split('?');
			path = decodeURI(pathSplit[0]);
			if (path == '/') {
				if (_getObj(['/'], config.routeHash)) {
					selectedPaths.push([path]);
				} else {
					consoleError(400, path);
					return;
				}
			} else {
				var findPossibleMatch = function findPossibleMatch(mapObj) {
					for (var mapPath in mapObj) {
						if (!exactMatch) {
							var pathObj = mapObj[mapPath],
							    innerLevel;
							if (mapPath != "__lp") {
								var mapPathSplit = _splitPath(mapPath);
								if (mapPathSplit) {
									if ((innerLevel = checkArrayMatch(mapPathSplit, pathSplitArr, pathLevel, pathObj, matchedPath)) !== false) {
										pathArrLevel.push(innerLevel);
										pathLevel = pathArrLevel[pathArrLevel.length - 1];
										if (pathSplitArr.length == pathLevel) {
											var path = Array.from(matchedPath.concat(mapPath));
											if (pathObj["/"]) {
												path = path.concat('/');
											}
											selectedPaths.push(path);
											if (pathObj.__lp.wildcard || pathObj.__lp.dkey) {
												pathArrLevel.pop();
												pathLevel = pathArrLevel[pathArrLevel.length - 1];
											} else {
												if (!/[:*]/.test(path.join(''))) {
													exactMatch = path;
												}
												return;
											}
										} else {
											var innerRoutes = Object.keys(pathObj);
											matchedPath.push(mapPath);
											if (pathSplitArr[pathLevel]) {
												if (pathObj.__lp.wildcard && !pathObj.__lp.sufix.length && innerRoutes.length == 1) {
													var wildcard = Array.from(matchedPath);
													if (pathObj["/"]) {
														wildcard = wildcard.concat('/');
													}
													selectedPaths.push(wildcard);
												} else if (innerRoutes.length > 1) {
													findPossibleMatch(pathObj);
												}
											}
											matchedPath.pop();
											pathArrLevel.pop();
											pathLevel = pathArrLevel[pathArrLevel.length - 1];
										}
									}
								}
							}
						}
					}
				};

				var params = pathSplit[1],
				    pathSplitArr = _splitPath(path);
				var pathLevel = 0,
				    pathArrLevel = [0],
				    exactMatch,
				    matchedPath = [];
				matchedPath.dynamicParams = [];
				findPossibleMatch(config.routeHash);
			}
			if (exactMatch) {
				return pathProcessor(get, exactMatch, path, params, fragment);
			} else if (selectedPaths.length == 1) {
				return pathProcessor(get, selectedPaths[0], path, params, fragment);
			} else if (selectedPaths.length) {
				var getBestMatch = function getBestMatch(staticMatches, selectedPaths, position) {
					position = position || 0;
					var traversedStaticMatch = traversedStaticMatch || traverseArray(staticMatches),
					    maxStaticSeg = Math.max.apply(Math, _toConsumableArray(traversedStaticMatch[position])),
					    duplicatePos,
					    duplicatePosCheck = function duplicatePosCheck(index) {
						newSelectedPaths.push(selectedPaths[index]);
						newStaticMatches.push(staticMatches[index]);
					},
					    filterDuplicates = function filterDuplicates(arr, index) {
						if (arr[position] != undefined) {
							newSelectedPathsFiltered.push(newSelectedPaths[index]);
							newStaticMatchesFiltered.push(newStaticMatches[index]);
						}
					};
					while (duplicatePos = checkForArrayDuplicates(traversedStaticMatch[position], maxStaticSeg, selectedPaths, staticMatches)) {
						position = position + 1;
						var newSelectedPaths = [],
						    newStaticMatches = [];
						duplicatePos.forEach(duplicatePosCheck);
						var newSelectedPathsFiltered = [],
						    newStaticMatchesFiltered = [];
						newStaticMatches.forEach(filterDuplicates);
						if (!newSelectedPathsFiltered.length) {
							return newSelectedPaths[0];
						} else if (newSelectedPathsFiltered.length == 1) {
							return newSelectedPathsFiltered[0];
						}
						return getBestMatch(newStaticMatchesFiltered, newSelectedPathsFiltered, position);
					}
					return selectedPaths[traversedStaticMatch[position].indexOf(maxStaticSeg)];
				};

				var getStaticMatches = function getStaticMatches(selectedPaths) {
					var staticSegmentsInMatch = [];
					selectedPaths.forEach(function (arr) {
						arr = Array.from(arr);
						var staticPath = 0,
						    result = [];
						if (arr[0] == "/") {
							arr.shift();
						}
						if (arr[arr.length - 1] == "/") {
							arr.pop();
						}
						var counter = -1;
						arr.every(function (seg, i) {
							var noWildcard = true;
							_splitPath(seg).every(function (innerSeg, j) {
								counter++;
								if (innerSeg == pathSplitArr[counter]) {
									staticPath++;
									if (arr.length == i + 1) {
										result.push(staticPath);
									}
									return true;
								} else if (innerSeg.indexOf(':') != -1) {
									result.push(staticPath);
									staticPath = 0;
									return true;
								} else {
									if (innerSeg.indexOf('*') != -1) {
										noWildcard = false;
									}
									result.push(staticPath);
									return false;
								}
							});
							return noWildcard;
						});
						staticSegmentsInMatch.push(result);
					});
					return staticSegmentsInMatch;
				};

				return pathProcessor(get, getBestMatch(getStaticMatches(selectedPaths), selectedPaths), path, params, fragment);
			} else {
				consoleError(400, path);
			}
		}

		function checkArrayMatch(arr1, arr2, l, pathObj, matchedPath) {
			if (!(pathObj.__lp.wildcard || pathObj.__lp.dkey)) {
				var prevObj;
				if (prevObj = _getObj(matchedPath, config.routeHash).__lp) {
					if (prevObj.wildcard) {
						var pathArr = arr2.slice(l);
						if (!(l += pathArr.indexOf(arr1[0]))) {
							return false;
						}
					}
				}
			}
			for (var i = 0, a1; a1 = arr1[i]; i++, l++) {
				if (a1 != arr2[l] && !dynamicRouteCheck(a1)) {
					if (wildcardRouteCheck(a1)) {
						if (pathObj.__lp.sufix.length) {
							l = arr2.indexOf(pathObj.__lp.sufix[0]) - 1;
						}
					} else if (arr1[l] == '/') {
						l--;
					} else {
						return false;
					}
				}
			}
			return l;
		}

		function checkForArrayDuplicates(arr, value, selectedPaths, staticMatches) {
			var pos = [];
			arr.forEach(function (elem, index) {
				if (elem == value) {
					pos.push(index);
				}
			});
			return pos.length == 1 ? false : pos;
		}

		function traverseArray(arr) {
			var res = [],
			    maxArrLen = 0;
			arr.forEach(function (a) {
				maxArrLen = a.length > maxArrLen ? a.length : maxArrLen;
			});
			for (var i = 0, a; a = arr[i]; i++) {
				for (var j = 0; j < maxArrLen; j++) {
					res[j] = res[j] || [];
					res[j][i] = a[j];
				}
			}
			return res;
		}

		function pathProcessor(get, selectedPath, path, params, fragment) {
			var newURL,
			    newMatched,
			    matched = {
				route: _getObj(selectedPath, config.routeHash).__lp.route,
				queryParams: params ? frameQueryParams(params) : {}
			};
			if (config.history) {
				matched.fragment = fragment;
			}
			matched.dynamicParams = frameDynamicParams(path, matched);
			if (get) {
				return matched;
			}
			var transInfo = setParamsInDef(normalizeMatchedObj(matched));
			if (transInfo != false) {
				if (!transInfo.matched.hasOwnProperty('refreshModel')) {
					constructURLFromRoute(transInfo.matched);
				}
				newMatched = Lyte.deepCopyObject(transInfo.matched);
				newURL = constructURLFromRoute(newMatched);
				if (!_compareObj(newMatched.queryParams, matched.queryParams)) {
					historyObj = addToHistory({ replace: true, data: window.history.state, url: newURL, fromHistory: true });
				}
			}
			return transInfo;
		}

		function setParamsInDef(matched) {
			var routesObj = config.routes,
			    R = [];
			try {
				matched.route.every(function (r, i) {
					routesObj = _getObj([r], routesObj);
					var def;
					if (!routesObj || !routesObj.__lp || !(def = routesObj.__lp.def)) {
						throw Error(getError(422, matched.route, i));
					}
					if (def.queryParams) {
						def.__lp.queryParams = {};
						def.queryParams.forEach(function (key) {
							def.__lp.queryParams[key] = matched.queryParams[key];
						});
					}
					def.__lp.dynamicParam = matched.dynamicParams[i];
					var linkTags = def.__lp.linkTags;
					if (linkTags.length) {
						linkTags.forEach(function (tag) {
							if (tag.firstChild.tagName === "A") {
								tag.firstChild.setAttribute("href", LR.getURL(tag.getMatchedObject()));
							}
						});
					}
					return R.push(def);
				});
			} catch (e) {
				consoleError(e);
				return false;
			}
			return {
				R: R,
				matched: matched
			};
		}

		function assignMixin(options, fns, dir, lazyload) {
			if (options && options.mixins) {
				if (!Array.isArray(options.mixins)) {
					options.mixins = [options.mixins];
				}
				options.mixins.forEach(function (mixin) {
					if (Lyte.registeredMixins[mixin]) {
						mixin = Lyte.registeredMixins[mixin];
						if (lazyload) {
							var prevTransRouteInstance = LR.getRouteInstance(dir, prevTrans),
							    transRouteInstance = LR.getRouteInstance(dir, trans);
							if (prevTransRouteInstance || transRouteInstance) {
								prevTransRouteInstance = prevTransRouteInstance || {};
								transRouteInstance = transRouteInstance || {};
								setMixinPropInDefandIns(mixin, fns, prevTransRouteInstance, transRouteInstance);
							} else {
								setMixinPropInDef(mixin, fns);
							}
						} else {
							setMixinPropInDef(mixin, fns);
						}
					} else if (!lazyload) {
						Lyte.$.requiredMixins(mixin, dir, "router");
					}
				});
			}
		}

		Lyte.$.requiredMixins.router = function (mixin, dir) {
			dir.forEach(function (d) {
				var fns = LR.__lp.getDefinition(d);
				if (mixin && fns) {
					assignMixin(fns.__lp.options, fns, d, true);
				}
			});
		};

		function setMixinPropInDef(mixin, fns) {
			for (var key in mixin) {
				if (key == "actions") {
					fns.actions = Object.assign(fns.actions || {}, mixin.actions);
				} else {
					fns[key] = mixin[key];
				}
			}
		}

		function setMixinPropInDefandIns(mixin, fns, prev, curr) {
			for (var key in mixin) {
				if (key == "actions") {
					if (!fns.actions) {
						curr.actions = prev.actions = fns.actions = {};
					}
					prev.actions = curr.actions = Object.assign(fns.actions, mixin.actions);
				} else {
					prev[key] = curr[key] = fns[key] = mixin[key];
				}
			}
		}

		this.registerRoute = function (dir, fns, options) {
			if (config.routes) {
				registerRoute.apply({}, arguments);
			} else {
				this.__lp.pendingReg.push(arguments);
			}
		};

		function registerRoute(dir, fns, options) {
			assignMixin(options, fns, dir);
			fns.__lp = {
				options: options,
				objPath: dir.replace(/\//g, '.'),
				linkTags: []
			};
			var sticky = config.queryParamOptions.sticky;
			if (fns.queryParams) {
				fns.__lp.qpdef = {};
				fns.queryParams.forEach(function (qp, i) {
					if (typeof qp == "string") {
						fns.__lp.qpdef[qp] = {
							sticky: sticky,
							refreshModel: true
						};
						if (config.stickyRoutes[dir] == undefined) {
							config.stickyRoutes[dir] = sticky;
						}
					} else if ((typeof qp === 'undefined' ? 'undefined' : _typeof(qp)) == "object") {
						for (var key in qp) {
							fns.__lp.qpdef[key] = {
								sticky: qp[key].hasOwnProperty('sticky') ? qp[key].sticky : sticky,
								refreshModel: qp[key].hasOwnProperty('refreshModel') ? qp[key].refreshModel : true
							};
							if (!config.stickyRoutes[dir] && fns.__lp.qpdef[key].sticky) {
								config.stickyRoutes[dir] = true;
							}
						}
						fns.queryParams[i] = key;
					}
				});
			}
			dir = dotSerperator(dir);
			fns.routeName = dir[dir.length - 1];
			setRouteDef(dir, fns);
		}

		var transPredefined = ['runLoop', 'running', 'paused', 'R', 'routes', abortedStr, 'prom', 'run', pendingStr, 'matched', 'fns'];

		function limitTransition(int) {
			var _trans = new transition(int);
			int.state = _trans.state = 201;
			return _trans;
		}

		function dummy() {
			/*
   Dont delete this function.
   This one is to avoid function to be merged during minification.
   */
			var _trans = new transition(int);
		}

		function transition(int) {
			for (var prop in int) {
				if (transPredefined.indexOf(prop) == -1) {
					if (prop == 'info') {
						this.info = Lyte.deepCopyObject(int[prop]);
					} else {
						this[prop] = int[prop];
					}
				}
			}
		}

		function dynamicRouteCheck(route) {
			return _presence(route, ":");
		}

		function wildcardRouteCheck(route) {
			return _presence(route, "*");
		}

		function _compareObj(obj1, obj2) {
			var obj1keys = Object.keys(obj1),
			    obj2keys = Object.keys(obj2);
			if (obj1keys.length != obj2keys.length) {
				return false;
			} else {
				for (var key in obj1) {
					if (obj1[key] != obj2[key]) {
						return false;
					}
				}
				return true;
			}
		}

		this.getRouteInstance = function (routeName, t) {
			var newTrans;
			if (LR && !LR.init && (newTrans = t || LR.__lp && LR.__lp.trans || trans) && newTrans.routes) {
				if (routeName == "*") {
					return newTrans.routes;
				} else {
					routeName = routeName || newTrans.target;
					var match;
					newTrans.routes.every(function (inst, index) {
						inst = newTrans.routes[newTrans.routes.length - 1 - index];
						if (inst.__lp.objPath == routeName) {
							match = inst;
							return false;
						}
						return true;
					});
					return match;
				}
			}
		};

		function normalizeTransitionParams(obj) {
			// To normalize argument for transition, returns matched obj from obj or native tranisitionTo argument.
			var params;
			if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == "object") {
				params = obj;
			} else {
				params = {
					queryParams: {},
					dynamicParams: []
				};
				Array.from(arguments).forEach(function (arg, index) {
					if (Array.isArray(arg)) {
						consoleError(498, JSON.stringify(arg));
						return;
					} else {
						if (index == 0) {
							params.route = arg;
						} else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) == "object") {
							params.queryParams = arg;
						} else {
							params.dynamicParams.push(arg);
						}
					}
				});
			}
			return params;
		}

		function normalizeMatchedObj(obj) {
			// To construct dynamic params array.
			if (obj._routes) {
				return obj;
			} else if (obj.route) {
				var matched = {
					route: Array.isArray(obj.route) ? obj.route : dotSerperator(obj.route),
					queryParams: obj.queryParams || {},
					dynamicParams: [],
					fragment: obj.fragment,
					target: "",
					_routes: []
				};
				if (obj.dynamicParams) {
					if (obj.dynamicParams.length == matched.route.length) {
						matched.dynamicParams = Array.from(obj.dynamicParams);
					} else {
						var dynamicParams = Array.from(obj.dynamicParams);
					}
				}
				try {
					matched.route.forEach(function (route, index) {
						matched.target = matched.target ? matched.target + '.' + route : route;
						var r = dotSerperator(matched.target);
						matched._routes.push(r);
						var routesObj = _getObj(matched.route.slice(0, index + 1), config.routes);
						if (!routesObj) {
							throw Error(getError(400, matched.target));
						}
						if (dynamicParams) {
							matched.dynamicParams.push(routesObj.__lp.dkey ? dynamicParams.shift() : undefined);
						}
					});
				} catch (e) {
					consoleError(e);
					return false;
				}
				return matched;
			} else {
				if (this.tagName == LINKTOStr) {
					consoleError(498, pRoute, this.outerHTML);
				} else {
					consoleError(499);
				}
			}
		}

		var routePredefined = [getDependenciesStr, getResourcesStr, beforeModelStr, modelStr, afterModelStr, redirectStr, renderTemplateStr, afterRenderStr, beforeExitStr],
		    Route;

		function cloneLyteProperty(inst, lp) {
			inst.__lp = {};
			for (var key in lp) {
				if (key != "rendered") {
					inst.__lp[key] = lp[key];
				}
			}
		}

		function initRoute(processed) {
			var routeObj,
			    matched = processed.matched,
			    routes = [],
			    refMatch = processed.prevTrans,
			    similarRoute = true;

			for (var i = 0, route; route = matched.route[i]; i++) {
				routeObj = LR.__lp.getDefinition(newTrans.matched._routes[i]);
				if (!routeObj) {
					return false;
				}
				if (refMatch && similarRoute && refMatch.matched && refMatch.matched.route[i] == route) {
					routes.push(new Route(matched, routes, routeObj, i, refMatch.routes[i]));
				} else {
					routes[i] = new Route(matched, routes, routeObj, i);
					similarRoute = false;
				}
			}
			refMatch = undefined;
			return routes;
		}

		Route = function Route(matched, routes, fns, index, prevInstance) {
			var src = prevInstance || fns;
			for (var key in src) {
				if (prevInstance || !_presence(routePredefined, key)) {
					if (key == "__lp") {
						cloneLyteProperty(this, fns.__lp);
					} else {
						this[key] = src[key];
					}
				}
			}
			this.parent = routes[index - 1];
			this.transition = newTrans._trans;
			this.replaceWith = LR.replaceWith;
			this.transitionTo = LR.transitionTo;
			this.removeFromCache = function (arr) {
				Lyte.removeFromCache.assign(arr);
			};
			this.refresh = function (obj) {
				var processed = setParamsInDef(trans.matched),
				    refreshFrom = dotSerperator(this.__lp.objPath).length - 1,
				    route = Array.from(trans.matched.route);
				processed.transComp = {
					unRendered: route.splice(refreshFrom),
					rendered: route
				};
				trans.abort({ state: 308, iAbort: true });
				newTransInfo = { replace: true, data: trans.data, fromHistory: false, url: trans.url };
				dispatch(trans.url, processed);
				if (obj && obj.refreshTemplate) {
					for (var i = refreshFrom, r; r = newTrans.routes[i]; i++) {
						delete r.component;
					}
				}
				return newTrans._trans;
			};
			this.setTitle = function (title) {
				d.title = this.title = title;
			};
			this.getQueryParams = function () {
				return this.__lp.queryParams || {};
			};
			this.getDynamicParam = function () {
				return this.__lp.dynamicParam;
			};
			this.getRouteInstance = function (routeName) {
				return LR.getRouteInstance(routeName);
			};
			this.setDynamicParam = function (value) {
				if (value && this.__lp.dynamicParam && this.__lp.dynamicParam != value) {
					var dynamicParams = Array.from(trans.matched.dynamicParams);
					dynamicParams.splice(this.__lp.objPath.split(".").length - 1, 1, value);
					return paramChangeTrans(cloneMatchedObj(trans.matched, { dynamicParams: dynamicParams }));
				}
				return trans._trans;
			};
			function paramChangeTrans(matched) {
				var url = constructURLFromRoute(matched),
				    processed = setParamsInDef(matched);
				newTransInfo = {
					data: trans.data,
					url: url,
					fromHistory: false
				};
				dispatch(url, decideTransition(processed));
				return newTrans._trans;
			}
			this.setQueryParams = function (key, value, options) {
				var obj = {},
				    refresh;
				if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == "object") {
					obj = key;
					options = value;
				} else {
					obj[key] = value;
				}
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == "object") {
					refresh = options.refresh;
				}
				refresh = options;
				var matched = cloneMatchedObj(trans.matched, { queryParams: Object.assign({}, trans.matched.queryParams, obj) });
				if (!_compareObj(trans.matched.queryParams, matched.queryParams)) {
					matched.refreshModel = matched.refreshModel == undefined ? refresh : matched.refreshModel;
					return paramChangeTrans(matched);
				}
				return trans._trans;
			};
			if (this.init) {
				this.init();
			}
			if (typeof Lyte.Component !== "undefined") {
				this.throwEvent = Lyte.Component.throwEvent;
			}
		};

		function cloneMatchedObj(matched, data) {
			var obj = Object.assign({}, matched);
			obj.route = data.route || Array.from(matched.route);
			obj.dynamicParams = data.dynamicParams || Array.from(matched.dynamicParams);
			obj.queryParams = data.queryParams || Object.assign(matched.queryParams);
			return obj;
		}

		function dispatchTransition(newMatch) {
			var url = newTransInfo.url = constructURLFromRoute(newMatch),
			    processed = setParamsInDef(newMatch);
			dispatch(url, decideTransition(processed));
			return url;
		}

		var allHooks = [getDependenciesStr, getResourcesStr, beforeModelStr, modelStr, afterModelStr, redirectStr, renderTemplateStr, afterRenderStr];
		function decideTransition(processed) {
			/* determines which transition to consider as previous transition */
			if (trans) {
				if (trans.running) {
					var matched = processed.matched,
					    transComp = getTransitionDiffernce(trans, matched, processed.R);
					if (trans.state == 102 && trans.prom && trans.prom.hook == redirectStr) {
						var transitioningRoute = allHooks.indexOf(trans.prom.hook) <= 5 ? trans.prom.index : trans.prom.index + 1;
						if (transComp.common.length - 1 <= transitioningRoute) {
							var visibleTransComparison = getTransitionDiffernce(visibleTrans, matched, processed.R);
							if (transComp.common.length < visibleTransComparison.common.length) {
								if (trans.runLoop.templateToRemove.length) {
									trans.runLoop.templateToRemove.pop();
								}
								if (transComp.rendered.length < visibleTransComparison.rendered.length) {
									processed.prevTrans = visibleTrans;
								}
								transComp = visibleTransComparison;
								transComp.redirected = trans.prom;
							} else if (trans.prom.index <= transComp.common.length - 1) {
								transComp.redirected = trans.prom;
							}
						}
					}
					var info = {
						route: matched.target,
						queryParams: matched.queryParams,
						dynamicParams: matched.dynamicParams.filter(_arrayClean)
					};
					if (LR.checkIfSameRoute(trans.info, info) && !trans.aborted) {
						trans.pause({ iPause: true });
					} else {
						trans.abort({ state: 409, iAbort: true });
					}
					processed.transComp = transComp;
				} else if (trans && !trans.aborted) {
					trans.abort({ state: 409, iAbort: true });
				}
			}
			return processed;
		}
		return this;
	}
	var LR = Lyte.Router = new Router();
})(window); 
 Lyte.developmentVariables =  { production :undefined}