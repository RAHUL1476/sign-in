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