// Lyte.Editor.addLib = (function(libName,definition){ // !Deprecated @1.1.2
//     let string = definition.toString();
//     string = string.replace(/^function\(\)\{\n/,'').replace(/\n}$/,'');
//     if(!lyteEditor.monaco){
//         Lyte.Editor._libs.push({ libName : libName,value : string });
//     }else{
//         lyteEditor.addLib(string);
//     }
// });