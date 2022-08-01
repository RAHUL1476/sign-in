# Lyte Editor Doc <!-- omit in toc -->

Lyte Editor is a wrapper component over [Monaco editor](https://microsoft.github.io/monaco-editor/) (the code editor that powers VS Code). It is having rich intellisense and real time validations for javascript.

## Table of contents <!-- omit in toc -->

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Run this command](#run-this-command)
- [Properties](#properties)
  - [lt-prop-base-path](#lt-prop-base-path)
  - [lt-prop-value](#lt-prop-value)
  - [lt-prop-default-value](#lt-prop-default-value)
  - [lt-prop-load-on-demand](#lt-prop-load-on-demand)
  - [lt-prop-language](#lt-prop-language)
  - [lt-prop-resource-strings](#lt-prop-resource-strings)
  - [lt-prop-toolbar](#lt-prop-toolbar)
  - [lt-prop-resource-links](#lt-prop-resource-links)
  - [lt-prop-compiler-options](#lt-prop-compiler-options)
  - [lt-prop-custom-css-path](#lt-prop-custom-css-path)
  - [lt-prop-options](#lt-prop-options)
  - [lt-prop-toolbar-yield](#lt-prop-toolbar-yield)
  - [lt-prop-cdn-link](#lt-prop-cdn-link)
  - [lt-prop-base-css-added](#lt-prop-base-css-added)
  - [lt-prop-render-in-shadow-root](#lt-prop-render-in-shadow-root)
  - [lt-prop-colorize](#lt-prop-colorize)
  - [lt-prop-colorize-options](#lt-prop-colorize-options)
  - [lt-prop-listen-for-markings-change](#lt-prop-listen-for-markings-change)
  - [lt-prop-i18n-language](#lt-prop-i18n-language)
  - [lt-prop-editor-type](#lt-prop-editor-type)
  - [lt-prop-diff-editor-toolbar](#lt-prop-diff-editor-toolbar)
  - [lt-prop-diff-editor-options](#lt-prop-diff-editor-options)
  - [lt-prop-original-diff-model](#lt-prop-original-diff-model)
  - [lt-prop-modified-diff-model](#lt-prop-modified-diff-model)
- [Methods](#methods)
  - [on-before-load](#on-before-load)
  - [<del>on-load</del>](#delon-loaddel)
  - [on-value-change](#on-value-change)
  - [on-before-each-request](#on-before-each-request)
  - [on-after-each-request](#on-after-each-request)
  - [on-after-all-requests](#on-after-all-requests)
  - [on-tool-click](#on-tool-click)
  - [on-options-update](#on-options-update)
  - [on-markings-change](#on-markings-change)
  - [on-editor-type-change](#on-editor-type-change)
  - [on-basic-editor-load](#on-basic-editor-load)
  - [on-diff-editor-load](#on-diff-editor-load)
  - [on-original-diff-model-value-change](#on-original-diff-model-value-change)
  - [on-modified-diff-model-value-change](#on-modified-diff-model-value-change)
  - [on-diff-editor-options-update](#on-diff-editor-options-update)
- [Utility Functions](#utility-functions)
  - [updateOptions](#updateoptions)
  - [triggerAction](#triggeraction)
  - [<del>loadEditor</del>](#delloadeditordel)
  - [getMarkingsInModel](#getmarkingsinmodel)
  - [getModelInfo](#getmodelinfo)
  - [hasModifiedContent](#hasmodifiedcontent)
  - [labelledLibs](#labelledlibs)
    - [labelledLibs.getAll()](#labelledlibsgetall)
    - [labelledLibs.getActive()](#labelledlibsgetactive)
    - [labelledLibs.emptyCache()](#labelledlibsemptycache)
    - [labelledLibs.resetLibs()](#labelledlibsresetlibs)
    - [labelledLibs.add()](#labelledlibsadd)
    - [labelledLibs.addLink()](#labelledlibsaddlink)
    - [labelledLibs.removeFromCache()](#labelledlibsremovefromcache)
    - [labelledLibs.modify()](#labelledlibsmodify)
  - [restrictedEditor](#restrictededitor)
    - [restrictedEditor.create()](#restrictededitorcreate)
    - [restrictedEditor.load()](#restrictededitorload)
    - [restrictedEditor.createAndLoad()](#restrictededitorcreateandload)
    - [restrictedEditor.getCurrentMutableValues()](#restrictededitorgetcurrentmutablevalues)
    - [restrictedEditor.getCurrentCodeBlock()](#restrictededitorgetcurrentcodeblock)
  - [updateEditorLayout](#updateeditorlayout)
  - [editorActions](#editoractions)
    - [editorActions.add()](#editoractionsadd)
    - [editorActions.dispose()](#editoractionsdispose)
    - [editorActions.disposeAll()](#editoractionsdisposeall)
    - [editorActions.list()](#editoractionslist)
  - [loadBasicEditor](#loadbasiceditor)
  - [loadDiffEditor](#loaddiffeditor)
  - [updateDiffEditorOptions](#updatediffeditoroptions)
  - [createDiffNavigator](#creatediffnavigator)
  - [updateDiffNavigatorOptions](#updatediffnavigatoroptions)
  - [updateCompilerOptions](#updatecompileroptions)
  - [getCurrentTheme](#getcurrenttheme)
  - [createModel](#createmodel)
  - [setBasicEditorModel](#setbasiceditormodel)
- [API - Lyte.Editor](#api---lyteeditor)
  - [addLib](#addlib)
  - [defineTheme](#definetheme)
  - [registerFormatter](#registerformatter)
  - [registerValidator](#registervalidator)
  - [setLangConfig](#setlangconfig)
  - [CodeBlock](#codeblock)
    - [Instructions](#instructions)
    - [Fallback Content](#fallback-content)
    - [ID](#id)
    - [CodeBlock.Register()](#codeblockregister)
    - [CodeBlock.Override()](#codeblockoverride)
    - [CodeBlock.registeredInstances()](#codeblockregisteredinstances)
    - [CodeBlock.getCodeBlockEntity()](#codeblockgetcodeblockentity)
    - [Example](#example)
  - [CompletionProvider](#completionprovider)
    - [CompletionProvider.Register()](#completionproviderregister)
    - [CompletionProvider.Override()](#completionprovideroverride)
    - [CompletionProvider.Dispose()](#completionproviderdispose)
  - [I18n](#i18n)
    - [I18n.addLocale()](#i18naddlocale)
    - [I18n.overrideLocale()](#i18noverridelocale)
    - [I18n.prepareLocaleKey()](#i18npreparelocalekey)
    - [I18n.getValueOf()](#i18ngetvalueof)
    - [I18n.currentLocale](#i18ncurrentlocale)
    - [I18n.registeredLangs](#i18nregisteredlangs)
  - [UpdateEnum](#updateenum)
- [Yield Support](#yield-support)
  - [Yield for Toolbar](#yield-for-toolbar)
  - [Yield for Header](#yield-for-header)
  - [Yield for Footer](#yield-for-footer)
- [Including Library scripts](#including-library-scripts)
  - [Method 1 - using attribute data](#method-1---using-attribute-data)
  - [Method 3 - using resource links](#method-3---using-resource-links)
- [Dependencies](#dependencies)
- [Usage](#usage)
  - [Install Lyte Editor](#install-lyte-editor)
  - [Include Styles](#include-styles)
  - [Include Scripts](#include-scripts)
  - [Sample syntax](#sample-syntax)
- [Standalone Version](#standalone-version)
  - [Handling of Events](#handling-of-events)
    - [beforeLoad](#beforeload)
- [Type Definitions](#type-definitions)
  - [ConfigurationObject](#configurationobject)
  - [ConfigurableLanguage](#configurablelanguage)
  - [MarkerObject](#markerobject)
  - [EditorType](#editortype)
  - [EditorState](#editorstate)
  - [Marking](#marking)
  - [CodeBlockInstance](#codeblockinstance)
  - [CodeBlockEntity](#codeblockentity)
  - [EditorActionInstance](#editoractioninstance)
  - [changeObject](#changeobject)
  - [SeverityType](#severitytype)
  - [themeData](#themedata)
  - [languageName](#languagename)
  - [Colors](#colors)
    - [List of valid color names](#list-of-valid-color-names)
  - [TokenThemeRule](#tokenthemerule)
  - [BuiltinTheme](#builtintheme)
  - [Marker](#marker)
  - [CompletionProviderInstance](#completionproviderinstance)
  - [ModelInfo](#modelinfo)
  - [Range](#range)
  - [LyteEditorToolObject](#lyteeditortoolobject)
  - [List of valid action names](#list-of-valid-action-names)
- [Glossary](#glossary)
  - [List of Options](#list-of-options)
- [Breaking Changes](#breaking-changes)
  - [V2.0.0](#v200)
  - [V1.1.2](#v112)
<!-- toc -->

## Installation

### Prerequisites

The application must be a node app, preferably a Lyte Application

### Run this command 

```bash
npm install lyte-editor --registry http://integ-docker:4873 
```

## Properties

- lt-prop-base-path : { string }
- lt-prop-value : { string , default = '' }
- lt-prop-default-value : { string, default = '' }
- lt-prop-load-on-demand : { object, default = {
  
    [ Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR ] : false,

    [ Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR ] : false

  } }
- lt-prop-toolbar : { array , default = [] }
- lt-prop-resource-links : { array, default = [] }
- lt-prop-language : { string, default = 'plaintext' }
- lt-prop-resource-strings : { array , default : [] }
- lt-prop-options : { object , default : {} }
- lt-prop-toolbar-yield : { boolean, default : false }
- lt-prop-compiler-options : { object, default : {} }
- lt-prop-cdn-link : { string, default : '' }
- lt-prop-base-css-added : { boolean, default : false }
- lt-prop-render-in-shadow-root : { boolean, default : false }
- lt-prop-colorize : { boolean, default : false }
- lt-prop-colorize-options : { object, default : {}}
- lt-prop-listen-for-markings-change : { boolean, default : false}
- lt-prop-i18n-language : { string }
- lt-prop-editor-type : { string, default : Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR }
- lt-prop-diff-editor-toolbar : { array }
- lt-prop-diff-editor-options : { object , default : {}}
- lt-prop-original-diff-model : { object }
- lt-prop-modified-diff-model : { object }
  
### lt-prop-base-path

 This property holds the relative path of the monaco editor folder inside the lyte editor addon. An Error will be thrown, if value for this attribute is not present

### lt-prop-value

This property holds the actual content inside the editor and on interaction with the editor this value will be updated. When this value  changes, on-value-change method will be triggered.

### lt-prop-default-value

This property holds the content that has to be set when the editor is resetted.If this value is not provided, then the initial content of the lt-prop-value will be taken as default value.

### lt-prop-load-on-demand

`Warning` : The boolean version of this property is deprecated @v2.0.0

This property is used to load the editor manually. By default, this property will be false for both the `BASIC_EDITOR` and `DIFF_EDITOR`.
If user wishes to load the editor manually, user has to set these properties to true and call **loadBasicEditor** (or) **loadDiffEditor** util to load the editor.

### lt-prop-language

This property holds the language of the content inside the editor. Based on this property the intellisense, syntax coloring and code validations are done.

### lt-prop-resource-strings

This property holds the array of libraries strings, which are shown in the auto completions of the javascript language editor. This is where the custom intellisense functions which are used in the content have to be provided. By this way the intellisense of the javascript can be extended.

### lt-prop-toolbar

This property holds the array of tools which has to be displayed in the toolbar.This property is a heterogenous array, and accepts both string and object.If string is given, default built-in configuration and css is applied to the tools. Incase of object, that configuration can be overridden.

**Sample Toolbar:**

```js
ltPropToolbar = [
  'undo', // for this tool built-in configuration is taken and triggers 'Undo' action
  'redo',
  {
    'keyBindings' :{
      'align' : 'right', // By default all tools align to left, this is to override that alignment
      'throwEvent' : true, // this will throw the click event to 'onToolClick' method , so user can handle that click event
      'preventHoverClass':false // By default for right side icons hover class is prevented, that can be override here
    }
  },
  {
    'fontSize':{
      // By default, fontSize is displayed as a dropdown, this options will override the default options of the dropdown
      'options':[
        '6px','8px','10px','14px','20px'
      ],
      'default':'8px' // By default , first value of options will be used. * Note : the value provided in ltPropOptions.fontSize will have the highest priority
    }
  },
  {
    'help':{
      'class':'someClassToBeAdded',// By default, a class named 'lyteEditorTool-<toolname>' will be added. this will override that class
      'noTitle':true// this is to prevent the title
    }
  },
  {
    'comment':{
      'triggerAction':'addComment',// By default the name 'comment' will be taken as action name, this key will override that and call 'addComment' action
      'label':'Add Comment'// By default 'comment' will be the title displayed on hover , this will override that
    }
  }
]
```

### lt-prop-resource-links

This property holds the array of links, from which a xhr call is made and the response of the request will be injected as library. This is another way of providing custom intellisense functions.This property works with the help of promises.Methods are triggered to get more hold on the XMLHttpRequest object.

### lt-prop-compiler-options

`Warning`: This property is removed - Use [setLangConfig](#setLangConfig) (or) [updateCompilerOptions](#updatecompileroptions)

This property holds the value to be set to the compiler of languages used in the monaco. The value has to be type of Object< language:String< [languageName](#languagename) >,options:Object< [compilerOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.typescript.compileroptions.html) > >

**Sample Compiler Options:**

```js
ltPropCompilerOptions = {
    javascript : {
      noLib : true
    }
}
```

### lt-prop-custom-css-path

This property is used to load `custom css` inside the iframe which contains the monaco editor.
As far now, multiple css files are not supported. Consolidate all the files to a single css file and include the path of that css in this attribute.

> It is observed that monaco editor sets the styles regarding colors as inline styles, so inorder to change the colors you have to use [defineTheme](#definetheme) Api 

### lt-prop-options

This property holds the options to control the UI and the behavior of the editor.The Available options for monaco editor are listed [here](https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#editoroptions)

**Sample Options:**

```js
ltPropOptions = {
    wordWrap : true,
    theme : 'vs-dark',
    lineNumbers : 'on',
    formatOnType : true
}
```

### lt-prop-toolbar-yield

This property holds the state of the toolbar yield and this can be toggled to show the yielded toolbar

### lt-prop-cdn-link

This property holds the CDN source link for the monaco editor. If CDN link is provided then it will be prioritized more than the lt-prop-base-path

### lt-prop-base-css-added

This property holds the state for the base css of the lyte-editor. By default, this property will be false. If developer wishes to take care of the bundling and loading of the lyte-editor's base css, then this property has to be made true

### lt-prop-render-in-shadow-root

This property holds the state for the shadow root rendering of the lyte-editor. If the user wishes to include more than one editor instance, then making this property as true will make the source js shared which in turn loads the editor instances more quickly

### lt-prop-colorize

This property holds the state for colorizing the provided content. This is a exclusive feature that allows the user to create a mock of the code editor with all the syntax highlighting. This will render the contents of the value as static in a div

### lt-prop-colorize-options

This property holds the options for colorizing the provided content. All the available options for colorizing is listed [here](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.icolorizerelementoptions.html)

### lt-prop-listen-for-markings-change

This property holds the state for listening the changes in the markings. As listening the markings changes are a costly, This boolean value is provided so that user can enable it only the required editor instances. By default this value will be false

### lt-prop-i18n-language

This property holds the language of the monaco editor's contents. The list of supported languages by monaco editor is available in `Lyte.Editor.LANGS_SUPPORTED_BY_MONACO`. If no value (or) unavailable value is provided then, `en_us` will be taken into account

### lt-prop-editor-type

This property holds the type of the editor which has to be shown. This toggles between the two states as `Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR` and `Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR` . This property defaults to `Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR`

### lt-prop-diff-editor-toolbar

This property holds the toolbar array which has to be shown when the lt-prop-editor-type is changed to the `Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR`. This defaults to an empty array.

### lt-prop-diff-editor-options

This property holds the options which has to be set to the diffEditorInstance. All the available options are listed [here](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html)

### lt-prop-original-diff-model

This property holds the contents needed for the construction of the original diff model. This model will be used as a base for comparison in the Diff Editor. The allowed keys for this property are `value`,`language` and `uri`.

The value will provide the content of the model
The language will account for syntax highlighting of the model content
The Uri will be used for identifying the model.

> Among these keys, the value key is a required key and the uri key is a non updatable value. The value and language are watched and can be updated in runtime

`This model is by default a read-only model`

### lt-prop-modified-diff-model

This property holds the contents needed for the construction of the modified diff model. This model will be used as a output for comparison in the Diff Editor. The allowed keys for this property are `value`,`language` and `uri`.

The value will provide the content of the model
The language will account for syntax highlighting of the model content
The Uri will be used for identifying the model.

> Same as original diff model, the value is required and updatable, language is updatable, and uri is not updatable.

## Methods

- on-before-load
- <del>on-load</del> - `Deprecated`
- on-value-change
- on-before-each-request
- on-after-each-request
- on-after-all-requests
- on-tool-click
- on-options-update
- on-markings-change
- on-editor-type-change
- on-basic-editor-load
- on-diff-editor-load
- on-original-diff-model-value-change
- on-modified-diff-model-value-change
- on-diff-editor-options-update

### on-before-load

`args : [ lyteEditorNode <HTMLElement> ]`

This method is called before the rendering of the lyte editor.

### <del>on-load</del>

`Warning`  : Deprecated @v2.0.0

`args : [ lyteEditorNode <HTMLElement> ]`

This method is called after the rendering of the lyte editor.

### on-value-change

`args : [ Object<changeObject> , currentValue <string> ]`

This method is called after each value change in the editor. The second argument of this method contains the current value in the editor.

> This will only work for the `Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR`

### on-before-each-request

`args : [ xhrObject <XMLHttpRequest> ]`

This method is called before the xhr is sent. Custom Header and other changes in the xhr object can be done here. If returned false, the request for the link will not be made.

### on-after-each-request

`args : [ xhrObject <XMLHttpRequest> ]`

This method is called after the xhr request is completed. If any value additions are needed for the xhr's response text, it can be provided here. If any string value is returned , that value will be used in the library else the response text of the xhr will be used.

### on-after-all-requests

`args : [ arrayOfResults <array < boolean|error > > ]`

This method is called after all xhr requests are completed. The arrayOfResults holds the status of the link, whether the xhr request was a success / failure.

### on-tool-click

`args : [ tool<LyteEditorToolObject>, htmlNode<HTMLElement>, event<Event> ]`

This method is called for the tools which has 'throwEvent : true',(refer: Sample Toolbar) For those tools the default action is not called , user has to handle the actions

### on-options-update

`args : [ updatedOptions <Object(option,value)> ]`

This method will get called after any options change in the editor. The updatedOptions will contain a list of valid updated options.

> This will only work for the `Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR`

### on-markings-change

`args : [Array<Markings>]`

This method will get called if there is any detectable syntax errors in the editor. This will only be called for the editorType `Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR` and only if [lt-prop-listen-for-markings-change](#lt-prop-listen-for-markings-change) is true

### on-editor-type-change

`args : [newEditorState <EditorState>, oldEditorState <EditorState>]`

This method will be called whenever the editor type changes and this will provide the state instance of the new editor and old editor.

### on-basic-editor-load

`args : [lyteEditorNode <HTMLElement>, monaco <Object>, basicEditorInstance <Object>]`

This method will be called after the basic editor instance is loaded. This is one of the alternative for the deprecated on-load method

### on-diff-editor-load

`args : [lyteEditorNode <HTMLElement>, monaco <Object>, diffEditorInstance <Object>]`

This method will be called after the diff editor instance is loaded. This is the another alternative for the deprecated on-load method.

### on-original-diff-model-value-change

`args : [ Object<changeObject> , currentValue <string> ]`

This method is called after each value change in the modified diff model of the editor. The second argument of this method contains the current value in the editor.

> This will only work for the `Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR`

> This method will not work by default, as the original model will be read-only by default

### on-modified-diff-model-value-change

`args : [ Object<changeObject> , currentValue <string> ]`

This method is called after each value change in the modified diff model of the editor. The second argument of this method contains the current value in the editor.

> This will only work for the `Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR`
### on-diff-editor-options-update

`args : [ updatedOptions <Object(option,value)> ]`

This method will get called after any options change in the diff editor. The updatedOptions will contain a list of valid updated options.

## Utility Functions

### updateOptions

`args : [ key , value ] | [ optionsToUpdate ]`

- key : { string }

- value : { (string | number | boolean | array) } *( based on key )*

- optionsToUpdateobject : { object } *( set of key value pairs )*

### triggerAction

`args : [ actionName ]`

- actionName - { string } - [list of valid names](#list-of-valid-action-names)
  
`returns : undefined`

### <del>loadEditor</del>

`Warning`  : Deprecated @v2.0.0

`args : [ ]`

`returns : undefined`

This util is provided to load the editor manually. For this util to work the properly lt-prop-load-on-demand must be set to true

### getMarkingsInModel

`args : [ severity? ]`

- severity : { [SeverityType](#severitytype) }

`returns : Array<Marker>`

This util returns an array of [Marker](#marker) based on the severity. If the severity argument is not given, all the model markers are returned.

### getModelInfo

`args : [ includeSelection? ]`

- includeSelection : { boolean }

`returns : Object<ModelInfo>`

This util returns an object of [ModelInfo](#modelinfo). This util can be used to get the character count, line count and other basic information about the current model.

_Note: All the editable content is referred as model here. An editor can also have multiple models_

### hasModifiedContent

`args : [ ]`

`returns : boolean`

This util returns a boolean whether the content of the model is different from the default value

### labelledLibs

This is an object which holds certain API's to interact with the caching of labelled libraries

This can be used to dynamically add/remove the libraries used for suggestions

#### labelledLibs.getAll()

`args : []`

`returns : Object<label:string , value :(array|string)>`

This, as name explains, will return all the cached libraries available in the lyte-editor

#### labelledLibs.getActive()

`args : []`

`returns : Array<label:string>`

This will return all the libraries that are currently active in the editor model

#### labelledLibs.emptyCache()

`args : []`

`returns : undefined`

This method will remove all the cached values, but this `wont remove the libraries from the existing model`

#### labelledLibs.resetLibs()

`args : []`

`returns : undefined`

This method will remove all the cached values, and removes all the libraries from the existing model, So that after this method `only statically added libraries will be available`
> Static libraries : libraries that are added using `ltPropResourceString` and `ltPropResourceLinks`

#### labelledLibs.add()

`args : [Object<label:string, value:(array|string)> , overwrite?:boolean]`

`returns : undefined`

This function is the dynamic counter part for `ltPropResourceStrings`and labels will be expected as an unique string. Existings labels can be overwritten by setting the `overwrite flag to true` Otherwise, the added values will throw a warning

This labels will be used to activate and deactivate libraries later on.

#### labelledLibs.addLink()

`args : [Object<label:string , link :(array|string)>, overwrite?:boolean]`

`returns : undefined`

This function is the dynamic counter part to `ltPropResourceLinks` and is similar to the add function, but in this case instead of strings,the links will be used to make an `XMLHttpRequest` and the response contents will be used as the library strings.

This function also triggers the methods like,
`onBeforeEachRequest`,`onAfterEachRequest` and `onAfterAllRequests`, just like ltPropResourceLinks

#### labelledLibs.removeFromCache()

`args: [ ...Array<label:string> ]`

`returns : undefined`

This function will remove specific libraries from the cache.

This method serves best, when some libraries are no more needed and can be removed to free up the memory.

> Note : Only the cache is removed, library will be still available in the editor model

#### labelledLibs.modify()

`args : [ toActivate :(Array<label:string> | boolean), toDeactivate :(Array<label:string> | boolean) ]`

`returns : undefined`

This method is used to toggle between the loaded libraries.
Send the array of labels to activate in the first argument and labels to deactivate in the second argument
In order to activate (or) deactivate all the libraries, send `true` instead of array of labels

> `Activate will have more precedence over the deactivate`, hence if both are having same entries of labels, then deactivate of that label will become invalid

### restrictedEditor

`Available from v1.3.0`

This is an object which holds a group of API's to interact with the `Code Block` and create a restricted editor environment

This can be used to make the user modify only certain parts of the code

#### restrictedEditor.create()

`args : [uniqueId : String ,codeBlockInstanceName : String, options? : Object]`

`returns : Object<CodeBlockEntity>`

This creates an entity of the `Code Block`, and this internally creates the restrictions which has to be implemented in the editor model

> This API can be used to create instances of pre-written files to make it render fast at the time of loading

#### restrictedEditor.load()

`args : [uniqueId : String ,codeBlockInstanceName : String, options? : Object]`

`returns : Object<CodeBlockEntity>`

This renders the model which has been previously created using `restrictedEditor.create()` API


#### restrictedEditor.createAndLoad()

`args : [uniqueId : String ,codeBlockInstanceName : String, options? : Object]`

`returns : Object<CodeBlockEntity>`

This will create and render at runtime. This can be used for the creation of restricted files at the runtime.

#### restrictedEditor.getCurrentMutableValues()

`args : []`

`returns : Object`

This can be used to get the Mutable Values from the current model, if the model created using [CodeBlock](#codeblock)

#### restrictedEditor.getCurrentCodeBlock()

`args : []`

`returns : CodeBlock`

This will return the current code block in the restricted editor

### updateEditorLayout

`args : []`

`returns : undefined`

This will recalculate the editor's layout. This can be called if the is any resize happening in the editor's base layout area

### editorActions

`Available from v2.0.0`

This object holds a group of API's to add and remove editorActions to the editorInstances

#### editorActions.add()

`args : [ callback <Function>, editorType<EditorType> ]`

`returns : Boolean`

This method will add the action to the corresponding editor instance.

The callback function will be called with the argument `{ KeyCode <Monaco.KeyCode>, KeyMod  <Monaco.KeyMod> }` and this function expects an `Array<EditorActionInstance>` as a response

#### editorActions.dispose()

`args : [ id <String> ]`

`returns : Array<EditorActionInstance>`

This id is the id provided while adding the editorActions

#### editorActions.disposeAll()

`args : []`

`returns : undefined`

This will disposeAll the registered actions

#### editorActions.list()

`args : []`

`returns : Array<EditorActionInstance>`

This will list down all the editorActions registered.

### loadBasicEditor

`args : []`

`returns : undefined`

This util can be called when the user wishes to take the hold for loading the basic editor instance. This utils does the exact same this as loadEditor but this does it only for BASIC_EDITOR

> To make this util to work `ltPropLoadOnDemand[Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR]` must be true

### loadDiffEditor

`args : []`

`returns : undefined`

This util can be called when the user wishes to take the hold for loading the diff editor instance. This utils does the exact same this as loadEditor but this does it only for DIFF_EDITOR

> To make this util to work `ltPropLoadOnDemand[Lyte.Editor.EDITOR_TYPES.DIFF_EDITOR]` must be true

### updateDiffEditorOptions

`args : [ key , value ] | [ optionsToUpdate ]`

- key : { string }

- value : { (string | number | boolean | array) } *( based on key )*

- optionsToUpdateobject : { object } *( set of key value pairs )*

This util will update the diff editor options and will trigger the `onDiffEditorOptionsUpdate` method

### createDiffNavigator

`args : [options]`
- options <[DiffNavigatorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffnavigatoroptions.html)>

`returns -` [DiffNavigatorInstance](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffnavigator.html)

This will create and return a DiffNavigatorInstance based on the DiffEditorInstance of lyte-editor

### updateDiffNavigatorOptions

`args : [ key , value ] | [ optionsToUpdate ]`

- key : { string }

- value : { (string | number | boolean | array) } *( based on key )*

- optionsToUpdateobject : { object } *( set of key value pairs )*

`returns -` [DiffNavigatorInstance](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffnavigator.html)

This will dispose the old navigator instance and create a new navigator instance with the updated options

> As this disposes the old navigator instance, It is not advisable to use this method frequently

### updateCompilerOptions

`args : [compilerOptions <Object>]`

This will update the compiler options based on the language in the monaco editor

```javascript
compilerOptions = {
  javascript : {
    allowJs : true,
    allowSyntheticDefaultImports : true
  },
  typescript : {
    allowJs : false
  }
}
```

> Compiler Options for JavaScript and Typescript can be found [here](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.typescript.compileroptions.html)


### getCurrentTheme

`args : []`

This will return the theme name of the current editor instance


### createModel

`args : [ content, options ]`

returns - [MonacoModelInstance](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.itextmodel.html)

This util will create a monaco editor model instance. The content should be a type of string and options should be a type of object with allowed keys as `language`,`uri`

> This util will internally use monaco.editor.createModel API to create the model instance

### setBasicEditorModel

`args : [ editorModel ]`

This util will set the editor model to the current editor instance. This editor model must be an object created using createModel util (or) [MonacoModelInstance](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.itextmodel.html)

> NOTE: This will only work for the editor type `Lyte.Editor.EDITOR_TYPES.BASIC_EDITOR`

## API - Lyte.Editor

### addLib

`Warning`  : Deprecated @v1.1.2

This api is used to preload the library scripts which will be included once the editor loads

`args : [ libName , scriptInsideFunction ]`

- libName : { string }
- scriptInsideFunction : { function }

Example :

```javascript
/** WARNING : 
 * ! This method is deprecated from v1.1.2
*/
Lyte.Editor.addLib( '<libname>',function(){
    // The library script
    var Lyte = {
        Component : {}
    }
});
```

### defineTheme

This api is used to define the themes for the editor and inorder to load this theme , you have to set options

`args : [ themeName, themeData ]`

- themeName : { string }
- themeData : { Object < themeData > }

Example :

```javascript
Lyte.Editor.defineTheme('themeName',{
  base: 'vs',
  inherit : true,
  rules: [
    { token: 'custom-token1', foreground: '808080' },
    { token: 'custom-token2', background: 'ff0000', fontStyle: 'bold' },
  ],
  colors: {
      'editor.foreground': '#000000',
      'editor.background': '#EDF9FA',
      'editorCursor.foreground': '#8B0000',
      'editor.lineHighlightBackground': '#0000FF20',
      'editorLineNumber.foreground': '#008800',
      'editor.selectionBackground': '#88000030',
      'editor.inactiveSelectionBackground': '#88000015'
  }
})
```

### registerFormatter

This api is used to provide a formatter for a particular language. This will be invoked by pressing the shortcut key `Cmd/Ctrl + Shift + F`.

`args : [ languageName, callback ]`

- languageName : { String }
- callback : { Function }

`Expected Return Type`: String

Example ( for Javascript ):

```javascript
Lyte.Editor.registerFormatter('javascript',function(value){
  /**
   * Enter the code for formatting here
   * and return formatted value as string
   */
})
```

### registerValidator

`Available from v1.2.0`

This api is used to validate the contents in the editor. This callback will be mapped to `onDidChangeModelContent` listener.

`args : [ languageName, callback ]`

- languageName : { String }
- callback : { Function }

`Expected Return Type` : Array<[MarkerObject](#markerobject)>

Example (for Javascript ):

```javascript
Lyte.Editor.registerValidator('javascript',function(value){
/**
 * Validation should be done here
 * If the value is valid, then null should be returned
 * If the value has errors, then MarkerObject should be returned
 */
})
```

_Note:This callback will be called on every change in the model,So it is advisable to **debounce (or) throttle the callback** for better performance_

### setLangConfig

`Available from v1.2.0`

This is used to set configuration based on the specific to the language

`args : [ languageName, configuration ]`

- languageName : { [ConfigurableLanguage](#configurablelanguage) }
- configuration : { Object< [ConfigurationObject](#configurationobject) > }

Example (Json Configuration) : 

```javascript
Lyte.Editor.setLangConfig('json',{
  validate: true,
    schemas: [{
        uri: "http://myserver/foo-schema.json", // id of the first schema
        fileMatch: 'someIdString', // Give '*' to match all models
        schema: {
            type: "object",
            properties: {
                p1: {
                    enum: ["v1", "v2"]
                },
                p2: {
                    $ref: "http://myserver/bar-schema.json" // reference the second schema
                }
            }
        }
    }, {
        uri: "http://myserver/bar-schema.json", // id of the second schema
        schema: {
            type: "object",
            properties: {
                q1: {
                    enum: ["x1", "x2"]
                }
            }
        }
    }]
})
/* Example from Monaco editor playground */
```

### CodeBlock

`Available from v1.3.0`

This API converts a simple set of instructions in the form of a string to create a restricted editable area along with the hold of mutable values.

#### Instructions

There are 2 types of instructions that can provided as the input

- editableArea - space defined to edit a portion of single line
- multiLineEditableArea  - space defined to edit multiple lines

```javascript
// This is the instruction
function /* editableArea#funcName=fnName */ ( /* editableArea#args=arg1,arg2 */ ) {
    /* multiLineEditableArea#actualCode=//Enter your logic here */
}
```

```javascript
// This will be the output in editor
function fnName(arg1, arg2) {
    //Enter your logic here
}
```

#### Fallback Content

This content can be given as so that when the output is rendered default content will be present in place of the editable area comment

eg : `/* editableArea=fallbackContent */`

#### ID

This id can be used to reference the output and whenever the editor content changes, a mapping object is generated

eg : `/* editableArea#id */`

This fallback content and id is applicable for both single line and multiline editable

Thus, places other than the editable area are not allowed to be edited by the user

#### CodeBlock.Register()

`args : [ instanceName: String, dataObject: Object< CodeBlockInstanceData > ]`

This creates a [CodeBlock](#codeblock) instance and saves that data for the restricted editor model creation

#### CodeBlock.Override()

`args : [ instanceName: String, dataObject: Object< CodeBlockInstanceData > ]`

This overrides the existing [CodeBlock](#codeblock) instance

#### CodeBlock.registeredInstances()

`args : []`

This is return an array of all the registered Code Block instances

#### CodeBlock.getCodeBlockEntity()

`args : [ modelUri : String ]`

This will return if there is any matching `CodeBlockEntity` available for that particular `modelUri`

#### Example

```javascript
// This is instruction 
const blueprintForHelper = `
Lyte.Component.registerHelper(
  '/* editableArea#name=helperName */',
  function (/* editableArea#args=arg1,arg2 */) {
    /* multiLineEditableArea#content=//Enter your content here */,
  }
);`

Lyte.Editor.CodeBlock.Register('Helper',{
  blueprint: blueprintForHelper,
  language: 'javascript',
  onEdit: function () {
    // This callback has the ability to undo the changes if it returns false
  }
});


// This will be the generated model's value
Lyte.Component.registerHelper(
  'helperName',
  function (arg1,arg2) {
    //Enter your content here
  }
);
```

Here, the `helperName`, `arg1,arg2` and `//Enter your content here` are mutable, all other values are masked from getting mutated.

For creating a [Restricted Editor](#restrictededitor), users should create a Code Block first and use that instance to create such editor model

### CompletionProvider

`Available from v2.0.0`

This API can be used to register completion providers in monaco editor. This API can be used to extend the suggestions shown while typing in the editor

#### CompletionProvider.Register()

`args : [langName : <String>, objectOfInstances : Object(<id:<String>,value:<CompletionProviderInstance>)]`

The `provideCompletionItems` function in CompletionProviderInstance will expect an object of type [CompletionList](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.completionlist.html) as return value.

> provideCompletionItems will have monaco as its `this` object

```javascript
Lyte.Editor.CompletionProvider.Register('html', {
  id: {
    triggerCharacters: ['{'],
    provideCompletionItems: function () {
      return {
        suggestions: [
          {
            label: 'scoped_1'
          }, {
            label: 'scoped_2'
          }
        ]
      }
    },
    checkForDesiredModel: function () {
      // Check for model's id and return boolean value
    }
  }
})
```

#### CompletionProvider.Override()

`args : [langName : <String>, objectOfInstances : Object(<id:<String>,overriderObject:<object>)]`

The overriderObject should be a subset of CompletionProviderInstance

#### CompletionProvider.Dispose()

`args : [langName : <String>, id : <String> ]`

Here the id corresponds to the id provided while registering the completion provider

### I18n

This will include the I18n values which are used in lyte-editor ( not inside monaco-editor ).

#### I18n.addLocale()

`args : [langName : <String>,config : <Object>]`

This method can be used to add new locale if there is no locale for that language is present.

Lyte Editor by default provides locale support for languages like

- `ar_eg` : Egyptian Arabic
- `bg_bg` : Bulgarian
- `cs_cz` : Czech
- `da_dk` : Danish
- `de_de` : German
- `en_gb` : British English
- `en_us` : English
- `es_es` : Spanish
- `fr_fr` : French
- `he_il` : Hebrew
- `hi_in` : Hindi
- `hr_hr` : Croatian
- `hu_hu` : Hungarian
- `in_id` : Indonesian
- `it_it` : Italian
- `ja_jp` : Japanese
- `ko_kr` : Korean
- `nl_nl` : Dutch
- `pl_pl` : Polish
- `pt_br` : Brazilian Portuguese
- `pt_pt` : Portugal Portuguese
- `ru_ru` : Russian
- `sv_se` : Swedish
- `th_th` : Thai
- `tr_tr` : Turkish
- `vi_vn` : Vietnamese
- `zh_cn` : PRC Chinese
- `zh_tw` : Taiwan Chinese

All those values will be present in a separate JS file under the folder `I18n/`

#### I18n.overrideLocale()

`args : [ langName <String>, overrider <Object(localeKey:<String>,value:<String>)> ]`

This method can be used to extend/modify the existing I18n Configuration. This will be useful especially when the user extends the labels, toolbars and the I18n Configuration for those values will not available in the lyte-editor by default.

#### I18n.prepareLocaleKey()

`args : [ key <String> ]`

`returns : localeKey <String>`

This method has to be used while overriding the locale, as all the I18n keys in the lyte editor will follow a convention for its proper retrieval of values

```javascript
var actualKey = 'Some Value'
var localeKey = Lyte.Editor.I18n.prepareLocaleKey(actualKey);
console.log(localeKey); // lyte.editor.locale.some_value

```

#### I18n.getValueOf()

`args : [ localeKey <String> ]`

`returns : <String>`

This method will be used to get the value of the corresponding key in the current locale.

> Lyte Editor will internally use this method to get the value, This method can be used to ensure the proper value retrieval while extending the I18n

#### I18n.currentLocale

This variable holds the value of the current locale which is used to retrieve the I18n values

#### I18n.registeredLangs

This variable holds the map of registered languages

_Note: This variable will only contain the language names. It wont have the language configuration_

### UpdateEnum

This API can be used to update certain enumerated values like

- `LIGHT_THEME` - defaults to 'vs'
- `DARK_THEME` - defaults to 'vs-dark'
- `MONACO_SRC_LOADED` - defaults to false
- `DARK_MODE_CLASS` - defaults to 'darkMode'

This can be changed from its default values, so that it will be used for updation in lyte-editor

> For proper working of the lyte-editor, make sure to override the enums before loading of the lyte-editor
> These Enums are global and affects all the lyte-editor instances


## Yield Support 

### Yield for Toolbar

yield-name : `toolbar`

This will replace the `lyte-editor-toolbar` node and In order to show this yield tag, [lt-prop-toolbar-yield](#lt-prop-toolbar-yield) has to be made true.

### Yield for Header

yield-name : `headerForEditor`

This will add the yielded content to the top of the editor (i.e) in between `lyte-editor-toolbar` and `.lyteEditor` div.

> If the height of this yielded tag is getting changed in the runtime, [updateEditorLayout](#updateeditorlayout) has to be called to reset the editor height

### Yield for Footer

yield-name : `footerForEditor`

This will add the yielded content to the bottom of the editor `.lyteEditor` div.

> If the height of this yielded tag is getting changed in the runtime, [updateEditorLayout](#updateeditorlayout) has to be called to reset the editor height

## Including Library scripts

### Method 1 - using attribute data

By using the lt-prop-resource-strings property.

```javascript
arrayOfStrings = [ " var Lyte = { 'Component' : {}} "];
```

```html
<lyte-editor lt-prop-resource-strings="{{arrayOfStrings}}"></lyte-editor>
````

Here someArray will contain array of strings of libraries which have to be added to javascript intellisense.

### Method 2 - using api 

Warning  : **`! Deprecated for versions ^1.1.2`**

By using this method, the library scripts can be loaded via script tags in the application.

```javascript
/** WARNING : 
 * ! This method is deprecated from v1.1.2
*/
Lyte.Editor.addLib( '<lib name>',function(){
    // The library script
    var Lyte = {
        Component : {}
    }
});
```

### Method 3 - using resource links

By using the lt-prop-resource-links property.

```javascript
arrayOfLinks = ['/apiFile1.js','/lib/apiFile2.js']
```

```html
<lyte-editor lt-prop-resource-links="{{arrayOfLinks}}"></lyte-editor>
```

Here for all the links in the array, a xhr object is generated and request is hit to the server. Before hitting the request **on-before-each-request** method is triggered. Similarly on after the xhr request is completed, **on-after-each-request** method is triggered, this method contains the information about the status of the xhr. Finally, **on-after-all-requests** method is called, this method contains array of xhr responses.

## Dependencies

- [Lyte Dom](http://build/zoho/lyte_dom/milestones/master/LYTE_DOM_V2_0_5/)
- lyte-dropdown
- lyte-tooltip
- lyte-wormhole
- lyte-checkbox

## Usage

### Install Lyte Editor

`npm install lyte-editor --registry http://integ-docker:4873`

### Include Styles

```html
<!-- Dependencies -->
<link href='<outputFolder>/bower_components/<lyteUiComponentDir>/theme/compiledCSS/default/ltr/lyte-ui-dropdown.css'>

<link href='<outputFolder>/bower_components/<lyteUiComponentDir>/theme/compiledCSS/default/ltr/lyte-ui-checkbox.css'>

<link href='<outputFolder>/bower_components/<lyteUiComponentDir>/theme/compiledCSS/default/ltr/lyte-ui-tooltip.css'>
```

### Include Scripts

```html
<!-- Dependencies -->
<script src='<outputFolder>/bower_components/<lyteUiComponentDir>/components/lyte-tooltip.js'>

<script src='<outputFolder>/bower_components/<lyteUiComponentDir>/components/lyte-dropdown.js'>

<script src='<outputFolder>/bower_components/<lyteUiComponentDir>/components/lyte-checkbox.js'>

<script src='<outputFolder>/bower_components/<lyteUiComponentDir>/components/lyte-wormhole.js'>

<!-- Actual Script -->
<script src='<outputFolder>/addons/@zoho/lyte-editor/dist/lyte-editor.js'>
```

### Sample syntax

```html
<lyte-editor lt-prop-base-path="<outputFolder>/addons/@zoho/lyte-editor/dist"></lyte-editor>
```

## Standalone Version

- Lyte Editor natively supports standalone version ( use lyte-editor@1.0.3 or above ).
  
- Currently this standalone version will include all of its dependencies like `lyte`, `lyte-dom`,`lyte-ui-component` and `lyte-cli` during installation of `lyte-editor` itself.
  
- The lyte-editor is builded in `production mode` in the `post-install` of the package.
  
- All the required dependencies are bundled and included inside the path `<APP_DIR>/node_modules/@zoho/lyte-editor/addons/@zoho/lyte-editor/dist/`

- For proper working of the lyte-editor, copy the complete folder into your deployment folder structure (or) use it as such inside the node_modules folder

> **Note** : For now, this auto installation of dependencies feature will not work inside a lyte application, all the dependencies has to be installed manually.

**Warning**:
`Bundling of files (or) changing the directory structure inside the dist folder will result in unexpected behaviour of the lyte-editor`

### Handling of Events

#### beforeLoad

```javascript
  const lyteEditor = document.querySelector('lyte-editor');
  lyteEditor.addEventListener('beforeLoad',function(event){
    const arguments = event.arguments;
    // This hook can be used for performing the operations
  })
```

>**Note :** These events will not bubble up to the parent, so make sure you add the event listener to the lyte-editor node.

## Type Definitions

### ConfigurationObject

For html,handlebars,razor :

`object`{

- [options](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.html.options.html)
- [modeConfiguration](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.html.modeconfiguration.html)

}

For css,less,scss : 

`object`{

- [diagnosticsOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.css.diagnosticsoptions.html)
- [modeConfiguration](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.css.modeconfiguration.html)
  
}

For javascript,typescript : 

`object`{

- [compilerOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.typescript.compileroptions.html)
- [diagnosticsOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.typescript.diagnosticsoptions.html)
- [workerOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.typescript.workeroptions.html)
  
}

For json : 

`object`{

- [diagnosticsOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.json.diagnosticsoptions.html)
- [modeConfiguration](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.json.modeconfiguration.html)

}

### ConfigurableLanguage

`string` : [
  html,
  handlebars,
  razor,
  css,
  less,
  scss,
  typescript,
  javascript,
  json
]

### MarkerObject

`object`{

- lineNumber : `Number`
- type : `SeverityType`
- message  : `String`

}

### EditorType

`string` : [ 'basicEditor' | 'diffEditor' ]

> This will be available in the Lyte.Editor as EDITOR_TYPES

### EditorState

`object`{

- type : `EditorType`
- editorInstance : [IStandAloneCodeEditor](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandalonecodeeditor.html) | [IStandaloneDiffEditor](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandalonediffeditor.html),
- toolbar - `Object`

}

### Marking

`object`{

- range : `Range`
- severity : `SeverityType`,
- message : `String`
  
}


### CodeBlockInstance

`object`{
  
- createEntity: `function`
- listAll: `function`
- delete: `function`
- deleteAll: `function`
- getActiveEntity : `function`

}

### CodeBlockEntity 

`object`{

- uri : `Object`<[UriComponents](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.uricomponents.html)>
- instanceName : `String`
- id : `String`
- modifyValue: `function`
- getMutableValues: `function`
- setValue: `function`
- getValue: `function`
- updateEntity: `function` 

}

### EditorActionInstance

`object`{

- id :`String` (Required)
- run : `Function` (Required)
- label : `String` (Required)
- keybindings : Array<[Monaco.KeyCode](https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html) | [Monaco.KeyMod](https://microsoft.github.io/monaco-editor/api/classes/monaco.keymod.html)>
- contextMenuGroupId : `String` (For more information refer this [link](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.iactiondescriptor.html#contextmenugroupid))
- precondition : `String`
- keybindingsContext : `String`
  
}

### changeObject

`object`

For more information click [here](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.imodelcontentchangedevent.html)

### SeverityType

`string` : [ Error | Wanning | Info | Hint ]

For more information click [here](https://microsoft.github.io/monaco-editor/api/enums/monaco.markerseverity.html)

### themeData

`object`{

- base : `string<BuiltinTheme>`
- inherit : `boolean`
- rules : `Array<TokenThemeRule>`
- encodedTokensColors?:`Array<string>`
- colors : `Object<Colors>`
  
}

### languageName

`string` : [ typescript | javascript ]

For now only these 2 languages are supported for compiler options

### Colors

#### List of valid color names

- `foreground` // Overall foreground color. This color is only used if not overridden by a component.
- `errorForeground` // Overall foreground color for error messages. This color is only used if not overridden by a component.
- `descriptionForeground` // Foreground color for description text providing additional information, for example for a label.
- `focusBorder` // Overall border color for focused elements. This color is only used if not overridden by a component.
- `contrastBorder` // An extra border around elements to separate them from others for greater contrast.
- `contrastActiveBorder` // An extra border around active elements to separate them from others for greater contrast.
- `selection.background` // The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor.
- `textSeparator.foreground` // Color for text separators.
- `textLink.foreground` // Foreground color for links in text.
- `textLink.activeForeground` // Foreground color for active links in text.
- `textPreformat.foreground` // Foreground color for preformatted text segments.
- `textBlockQuote.background` // Background color for block quotes in text.
- `textBlockQuote.border` // Border color for block quotes in text.
- `textCodeBlock.background` // Background color for code blocks in text.
- `widget.shadow` // Shadow color of widgets such as find/replace inside the editor.
- `input.background` // Input box background.
- `input.foreground` // Input box foreground.
- `input.border` // Input box border.
- `inputOption.activeBorder` // Border color of activated options in input fields.
- `input.placeholderForeground` // Input box foreground color for placeholder text.
- `inputValidation.infoBackground` // Input validation background color for information severity.
- `inputValidation.infoBorder` // Input validation border color for information severity.
- `inputValidation.warningBackground` // Input validation background color for information warning.
- `inputValidation.warningBorder` // Input validation border color for warning severity.
- `inputValidation.errorBackground` // Input validation background color for error severity.
- `inputValidation.errorBorder` // Input validation border color for error severity.
- `dropdown.background` // Dropdown background.
- `dropdown.foreground` // Dropdown foreground.
- `dropdown.border` // Dropdown border.
- `list.focusBackground` // List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.focusForeground` // List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.activeSelectionBackground` // List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.activeSelectionForeground` // List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.inactiveSelectionBackground` // List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
- `list.inactiveSelectionForeground` // List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
- `list.hoverBackground` // List/Tree background when hovering over items using the mouse.
- `list.hoverForeground` // List/Tree foreground when hovering over items using the mouse.
- `list.dropBackground` // List/Tree drag and drop background when moving items around using the mouse.
- `list.highlightForeground` // List/Tree foreground color of the match highlights when searching inside the list/tree.
- `pickerGroup.foreground` // Quick picker color for grouping labels.
- `pickerGroup.border` // Quick picker color for grouping borders.
- `button.foreground` // Button foreground color.
- `button.background` // Button background color.
- `button.hoverBackground` // Button background color when hovering.
- `badge.background` // Badge background color. Badges are small information labels, e.g. for search results count.
- `badge.foreground` // Badge foreground color. Badges are small information labels, e.g. for search results count.
- `scrollbar.shadow` // Scrollbar shadow to indicate that the view is scrolled.
- `scrollbarSlider.background` // Slider background color.
- `scrollbarSlider.hoverBackground` // Slider background color when hovering.
- `scrollbarSlider.activeBackground` // Slider background color when active.
- `progressBar.background` // Background color of the progress bar that can show for long running operations.
- `editor.background` // Editor background color.
- `editor.foreground` // Editor default foreground color.
- `editorWidget.background` // Background color of editor widgets, such as find/replace.
- `editorWidget.border` // Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.
- `editor.selectionBackground` // Color of the editor selection.
- `editor.selectionForeground` // Color of the selected text for high contrast.
- `editor.inactiveSelectionBackground` // Color of the selection in an inactive editor.
- `editor.selectionHighlightBackground` // Color for regions with the same content as the selection.
- `editor.findMatchBackground` // Color of the current search match.
- `editor.findMatchHighlightBackground` // Color of the other search matches.
- `editor.findRangeHighlightBackground` // Color the range limiting the search.
- `editor.hoverHighlightBackground` // Highlight below the word for which a hover is shown.
- `editorHoverWidget.background` // Background color of the editor hover.
- `editorHoverWidget.border` // Border color of the editor hover.
- `editorLink.activeForeground` // Color of active links.
- `diffEditor.insertedTextBackground` // Background color for text that got inserted.
- `diffEditor.removedTextBackground` // Background color for text that got removed.
- `diffEditor.insertedTextBorder` // Outline color for the text that got inserted.
- `diffEditor.removedTextBorder` // Outline color for text that got removed.
- `editorOverviewRuler.currentContentForeground` // Current overview ruler foreground for inline merge-conflicts.
- `editorOverviewRuler.incomingContentForeground` // Incoming overview ruler foreground for inline merge-conflicts.
- `editorOverviewRuler.commonContentForeground` // Common ancestor overview ruler foreground for inline merge-conflicts.
- `editor.lineHighlightBackground` // Background color for the highlight of line at the cursor position.
- `editor.lineHighlightBorder` // Background color for the border around the line at the cursor position.
- `editor.rangeHighlightBackground` // Background color of highlighted ranges, like by quick open and find features.
- `editorCursor.foreground` // Color of the editor cursor.
- `editorWhitespace.foreground` // Color of whitespace characters in the editor.
- `editorIndentGuide.background` // Color of the editor indentation guides.
- `editorLineNumber.foreground` // Color of editor line numbers.
- `editorRuler.foreground` // Color of the editor rulers.
- `editorCodeLens.foreground` // Foreground color of editor code lenses
- `editorBracketMatch.background` // Background color behind matching brackets
- `editorBracketMatch.border` // Color for matching brackets boxes
- `editorOverviewRuler.border` // Color of the overview ruler border.
- `editorGutter.background` // Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
- `editorError.foreground` // Foreground color of error squigglies in the editor.
- `editorError.border` // Border color of error squigglies in the editor.
- `editorWarning.foreground` // Foreground color of warning squigglies in the editor.
- `editorWarning.border` // Border color of warning squigglies in the editor.
- `editorMarkerNavigationError.background` // Editor marker navigation widget error color.
- `editorMarkerNavigationWarning.background` // Editor marker navigation widget warning color.
- `editorMarkerNavigation.background` // Editor marker navigation widget background.
- `editorSuggestWidget.background` // Background color of the suggest widget.
- `editorSuggestWidget.border` // Border color of the suggest widget.
- `editorSuggestWidget.foreground` // Foreground color of the suggest widget.
- `editorSuggestWidget.selectedBackground` // Background color of the selected entry in the suggest widget.
- `editorSuggestWidget.highlightForeground` // Color of the match highlights in the suggest widget.
- `editor.wordHighlightBackground` // Background color of a symbol during read-access, like reading a variable.
- `editor.wordHighlightStrongBackground` // Background color of a symbol during write-access, like writing to a variable.
- `peekViewTitle.background` // Background color of the peek view title area.
- `peekViewTitleLabel.foreground` // Color of the peek view title.
- `peekViewTitleDescription.foreground` // Color of the peek view title info.
- `peekView.border` // Color of the peek view borders and arrow.
- `peekViewResult.background` // Background color of the peek view result list.
- `peekViewResult.lineForeground` // Foreground color for line nodes in the peek view result list.
- `peekViewResult.fileForeground` // Foreground color for file nodes in the peek view result list.
- `peekViewResult.selectionBackground` // Background color of the selected entry in the peek view result list.
- `peekViewResult.selectionForeground` // Foreground color of the selected entry in the peek view result list.
- `peekViewEditor.background` // Background color of the peek view editor.
- `peekViewEditorGutter.background` // Background color of the gutter in the peek view editor.
- `peekViewResult.matchHighlightBackground` // Match highlight color in the peek view result list.
- `peekViewEditor.matchHighlightBackground` // Match highlight color in the peek view editor.



### TokenThemeRule

`object`{

- token : `string`
- foreground?: `string`
- background?: `string`
- fontStyle?:`string`

}

### BuiltinTheme

`string` : [ vs | vs-dark | hc-black ]

### Marker

`object`{

- startColumn: `number`,
- startLineNumber: `number`,
- endColumn : `number`,
- endLineNumber : `number`,
- message : `string`,
- severity : `SeverityType`
  
}

### CompletionProviderInstance

`object`{

- provideCompletionItems : `Function`(Required)
- triggerCharacters : `Array<String>`
- resolveCompletionItem : `Function`
- checkForDesiredModel : `Function`

}

### ModelInfo

`object`{

- characterCount : `number`
- lineCount : `number`
- range : `Object<Range>`
- selections? : `Array<ModelInfo>`
  
}

### Range

`object`{

- startColumn : `number`
- endColumn : `number`
- startLineNumber : `number`
- endLineNumber : `number`

}

### LyteEditorToolObject

`object` {

- class : `string`
- title : `string`
- triggerAction : `string`
- current ?: `string`
- label ?: `string`
- noTitle ?: `boolean`
- preventHoverClass ?: `boolean`
  
}

### List of valid action names

- copy
- cut
- toggleComment
- addComment
- blockComment
- removeComment
- undo
- redo
- formatDocument
- formatSelection
- delete
- indent
- outdent
- openQuickCommand
- showContextMenu
- find
- duplicate
- toggleWrap
- toggleDarkmode

## Glossary

### List of Options

for more information click [here](https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#editoroptions)

- acceptSuggestionOnCommitCharacter : { *boolean* }
- acceptSuggestionOnEnter           : `( "on" | "off" | "smart" )`
- accessibilityPageSize             : { *number* }
- ariaLabel                         : { *string* }
- automaticLayout                   : { *boolean* }
- codeLens                          : { *boolean* }
- colorDecorators                   : { *boolean* }
- contextmenu                       : { *boolean* }
- copyWithSyntaxHighlighting        : { *boolean* }
- cursorSmoothCaretAnimation        : { *boolean* }
- cursorSurroundingLines            : { *number* }
- cursorSurroundingLinesStyle       : `( "default" | "all" )`
- cursorWidth                       : { *number* }
- disableLayerHinting               : { *boolean* }
- disableMonospaceOptimizations     : { *boolean* }
- dragAndDrop                       : { *boolean* }
- editorClassName                   : { *string* }
- emptySelectionClipboard           : { *boolean* }
- extraEditorClassName              : { *string* }
- fastScrollSensitivity             : { *number* }
- fixedOverflowWidgets              : { *boolean* }
- folding                           : { *boolean* }
- foldingHighlight                  : { *boolean* }
- foldingStrategy                   : `( "auto" | "indentation" )`
- fontFamily                        : { *string* }
- fontLigatures2                    : { *string* }
- fontSize                          : { *number* }
- fontWeight                        : { *string* }
- formatOnPaste                     : { *boolean* }
- formatOnType                      : { *boolean* }
- glyphMargin                       : { *boolean* }
- hideCursorInOverviewRuler         : { *boolean* }
- highlightActiveIndentGuide        : { *boolean* }
- inDiffEditor                      : { *boolean* }
- letterSpacing                     : { *number* }
- lineDecorationsWidth              : { *number* }
- lineHeight                        : { *number* }
- lineNumbersMinChars               : { *number* }
- links                             : { *boolean* }
- matchBrackets                     : `( "always" | "never" | "near")`
- mouseStyle                        : `( "default" | "text" | "copy")`
- mouseWheelScrollSensitivity       : { *number* }
- mouseWheelZoom                    : { *boolean* }
- multiCursorMergeOverlapping       : { *boolean* }
- multiCursorModifier               : `( "altKey" | "metaKey" | "ctrlKey")`
- multiCursorPaste                  : `( "spread" | "full")`
- occurrencesHighlight              : { *boolean* }
- overviewRulerBorder               : { *boolean* }
- overviewRulerLanes                : { *number* }
- peekWidgetDefaultFocus            : `( "tree" | "editor")`
- pixelRatio                        : { *number* }
- quickSuggestionsDelay             : { *number* }
- readOnly                          : { *boolean* }
- renderControlCharacters           : { *boolean* }
- renderFinalNewline                : { *boolean* }
- renderIndentGuides                : { *boolean* }
- renderLineHighlight               : `( "all" | "line" | "none" | "gutter")`
- renderValidationDecorations       : `( "on" | "off" | "editable")`
- renderWhitespace                  : `( "all" | "none" | "boundary" | "selection")`
- revealHorizontalRightPadding      : { *number* }
- roundedSelection                  : { *boolean* }
- scrollBeyondLastColumn            : { *number* }
- scrollBeyondLastLine              : { *boolean* }
- selectOnLineNumbers               : { *boolean* }
- selectionClipboard                : { *boolean* }
- selectionHighlight                : { *boolean* }
- showFoldingControls               : `( "always" | "mouseover")`
- showUnused                        : { *boolean* }
- smoothScrolling                   : { *boolean* }
- snippetSuggestions                : `( "none" | "top" | "bottom" | "inline")`
- stopRenderingLineAfter            : { *number* }
- suggestFontSize                   : { *number* }
- suggestLineHeight                 : { *number* }
- suggestOnTriggerCharacter         : { *boolean* }
- suggestSelection                  : `( "first" | "recentlyUsed"| "recentlyUsedByPrefix")`
- tabCompletion                     : `( "on" | "off" | "onlySnippets")`
- tabFocusMode                      : { *boolean* }
- useTabStops                       : { *boolean* }
- wordSeparators                    : { *string* }
- wordWrap                          : `( "on" | "off" | "wordWrapColumn" | "bounded" )`
- wordWrapBreakAfterCharacters      : { *string* }
- wordWrapBreakBeforeCharacters     : { *string* }
- wordWrapColumn                    : { *number* }
- wordWrapMinified                  : { *boolean* }
- wrappingStrategy                  : `( "simple" | "advanced" )`


## Breaking Changes

### V2.0.0

`on-load` : (Method) - Alternative for this method are [on-basic-editor-load](#on-basic-editor-load) and [on-diff-editor-load](#on-diff-editor-load)

`loadEditor` : (Util) - Alternative for this Util are [loadBasicEditor](#loadbasiceditor) and [loadDiffEditor](#loaddiffeditor)

`lt-prop-load-on-demand` : (Property) - This boolean property is now changed to object with boolean values. For more information, refer [this](#lt-prop-load-on-demand)

### V1.1.2

`addLib` : (API) - Alternative for this API is [lt-prop-resource-strings](#lt-prop-resource-strings) and [lt-prop-resource-strings](#lt-prop-resource-strings)

`lt-prop-compiler-options` : (Property) - Alternative for this API is [updateCompilerOptions](#updatecompileroptions) and [setLangConfig](#setlangconfig)
