/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,n)=>{n.r(t),n.d(t,{Properties:()=>o,VariableDescriptor:()=>r,bootstrapExtra:()=>K,findLayerBoundaries:()=>p,findLayersBoundaries:()=>u,getAllVariables:()=>a,getLayersMap:()=>l,initDoors:()=>_,initPropertiesTemplates:()=>z,initVariableActionLayer:()=>R});class o{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const n=this.get(e);if(void 0!==n){if(typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const n=this.get(e);if(void 0===n)throw new Error('Property "'+e+'" is missing');if(typeof n!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return n}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class r{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new o(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function a(){const e=await WA.room.getTiledMap(),t=new Map;return i(e.layers,t),t}function i(e,t){for(const n of e)if("objectgroup"===n.type)for(const e of n.objects)"variable"===e.type&&t.set(e.name,new r(e));else"group"===n.type&&i(n.layers,t)}let s;async function l(){return void 0===s&&(s=async function(){return function(e){const t=new Map;return c(e.layers,"",t),t}(await WA.room.getTiledMap())}()),s}function c(e,t,n){for(const o of e)"group"===o.type?c(o.layers,t+o.name+"/",n):(o.name=t+o.name,n.set(o.name,o))}function p(e){let t=1/0,n=1/0,o=0,r=0;const a=e.data;if("string"==typeof a)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let s=0;s<e.width;s++)0!==a[s+i*e.width]&&(t=Math.min(t,s),r=Math.max(r,s),n=Math.min(n,i),o=Math.max(o,i));return{top:n,left:t,right:r+1,bottom:o+1}}function u(e){let t=1/0,n=1/0,o=0,r=0;for(const a of e){const e=p(a);e.left<t&&(t=e.left),e.top<n&&(n=e.top),e.right>r&&(r=e.right),e.bottom>o&&(o=e.bottom)}return{top:n,left:t,right:r,bottom:o}}var h=Object.prototype.toString,m=Array.isArray||function(e){return"[object Array]"===h.call(e)};function f(e){return"function"==typeof e}function g(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function b(e,t){return null!=e&&"object"==typeof e&&t in e}var d=RegExp.prototype.test,y=/\S/;var v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},A=/\s*/,w=/\s+/,W=/\s*=/,k=/\s*\}/,S=/#|\^|\/|>|\{|&|=|!/;function T(e){this.string=e,this.tail=e,this.pos=0}function E(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function L(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}T.prototype.eos=function(){return""===this.tail},T.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},T.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var t,n,o,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var a,i,s,l=this,c=!1;l;){if(e.indexOf(".")>0)for(a=l.view,i=e.split("."),s=0;null!=a&&s<i.length;)s===i.length-1&&(c=b(a,i[s])||(n=a,o=i[s],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(o))),a=a[i[s++]];else a=l.view[e],c=b(l.view,e);if(c){t=a;break}l=l.parent}r[e]=t}return f(t)&&(t=t.call(this.view)),t},L.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},L.prototype.parse=function(e,t){var n=this.templateCache,o=e+":"+(t||N.tags).join(":"),r=void 0!==n,a=r?n.get(o):void 0;return null==a&&(a=function(e,t){if(!e)return[];var n,o,r,a,i=!1,s=[],l=[],c=[],p=!1,u=!1,h="",f=0;function b(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function v(e){if("string"==typeof e&&(e=e.split(w,2)),!m(e)||2!==e.length)throw new Error("Invalid tags: "+e);n=new RegExp(g(e[0])+"\\s*"),o=new RegExp("\\s*"+g(e[1])),r=new RegExp("\\s*"+g("}"+e[1]))}v(t||N.tags);for(var E,L,P,C,Z,z,x=new T(e);!x.eos();){if(E=x.pos,P=x.scanUntil(n))for(var V=0,M=P.length;V<M;++V)a=C=P.charAt(V),function(e,t){return d.call(e,t)}(y,a)?(u=!0,i=!0,h+=" "):(c.push(l.length),h+=C),l.push(["text",C,E,E+1]),E+=1,"\n"===C&&(b(),h="",f=0,i=!1);if(!x.scan(n))break;if(p=!0,L=x.scan(S)||"name",x.scan(A),"="===L?(P=x.scanUntil(W),x.scan(W),x.scanUntil(o)):"{"===L?(P=x.scanUntil(r),x.scan(k),x.scanUntil(o),L="&"):P=x.scanUntil(o),!x.scan(o))throw new Error("Unclosed tag at "+x.pos);if(Z=">"==L?[L,P,E,x.pos,h,f,i]:[L,P,E,x.pos],f++,l.push(Z),"#"===L||"^"===L)s.push(Z);else if("/"===L){if(!(z=s.pop()))throw new Error('Unopened section "'+P+'" at '+E);if(z[1]!==P)throw new Error('Unclosed section "'+z[1]+'" at '+E)}else"name"===L||"{"===L||"&"===L?u=!0:"="===L&&v(P)}if(b(),z=s.pop())throw new Error('Unclosed section "'+z[1]+'" at '+x.pos);return function(e){for(var t,n=[],o=n,r=[],a=0,i=e.length;a<i;++a)switch((t=e[a])[0]){case"#":case"^":o.push(t),r.push(t),o=t[4]=[];break;case"/":r.pop()[5]=t[2],o=r.length>0?r[r.length-1][4]:n;break;default:o.push(t)}return n}(function(e){for(var t,n,o=[],r=0,a=e.length;r<a;++r)(t=e[r])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(o.push(t),n=t));return o}(l))}(e,t),r&&n.set(o,a)),a},L.prototype.render=function(e,t,n,o){var r=this.getConfigTags(o),a=this.parse(e,r),i=t instanceof E?t:new E(t,void 0);return this.renderTokens(a,i,n,e,o)},L.prototype.renderTokens=function(e,t,n,o,r){for(var a,i,s,l="",c=0,p=e.length;c<p;++c)s=void 0,"#"===(i=(a=e[c])[0])?s=this.renderSection(a,t,n,o,r):"^"===i?s=this.renderInverted(a,t,n,o,r):">"===i?s=this.renderPartial(a,t,n,r):"&"===i?s=this.unescapedValue(a,t):"name"===i?s=this.escapedValue(a,t,r):"text"===i&&(s=this.rawValue(a)),void 0!==s&&(l+=s);return l},L.prototype.renderSection=function(e,t,n,o,r){var a=this,i="",s=t.lookup(e[1]);if(s){if(m(s))for(var l=0,c=s.length;l<c;++l)i+=this.renderTokens(e[4],t.push(s[l]),n,o,r);else if("object"==typeof s||"string"==typeof s||"number"==typeof s)i+=this.renderTokens(e[4],t.push(s),n,o,r);else if(f(s)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(s=s.call(t.view,o.slice(e[3],e[5]),(function(e){return a.render(e,t,n,r)})))&&(i+=s)}else i+=this.renderTokens(e[4],t,n,o,r);return i}},L.prototype.renderInverted=function(e,t,n,o,r){var a=t.lookup(e[1]);if(!a||m(a)&&0===a.length)return this.renderTokens(e[4],t,n,o,r)},L.prototype.indentPartial=function(e,t,n){for(var o=t.replace(/[^ \t]/g,""),r=e.split("\n"),a=0;a<r.length;a++)r[a].length&&(a>0||!n)&&(r[a]=o+r[a]);return r.join("\n")},L.prototype.renderPartial=function(e,t,n,o){if(n){var r=this.getConfigTags(o),a=f(n)?n(e[1]):n[e[1]];if(null!=a){var i=e[6],s=e[5],l=e[4],c=a;0==s&&l&&(c=this.indentPartial(a,l,i));var p=this.parse(c,r);return this.renderTokens(p,t,n,c,o)}}},L.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},L.prototype.escapedValue=function(e,t,n){var o=this.getConfigEscape(n)||N.escape,r=t.lookup(e[1]);if(null!=r)return"number"==typeof r&&o===N.escape?String(r):o(r)},L.prototype.rawValue=function(e){return e[1]},L.prototype.getConfigTags=function(e){return m(e)?e:e&&"object"==typeof e?e.tags:void 0},L.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!m(e)?e.escape:void 0};var N={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){P.templateCache=e},get templateCache(){return P.templateCache}},P=new L;N.clearCache=function(){return P.clearCache()},N.parse=function(e,t){return P.parse(e,t)},N.render=function(e,t,n,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(m(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return P.render(e,t,n,o)},N.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return v[e]}))},N.Scanner=T,N.Context=E,N.Writer=L;const C=N;class Z{constructor(e,t){this.template=e,this.state=t,this.ast=C.parse(e)}getValue(){return void 0===this.value&&(this.value=C.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const n of this.getUsedVariables().values())t.push(this.state.onVariableChange(n).subscribe((()=>{const t=C.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const n of e){const e=n[0],o=n[1],r=n[4];["name","&","#","^"].includes(e)&&t.add(o),void 0!==r&&"string"!=typeof r&&this.recursiveGetUsedVariables(r,t)}}}async function z(){var e;const t=await l();for(const[n,o]of t.entries()){const t=null!==(e=o.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type)continue;const t=new Z(e.value,WA.state);if(t.isPureString())continue;const o=t.getValue();x(n,e.name,o),t.onChange((t=>{x(n,e.name,t)}))}}}function x(e,t,n){WA.room.setProperty(e,t,n),"visible"===t&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.0.5/dist";let M,U=0,B=0;function G(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function O(e){return e.map((e=>M.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function j(e){const t=u(O(e)),n=32*((t.right-t.left)/2+t.left),o=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(U-n,2)+Math.pow(B-o,2))}function D(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const t=j(e.properties.mustGetString("openLayer").split("\n"));if(t>n)return;o=1-t/n}t&&WA.sound.loadSound(t).play({volume:o})}(e):function(e){const t=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const t=j(e.properties.mustGetString("closeLayer").split("\n"));if(t>n)return;o=1-t/n}t&&WA.sound.loadSound(t).play({volume:o})}(e),G(e)})),G(e)}function F(e,t,n,o){const r=e.name;let a,i,s=!1;const l=n.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+r+'"');const c=n.getString("tag");let p=!0;c&&!WA.player.tags.includes(c)&&(p=!1);const h=!!c;function m(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=n.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,f()}})}function f(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=n.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,m()}})}function g(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterZone(l,(()=>{s=!0,n.getBoolean("autoOpen")&&p?WA.state[t.name]=!0:WA.state[t.name]||(!h||p)&&h||!n.getString("code")&&!n.getString("codeVariable")?p&&(WA.state[t.name]?m():f()):function(e){const n=u(O(t.properties.mustGetString("closeLayer").split("\n")));i=WA.room.website.create({name:"doorKeypad"+e,url:o+"/keypad.html#"+encodeURIComponent(e),position:{x:32*n.right,y:32*n.top,width:96,height:128},allowApi:!0})}(r)})),WA.room.onLeaveZone(l,(()=>{s=!1,n.getBoolean("autoClose")&&(WA.state[t.name]=!1),a&&a.remove(),g()})),WA.state.onVariableChange(t.name).subscribe((()=>{s&&(n.getBoolean("autoClose")||!0!==WA.state[t.name]||m(),i&&!0===WA.state[t.name]&&g(),n.getBoolean("autoOpen")||!1!==WA.state[t.name]||f())}))}function H(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const t=Math.sqrt(Math.pow(e.x-U,2)+Math.pow(e.y-B,2));if(t>n)return;o=1-t/n}WA.sound.loadSound(t).play({volume:o})}(e)}))}function I(e,t){let n;const o=t.mustGetString("zone"),r=t.getString("bellPopup");WA.room.onEnterZone(o,(()=>{var o;r?n=WA.ui.openPopup(r,"",[{label:null!==(o=t.getString("bellButtonText"))&&void 0!==o?o:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(o,(()=>{n&&(n.close(),n=void 0)}))}async function _(e){e=null!=e?e:V;const t=await a();M=await l();for(const e of t.values())e.properties.get("door")&&D(e),e.properties.get("bell")&&H(e);for(const n of M.values()){const r=new o(n.properties),a=r.getString("doorVariable");if(a&&"tilelayer"===n.type){const o=t.get(a);if(void 0===o)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+n.name+'"');F(n,o,r,e)}const i=r.getString("bellVariable");i&&I(i,r)}WA.player.onPlayerMove((e=>{U=e.x,B=e.y}))}function R(e){const t=e.getString("bindVariable");if(t){const n=e.getString("zone");if(!n)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,n,o,r,a){a&&!WA.player.tags.includes(a)||(void 0!==n&&WA.room.onEnterZone(t,(()=>{r||(WA.state[e]=n)})),void 0!==o&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=o})))}(t,n,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function K(){return WA.onInit().then((()=>{_().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())R(new o(t.properties))}().catch((e=>console.error(e))),async function(e){const t=(await WA.room.getTiledMap()).layers.find((e=>"configuration"===e.name));if(t){const n=new o(t.properties).getString("tag");n&&!WA.player.tags.includes(n)||WA.ui.registerMenuCommand("Configure the room",(()=>{e=null!=e?e:V,WA.nav.openCoWebSite(e+"/configuration.html",!0)}))}}().catch((e=>console.error(e))),z().catch((e=>console.error(e)))}))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,n(733).bootstrapExtra)().catch((e=>console.error(e)));let t=[{zoneName:"Tami",name:"Tamara",url:"https://www.linkedin.com/in/tamara-katja-frast-7709a71ab/"},{zoneName:"Gerold",name:"Gerold",url:"https://www.linkedin.com/in/gerold-böhler-054437170/"},{zoneName:"Matthias",name:"Matthias",url:"https://www.linkedin.com/in/matthias-frick-96775110a/"},{zoneName:"Herbert",name:"Herbert",url:"https://www.linkedin.com/in/herbert-scheffknecht-7a905b32/"},{zoneName:"Christoph",name:"Christoph",url:""},{zoneName:"Florian",name:"Florian",url:"https://www.linkedin.com/in/florian-voelker/"}];function o(){void 0!==e&&(e.close(),e=void 0)}WA.room.onEnterZone(t[0].zoneName,(()=>{e=WA.ui.openPopup("Office1","Hier sitzt "+t[0].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[0].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone(t[0].zoneName,(()=>{o()})),WA.room.onLeaveZone(t[1].zoneName,(()=>{o()})),WA.room.onLeaveZone(t[2].zoneName,(()=>{o()})),WA.room.onLeaveZone(t[3].zoneName,(()=>{o()})),WA.room.onLeaveZone(t[4].zoneName,(()=>{o()})),WA.room.onLeaveZone(t[5].zoneName,(()=>{o()})),WA.room.onEnterZone(t[1].zoneName,(()=>{e=WA.ui.openPopup("Office1","Hier sitzt "+t[1].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[1].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[2].zoneName,(()=>{e=WA.ui.openPopup("Office2","Hier sitzt "+t[2].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[2].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[3].zoneName,(()=>{e=WA.ui.openPopup("Office2","Hier sitzt "+t[3].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[3].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[4].zoneName,(()=>{e=WA.ui.openPopup("Office2","Hier sitzt "+t[4].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[4].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone(t[5].zoneName,(()=>{e=WA.ui.openPopup("Office3","Hier sitzt "+t[5].name+". Let's get in touch?",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab(t[5].url)}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onEnterZone("Antiloop_Homepage",(()=>{e=WA.ui.openPopup("Homepage","Neugierig? Besuch unsere Homepage",[{label:"Homepage",className:"primary",callback:e=>{WA.nav.openTab("https://antiloop.com")}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Antiloop_Homepage",o),WA.room.onEnterZone("Football",(()=>{e=WA.ui.openPopup("Football","Komm doch mal auf ein Tischkicker-Match vorbei. Antiloop-CEO Matthias ist leidenschaftlicher Fußballer und freut sich auf einen Kennenlernen mit Dir!",[{label:"Gleich Termin ausmachen",className:"primary",callback:e=>{WA.nav.openTab("https://calendly.com/antiloop-matthias-frick")}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Football",o),WA.room.onEnterZone("Hoody",(()=>{e=WA.ui.openPopup("Hoody","Ein Notebook zieht Dich einfach an? Dann passt unser cooler Antiloop-Hoodie perfekt zu Dir! Schreib uns Deinen Namen, Deine Größe und Deine Post-Anschrift. Oder noch besser: Besuche uns doch im Büro, wir freuen uns auf Deinen Anruf vorab!",[{label:"Gleich schreiben",className:"primary",callback:e=>{WA.nav.openTab("mailto:office@antiloop.com?subject=Hoodie!&body=Name:  Größe:   Post-Adresse:  ")}},{label:"Schließen",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Hoody",o),WA.room.onEnterZone("beerFridge",(()=>{e=WA.ui.openPopup("beerFridge","Bei uns herrscht OpenDoor-Policy, auch beim Bierkühlschrank",[{label:"Bierzeit buchen",className:"primary",callback:e=>{WA.nav.openTab("https://calendly.com/antiloop-gerold-boehler")}},{label:"Später",className:"normal",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("beerFridge",o),WA.room.onEnterZone("social_LinkedIn",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"LinkedIn",className:"primary",callback:e=>{WA.nav.openTab("https://www.linkedin.com/company/antiloopgmbh/")}}])})),WA.room.onLeaveZone("social_LinkedIn",o),WA.room.onEnterZone("social_Instagram",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Instagram",className:"primary",callback:e=>{WA.nav.openTab("https://www.instagram.com/antiloopgmbh/")}}])})),WA.room.onLeaveZone("social_Instagram",o),WA.room.onEnterZone("social_Facebook",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Facebook",className:"primary",callback:e=>{WA.nav.openTab("https://www.facebook.com/antiloopgmbh")}}])})),WA.room.onLeaveZone("social_Facebook",o),WA.room.onEnterZone("social_Twitter",(()=>{e=WA.ui.openPopup("FollowUs","",[{label:"Twitter",className:"primary",callback:e=>{WA.nav.openTab("https://twitter.com/antiloopgmbh")}}])})),WA.room.onLeaveZone("social_Twitter",o),WA.room.onEnterZone("Antiloop_welcome",(()=>{e=WA.ui.openPopup("Antiloop_welcome","Willkommen bei Antiloop!\n\nIn unserem interaktiven Büro bekommst Du einen ersten Eindruck von uns - wie Du siehst, lieben wir unseren Job : -)\n\nGut zu wissen:\n\n- Bevorzugter Browser: Chrome\n\n- Steuerung mit WASD oder Pfeiltasten\n\n- Um einen Videochat zu führen, laufe mit Deiner Spielfigur zu einem Kollegen von uns. Sobald ein Kreis erscheint, kannst Du loslegen.\n\n- Es gibt ein Gewinnspiel, findest Du es?\n\nViel Spaß!",[{label:"Verstanden",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("Antiloop_welcome",o),WA.room.onEnterZone("TalkSchedule",(()=>{e=WA.ui.openPopup("Talks","Timeline: Antiloop-Newsroom\n\n09:00 - 09:30 Uhr\nOffene Fragerunde, Antiloop als Arbeitgeber\n\n10:00 - 10:30 Uhr\nTechnologie-Überblick: Mit welchen Lösungen arbeitet Antiloop\n\n10:30 - 10:45 Uhr\n Projekt-Talk: E-Commerce Lösung für Elektrogroßhandel\n\n 13:15 - 13:45 Uhr\n Offene Fragenrunde, Antiloop als Arbeitgeber\n\n14:00 - 14:30 Uhr\nDesign Patterns in PHP am Beispiel Spryker\n\n14:45 - 15:15 Uhr\nOffene Fragerunde, Antiloop als Arbeitgeber\n\n15:30 - 15:45 Uhr\nProjekt-Ablauf: Wie arbeitet Antiloop\n\n15:45 - 16:00 Uh\nAusklang: Der “virtuelle” Bierschrank wird geöffnet",[{label:"Ok",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveZone("TalkSchedule",o)})()})();
//# sourceMappingURL=script.js.map