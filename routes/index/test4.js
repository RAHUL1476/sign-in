Lyte.Router.registerRoute("index.test4",{
    renderTemplate : function()	{
		return {outlet : "#outlet",component : "welcome-comp"}
	},
	model:function(){
		console.log("ko");
		//return store.findAll('models');
	},
	afterModel:function(model,params){
		//store.peakAll('models');
		console.log("hi");
	}
	// actions : {
	// 	willTransition : function( trans ) {
	// 		var paused = trans.pause();
	// 		var result = confirm( "Are you sure to proceed ? Your unsaved data might be lost." );
	// 		if( result ){
	// 			paused.resume();
	// 		} else {
	// 			paused.abort();
	// 		}
	// 	}
	//}
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
// renderTemplate  : function (model, paramsObject ){ 
//         /* return where and what to render.(container and component/HTML) */
// },
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// actions  : { 
//        onBeforeLoad  : function (paramsObject ){ 
//                 /* Triggered once route transition starts. */
//         },
//        onError  : function (error, pausedTrans, paramsObject ){ 
//                 /* Triggered by error on file load or on data request. */
//         },
//        willTransition  : function (transition ){ 
//                 /* Triggered before a transition is going to change. */
//         },
//        didTransition  : function (paramsObject ){ 
//                 /* Triggered after completion of transition. */
//         },
// }
});
