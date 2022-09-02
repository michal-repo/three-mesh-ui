(()=>{"use strict";var e,t={"./examples/ex__msdf_materials.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),s=n("./src/three-mesh-ui.js");class r extends o.Wid{static get mediation(){return s.tx.mediation}constructor(e={}){s.tx.ensureMaterialOptions(e),super(e),s.tx.ensureDefines(this),s.tx.ensureUserData(this,e),this.onBeforeCompile=e=>{s.tx.bindUniformsWithUserData(e,this),s.tx.injectShaderChunks(e)}}}class i extends o.EJi{static get mediation(){return s.tx.mediation}constructor(e={}){s.tx.ensureMaterialOptions(e),super(e),s.tx.ensureDefines(this),s.tx.ensureUserData(this,e),this.onBeforeCompile=e=>{s.tx.bindUniformsWithUserData(e,this),s.tx.injectShaderChunks(e)}}}class a extends o.YBo{static get mediation(){return s.tx.mediation}constructor(e={}){s.tx.ensureMaterialOptions(e),super(e),s.tx.ensureDefines(this),s.tx.ensureUserData(this,e),this.onBeforeCompile=e=>{s.tx.bindUniformsWithUserData(e,this),s.tx.injectShaderChunks(e)}}}class l extends o.Wid{static get mediation(){return s.tx.mediation}constructor(e={}){s.tx.ensureMaterialOptions(e),super(e),s.tx.ensureDefines(this),s.tx.ensureUserData(this,e),this.userData.progress={value:0},this.userData.offset={value:.1},this.onBeforeCompile=e=>{s.tx.bindUniformsWithUserData(e,this),e.uniforms.progress=this.userData.progress,e.uniforms.offset=this.userData.offset,e.vertexShader="\n                uniform float progress;\n                uniform float offset;\n            "+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <uv_pars_vertex>","#include <uv_pars_vertex>\n"+s.sV.msdfAlphaglyphParsVertexGlsl),e.vertexShader=e.vertexShader.replace("#include <uv_vertex>","#include <uv_vertex>\n"+s.sV.msdfAlphaglyphVertexGlsl),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",s.sV.msdfOffsetglyphVertexGlsl+"\n// add a custom vertex shader chunks to modify vertex position\nif( uv.y >= progress )\n{\n\t\ttransformed.z +=  (progress-uv.y) * offset;\n}\n#include <project_vertex>\n"),s.tx.injectFragmentShaderChunks(e)}}}var d=n("./node_modules/three/examples/jsm/libs/stats.module.js"),u=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),c=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),f=n("./node_modules/three/examples/jsm/controls/OrbitControls.js");const h=[];let p,m,x,g,w,v;const y=function(e){h.push(e)};function b(){for(let e=0;e<h.length;e++)h[e]();s.Vx(),g.update(),x.render(p,m),w.update()}function j(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)}let _,S,D;let M;const P={h:{yoffset:2},k:{yoffset:2},l:{yoffset:2},j:{yoffset:4.5},b:{yoffset:2},d:{yoffset:2}},C="Roboto",V=new o.Ilk(16750848);let k;let O=1;function T(){k.userData.progress.value+=1/60*O,k.userData.progress.value>=1&&(k.userData.progress.value=1,O*=-1),k.userData.progress.value<=0&&(k.userData.progress.value=0,O*=-1)}const{scene:F,camera:z,renderer:U,controls:W,stats:B}=function(){const e=window.innerWidth,t=window.innerHeight;return p=new o.xsS,p.background=new o.Ilk(5263440),m=new o.cPb(60,e/t,.1,100),x=new o.CP7({antialias:!0}),x.setPixelRatio(window.devicePixelRatio),x.setSize(e,t),x.xr.enabled=!0,document.body.appendChild(c.N.createButton(x)),document.body.appendChild(x.domElement),w=new d.Z,document.body.appendChild(w.dom),g=new f.z(m,x.domElement),m.position.set(0,1.6,1.5),g.target=new o.Pa4(0,1,-1.8),g.update(),v=new o.ejS(new u.d(6,6,6,32,32,32).translate(0,3,0),new o.nls({color:8421504})),p.add(v),window.addEventListener("resize",j),x.setAnimationLoop(b),{scene:p,camera:m,renderer:x,controls:g,stats:w,room:v}}(),{pointLightContainer:L,pointLight:Z,pointLightHelper:G}=function(e){return _=new o.Tme,_.rotation.z=.45,_.position.set(0,1.5,0),S=new o.cek(16777113,3),S.position.set(1.45,0,0),_.add(S),D=new o.xG9(S,.15,16711680),e.add(D),e.add(_),{pointLightContainer:_,pointLight:S,pointLightHelper:D}}(F);y((function(){_.rotation.y+=1/60}));!function(e,t=null){M=new o.Kj0(new o.DvJ(.5,.5,.5),t||new o.YBo({color:10092288})),M.position.set(0,1,-1.5),e.add(M)}(F);y((function(){M.rotation.y+=1/30,M.rotation.z+=1/30}));const E=(H=function(){const e=new s.ZP.Block({width:3.2,height:.2,justifyContent:"center",alignItems:"center",fontColor:V,fontFamily:E,fontWeight:"700",fontSize:.25,lineHeight:.9});e.position.set(0,1.25,-.8),e.rotation.x=-.55,F.add(e);const t=new s.ZP.Text({content:"FontMaterial(default)"}),n=new s.ZP.Text({content:"MSDFStandardMaterial"});n.fontMaterial=new r({});const d=new s.ZP.Text({content:"MSDFLambertMaterial"});d.fontMaterial=new a({});const u=new s.ZP.Text({content:"MSDFPhysicalMaterial",fontColor:new o.Ilk(16777215)});u.fontMaterial=new i({color:16777215,transmission:1,opacity:1,roughness:0,ior:2,thickness:.1,specularIntensity:1,envMapIntensity:1});const c=new s.ZP.Text({content:"WireframeProperty",segments:12});c.fontMaterial=new r({wireframe:!0});const f=new s.ZP.Text({content:"VertexShaderExample",segments:12});f.fontMaterial=new l,k=f.fontMaterial;const h=new s.ZP.Text({content:"Mixed class .from()",fontSize:.2}),p=s.ZP.MSDFFontMaterialUtils.from(o.Wid);h.fontMaterial=new p,h.fontMaterial.onBeforeCompile=e=>{},e.add(t,n,d,u,c,f,h),y(T)},s.zV.prepare(s.zV.addFontFamily(C).addVariant("400","normal","./assets/fonts/msdf/roboto/regular.json","./assets/fonts/msdf/roboto/regular.png").addVariant("700","italic","./assets/fonts/msdf/roboto/bold-italic.json","./assets/fonts/msdf/roboto/bold-italic.png").addVariant("700","normal","./assets/fonts/msdf/roboto/bold.json","./assets/fonts/msdf/roboto/bold.png").addVariant("400","italic","./assets/fonts/msdf/roboto/italic.json","./assets/fonts/msdf/roboto/italic.png")).then((()=>{const e=s.zV.getFontFamily(C);e.getVariant("700","normal").adjustTypographicGlyphs(P),e.getVariant("700","italic").adjustTypographicGlyphs(P),e.getVariant("400","italic").adjustTypographicGlyphs(P),e.getVariant("400","normal").adjustTypographicGlyphs(P),H()})),s.zV.getFontFamily(C));var H}},n={};function o(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,s,r)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,s,r]=e[u],a=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="ex__msdf_materials",(()=>{var e={ex__msdf_materials:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var s,r,[i,a,l]=n,d=0;if(i.some((t=>0!==e[t]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var u=l(o)}for(t&&t(n);d<i.length;d++)r=i[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=o.O(void 0,["chunk_three-mesh-ui","chunk_vendors"],(()=>o("./examples/ex__msdf_materials.js")));s=o.O(s)})();