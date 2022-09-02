(()=>{"use strict";var e,t={"./examples/ex__font_svg.js":(e,t,n)=>{var i=n("./node_modules/three/build/three.module.js"),a=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),r=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),o=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),s=n("./src/three-mesh-ui.js");class h extends s.pz{constructor(e){super(e)}get shape(){return this.typographic.shape}}var l=n("./node_modules/three/examples/jsm/loaders/SVGLoader.js");class c extends s.gE{constructor(e,t){if(super(e),this._width=e.size,this._heigth=e.lineBase,t.char)this._char=t.char,this._xadvance=t.xadvance,this._shapePath=(new i.bnF).moveTo(0,0).lineTo(0,this._heigth).lineTo(this._width,this._heigth).lineTo(this._width,0).lineTo(0,0);else{this._char=t.getAttribute("unicode"),t.hasAttribute("horiz-adv-x")?this._xadvance=parseFloat(t.getAttribute("horiz-adv-x"))/e.divisor:this._xadvance=e.xadvance/e.divisor,this._yoffset=this.height/2;const n=function(e){const t=new i.T_1;let n,a,r,o=1,s=0,h=0,l=0,c=0,p=null,f=null,g=0,m=0,_=0,w=0,v=0,x=0,b=0,y=0,C=0;const P=e.length;function T(){let t,n,i,a=!1;for(;o<P&&(n=e.charCodeAt(o),44===n||n===u);)o++;for(t=45===n?o++:o;o<P;)if(n=e.charCodeAt(o),48<=n&&n<=57)o++;else{if(46!==n)return i=e.substring(t,o),a?parseFloat(i):parseInt(i);o++,a=!0}return i=e.substring(t),a?parseFloat(i):parseInt(i)}function S(){let t;for(;o<P&&(t=e.charCodeAt(o),44===t||t===u);)o++;return t=e.charCodeAt(o),45===t||48<=t&&t<=57}let k;n=e[0];for(;o<=P;){switch(k=!0,n){case"M":s=T(),h=T(),t.moveTo(s,h),n="L",p=s,f=h;break;case"m":s+=T(),h+=T(),t.moveTo(s,h),n="l",p=s,f=h;break;case"Z":case"z":k=!1,s===p&&h===f||t.lineTo(p,f);break;case"L":case"H":case"V":l="V"===n?s:T(),c="H"===n?h:T(),t.lineTo(l,c),s=l,h=c;break;case"l":case"h":case"v":l="v"===n?s:s+T(),c="h"===n?h:h+T(),t.lineTo(l,c),s=l,h=c;break;case"C":g=T(),_=T();case"S":"S"===n&&(g=2*s-m,_=2*h-w),m=T(),w=T(),l=T(),c=T(),t.bezierCurveTo(g,_,m,w,l,c),s=l,h=c;break;case"c":g=s+T(),_=h+T();case"s":"s"===n&&(g=2*s-m,_=2*h-w),m=s+T(),w=h+T(),l=s+T(),c=h+T(),t.bezierCurveTo(g,_,m,w,l,c),s=l,h=c;break;case"Q":g=T(),_=T();case"T":"T"===n&&(g=2*s-g,_=2*h-_),l=T(),c=T(),t.quadraticCurveTo(g,_,l,c),s=l,h=c;break;case"q":g=s+T(),_=h+T();case"t":"t"===n&&(g=2*s-g,_=2*h-_),l=s+T(),c=h+T(),t.quadraticCurveTo(g,_,l,c),s=l,h=c;break;case"A":v=T(),x=T(),b=T()*d,y=T(),C=T(),l=T(),c=T(),v!==x&&console.warn("Forcing elliptical arc to be a circular one:",v,x),g=Math.cos(b)*(s-l)/2+Math.sin(b)*(h-c)/2,_=-Math.sin(b)*(s-l)/2+Math.cos(b)*(h-c)/2;let e=Math.sqrt((v*v*x*x-v*v*_*_-x*x*g*g)/(v*v*_*_+x*x*g*g));y===C&&(e=-e),m=e*v*_/x,w=e*-x*g/v,a=Math.cos(b)*m-Math.sin(b)*w+(s+l)/2,r=Math.sin(b)*m+Math.cos(b)*w+(h+c)/2;const o=new i.FM8(1,0),P=new i.FM8((g-m)/v,(_-w)/x);let S=Math.acos(o.dot(P)/o.length()/P.length());o.x*P.y-o.y*P.x<0&&(S=-S),o.x=(-g-m)/v,o.y=(-_-w)/x;let M=Math.acos(P.dot(o)/P.length()/o.length());P.x*o.y-P.y*o.x<0&&(M=-M),!C&&M>0&&(M-=2*Math.PI),C&&M<0&&(M+=2*Math.PI),t.absarc(a,r,v,S,S+M,C),s=l,h=c;break;default:if(1!==n.length||n.charCodeAt(0)!==u)throw new Error("Wrong path command: "+n.charCodeAt(0))}k&&S()||(n=e[o++])}return t}(t.getAttribute("d"));this._shapePath=l.u.createShapes(n)}}get shape(){return this._shapePath}asInlineGlyph(){return new h(this)}}const d=Math.PI/180,u=32;class p extends s.mx{constructor(e){super();const t=e.querySelector("defs font font-face");if(!t)throw new Error("SVGTypographicFont::The provided svgElement doesn't have font-face markup");const n=parseFloat(t.getAttribute("ascent")),i=n-parseFloat(t.getAttribute("descent")),a=42*i;this._divisor=a,this._em=parseFloat(t.getAttribute("units-per-em")),this._xadvance=this._em,t.parentElement.hasAttribute("horiz-adv-x")&&(this._xadvance=parseFloat(t.parentElement.getAttribute("horiz-adv-x"))),this._size=i/a,this._lineHeight=n/a*1.05,this._lineBase=parseFloat(t.getAttribute("cap-height"))/a,this._name=t.getAttribute("font-family");const r=e.querySelectorAll("glyph[unicode]");let o="";for(const e of r)o+=e.unicode;this._charset=o}get xadvance(){return this._xadvance}get em(){return this._em}get divisor(){return this._divisor}}class f extends i.$Vf{constructor(e,t){const n=e.typographic.font.size,i=e.typographic.font.divisor,a=t.segments;let r=1,o=1;r=Math.ceil(e.typographic.width/n*a),o=Math.ceil(e.typographic.height/n*a),super(e.shape,{depth:t._fontDepth.value}),this.name="SVGGeometryGlyph("+e.typographic.char+")",this._transformGeometry(e),this.scale(1/i*e.fontFactor,1/i*e.fontFactor,.025)}_transformGeometry(e){this.translate(e.width/2,e.height/2-e.anchor,0)}}class g extends s.Ec{constructor(){super("fontDepth","inherit",!0)}update(e,t){super.update(e,t),e.isInline&&(e._parent._value._renderer._needsRender=!0)}}class m extends s.HS{constructor(e,t,n){var a,r;super(e,t),n.tagName?this._buildData(n):(a=this,r=n,(new i.hH6).setResponseType("document").setMimeType("text/xml").load(r,(e=>{const t=e.firstElementChild;if(!t||"svg"!==t.tagName.toLowerCase())throw new Error("SVGFontVariant:: The loaded SVG is not a SVG.");a._buildData(e),a._checkReadiness()}),null,(e=>{console.error(e)}))),s.wb.set({fontDepth:.01}),this._defaultMaterialClass=i.vBJ,this._checkReadiness()}set fontMaterial(e){this._defaultMaterialClass=e}get fontMaterial(){return this._defaultMaterialClass}_buildData(e){this._font=new p(e),this._kernings=this._buildKerningPairs(e),this._chars=this._buildCharacters(e),this._chars[" "]=this._buildCharacterWhite(e),this._size=this._font.size,this._lineHeight=this._font.lineHeight,this._lineBase=this._font.lineBase}getGeometricGlyph(e,t=1){return new f(e,t)}_readyCondition(){return this._chars}_buildKerningPairs(e){const t={},n=e.querySelectorAll("defs font hkern[u1][u2]");for(let e=0;e<n.length;e++){const i=n[e];if(0===i.k)continue;t[String.fromCharCode(i.u1,i.u2)]=i.k}return t}_buildCharacters(e){const t={},n=e.querySelectorAll("defs font glyph[unicode]");for(let e=0;e<n.length;e++){const i=n[e],a=i.getAttribute("unicode");" "!==a&&(160!==a.charCodeAt(0)&&(t[a]=new c(this._font,i)))}return t}_buildCharacterWhite(){return new c(this._font,{char:" ",xadvance:this._font.size/3})}_alterElementProperties(e){m.appendProperties(e)}static appendProperties(e){for(let e=0;e<arguments.length;e++){const t=arguments[e];t.isUI&&void 0===t._fontDepth&&t.appendProperty("fontDepth",new g)}}}s.zV.prepare(s.zV.addFontFamily("FluxArchitect").addCustomImplementationVariant(new m("400","normal","./assets/fonts/svg/flux/regular.svg")).addCustomImplementationVariant(new m("400","italic","./assets/fonts/svg/flux/italic.svg")).addCustomImplementationVariant(new m("700","normal","./assets/fonts/svg/flux/bold.svg")).addCustomImplementationVariant(new m("700","italic","./assets/fonts/svg/flux/bold-italic.svg"))).then((()=>{s.zV.getFontFamily("FluxArchitect").getVariant("700","normal").fontMaterial=i.RSm,function(){v=new i.xsS,v.background=new i.Ilk(5263440),x=new i.cPb(60,_/w,.1,100),b=new i.CP7({antialias:!0}),b.setPixelRatio(window.devicePixelRatio),b.setSize(_,w),b.xr.enabled=!0,document.body.appendChild(a.N.createButton(b)),document.body.appendChild(b.domElement),y=new r.z(x,b.domElement),x.position.set(0,1.6,0),y.target=new i.Pa4(0,1,-1.8),y.update();const e=new i.ejS(new o.d(6,6,6,10,10,10).translate(0,3,0),new i.nls({color:8421504}));v.add(e),function(){const e=new s.ZP.Block({width:1.85,padding:.05,justifyContent:"center",textAlign:"left",fontKerning:"none",backgroundColor:0,backgroundOpacity:.25,fontSize:.05,fontFamily:"FluxArchitect"});e.position.set(0,1,-1.8),e.rotation.x=-.55,v.add(e);const t=new s.ZP.Text({width:"100%",justifyContent:"center",textContent:"Extending font types (SVG)",fontWeight:"700",fontSize:.08,marginBottom:.025});window.rootBlock=e,e.add(t,new s.ZP.Text({width:"100%",textContent:'In this examples, 4 variants of the "FluxArchitect" font in svg format are registered.',marginBottom:.025}),new s.ZP.Text({}).add(new s.ZP.Inline({textContent:"\n\nRegular"}),new s.ZP.Inline({textContent:" Bold",margin:"0 0.05",fontWeight:"700"}),new s.ZP.Inline({textContent:" Italic",fontStyle:"italic"}),new s.ZP.Inline({textContent:" Bold+Italic",fontWeight:"700",fontStyle:"italic"})),new s.ZP.Text({textContent:"The registered bold variant in this example, will automatically set the material of a Text to use",margin:"0.025 0",textAlign:"justify-left"}).add(new s.ZP.Inline({textContent:" MeshNormalMaterial.",fontWeight:"700"})),new s.ZP.Text({width:"100%",textContent:"* Some font type implementation, such as this one, will allow to have 3D glyphs and additional parameters such as depth, ...",fontSize:.035,color:new i.Ilk(65433)})),m.appendProperties(e,...e.children)}(),b.setAnimationLoop(C),window.addEventListener("resize",P)}()}));const _=window.innerWidth,w=window.innerHeight;let v,x,b,y;function C(){s.ZP.update(),y.update(),b.render(v,x)}function P(){x.aspect=window.innerWidth/window.innerHeight,x.updateProjectionMatrix(),b.setSize(window.innerWidth,window.innerHeight)}}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(t,n,a,r)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,a,r]=e[c],s=!0,h=0;h<n.length;h++)(!1&r||o>=r)&&Object.keys(i.O).every((e=>i.O[e](n[h])))?n.splice(h--,1):(s=!1,r<o&&(o=r));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j="ex__font_svg",(()=>{var e={ex__font_svg:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[o,s,h]=n,l=0;if(o.some((t=>0!==e[t]))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(h)var c=h(i)}for(t&&t(n);l<o.length;l++)r=o[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=i.O(void 0,["chunk_three-mesh-ui","chunk_vendors"],(()=>i("./examples/ex__font_svg.js")));a=i.O(a)})();