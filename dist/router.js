Lyte.Router.configureDefaults({baseURL:'',history : "html5"});

Lyte.Router.configureRoutes(function(){
	this.route("index",{path:'/index'}, function () {
		this.route('test4',{path:'/test4'});
	});
	this.route('test2',{path:'/:inp'});
	//this.route("index",{path:'/*test2'});
	//this.route("test4",{ path :"/index/test4"});
});

Lyte.Router.beforeRouteTransition = function() {
	//console.log('before Route Change');
}

Lyte.Router.afterRouteTransition = function() {
	//console.log('after Route Change');
}

