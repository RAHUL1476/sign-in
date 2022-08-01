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