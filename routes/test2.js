Lyte.Router.registerRoute('test2',{
    renderTemplate : function(param)	{
		return {outlet : "#test21",component : "test-comp"}
	},
	model : function(param){
		this.setQueryParams('id',param.dynamicParam);
		return {features : param.dynamicParam};
	}
	
});