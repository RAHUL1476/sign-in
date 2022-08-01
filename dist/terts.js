var products=[];
var numbers	=[4,1,3,0,9,8,7,6,2,5];

for(var length=1;length<=90;length++)
{
	products.push({id:length,
		type:1,
		color:'title',
		discount:'title',
		brand:'title',
		description:'title',
		price:'title',
		size:'title',
		img:'title'
		});
};
var count=1;
var server = new Pretender(function(){
	  //todo
	 
	  this.get("/user",function(request){//No I18n
		console.log("product");
		    var datad =  JSON.stringify({user:Object.keys(products).map(function(key){return products[key]})});
		    console.log(datad);
			return [200, {"Content-Type": "application/json"}, datad]	   
	  });
});