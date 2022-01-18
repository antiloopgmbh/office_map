/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,o)=>{o.r(t),o.d(t,{Properties:()=>n,VariableDescriptor:()=>r,bootstrapExtra:()=>K,findLayerBoundaries:()=>p,findLayersBoundaries:()=>u,getAllVariables:()=>a,getLayersMap:()=>l,initDoors:()=>H,initPropertiesTemplates:()=>z,initVariableActionLayer:()=>R});class n{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const o=this.get(e);if(void 0!==o){if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const o=this.get(e);if(void 0===o)throw new Error('Property "'+e+'" is missing');if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class r{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new n(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function a(){const e=await WA.room.getTiledMap(),t=new Map;return i(e.layers,t),t}function i(e,t){for(const o of e)if("objectgroup"===o.type)for(const e of o.objects)"variable"===e.type&&t.set(e.name,new r(e));else"group"===o.type&&i(o.layers,t)}let s;async function l(){return void 0===s&&(s=async function(){return function(e){const t=new Map;return c(e.layers,"",t),t}(await WA.room.getTiledMap())}()),s}function c(e,t,o){for(const n of e)"group"===n.type?c(n.layers,t+n.name+"/",o):(n.name=t+n.name,o.set(n.name,n))}function p(e){let t=1/0,o=1/0,n=0,r=0;const a=e.data;if("string"==typeof a)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let s=0;s<e.width;s++)0!==a[s+i*e.width]&&(t=Math.min(t,s),r=Math.max(r,s),o=Math.min(o,i),n=Math.max(n,i));return{top:o,left:t,right:r+1,bottom:n+1}}function u(e){let t=1/0,o=1/0,n=0,r=0;for(const a of e){const e=p(a);e.left<t&&(t=e.left),e.top<o&&(o=e.top),e.right>r&&(r=e.right),e.bottom>n&&(n=e.bottom)}return{top:o,left:t,right:r,bottom:n}}var m=Object.prototype.toString,h=Array.isArray||function(e){return"[object Array]"===m.call(e)};function f(e){return"function"==typeof e}function g(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function d(e,t){return null!=e&&"object"==typeof e&&t in e}var b=RegExp.prototype.test,y=/\S/;var v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},A=/\s*/,w=/\s+/,W=/\s*=/,k=/\s*\}/,S=/#|\^|\/|>|\{|&|=|!/;function T(e){this.string=e,this.tail=e,this.pos=0}function E(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function N(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}T.prototype.eos=function(){return""===this.tail},T.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var o=t[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},T.prototype.scanUntil=function(e){var t,o=this.tail.search(e);switch(o){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=t.length,t},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var t,o,n,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var a,i,s,l=this,c=!1;l;){if(e.indexOf(".")>0)for(a=l.view,i=e.split("."),s=0;null!=a&&s<i.length;)s===i.length-1&&(c=d(a,i[s])||(o=a,n=i[s],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(n))),a=a[i[s++]];else a=l.view[e],c=d(l.view,e);if(c){t=a;break}l=l.parent}r[e]=t}return f(t)&&(t=t.call(this.view)),t},N.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},N.prototype.parse=function(e,t){var o=this.templateCache,n=e+":"+(t||L.tags).join(":"),r=void 0!==o,a=r?o.get(n):void 0;return null==a&&(a=function(e,t){if(!e)return[];var o,n,r,a,i=!1,s=[],l=[],c=[],p=!1,u=!1,m="",f=0;function d(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function v(e){if("string"==typeof e&&(e=e.split(w,2)),!h(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(g(e[0])+"\\s*"),n=new RegExp("\\s*"+g(e[1])),r=new RegExp("\\s*"+g("}"+e[1]))}v(t||L.tags);for(var E,N,P,C,Z,z,x=new T(e);!x.eos();){if(E=x.pos,P=x.scanUntil(o))for(var V=0,M=P.length;V<M;++V)a=C=P.charAt(V),function(e,t){return b.call(e,t)}(y,a)?(u=!0,i=!0,m+=" "):(c.push(l.length),m+=C),l.push(["text",C,E,E+1]),E+=1,"\n"===C&&(d(),m="",f=0,i=!1);if(!x.scan(o))break;if(p=!0,N=x.scan(S)||"name",x.scan(A),"="===N?(P=x.scanUntil(W),x.scan(W),x.scanUntil(n)):"{"===N?(P=x.scanUntil(r),x.scan(k),x.scanUntil(n),N="&"):P=x.scanUntil(n),!x.scan(n))throw new Error("Unclosed tag at "+x.pos);if(Z=">"==N?[N,P,E,x.pos,m,f,i]:[N,P,E,x.pos],f++,l.push(Z),"#"===N||"^"===N)s.push(Z);else if("/"===N){if(!(z=s.pop()))throw new Error('Unopened section "'+P+'" at '+E);if(z[1]!==P)throw new Error('Unclosed section "'+z[1]+'" at '+E)}else"name"===N||"{"===N||"&"===N?u=!0:"="===N&&v(P)}if(d(),z=s.pop())throw new Error('Unclosed section "'+z[1]+'" at '+x.pos);return function(e){for(var t,o=[],n=o,r=[],a=0,i=e.length;a<i;++a)switch((t=e[a])[0]){case"#":case"^":n.push(t),r.push(t),n=t[4]=[];break;case"/":r.pop()[5]=t[2],n=r.length>0?r[r.length-1][4]:o;break;default:n.push(t)}return o}(function(e){for(var t,o,n=[],r=0,a=e.length;r<a;++r)(t=e[r])&&("text"===t[0]&&o&&"text"===o[0]?(o[1]+=t[1],o[3]=t[3]):(n.push(t),o=t));return n}(l))}(e,t),r&&o.set(n,a)),a},N.prototype.render=function(e,t,o,n){var r=this.getConfigTags(n),a=this.parse(e,r),i=t instanceof E?t:new E(t,void 0);return this.renderTokens(a,i,o,e,n)},N.prototype.renderTokens=function(e,t,o,n,r){for(var a,i,s,l="",c=0,p=e.length;c<p;++c)s=void 0,"#"===(i=(a=e[c])[0])?s=this.renderSection(a,t,o,n,r):"^"===i?s=this.renderInverted(a,t,o,n,r):">"===i?s=this.renderPartial(a,t,o,r):"&"===i?s=this.unescapedValue(a,t):"name"===i?s=this.escapedValue(a,t,r):"text"===i&&(s=this.rawValue(a)),void 0!==s&&(l+=s);return l},N.prototype.renderSection=function(e,t,o,n,r){var a=this,i="",s=t.lookup(e[1]);if(s){if(h(s))for(var l=0,c=s.length;l<c;++l)i+=this.renderTokens(e[4],t.push(s[l]),o,n,r);else if("object"==typeof s||"string"==typeof s||"number"==typeof s)i+=this.renderTokens(e[4],t.push(s),o,n,r);else if(f(s)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(s=s.call(t.view,n.slice(e[3],e[5]),(function(e){return a.render(e,t,o,r)})))&&(i+=s)}else i+=this.renderTokens(e[4],t,o,n,r);return i}},N.prototype.renderInverted=function(e,t,o,n,r){var a=t.lookup(e[1]);if(!a||h(a)&&0===a.length)return this.renderTokens(e[4],t,o,n,r)},N.prototype.indentPartial=function(e,t,o){for(var n=t.replace(/[^ \t]/g,""),r=e.split("\n"),a=0;a<r.length;a++)r[a].length&&(a>0||!o)&&(r[a]=n+r[a]);return r.join("\n")},N.prototype.renderPartial=function(e,t,o,n){if(o){var r=this.getConfigTags(n),a=f(o)?o(e[1]):o[e[1]];if(null!=a){var i=e[6],s=e[5],l=e[4],c=a;0==s&&l&&(c=this.indentPartial(a,l,i));var p=this.parse(c,r);return this.renderTokens(p,t,o,c,n)}}},N.prototype.unescapedValue=function(e,t){var o=t.lookup(e[1]);if(null!=o)return o},N.prototype.escapedValue=function(e,t,o){var n=this.getConfigEscape(o)||L.escape,r=t.lookup(e[1]);if(null!=r)return"number"==typeof r&&n===L.escape?String(r):n(r)},N.prototype.rawValue=function(e){return e[1]},N.prototype.getConfigTags=function(e){return h(e)?e:e&&"object"==typeof e?e.tags:void 0},N.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!h(e)?e.escape:void 0};var L={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){P.templateCache=e},get templateCache(){return P.templateCache}},P=new N;L.clearCache=function(){return P.clearCache()},L.parse=function(e,t){return P.parse(e,t)},L.render=function(e,t,o,n){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(h(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return P.render(e,t,o,n)},L.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return v[e]}))},L.Scanner=T,L.Context=E,L.Writer=N;const C=L;class Z{constructor(e,t){this.template=e,this.state=t,this.ast=C.parse(e)}getValue(){return void 0===this.value&&(this.value=C.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const o of this.getUsedVariables().values())t.push(this.state.onVariableChange(o).subscribe((()=>{const t=C.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const o of e){const e=o[0],n=o[1],r=o[4];["name","&","#","^"].includes(e)&&t.add(n),void 0!==r&&"string"!=typeof r&&this.recursiveGetUsedVariables(r,t)}}}async function z(){var e;const t=await l();for(const[o,n]of t.entries()){const t=null!==(e=n.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type)continue;const t=new Z(e.value,WA.state);if(t.isPureString())continue;const n=t.getValue();x(o,e.name,n),t.onChange((t=>{x(o,e.name,t)}))}}}function x(e,t,o){WA.room.setProperty(e,t,o),"visible"===t&&(o?WA.room.showLayer(e):WA.room.hideLayer(e))}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.0.5/dist";let M,B=0,G=0;function U(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function O(e){return e.map((e=>M.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function _(e){const t=u(O(e)),o=32*((t.right-t.left)/2+t.left),n=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(B-o,2)+Math.pow(G-n,2))}function j(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=_(e.properties.mustGetString("openLayer").split("\n"));if(t>o)return;n=1-t/o}t&&WA.sound.loadSound(t).play({volume:n})}(e):function(e){const t=e.properties.getString("closeSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=_(e.properties.mustGetString("closeLayer").split("\n"));if(t>o)return;n=1-t/o}t&&WA.sound.loadSound(t).play({volume:n})}(e),U(e)})),U(e)}function I(e,t,o,n){const r=e.name;let a,i,s=!1;const l=o.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+r+'"');const c=o.getString("tag");let p=!0;c&&!WA.player.tags.includes(c)&&(p=!1);const m=!!c;function h(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=o.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,f()}})}function f(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=o.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,h()}})}function g(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterZone(l,(()=>{s=!0,o.getBoolean("autoOpen")&&p?WA.state[t.name]=!0:WA.state[t.name]||(!m||p)&&m||!o.getString("code")&&!o.getString("codeVariable")?p&&(WA.state[t.name]?h():f()):function(e){const o=u(O(t.properties.mustGetString("closeLayer").split("\n")));i=WA.room.website.create({name:"doorKeypad"+e,url:n+"/keypad.html#"+encodeURIComponent(e),position:{x:32*o.right,y:32*o.top,width:96,height:128},allowApi:!0})}(r)})),WA.room.onLeaveZone(l,(()=>{s=!1,o.getBoolean("autoClose")&&(WA.state[t.name]=!1),a&&a.remove(),g()})),WA.state.onVariableChange(t.name).subscribe((()=>{s&&(o.getBoolean("autoClose")||!0!==WA.state[t.name]||h(),i&&!0===WA.state[t.name]&&g(),o.getBoolean("autoOpen")||!1!==WA.state[t.name]||f())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=Math.sqrt(Math.pow(e.x-B,2)+Math.pow(e.y-G,2));if(t>o)return;n=1-t/o}WA.sound.loadSound(t).play({volume:n})}(e)}))}function F(e,t){let o;const n=t.mustGetString("zone"),r=t.getString("bellPopup");WA.room.onEnterZone(n,(()=>{var n;r?o=WA.ui.openPopup(r,"",[{label:null!==(n=t.getString("bellButtonText"))&&void 0!==n?n:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(n,(()=>{o&&(o.close(),o=void 0)}))}async function H(e){e=null!=e?e:V;const t=await a();M=await l();for(const e of t.values())e.properties.get("door")&&j(e),e.properties.get("bell")&&D(e);for(const o of M.values()){const r=new n(o.properties),a=r.getString("doorVariable");if(a&&"tilelayer"===o.type){const n=t.get(a);if(void 0===n)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+o.name+'"');I(o,n,r,e)}const i=r.getString("bellVariable");i&&F(i,r)}WA.player.onPlayerMove((e=>{B=e.x,G=e.y}))}function R(e){const t=e.getString("bindVariable");if(t){const o=e.getString("zone");if(!o)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,o,n,r,a){a&&!WA.player.tags.includes(a)||(void 0!==o&&WA.room.onEnterZone(t,(()=>{r||(WA.state[e]=o)})),void 0!==n&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=n})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function K(){return WA.onInit().then((()=>{H().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())R(new n(t.properties))}().catch((e=>console.error(e))),async function(e){const t=(await WA.room.getTiledMap()).layers.find((e=>"configuration"===e.name));if(t){const o=new n(t.properties).getString("tag");o&&!WA.player.tags.includes(o)||WA.ui.registerMenuCommand("Configure the room",(()=>{e=null!=e?e:V,WA.nav.openCoWebSite(e+"/configuration.html",!0)}))}}().catch((e=>console.error(e))),z().catch((e=>console.error(e)))}))}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,o(733).bootstrapExtra)().catch((e=>console.error(e)));let t=[{zoneName:"Tami",name:"Tamara",url:"https://www.linkedin.com/in/tamara-katja-frast/"},{zoneName:"Gerold",name:"Gerold",url:"https://www.linkedin.com/in/gerold-böhler-054437170/"},{zoneName:"Matthias",name:"Matthias",url:"https://www.linkedin.com/in/matthias-frick-96775110a/"},{zoneName:"Herbert",name:"Herbert",url:"https://www.linkedin.com/in/herbert-scheffknecht-7a905b32/"},{zoneName:"Christoph",name:"Christoph",url:""},{zoneName:"Florian",name:"Florian",url:"https://www.linkedin.com/in/florian-voelker/"}];function n(){void 0!==e&&(e.close(),e=void 0)}WA.room.onEnterZone(t[0].zoneName,(()=>{e=WA.ui.openPopup("Office1","Hier sitzt "+t[0].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[0].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone(t[0].zoneName,(()=>{n()})),WA.room.onLeaveZone(t[1].zoneName,(()=>{n()})),WA.room.onLeaveZone(t[2].zoneName,(()=>{n()})),WA.room.onLeaveZone(t[3].zoneName,(()=>{n()})),WA.room.onLeaveZone(t[4].zoneName,(()=>{n()})),WA.room.onLeaveZone(t[5].zoneName,(()=>{n()})),WA.room.onEnterZone(t[1].zoneName,(()=>{e=WA.ui.openPopup("Office1","Hier sitzt "+t[1].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[1].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[2].zoneName,(()=>{e=WA.ui.openPopup("Office2","Hier sitzt "+t[2].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[2].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[3].zoneName,(()=>{e=WA.ui.openPopup("Office2","Hier sitzt "+t[3].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[3].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[4].zoneName,(()=>{e=WA.ui.openPopup("Office2","Hier sitzt "+t[4].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[4].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[5].zoneName,(()=>{e=WA.ui.openPopup("Office3","Hier sitzt "+t[5].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[5].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone("Antiloop_Homepage",(()=>{e=WA.ui.openPopup("Homepage","Neugierig? Besuch unsere Homepage",[{label:"Homepage",className:"primary",callback:e=>{WA.nav.openTab("https://antiloop.com")}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Antiloop_Homepage",n),WA.room.onEnterZone("Football",(()=>{e=WA.ui.openPopup("Football","Komm doch mal auf ein Tischkicker-Match vorbei. Antiloop-CEO Matthias ist leidenschaftlicher Fußballer und freut sich auf einen Kennenlernen mit Dir!",[{label:"Gleich Termin ausmachen",className:"primary",callback:e=>{WA.nav.openTab("https://calendly.com/antiloop-matthias-frick")}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Football",n),WA.room.onEnterZone("Hoody",(()=>{e=WA.ui.openPopup("Hoody","Ein Notebook zieht Dich einfach an? Dann passt unser cooler Antiloop-Hoodie perfekt zu Dir! Schreib uns Deinen Namen, Deine Größe und Deine Post-Anschrift. Oder noch besser: Besuche uns doch im Büro, wir freuen uns auf Deinen Anruf vorab!",[{label:"Gleich schreiben",className:"primary",callback:e=>{WA.nav.openTab("mailto:office@antiloop.com?subject=Hoodie!&body=Name:  Größe:   Post-Adresse:  ")}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Hoody",n),WA.room.onEnterZone("beerFridge",(()=>{e=WA.ui.openPopup("beerFridge","Bei uns herrscht OpenDoor-Policy, auch beim Bierkühlschrank",[{label:"Bierzeit buchen",className:"primary",callback:e=>{WA.nav.openTab("https://calendly.com/antiloop-gerold-boehler")}},{label:"Später",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("beerFridge",n),WA.room.onEnterZone("social_LinkedIn",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab("https://www.linkedin.com/company/antiloopgmbh/")}}])})),WA.room.onLeaveZone("social_LinkedIn",n),WA.room.onEnterZone("social_Instagram",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Instagram",className:"primary",callback:e=>{WA.nav.openTab("https://www.instagram.com/antiloopgmbh/")}}])})),WA.room.onLeaveZone("social_Instagram",n),WA.room.onEnterZone("social_Facebook",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Facebook",className:"primary",callback:e=>{WA.nav.openTab("https://www.facebook.com/antiloopgmbh")}}])})),WA.room.onLeaveZone("social_Facebook",n),WA.room.onEnterZone("social_Twitter",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Twitter",className:"primary",callback:e=>{WA.nav.openTab("https://twitter.com/antiloopgmbh")}}])})),WA.room.onLeaveZone("social_Twitter",n),WA.room.onEnterZone("social_Twitter",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Twitter",className:"primary",callback:e=>{WA.nav.openTab("https://twitter.com/antiloopgmbh")}}])})),WA.room.onLeaveZone("social_Twitter",n),WA.room.onEnterZone("Antiloop_welcome",(()=>{e=WA.ui.openPopup("Antiloop_welcome","Willkommen bei Antiloop!\n\nIn unserem interaktiven Büro bekommst Du einen ersten Eindruck von uns - wie Du siehst, lieben wir unseren Job : -)\n\nGut zu wissen:\n\n- Bevorzugter Browser: Chrome\n\n- Steuerung mit WASD oder Pfeiltasten\n\n- Um einen Videochat zu führen, laufe mit Deiner Spielfigur zu einem Kollegen von uns. Sobald ein Kreis erscheint, kannst Du loslegen.\n\n- Es gibt ein Gewinnspiel, findest Du es?\n\nViel Spaß!",[{label:"Verstanden",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Antiloop_welcome",n)})()})();
//# sourceMappingURL=script.js.map