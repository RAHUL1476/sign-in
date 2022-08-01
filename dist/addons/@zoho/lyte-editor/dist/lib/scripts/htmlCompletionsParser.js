// Lyte.Editor.extendHtmlCompletions = function(jsonData){
//     const defaults = {
//         //ignorei18n_start
//         property : 'Enum',
//         method : 'Method',
//         subComponent : 'Property',
//         snippet : 'Snippet'
//         //ignorei18n_end
//     }
//     const stringToHtml = function(text) {
//         const parser = new DOMParser();
//         const htmlDoc = parser.parseFromString(text, 'text/html');//No I18n
//         return htmlDoc;
//     }
//     const constructTagCompletion = function(tagName,tagInfo){
//         return {
//             label : tagInfo.label || tagName,
//             kind : monaco.languages.CompletionItemKind[defaults.subComponent],
//             detail : tagInfo.detail,
//             insertText : tagInfo.insertText || tagName,
//             documentation : tagInfo.documentation
//         }
//     }
//     const extractTagCompletions = function(monaco,jsonData,keyword,parentTag){
//         const suggestions = [];
//         const hasPrivateSubComponents = function(parentTag){
//             if(jsonData.hasOwnProperty(parentTag)){
//                 return !!jsonData[parentTag].subComponents;
//             }
//             return false;
//         }
//         if(hasPrivateSubComponents(parentTag)){
//             for(let comp in jsonData[parentTag].subComponents){
//                 if(comp.indexOf(keyword) > -1){
//                     suggestions.push(constructTagCompletion(comp,jsonData[parentTag].subComponents[comp]))
//                 }
//             }
//         }
//         for(let comp in jsonData){
//             if(comp.indexOf(keyword) > -1 && comp !== parentTag){
//                 suggestions.push(constructTagCompletion(comp,jsonData[comp]));
//             }
//         }
//         return {
//             suggestions : suggestions
//         }
//     }
//     const constructAttrCompletion = function(tagName,tagInfo,type){
//         let insertText = '',label = tagInfo.label || tagName;
//         if(type === 'property'){//No I18n
//             insertText = label + '="${1}"'//No I18n
//         }else if(type === 'method'){//No I18n
//             insertText = label + '="{{method(\'${1}\')}}"'//No I18n
//         }
//         return {
//             label : label,
//             kind : monaco.languages.CompletionItemKind[defaults[type]],
//             detail : tagInfo.detail,
//             insertText : insertText,
//             documentation : tagInfo.documentation,
//             insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//         }
//     }
//     const extractAttrCompletions = function(monaco,jsonData,keyword,parentTag){
//         const suggestions = [];
//         const hasPrivateAttrs = function(parentTag){
//             if(jsonData.hasOwnProperty(parentTag)){
//                 return !!jsonData[parentTag].properties || !!jsonData[parentTag].methods;
//             }
//             return false;
//         }
//         if(hasPrivateAttrs(parentTag)){
//             for(let comp in jsonData[parentTag].properties){
//                 if(comp.indexOf(keyword) > -1){
//                     suggestions.push(constructAttrCompletion(comp,jsonData[parentTag].properties[comp],'property'))
//                 }
//             }
//             for(let comp in jsonData[parentTag].methods){
//                 if(comp.indexOf(keyword) > -1){
//                     suggestions.push(constructAttrCompletion(comp,jsonData[parentTag].methods[comp],'method'))
//                 }
//             }
//         }
//         return {
//             suggestions : suggestions
//         }
//     }
//     // Actual Completion Provider
//     // extend this to omit tags
//     function getLastOpenedTag(text) {
//         var tags = text.match(/<\/*(?=\S*)([a-zA-Z-0-9]+)/g);
//         if (!tags) {
//             return undefined;
//         }
//         var closingTags = [];
//         for (var i = tags.length - 1; i >= 0; i--) {
//             if (tags[i].indexOf('</') === 0) {
//                 closingTags.push(tags[i].substring('</'.length));
//             }
//             else {
//                 var tagPosition = text.lastIndexOf(tags[i]);
//                 var tag = tags[i].substring('<'.length);
//                 var closingBracketIdx = text.indexOf('/>', tagPosition);
//                 if (closingBracketIdx === -1) {
//                     if (!closingTags.length || closingTags[closingTags.length - 1] !== tag) {
//                         text = text.substring(tagPosition);
//                         return {
//                             tagName: tag,
//                             isAttributeSearch: text.indexOf('<') > text.indexOf('>')
//                         };
//                     }
//                     closingTags.splice(closingTags.length - 1, 1);
//                 }
//                 text = text.substring(0, tagPosition);
//             }
//         }
//     }
//     const isTagClosing = function(text){
//         for(var i = text.length ; i >=0 ; i--){
//             if(text[i] === '<'){
//                 return false;
//             }else if(text[i] === '/'){
//                 return true;
//             }
//         }
//         return false;
//     }
//     function getDynamicCompletionsSnippet(){
//         return [
//             {
//                 label : 'lyte-for',
//                 filterText:'forEach',
//                 kind : monaco.languages.CompletionItemKind[defaults.snippet],
//                 detail : 'This is used to create a for Each loop',
//                 insertText : '<template is="for" items="{{${1:array}}}" item="${2:arrayItem}" index="${3:arrayIndex}">\n${4:logic}\n</template>',
//                 documentation : 'This snippet is used to create multiple copies of nodes based on the given array',
//                 insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//             },
//             {
//                 label : 'lyte-forIn',
//                 filterText : 'forIn',
//                 kind : monaco.languages.CompletionItemKind[defaults.snippet],
//                 detail : 'This is used to create a for Each loop',
//                 insertText : '<template is="forIn" items="{{${1:object}}}" value="${2:value}" key="${3:key}">\n${4:logic}\n</template>',
//                 documentation : 'This snippet is used to create multiple copies of nodes based on the given array',
//                 insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//             }
//         ]
//     }
//     function getHtmlCompletionProvider(monaco,editor){
//         return {
//             triggerCharacters: ['.', ':', '<', '"', '=', '/','>','{',"'"],
//             provideCompletionItems: function(model,position,trigger) {
//                 const textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
//                 const lastOpenedTag = getLastOpenedTag(textUntilPosition);
//                 if(trigger.triggerCharacter === '>'){
//                     if(!isTagClosing(textUntilPosition)){
//                         model.applyEdits([{
//                             range: monaco.Range.fromPositions(editor.getPosition()),
//                             text: "</"+lastOpenedTag.tagName+">",
//                             forceMoveMarkers : false
//                         }]);
//                         editor.setPosition(position);
//                     }
//                     return {};
//                 }else if(trigger.triggerCharacter === '{'){
//                     const value = model.getValueInRange({
//                         startLineNumber : position.lineNumber,
//                         startColumn : position.column - 2,
//                         endColumn : position.column,
//                         endLineNumber : position.lineNumber
//                     });
//                     if(value === "{{"){
//                         return {
//                             suggestions : [
//                                 {
//                                     label : 'features',
//                                     kind : monaco.languages.CompletionItemKind[defaults.property],
//                                     insertText : 'features',
//                                     documentation : 'This is a data attributes',
//                                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//                                 },{
//                                     label : 'data attribute',
//                                     kind : monaco.languages.CompletionItemKind[defaults.property],
//                                     insertText : 'data attribute',
//                                     documentation : 'This is a data attributes',
//                                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//                                 },{
//                                     label : 'sample',
//                                     kind : monaco.languages.CompletionItemKind[defaults.property],
//                                     insertText : 'sample',
//                                     documentation : 'This is a data attributes',
//                                     insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
//                                 }
//                             ]
//                         }
//                     }else{
//                         model.applyEdits([{
//                             range: monaco.Range.fromPositions(editor.getPosition()),
//                             text: "}",
//                             forceMoveMarkers : false
//                         }]);
//                     }
//                     editor.setPosition(position);
//                     // if double brackets are found provide all data as suggestion
//                     return {};
//                 }
//                 if(lastOpenedTag.isAttributeSearch){
//                     return extractAttrCompletions(monaco,jsonData,'',lastOpenedTag.tagName)
//                 }else if(trigger.triggerKind === 0){
//                     return { suggestions : getDynamicCompletionsSnippet() }
//                 }else{
//                     const completions = extractTagCompletions(monaco,jsonData,'',lastOpenedTag.tagName);
//                     // uncomment this for tag closing
//                     // if(trigger.triggerCharacter === '/'){
//                     // 	completions.suggestions.unshift(constructTagCompletion(lastOpenedTag.tagName,{
//                     // 		insertText : lastOpenedTag+'>'
//                     // 	}))
//                     // }
//                     return completions;
//                 }
//             }
//         }
//     }
// }
