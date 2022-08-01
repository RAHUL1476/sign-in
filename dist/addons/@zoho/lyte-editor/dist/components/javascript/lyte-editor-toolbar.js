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