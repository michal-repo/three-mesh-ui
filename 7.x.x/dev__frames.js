(()=>{"use strict";var e,t={"./examples/dev__frames.js":(e,t,o)=>{var r=o("./node_modules/three/build/three.module.js"),n=o("./node_modules/three/examples/jsm/webxr/VRButton.js"),a=o("./node_modules/three/examples/jsm/controls/OrbitControls.js"),s=o("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),i=o("./src/three-mesh-ui.js"),d=o("./node_modules/three/examples/jsm/libs/stats.module.js"),l=o("./src/frame/materials/FrameDepthMaterial.js"),c=o("./src/frame/utils/FrameMaterialUtils.js");class h extends r.EJi{static get mediation(){return c.Z.mediation}constructor(e={}){c.Z.ensureMaterialOptions(e),super(e),c.Z.ensureDefines(this),c.Z.ensureUserData(this,e),this.onBeforeCompile=e=>{c.Z.bindUniformsWithUserData(e,this),c.Z.injectShaderChunks(e)}}}class u extends r.vBJ{static get mediation(){return c.Z.mediation}constructor(e={}){c.Z.ensureMaterialOptions(e),super(e),c.Z.ensureDefines(this),c.Z.ensureUserData(this,e),this.onBeforeCompile=e=>{c.Z.bindUniformsWithUserData(e,this),c.Z.injectShaderChunks(e)}}}class m extends r.RSm{static get mediation(){return i.tx.mediation}constructor(e={}){i.tx.ensureMaterialOptions(e),super(e),i.tx.ensureDefines(this),i.tx.ensureUserData(this,e),this.onBeforeCompile=e=>{i.tx.bindUniformsWithUserData(e,this),i.tx.injectVertexShaderChunks(e),e.fragmentShader=e.fragmentShader.replace("#include <normalmap_pars_fragment>",`#include <normalmap_pars_fragment>\nvec4 diffuseColor;\nuniform float alphaTest;\n\n${i.sV.msdfAlphaglyphParsFragmentGlsl}`),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>\ndiffuseColor = vec4( packNormalToRGB( normal ), opacity );\n${i.sV.msdfAlphaglyphFragmentGlsl}`),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4( packNormalToRGB( normal ), opacity );","if( diffuseColor.a < alphaTest ) discard;\n                gl_FragColor = diffuseColor;")}}}const f={h:{yoffset:2},k:{yoffset:2},l:{yoffset:2},j:{yoffset:4.5},b:{yoffset:2},d:{yoffset:2}},p=window.innerWidth,b=window.innerHeight;let g,w,y,j,k,x,M,v,C,R,_,S;function D(){return new i.ZP.Block({flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundOpacity:.25})}function B(e,t=!0){const o=new i.ZP.Block({width:.5,height:.5,margin:.05,justifyContent:"center",textAlign:"center",boxSizing:"border-box",visible:t,backgroundColor:0,backgroundOpacity:.5});return o.backgroundSide=r.ehD,o.backgroundCastShadow=!0,o.backgroundCustomDepthMaterial=new l.Z,o.add(new i.ZP.Text({textContent:e,backgroundColor:"yellow"})),o}function O(){k.set({borderRadius:.2*Math.sin(Date.now()/500),borderWidth:.08-.06*Math.sin(Date.now()/500),borderColor:new r.Ilk(.5+.5*Math.sin(Date.now()/500),.5,1),borderOpacity:1}),R.set({borderWidth:Math.abs(.15*Math.sin(Date.now()/500))}),C.set({borderRadius:[Math.abs(.5*Math.sin(Date.now()/500)),0,0,0]});const e=.15+Math.abs(.35*Math.sin(Date.now()/500));x.set({width:e,height:e}),M.update(),i.ZP.update(),j.update(),y.render(g,w),v.update()}i.zV.prepare(i.zV.addFontFamily("Roboto").addVariant("400","normal","./assets/fonts/msdf/roboto/regular.json","./assets/fonts/msdf/roboto/regular.png").addVariant("700","italic","./assets/fonts/msdf/roboto/bold-italic.json","./assets/fonts/msdf/roboto/bold-italic.png").addVariant("700","normal","./assets/fonts/msdf/roboto/bold.json","./assets/fonts/msdf/roboto/bold.png").addVariant("400","italic","./assets/fonts/msdf/roboto/italic.json","./assets/fonts/msdf/roboto/italic.png")).then((()=>{const e=i.zV.getFontFamily("Roboto");e.getVariant("400","normal").adjustTypographicGlyphs({h:{yoffset:2}}),e.getVariant("700","normal").fontMaterial=m,e.getVariant("700","normal").adjustTypographicGlyphs(f),e.getVariant("700","italic").adjustTypographicGlyphs(f),e.getVariant("400","italic").adjustTypographicGlyphs(f),function(){g=new r.xsS,g.background=new r.Ilk(5263440),w=new r.cPb(60,p/b,.1,100),y=new r.CP7({antialias:!0}),y.setPixelRatio(window.devicePixelRatio),y.setSize(p,b),y.shadowMap.enabled=!0,y.shadowMap.type=r.ntZ,y.xr.enabled=!0,document.body.appendChild(n.N.createButton(y)),document.body.appendChild(y.domElement),v=new d.Z,document.body.appendChild(v.dom),j=new a.z(w,y.domElement),w.position.set(0,1.6,.5),j.target=new r.Pa4(0,1,-1.8),j.update();const e=new r.ejS(new s.d(6,6,6,10,10,10).translate(0,3,0),new r.nls({color:8421504}));e.position.z=-1.5,g.add(e);const t=new r.Kj0(new r.BKK(6,6,5,5),new r.Wid({color:16777215}));t.rotation.x=-Math.PI/2,t.position.z=-1.5,t.position.y=-.01,t.receiveShadow=!0,g.add(t);const o=new r.PMe(16777215,1,8,Math.PI/6,1,1);window.light=o,o.position.set(0,5,.75),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=.5,o.shadow.camera.far=500,g.add(o),g.add(o.target),M=new r.FvO(o,16711680),g.add(M),o.target.position.set(0,.75,-2);const l=new r.cek(16777215,1,8,1);l.position.set(0,2,-2),g.add(l);const c=function(){const e=new i.ZP.Block({width:3.25,height:3,fontSize:.045,flexDirection:"column",alignItems:"center",textAlign:"center",justifyContent:"space-evenly",fontFamily:"Roboto"});return e.position.set(0,1,-1.8),e.rotation.x=-.55,e.backgroundCastShadow=!0,g.add(e),e}();window.rootBlock=c;const m=D();c.add(m),C=B("borderTopLeft"),C.set({borderRadius:"0.1 0 0 0",borderWidth:.05,borderColor:new r.Ilk(16711680)});const f=B("TopMiddleLeft?");f.set({borderRadius:"0.05 0.25",borderLeftWidth:.1});const Z=B("borderTop");Z.set({borderRadius:"0.05 0.05 0 0"}),R=B("TopMiddleRight?"),R.set({borderRadius:[.25,.05],borderColor:new r.Ilk(16750848),borderWidth:.02}),_=B("BorderTopRight"),_.set({borderRadius:.2,borderWidth:.05,borderColor:new r.Ilk(10092441)}),m.add(C,f,Z,R,_);const P=D();c.add(P);const T=B("borderMiddleLeft");T.set({borderRadius:"0.05 0 0 0.05"});const V=B("MiddleMiddleLeft?");V.set({height:.2,borderRadius:"0.05 1 0.05 0"});const W=B("borderMiddle");k=W;const I=B("MiddleMiddleRight?");I.set({borderRadius:"0 0.5 0.5 0",borderWidth:"0 0 0 0.05",borderColor:new r.Ilk(10092288)});const z=B("BorderMiddleRight");z.set({borderRadius:"0 0.3 0.3 0"}),P.add(T,V,W,I,z);const F=D();c.add(F);const L=B("borderBottomLeft");L.set({flexDirection:"row"}),L.set({borderRadius:"0 0 0 0.1"});const U=B("BottomMiddleLeft?");U.set({borderRadius:"0.2 0.1",backgroundColor:16777215,backgroundOpacity:1}),U.backgroundMaterial=new h({side:r.ehD,transmission:1,opacity:1,metalness:0,roughness:0,ior:2,thickness:.1,specularIntensity:1,envMapIntensity:1}),S=B("borderBottom"),S.set({borderRadius:"0 0 0.1 0.1"});const G=B("BottomMiddleRight?");G.set({borderRadius:.5,borderWidth:"0 0 0.05 0",borderColor:new r.Ilk(16750848)}),G.backgroundMaterial=new u({side:r.ehD}),x=G;const A=B("BorderBottomRight");A.set({borderWidth:"0.1 0.2 0.1 0.05",borderRadius:.5,borderColor:new r.Ilk(10092543)}),F.add(L,U,S,G,A),y.setAnimationLoop(O)}()})),window.addEventListener("resize",(function(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)}))}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var s=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],i=!0,d=0;d<o.length;d++)(!1&a||s>=a)&&Object.keys(r.O).every((e=>r.O[e](o[d])))?o.splice(d--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j="dev__frames",(()=>{var e={dev__frames:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[s,i,d]=o,l=0;if(s.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(d)var c=d(r)}for(t&&t(o);l<s.length;l++)a=s[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,["chunk_three-mesh-ui","chunk_vendors"],(()=>r("./examples/dev__frames.js")));n=r.O(n)})();