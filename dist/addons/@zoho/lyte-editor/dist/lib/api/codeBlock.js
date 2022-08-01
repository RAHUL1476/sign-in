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