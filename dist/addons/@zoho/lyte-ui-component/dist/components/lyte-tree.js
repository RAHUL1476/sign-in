/**
 * Renders data in tree view
 * @component lyte-tree
 * @version 1.0.6
 * @methods onToggle,onToggleEnd
 */

Lyte.Component.register("lyte-tree", {
_template:"<template tag-name=\"lyte-tree\" role=\"treeitem\"> <template is=\"if\" value=\"{{expHandlers(ltPropStructureType,'===',&quot;file&quot;)}}\"><template case=\"true\"> <template is=\"for\" items=\"{{ltPropData}}\" item=\"item\" index=\"index\"> <div class=\"lyteTreeBodyDiv\" role=\"group\"> <lyte-tree-body data-index=\"{{lyteUiTreeIndexHelp(indexVar,index)}}\" class=\"{{lyteUiTreeClassHelp(item.defaultState,item.collapsed,'lyteTreeBodyOpened','lyteTreeBodyClosed')}}\" data-level=\"{{lyteUiTreeLevelHelp(indexVar,index)}}\"> <div class=\"mainContainer lyteTreeMainContainer {{lyteUiTreeChildHelp(item,ltPropLeafContainer,ltPropChildrenValue)}} {{lyteUiTreeHasChildHelp(item,ltPropChildrenValue)}} {{lyteTreeMaxChild(indexVar,index,ltPropMaxLevel)}}\" role=\"{{lyteTreeAriaRole(item,ltPropChildrenValue)}}\"> <lyte-yield tabindex=\"{{lyteTreeAriaTabIndexHelp(indexVar,index)}}\" collapsed=\"{{if(item.collapsed,'collapsed','')}}\" yield-name=\"content\" list-value=\"{{item}}\" list-index=\"{{lyteUiTreeIndexHelp(indexVar,index)}}\" class=\"{{lyteUiTreeChildHelp(item,ltPropLeafNodeClass,ltPropChildrenValue)}}\"></lyte-yield> <template is=\"if\" value=\"{{lyteUiTreeMaxLevelHelp(indexVar,index,ltPropMaxLevel)}}\"><template case=\"true\"> <template is=\"if\" value=\"{{expHandlers(expHandlers(expHandlers(item[ltPropChildrenValue][&quot;length&quot;],'!==',0),'&amp;&amp;',expHandlers(item[ltPropChildrenValue],'!==',undefined)),'&amp;&amp;',expHandlers(item.collapsed,'!'))}}\"><template case=\"true\"> <template is=\"if\" value=\"{{expHandlers(expHandlers(item.defaultState,'!'),'||',expHandlers(item.defaultState,'===',&quot;open&quot;))}}\"><template case=\"true\"> <lyte-tree class=\"lyteTreeOpened lyteTreeChildrenLevel\" lt-prop-children-value=\"{{ltPropChildrenValue}}\" index-var=\"{{lyteUiTreeIndexHelp(indexVar,index)}}\" lt-prop-data=\"{{item[ltPropChildrenValue]}}\" id=\"{{ltPropId}}\" lt-prop-tree-lines=\"{{ltPropTreeLines}}\" lt-prop-yield=\"{{ltPropYield}}\" lt-prop-open-class=\"{{ltPropOpenClass}}\" lt-prop-wrapper-open-class=\"{{ltPropWrapperOpenClass}}\" lt-prop-leaf-node-class=\"{{ltPropLeafNodeClass}}\" lt-prop-close-class=\"{{ltPropCloseClass}}\" lt-prop-wrapper-close-class=\"{{ltPropWrapperCloseClass}}\" lt-prop-max-level=\"{{ltPropMaxLevel}}\" lt-prop-toggle-animation=\"{{ltPropToggleAnimation}}\" on-toggle=\"{{method('onToggle')}}\" on-toggle-end=\"{{method('onToggleEnd')}}\"> <template is=\"registerYield\" yield-name=\"content\" from-parent=\"\"></template> </lyte-tree> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(item.defaultState,'===',&quot;close&quot;)}}\"><template case=\"true\"> <lyte-tree class=\"lyteTreeClosed lyteTreeChildrenLevel\" lt-prop-children-value=\"{{ltPropChildrenValue}}\" index-var=\"{{lyteUiTreeIndexHelp(indexVar,index)}}\" lt-prop-data=\"{{item[ltPropChildrenValue]}}\" id=\"{{ltPropId}}\" lt-prop-tree-lines=\"{{ltPropTreeLines}}\" lt-prop-yield=\"{{ltPropYield}}\" lt-prop-open-class=\"{{ltPropOpenClass}}\" lt-prop-wrapper-open-class=\"{{ltPropWrapperOpenClass}}\" lt-prop-leaf-node-class=\"{{ltPropLeafNodeClass}}\" lt-prop-close-class=\"{{ltPropCloseClass}}\" lt-prop-wrapper-close-class=\"{{ltPropWrapperCloseClass}}\" lt-prop-max-level=\"{{ltPropMaxLevel}}\" lt-prop-toggle-animation=\"{{ltPropToggleAnimation}}\" on-toggle=\"{{method('onToggle')}}\" on-toggle-end=\"{{method('onToggleEnd')}}\"> <template is=\"registerYield\" yield-name=\"content\" from-parent=\"\"></template> </lyte-tree> </template></template></template></template> </template></template> </template></template> </div> </lyte-tree-body> </div> </template> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(ltPropStructureType,'===',&quot;data&quot;)}}\"><template case=\"true\"> <div class=\"lyteDataTreeNodeWrap\"> <template is=\"if\" value=\"{{expHandlers(dataType,'===',&quot;array&quot;)}}\"><template case=\"true\"> <template is=\"if\" value=\"{{expHandlers(arrayOpened,'!')}}\"><template case=\"true\"><div class=\"lyteDataTreeNode lyteDataTreeArrayNode {{if(lyteTreeArrayOpened,'lyteDataTreeOpened','lyteDataTreeClosed')}}\" onclick=\"{{action('openArray',this)}}\"> <span> [ <template is=\"for\" items=\"{{ltPropArrayData}}\" item=\"item\" index=\"index\"> <template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(item),'===',&quot;array&quot;)}}\"><template case=\"true\"> <span class=\"test\" style=\"text-transform:capitalize;\">{{lyteTreeDataType(item)}}({{lyteTreeGetArrayLength(item)}})</span> <span class=\"lyteTreeComma\">,</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(item),'===',&quot;object&quot;)}}\"><template case=\"true\"> <span>{...}</span> <span class=\"lyteTreeComma\">,</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(item),'===',&quot;string&quot;)}}\"><template case=\"true\"> <span class=\"lyteDataTreeNodeText\">'{{item}}'</span> <span class=\"lyteTreeComma\">,</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(item),'===',&quot;number&quot;)}}\"><template case=\"true\"> <span>{{item}}</span> <span class=\"lyteTreeComma\">,</span> </template></template></template></template></template></template></template></template> </template> ] </span> </div></template><template case=\"false\"><div class=\"lyteDataTreeOpened\" onclick=\"{{action('openArray',this)}}\"> <span>Array({{lyteTreeArrayLength}})</span> </div></template></template> <template is=\"if\" value=\"{{lyteTreeArrayOpened}}\"><template case=\"true\"><div class=\"lyteDataTreeNodeWrap\"> <template is=\"for\" items=\"{{ltPropArrayData}}\" item=\"item\" index=\"index\"> <template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(item),'===',&quot;array&quot;)}}\"><template case=\"true\"> <div class=\"lyteDataTreeNode lyteDataTreeArrayNode\"> <span class=\"lyteDataTreeIndex\">{{index}}</span> <span>:</span> <div class=\"lyteDataTreeNodeContent\"> <lyte-tree class=\"lyteDataTreeSubLevel\" lt-prop-structure-type=\"data\" lt-prop-array-data=\"{{item}}\" on-before-open=\"{{method('onBeforeOpen')}}\" on-open=\"{{method('onOpen')}}\" on-before-close=\"{{method('onBeforeClose')}}\" on-close=\"{{'onClose'}}\"> <template is=\"registerYield\" yield-name=\"content\"></template> </lyte-tree> </div> </div> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(item),'===',&quot;object&quot;)}}\"><template case=\"true\"> <div class=\"lyteDataTreeNode lyteDataTreeObjectNode\"> <span class=\"lyteDataTreeIndex\">{{index}}</span> <span>:</span> <div class=\"lyteDataTreeNodeContent\"> <lyte-tree class=\"lyteDataTreeSubLevel\" lt-prop-structure-type=\"data\" lt-prop-json-data=\"{{item}}\" on-before-open=\"{{method('onBeforeOpen')}}\" on-open=\"{{method('onOpen')}}\" on-before-close=\"{{method('onBeforeClose')}}\" on-close=\"{{'onClose'}}\"> <template is=\"registerYield\" yield-name=\"content\"></template> </lyte-tree> </div> </div> </template><template case=\"false\"> <div class=\"lyteDataTreeNode\"> <span class=\"lyteDataTreeIndex\">{{index}}</span> <span>:</span> <span class=\"lyteDataTreeNodeContent lyteDataTreeNodeText\">{{item}}</span> </div> </template></template></template></template> </template> </div></template></template> </template></template><template is=\"if\" value=\"{{expHandlers(dataType,'===',&quot;object&quot;)}}\"><template case=\"true\"> <template is=\"if\" value=\"{{expHandlers(jsonOpened,'!')}}\"><template case=\"true\"><div class=\"lyteDataTreeNode lyteDataTreeObjectNode {{if(lyteTreeJsonOpened,'lyteDataTreeOpened','lyteDataTreeClosed')}}\" onclick=\"{{action('openJson',this)}}\"> <span>{ <template is=\"forIn\" object=\"{{ltPropJsonData}}\" value=\"value\" key=\"key\"> <span>{{key}}</span>: <template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(value),'===',&quot;array&quot;)}}\"><template case=\"true\"> <span style=\"text-transform:capitalize;\">{{lyteTreeDataType(value)}}({{lyteTreeGetArrayLength(value)}})</span> <span class=\"lyteTreeComma\">,</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(value),'===',&quot;object&quot;)}}\"><template case=\"true\"> <span>{...}</span> <span class=\"lyteTreeComma\">,</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(value),'===',&quot;string&quot;)}}\"><template case=\"true\"> <span class=\"lyteDataTreeNodeText\">'{{value}}'</span> <span class=\"lyteTreeComma\">,</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(value),'===',&quot;number&quot;)}}\"><template case=\"true\"> <span class=\"lyteDataTreeNodeText\">{{value}}</span> <span class=\"lyteTreeComma\">,</span> </template></template></template></template></template></template></template></template> </template> }</span> </div></template><template case=\"false\"><div class=\"lyteDataTreeOpened\" onclick=\"{{action('openJson',this)}}\"> <span class=\"lyteDataTreeObjectTextLabel\">Object</span> </div></template></template> <template is=\"if\" value=\"{{lyteTreeJsonOpened}}\"><template case=\"true\"><div class=\"lyteDataTreeNodeWrap\"> <template is=\"forIn\" object=\"{{ltPropJsonData}}\" value=\"value\" key=\"key\"> <template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(value),'===',&quot;array&quot;)}}\"><template case=\"true\"> <div class=\"lyteDataTreeNode lyteDataTreeArrayNode\"> <span class=\"lyteDataTreeIndex\">{{key}}</span> <span>:</span> <div class=\"lyteDataTreeNodeContent\"> <lyte-tree class=\"lyteDataTreeSubLevel\" lt-prop-structure-type=\"data\" lt-prop-array-data=\"{{value}}\" on-before-open=\"{{method('onBeforeOpen')}}\" on-open=\"{{method('onOpen')}}\" on-before-close=\"{{method('onBeforeClose')}}\" on-close=\"{{'onClose'}}\"> <template is=\"registerYield\" yield-name=\"content\"></template> </lyte-tree> </div> </div> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteTreeDataType(value),'===',&quot;object&quot;)}}\"><template case=\"true\"> <div class=\"lyteDataTreeNode lyteDataTreeObjectNode\"> <span class=\"lyteDataTreeIndex\">{{key}}</span> <span>:</span> <div class=\"lyteDataTreeNodeContent\"> <lyte-tree class=\"lyteDataTreeSubLevel\" lt-prop-structure-type=\"data\" lt-prop-json-data=\"{{value}}\" on-before-open=\"{{method('onBeforeOpen')}}\" on-open=\"{{method('onOpen')}}\" on-before-close=\"{{method('onBeforeClose')}}\" on-close=\"{{'onClose'}}\"> <template is=\"registerYield\" yield-name=\"content\"></template> </lyte-tree> </div> </div> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(expHandlers(lyteTreeDataType(value),'===',&quot;string&quot;),'||',expHandlers(lyteTreeDataType(value),'===',&quot;number&quot;))}}\"><template case=\"true\"> <div class=\"lyteDataTreeNode\"> <span class=\"lyteDataTreeIndex\">{{key}}</span> <span>:</span> <span class=\"lyteDataTreeNodeContent lyteDataTreeNodeText\">{{value}}</span> <span class=\"lyteTreeComma testend\">,</span> </div> </template></template></template></template></template></template> </template> </div></template></template> </template></template> </div> </template></template></template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"attr","position":[1,1,1,1]},{"type":"insertYield","position":[1,1,1,1]},{"type":"attr","position":[1,1,1,3]},{"type":"if","position":[1,1,1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}},"default":{}},{"type":"componentDynamic","position":[1,1]}]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"attr","position":[0,1,1]},{"type":"for","position":[0,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]},{"type":"text","position":[1,2]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"text","position":[0,1,1]}]}},"default":{}},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"for","position":[0,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"attr","position":[1,5,1]},{"type":"registerYield","position":[1,5,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,5,1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"attr","position":[1,5,1]},{"type":"registerYield","position":[1,5,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,5,1]}]},"false":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"text","position":[1,5,0]}]}},"default":{}}]}},"default":{}}]}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[1,2]},{"type":"if","position":[1,2],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"attr","position":[0,1,1]},{"type":"forIn","position":[0,1,1],"dynamicNodes":[{"type":"text","position":[1,0]},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]},{"type":"text","position":[1,2]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"forIn","position":[0,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"attr","position":[1,5,1]},{"type":"registerYield","position":[1,5,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,5,1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"attr","position":[1,5,1]},{"type":"registerYield","position":[1,5,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,5,1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"text","position":[1,5,0]}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}]}},"default":{}}]}},"default":{}}]}},"default":{}}]}},"default":{}}],
_observedAttributes :["ltPropData","ltPropJsonData","ltPropArrayData","ltPropContent","ltPropChildrenValue","ltPropLeafContainer","ltPropWrapperOpenClass","ltPropWrapperCloseClass","ltPropOpenClass","ltPropCloseClass","ltPropLeafNodeClass","ltPropMaxLevel","ltPropStructureType","ltPropToggleAnimation","ariaLiveContent","ariaLiveBoolean","treeHeight","ltPropStateAttr","dataType","lyteTreeArrayOpened","lyteTreeJsonOpened","lyteTreeArrayLength","arrayOpened","jsonOpened","heightTransArr","collapsedAll","tempVar","indexVar"],

  data: function() {
    return {

      /**
       * @componentProperty {array} ltPropData
       */

      'ltPropData': Lyte.attr('array', {
        'default': []
      }),

			/**
       * @componentProperty {array} ltPropJsonData
       */

      'ltPropJsonData': Lyte.attr('object', {
        'default': {}
      }),

			/**
       * @componentProperty {array} ltPropArrayData
       */

      'ltPropArrayData': Lyte.attr('array', {
        'default': []
      }),

      /**
       * @componentProperty {array} ltPropContent
       */

      'ltPropContent': Lyte.attr('object', {
        'default': {lyteTreeEmptyObject : true}
      }),

      /**
       * @componentProperty {string} ltPropChildrenValue
       * @default children
       */

      'ltPropChildrenValue': Lyte.attr('string', {
        'default': 'children'
      }),

      /**
       * @componentProperty {string} ltPropLeafContainer
       * @default lyteTreeNoChildContainer
       */

      'ltPropLeafContainer': Lyte.attr('string', {
        'default': 'lyteTreeNoChildContainer'
      }),

      /**
       * @componentProperty {string} ltPropWrapperOpenClass
       */

      'ltPropWrapperOpenClass': Lyte.attr('string', {
        'default': ''
      }),

      /**
       * @componentProperty {string} ltPropWrapperCloseClass
       */

      'ltPropWrapperCloseClass': Lyte.attr('string', {
        'default': ''
      }),

      /**
       * @componentProperty {string} ltPropOpenClass
       */

      'ltPropOpenClass': Lyte.attr('string', {
        'default': ''
      }),

      /**
       * @componentProperty {string} ltPropCloseClass
       */

      'ltPropCloseClass': Lyte.attr('string', {
        'default': ''
      }),

      /**
       * @componentProperty {string} ltPropLeafNodeClass
       * @default lyteTreeHasNoChild
       */

      'ltPropLeafNodeClass': Lyte.attr('string', {
        'default': 'lyteTreeHasNoChild'
      }),

      'ltPropMaxLevel': Lyte.attr('number', {
        'default': 35
      }),

      "ltPropStructureType": Lyte.attr('string', {
        'default': 'file'
      }),

      "ltPropToggleAnimation" : Lyte.attr('boolean' , {
        'default' : true
      }),

      "ariaLiveContent" : Lyte.attr('string' , {
        'default' : ""
      }),
      "ariaLiveBoolean" : Lyte.attr('boolean' , {
        'default' : false
      }),


      'treeHeight': Lyte.attr('number', {
        'default': 0
      }),
      'ltPropStateAttr': Lyte.attr('string', {
        'default': ''
      }),


			'dataType' : Lyte.attr('string' , {
				default : 'array'
			}),
			'lyteTreeArrayOpened' : Lyte.attr('boolean' , {
				default : false
			}),
			'lyteTreeJsonOpened' : Lyte.attr('boolean' , {
				default : false
			}),
      'lyteTreeArrayLength' : Lyte.attr('number' , {
        default : 0
      }),
      'arrayOpened' : Lyte.attr('boolean' , {
        default : false
      }),
      'jsonOpened' : Lyte.attr('boolean' , {
        default : false
      }),

      'heightTransArr': Lyte.attr('array', {
        default: []
      }),

      collapsedAll: Lyte.attr('boolean', {
        default: false
      }),

      tempVar: Lyte.attr('string', {
        default: ''
      }),
      indexVar: Lyte.attr('string', {
        default: ''
      })
    }
  },

  init: function() {

    if ($L(this.$node).attr('class') === undefined) {
      $L(this.$node).addClass('lyteTreeOpened')
    }

    var _thisTree = this

    this.$node.closeIcon = function(icon){
      $L(icon).addClass('lyteIconClosed');
      $L(icon).addClass(this.getData('ltPropCloseClass'));
      $L(icon).removeClass('lyteIconOpened');
      $L(icon).removeClass(this.getData('ltPropOpenClass'));
      if($L(icon).hasClass('lyteTreeIconHasChild')){
        $L(icon).removeClass('lyteTreeIconHasChild');
        $L(icon).closest('.lyteTreeMainContainer').removeClass('lyteTreeHasChild');
      }
    }

    this.$node.openIcon = function(icon){
      $L(icon).removeClass('lyteIconClosed');
      $L(icon).removeClass(this.getData('ltPropCloseClass'));
      $L(icon).addClass('lyteIconOpened');
      $L(icon).addClass(this.getData('ltPropOpenClass'));
      if($L(icon).hasClass('lyteTreeIconHasChild')){
        $L(icon).removeClass('lyteTreeIconHasChild');
        $L(icon).closest('.lyteTreeMainContainer').removeClass('lyteTreeHasChild');
      }
    }

    this.$node.expandAll = function() {
      var _this = this

      var treeBody = $L(this).find('lyte-tree')[0].closest('lyte-tree-body')
      var icon = $L(treeBody).find('lyte-tree-icon')[0]

      function openingFun() {

        var children = $L(_this).find('.lyteTreeChildrenLevel')
        var maxedChild = $L(_this).find('.lyteTreeMaxedChild')

        $L(children).find('.lyteTreeCollapsed').removeClass('lyteTreeCollapsed')

        $L(children).find('.lyteTreeClosed:not(.lyteTreeIconHasChild)').addClass('lyteTreeOpened');
        $L(children).find('.lyteTreeClosed:not(.lyteTreeIconHasChild)').removeClass('lyteTreeClosed');
        $L(maxedChild).find('.lyteTreeOpened').addClass('lyteTreeClosed');
        $L(maxedChild).find('.lyteTreeOpened').removeClass('lyteTreeOpened');

        $L(children).find('.lyteIconClosed:not(.lyteTreeIconHasChild)').addClass('lyteIconOpened ' + _this.getData('ltPropOpenClass'));
        $L(children).find('.lyteIconClosed:not(.lyteTreeIconHasChild)').removeClass('lyteIconClosed ' + _this.getData('ltPropCloseClass'));

        $L(maxedChild).find('.lyteIconOpened').addClass('lyteIconClosed ' + _this.getData('ltPropCloseClass'));
        $L(maxedChild).find('.lyteIconOpened').removeClass('lyteIconOpened ' + _this.getData('ltPropOpenClass'));

        $L(_this).find('.lyteTreeChildrenLevel').css({
          display: '',
          height: 'auto'
        });

        icon.click();

        _this.setData('collapsedAll', false);
      }


      if ($L('.lyteTreeCollapsed').length > 0) {
        if (this.getData('collapsedAll')) {
          openingFun()
        }
      } else {

        $L(_thisTree.$node).find('.lyteIconClosed:not(.lyteTreeIconMaxed)').click();

      }

    }
    this.$node.collapseAll = function() {

      if (!this.getData('collapsedAll')) {
        var _this = this

        var collTrans = function() {

          $L(_this).find('.lyteTreeOpened').addClass('lyteTreeClosed');
          $L(_this).find('.lyteTreeOpened').removeClass('lyteTreeOpened');

          $L(_this).find('.lyteIconOpened').addClass('lyteIconClosed ' + _this.getData('ltPropCloseClass'));
          $L(_this).find('.lyteIconOpened').removeClass('lyteIconOpened ' + _this.getData('ltPropOpenClass'));

          $L(_this).find('.lyteTreeChildrenLevel').css({
            display: 'none',
            height: 'auto'
          });

          $L(_this).find('.lyteTreeChildrenLevel')[0].removeEventListener('transitionend', collTrans)

        }

        var treeBody = $L(this).find('lyte-tree')[0].closest('lyte-tree-body')
        var icon = $L(treeBody).find('lyte-tree-icon')[0]
        if (!$L(icon).hasClass('lyteIconClosed')) {
          icon.click();
          $L(this).find('.lyteTreeChildrenLevel')[0].addEventListener('transitionend', collTrans)
        } else {
          $L(icon).addClass('lyteTreeIconClosed');
          collTrans();
        }

        $L(this).addClass('lyteTreeCollapsed')

        this.setData('collapsedAll', true);

      }

    }

    this.$node.openRecursive = function(targetElem){

      var currentIndex = $L(targetElem).attr('data-index')
      var currentTree
      var currentIcon
      var indexLen = Math.floor(currentIndex.length/2)

      var dummy
      var th = this

      var outMostTree = $L(th).find('LYTE-TREE-BODY [data-index="'+currentIndex.slice(0 , 5)+'"]')[0]
      function openRec(){

        currentIndex = currentIndex.slice(0 , -2);
        currentTree = $L(th).find('LYTE-TREE [index-var="'+currentIndex+'"]')[0]
        currentIcon = $L(currentTree).closest('.lyteTreeMainContainer').find('LYTE-TREE-ICON')[0]

        if(currentTree){
          th.component.onOpenClasses(currentIcon , currentTree);
          // this.component.toggleAnimation($L( currentIcon).attr('class').split(" "),currentIcon,this,currentTree,targetElem);
        }

        if(currentIndex.length > 0){
          openRec()
        } else {
          return
        }

      }

      openRec()

    }

    this.$node.closeTree = function(targetElem , closeAllNodes){

      var currentParentTree = $L(targetElem).closest('LYTE-TREE')[0];


      var openedIcons = $L(targetElem).find('lyte-tree-icon.lyteIconOpened')
      var openedTrees = $L(targetElem).find('lyte-tree.lyteTreeOpened')
      var openedBodies = $L(targetElem).find('lyte-tree-body.lyteTreeBodyOpened')

      var currentIndex = $L(targetElem).attr('data-index')

      var currentTree = $L(targetElem).find('LYTE-TREE[index-var="'+currentIndex+'"]')
      var currentIcon = $L(openedIcons[0])
      var currentBody = $L(targetElem)


      if(currentTree.hasClass('lyteTreeOpened')){

        var closeTransition = function(){

          if(closeAllNodes){
            openedIcons.addClass('lyteIconClosed');
            openedIcons.addClass(this.getData('ltPropCloseClass'));
            openedIcons.removeClass('lyteIconOpened');
            openedIcons.removeClass(this.getData('ltPropOpenClass'));

            openedTrees.css({"display" : "none"});
            openedTrees.addClass('lyteTreeClosed');
            openedTrees.removeClass('lyteTreeOpened');
            openedTrees.css({"height" : "auto"});

            openedBodies.addClass('lyteTreeBodyOpened');
            openedBodies.addClass(currentTree.getData('ltPropWrapperOpenClass'));
            openedBodies.removeClass('lyteTreeBodyClosed');
            openedBodies.removeClass(currentTree.getData('ltPropWrapperCloseClass'));

          } else {
            currentIcon.addClass('lyteIconClosed');
            currentIcon.addClass(this.getData('ltPropCloseClass'));
            currentIcon.removeClass('lyteIconOpened');
            currentIcon.removeClass(this.getData('ltPropOpenClass'));

            currentTree.css({"display" : "none"});
            currentTree.addClass('lyteTreeClosed');
            currentTree.removeClass('lyteTreeOpened');
            currentTree.css({"height" : "auto"});

          }
          currentBody.addClass('lyteTreeBodyClosed');
          currentBody.addClass(this.getData('ltPropWrapperCloselass'));
          currentBody.removeClass('lyteTreeBodyOpened');
          currentBody.removeClass(this.getData('ltPropWrapperOpenClass'));

          currentTree.removeClass('treeTransRunning');

          currentTree[0].removeEventListener('transitionend' , closeTransition)

        }

        var closingTempHeight = currentTree[0].getBoundingClientRect().height;
        currentTree[0].style.height = closingTempHeight + "px";

        currentTree.addClass('treeTransRunning');

        setTimeout(function(){
          currentTree[0].style.height = "0px";
        },10)

        currentTree[0].addEventListener('transitionend', closeTransition);

      }


    }

    this.$node.openTree = function(targetElem , openAllNodes){

      var closedIcons = $L(targetElem).find('lyte-tree-icon.lyteIconClosed:not(.lyteTreeIconHasChild)')
      var closedTrees = $L(targetElem).find('lyte-tree.lyteTreeClosed')

      var currentIndex = $L(targetElem).attr('data-index')

      var currentTree = $L(targetElem).find('LYTE-TREE[index-var="'+currentIndex+'"]')
      var currentIcon = $L(closedIcons[0])

      if(currentTree.hasClass('lyteTreeClosed')){

        if(openAllNodes){
          closedIcons.addClass('lyteIconOpened');
          closedIcons.addClass(this.getData('ltPropOpenClass'));
          closedIcons.removeClass('lyteIconClosed');
          closedIcons.removeClass(this.getData('ltPropCloseClass'));

          closedTrees.css({"display" : ""});
          closedTrees.addClass('lyteTreeOpened');
          closedTrees.removeClass('lyteTreeClosed');
          closedTrees.css({"height" : "auto"});
        } else {
          currentIcon.addClass('lyteIconOpened');
          currentIcon.addClass(this.getData('ltPropOpenClass'));
          currentIcon.removeClass('lyteIconClosed');
          currentIcon.removeClass(this.getData('ltPropCloseClass'));

          currentTree.css({"display" : ""});
          currentTree.addClass('lyteTreeOpened');
          currentTree.removeClass('lyteTreeClosed');
        }

        var openTransition = function(){
          currentTree.removeClass('treeTransRunning');
          currentTree[0].style.height = "auto"

          currentTree[0].removeEventListener('transitionend', openTransition);
        }

        currentTree[0].style.display = "block";
        currentTree[0].style.height = "auto";
        var openingTempHeight = currentTree[0].getBoundingClientRect().height;
        currentTree[0].style.height = "0px";

        currentTree.addClass('treeTransRunning');
        setTimeout(function(){
          currentTree[0].style.height = openingTempHeight + "px";
          currentTree[0].addEventListener('transitionend', openTransition);
        },10)

      }

    }

  },

  focusNextNode : function(){

    var _thisTree = this;
    var currentActiveLTB = $L(document.activeElement).closest('lyte-tree-body')[0]
    var currentActiveParent = $L(document.activeElement).closest('.lyteTreeBodyDiv')[0]

    function focusNextElem(currentActiveLTB){

      if($L(currentActiveLTB).find('.lyteTreeBodyDiv')[0] && !($L(currentActiveLTB).hasClass('lyteTreeBodyClosed'))){
        $L(currentActiveLTB).find('.lyteTreeBodyDiv').eq(0).find('lyte-yield')[0].focus();
        // if($L(document.activeElement).hasClass('lyteTreeLastChild')){
        //   _thisTree.setData('ariaLiveContent' , 'You are currently on a last tree node')
        // }
        // else if($L(document.activeElement).find('lyte-tree-icon').eq(0).hasClass('lyteIconOpened')){
        //   _thisTree.setData('ariaLiveContent' , 'You are currently on a opened tree node to close press enter or space')
        // } else if(($L(document.activeElement).find('lyte-tree-icon').eq(0).hasClass('lyteIconOpened')) && !($L(document.activeElement).hasClass('lyteTreeLastChild'))){
        //   _thisTree.setData('ariaLiveContent' , 'You are currently on a closed tree node to open press enter or space')
        // }
        // _thisTree.setData('ariaLiveBoolean' , true);
      } else if(currentActiveParent){
        if(currentActiveParent.nextElementSibling){
          $L(currentActiveParent.nextElementSibling).find('lyte-yield')[0].focus();
          // if($L(document.activeElement).hasClass('lyteTreeLastChild')){
          //   _thisTree.setData('ariaLiveContent' , 'You are currently on a last tree node')
          // }
          // else if($L(document.activeElement).find('lyte-tree-icon').eq(0).hasClass('lyteIconOpened')){
          //   _thisTree.setData('ariaLiveContent' , 'You are currently on a opened tree node to close press enter or space')
          // } else if(($L(document.activeElement).find('lyte-tree-icon').eq(0).hasClass('lyteIconOpened')) && !($L(document.activeElement).hasClass('lyteTreeLastChild'))){
          //   _thisTree.setData('ariaLiveContent' , 'You are currently on a closed tree node to open press enter or space')
          // }
          // _thisTree.setData('ariaLiveBoolean' , true);
          return
        } else {
          currentActiveParent = $L(currentActiveParent.parentElement).closest('.lyteTreeBodyDiv')[0]
          focusNextElem()
        }
      } else {
        return
      }

    }

   focusNextElem(currentActiveLTB)

  },

  focusPreviousNode : function(){
    var currentActiveLTB = $L(document.activeElement).closest('lyte-tree-body')[0]
    var currentActiveParent = $L(document.activeElement).closest('.lyteTreeBodyDiv')[0]
    var tempTrees;

    if(currentActiveParent){
      if((!$L(currentActiveParent.previousElementSibling).find('lyte-tree-body').eq(0).hasClass('lyteTreeBodyClosed')) && ($L(currentActiveParent.previousElementSibling).hasClass('lyteTreeBodyDiv')) ){
        tempTrees = $L(currentActiveParent.previousElementSibling).find('lyte-yield');
        tempTrees[tempTrees.length-1].focus()
      } else if($L(currentActiveParent.previousElementSibling).find('lyte-tree-body').eq(0).hasClass('lyteTreeBodyClosed')){
        $L(currentActiveParent.previousElementSibling).find('lyte-tree-body').eq(0).find('lyte-yield')[0].focus()
      } else {
        if($L(currentActiveParent.parentElement).closest('.lyteTreeBodyDiv')[0]){
          $L(currentActiveParent.parentElement).closest('.lyteTreeBodyDiv').eq(0).find('lyte-yield')[0].focus()
        }
      }
    }
  },

  closeTreeNodeOrMoveOut : function(){
    var currentBody = $L(document.activeElement).closest('lyte-tree-body')[0]
    var currentIndex = $L(currentBody).attr('data-index')
    var currentTree = $L(currentBody).find('LYTE-TREE[index-var="'+currentIndex+'"]')

    var container = $L(currentTree).closest('.lyteTreeMainContainer')[0]

    if(($L(currentTree).hasClass('lyteTreeClosed')) || ($L(container).hasClass('lyteTreeHasChild'))){
      $L(currentBody).closest('LYTE-TREE-BODY[data-index="'+(currentIndex.slice(0, -2))+'"]')[0].focus()
    } else {
      if($L(currentBody).hasClass('lyteTreeBodyOpened')){
        $L(currentBody).find('lyte-tree-icon')[0].click();
      }
    }
  },
  openTreeNodeOrMoveIn : function(){
    var currentBody = $L(document.activeElement).closest('lyte-tree-body')[0]
    var currentIndex = $L(currentBody).attr('data-index')
    var currentTree = $L(currentBody).find('LYTE-TREE[index-var="'+currentIndex+'"]')

    var container = $L(currentTree).find('.lyteTreeMainContainer')[0]


    if($L(currentTree).hasClass('lyteTreeOpened')){
      $L(currentBody).find('LYTE-TREE-BODY[data-index="'+currentIndex+' 0"]')[0].focus()
    } else {
      if($L(currentBody).hasClass('lyteTreeBodyClosed')){
        $L(currentBody).find('lyte-tree-icon')[0].click();
      }
    }
  },

  toggleTreeNode : function(){
    $L(document.activeElement).find('lyte-tree-icon')[0].click();
  },

  didConnect: function() {

    var _thisTree = this;

    this.$node.keydownEvents = function(event){
      if(document.activeElement.tagName === 'LYTE-YIELD'){
        if(event.keyCode === 40){
          _thisTree.focusNextNode();
        }
      } else {
        if(event.shiftKey && (event.keyCode === 40)){
          _thisTree.focusNextNode();
        }
      }

      if(document.activeElement.tagName === 'LYTE-YIELD'){
        if(event.keyCode === 38){
          _thisTree.focusPreviousNode();
        }
      } else {
        if(event.shiftKey && (event.keyCode === 38)){
          _thisTree.focusPreviousNode();
        }
      }

      if(document.activeElement.tagName === 'LYTE-YIELD'){
        if(event.keyCode === 37){
          if($L(document.activeElement).find('lyte-tree-icon').hasClass('lyteIconOpened')){
            _thisTree.closeTreeNodeOrMoveOut();
          } else {
            _thisTree.focusPreviousNode();
          }
        }
        if(event.keyCode === 39){
          if($L(document.activeElement).find('lyte-tree-icon').hasClass('lyteIconClosed')){
            _thisTree.openTreeNodeOrMoveIn();
          } else {
            _thisTree.focusNextNode();
          }
        }
        if((event.keyCode === 13) || (event.keyCode === 32)){
          _thisTree.toggleTreeNode();
        }
      }
    }

    if(!$L(this.$node).attr('index-var')){
      document.addEventListener('keydown' , this.$node.keydownEvents)
    }

		if(this.getData('ltPropArrayData').length > 0){
			this.setData('dataType' , 'array')
		} else if(!this.getData('ltPropJsonData').lyteTreeEmptyObject && this.getData('ltPropArrayData').length <= 0){
			this.setData('dataType' , 'object')
		}
  },

  onOpenClasses : function(icon , tree){

    var value,
    __data = this.data;

    $L(icon).addClass('lyteIconOpened');

     ( value = __data.ltPropOpenClass ) && $L(icon).addClass( value );

    $L(icon).removeClass('lyteIconClosed');

    ( value = __data.ltPropCloseClass ) && $L(icon).removeClass( value );

    tree.style.display = 'block';
    $L(tree).addClass('lyteTreeOpened');
    $L(tree).removeClass('lyteTreeClosed');

    tree.style.height = "auto";

  },

  onCloseClasses : function(icon , tree){

    var value,
    __data = this.data;

    $L(icon).addClass('lyteIconClosed');
    ( value = __data.ltPropCloseClass ) && $L(icon).addClass( value );
    $L(icon).removeClass('lyteIconOpened');
    ( value = __data.ltPropOpenClass ) && $L(icon).removeClass( value );

    tree.style.display = 'none';
    $L(tree).addClass('lyteTreeClosed');
    $L(tree).removeClass('lyteTreeOpened');

    tree.style.height = "auto";

  },

  openrecursive: function(array) {
    if (array.length) {
      var newEl = array[0];
      array.shift();
      if (!newEl || $L(newEl).hasClass('lyteTreeOpened')) {
        this.openrecursive(array)
        return
      }
      var icon = newEl.parentElement.querySelector('lyte-tree-icon');
      clearTimeout(newEl._treetime);
      $L(newEl).removeClass('lyteTreeClosed');
      $L(newEl).addClass('lyteTreeOpened');
      $L(icon).removeClass('lyteIconClosed')
      $L(icon).addClass('lyteIconOpened');
      newEl.style.display = "";
      newEl.style.height = "auto";
      this.data.ltPropCloseClass && $L(icon).removeClass(this.data.ltPropCloseClass);
      this.data.ltPropOpenClass && $L(icon).addClass(this.data.ltPropOpenClass);
      newEl._treetime = setTimeout(this.heightcalc.bind(this, newEl, array), 0)
    }
  },

  heightcalc: function(elem, array) {
    if (!document.body.contains(elem)) {
      this.openrecursive(array);
      return
    }
    var height = elem.getBoundingClientRect().height;
    elem.style.height = 0;
    if (height == 0) {
      this.transEnd(elem, array)
    } else {
      setTimeout(this.heightset.bind(this, elem, array, height), 20)
    }
  },

  heightset: function(elem, array, height) {
    if (!document.body.contains(elem)) {
      this.openrecursive(array);
      return
    }
    elem.style.height = height + 'px';
    elem._trn = this.transEnd.bind(this, elem, array)
    elem.addEventListener('transitionend', elem._trn)
  },

  transEnd: function(elem, array) {
    elem.style.height = "auto"
    elem.removeEventListener('transitionend', elem._trn)
    delete elem._trn;
    this.openrecursive(array);
  },

  stateChange: function(arg) {
    if (arg.newValue) {
      var idx = arg.newValue,
        elements = [],
        tree = Array.from(this.$node.getElementsByTagName('lyte-tree')),
        _length = idx.length,
        fn = function(sliced, new_tree, item) {
          var value = item.component.data.tempVar;
          if (value.startsWith(sliced)) {
            new_tree.push(item);
          }
          return value == sliced;
        }

      for (var i = 1; i <= _length; i++) {
        var sliced = idx.slice(0, i),
          new_tree = [],

          filtered = tree.filter(fn.bind(this, sliced, new_tree));

        tree = new_tree;

        elements.push(filtered[0]);
      }
      this.openrecursive(elements)
      this.setData('ltPropStateAttr', '')
    }
  }.observes('ltPropStateAttr'),
  methods: {
    onToggle: function() {},
    onToggleEnd: function() {},
    onBeforeOpen : function() {},
    onOpen : function() {},
    onBeforeClose : function() {},
    onClose : function() {}
  },
	actions : {
		openArray : function(th){
			if(!this.getData('lyteTreeArrayOpened')){
        this.executeMethod('onBeforeOpen' , this.getData('ltPropArrayData') , this.$node)
				this.setData('lyteTreeArrayOpened' , true)
        this.setData('lyteTreeArrayLength' , this.getData('ltPropArrayData').length)
        if($L(this.$node).hasClass('lyteDataTreeSubLevel')){
          this.setData('arrayOpened' , true)
        }else {
          this.setData('arrayOpened' , false)
        }
        this.executeMethod('onOpen' , this.getData('ltPropArrayData') , this.$node)
			} else {
        this.executeMethod('onBeforeClose' , this.getData('ltPropArrayData') , this.$node)
				this.setData('lyteTreeArrayOpened' , false)
        this.setData('lyteTreeArrayLength' , 0)
        this.setData('arrayOpened' , false)
        this.executeMethod('onClose' , this.getData('ltPropArrayData') , this.$node)
			}
		},
		openJson : function(th){
			if(!this.getData('lyteTreeJsonOpened')){
        this.executeMethod('onBeforeOpen' , this.getData('ltPropJsonData') , this.$node)
				this.setData('lyteTreeJsonOpened' , true)
        if($L(this.$node).hasClass('lyteDataTreeSubLevel')){
          this.setData('jsonOpened' , true)
        } else {
          this.setData('jsonOpened' , false)
        }
        this.executeMethod('onOpen' , this.getData('ltPropJsonData') , this.$node)
			} else {
        this.executeMethod('onBeforeClose' , this.getData('ltPropJsonData') , this.$node)
				this.setData('lyteTreeJsonOpened' , false)
        this.setData('jsonOpened' , false)
        this.executeMethod('onClose' , this.getData('ltPropJsonData') , this.$node)
			}
		}
	},
  didDestroy : function(){
    document.removeEventListener('keydown' , this.$node.keydownEvents)
  }
});

if (!_lyteUiUtils.registeredCustomElements['lyte-tree-icon']) {

  _lyteUiUtils.registeredCustomElements['lyte-tree-icon'] = true

  Lyte.createCustomElement("lyte-tree-icon", {
    connectedCallback: function() {
      var currTreeElem = $L(this).closest('lyte-tree');
      if (currTreeElem.hasClass('lyteTreeClosed')) {
        currTreeElem[0].style.display = 'none';
      }
      if (!this.hasAttribute('lyte-custom-icon')) {
        this.innerHTML = '<i class="arrow up"></i>';
      }
    },
    constructor: function() {
      var res = true;
      var classComponent = $L(this).closest('lyte-tree')[0]
      var lyteTreeIcon = this;
      var iconCorresTree = $L(this).closest('.lyteTreeMainContainer').find('lyte-tree')[0]
      if (iconCorresTree) {
        if ($L(iconCorresTree).hasClass('lyteTreeOpened')) {
          $L(lyteTreeIcon).addClass('lyteIconOpened ' + classComponent.getData('ltPropOpenClass'))
        } else if ($L(iconCorresTree).hasClass('lyteTreeClosed')) {
          $L(lyteTreeIcon).addClass('lyteIconClosed ' + classComponent.getData('ltPropCloseClass'))
        }
      } else {
        $L(lyteTreeIcon).addClass('lyteIconClosed ' + classComponent.getData('ltPropCloseClass'))
      }

      if ($L(this).closest('.lyteTreeMainContainer').hasClass('lyteTreeHasChild') ||
        $L(this).closest('.lyteTreeMainContainer').hasClass('lyteTreeMaxedChild')) {
        $L(lyteTreeIcon).addClass('lyteIconClosed lyteTreeIconMaxed lyteTreeIconHasChild ' + classComponent.getData('ltPropCloseClass'))
      }

      var closeTransBoolean = false
      var openTransBoolean = false

      this.addEventListener('click' , function(eve){

        var currentMainContainer = $L(lyteTreeIcon).closest('.lyteTreeMainContainer')[0]

        if($L(currentMainContainer).hasClass('lyteTreeLastChild')){
          return
        }

        var currentTreeBody = $L(lyteTreeIcon).closest('LYTE-TREE-BODY')
        var currentTree = $L(lyteTreeIcon).closest('LYTE-TREE')[0]
        var currentChildTree = $L(currentTreeBody).find('LYTE-TREE')[0]
        var iconClassList = $L(this).attr('class').split(" ");
        var res;
        var resBoolean = false;

        if (currentTree && currentTree.getMethods('onToggle')) {
          res = currentTree.component.executeMethod('onToggle', currentTreeBody[0], eve, currentTree, lyteTreeIcon , currentTree.getData('ltPropData'));
          if (res === undefined) {
            res = true
          }
        }

        if (res !== undefined) {
          if (res && res.then) {
            res.then(function(arg) {
              lyteTreePromiseFun();
            }, function() {});
          } else {
            if (res) {
              lyteTreePromiseFun();
            }
          }
          currentChildTree = $L(currentTreeBody).find('LYTE-TREE')[0]
        } else {
          lyteTreePromiseFun();
          currentChildTree = $L(currentTreeBody).find('LYTE-TREE')[0]
        }

        if(!currentChildTree){
          return
        }


        function closingTransition(){

          $L(currentChildTree).addClass('lyteTreeClosed');
          $L(currentChildTree).removeClass('lyteTreeOpened');

          $L(currentChildTree).removeClass('treeTransRunning');

          closeTransBoolean = false
          currentChildTree.removeEventListener('transitionend', closingTransition);
          if (currentTree && currentTree.getMethods('onToggleEnd') && eve) {
            res = currentTree.component.executeMethod('onToggleEnd', currentTreeBody[0], eve, currentTree, lyteTreeIcon , currentTree.getData('ltPropData'));
            if (res === undefined) {
              res = true
            }
          }
        }

        function openingTransition(){

          $L(currentChildTree).removeClass('treeTransRunning');
          openTransBoolean = false
          currentChildTree.removeEventListener('transitionend', openingTransition);
          currentChildTree.style.height = "auto";
          if (currentTree && currentTree.getMethods('onToggleEnd') && eve) {
            res = currentTree.component.executeMethod('onToggleEnd', currentTreeBody[0], eve, currentTree, lyteTreeIcon , currentTree.getData('ltPropData'));
            if (res === undefined) {
              res = true
            }
          }
        }

        if(iconClassList.indexOf('lyteIconOpened') > -1){
          // tree to be closed

          $L(lyteTreeIcon).addClass('lyteIconClosed');
          $L(lyteTreeIcon).addClass(currentTree.getData('ltPropCloseClass'));
          $L(lyteTreeIcon).removeClass('lyteIconOpened');
          $L(lyteTreeIcon).removeClass(currentTree.getData('ltPropOpenClass'));

          if(currentTree.getData('ltPropToggleAnimation')){
            var closingTempHeight = currentChildTree.getBoundingClientRect().height;
            currentChildTree.style.height = closingTempHeight + "px";

            $L(currentChildTree).addClass('treeTransRunning');

            setTimeout(function(){
              currentChildTree.style.height = "0px";
            },10)

            currentChildTree.addEventListener('transitionend', closingTransition);

          } else {

            currentChildTree.style.height = "0px";

          }

          $L(currentTreeBody).addClass('lyteTreeBodyClosed');
          $L(currentTreeBody).addClass(currentTree.getData('ltPropWrapperCloseClass'));
          $L(currentTreeBody).removeClass('lyteTreeBodyOpened');
          $L(currentTreeBody).removeClass(currentTree.getData('ltPropWrapperOpenClass'));

        } else if(iconClassList.indexOf('lyteIconClosed') > -1){

          // tree to be opened

          $L(lyteTreeIcon).removeClass('lyteIconClosed');
          $L(lyteTreeIcon).removeClass(currentTree.getData('ltPropCloseClass'));
          $L(lyteTreeIcon).addClass('lyteIconOpened');
          $L(lyteTreeIcon).addClass(currentTree.getData('ltPropOpenClass'));

          if($L(lyteTreeIcon).closest('.lyteTreeMainContainer').hasClass('lyteTreeHasChild')){
            $L(lyteTreeIcon).closest('.lyteTreeMainContainer').removeClass('lyteTreeHasChild')
            $L(lyteTreeIcon).removeClass('lyteTreeIconHasChild')
            if($L(lyteTreeIcon).closest('lyte-tree-body').attr('data-index').split(' ').length < currentTree.getData().ltPropMaxLevel){
              $L(lyteTreeIcon).removeClass('lyteTreeIconMaxed')
            }
          }

          $L(currentChildTree).addClass('lyteTreeOpened');
          $L(currentChildTree).removeClass('lyteTreeClosed');


          if(currentTree.getData('ltPropToggleAnimation')){

            currentChildTree.style.display = "block";
            currentChildTree.style.height = "auto";
            var openingTempHeight = currentChildTree.getBoundingClientRect().height;
            currentChildTree.style.height = "0px";

            $L(currentChildTree).addClass('treeTransRunning');
            setTimeout(function(){
              currentChildTree.style.height = openingTempHeight + "px";
            },10)

            currentChildTree.addEventListener('transitionend', openingTransition);

          } else {

            currentChildTree.style.height = "auto";

          }

          $L(currentTreeBody).removeClass('lyteTreeBodyClosed');
          $L(currentTreeBody).removeClass(currentTree.getData('ltPropWrapperCloseClass'));
          $L(currentTreeBody).addClass('lyteTreeBodyOpened');
          $L(currentTreeBody).addClass(currentTree.getData('ltPropWrapperOpenClass'));

        }


        function lyteTreePromiseFun() {
          var treeDt = currentTree.getData('ltPropData');
          var path = $L(currentTreeBody).attr('data-index').split(" ");

          if (path.length < 2) {
            var pathIndex = path[0];
            var x = treeDt[pathIndex];
            if (x !== undefined) {
              Lyte.objectUtils(x, 'add', 'collapsed', false);
              if(x.hasChild){
                Lyte.objectUtils(x, 'add', 'hasChild', false);
              }
            }
          } else {
            var x = treeDt;
            for (var pathIndex = 1; pathIndex < path.length; pathIndex++) {
              var x = treeDt[path[pathIndex]];
            }
            Lyte.objectUtils(x, 'add', 'collapsed', false)
            if(x.hasChild){
              Lyte.objectUtils(x, 'add', 'hasChild', false)
            }
          }
          if(x[currentTree.getData('ltPropChildrenValue')]){
            if(x[currentTree.getData('ltPropChildrenValue')].length > 0){
              currentTree.openIcon($L(currentTreeBody).find('lyte-tree-icon')[0])
            }
          }
          resBoolean = true;
        }


      }.bind(this))

    },
    static: {
      "observedAttributes": {}
    }
  });

}

if (!_lyteUiUtils.registeredCustomElements['lyte-tree-content']) {
  _lyteUiUtils.registeredCustomElements['lyte-tree-content'] = true;

  Lyte.createCustomElement("lyte-tree-content", {
    static: {
      "observedAttributes": {
        get: function() {
          return [];
        }
      }
    },

    "connectedCallback": function() {
      var level = $L(this).closest('lyte-tree-body')[0].getAttribute('data-index').split(' ').length;
      this.setAttribute('lyte-tree-level', level)
    }
  });
}



/**
 * @syntax yielded
 *	 <lyte-tree>
 *	 <template is="registerYield" yield-name="content">
 *			 <lyte-tree-content onclick="{{action('test')}}">
 *				 <lyte-tree-icon lyte-custom-icon>
 *					 <div set-level="{{treeCheck(this)}}"></div>
 *						 <div class="collapseBox">
 *							 <div class="arrow"></div>
 *						 </div>
 *				 </lyte-tree-icon>
 *			 </lyte-tree-content>
 *		 </template>
 *	 </lyte-tree>
 */
