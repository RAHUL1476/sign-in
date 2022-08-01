let t=0;
Lyte.Component.register("welcome-comp",{
	check_mail: function(temp){
		var s=/^[!#$%^&*():";']/
		if(!((temp).includes("@") && (temp).includes(".com") && ((temp).length>6) && (!(temp).match(s)))){
			alert("Enter valid mail-id");
			return false;
		}else{
			return true;
		}
	},
	check_password: function(temp){
		if(((temp).length)>8){
			return true;
		}else{
			alert("Suggest a strong tempword");
			return false;
		}
	},
	databas: function(usern,passn,fl,nam,add,ref){
			return new Promise(function(res,rej){
				const xhttp = new XMLHttpRequest();
				xhttp.onload = function(reqs) {
					if(xhttp.readyState == 4){
						var response = JSON.parse(xhttp.response);
						if(response.output == "Email already exist"){
						alert("Username already exist");
						}else if(response.output == "valid user"){
							alert('entered');
							res('some');
						}else if(response.output == "Invalid password"){
							alert("Password is wrong");
						}else if(response.output == "User created successfully"){
							alert("Account created successfully");
							res('some');
						}else if(response.output == "Invalid User"){
							alert("User id not registered");
							rej('no');
						}else{
							//rej('no user')
							alert("error 404");
						}
					}
				}
				xhttp.open("POST", "https://polls-60013727874.development.catalystserverless.in/server/gets/execute?username="+(usern)+"&password="+(passn)+"&flag="+(fl)+"&name="+(nam)+"&address="+(add));
				xhttp.send();
			})
	},
	actions : {
		onBeforeLoad : function(){
			console.log('ent');
		},
		'gty': function(param){
			console.log(param);
			var temp1=document.getElementById("text1").value;
			var temp2=document.getElementById("text2").value;
			var self = this;
			//email_id:document.getElementById("text1").value;
			if(temp1 == ""){
				alert("mail is empty");
			}else if(temp2 == ""){
				alert("passwword is empty");
			}else{
				if(this.check_mail(temp1)){
					if(this.check_password(temp2)){
						var p=this.databas(temp1,temp2,param,temp1,temp2,1);
						var pd=0;
						//this.throwEvent('nextwind',temp1);
						p.then(function(){
							pd=1;
							//this.replaceWith('nextWind');
							this.throwEvent('nextwind',temp1);

						}.bind(this),function(){
							//failure fun
							if(confirm('Do you want to create an account ? '))this.check_password(988777);
						})
						if(pd==1)this.throwEvent('nextwind',temp1);
						p.catch(function(){
							//failure fn
						})
						//this.throwEvent('nextwind',temp1);
					}
				}
			}
		}
	}
});

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