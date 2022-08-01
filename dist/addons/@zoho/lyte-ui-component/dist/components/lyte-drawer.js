/**
 * Renders a Drawer
 * @component lyte-drawer
 * @version  4.0.0
 * @methods onBeforeShow,onShow,onBeforeClose,onClose
 */
if(!_LyteDrawer_){
	var _LyteDrawer_ =  [];
}
Lyte.Component.register("lyte-drawer", {
_template:"<template tag-name=\"lyte-drawer\"> <template is=\"if\" value=\"{{expHandlers(ltPropLayout,'==',&quot;overlay&quot;)}}\"><template case=\"true\"> <lyte-modal lt-prop-allow-multiple=\"true\" lt-prop-show-close-button=\"{{ltPropShowCloseButton}}\" lt-prop-close-on-escape=\"false\" lt-prop-width=\"{{ltPropWidth}}\" lt-prop-wrapper-class=\"lyteDrawerModal {{ltPropWrapperClass}}\" lt-prop-height=\"{{ltPropHeight}}\" lt-prop-freeze=\"{{ltPropFreeze}}\" lt-prop-show=\"{{lbind(ltPropShow)}}\" on-before-show=\"{{method(&quot;modalOnBeforeShow&quot;)}}\" on-show=\"{{method(&quot;modalOnShow&quot;)}}\" on-before-close=\"{{method(&quot;modalOnBeforeClose&quot;)}}\" on-close=\"{{method(&quot;modalOnClose&quot;)}}\" lt-prop=\"{{stringify(modalAttr)}}\"> <template is=\"registerYield\" yield-name=\"modal\"> <lyte-modal-content class=\"lyteDrawerModal\" onclick=\"{{action(&quot;selectedItem&quot;,event,&quot;overlay&quot;)}}\" onkeydown=\"{{action(&quot;makeDrawerItemActive&quot;,event,&quot;overlay&quot;)}}\" onmousemove=\"{{action(&quot;selectActiveItem&quot;,event)}}\" tabindex=\"0\"> <template is=\"if\" value=\"{{ltPropYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"drawerPanel\"></lyte-yield> </template><template case=\"false\"> <lyte-drawer-body> <template is=\"for\" items=\"{{ltPropOptions}}\" item=\"item\" index=\"index\"><template is=\"if\" value=\"{{lyteUiOptGroupCheck(item)}}\"><template case=\"true\"> <lyte-drawer-group> <lyte-drawer-label> {{lyteUiReturnOnlyKey(item)}} </lyte-drawer-label> <template is=\"for\" items=\"{{lyteUiReturnValueBy(item,lyteUiReturnOnlyKey(item))}}\" item=\"subitem\" index=\"indexval\"> <template is=\"if\" value=\"{{lyteUiIsObject(subitem)}}\"><template case=\"true\"> <lyte-drawer-item data-value=\"{{subitem[ltPropSystemValue]}}\"> <template is=\"if\" value=\"{{ltPropMiniVariant}}\"><template case=\"true\"> <span class=\"lyteDrawerMiniIcon\" style=\"background-image:{{subitem.icon}};\"></span> <span class=\"lyteDrawerMiniLabel\">{{subitem[ltPropUserValue]}}</span> </template><template case=\"false\"> {{subitem[ltPropUserValue]}} </template></template> </lyte-drawer-item> </template><template case=\"false\"> <lyte-drawer-item data-value=\"{{subitem}}\"> {{subitem}} </lyte-drawer-item> </template></template></template> </lyte-drawer-group> </template><template case=\"false\"><template is=\"if\" value=\"{{lyteUiIsObject(item)}}\"><template case=\"true\"> <lyte-drawer-item data-value=\"{{item[ltPropSystemValue]}}\"> <template is=\"if\" value=\"{{ltPropMiniVariant}}\"><template case=\"true\"> <span class=\"lyteDrawerMiniIcon\" style=\"background:{{item.icon}};\"></span> <span class=\"lyteDrawerMiniLabel\">{item[ltPropUserValue]}}</span> </template><template case=\"false\"> {{item[ltPropUserValue]}} </template></template> </lyte-drawer-item> </template><template case=\"false\"> <lyte-drawer-item data-value=\"{{item}}\"> {{item}} </lyte-drawer-item> </template></template></template></template></template> </lyte-drawer-body> </template></template> </lyte-modal-content> </template> </lyte-modal> </template><template case=\"false\"> <div class=\"lyteDrawerInlineBody {{if(expHandlers(currentPosition,'===','left'),'lyteDrawerPanelLeft','lyteDrawerPanelRight')}} {{if(ltPropShow,'lyteDrawerShown','lyteDrawerHidden')}} {{if(expHandlers(ltPropLayout,'===','inlineOverlay'),'lyteDrawerInlineOverlay','lyteDrawerInlineDisplace')}} {{if(ltPropMiniVariant,'lyteDrawerMiniVariant')}}\" style=\"height:{{ltPropHeight}};\"> <div class=\"lyteDrawerPanel {{ltPropWrapperClass}}\" onclick=\"{{action(&quot;selectedItem&quot;,event,&quot;inline&quot;)}}\" onkeydown=\"{{action(&quot;makeDrawerItemActive&quot;,event,&quot;inline&quot;)}}\" onmousemove=\"{{action(&quot;selectActiveItem&quot;,event)}}\" tabindex=\"0\" style=\"{{styleValue}}\"> <div class=\"drawerWrapper\" style=\"width:{{ltPropWidth}};\"> <template is=\"if\" value=\"{{ltPropYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"drawerPanel\"> </lyte-yield> </template><template case=\"false\"> <lyte-drawer-actions> <template is=\"if\" value=\"{{expHandlers(ltPropShowOpenButton,'&amp;&amp;',expHandlers(ltPropShow,'!'))}}\"><template case=\"true\"><div onclick=\"{{action('openDrawer')}}\" class=\"lyteDrawerOpenElem lyteDrawerOpenElemLeft\"> <div class=\"lyteDrawerOpenElemLine\"></div> <div class=\"lyteDrawerOpenElemLine\"></div> <div class=\"lyteDrawerOpenElemLine\"></div> </div></template></template> <template is=\"if\" value=\"{{expHandlers(ltPropShowCloseButton,'&amp;&amp;',ltPropShow)}}\"><template case=\"true\"><div onclick=\"{{action('closeDrawer')}}\" class=\"lyteDrawerCloseIconWrap\"> <div class=\"lyteDrawerCloseIcon\"></div> </div></template></template> </lyte-drawer-actions> <lyte-drawer-body> <template is=\"for\" items=\"{{ltPropOptions}}\" item=\"item\" index=\"index\"><template is=\"if\" value=\"{{lyteUiOptGroupCheck(item)}}\"><template case=\"true\"> <lyte-drawer-group> <lyte-drawer-label> {{lyteUiReturnOnlyKey(item)}} </lyte-drawer-label> <template is=\"for\" items=\"{{lyteUiReturnValueBy(item,lyteUiReturnOnlyKey(item))}}\" item=\"subitem\" index=\"indexval\"> <template is=\"if\" value=\"{{lyteUiIsObject(subitem)}}\"><template case=\"true\"> <lyte-drawer-item data-value=\"{{subitem[ltPropSystemValue]}}\"> <template is=\"if\" value=\"{{ltPropMiniVariant}}\"><template case=\"true\"> <span class=\"lyteDrawerMiniIcon\" style=\"background:{{subitem.icon}};\"></span> <span class=\"lyteDrawerMiniLabel\">{{subitem[ltPropUserValue]}}</span> </template><template case=\"false\"> {{subitem[ltPropUserValue]}} </template></template> </lyte-drawer-item> </template><template case=\"false\"> <lyte-drawer-item data-value=\"{{subitem}}\"> {{subitem}} </lyte-drawer-item> </template></template></template> </lyte-drawer-group> </template><template case=\"false\"><template is=\"if\" value=\"{{lyteUiIsObject(item)}}\"><template case=\"true\"> <lyte-drawer-item data-value=\"{{item[ltPropSystemValue]}}\"> <template is=\"if\" value=\"{{ltPropMiniVariant}}\"><template case=\"true\"> <span class=\"lyteDrawerMiniIcon\" style=\"background-image:{{item.icon}};\"></span> <span class=\"lyteDrawerMiniLabel\">{{item[ltPropUserValue]}}</span> </template><template case=\"false\"> {{item[ltPropUserValue]}} </template></template> </lyte-drawer-item> </template><template case=\"false\"> <lyte-drawer-item data-value=\"{{item}}\"> {{item}} </lyte-drawer-item> </template></template></template></template></template> </lyte-drawer-body> </template></template> </div> </div> <div class=\"lyteDrawerContent\"> <lyte-yield yield-name=\"drawerContent\"> </lyte-yield> </div> <template is=\"if\" value=\"{{ltPropFreeze}}\"><template case=\"true\"> <lyte-drawer-freeze ontransitionend=\"{{action('updateFreezeLayerStyle',this)}}\"> </lyte-drawer-freeze> </template></template> </div> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"for","position":[1,3],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'background-image:'","subitem.icon","';'"]}}}},{"type":"text","position":[3,0]}]},"false":{"dynamicNodes":[{"type":"text","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'background:'","item.icon","';'"]}}}}]},"false":{"dynamicNodes":[{"type":"text","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'height:'","ltPropHeight","';'"]}}}},{"type":"attr","position":[1,1],"attr":{"style":{"name":"style","dynamicValue":"styleValue"}}},{"type":"attr","position":[1,1,1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width:'","ltPropWidth","';'"]}}}},{"type":"attr","position":[1,1,1,1]},{"type":"if","position":[1,1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"for","position":[1,3],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'background:'","subitem.icon","';'"]}}}},{"type":"text","position":[3,0]}]},"false":{"dynamicNodes":[{"type":"text","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'background-image:'","item.icon","';'"]}}}},{"type":"text","position":[3,0]}]},"false":{"dynamicNodes":[{"type":"text","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}},"default":{}}]},{"type":"componentDynamic","position":[3]}]}},"default":{}},{"type":"insertYield","position":[1,3,1]},{"type":"attr","position":[1,5]},{"type":"if","position":[1,5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}},"default":{}}],
_observedAttributes :["ltPropPosition","ltPropWidth","ltPropHeight","ltPropModal","ltPropFreeze","ltPropAnimationDuration","ltPropMiniVariant","ltPropUserValue","ltPropSystemValue","ltPropOptions","ltPropShow","ltPropSelectedClass","ltPropSelected","ltPropCloseOnSelect","ltPropOverlayClose","ltPropShowOpenButton","ltPropShowCloseButton","ltPropCloseOnEscape","ltPropDisabledList","ltPropWrapperClass","ltPropLayout","ltPropExpandMiniVariant","ltPropMiniVariantWidth","ltPropYield","returnedFalse","currentPosition","config","isMouseEvent","styleValue","modalAttr"],

	data : function(){
		return {
			/** 
			 * @componentProperty  {left | right} ltPropPosition=left
			 */
			ltPropPosition:Lyte.attr("string",{"default":"left"}),
			/** 
			 * @componentProperty  {string} ltPropWidth=200px
			 */
			ltPropWidth:Lyte.attr("string",{"default":""}),
			/** 
			 * @componentProperty  {string} ltPropHeight=100%
			 */
			ltPropHeight:Lyte.attr("string",{"default":"100%"}),
			/** 
			 * @componentProperty  {object} ltPropModal={}
			 */
			ltPropModal:Lyte.attr("object",{"default":{}}),
			/** 
			 * @componentProperty  {boolean} ltPropFreeze=true
			 */
			ltPropFreeze:Lyte.attr("boolean",{"default":true}),
			/** 
			 * @componentProperty  {string} ltPropAnimationDuration=0.3s
			 */
			ltPropAnimationDuration:Lyte.attr("string",{"default":"0.3s"}),
			/** 
			 * @componentProperty  {boolean} ltPropMiniVariant=false
			 */
			ltPropMiniVariant:Lyte.attr("boolean",{"default":false}),
			/** 
			 * @componentProperty  {string} ltPropUserValue=name
			 */
			ltPropUserValue: Lyte.attr("string",{default:"name"}),
			/** 
			 * @componentProperty  {string} ltPropSystemValue=value
			 */
			ltPropSystemValue:Lyte.attr("string",{default:"value"}),
			/** 
			 * @componentProperty {array} ltPropOptions
			 * @default []
			 */
			ltPropOptions:Lyte.attr("array",{default:[]}),
			/** 
			 * @componentProperty  {boolean} ltPropShow=false
			 */
			ltPropShow:Lyte.attr("boolean",{"default":false}),
			/** 
			 * @componentProperty  {string} ltPropSelectedClass
			 */
			ltPropSelectedClass:Lyte.attr("string"),
			/** 
			 * @componentProperty  {string} ltPropSelected
			 */
			ltPropSelected:Lyte.attr("string"),
			/** 
			 * @componentProperty  {boolean} ltPropCloseOnSelect=false
			 */
			ltPropCloseOnSelect:Lyte.attr("boolean",{"default":false}),
			/** 
			 * @componentProperty  {boolean} ltPropOverlayClose=true
			 */
			ltPropOverlayClose : Lyte.attr("boolean",{"default":true}),
			/** 
			 * @componentProperty  {boolean} ltPropShowOpenButton=true
			 */
			 ltPropShowOpenButton : Lyte.attr("boolean",{"default":true}),
			/** 
			 * @componentProperty  {boolean} ltPropShowCloseButton=true
			 */
			 ltPropShowCloseButton : Lyte.attr("boolean",{"default":true}),
			 /** 
			 * @componentProperty  {boolean} ltPropCloseOnEscape=true
			 */
			ltPropCloseOnEscape : Lyte.attr("boolean",{"default":true}),
			/** 
			 * @componentProperty  {array} ltPropDisabledList=[]
			 */
			 ltPropDisabledList:Lyte.attr("array",{"default":[]}),
			/** 
			 * @componentProperty  {string} ltPropWrapperClass
			 */
			ltPropWrapperClass:Lyte.attr("string"),
			/** 
			 * @componentProperty  {inline | overlay |  inlineOverlay} ltPropLayout=overlay
			 */
			ltPropLayout: Lyte.attr("string",{"default":"overlay"}),
			/** 
			 * @componentProperty  {object} ltPropExpandMiniVariant={}
			 */
			ltPropExpandMiniVariant: Lyte.attr("object",{
				"default": {}
			}),
			/** 
			 * @componentProperty  {string} ltPropMiniVariantWidth=50px
			 */
			ltPropMiniVariantWidth : Lyte.attr("string",{"default": "50px"}),
			/** 
			 * @componentProperty  {boolean} ltPropYield=false
			 */
			ltPropYield:Lyte.attr("boolean",{default:false}),

			returnedFalse : Lyte.attr("boolean",{"default" : false}),
			currentPosition : Lyte.attr("string"),
			config : Lyte.attr("object",{
				"default" : {}
			}),
			isMouseEvent : Lyte.attr("boolean",{"default":false}),
			styleValue : Lyte.attr("string",{"default": ""}),
			modalAttr : Lyte.attr("object",{"default": {}})
		}		
	},

	// methods calling start
	selected : function( selectedValue, lyteDrawerItem ) {
		if(this.getMethods("onSelected")){
			this.executeMethod("onSelected",selectedValue,lyteDrawerItem,this); 
		}
	},

	beforeShow : function(skip){
		if(!skip && this.getMethods("onBeforeShow")){
			return this.executeMethod("onBeforeShow", this); 
		}
	},

	show : function(skip){
		if(!skip && this.getMethods("onShow")){
			this.executeMethod("onShow", this); 
		}
	},

	beforeClose : function(skip){
		if(!skip && this.getMethods("onBeforeClose")){
			return this.executeMethod("onBeforeClose", this); 
		}
	},

	close : function(skip){
		if(!skip && this.getMethods("onClose")){
			this.executeMethod("onClose", this); 
		}
	},

	// methods calling end 

	updateStyleValue : function(show, initialize) {
		var style = "",
		width = this.data.ltPropWidth,
		animationDuration = this.data.ltPropAnimationDuration;
		if(this.isMiniVariant()) {
			var expandMiniVariant = this.data.ltPropExpandMiniVariant;
			if(expandMiniVariant.overlay){
				var drawerPanel  = this.getDrawerPanel();
				if(show) {
					drawerPanel.classList.add("lyteDrawerOverlayShow");
					drawerPanel.classList.remove("lyteDrawerOverlayHidden");
				}
				else {
					drawerPanel.classList.remove("lyteDrawerOverlayShow");
					drawerPanel.classList.add("lyteDrawerOverlayShow");
				}
			}
			// style = "width:" + (show ? width : this.data.ltPropMiniVariantWidth) + ";";
		}
		else {
			var position = this.data.currentPosition;
			// style = "width:"+width+";";
			style += "margin-"+position+":"+"-"+(show?"0px":width)+";";
		}
		if( !initialize && animationDuration) {
			style += "transition-duration:"+animationDuration+";";
		}
		this.setData("styleValue", style);
	},

	getDrawerForModal : function(){
		var actualModalDiv = this.$node.querySelector("lyte-modal").component.actualModalDiv;
		if(actualModalDiv) {
			return actualModalDiv.querySelector("lyte-modal-content");
		}
	},

	getParentElement : function(){
		/* 
		get parent element based on layout
		*/
		var layout = this.data.ltPropLayout;
		if(layout == "overlay"){
			return this.getDrawerForModal();
		}
		return this.$node.querySelector(".lyteDrawerInlineBody");
	},

	getDrawerPanel : function() {
		var layout = this.data.ltPropLayout;
		if(layout == "overlay"){
			return this.getDrawerForModal();
		}
		return this.$node.querySelector(".lyteDrawerPanel");
	},

	classActionForDrawerItem : function(element, action){
		/*
		function used to add or remove activeClass from a element
		*/ 
		if(element){
			var selectedClass = this.data.ltPropSelectedClass;
			element.classList[action]("lyteDrawerActiveItem");
			if(selectedClass){
				element.classList[action](selectedClass);
			}
		}
	},

	getActiveDrawerItem : function(parentElement){
		/* get active drawer item from ltPropSelected*/
		var selected = this.data.ltPropSelected;
		if(selected){
			return parentElement.querySelector("[data-value ='"+window._lyteUiUtils.escape(selected)+"']");
		}
	},

	removePreviouslySelected : function(parent){
		/* 
			removing the selected class from the previously selected element
		*/
		var prevActiveDrawerItem = parent.querySelector(".lyteDrawerActiveItem");
		this.classActionForDrawerItem(prevActiveDrawerItem, "remove");
	},

	addDisableClassForDrawerItem : function(parentElement, value){
		/* 
			adding disabled class to drawerItem
		*/
		var element = parentElement.querySelector("[data-value ='"+window._lyteUiUtils.escape(value)+"']");
		if(element){
			element.classList.add("lyteDrawerDisabledItem");
		}
	},

	selectDrawerItem : function(){
		/* 
			selecting drawerItem using ltPropSelected
		*/
		var close = this.data.ltPropCloseOnSelect,
		parent = this.getDrawerPanel();
		if(parent){
			var curActiveDrawerItem = this.getActiveDrawerItem(parent);
			this.removePreviouslySelected(parent);
			this.classActionForDrawerItem(curActiveDrawerItem, "add");
			if(curActiveDrawerItem){
				if(close){
					this.setData("ltPropShow",false);
				}
			}
		}
		else {
			this.setData("config.selection",true);
		}
	},

	disableDrawerItems : function(){
		/* 
			disabling drawerItem using ltPropDisableList
		*/
		var array = this.getData("ltPropDisabledList"),
		parent = this.getDrawerPanel();
		if(parent){
			var disabledlist = parent.querySelectorAll(".lyteDrawerDisabledItem");
			for(var index = 0 ; index<disabledlist.length;index++){
				disabledlist[index].classList.remove("lyteDrawerDisabledItem");
			}
			for(var index = 0 ; index<array.length;index++){
				this.addDisableClassForDrawerItem(parent, array[index]);
			}
		}
		else {
			this.setData("config.",true);
		}
	},

	removeDrawerFromStore : function(){
		/* 
		removing the lyteDrawer node from global variable(_LyteDrawer_)
		*/
		var drawer = this.$node;
		var lyteDrawers =  _LyteDrawer_;
		var drawerlength = lyteDrawers.length;
		for(let index=0; index<drawerlength; index++) {
			if(lyteDrawers[index] === drawer) {
				lyteDrawers.splice(index,1);
				break;
			}
		}
	},

	getPositionUsingRtl : function(){
		/* checking the rtl direction and getting correct position */
		var position = this.data.ltPropPosition,
		rtl = _lyteUiUtils.getRTL();
		if(rtl){
			return position === "right"?"left": "right";
		}
		else{
			return position;
		}
	},

	initializeDataForModal : function(){
		/* setting initial data for modal */
		var modalComp = this.$node.querySelector("lyte-modal"),
		offset  = modalComp.ltProp("offset"),
		currentPosition = this.data.currentPosition,
		seconds =  this.data.ltPropAnimationDuration;
		offset[currentPosition] = "0px";
		modalComp.ltProp("transition",{
			"animation": "slideFrom"+_lyteUiUtils.capitalize(currentPosition),
			"duration":seconds
		});
		modalComp.ltProp("offset",offset);
	},

	initializeDataForInlineDrawer : function() { // not used
		var parent = this.$node.querySelector(".lyteDrawerInlineBody"),
		currentPosition =  this.data.currentPosition;
		if(currentPosition == "left"){
			$L(parent).removeClass('lyteDrawerPanelRight').addClass('lyteDrawerPanelLeft');
		}
		else if(currentPosition == "right"){
			$L(parent).removeClass('lyteDrawerPanelLeft').addClass('lyteDrawerPanelRight');
		}
	},

	showFreezeLayer : function(){
		if(this.data.ltPropFreeze) {
			var freezeLayer = this.$node.querySelector("lyte-drawer-freeze");
			// currentPosition = this.data.currentPosition,
			// self = this;
			freezeLayer.style.display = "block";
			setTimeout(function(){
				// freezeLayer.style[currentPosition] = self.data.ltPropWidth;
				freezeLayer.classList.add('lyteDrawerFreezeLayerShown');
			},0);
		}
	},

	hideFreezeLayer : function(initialStage){
		if(this.data.ltPropFreeze) {
			var freezeLayer = this.$node.querySelector("lyte-drawer-freeze");
			freezeLayer.classList.remove('lyteDrawerFreezeLayerShown');
			if(initialStage) {
				freezeLayer.style.setProperty("display","none");
			}
			// currentPosition = this.data.currentPosition;

			// if(this.isMiniVariant()) {
			// 	// freezeLayer.style.setProperty(currentPosition, this.data.ltPropMiniVariantWidth);
			// }
			// else {
			
				// freezeLayer.style.removeProperty(currentPosition);
			// }

			// var self = this;
			// self.freezeTransition = function(){
			// 	freezeLayer.style.display = "none";
			// 	freezeLayer.removeEventListener("transitionend",self.freezeTransition,true);
			// 	delete self.freezeTransition;
			// }
			// freezeLayer.addEventListener("transitionend",self.freezeTransition,true);
		}
	},

	focusDrawerPanel : function() {
		this.getDrawerPanel().focus();
	},

	showInlineDrawer : function(fromDidconnect) {
		// this.initializeDataForInlineDrawer();
		var returnValue =  this.beforeShow(fromDidconnect);
		if(returnValue !== false){
			// if(fromDidconnect) {
			// 	var self = this;
			// 	window.requestAnimationFrame(function(){
			// 		self.updateStyleValue(false, fromDidconnect);
			// 		self.hideFreezeLayer();
			// 		window.requestAnimationFrame(function(){
			// 			self.showFreezeLayer();
			// 			self.updateStyleValue(true);
			// 		});
			// 	});
			// }
			// else {
				this.showFreezeLayer();
				// this.updateStyleValue(true);
			// }
			this.show(fromDidconnect);
			_LyteDrawer_.push(this.$node);
		}
		else{
			this.setData({
				"returnedFalse": true,
				"ltPropShow": false
			});
		}
	},

	closeInlineDrawer : function(fromDidconnect) {
		var returnValue = this.beforeClose(fromDidconnect);
		if(returnValue !== false){
			this.hideFreezeLayer(fromDidconnect);
			// this.updateStyleValue(false, fromDidconnect);
			this.close(fromDidconnect);
			!fromDidconnect && this.removeDrawerFromStore();
		}
		else{
			this.setData({
				"returnedFalse": true,
				"ltPropShow": true
			});
		}
	},

	isLyteDrawerItem : function(element){
		if(element && element.tagName == "LYTE-DRAWER-ITEM" && 
		!element.classList.contains('lyteDrawerDisabledItem')) {
			return true;
		}
	},
	getActiveOrFocusedItem : function(elements){
		var len = elements.length,
		activeIndex;
		for(var index=0; index<len; index++) {
			if(elements[index].classList.contains("lyteDrawerItemFocused")){
				return index;
			}
			else if(elements[index].classList.contains("lyteDrawerActiveItem")) {
				activeIndex =  index;
			}
		}
		return activeIndex;
	},

	isNotActiveElement : function(element){
		if(element) {
			return !element.classList.contains("lyteDrawerActiveItem");
		}
	},

	isValidFocusableItem : function(element){
		return !element.classList.contains("lyteDrawerDisabledItem");
	},

	findNextActive: function( elements, index, forward ) {
		var increment = forward ? 1 : -1,
		eleLen = elements.length;
		if(index === undefined){
			index = forward ? 0 : eleLen-1;
		}
		else {
			index = index + increment;
		}
		for( ;  forward ? index < eleLen : index > -1; index = index + increment ) {
			if( this.isValidFocusableItem(elements[index])) {
				return elements[index];
			}
		}
	},

	getAllDrawerItems : function(){
		var parentElement = this.getDrawerPanel();
		return parentElement.querySelectorAll("lyte-drawer-item");
	},

	isValidateElement :  function(element){
		return element != document 
		&& element != document.body
		&& element != document.documentElement 
		 && element.tagName != 'LYTE-DRAWER-BODY';
	},

	elementsFromPoint: function (x, y) {
        var elements = [], 
		element = document.elementFromPoint(x, y), 
		prevElement;
        while (this.isValidateElement(element)) {
            element._pointerEvents = element.style.pointerEvents;
            element.style.pointerEvents = 'none';
            elements.push(element);
            prevElement = element;
            element = document.elementFromPoint(x, y);
            if (prevElement === element) {
                break
            }
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.pointerEvents = elements[i]._pointerEvents;
            delete elements[i]._pointerEvents;
        }
        return elements;
    },

	openDrawer : function(){
		var parentElement = this.getDrawerPanel();
		var expandMiniVariant =  this.data.ltPropExpandMiniVariant;
		var eventName = this.data.isMouseEvent?"mouseenter":expandMiniVariant.event;
		this.setData("ltPropShow",true);
		if(this.data.ltPropShow) {
			parentElement.removeEventListener( eventName, this._bindedDrawerOpen, true);
			if(this.data.isMouseEvent) {
				document.addEventListener( "mousemove", this._bindedDrawerClose, true);
			}
		}
	},

	closeOnHover: function (event) {
        if (this.$node) {
            var elements = document.elementsFromPoint ? document.elementsFromPoint(event.clientX, event.clientY) 
			: this.elementsFromPoint(event.clientX, event.clientY);
			var parentElement = this.getDrawerPanel();
            if (elements.indexOf(parentElement) == -1 ) {
				this.setData("ltPropShow", false);
				if(!this.data.ltPropShow) {
					document.removeEventListener( "mousemove", this._bindedDrawerClose, true);
					parentElement.addEventListener( "mouseenter", this._bindedDrawerOpen, true);
				}
            }
        }
    },

	isMiniVariant : function(){
		return this.data.ltPropMiniVariant;
	},

	isMouseEvent : function(eventName){
		return /^(mouseenter|mousemove|mouseover|hover)$/.test(eventName);
	},

	initializeEvent : function() {
		if(this.isMiniVariant()) {
			var parentElement = this.getDrawerPanel();
			if(parentElement) {
				var expandMiniVariant = this.data.ltPropExpandMiniVariant;
				var eventName = expandMiniVariant.event;
				if(eventName) {
					var isMouseEvent =  this.isMouseEvent(eventName);
					this._bindedDrawerOpen = this.openDrawer.bind(this);
					if(isMouseEvent) {
						this._bindedDrawerClose = this.closeOnHover.bind(this);
						eventName = "mouseenter";
					}
					parentElement.addEventListener(eventName,this._bindedDrawerOpen,true);
					this.setData("isMouseEvent", isMouseEvent);
				}
			}
		}
	},

	checkAndUpdateSelectedValue : function(config) {
		if(config.selection) {
			this.selectDrawerItem();
			Lyte.objectUtils(config, "delete", "selection");
		}
	},

	checkAndUpdateDisbaleList : function(config) {
		if(config.disable) {
			this.disableDrawerItems();
			Lyte.objectUtils(config, "delete", "disable");
		}
	},

	checkAndUpdateMiniVariant : function(config) {
		if(config.event) {
			this.initializeEvent();
			Lyte.objectUtils(config, "delete", "event");
		}
	},

	initializeDrawerDefaultData : function() {
		var config = this.data.config;
		this.checkAndUpdateSelectedValue(config);
		this.checkAndUpdateDisbaleList(config);
	},

	moveIntoView: function( element ) {
		var panel = this.getDrawerPanel(),
		panelScrollTop = panel.scrollTop,
		elementTop = element.offsetTop;

		if( elementTop <= panelScrollTop ) {
			panel.scrollTop = elementTop;
		}
		else {
			panel.scrollTop =elementTop + element.offsetHeight - panel.offsetHeight;
		}
	},

	updateModalAttr : function(){
		var modalAttr =  Lyte.deepCopyObject(this.data.ltPropModal);
		var notAllowed = ["width", "height","showCloseButton","closeOnEscape", 
		"allowMultiple", "overlayClose","freeze", "wrapperClass"];
		notAllowed.forEach(function(item){
			if(modalAttr.hasOwnProperty(item)) {
				delete modalAttr[item]
			}
		});
		this.setData("modalAttr",  modalAttr);
	},

	removeAttachedEvents : function() {
		if(this.isMiniVariant()){
			var parentElement = this.getDrawerPanel();
			var	expandMiniVariant = this.data.ltPropExpandMiniVariant;
			if(expandMiniVariant.event) {
				var eventName = this.data.isMouseEvent?"mouseenter":expandMiniVariant.event; 
				if(this.data.isMouseEvent){
					document.removeEventListener( "mousemove", this._bindedDrawerClose, true);
				}
				parentElement.addEventListener( eventName, this._bindedDrawerOpen, true);
				delete this._bindedDrawerClose;
				delete this._bindedDrawerOpen;
			}
		}
	},
	
	didConnect : function(){
		this.initializeEvent();
	},

	didDestory:function(){
		//remove documnet event listener
		this.removeDrawerFromStore();
		this.removeAttachedEvents();
	},

	//observers start
	selectedObserver : function(changes){
		this.selectDrawerItem();
	}.observes("ltPropSelected").on('didConnect'),

	disabledListObserver : function(){
		this.disableDrawerItems();
	}.observes("ltPropDisabledList").on('didConnect'),

	showChanges:function(changes){
		if(this.data.returnedFalse){
            this.setData('returnedFalse',false);
            return;
        }
		var  show  = this.data.ltPropShow,
		layout = this.$node.ltProp("layout"),
		position = this.getPositionUsingRtl();
		this.setData("currentPosition",position);
		if(show){
			if(layout === "overlay"){
				this.initializeDataForModal();
			}
			else if(layout === "inline"){
				this.showInlineDrawer(!changes);
			}
		}
		else if(layout == "inline"){
			this.closeInlineDrawer(!changes);
		}
	}.observes("ltPropShow").on('didConnect'),

	styleObserver : function(observerChange){
		if(this.data.ltPropLayout != "overlay"){
			var drawerPanel =  this.getDrawerPanel();
			var compData =  this.data;
			var cssVarMapping  =  {
				ltPropWidth : "--lyte-drawer-width",
				ltPropMiniVariantWidth : "--lyte-drawer-mini-variant-width",
				ltPropAnimationDuration : "--lyte-drawer-transition-duration"
			}
			if(observerChange) {
				var key = observerChange.item;
				drawerPanel.style.setProperty( cssVarMapping[key], compData[key]);
			}
			else {
				for(var key in cssVarMapping) {
					drawerPanel.style.setProperty( cssVarMapping[key], compData[key]);
				}
			}
		}
	}.observes("ltPropWidth","ltPropAnimationDuration","ltPropMiniVariantWidth").on("didConnect"),

	modalAttrObserver :  function(){
		this.updateModalAttr();
	}.observes("ltPropModal"),

	//observers end

	actions:{

		selectedItem:function(event,type){
			var closestItem = $L(event.target).closest("lyte-drawer-item", this.$node)[0];
			if(this.isLyteDrawerItem(closestItem)) {
				var value = closestItem.getAttribute("data-value");
				this.setData("ltPropSelected",value);
				this.selected( this.data.ltPropSelected, closestItem);
			}
		},

		makeDrawerItemActive : function(event) {
			
			var keyCode = event.keyCode;
			var drawerItems = this.getAllDrawerItems();
			var activeIndex = this.getActiveOrFocusedItem(drawerItems);
			var activeItem =  drawerItems[activeIndex];
			if(this.data.ltPropShow){
				if( keyCode === 38  || keyCode === 40 ) {
					var forward = keyCode === 40;
					var nextActiveItem = this.findNextActive(drawerItems, activeIndex, forward);
					if(nextActiveItem) {
						if(activeItem){
							activeItem.classList.remove("lyteDrawerItemFocused");
						}
						nextActiveItem.classList.add("lyteDrawerItemFocused");
						this.moveIntoView(nextActiveItem);
						event.preventDefault();
					}
				}
				else if(keyCode === 13 && this.isNotActiveElement(activeItem)) {
					var value = activeItem.getAttribute("data-value");
					activeItem.classList.remove("lyteDrawerItemFocused");
					this.setData("ltPropSelected",value);
					this.selected( this.data.ltPropSelected, activeItem);
					event.preventDefault();
				}
			}

		},

		selectActiveItem : function(event){
			var closestItem = $L(event.target).closest("lyte-drawer-item", this.$node)[0];
			var drawerPanel = this.getDrawerPanel();
			var focusedItem = drawerPanel.querySelector(".lyteDrawerItemFocused");
			if(focusedItem) {
				focusedItem.classList.remove("lyteDrawerItemFocused");
			}
			if(closestItem) {
				closestItem.classList.add("lyteDrawerItemFocused");
			}
		},

		openDrawer : function() {
			this.setData("ltPropShow",true);
		},
		
		closeDrawer : function() {
			this.setData("ltPropShow",false);
		},

		updateFreezeLayerStyle : function(node) {
			if(this.data.ltPropShow ===  false) {
				node.style.setProperty("display", "none");
			}
		}

	},

	methods:{

		modalOnBeforeShow:function(component){
			return this.beforeShow();
		},

		modalOnShow:function(component){
			this.initializeDrawerDefaultData();
			this.show();
			this.focusDrawerPanel();
			_LyteDrawer_.push(this.$node);
		},

		modalOnBeforeClose:function(event,component){
			return this.beforeClose();
		},

		modalOnClose:function(component){
			if(this.isMiniVariant()) {
				return;
			}
			this.removeDrawerFromStore();
			this.close();
		}

	}
});
if (document.readyState === "complete" || document.readyState === "interactive"){
    addCloseEvent();
}
else{
    document.addEventListener("DOMContentLoaded", function(event){
        addCloseEvent(event);
    });
}
function  addCloseEvent(event){

	document.addEventListener('click',function(event){
		var ele = event.target;
		while( ele.tagName != "LYTE-DRAWER-BODY" && ele.tagName != "LYTE-DRAWER" && ele.tagName !="LYTE-DRAWER-FREEZE" && ele.tagName != "LYTE-MODAL-FREEZE" && ele.tagName != 'LYTE-DROP-BOX' && ele.tagName != 'HTML'){
            ele = ele.parentElement;
            if(!ele){
                return
            }
        }
		if(ele.tagName == 'HTML' || ele.tagName == "LYTE-MODAL-FREEZE" || ele.tagName == "LYTE-DRAWER-FREEZE"){
			var last = _LyteDrawer_.length-1;
			if(last > -1){
				if(_LyteDrawer_[last].tagName == "LYTE-DRAWER" && _LyteDrawer_[last].ltProp('show') && _LyteDrawer_[last].ltProp("overlayClose")){
					if(_LyteDrawer_[last]){
						_LyteDrawer_[last].ltProp('show',false);
					}
				}
			}
		}
	},true);
	document.addEventListener('keydown',function(event){
			event = event || window.event;
            var isEscape = false;
            if ("key" in event) {
                isEscape = (event.key == "Escape" || event.key == "Esc");
            } else {
                isEscape = (event.keyCode == 27);
            }
            if (isEscape) {
				var last = _LyteDrawer_.length-1;
				if(last > -1){
					if(_LyteDrawer_[last].tagName == "LYTE-DRAWER" && _LyteDrawer_[last].ltProp('show') && _LyteDrawer_[last].ltProp("closeOnEscape")){
						if(_LyteDrawer_[last]){
							_LyteDrawer_[last].ltProp('show',false);
						}
					}
				}
            }
	},true);
}