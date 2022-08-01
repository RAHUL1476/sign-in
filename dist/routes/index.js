Lyte.Router.registerRoute('index',{
	
	// model : function()	{
	// 	return {features : [{module : 'Router',urls : 'http://lyte/2.0/doc/route/introduction'},
	// 						{module : 'Components',urls : 'http://lyte/2.0/doc/components/introduction'},
	// 						{module : 'Datas',urls : 'http://lyte/2.0/doc/data/introduction'},
	// 						{module : 'CLI',urls : 'http://lyte/2.0/doc/cli/introduction'}
	// 						]}
				
	// },
	renderTemplate : function()	{
		//this.setQueryParams('home','sign-in');
		return {outlet : "#outlet",component : "welcome-comp"}
	},
	actions : {
		nextwind : function(params){
			var t=this.transitionTo('test2',params);
			t.refresh=true;
		},
		signup :function(){
			this.transitionTo('index.test4');
		}
	}
});
