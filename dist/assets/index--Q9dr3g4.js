(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ee=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Ye=(s,t,e=null,i=null)=>{for(;t!==e;){const n=t.nextSibling;s.insertBefore(t,i),t=n}},Lt=(s,t,e=null)=>{for(;t!==e;){const i=t.nextSibling;s.removeChild(t),t=i}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const B=`{{lit-${String(Math.random()).slice(2)}}}`,Re=`<!--${B}-->`,se=new RegExp(`${B}|${Re}`),Y="$lit$";class Se{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let a=0,o=-1,l=0;const{strings:d,values:{length:c}}=t;for(;l<c;){const h=r.nextNode();if(h===null){r.currentNode=n.pop();continue}if(o++,h.nodeType===1){if(h.hasAttributes()){const p=h.attributes,{length:m}=p;let g=0;for(let y=0;y<m;y++)ie(p[y].name,Y)&&g++;for(;g-- >0;){const y=d[l],u=It.exec(y)[2],R=u.toLowerCase()+Y,b=h.getAttribute(R);h.removeAttribute(R);const S=b.split(se);this.parts.push({type:"attribute",index:o,name:u,strings:S}),l+=S.length-1}}h.tagName==="TEMPLATE"&&(n.push(h),r.currentNode=h.content)}else if(h.nodeType===3){const p=h.data;if(p.indexOf(B)>=0){const m=h.parentNode,g=p.split(se),y=g.length-1;for(let u=0;u<y;u++){let R,b=g[u];if(b==="")R=M();else{const S=It.exec(b);S!==null&&ie(S[2],Y)&&(b=b.slice(0,S.index)+S[1]+S[2].slice(0,-Y.length)+S[3]),R=document.createTextNode(b)}m.insertBefore(R,h),this.parts.push({type:"node",index:++o})}g[y]===""?(m.insertBefore(M(),h),i.push(h)):h.data=g[y],l+=y}}else if(h.nodeType===8)if(h.data===B){const p=h.parentNode;(h.previousSibling===null||o===a)&&(o++,p.insertBefore(M(),h)),a=o,this.parts.push({type:"node",index:o}),h.nextSibling===null?h.data="":(i.push(h),o--),l++}else{let p=-1;for(;(p=h.data.indexOf(B,p+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(const h of i)h.parentNode.removeChild(h)}}const ie=(s,t)=>{const e=s.length-t.length;return e>=0&&s.slice(e)===t},Pe=s=>s.index!==-1,M=()=>document.createComment(""),It=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ht=133;function ke(s,t){const{element:{content:e},parts:i}=s,n=document.createTreeWalker(e,Ht,null,!1);let r=J(i),a=i[r],o=-1,l=0;const d=[];let c=null;for(;n.nextNode();){o++;const h=n.currentNode;for(h.previousSibling===c&&(c=null),t.has(h)&&(d.push(h),c===null&&(c=h)),c!==null&&l++;a!==void 0&&a.index===o;)a.index=c!==null?-1:a.index-l,r=J(i,r),a=i[r]}d.forEach(h=>h.parentNode.removeChild(h))}const Je=s=>{let t=s.nodeType===11?0:1;const e=document.createTreeWalker(s,Ht,null,!1);for(;e.nextNode();)t++;return t},J=(s,t=-1)=>{for(let e=t+1;e<s.length;e++){const i=s[e];if(Pe(i))return e}return-1};function Qe(s,t,e=null){const{element:{content:i},parts:n}=s;if(e==null){i.appendChild(t);return}const r=document.createTreeWalker(i,Ht,null,!1);let a=J(n),o=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===e&&(o=Je(t),e.parentNode.insertBefore(t,e));a!==-1&&n[a].index===l;){if(o>0){for(;a!==-1;)n[a].index+=o,a=J(n,a);return}a=J(n,a)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _e=new WeakMap,Ie=s=>(...t)=>{const e=s(...t);return _e.set(e,!0),e},et=s=>typeof s=="function"&&_e.has(s);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const P={},ne={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Et{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)i!==void 0&&i.setValue(t[e]),e++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const t=ee?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r=0,a=0,o,l=n.nextNode();for(;r<i.length;){if(o=i[r],!Pe(o)){this.__parts.push(void 0),r++;continue}for(;a<o.index;)a++,l.nodeName==="TEMPLATE"&&(e.push(l),n.currentNode=l.content),(l=n.nextNode())===null&&(n.currentNode=e.pop(),l=n.nextNode());if(o.type==="node"){const d=this.processor.handleTextExpression(this.options);d.insertAfterNode(l.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}return ee&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const re=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),ts=` ${B} `;class jt{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const r=this.strings[n],a=r.lastIndexOf("<!--");i=(a>-1||i)&&r.indexOf("-->",a+1)===-1;const o=It.exec(r);o===null?e+=r+(i?ts:Re):e+=r.substr(0,o.index)+o[1]+o[2]+Y+o[3]+B}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return re!==void 0&&(e=re.createHTML(e)),t.innerHTML=e,t}}class es extends jt{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,i=e.firstChild;return e.removeChild(i),Ye(e,i.firstChild),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Kt=s=>s===null||!(typeof s=="object"||typeof s=="function"),Ut=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]);class Ee{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new ut(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(e===1&&t[0]===""&&t[1]===""){const r=i[0].value;if(typeof r=="symbol")return String(r);if(typeof r=="string"||!Ut(r))return r}let n="";for(let r=0;r<e;r++){n+=t[r];const a=i[r];if(a!==void 0){const o=a.value;if(Kt(o)||!Ut(o))n+=typeof o=="string"?o:String(o);else for(const l of o)n+=typeof l=="string"?l:String(l)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ut{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==P&&(!Kt(t)||t!==this.value)&&(this.value=t,et(t)||(this.committer.dirty=!0))}commit(){for(;et(this.value);){const t=this.value;this.value=P,t(this)}this.value!==P&&this.committer.commit()}}class gt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(M()),this.endNode=t.appendChild(M())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=M()),t.__insert(this.endNode=M())}insertAfterPart(t){t.__insert(this.startNode=M()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;et(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=P,e(this)}const t=this.__pendingValue;t!==P&&(Kt(t)?t!==this.value&&this.__commitText(t):t instanceof jt?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Ut(t)?this.__commitIterable(t):t===ne?(this.value=ne,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling;t=t??"";const i=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof Et&&this.value.template===e)this.value.update(t.values);else{const i=new Et(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i=0,n;for(const r of t)n=e[i],n===void 0&&(n=new gt(this.options),e.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){Lt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ss{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;et(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=P,e(this)}if(this.__pendingValue===P)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=P}}class is extends Ee{constructor(t,e,i){super(t,e,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new qt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class qt extends ut{}let Ue=!1;(()=>{try{const s={get capture(){return Ue=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class ns{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(t){this.__pendingValue=t}commit(){for(;et(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=P,r(this)}if(this.__pendingValue===P)return;const t=this.__pendingValue,e=this.value,i=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=t!=null&&(e==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=rs(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=P}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const rs=s=>s&&(Ue?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function as(s){let t=st.get(s.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},st.set(s.type,t));let e=t.stringsArray.get(s.strings);if(e!==void 0)return e;const i=s.strings.join(B);return e=t.keyString.get(i),e===void 0&&(e=new Se(s,s.getTemplateElement()),t.keyString.set(i,e)),t.stringsArray.set(s.strings,e),e}const st=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new WeakMap,os=(s,t,e)=>{let i=H.get(t);i===void 0&&(Lt(t,t.firstChild),H.set(t,i=new gt(Object.assign({templateFactory:as},e))),i.appendInto(t)),i.setValue(s),i.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ls{handleAttributeExpressions(t,e,i,n){const r=e[0];return r==="."?new is(t,e.slice(1),i).parts:r==="@"?[new ns(t,e.slice(1),n.eventContext)]:r==="?"?[new ss(t,e.slice(1),i)]:new Ee(t,e,i).parts}handleTextExpression(t){return new gt(t)}}const Te=new ls;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const C=(s,...t)=>new jt(s,t,"html",Te),A=(s,...t)=>new es(s,t,"svg",Te);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ae=(s,t)=>`${s}--${t}`;let lt=!0;typeof window.ShadyCSS>"u"?lt=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),lt=!1);const cs=s=>t=>{const e=Ae(t.type,s);let i=st.get(e);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},st.set(e,i));let n=i.stringsArray.get(t.strings);if(n!==void 0)return n;const r=t.strings.join(B);if(n=i.keyString.get(r),n===void 0){const a=t.getTemplateElement();lt&&window.ShadyCSS.prepareTemplateDom(a,s),n=new Se(t,a),i.keyString.set(r,n)}return i.stringsArray.set(t.strings,n),n},hs=["html","svg"],ds=s=>{hs.forEach(t=>{const e=st.get(Ae(t,s));e!==void 0&&e.keyString.forEach(i=>{const{element:{content:n}}=i,r=new Set;Array.from(n.querySelectorAll("style")).forEach(a=>{r.add(a)}),ke(i,r)})})},Oe=new Set,fs=(s,t,e)=>{Oe.add(s);const i=e?e.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(r===0){window.ShadyCSS.prepareTemplateStyles(i,s);return}const a=document.createElement("style");for(let d=0;d<r;d++){const c=n[d];c.parentNode.removeChild(c),a.textContent+=c.textContent}ds(s);const o=i.content;e?Qe(e,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,s);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(e){o.insertBefore(a,o.firstChild);const d=new Set;d.add(a),ke(e,d)}},ps=(s,t,e)=>{if(!e||typeof e!="object"||!e.scopeName)throw new Error("The `scopeName` option is required.");const i=e.scopeName,n=H.has(t),r=lt&&t.nodeType===11&&!!t.host,a=r&&!Oe.has(i),o=a?document.createDocumentFragment():t;if(os(s,o,Object.assign({templateFactory:cs(i)},e)),a){const l=H.get(o);H.delete(o);const d=l.value instanceof Et?l.value.template:void 0;fs(i,o,d),Lt(t,t.firstChild),t.appendChild(o),H.set(t,l)}!n&&r&&window.ShadyCSS.styleElement(t.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Be;window.JSCompiler_renameProperty=(s,t)=>s;const Tt={toAttribute(s,t){switch(t){case Boolean:return s?"":null;case Object:case Array:return s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){switch(t){case Boolean:return s!==null;case Number:return s===null?null:Number(s);case Object:case Array:return JSON.parse(s)}return s}},Me=(s,t)=>t!==s&&(t===t||s===s),yt={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:Me},wt=1,ae=4,oe=8,le=16,At="finalized";class Ve extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);n!==void 0&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((e,i)=>this._classProperties.set(i,e))}}static createProperty(t,e=yt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i=typeof t=="symbol"?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||yt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(At)||t.finalize(),this[At]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(e):[]];for(const n of i)this.createProperty(n,e[n])}}static _attributeNameForProperty(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Me){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||Tt,r=typeof n=="function"?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(e.reflect===void 0)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||Tt.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const i=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=yt){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(r!==void 0){const a=n._propertyValueToAttribute(e,i);if(a===void 0)return;this._updateState=this._updateState|oe,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._updateState=this._updateState&-9}}_attributeToProperty(t,e){if(this._updateState&oe)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(n!==void 0){const r=i.getPropertyOptions(n);this._updateState=this._updateState|le,this[n]=i._propertyValueFromAttribute(e,r),this._updateState=this._updateState&-17}}requestUpdateInternal(t,e,i){let n=!0;if(t!==void 0){const r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),i.reflect===!0&&!(this._updateState&le)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|ae;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&ae}get hasUpdated(){return this._updateState&wt}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(this._updateState&wt||(this._updateState=this._updateState|wt,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&-5}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,i)=>this._propertyToAttribute(i,this[i],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Be=At;Ve[Be]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const us=(s,t)=>(window.customElements.define(s,t),t),gs=(s,t)=>{const{kind:e,elements:i}=t;return{kind:e,elements:i,finisher(n){window.customElements.define(s,n)}}},v=s=>t=>typeof t=="function"?us(s,t):gs(s,t),ms=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(e){e.createProperty(t.key,s)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},ys=(s,t,e)=>{t.constructor.createProperty(e,s)};function f(s){return(t,e)=>e!==void 0?ys(s,t,e):ms(s,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ot=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wt=Symbol();class Xt{constructor(t,e){if(e!==Wt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ws=s=>new Xt(String(s),Wt),xs=s=>{if(s instanceof Xt)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},$=(s,...t)=>{const e=t.reduce((i,n,r)=>i+xs(n)+s[r+1],s[0]);return new Xt(e,Wt)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ce={};class x extends Ve{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(r,a)=>r.reduceRight((o,l)=>Array.isArray(l)?e(l,o):(o.add(l),o),a),i=e(t,new Set),n=[];i.forEach(r=>n.unshift(r)),this._styles=n}else this._styles=t===void 0?[]:[t];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Ot){const i=Array.prototype.slice.call(e.cssRules).reduce((n,r)=>n+r.cssText,"");return ws(i)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(e=>e.cssText),this.localName):Ot?this.renderRoot.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ce&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const n=document.createElement("style");n.textContent=i.cssText,this.renderRoot.appendChild(n)}))}render(){return ce}}x.finalized=!0;x.render=ps;x.shadowRootOptions={mode:"open"};var Gt=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let ct=class extends x{constructor(){super(...arguments),this.color="red",this.values=[0,0,0,0,0,0,0,0]}static get styles(){return $`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `}render(){const{color:t,values:e}=this,i=n=>e[n]?t:"#ddd";return C`
      <svg
        width="12mm"
        height="18.5mm"
        version="1.1"
        viewBox="0 0 12 18.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="skewX(-8) translate(2, 0)">
          <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${i(0)}" />
          <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${i(1)}" />
          <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${i(2)}" />
          <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${i(3)}" />
          <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${i(4)}" />
          <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${i(5)} />
          <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${i(6)} />
        </g>
        <circle cx="11" cy="17" r="1.1" fill="${i(7)}" />
      </svg>
    `}};Gt([f()],ct.prototype,"color",void 0);Gt([f({type:Array})],ct.prototype,"values",void 0);ct=Gt([v("wokwi-7segment")],ct);var rt=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let W=class extends x{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:n}=this;return C`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        style="font-size: 2px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        <pattern id="pins" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
          <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
          <path
            transform="translate(1.079, 1.658) rotate(180 0 0)"
            d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
            style="opacity: 0.25"
          ></path>
          <path
            transform="translate(1.841, 1.658) rotate(90 0 0)"
            d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
            style="opacity: 0.3; fill: #fff"
          ></path>
          <path
            transform="translate(1.841, 0.896)"
            d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
            style="opacity: 0.15; fill: #fff"
          ></path>
          <path
            transform="translate(1.079, 0.896) rotate(270 0 0)"
            d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
            style="opacity: 0.35"
          ></path>
        </pattern>

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${.38+2.54*10}" height="2.54" fill="url(#pins)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${.38+2.54*8}" height="2.54" fill="url(#pins)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${.38+2.54*8}" height="2.54" fill="url(#pins)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${.38+2.54*6}" height="2.54" fill="url(#pins)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <circle cx="33.269" cy="36.847" r="1.016" fill="#252728" />
          <circle cx="59.939" cy="36.847" r="1.016" fill="#252728" />
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${t&&A`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${e&&A`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${n&&A`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${i&&A`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">~7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">
          UNO
        </text>
      </svg>
    `}};rt([f()],W.prototype,"led13",void 0);rt([f()],W.prototype,"ledRX",void 0);rt([f()],W.prototype,"ledTX",void 0);rt([f()],W.prototype,"ledPower",void 0);W=rt([v("wokwi-arduino-uno")],W);const Cs=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,14,17,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,30,1,1,14,16,16,15,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,7,1,1,1,1,1,7,0,17,10,31,4,31,4,4,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,30,17,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,6,4,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,17,17,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,21,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,5,7,0,28,4,4,4,0,0,0,0,0,0,0,4,4,4,7,0,0,0,0,0,1,2,4,0,0,0,0,6,6,0,0,0,0,31,16,31,16,8,4,0,0,0,31,16,12,4,2,0,0,0,8,4,6,5,4,0,0,0,4,31,17,16,12,0,0,0,31,4,4,4,31,0,0,0,8,31,12,10,9,0,0,0,2,31,18,10,2,0,0,0,0,14,8,8,31,0,0,0,15,8,15,8,15,0,0,0,0,21,21,16,12,0,0,0,0,31,0,0,0,0,31,16,20,12,4,4,2,0,16,8,4,6,5,4,4,0,4,31,17,17,16,8,4,0,0,31,4,4,4,4,31,0,8,31,8,12,10,9,8,0,2,31,18,18,18,18,9,0,4,31,4,31,4,4,4,0,0,30,18,17,16,8,6,0,2,30,9,8,8,8,4,0,0,31,16,16,16,16,31,0,10,31,10,10,8,4,2,0,0,3,16,19,16,8,7,0,0,31,16,8,4,10,17,0,2,31,18,10,2,2,28,0,0,17,17,18,16,8,6,0,0,30,18,21,24,8,6,0,8,7,4,31,4,4,2,0,0,21,21,21,16,8,4,0,14,0,31,4,4,4,2,0,2,2,2,6,10,2,2,0,4,4,31,4,4,2,1,0,0,14,0,0,0,0,31,0,0,31,16,10,4,10,1,0,4,31,8,4,14,21,4,0,8,8,8,8,8,4,2,0,0,4,8,17,17,17,17,0,1,1,31,1,1,1,30,0,0,31,16,16,16,8,6,0,0,2,5,8,16,16,0,0,4,31,4,4,21,21,4,0,0,31,16,16,10,4,8,0,0,14,0,14,0,14,16,0,0,4,2,1,17,31,16,0,0,16,16,10,4,10,1,0,0,31,2,31,2,2,28,0,2,2,31,18,10,2,2,0,0,14,8,8,8,8,31,0,0,31,16,31,16,16,31,0,14,0,31,16,16,8,4,0,9,9,9,9,8,4,2,0,0,4,5,5,21,21,13,0,0,1,1,17,9,5,3,0,0,31,17,17,17,17,31,0,0,31,17,17,16,8,4,0,0,3,0,16,16,8,7,0,4,9,2,0,0,0,0,0,7,5,7,0,0,0,0,0,0,0,18,21,9,9,22,0,10,0,14,16,30,17,30,0,0,0,14,17,15,17,15,1,0,0,14,1,6,17,14,0,0,0,17,17,17,25,23,1,0,0,30,5,9,17,14,0,0,0,12,18,17,17,15,1,0,0,30,17,17,17,30,16,0,0,28,4,4,5,2,0,0,8,11,8,0,0,0,0,8,0,12,8,8,8,8,8,0,5,2,5,0,0,0,0,0,4,14,5,21,14,4,0,2,2,7,2,7,2,30,0,14,0,13,19,17,17,17,0,10,0,14,17,17,17,14,0,0,0,13,19,17,17,15,1,0,0,22,25,17,17,30,16,0,14,17,31,17,17,14,0,0,0,0,26,21,11,0,0,0,0,14,17,17,10,27,0,10,0,17,17,17,17,25,22,31,1,2,4,2,1,31,0,0,0,31,10,10,10,25,0,31,0,17,10,4,10,17,0,0,0,17,17,17,17,30,16,0,16,15,4,31,4,4,0,0,0,31,2,30,18,17,0,0,0,31,21,31,17,17,0,0,4,0,31,0,4,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31]);var T=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};const vs=2,xt=16,he=3.55,de=5.95,Ct={green:"#6cb201",blue:"#000eff"};let k=class extends x{constructor(){super(...arguments),this.color="black",this.background="green",this.characters=new Uint8Array(32),this.font=Cs,this.cursor=!1,this.blink=!1,this.cursorX=0,this.cursorY=0,this.backlight=!0}static get styles(){return $`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}path(t){const n=[];for(let r=0;r<t.length;r++){const a=r%xt*he,o=Math.floor(r/xt)*de;for(let l=0;l<8;l++){const d=this.font[t[r]*8+l];for(let c=0;c<5;c++)if(d&1<<c){const h=(a+c*.6).toFixed(2),p=(o+l*.7).toFixed(2);n.push(`M ${h} ${p}h0.55v0.65h-0.55Z`)}}}return n.join(" ")}renderCursor(){const t=12.45+this.cursorX*he,e=12.55+this.cursorY*de;if(this.cursorX<0||this.cursorX>=xt||this.cursorY<0||this.cursorY>=vs)return null;const i=[];if(this.blink&&i.push(A`
        <rect x="${t}" y="${e}" width="2.95" height="5.55" fill="${this.color}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `),this.cursor){const n=e+4.8999999999999995;i.push(A`<rect x="${t}" y="${n}" width="2.95" height="0.65" fill="${this.color}" />`)}return i}render(){const{color:t,characters:e,background:i}=this,n=this.backlight?0:.5,r=i in Ct?Ct[i]:Ct;return C`
      <svg
        width="80mm"
        height="36mm"
        version="1.1"
        viewBox="0 0 80 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
        </defs>
        <rect width="80" height="36" fill="#087f45" />
        <rect x="4.95" y="5.7" width="71.2" height="25.2" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" fill="${r}" />
        <rect x="7.55" y="10.3" width="66" height="16" rx="1.5" ry="1.5" opacity="${n}" />
        <rect x="12.45" y="12.55" width="56.2" height="11.5" fill="url(#characters)" />
        <path d="${this.path(e)}" transform="translate(12.45, 12.55)" fill="${t}" />
        ${this.renderCursor()}
      </svg>
    `}};T([f()],k.prototype,"color",void 0);T([f()],k.prototype,"background",void 0);T([f({type:Array})],k.prototype,"characters",void 0);T([f()],k.prototype,"font",void 0);T([f()],k.prototype,"cursor",void 0);T([f()],k.prototype,"blink",void 0);T([f()],k.prototype,"cursorX",void 0);T([f()],k.prototype,"cursorY",void 0);T([f()],k.prototype,"backlight",void 0);k=T([v("wokwi-lcd1602")],k);var G=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};const bs={red:"#ff8080",green:"#80ff80",blue:"#8080ff",yellow:"#ffff80",orange:"#ffcf80",white:"#ffffff"};let N=class extends x{constructor(){super(...arguments),this.value=!1,this.brightness=1,this.color="red",this.lightColor=null,this.label=""}static get styles(){return $`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `}render(){const{color:t,lightColor:e}=this,i=e||bs[t]||"#ff8080",n=this.brightness?.3+this.brightness*.7:0,r=this.value&&this.brightness>Number.EPSILON;return C`
      <div class="led-container">
        <svg
          width="40"
          height="50"
          version="1.2"
          viewBox="-10 -5 35.456 39.618"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <rect x="3.451" y="19.379" width="2.1514" height="9.8273" fill="#8c8c8c" />
          <path
            d="m12.608 29.618c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
            fill="#8c8c8c"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            opacity=".3"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="#e6e6e6"
            opacity=".5"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            fill="#d1d1d1"
            opacity=".9"
          />
          <g>
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
              opacity=".7"
            />
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
              opacity=".25"
            />
            <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
          </g>
          <polygon
            points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
            fill="#666666"
          />
          <polygon
            points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
            fill="#666666"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="${t}"
            opacity=".65"
          />
          <g fill="#ffffff">
            <path
              d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
              opacity=".5"
            />
            <path
              d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
              opacity=".5"
            />
            <path
              d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
              opacity=".5"
            />
          </g>
          <g class="light" style="display: ${r?"":"none"}">
            <ellipse
              cx="8"
              cy="10"
              rx="10"
              ry="10"
              fill="${i}"
              filter="url(#light2)"
              style="opacity: ${n}"
            ></ellipse>
            <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
            <ellipse
              cx="8"
              cy="10"
              rx="3"
              ry="3"
              fill="white"
              filter="url(#light1)"
              style="opacity: ${n}"
            ></ellipse>
          </g>
        </svg>
        <span class="led-label">${this.label}</span>
      </div>
    `}};G([f()],N.prototype,"value",void 0);G([f()],N.prototype,"brightness",void 0);G([f()],N.prototype,"color",void 0);G([f()],N.prototype,"lightColor",void 0);G([f()],N.prototype,"label",void 0);N=G([v("wokwi-led")],N);var mt=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let it=class extends x{constructor(){super(...arguments),this.r=0,this.g=0,this.b=0}render(){const{r:t,g:e,b:i}=this,n=u=>u>.001?.7+u*.3:0,r=Math.max(t,e,i),a=Math.min(t,e,i),o=r-a,l=Math.max(1,2-o*20),d=.1+Math.max(r*2-o*5,0),c=u=>u>.005?.1+u*.9:0,h=u=>u>.005?d+u*(1-d):0,p=u=>r?Math.floor(Math.min(c(u/r)*l,1)*255):255,m=`rgb(${p(t)}, ${p(e)}, ${p(i)})`,g=242-(r>.1&&o<.2?Math.floor(r*50*(1-o/.2)):0),y=`rgb(${g}, ${g}, ${g})`;return C`
      <svg
        width="5.6631mm"
        height="5mm"
        version="1.1"
        viewBox="0 0 5.6631 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="light1" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="${Math.max(.1,r)}" />
        </filter>
        <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <rect x=".33308" y="0" width="5" height="5" fill="${y}" />
        <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
        <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
        <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
        <g fill="#bfbfbf">
          <path
            d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
          />
          <path
            d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
          />
          <path
            d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
          />
          <path
            d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
          />
        </g>
        <path
          d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
          fill="#666"
        />
        <ellipse
          cx="2.5"
          cy="2.3"
          rx="0.3"
          ry="0.3"
          fill="red"
          opacity=${n(t)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.5"
          cy="3.2"
          rx="0.3"
          ry="0.3"
          fill="green"
          opacity=${n(e)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.3"
          cy="1.45"
          rx="0.3"
          ry="0.3"
          fill="blue"
          opacity=${n(i)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3"
          cy="2.5"
          rx="2.2"
          ry="2.2"
          opacity="${h(r)}"
          fill="${m}"
          filter="url(#light2)"
        ></ellipse>
      </svg>
    `}};mt([f()],it.prototype,"r",void 0);mt([f()],it.prototype,"g",void 0);mt([f()],it.prototype,"b",void 0);it=mt([v("wokwi-neopixel")],it);var Zt=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};const fe=32;let ht=class extends x{constructor(){super(...arguments),this.color="red",this.pressed=!1}static get styles(){return $`
      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      button:active .button-circle {
        fill: url(#grad-down);
      }

      .clickable-element {
        cursor: pointer;
      }
    `}render(){const{color:t}=this;return C`
      <button
        aria-label="${t} pushbutton"
        @mousedown=${this.down}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchend=${this.up}
        @keydown=${e=>e.keyCode===fe&&this.down()}
        @keyup=${e=>e.keyCode===fe&&this.up()}
      >
        <svg
          width="18mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="grad-up" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${t}" offset="0.3" />
              <stop stop-color="${t}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="grad-down"
              xlink:href="#grad-up"
              gradientTransform="rotate(180,0.5,0.5)"
            ></linearGradient>
          </defs>
          <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
          <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
          <g fill="#1b1b1">
            <circle cx="1.767" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="10.197" r=".37" />
            <circle cx="1.767" cy="10.197" r=".37" />
          </g>
          <g fill="#eaeaea">
            <path
              d="m-0.3538 1.4672c-0.058299 0-0.10523 0.0469-0.10523 0.10522v0.38698h-2.1504c-0.1166 0-0.21045 0.0938-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21045 0.21045 0.21045h2.1504v0.40101c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m-0.35376 8.6067c-0.058299 0-0.10523 0.0469-0.10523 0.10523v0.38697h-2.1504c-0.1166 0-0.21045 0.0939-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21046 0.21045 0.21046h2.1504v0.401c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m12.354 1.4672c0.0583 0 0.10522 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09385 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
            <path
              d="m12.354 8.6067c0.0583 0 0.10523 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09386 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle class="button-circle" cx="6" cy="6" r="3.822" fill="url(#grad-up)" />
            <circle
              cx="6"
              cy="6"
              r="2.9"
              fill="${t}"
              stroke="#2f2f2f"
              stroke-opacity=".47"
              stroke-width=".08"
            />
          </g>
        </svg>
      </button>
    `}down(){this.pressed||(this.pressed=!0,this.dispatchEvent(new Event("button-press")))}up(){this.pressed&&(this.pressed=!1,this.dispatchEvent(new Event("button-release")))}};Zt([f()],ht.prototype,"color",void 0);Zt([f()],ht.prototype,"pressed",void 0);ht=Zt([v("wokwi-pushbutton")],ht);var De=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};const vt={[-2]:"silver",[-1]:"#c4a000",0:"black",1:"brown",2:"red",3:"orange",4:"yellow",5:"green",6:"blue",7:"violet",8:"gray",9:"white"};let Bt=class extends x{constructor(){super(...arguments),this.value="1000"}breakValue(t){const e=t>=1e10?9:t>=1e9?8:t>=1e8?7:t>=1e7?6:t>=1e6?5:t>=1e5?4:t>=1e4?3:t>=1e3?2:t>=100?1:t>=10?0:t>=1?-1:-2,i=Math.round(t/10**e);return t===0?[0,0]:e<0&&i%10===0?[i/10,e+1]:[Math.round(i%100),e]}render(){const{value:t}=this,e=parseFloat(t),[i,n]=this.breakValue(e),r=vt[Math.floor(i/10)],a=vt[i%10],o=vt[n];return C`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.645" height=".63826" fill="#eaeaea" />
        <g stroke-width=".14479">
          <path
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
            fill="#d5b597"
          />
          <path
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
            fill="url(#a)"
            opacity=".44886"
          />
          <path
            d="m4.6917 0c-0.10922 0-0.21558 0.00884-0.31985 0.022624v2.955c0.10426 0.013705 0.21063 0.02234 0.31985 0.02234 0.15603 0 0.3074-0.015363 0.4522-0.043551v-2.9129c-0.1448-0.028193-0.29617-0.043551-0.4522-0.043552z"
            fill="${r}"
          />
          <path d="m6.4482 0.29411v2.4117h0.77205v-2.4117z" fill="${a}" />
          <path d="m8.5245 0.29411v2.4117h0.77205v-2.4117z" fill="${o}" />
          <path
            d="m11.054 0c-0.15608 0-0.30749 0.015253-0.45277 0.043268v2.9134c0.14527 0.028012 0.29669 0.043268 0.45277 0.043268 0.10912 0 0.21539-0.00867 0.31957-0.02234v-2.955c-0.10418-0.013767-0.21044-0.022624-0.31957-0.022624z"
            fill="#c4a000"
          />
        </g>
      </svg>
    `}};De([f()],Bt.prototype,"value",void 0);Bt=De([v("wokwi-resistor")],Bt);var $e=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};const pe=32;function Rs(s){return!isNaN(parseFloat(s))}let Mt=class extends x{constructor(){super(...arguments),this.threeColumns=!1,this.pressedKeys=new Set}renderKey(t,e,i){const n=Rs(t)?"blue-key":"red-key",r=t.toUpperCase();return A`<g
      transform="translate(${e} ${i})"
      tabindex="0"
      class=${n}
      data-key-name=${r}
      @blur=${a=>{this.up(t,a.currentTarget)}}
      @mousedown=${()=>this.down(t)}
      @mouseup=${()=>this.up(t)}
      @touchstart=${()=>this.down(t)}
      @touchend=${()=>this.up(t)}
      @keydown=${a=>a.keyCode===pe&&this.down(t,a.currentTarget)}
      @keyup=${a=>a.keyCode===pe&&this.up(t,a.currentTarget)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${t}</text>
    </g>`}render(){const t=!this.threeColumns,e=15,i=t?70.336:70.336-e;return C`
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }

        g[tabindex] {
          cursor: pointer;
        }

        g[tabindex]:focus,
        g[tabindex]:active {
          stroke: white;
          outline: none;
        }

        .blue-key:focus,
        .red-key:focus {
          filter: url(#shadow);
        }

        .blue-key:active,
        .blue-key.pressed {
          fill: #4e50d7;
        }

        .red-key:active,
        .red-key.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text,
        .blue-key.pressed text,
        .red-key.pressed text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${i}mm"
        height="76mm"
        version="1.1"
        viewBox="0 0 ${i} 76"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${n=>this.keyStrokeDown(n.key)}
        @keyup=${n=>this.keyStrokeUp(n.key)}
      >
        <defs>
          <rect
            id="key"
            width="11.2"
            height="11"
            rx="1.4"
            ry="1.4"
            stroke="#b1b5b9"
            stroke-width=".75"
          />

          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${i}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${t?65:65-e}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey("1",7,10.7)}</g>
          <g>${this.renderKey("2",22,10.7)}</g>
          <g>${this.renderKey("3",37,10.7)}</g>
          <g>${this.renderKey("4",7,25)}</g>
          <g>${this.renderKey("5",22,25)}</g>
          <g>${this.renderKey("6",37,25)}</g>
          <g>${this.renderKey("7",7,39.3)}</g>
          <g>${this.renderKey("8",22,39.3)}</g>
          <g>${this.renderKey("9",37,39.3)}</g>
          <g>${this.renderKey("0",22,53.6)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey("*",7,53.6)}</g>
          <g>${this.renderKey("#",37,53.6)}</g>
          ${t&&A`
              <g>${this.renderKey("A",52,10.7)}</g>
              <g>${this.renderKey("B",52,25)}</g>
              <g>${this.renderKey("C",52,39.3)}</g>
              <g>${this.renderKey("D",52,53.6)}</g>
          `}
        </g>
      </svg>
    `}down(t,e){this.pressedKeys.has(t)||(e&&e.classList.add("pressed"),this.pressedKeys.add(t),this.dispatchEvent(new CustomEvent("button-press",{detail:{key:t}})))}up(t,e){this.pressedKeys.has(t)&&(e&&e.classList.remove("pressed"),this.pressedKeys.delete(t),this.dispatchEvent(new CustomEvent("button-release",{detail:{key:t}})))}keyStrokeDown(t){var e;const i=t.toUpperCase(),n=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`[data-key-name="${i}"]`);n&&this.down(i,n)}keyStrokeUp(t){var e,i,n;const r=t.toUpperCase(),a=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`[data-key-name="${r}"]`),o=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelectorAll(".pressed");t==="Shift"&&((n=o)===null||n===void 0||n.forEach(l=>{const d=l.dataset.keyName;this.up(d,l)})),a&&this.up(r,a)}};$e([f()],Mt.prototype,"threeColumns",void 0);Mt=$e([v("wokwi-membrane-keypad")],Mt);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ue=new WeakMap,Fe=Ie(s=>t=>{if(!(t instanceof ut)||t instanceof qt||t.committer.name!=="style"||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:e}=t,{style:i}=e.element;let n=ue.get(t);n===void 0&&(i.cssText=e.strings.join(" "),ue.set(t,n=new Set)),n.forEach(r=>{r in s||(n.delete(r),r.indexOf("-")===-1?i[r]=null:i.removeProperty(r))});for(const r in s)n.add(r),r.indexOf("-")===-1?i[r]=s[r]:i.setProperty(r,s[r])});var z=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let V=class extends x{constructor(){super(...arguments),this.min=0,this.max=100,this.value=0,this.step=1,this.startDegree=-135,this.endDegree=135,this.center={x:0,y:0},this.pressed=!1}static get styles(){return $`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `}clamp(t,e,i){return Math.min(Math.max(i,t),e)}mapToMinMax(t,e,i){return t*(i-e)+e}percentFromMinMax(t,e,i){return(t-e)/(i-e)}render(){const t=this.clamp(0,1,this.percentFromMinMax(this.value,this.min,this.max)),e=(this.endDegree-this.startDegree)*t+this.startDegree;return C`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg
        role="slider"
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="${this.focusInput}"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
        style=${Fe({"--knob-angle":e+"deg"})}
      >
        <defs>
          <filter id="outline">
            <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
          </filter>
        </defs>
        <rect
          x=".15"
          y=".15"
          width="19.5"
          height="19.5"
          ry="1.23"
          fill="#045881"
          stroke="#045881"
          stroke-width=".30"
        />
        <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
        <ellipse
          id="knob"
          cx="9.91"
          cy="8.18"
          rx="7.27"
          ry="7.43"
          fill="#e4e8eb"
          stroke-width=".15"
        />
        <rect
          x="6.6"
          y="17"
          width="6.5"
          height="2"
          fill-opacity="0"
          stroke="#fff"
          stroke-width=".30"
        />
        <g stroke-width=".15">
          <text x="6.21" y="16.6">GND</text>
          <text x="8.75" y="16.63">VCC</text>
          <text x="11.25" y="16.59">SIG</text>
        </g>
        <g fill="#fff" stroke-width=".15">
          <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
          <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
          <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
          <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
        </g>
        <g fill="#b3b1b0" stroke-width=".15">
          <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
          <ellipse cx="9.75" cy="18" rx=".61" ry=".63" />
          <ellipse cx="11.87" cy="18" rx=".61" ry=".63" />
        </g>
        <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
        <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
      </svg>
    `}focusInput(){var t,e;(e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(".hide-input"))===null||e===void 0||e.focus()}onValueChange(t){const e=t.target;this.updateValue(parseFloat(e.value))}down(t){(t.button===0||window.navigator.maxTouchPoints)&&(this.pressed=!0,this.updatePotentiometerPosition(t))}move(t){const{pressed:e}=this;e&&this.rotateHandler(t)}up(){this.pressed=!1}updatePotentiometerPosition(t){var e,i;t.stopPropagation(),t.preventDefault();const n=(i=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("#knob"))===null||i===void 0?void 0:i.getBoundingClientRect();n&&(this.center={x:window.scrollX+n.left+n.width/2,y:window.scrollY+n.top+n.height/2})}rotateHandler(t){t.stopPropagation(),t.preventDefault();const e=t.type==="touchmove",i=e?t.touches[0].pageX:t.pageX,n=e?t.touches[0].pageY:t.pageY,r=this.center.x-i,a=this.center.y-n;let o=Math.round(Math.atan2(a,r)*180/Math.PI);o<0&&(o+=360),o-=90,r>0&&a<=0&&(o-=360),o=this.clamp(this.startDegree,this.endDegree,o);const l=this.percentFromMinMax(o,this.startDegree,this.endDegree),d=this.mapToMinMax(l,this.min,this.max);this.updateValue(d)}updateValue(t){const e=this.clamp(this.min,this.max,t),i=Math.round(e/this.step)*this.step;this.value=Math.round(i*100)/100,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}};z([f()],V.prototype,"min",void 0);z([f()],V.prototype,"max",void 0);z([f()],V.prototype,"value",void 0);z([f()],V.prototype,"step",void 0);z([f()],V.prototype,"startDegree",void 0);z([f()],V.prototype,"endDegree",void 0);V=z([v("wokwi-potentiometer")],V);var L=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};const bt=5.66,Rt=5;let D=class extends x{constructor(){super(...arguments),this.rows=8,this.cols=8,this.colSpacing=1,this.blurLight=!1,this.animation=!1,this.rowSpacing=1,this.pixelElements=null,this.animationFrame=null,this.animateStep=()=>{const t=new Date().getTime(),{rows:e,cols:i}=this,n=r=>r%2e3>1e3?1-r%1e3/1e3:r%1e3/1e3;for(let r=0;r<e;r++)for(let a=0;a<i;a++){const o=Math.sqrt((r-e/2+.5)**2+(a-i/2+.5)**2);this.setPixel(r,a,{r:n(o*100+t),g:n(o*100+t+200),b:n(o*100+t+400)})}this.animationFrame=requestAnimationFrame(this.animateStep)}}static get styles(){return $`
      :host {
        display: flex;
      }
    `}getPixelElements(){return this.shadowRoot?(this.pixelElements||(this.pixelElements=Array.from(this.shadowRoot.querySelectorAll("g.pixel")).map(t=>Array.from(t.querySelectorAll("ellipse")))),this.pixelElements):null}reset(){const t=this.getPixelElements();if(t)for(const[e,i,n,r]of t)e.style.opacity="0",i.style.opacity="0",n.style.opacity="0",r.style.opacity="0"}setPixel(t,e,i){const n=this.getPixelElements();if(t<0||e<0||t>=this.rows||e>=this.cols||!n)return null;const{r,g:a,b:o}=i,l=_=>_>.001?.7+_*.3:0,d=Math.max(r,a,o),c=Math.min(r,a,o),h=d-c,p=Math.max(1,2-h*20),m=.1+Math.max(d*2-h*5,0),g=_=>_>.005?.1+_*.9:0,y=_=>_>.005?m+_*(1-m):0,u=_=>d?Math.floor(Math.min(g(_/d)*p,1)*255):255,R=`rgb(${u(r)}, ${u(a)}, ${u(o)})`,b=n[t*this.cols+e],[S,Ge,Ze,te]=b;S.style.opacity=l(r).toFixed(2),Ge.style.opacity=l(a).toFixed(2),Ze.style.opacity=l(o).toFixed(2),te.style.opacity=y(d).toFixed(2),te.style.fill=R}updated(){this.animation&&!this.animationFrame?this.animationFrame=requestAnimationFrame(this.animateStep):!this.animation&&this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}renderPixels(){const t=[],{cols:e,rows:i,colSpacing:n,rowSpacing:r}=this,a=bt+n,o=Rt+r;for(let l=0;l<i;l++)for(let d=0;d<e;d++)t.push(A`
        <g transform="translate(${a*d}, ${o*l})" class="pixel">
          <ellipse cx="2.5" cy="2.3" rx="0.3" ry="0.3" fill="red" opacity="0" />
          <ellipse cx="3.5" cy="3.2" rx="0.3" ry="0.3" fill="green" opacity="0" />
          <ellipse cx="3.3" cy="1.45" rx="0.3" ry="0.3" fill="blue" opacity="0" />
          <ellipse cx="3" cy="2.5" rx="2.2" ry="2.2" opacity="0" />
        </g>`);return this.pixelElements=null,t}render(){const{cols:t,rows:e,rowSpacing:i,colSpacing:n,blurLight:r}=this,a=bt+n,o=Rt+i,l=bt*t+n*(t-1),d=Rt*e+i*(e-1);return C`
      <svg
        width="${l}mm"
        height="${d}mm"
        version="1.1"
        viewBox="0 0 ${l} ${d}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blurLight" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <pattern id="pixel" width="${a}" height="${o}" patternUnits="userSpaceOnUse">
          <rect x=".33308" y="0" width="5" height="5" fill="#fff" />
          <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
          <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
          <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
          <g fill="#bfbfbf">
            <path
              d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
            />
            <path
              d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
            />
            <path
              d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
            />
            <path
              d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
            />
          </g>
          <path
            d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
            fill="#666"
          />
        </pattern>
        <rect width="${l}" height="${d}" fill="url(#pixel)"></rect>
        <g style="${r?"filter: url(#blurLight)":""}">
          ${this.renderPixels()}
        </g>
      </svg>
    `}};L([f()],D.prototype,"rows",void 0);L([f()],D.prototype,"cols",void 0);L([f({attribute:"colspacing"})],D.prototype,"colSpacing",void 0);L([f()],D.prototype,"blurLight",void 0);L([f()],D.prototype,"animation",void 0);L([f({attribute:"rowspacing"})],D.prototype,"rowSpacing",void 0);D=L([v("wokwi-neopixel-matrix")],D);var Ne=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let Vt=class extends x{constructor(){super(),this.width=150,this.height=116,this.screenWidth=128,this.screenHeight=64,this.canvas=void 0,this.ctx=null,this.imageData=new ImageData(this.screenWidth,this.screenHeight)}redraw(){var t;(t=this.ctx)===null||t===void 0||t.putImageData(this.imageData,0,0)}initContext(){var t,e;this.canvas=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("canvas"),this.ctx=(e=this.canvas)===null||e===void 0?void 0:e.getContext("2d")}firstUpdated(){var t;this.initContext(),(t=this.ctx)===null||t===void 0||t.putImageData(this.imageData,0,0)}updated(){this.imageData&&this.redraw()}render(){const{width:t,height:e,screenWidth:i,screenHeight:n,imageData:r}=this;return C`<svg width="${t}" height="${e}" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <g transform="translate(11.4 26)">
          <!-- 128 x 64 screen -->
          <rect fill="#1A1A1A" width="${i}" height="${n}" />
          <!-- image holder -->
          <foreignObject
            ?visibility="${r?"visible":"hidden"}"
            width="${i}"
            height="${n}"
          >
            <canvas width="${i}" height="${n}"></canvas>
          </foreignObject>
        </g>

        <!-- All texts -->
        <g
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="MarkerFelt-Wide, Marker Felt, monospace"
        >
          <g transform="translate(37 3)">
            <text x="0" y="5">Data</text>
            <text x="19" y="5">SA0</text>
            <text x="41" y="5">CS</text>
            <text x="60" y="5">Vin</text>
          </g>

          <g transform="translate(41 17)">
            <text x="0" y="6">C1k</text>
            <text x="12" y="6">DC</text>
            <text x="23" y="6">Rst</text>
            <text x="39" y="6">3v3</text>
            <text x="58" y="6">Gnd</text>
          </g>
          <!-- Star -->
          <path
            d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
            stroke="#FFF"
          />
        </g>

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="41.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="31.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="21.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="12.5" cy="3.5" r="3.5" />
          <circle stroke="#E7DBDB" cx="3.5" cy="3.5" r="3.5" />
        </g>
      </g>
    </svg> `}};Ne([f()],Vt.prototype,"imageData",void 0);Vt=Ne([v("wokwi-ssd1306")],Vt);var ze=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let Dt=class extends x{constructor(){super(...arguments),this.hasSignal=!1}static get styles(){return $`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `}render(){const t=this.hasSignal;return C`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${t?"":"hidden"}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>

        <svg
          width="17mm"
          height="20mm"
          version="1.1"
          viewBox="0 0 17 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m8 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
          <path d="m9 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
          <g stroke="#000">
            <g>
              <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
              <circle
                cx="8.5"
                cy="8.5"
                r="6.3472"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="4.3488"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
            </g>
            <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
          </g>
        </svg>
      </div>
    `}};ze([f()],Dt.prototype,"hasSignal",void 0);Dt=ze([v("wokwi-buzzer")],Dt);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ss{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const i of e)this.classes.add(i)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const ge=new WeakMap,Ps=Ie(s=>t=>{if(!(t instanceof ut)||t instanceof qt||t.committer.name!=="class"||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:e}=t,{element:i}=e;let n=ge.get(t);n===void 0&&(i.setAttribute("class",e.strings.join(" ")),ge.set(t,n=new Set));const r=i.classList||new Ss(i);n.forEach(a=>{a in s||(r.remove(a),n.delete(a))});for(const a in s){const o=s[a];o!=n.has(a)&&(o?(r.add(a),n.add(a)):(r.remove(a),n.delete(a)))}typeof r.commit=="function"&&r.commit()});var ks=function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(r=(n<3?a(r):n>3?a(t,e,r):a(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r};let me=class extends x{constructor(){super(...arguments),this.digit="",this.stylesMapping={},this.classes={"rotate-path":!0},this.degrees=[320,56,87,115,143,173,204,232,260,290]}static get styles(){return $`
      .text {
        cursor: grab;
        user-select: none;
      }
      input:focus + svg #container {
        stroke: #4e50d7;
        stroke-width: 3;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      .rotate-path {
        transform-origin: center;
        transition: transform 1000ms ease-in;
      }
      .dialer-anim {
        transform: rotate(var(--angle));
      }
    `}removeDialerAnim(){this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!1}),this.stylesMapping={"--angle":0},this.requestUpdate()}dial(t){this.digit=t,this.addDialerAnim(t)}onValueChange(t){const e=t.target;this.digit=parseInt(e.value),this.dial(this.digit),e.value=""}addDialerAnim(t){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("dial-start",{detail:{digit:this.digit}})),this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!0});const e=this.degrees[t];this.stylesMapping={"--angle":e+"deg"},this.requestUpdate()})}focusInput(){var t,e;(e=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(".hide-input"))===null||e===void 0||e.focus()}render(){return C`
      <input
        tabindex="0"
        type="number"
        class="hide-input"
        value="${this.digit}"
        @input="${this.onValueChange}"
      />
      <svg width="266" height="266" @click="${this.focusInput}" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(1 1)">
          <circle stroke="#979797" stroke-width="3" fill="#1F1F1F" cx="133" cy="133" r="131" />
          <circle stroke="#fff" stroke-width="2" fill="#D8D8D8" cx="133" cy="133" r="72" />
          <path
            class=${Ps(this.classes)}
            @transitionstart="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial",{detail:{digit:this.digit}}))}}"
            @transitionend="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial-end",{detail:{digit:this.digit}})),this.removeDialerAnim()}}"
            d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,197 C96.4786916,197 107,207.521308 107,220.5 C107,233.478692 96.4786916,244 83.5,244 C70.5213084,244 60,233.478692 60,220.5 C60,207.521308 70.5213084,197 83.5,197 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M32.5,114 C45.4786916,114 56,124.521308 56,137.5 C56,150.478692 45.4786916,161 32.5,161 C19.5213084,161 9,150.478692 9,137.5 C9,124.521308 19.5213084,114 32.5,114 Z M234.5,93 C247.478692,93 258,103.521308 258,116.5 C258,129.478692 247.478692,140 234.5,140 C221.521308,140 211,129.478692 211,116.5 C211,103.521308 221.521308,93 234.5,93 Z M41.5,64 C54.4786916,64 65,74.5213084 65,87.5 C65,100.478692 54.4786916,111 41.5,111 C28.5213084,111 18,100.478692 18,87.5 C18,74.5213084 28.5213084,64 41.5,64 Z M214.5,46 C227.478692,46 238,56.5213084 238,69.5 C238,82.4786916 227.478692,93 214.5,93 C201.521308,93 191,82.4786916 191,69.5 C191,56.5213084 201.521308,46 214.5,46 Z M76.5,26 C89.4786916,26 100,36.5213084 100,49.5 C100,62.4786916 89.4786916,73 76.5,73 C63.5213084,73 53,62.4786916 53,49.5 C53,36.5213084 63.5213084,26 76.5,26 Z M173.5,15 C186.478692,15 197,25.5213084 197,38.5 C197,51.4786916 186.478692,62 173.5,62 C160.521308,62 150,51.4786916 150,38.5 C150,25.5213084 160.521308,15 173.5,15 Z M123.5,7 C136.478692,7 147,17.5213084 147,30.5 C147,43.4786916 136.478692,54 123.5,54 C110.521308,54 100,43.4786916 100,30.5 C100,17.5213084 110.521308,7 123.5,7 Z"
            id="slots"
            stroke="#fff"
            fill-opacity="0.5"
            fill="#D8D8D8"
            style=${Fe(this.stylesMapping)}
          ></path>
        </g>
        <circle id="container" fill-opacity=".5" fill="#070707" cx="132.5" cy="132.5" r="132.5" />
        <g class="text" font-family="Marker Felt, monospace" font-size="21" fill="#FFF">
          <text @mouseup=${()=>this.dial(0)} x="129" y="243">0</text>
          <text @mouseup=${()=>this.dial(9)} x="78" y="230">9</text>
          <text @mouseup=${()=>this.dial(8)} x="40" y="194">8</text>
          <text @mouseup=${()=>this.dial(7)} x="28" y="145">7</text>
          <text @mouseup=${()=>this.dial(6)} x="35" y="97">6</text>
          <text @mouseup=${()=>this.dial(5)} x="72" y="58">5</text>
          <text @mouseup=${()=>this.dial(4)} x="117" y="41">4</text>
          <text @mouseup=${()=>this.dial(3)} x="168" y="47">3</text>
          <text @mouseup=${()=>this.dial(2)} x="210" y="79">2</text>
          <text @mouseup=${()=>this.dial(1)} x="230" y="126">1</text>
        </g>
        <path
          d="M182.738529,211.096297 L177.320119,238.659185 L174.670528,252.137377 L188.487742,252.137377 L182.738529,211.096297 Z"
          stroke="#979797"
          fill="#D8D8D8"
          transform="translate(181.562666, 230.360231) rotate(-22.000000) translate(-181.562666, -230.360231)"
        ></path>
      </svg>
    `}};me=ks([v("wokwi-rotary-dialer")],me);function _s(s,t){const e=s.dataView.getUint16(93,!0);s.data[e]=s.pc&255,s.data[e-1]=s.pc>>8&255,s.pc22Bits&&(s.data[e-2]=s.pc>>16&255),s.dataView.setUint16(93,e-(s.pc22Bits?3:2),!0),s.data[95]&=127,s.cycles+=2,s.pc=t}const Is=256,Es=128;class Us{constructor(t,e=8192){this.progMem=t,this.sramBytes=e,this.data=new Uint8Array(this.sramBytes+Is),this.data16=new Uint16Array(this.data.buffer),this.dataView=new DataView(this.data.buffer),this.progBytes=new Uint8Array(this.progMem.buffer),this.readHooks=[],this.writeHooks=[],this.pendingInterrupts=new Array(Es),this.nextClockEvent=null,this.clockEventPool=[],this.pc22Bits=this.progBytes.length>131072,this.gpioPorts=new Set,this.gpioByPort=[],this.onWatchdogReset=()=>{},this.pc=0,this.cycles=0,this.nextInterrupt=-1,this.maxInterrupt=0,this.reset()}reset(){this.SP=this.data.length-1,this.pc=0,this.pendingInterrupts.fill(null),this.nextInterrupt=-1,this.nextClockEvent=null}readData(t){return t>=32&&this.readHooks[t]?this.readHooks[t](t):this.data[t]}writeData(t,e,i=255){const n=this.writeHooks[t];n&&n(e,this.data[t],t,i)||(this.data[t]=e)}get SP(){return this.dataView.getUint16(93,!0)}set SP(t){this.dataView.setUint16(93,t,!0)}get SREG(){return this.data[95]}get interruptsEnabled(){return!!(this.SREG&128)}setInterruptFlag(t){const{flagRegister:e,flagMask:i,enableRegister:n,enableMask:r}=t;t.inverseFlag?this.data[e]&=~i:this.data[e]|=i,this.data[n]&r&&this.queueInterrupt(t)}updateInterruptEnable(t,e){const{enableMask:i,flagRegister:n,flagMask:r,inverseFlag:a}=t;if(e&i){const o=this.data[n]&r;(a?!o:o)&&this.queueInterrupt(t)}else this.clearInterrupt(t,!1)}queueInterrupt(t){const{address:e}=t;this.pendingInterrupts[e]=t,(this.nextInterrupt===-1||this.nextInterrupt>e)&&(this.nextInterrupt=e),e>this.maxInterrupt&&(this.maxInterrupt=e)}clearInterrupt({address:t,flagRegister:e,flagMask:i},n=!0){n&&(this.data[e]&=~i);const{pendingInterrupts:r,maxInterrupt:a}=this;if(r[t]&&(r[t]=null,this.nextInterrupt===t)){this.nextInterrupt=-1;for(let o=t+1;o<=a;o++)if(r[o]){this.nextInterrupt=o;break}}}clearInterruptByFlag(t,e){const{flagRegister:i,flagMask:n}=t;e&n&&(this.data[i]&=~n,this.clearInterrupt(t))}addClockEvent(t,e){const{clockEventPool:i}=this;e=this.cycles+Math.max(1,e);const r=i.pop()??{cycles:e,callback:t,next:null};r.cycles=e,r.callback=t;let{nextClockEvent:a}=this,o=null;for(;a&&a.cycles<e;)o=a,a=a.next;return o?(o.next=r,r.next=a):(this.nextClockEvent=r,r.next=a),t}updateClockEvent(t,e){return this.clearClockEvent(t)?(this.addClockEvent(t,e),!0):!1}clearClockEvent(t){let{nextClockEvent:e}=this;if(!e)return!1;const{clockEventPool:i}=this;let n=null;for(;e;){if(e.callback===t)return n?n.next=e.next:this.nextClockEvent=e.next,i.length<10&&i.push(e),!0;n=e,e=e.next}return!1}tick(){const{nextClockEvent:t}=this;t&&t.cycles<=this.cycles&&(t.callback(),this.nextClockEvent=t.next,this.clockEventPool.length<10&&this.clockEventPool.push(t));const{nextInterrupt:e}=this;if(this.interruptsEnabled&&e>=0){const i=this.pendingInterrupts[e];_s(this,i.address),i.constant||this.clearInterrupt(i)}}}function Z(s){return(s&65039)===36864||(s&65039)===37376||(s&65038)===37902||(s&65038)===37900}function Ts(s){const t=s.progMem[s.pc];if((t&64512)===7168){const e=s.data[(t&496)>>4],i=s.data[t&15|(t&512)>>5],n=e+i+(s.data[95]&1),r=n&255;s.data[(t&496)>>4]=r;let a=s.data[95]&192;a|=r?0:2,a|=128&r?4:0,a|=(r^i)&(e^r)&128?8:0,a|=a>>2&1^a>>3&1?16:0,a|=n&256?1:0,a|=1&(e&i|i&~r|~r&e)?32:0,s.data[95]=a}else if((t&64512)===3072){const e=s.data[(t&496)>>4],i=s.data[t&15|(t&512)>>5],n=e+i&255;s.data[(t&496)>>4]=n;let r=s.data[95]&192;r|=n?0:2,r|=128&n?4:0,r|=(n^i)&(n^e)&128?8:0,r|=r>>2&1^r>>3&1?16:0,r|=e+i&256?1:0,r|=1&(e&i|i&~n|~n&e)?32:0,s.data[95]=r}else if((t&65280)===38400){const e=2*((t&48)>>4)+24,i=s.dataView.getUint16(e,!0),n=i+(t&15|(t&192)>>2)&65535;s.dataView.setUint16(e,n,!0);let r=s.data[95]&224;r|=n?0:2,r|=32768&n?4:0,r|=~i&n&32768?8:0,r|=r>>2&1^r>>3&1?16:0,r|=~n&i&32768?1:0,s.data[95]=r,s.cycles++}else if((t&64512)===8192){const e=s.data[(t&496)>>4]&s.data[t&15|(t&512)>>5];s.data[(t&496)>>4]=e;let i=s.data[95]&225;i|=e?0:2,i|=128&e?4:0,i|=i>>2&1^i>>3&1?16:0,s.data[95]=i}else if((t&61440)===28672){const e=s.data[((t&240)>>4)+16]&(t&15|(t&3840)>>4);s.data[((t&240)>>4)+16]=e;let i=s.data[95]&225;i|=e?0:2,i|=128&e?4:0,i|=i>>2&1^i>>3&1?16:0,s.data[95]=i}else if((t&65039)===37893){const e=s.data[(t&496)>>4],i=e>>>1|128&e;s.data[(t&496)>>4]=i;let n=s.data[95]&224;n|=i?0:2,n|=128&i?4:0,n|=e&1,n|=n>>2&1^n&1?8:0,n|=n>>2&1^n>>3&1?16:0,s.data[95]=n}else if((t&65423)===38024)s.data[95]&=~(1<<((t&112)>>4));else if((t&65032)===63488){const e=t&7,i=(t&496)>>4;s.data[i]=~(1<<e)&s.data[i]|(s.data[95]>>6&1)<<e}else if((t&64512)===62464)s.data[95]&1<<(t&7)||(s.pc=s.pc+(((t&504)>>3)-(t&512?64:0)),s.cycles++);else if((t&64512)===61440)s.data[95]&1<<(t&7)&&(s.pc=s.pc+(((t&504)>>3)-(t&512?64:0)),s.cycles++);else if((t&65423)===37896)s.data[95]|=1<<((t&112)>>4);else if((t&65032)===64e3){const e=s.data[(t&496)>>4],i=t&7;s.data[95]=s.data[95]&191|(e>>i&1?64:0)}else if((t&65038)===37902){const e=s.progMem[s.pc+1]|(t&1)<<16|(t&496)<<13,i=s.pc+2,n=s.dataView.getUint16(93,!0),{pc22Bits:r}=s;s.data[n]=255&i,s.data[n-1]=i>>8&255,r&&(s.data[n-2]=i>>16&255),s.dataView.setUint16(93,n-(r?3:2),!0),s.pc=e-1,s.cycles+=r?4:3}else if((t&65280)===38912){const e=t&248,i=t&7,n=s.readData((e>>3)+32),r=1<<i;s.writeData((e>>3)+32,n&~r,r)}else if((t&65039)===37888){const e=(t&496)>>4,i=255-s.data[e];s.data[e]=i;let n=s.data[95]&225|1;n|=i?0:2,n|=128&i?4:0,n|=n>>2&1^n>>3&1?16:0,s.data[95]=n}else if((t&64512)===5120){const e=s.data[(t&496)>>4],i=s.data[t&15|(t&512)>>5],n=e-i;let r=s.data[95]&192;r|=n?0:2,r|=128&n?4:0,r|=((e^i)&(e^n)&128)!==0?8:0,r|=r>>2&1^r>>3&1?16:0,r|=i>e?1:0,r|=1&(~e&i|i&n|n&~e)?32:0,s.data[95]=r}else if((t&64512)===1024){const e=s.data[(t&496)>>4],i=s.data[t&15|(t&512)>>5];let n=s.data[95];const r=e-i-(n&1);n=n&192|(!r&&n>>1&1?2:0)|(i+(n&1)>e?1:0),n|=128&r?4:0,n|=(e^i)&(e^r)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=1&(~e&i|i&r|r&~e)?32:0,s.data[95]=n}else if((t&61440)===12288){const e=s.data[((t&240)>>4)+16],i=t&15|(t&3840)>>4,n=e-i;let r=s.data[95]&192;r|=n?0:2,r|=128&n?4:0,r|=(e^i)&(e^n)&128?8:0,r|=r>>2&1^r>>3&1?16:0,r|=i>e?1:0,r|=1&(~e&i|i&n|n&~e)?32:0,s.data[95]=r}else if((t&64512)===4096){if(s.data[(t&496)>>4]===s.data[t&15|(t&512)>>5]){const e=s.progMem[s.pc+1],i=Z(e)?2:1;s.pc+=i,s.cycles+=i}}else if((t&65039)===37898){const e=s.data[(t&496)>>4],i=e-1;s.data[(t&496)>>4]=i;let n=s.data[95]&225;n|=i?0:2,n|=128&i?4:0,n|=e===128?8:0,n|=n>>2&1^n>>3&1?16:0,s.data[95]=n}else if(t===38169){const e=s.pc+1,i=s.dataView.getUint16(93,!0),n=s.data[92];s.data[i]=e&255,s.data[i-1]=e>>8&255,s.data[i-2]=e>>16&255,s.dataView.setUint16(93,i-3,!0),s.pc=(n<<16|s.dataView.getUint16(30,!0))-1,s.cycles+=3}else if(t===37913){const e=s.data[92];s.pc=(e<<16|s.dataView.getUint16(30,!0))-1,s.cycles++}else if(t===38360){const e=s.data[91];s.data[0]=s.progBytes[e<<16|s.dataView.getUint16(30,!0)],s.cycles+=2}else if((t&65039)===36870){const e=s.data[91];s.data[(t&496)>>4]=s.progBytes[e<<16|s.dataView.getUint16(30,!0)],s.cycles+=2}else if((t&65039)===36871){const e=s.data[91],i=s.dataView.getUint16(30,!0);s.data[(t&496)>>4]=s.progBytes[e<<16|i],s.dataView.setUint16(30,i+1,!0),i===65535&&(s.data[91]=(e+1)%(s.progBytes.length>>16)),s.cycles+=2}else if((t&64512)===9216){const e=s.data[(t&496)>>4]^s.data[t&15|(t&512)>>5];s.data[(t&496)>>4]=e;let i=s.data[95]&225;i|=e?0:2,i|=128&e?4:0,i|=i>>2&1^i>>3&1?16:0,s.data[95]=i}else if((t&65416)===776){const e=s.data[((t&112)>>4)+16],i=s.data[(t&7)+16],n=e*i<<1;s.dataView.setUint16(0,n,!0),s.data[95]=s.data[95]&252|(65535&n?0:2)|(e*i&32768?1:0),s.cycles++}else if((t&65416)===896){const e=s.dataView.getInt8(((t&112)>>4)+16),i=s.dataView.getInt8((t&7)+16),n=e*i<<1;s.dataView.setInt16(0,n,!0),s.data[95]=s.data[95]&252|(65535&n?0:2)|(e*i&32768?1:0),s.cycles++}else if((t&65416)===904){const e=s.dataView.getInt8(((t&112)>>4)+16),i=s.data[(t&7)+16],n=e*i<<1;s.dataView.setInt16(0,n,!0),s.data[95]=s.data[95]&252|(65535&n?2:0)|(e*i&32768?1:0),s.cycles++}else if(t===38153){const e=s.pc+1,i=s.dataView.getUint16(93,!0),{pc22Bits:n}=s;s.data[i]=e&255,s.data[i-1]=e>>8&255,n&&(s.data[i-2]=e>>16&255),s.dataView.setUint16(93,i-(n?3:2),!0),s.pc=s.dataView.getUint16(30,!0)-1,s.cycles+=n?3:2}else if(t===37897)s.pc=s.dataView.getUint16(30,!0)-1,s.cycles++;else if((t&63488)===45056){const e=s.readData((t&15|(t&1536)>>5)+32);s.data[(t&496)>>4]=e}else if((t&65039)===37891){const e=s.data[(t&496)>>4],i=e+1&255;s.data[(t&496)>>4]=i;let n=s.data[95]&225;n|=i?0:2,n|=128&i?4:0,n|=e===127?8:0,n|=n>>2&1^n>>3&1?16:0,s.data[95]=n}else if((t&65038)===37900)s.pc=(s.progMem[s.pc+1]|(t&1)<<16|(t&496)<<13)-1,s.cycles+=2;else if((t&65039)===37382){const e=(t&496)>>4,i=s.data[e],n=s.readData(s.dataView.getUint16(30,!0));s.writeData(s.dataView.getUint16(30,!0),n&255-i),s.data[e]=n}else if((t&65039)===37381){const e=(t&496)>>4,i=s.data[e],n=s.readData(s.dataView.getUint16(30,!0));s.writeData(s.dataView.getUint16(30,!0),n|i),s.data[e]=n}else if((t&65039)===37383){const e=s.data[(t&496)>>4],i=s.readData(s.dataView.getUint16(30,!0));s.writeData(s.dataView.getUint16(30,!0),e^i),s.data[(t&496)>>4]=i}else if((t&61440)===57344)s.data[((t&240)>>4)+16]=t&15|(t&3840)>>4;else if((t&65039)===36864){s.cycles++;const e=s.readData(s.progMem[s.pc+1]);s.data[(t&496)>>4]=e,s.pc++}else if((t&65039)===36876)s.cycles++,s.data[(t&496)>>4]=s.readData(s.dataView.getUint16(26,!0));else if((t&65039)===36877){const e=s.dataView.getUint16(26,!0);s.cycles++,s.data[(t&496)>>4]=s.readData(e),s.dataView.setUint16(26,e+1,!0)}else if((t&65039)===36878){const e=s.dataView.getUint16(26,!0)-1;s.dataView.setUint16(26,e,!0),s.cycles++,s.data[(t&496)>>4]=s.readData(e)}else if((t&65039)===32776)s.cycles++,s.data[(t&496)>>4]=s.readData(s.dataView.getUint16(28,!0));else if((t&65039)===36873){const e=s.dataView.getUint16(28,!0);s.cycles++,s.data[(t&496)>>4]=s.readData(e),s.dataView.setUint16(28,e+1,!0)}else if((t&65039)===36874){const e=s.dataView.getUint16(28,!0)-1;s.dataView.setUint16(28,e,!0),s.cycles++,s.data[(t&496)>>4]=s.readData(e)}else if((t&53768)===32776&&t&7|(t&3072)>>7|(t&8192)>>8)s.cycles++,s.data[(t&496)>>4]=s.readData(s.dataView.getUint16(28,!0)+(t&7|(t&3072)>>7|(t&8192)>>8));else if((t&65039)===32768)s.cycles++,s.data[(t&496)>>4]=s.readData(s.dataView.getUint16(30,!0));else if((t&65039)===36865){const e=s.dataView.getUint16(30,!0);s.cycles++,s.data[(t&496)>>4]=s.readData(e),s.dataView.setUint16(30,e+1,!0)}else if((t&65039)===36866){const e=s.dataView.getUint16(30,!0)-1;s.dataView.setUint16(30,e,!0),s.cycles++,s.data[(t&496)>>4]=s.readData(e)}else if((t&53768)===32768&&t&7|(t&3072)>>7|(t&8192)>>8)s.cycles++,s.data[(t&496)>>4]=s.readData(s.dataView.getUint16(30,!0)+(t&7|(t&3072)>>7|(t&8192)>>8));else if(t===38344)s.data[0]=s.progBytes[s.dataView.getUint16(30,!0)],s.cycles+=2;else if((t&65039)===36868)s.data[(t&496)>>4]=s.progBytes[s.dataView.getUint16(30,!0)],s.cycles+=2;else if((t&65039)===36869){const e=s.dataView.getUint16(30,!0);s.data[(t&496)>>4]=s.progBytes[e],s.dataView.setUint16(30,e+1,!0),s.cycles+=2}else if((t&65039)===37894){const e=s.data[(t&496)>>4],i=e>>>1;s.data[(t&496)>>4]=i;let n=s.data[95]&224;n|=i?0:2,n|=e&1,n|=n>>2&1^n&1?8:0,n|=n>>2&1^n>>3&1?16:0,s.data[95]=n}else if((t&64512)===11264)s.data[(t&496)>>4]=s.data[t&15|(t&512)>>5];else if((t&65280)===256){const e=2*(t&15),i=2*((t&240)>>4);s.data[i]=s.data[e],s.data[i+1]=s.data[e+1]}else if((t&64512)===39936){const e=s.data[(t&496)>>4]*s.data[t&15|(t&512)>>5];s.dataView.setUint16(0,e,!0),s.data[95]=s.data[95]&252|(65535&e?0:2)|(32768&e?1:0),s.cycles++}else if((t&65280)===512){const e=s.dataView.getInt8(((t&240)>>4)+16)*s.dataView.getInt8((t&15)+16);s.dataView.setInt16(0,e,!0),s.data[95]=s.data[95]&252|(65535&e?0:2)|(32768&e?1:0),s.cycles++}else if((t&65416)===768){const e=s.dataView.getInt8(((t&112)>>4)+16)*s.data[(t&7)+16];s.dataView.setInt16(0,e,!0),s.data[95]=s.data[95]&252|(65535&e?0:2)|(32768&e?1:0),s.cycles++}else if((t&65039)===37889){const e=(t&496)>>4,i=s.data[e],n=0-i;s.data[e]=n;let r=s.data[95]&192;r|=n?0:2,r|=128&n?4:0,r|=n===128?8:0,r|=r>>2&1^r>>3&1?16:0,r|=n?1:0,r|=1&(n|i)?32:0,s.data[95]=r}else if(t!==0){if((t&64512)===10240){const e=s.data[(t&496)>>4]|s.data[t&15|(t&512)>>5];s.data[(t&496)>>4]=e;let i=s.data[95]&225;i|=e?0:2,i|=128&e?4:0,i|=i>>2&1^i>>3&1?16:0,s.data[95]=i}else if((t&61440)===24576){const e=s.data[((t&240)>>4)+16]|(t&15|(t&3840)>>4);s.data[((t&240)>>4)+16]=e;let i=s.data[95]&225;i|=e?0:2,i|=128&e?4:0,i|=i>>2&1^i>>3&1?16:0,s.data[95]=i}else if((t&63488)===47104)s.writeData((t&15|(t&1536)>>5)+32,s.data[(t&496)>>4]);else if((t&65039)===36879){const e=s.dataView.getUint16(93,!0)+1;s.dataView.setUint16(93,e,!0),s.data[(t&496)>>4]=s.data[e],s.cycles++}else if((t&65039)===37391){const e=s.dataView.getUint16(93,!0);s.data[e]=s.data[(t&496)>>4],s.dataView.setUint16(93,e-1,!0),s.cycles++}else if((t&61440)===53248){const e=(t&2047)-(t&2048?2048:0),i=s.pc+1,n=s.dataView.getUint16(93,!0),{pc22Bits:r}=s;s.data[n]=255&i,s.data[n-1]=i>>8&255,r&&(s.data[n-2]=i>>16&255),s.dataView.setUint16(93,n-(r?3:2),!0),s.pc+=e,s.cycles+=r?3:2}else if(t===38152){const{pc22Bits:e}=s,i=s.dataView.getUint16(93,!0)+(e?3:2);s.dataView.setUint16(93,i,!0),s.pc=(s.data[i-1]<<8)+s.data[i]-1,e&&(s.pc|=s.data[i-2]<<16),s.cycles+=e?4:3}else if(t===38168){const{pc22Bits:e}=s,i=s.dataView.getUint16(93,!0)+(e?3:2);s.dataView.setUint16(93,i,!0),s.pc=(s.data[i-1]<<8)+s.data[i]-1,e&&(s.pc|=s.data[i-2]<<16),s.cycles+=e?4:3,s.data[95]|=128}else if((t&61440)===49152)s.pc=s.pc+((t&2047)-(t&2048?2048:0)),s.cycles++;else if((t&65039)===37895){const e=s.data[(t&496)>>4],i=e>>>1|(s.data[95]&1)<<7;s.data[(t&496)>>4]=i;let n=s.data[95]&224;n|=i?0:2,n|=128&i?4:0,n|=1&e?1:0,n|=n>>2&1^n&1?8:0,n|=n>>2&1^n>>3&1?16:0,s.data[95]=n}else if((t&64512)===2048){const e=s.data[(t&496)>>4],i=s.data[t&15|(t&512)>>5];let n=s.data[95];const r=e-i-(n&1);s.data[(t&496)>>4]=r,n=n&192|(!r&&n>>1&1?2:0)|(i+(n&1)>e?1:0),n|=128&r?4:0,n|=(e^i)&(e^r)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=1&(~e&i|i&r|r&~e)?32:0,s.data[95]=n}else if((t&61440)===16384){const e=s.data[((t&240)>>4)+16],i=t&15|(t&3840)>>4;let n=s.data[95];const r=e-i-(n&1);s.data[((t&240)>>4)+16]=r,n=n&192|(!r&&n>>1&1?2:0)|(i+(n&1)>e?1:0),n|=128&r?4:0,n|=(e^i)&(e^r)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=1&(~e&i|i&r|r&~e)?32:0,s.data[95]=n}else if((t&65280)===39424){const e=((t&248)>>3)+32,i=1<<(t&7);s.writeData(e,s.readData(e)|i,i),s.cycles++}else if((t&65280)===39168){if(!(s.readData(((t&248)>>3)+32)&1<<(t&7))){const i=s.progMem[s.pc+1],n=Z(i)?2:1;s.cycles+=n,s.pc+=n}}else if((t&65280)===39680){if(s.readData(((t&248)>>3)+32)&1<<(t&7)){const i=s.progMem[s.pc+1],n=Z(i)?2:1;s.cycles+=n,s.pc+=n}}else if((t&65280)===38656){const e=2*((t&48)>>4)+24,i=s.dataView.getUint16(e,!0),n=t&15|(t&192)>>2,r=i-n;s.dataView.setUint16(e,r,!0);let a=s.data[95]&192;a|=r?0:2,a|=32768&r?4:0,a|=i&~r&32768?8:0,a|=a>>2&1^a>>3&1?16:0,a|=n>i?1:0,a|=1&(~i&n|n&r|r&~i)?32:0,s.data[95]=a,s.cycles++}else if((t&65032)===64512){if(!(s.data[(t&496)>>4]&1<<(t&7))){const e=s.progMem[s.pc+1],i=Z(e)?2:1;s.cycles+=i,s.pc+=i}}else if((t&65032)===65024){if(s.data[(t&496)>>4]&1<<(t&7)){const e=s.progMem[s.pc+1],i=Z(e)?2:1;s.cycles+=i,s.pc+=i}}else if(t!==38280){if(t!==38376){if(t!==38392){if((t&65039)===37376){const e=s.data[(t&496)>>4],i=s.progMem[s.pc+1];s.writeData(i,e),s.pc++,s.cycles++}else if((t&65039)===37388)s.writeData(s.dataView.getUint16(26,!0),s.data[(t&496)>>4]),s.cycles++;else if((t&65039)===37389){const e=s.dataView.getUint16(26,!0);s.writeData(e,s.data[(t&496)>>4]),s.dataView.setUint16(26,e+1,!0),s.cycles++}else if((t&65039)===37390){const e=s.data[(t&496)>>4],i=s.dataView.getUint16(26,!0)-1;s.dataView.setUint16(26,i,!0),s.writeData(i,e),s.cycles++}else if((t&65039)===33288)s.writeData(s.dataView.getUint16(28,!0),s.data[(t&496)>>4]),s.cycles++;else if((t&65039)===37385){const e=s.data[(t&496)>>4],i=s.dataView.getUint16(28,!0);s.writeData(i,e),s.dataView.setUint16(28,i+1,!0),s.cycles++}else if((t&65039)===37386){const e=s.data[(t&496)>>4],i=s.dataView.getUint16(28,!0)-1;s.dataView.setUint16(28,i,!0),s.writeData(i,e),s.cycles++}else if((t&53768)===33288&&t&7|(t&3072)>>7|(t&8192)>>8)s.writeData(s.dataView.getUint16(28,!0)+(t&7|(t&3072)>>7|(t&8192)>>8),s.data[(t&496)>>4]),s.cycles++;else if((t&65039)===33280)s.writeData(s.dataView.getUint16(30,!0),s.data[(t&496)>>4]),s.cycles++;else if((t&65039)===37377){const e=s.dataView.getUint16(30,!0);s.writeData(e,s.data[(t&496)>>4]),s.dataView.setUint16(30,e+1,!0),s.cycles++}else if((t&65039)===37378){const e=s.data[(t&496)>>4],i=s.dataView.getUint16(30,!0)-1;s.dataView.setUint16(30,i,!0),s.writeData(i,e),s.cycles++}else if((t&53768)===33280&&t&7|(t&3072)>>7|(t&8192)>>8)s.writeData(s.dataView.getUint16(30,!0)+(t&7|(t&3072)>>7|(t&8192)>>8),s.data[(t&496)>>4]),s.cycles++;else if((t&64512)===6144){const e=s.data[(t&496)>>4],i=s.data[t&15|(t&512)>>5],n=e-i;s.data[(t&496)>>4]=n;let r=s.data[95]&192;r|=n?0:2,r|=128&n?4:0,r|=(e^i)&(e^n)&128?8:0,r|=r>>2&1^r>>3&1?16:0,r|=i>e?1:0,r|=1&(~e&i|i&n|n&~e)?32:0,s.data[95]=r}else if((t&61440)===20480){const e=s.data[((t&240)>>4)+16],i=t&15|(t&3840)>>4,n=e-i;s.data[((t&240)>>4)+16]=n;let r=s.data[95]&192;r|=n?0:2,r|=128&n?4:0,r|=(e^i)&(e^n)&128?8:0,r|=r>>2&1^r>>3&1?16:0,r|=i>e?1:0,r|=1&(~e&i|i&n|n&~e)?32:0,s.data[95]=r}else if((t&65039)===37890){const e=(t&496)>>4,i=s.data[e];s.data[e]=(15&i)<<4|(240&i)>>>4}else if(t===38312)s.onWatchdogReset();else if((t&65039)===37380){const e=(t&496)>>4,i=s.data[e],n=s.data[s.dataView.getUint16(30,!0)];s.data[s.dataView.getUint16(30,!0)]=i,s.data[e]=n}}}}}s.pc=(s.pc+1)%s.progMem.length,s.cycles++}const As={EICR:105,EIMSK:61,EIFR:60,index:0,iscOffset:0,interrupt:2},Os={EICR:105,EIMSK:61,EIFR:60,index:1,iscOffset:2,interrupt:4},Bs={PCIE:0,PCICR:104,PCIFR:59,PCMSK:107,pinChangeInterrupt:6,mask:255,offset:0},Ms={PCIE:1,PCICR:104,PCIFR:59,PCMSK:108,pinChangeInterrupt:8,mask:255,offset:0},Vs={PCIE:2,PCICR:104,PCIFR:59,PCMSK:109,pinChangeInterrupt:10,mask:255,offset:0},dt={PIN:35,DDR:36,PORT:37,pinChange:Bs,externalInterrupts:[]},Ds={PIN:38,DDR:39,PORT:40,pinChange:Ms,externalInterrupts:[]},q={PIN:41,DDR:42,PORT:43,pinChange:Vs,externalInterrupts:[null,null,As,Os]};var $t=(s=>(s[s.Low=0]="Low",s[s.High=1]="High",s[s.Input=2]="Input",s[s.InputPullUp=3]="InputPullUp",s))($t||{}),w=(s=>(s[s.None=0]="None",s[s.Enable=1]="Enable",s[s.Set=2]="Set",s[s.Clear=3]="Clear",s[s.Toggle=4]="Toggle",s))(w||{});class St{constructor(t,e){var l,d;this.cpu=t,this.portConfig=e,this.externalClockListeners=[],this.listeners=[],this.pinValue=0,this.overrideMask=255,this.overrideValue=0,this.lastValue=0,this.lastDdr=0,this.lastPin=0,this.openCollector=0,t.gpioPorts.add(this),t.gpioByPort[e.PORT]=this,t.writeHooks[e.DDR]=c=>{const h=t.data[e.PORT];return t.data[e.DDR]=c,this.writeGpio(h,c),this.updatePinRegister(c),!0},t.writeHooks[e.PORT]=c=>{const h=t.data[e.DDR];return t.data[e.PORT]=c,this.writeGpio(c,h),this.updatePinRegister(h),!0},t.writeHooks[e.PIN]=(c,h,p,m)=>{const g=t.data[e.PORT],y=t.data[e.DDR],u=g^c&m;return t.data[e.PORT]=u,this.writeGpio(u,y),this.updatePinRegister(y),!0};const{externalInterrupts:i}=e;this.externalInts=i.map(c=>c?{address:c.interrupt,flagRegister:c.EIFR,flagMask:1<<c.index,enableRegister:c.EIMSK,enableMask:1<<c.index}:null);const n=new Set(i.map(c=>c==null?void 0:c.EICR));for(const c of n)this.attachInterruptHook(c||0);const r=((l=i.find(c=>c&&c.EIMSK))==null?void 0:l.EIMSK)??0;this.attachInterruptHook(r,"mask");const a=((d=i.find(c=>c&&c.EIFR))==null?void 0:d.EIFR)??0;this.attachInterruptHook(a,"flag");const{pinChange:o}=e;if(this.PCINT=o?{address:o.pinChangeInterrupt,flagRegister:o.PCIFR,flagMask:1<<o.PCIE,enableRegister:o.PCICR,enableMask:1<<o.PCIE}:null,o){const{PCIFR:c,PCMSK:h}=o;t.writeHooks[c]=p=>{for(const m of this.cpu.gpioPorts){const{PCINT:g}=m;g&&t.clearInterruptByFlag(g,p)}return!0},t.writeHooks[h]=p=>{t.data[h]=p;for(const m of this.cpu.gpioPorts){const{PCINT:g}=m;g&&t.updateInterruptEnable(g,p)}return!0}}}addListener(t){this.listeners.push(t)}removeListener(t){this.listeners=this.listeners.filter(e=>e!==t)}pinState(t){const e=this.cpu.data[this.portConfig.DDR],i=this.cpu.data[this.portConfig.PORT],n=1<<t,r=i&n?3:2,a=this.openCollector&n?r:1;return e&n?this.lastValue&n?a:0:r}setPin(t,e){const i=1<<t;this.pinValue&=~i,e&&(this.pinValue|=i),this.updatePinRegister(this.cpu.data[this.portConfig.DDR])}timerOverridePin(t,e){const{cpu:i,portConfig:n}=this,r=1<<t;if(e===0)this.overrideMask|=r,this.overrideValue&=~r;else switch(this.overrideMask&=~r,e){case 1:this.overrideValue&=~r,this.overrideValue|=i.data[n.PORT]&r;break;case 2:this.overrideValue|=r;break;case 3:this.overrideValue&=~r;break;case 4:this.overrideValue^=r;break}const a=i.data[n.DDR];this.writeGpio(i.data[n.PORT],a),this.updatePinRegister(a)}updatePinRegister(t){var i,n;const e=this.pinValue&~t|this.lastValue&t;if(this.cpu.data[this.portConfig.PIN]=e,this.lastPin!==e){for(let r=0;r<8;r++)if((e&1<<r)!==(this.lastPin&1<<r)){const a=!!(e&1<<r);this.toggleInterrupt(r,a),(n=(i=this.externalClockListeners)[r])==null||n.call(i,a)}this.lastPin=e}}toggleInterrupt(t,e){const{cpu:i,portConfig:n,externalInts:r,PCINT:a}=this,{externalInterrupts:o,pinChange:l}=n,d=o[t],c=r[t];if(c&&d){const{EIMSK:h,index:p,EICR:m,iscOffset:g}=d;if(i.data[h]&1<<p){const y=i.data[m]>>g&3;let u=!1;switch(c.constant=!1,y){case 0:u=!e,c.constant=!0;break;case 1:u=!0;break;case 2:u=!e;break;case 3:u=e;break}u?i.setInterruptFlag(c):c.constant&&i.clearInterrupt(c,!0)}}if(l&&a&&l.mask&1<<t){const{PCMSK:h}=l;i.data[h]&1<<t+l.offset&&i.setInterruptFlag(a)}}attachInterruptHook(t,e="other"){if(!t)return;const{cpu:i}=this;i.writeHooks[t]=n=>{e!=="flag"&&(i.data[t]=n);for(const r of i.gpioPorts){for(const a of r.externalInts)a&&e==="mask"&&i.updateInterruptEnable(a,n),a&&!a.constant&&e==="flag"&&i.clearInterruptByFlag(a,n);r.checkExternalInterrupts()}return!0}}checkExternalInterrupts(){const{cpu:t}=this,{externalInterrupts:e}=this.portConfig;for(let i=0;i<8;i++){const n=e[i];if(!n)continue;const r=!!(this.lastPin&1<<i),{EIFR:a,EIMSK:o,index:l,EICR:d,iscOffset:c,interrupt:h}=n;if(!(t.data[o]&1<<l)||r)continue;(t.data[d]>>c&3)===0&&t.queueInterrupt({address:h,flagRegister:a,flagMask:1<<l,enableRegister:o,enableMask:1<<l,constant:!0})}}writeGpio(t,e){const i=(t&this.overrideMask|this.overrideValue)&e|t&~e,n=this.lastValue;if(i!==n||e!==this.lastDdr){this.lastValue=i,this.lastDdr=e;for(const r of this.listeners)r(i,n)}}}const Le={0:0,1:1,2:8,3:64,4:256,5:1024,6:0,7:0},Yt={TOV:1,OCFA:2,OCFB:4,OCFC:0,TOIE:1,OCIEA:2,OCIEB:4,OCIEC:0},$s={bits:8,captureInterrupt:0,compAInterrupt:28,compBInterrupt:30,compCInterrupt:0,ovfInterrupt:32,TIFR:53,OCRA:71,OCRB:72,OCRC:0,ICR:0,TCNT:70,TCCRA:68,TCCRB:69,TCCRC:0,TIMSK:110,dividers:Le,compPortA:q.PORT,compPinA:6,compPortB:q.PORT,compPinB:5,compPortC:0,compPinC:0,externalClockPort:q.PORT,externalClockPin:4,...Yt},Fs={bits:16,captureInterrupt:20,compAInterrupt:22,compBInterrupt:24,compCInterrupt:0,ovfInterrupt:26,TIFR:54,OCRA:136,OCRB:138,OCRC:0,ICR:134,TCNT:132,TCCRA:128,TCCRB:129,TCCRC:130,TIMSK:111,dividers:Le,compPortA:dt.PORT,compPinA:1,compPortB:dt.PORT,compPinB:2,compPortC:0,compPinC:0,externalClockPort:q.PORT,externalClockPin:5,...Yt},Ns={bits:8,captureInterrupt:0,compAInterrupt:14,compBInterrupt:16,compCInterrupt:0,ovfInterrupt:18,TIFR:55,OCRA:179,OCRB:180,OCRC:0,ICR:0,TCNT:178,TCCRA:176,TCCRB:177,TCCRC:0,TIMSK:112,dividers:{0:0,1:1,2:8,3:32,4:64,5:128,6:256,7:1024},compPortA:dt.PORT,compPinA:3,compPortB:q.PORT,compPinB:3,compPortC:0,compPinC:0,externalClockPort:0,externalClockPin:0,...Yt};var He=(s=>(s[s.Normal=0]="Normal",s[s.PWMPhaseCorrect=1]="PWMPhaseCorrect",s[s.CTC=2]="CTC",s[s.FastPWM=3]="FastPWM",s[s.PWMPhaseFrequencyCorrect=4]="PWMPhaseFrequencyCorrect",s[s.Reserved=5]="Reserved",s))(He||{});const O=1,j=2,F=1,{Normal:Jt,PWMPhaseCorrect:E,CTC:ft,FastPWM:U,Reserved:Ft,PWMPhaseFrequencyCorrect:Q}=He,zs=[[Jt,255,0,0,0],[E,255,1,2,0],[ft,O,0,0,0],[U,255,2,0,0],[Ft,255,0,0,0],[E,O,1,2,F],[Ft,255,0,0,0],[U,O,2,1,F]],Ls=[[Jt,65535,0,0,0],[E,255,1,2,0],[E,511,1,2,0],[E,1023,1,2,0],[ft,O,0,0,0],[U,255,2,1,0],[U,511,2,1,0],[U,1023,2,1,0],[Q,j,2,2,0],[Q,O,2,2,F],[E,j,1,2,0],[E,O,1,2,F],[ft,j,0,0,0],[Ft,65535,0,0,0],[U,j,2,1,F],[U,O,2,1,F]];function Hs(s){switch(s){case 1:return w.Toggle;case 2:return w.Clear;case 3:return w.Set;default:return w.Enable}}const js=128,Ks=64,qs=32;class Pt{constructor(t,e){if(this.cpu=t,this.config=e,this.MAX=this.config.bits===16?65535:255,this.lastCycle=0,this.ocrA=0,this.nextOcrA=0,this.ocrB=0,this.nextOcrB=0,this.hasOCRC=this.config.OCRC>0,this.ocrC=0,this.nextOcrC=0,this.ocrUpdateMode=0,this.tovUpdateMode=0,this.icr=0,this.tcnt=0,this.tcntNext=0,this.tcntUpdated=!1,this.updateDivider=!1,this.countingUp=!0,this.divider=0,this.externalClockRisingEdge=!1,this.highByteTemp=0,this.OVF={address:this.config.ovfInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.TOV,enableRegister:this.config.TIMSK,enableMask:this.config.TOIE},this.OCFA={address:this.config.compAInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.OCFA,enableRegister:this.config.TIMSK,enableMask:this.config.OCIEA},this.OCFB={address:this.config.compBInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.OCFB,enableRegister:this.config.TIMSK,enableMask:this.config.OCIEB},this.OCFC={address:this.config.compCInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.OCFC,enableRegister:this.config.TIMSK,enableMask:this.config.OCIEC},this.count=(i=!0,n=!1)=>{const{divider:r,lastCycle:a,cpu:o}=this,{cycles:l}=o,d=l-a;if(r&&d>=r||n){const c=n?1:Math.floor(d/r);this.lastCycle+=c*r;const h=this.tcnt,{timerMode:p,TOP:m}=this,g=p===E||p===Q,y=g?this.phasePwmCount(h,c):(h+c)%(m+1),u=h+c>m;if(this.tcntUpdated||(this.tcnt=y,g||this.timerUpdated(y,h)),!g){if(p===U&&u){const{compA:R,compB:b}=this;R&&this.updateCompPin(R,"A",!0),b&&this.updateCompPin(b,"B",!0)}this.ocrUpdateMode==2&&u&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC),u&&(this.tovUpdateMode==1||m===this.MAX)&&o.setInterruptFlag(this.OVF)}}if(this.tcntUpdated&&(this.tcnt=this.tcntNext,this.tcntUpdated=!1,(this.tcnt===0&&this.ocrUpdateMode===2||this.tcnt===this.TOP&&this.ocrUpdateMode===1)&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC)),this.updateDivider){const{CS:c}=this,{externalClockPin:h}=this.config,p=this.config.dividers[c];this.lastCycle=p?this.cpu.cycles:0,this.updateDivider=!1,this.divider=p,this.config.externalClockPort&&!this.externalClockPort&&(this.externalClockPort=this.cpu.gpioByPort[this.config.externalClockPort]),this.externalClockPort&&(this.externalClockPort.externalClockListeners[h]=null),p?o.addClockEvent(this.count,this.lastCycle+p-o.cycles):this.externalClockPort&&(c===6||c===7)&&(this.externalClockPort.externalClockListeners[h]=this.externalClockCallback,this.externalClockRisingEdge=c===7);return}i&&r&&o.addClockEvent(this.count,this.lastCycle+r-o.cycles)},this.externalClockCallback=i=>{i===this.externalClockRisingEdge&&this.count(!1,!0)},this.updateWGMConfig(),this.cpu.readHooks[e.TCNT]=i=>(this.count(!1),this.config.bits===16&&(this.cpu.data[i+1]=this.tcnt>>8),this.cpu.data[i]=this.tcnt&255),this.cpu.writeHooks[e.TCNT]=i=>{this.tcntNext=this.highByteTemp<<8|i,this.countingUp=!0,this.tcntUpdated=!0,this.cpu.updateClockEvent(this.count,0),this.divider&&this.timerUpdated(this.tcntNext,this.tcntNext)},this.cpu.writeHooks[e.OCRA]=i=>{this.nextOcrA=this.highByteTemp<<8|i,this.ocrUpdateMode===0&&(this.ocrA=this.nextOcrA)},this.cpu.writeHooks[e.OCRB]=i=>{this.nextOcrB=this.highByteTemp<<8|i,this.ocrUpdateMode===0&&(this.ocrB=this.nextOcrB)},this.hasOCRC&&(this.cpu.writeHooks[e.OCRC]=i=>{this.nextOcrC=this.highByteTemp<<8|i,this.ocrUpdateMode===0&&(this.ocrC=this.nextOcrC)}),this.config.bits===16){this.cpu.writeHooks[e.ICR]=r=>{this.icr=this.highByteTemp<<8|r};const i=r=>{this.highByteTemp=r},n=(r,a,o)=>(this.highByteTemp=r&this.ocrMask>>8,t.data[o]=this.highByteTemp,!0);this.cpu.writeHooks[e.TCNT+1]=i,this.cpu.writeHooks[e.OCRA+1]=n,this.cpu.writeHooks[e.OCRB+1]=n,this.hasOCRC&&(this.cpu.writeHooks[e.OCRC+1]=n),this.cpu.writeHooks[e.ICR+1]=i}t.writeHooks[e.TCCRA]=i=>(this.cpu.data[e.TCCRA]=i,this.updateWGMConfig(),!0),t.writeHooks[e.TCCRB]=i=>(e.TCCRC||(this.checkForceCompare(i),i&=-193),this.cpu.data[e.TCCRB]=i,this.updateDivider=!0,this.cpu.clearClockEvent(this.count),this.cpu.addClockEvent(this.count,0),this.updateWGMConfig(),!0),e.TCCRC&&(t.writeHooks[e.TCCRC]=i=>{this.checkForceCompare(i)}),t.writeHooks[e.TIFR]=i=>(this.cpu.data[e.TIFR]=i,this.cpu.clearInterruptByFlag(this.OVF,i),this.cpu.clearInterruptByFlag(this.OCFA,i),this.cpu.clearInterruptByFlag(this.OCFB,i),!0),t.writeHooks[e.TIMSK]=i=>{this.cpu.updateInterruptEnable(this.OVF,i),this.cpu.updateInterruptEnable(this.OCFA,i),this.cpu.updateInterruptEnable(this.OCFB,i)}}reset(){this.divider=0,this.lastCycle=0,this.ocrA=0,this.nextOcrA=0,this.ocrB=0,this.nextOcrB=0,this.ocrC=0,this.nextOcrC=0,this.icr=0,this.tcnt=0,this.tcntNext=0,this.tcntUpdated=!1,this.countingUp=!1,this.updateDivider=!0}get TCCRA(){return this.cpu.data[this.config.TCCRA]}get TCCRB(){return this.cpu.data[this.config.TCCRB]}get TIMSK(){return this.cpu.data[this.config.TIMSK]}get CS(){return this.TCCRB&7}get WGM(){const t=this.config.bits===16?24:8;return(this.TCCRB&t)>>1|this.TCCRA&3}get TOP(){switch(this.topValue){case O:return this.ocrA;case j:return this.icr;default:return this.topValue}}get ocrMask(){switch(this.topValue){case O:case j:return 65535;default:return this.topValue}}get debugTCNT(){return this.tcnt}updateWGMConfig(){const{config:t,WGM:e}=this,i=t.bits===16?Ls:zs,n=this.cpu.data[t.TCCRA],[r,a,o,l,d]=i[e];this.timerMode=r,this.topValue=a,this.ocrUpdateMode=o,this.tovUpdateMode=l;const c=r===U||r===E||r===Q,h=this.compA;this.compA=n>>6&3,this.compA===1&&c&&!(d&F)&&(this.compA=0),!!h!=!!this.compA&&this.updateCompA(this.compA?w.Enable:w.None);const p=this.compB;if(this.compB=n>>4&3,this.compB===1&&c&&(this.compB=0),!!p!=!!this.compB&&this.updateCompB(this.compB?w.Enable:w.None),this.hasOCRC){const m=this.compC;this.compC=n>>2&3,this.compC===1&&c&&(this.compC=0),!!m!=!!this.compC&&this.updateCompC(this.compC?w.Enable:w.None)}}phasePwmCount(t,e){const{ocrA:i,ocrB:n,ocrC:r,hasOCRC:a,TOP:o,MAX:l,tcntUpdated:d}=this;for(!t&&!o&&(e=0,this.ocrUpdateMode===1&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC));e>0;)this.countingUp?(t++,t===o&&!d&&(this.countingUp=!1,this.ocrUpdateMode===1&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC))):(t--,!t&&!d&&(this.countingUp=!0,this.cpu.setInterruptFlag(this.OVF),this.ocrUpdateMode===2&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC))),d||(t===i&&(this.cpu.setInterruptFlag(this.OCFA),this.compA&&this.updateCompPin(this.compA,"A")),t===n&&(this.cpu.setInterruptFlag(this.OCFB),this.compB&&this.updateCompPin(this.compB,"B")),a&&t===r&&(this.cpu.setInterruptFlag(this.OCFC),this.compC&&this.updateCompPin(this.compC,"C"))),e--;return t&l}timerUpdated(t,e){const{ocrA:i,ocrB:n,ocrC:r,hasOCRC:a}=this,o=e>t;((e<i||o)&&t>=i||e<i&&o)&&(this.cpu.setInterruptFlag(this.OCFA),this.compA&&this.updateCompPin(this.compA,"A")),((e<n||o)&&t>=n||e<n&&o)&&(this.cpu.setInterruptFlag(this.OCFB),this.compB&&this.updateCompPin(this.compB,"B")),a&&((e<r||o)&&t>=r||e<r&&o)&&(this.cpu.setInterruptFlag(this.OCFC),this.compC&&this.updateCompPin(this.compC,"C"))}checkForceCompare(t){this.timerMode==3||this.timerMode==1||this.timerMode==4||(t&js&&this.updateCompPin(this.compA,"A"),t&Ks&&this.updateCompPin(this.compB,"B"),this.config.compPortC&&t&qs&&this.updateCompPin(this.compC,"C"))}updateCompPin(t,e,i=!1){let n=w.None;const r=t===3,a=this.countingUp===r;switch(this.timerMode){case Jt:case ft:n=Hs(t);break;case U:t===1?n=i?w.None:w.Toggle:n=r!==i?w.Set:w.Clear;break;case E:case Q:t===1?n=w.Toggle:n=a?w.Set:w.Clear;break}n!==w.None&&(e==="A"?this.updateCompA(n):e==="B"?this.updateCompB(n):this.updateCompC(n))}updateCompA(t){const{compPortA:e,compPinA:i}=this.config,n=this.cpu.gpioByPort[e];n==null||n.timerOverridePin(i,t)}updateCompB(t){const{compPortB:e,compPinB:i}=this.config,n=this.cpu.gpioByPort[e];n==null||n.timerOverridePin(i,t)}updateCompC(t){const{compPortC:e,compPinC:i}=this.config,n=this.cpu.gpioByPort[e];n==null||n.timerOverridePin(i,t)}}const Ws={rxCompleteInterrupt:36,dataRegisterEmptyInterrupt:38,txCompleteInterrupt:40,UCSRA:192,UCSRB:193,UCSRC:194,UBRRL:196,UBRRH:197,UDR:198},Xs=128,Gs=64,ye=32,Nt=2,Zs=1,we=Nt,Ys=128,Js=64,Qs=32,at=16,ot=8,je=4,xe=je|at|ot,ti=32,ei=16,si=8,Ce=4,ve=2,ii={5:31,6:63,7:127,8:255,9:255};class ni{constructor(t,e,i){this.cpu=t,this.config=e,this.freqHz=i,this.onByteTransmit=null,this.onLineTransmit=null,this.onRxComplete=null,this.onConfigurationChange=null,this.rxBusyValue=!1,this.rxByte=0,this.lineBuffer="",this.RXC={address:this.config.rxCompleteInterrupt,flagRegister:this.config.UCSRA,flagMask:Xs,enableRegister:this.config.UCSRB,enableMask:Ys,constant:!0},this.UDRE={address:this.config.dataRegisterEmptyInterrupt,flagRegister:this.config.UCSRA,flagMask:ye,enableRegister:this.config.UCSRB,enableMask:Qs},this.TXC={address:this.config.txCompleteInterrupt,flagRegister:this.config.UCSRA,flagMask:Gs,enableRegister:this.config.UCSRB,enableMask:Js},this.reset(),this.cpu.writeHooks[e.UCSRA]=(n,r)=>{var a;return t.data[e.UCSRA]=n&(Zs|Nt),t.clearInterruptByFlag(this.TXC,n),(n&we)!==(r&we)&&((a=this.onConfigurationChange)==null||a.call(this)),!0},this.cpu.writeHooks[e.UCSRB]=(n,r)=>{var a;return t.updateInterruptEnable(this.RXC,n),t.updateInterruptEnable(this.UDRE,n),t.updateInterruptEnable(this.TXC,n),n&at&&r&at&&t.clearInterrupt(this.RXC),n&ot&&!(r&ot)&&t.setInterruptFlag(this.UDRE),t.data[e.UCSRB]=n,(n&xe)!==(r&xe)&&((a=this.onConfigurationChange)==null||a.call(this)),!0},this.cpu.writeHooks[e.UCSRC]=n=>{var r;return t.data[e.UCSRC]=n,(r=this.onConfigurationChange)==null||r.call(this),!0},this.cpu.readHooks[e.UDR]=()=>{const n=ii[this.bitsPerChar]??255,r=this.rxByte&n;return this.rxByte=0,this.cpu.clearInterrupt(this.RXC),r},this.cpu.writeHooks[e.UDR]=n=>{if(this.onByteTransmit&&this.onByteTransmit(n),this.onLineTransmit){const r=String.fromCharCode(n);r===`
`?(this.onLineTransmit(this.lineBuffer),this.lineBuffer=""):this.lineBuffer+=r}this.cpu.addClockEvent(()=>{t.setInterruptFlag(this.UDRE),t.setInterruptFlag(this.TXC)},this.cyclesPerChar),this.cpu.clearInterrupt(this.TXC),this.cpu.clearInterrupt(this.UDRE)},this.cpu.writeHooks[e.UBRRH]=n=>{var r;return this.cpu.data[e.UBRRH]=n,(r=this.onConfigurationChange)==null||r.call(this),!0},this.cpu.writeHooks[e.UBRRL]=n=>{var r;return this.cpu.data[e.UBRRL]=n,(r=this.onConfigurationChange)==null||r.call(this),!0}}reset(){this.cpu.data[this.config.UCSRA]=ye,this.cpu.data[this.config.UCSRB]=0,this.cpu.data[this.config.UCSRC]=Ce|ve,this.rxBusyValue=!1,this.rxByte=0,this.lineBuffer=""}get rxBusy(){return this.rxBusyValue}writeByte(t,e=!1){var n;const{cpu:i}=this;if(this.rxBusyValue||!this.rxEnable)return!1;if(e)this.rxByte=t,i.setInterruptFlag(this.RXC),(n=this.onRxComplete)==null||n.call(this);else return this.rxBusyValue=!0,i.addClockEvent(()=>{this.rxBusyValue=!1,this.writeByte(t,!0)},this.cyclesPerChar),!0}get cyclesPerChar(){const t=1+this.bitsPerChar+this.stopBits+(this.parityEnabled?1:0);return(this.UBRR+1)*this.multiplier*t}get UBRR(){const{UBRRH:t,UBRRL:e}=this.config;return this.cpu.data[t]<<8|this.cpu.data[e]}get multiplier(){return this.cpu.data[this.config.UCSRA]&Nt?8:16}get rxEnable(){return!!(this.cpu.data[this.config.UCSRB]&at)}get txEnable(){return!!(this.cpu.data[this.config.UCSRB]&ot)}get baudRate(){return Math.floor(this.freqHz/(this.multiplier*(1+this.UBRR)))}get bitsPerChar(){switch((this.cpu.data[this.config.UCSRC]&(Ce|ve))>>1|this.cpu.data[this.config.UCSRB]&je){case 0:return 5;case 1:return 6;case 2:return 7;case 3:return 8;default:case 7:return 9}}get stopBits(){return this.cpu.data[this.config.UCSRC]&si?2:1}get parityEnabled(){return!!(this.cpu.data[this.config.UCSRC]&ti)}get parityOdd(){return!!(this.cpu.data[this.config.UCSRC]&ei)}}const ri="https://hexi.wokwi.com";async function ai(s){return await(await fetch(ri+"/build",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({sketch:s})})).json()}class oi{constructor(t,e){this.cpu=t,this.MHZ=e,this.prevTime=0,this.prevCycles=0,this.samples=new Float32Array(64),this.sampleIndex=0}reset(){this.prevTime=0,this.prevCycles=0,this.sampleIndex=0}update(){if(this.prevTime){const e=performance.now()-this.prevTime,r=1e3*((this.cpu.cycles-this.prevCycles)/this.MHZ)/e;this.sampleIndex||this.samples.fill(r),this.samples[this.sampleIndex++%this.samples.length]=r}return this.prevCycles=this.cpu.cycles,this.prevTime=performance.now(),this.samples.reduce((e,i)=>e+i)/this.samples.length}}function li(s,t){for(const e of s.split(`
`))if(e[0]===":"&&e.substr(7,2)==="00"){const i=parseInt(e.substr(1,2),16),n=parseInt(e.substr(3,4),16);for(let r=0;r<i;r++)t[n+r]=parseInt(e.substr(9+r*2,2),16)}}class ci{constructor(){this.channel=new MessageChannel,this.executionQueue=[],this.stopped=!0,this.handleMessage=()=>{const t=this.executionQueue.shift();t!==void 0&&t()}}start(){this.stopped&&(this.stopped=!1,this.channel.port2.onmessage=this.handleMessage)}stop(){this.stopped=!0,this.executionQueue.splice(0,this.executionQueue.length),this.channel.port2.onmessage=null}postTask(t){this.stopped||(this.executionQueue.push(t),this.channel.port1.postMessage(null))}}const hi=32768;class di{constructor(t){this.program=new Uint16Array(hi),this.speed=16e6,this.workUnitCycles=5e5,this.taskScheduler=new ci,li(t,new Uint8Array(this.program.buffer)),this.cpu=new Us(this.program),this.timer0=new Pt(this.cpu,$s),this.timer1=new Pt(this.cpu,Fs),this.timer2=new Pt(this.cpu,Ns),this.portB=new St(this.cpu,dt),this.portC=new St(this.cpu,Ds),this.portD=new St(this.cpu,q),this.usart=new ni(this.cpu,Ws,this.speed),this.taskScheduler.start()}execute(t){const e=this.cpu.cycles+this.workUnitCycles;for(;this.cpu.cycles<e;)Ts(this.cpu),this.cpu.tick();t(this.cpu),this.taskScheduler.postTask(()=>this.execute(t))}stop(){this.taskScheduler.stop()}}function kt(s,t){let e=s.toString();for(;e.length<t;)e="0"+e;return e}function fi(s){const t=Math.floor(s*1e3)%1e3,e=Math.floor(s%60),i=Math.floor(s/60);return`${kt(i,2)}:${kt(e,2)}.${kt(t,3)}`}const _t="AVRJS8_EDITOR_HISTORY",K=class K{static storeSnippet(t){K.hasLocalStorage&&window.localStorage.setItem(_t,t)}static clearSnippet(){K.hasLocalStorage&&localStorage.removeItem(_t)}static getValue(){if(K.hasLocalStorage)return localStorage.getItem(_t)}};K.hasLocalStorage=!!window.localStorage;let X=K,nt;const Ke=`
// Green LED connected to LED_BUILTIN,
// Red LED connected to pin 12. Enjoy!

void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  Serial.println("Blink");
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}`.trim();window.require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs"}});window.require(["vs/editor/editor.main"],()=>{nt=monaco.editor.create(document.querySelector(".code-editor"),{value:X.getValue()||Ke,language:"cpp",minimap:{enabled:!1}})});const qe=document.querySelector("wokwi-led[color=green]"),We=document.querySelector("wokwi-led[color=red]");let I;const tt=document.querySelector("#run-button");tt.addEventListener("click",ui);const Qt=document.querySelector("#stop-button");Qt.addEventListener("click",mi);const pt=document.querySelector("#revert-button");pt.addEventListener("click",yi);const zt=document.querySelector("#status-label"),be=document.querySelector("#compiler-output-text"),Xe=document.querySelector("#serial-output-text");function pi(s){I=new di(s);const t=16e6;I.portB.addListener(()=>{We.value=I.portB.pinState(4)===$t.High,qe.value=I.portB.pinState(5)===$t.High}),I.usart.onByteTransmit=i=>{Xe.textContent+=String.fromCharCode(i)};const e=new oi(I.cpu,t);I.execute(i=>{const n=fi(i.cycles/t),r=(e.update()*100).toFixed(0);zt.textContent=`Simulation time: ${n} (${r}%)`})}async function ui(){We.value=!1,qe.value=!1,gi(),tt.setAttribute("disabled","1"),pt.setAttribute("disabled","1"),Xe.textContent="";try{zt.textContent="Compiling...";const s=await ai(nt.getModel().getValue());be.textContent=s.stderr||s.stdout,s.hex?(be.textContent+=`
Program running...`,Qt.removeAttribute("disabled"),pi(s.hex)):tt.removeAttribute("disabled")}catch(s){tt.removeAttribute("disabled"),pt.removeAttribute("disabled"),alert("Failed: "+s)}finally{zt.textContent=""}}function gi(){X.clearSnippet(),X.storeSnippet(nt.getValue())}function mi(){Qt.setAttribute("disabled","1"),tt.removeAttribute("disabled"),pt.removeAttribute("disabled"),I&&(I.stop(),I=null)}function yi(){nt.setValue(Ke),X.storeSnippet(nt.getValue())}
