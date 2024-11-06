import{d5 as j,rt as De,iN as Q,yZ as Je,y_ as Qe,dD as K,z0 as we,Ac as Ae,z4 as Ke,za as et,zc as tt,zd as st,zP as rt,ze as nt,Ad as it,jU as X,l7 as at,zk as ot,zC as ct,zp as dt,l5 as lt,z5 as ut,AI as gt,zv as ht,zt as pt,Ae as ft,mx as $,mE as Ie,ir as mt,ru as ne,n6 as _t,kP as d,cl as R,ne as ke,iF as M,dY as ee,cj as m,kQ as p,xf as fe,nP as z,mH as We,nR as G,AJ as je,nh as H,dW as C,dX as S,ci as w,nN as bt,xI as $t,AK as le,AL as Tt,AM as Ot,jP as wt,xk as Ge,eg as At,b3 as It,mr as Ct,lc as ze,bB as Et,nH as Pt,AN as vt,nG as Fe,AO as ue,tX as Ce,nL as Rt,pX as Mt,mw as W,a9 as me,P as _e,Y as E,mG as U,t$ as b,ch as v,ny as St,r9 as Be,dC as Lt,dE as Ee,mF as Y,m4 as q,cv as te,u2 as Pe,mf as ve,gD as ce,gC as Re,AP as Me,AQ as Se,xi as Le,xC as Nt}from"./chunk-JaFSy54E.js";import{w as Ut,e as be,c as xt,a as _,h as Xe}from"./chunk-C4iGwqag.js";import{T as yt}from"./chunk-By_2SmYK.js";import{i as Ht,c as Vt}from"./chunk-D_yTKJJf.js";import{a as Dt,f as kt,r as Wt}from"./chunk-CSSAm_KD.js";import{_ as jt}from"./chunk-FKPdDv5g.js";const Gt=j(0,0,0,.04);function zt({accentColor:e}){return De(e,.5)}function Ft({accentColor:e}){return De(e,.7)}const Ps=Ht("mac")?"Meta":"Control",vs="Shift",Bt=2,Xt=1.15,Yt=1.15,Rs=2500,Ms=.02,qt=Math.cos(Q(45)),Ne=Math.cos(Q(5)),Ss=.95,Ls=.3,Ns=2,Zt=1,Jt=3,Ye=11,ge=22.5,J=40,Ue=48,Qt=2.25,Kt=4,xe=1,es=.3,ts=6,ss=4,ye=1600,rs=.4;function qe(e){const t=new Je,{vertex:a,fragment:r,attributes:n,varyings:i}=t;return Qe(a,e),n.add(K.POSITION,"vec3"),n.add(K.UV0,"vec2"),i.add("vUV","vec2"),a.code.add(we`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`),r.uniforms.add(new Ae("backgroundColor",s=>s.backgroundColor),new Ae("gridColor",s=>s.gridColor),new Ke("gridWidth",s=>s.gridWidth)),r.code.add(we`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`),t}const ns=Object.freeze(Object.defineProperty({__proto__:null,build:qe},Symbol.toStringTag,{value:"Module"}));class is extends ct{constructor(){super(...arguments),this.backgroundColor=j(1,0,0,.5),this.gridColor=j(0,1,0,.5),this.gridWidth=4}}class ie extends tt{initializeProgram(t){return new st(t.rctx,ie.shader.get().build(this.configuration),rt)}initializePipeline(){return nt({blending:it(X.ONE,X.ONE,X.ONE_MINUS_SRC_ALPHA,X.ONE_MINUS_SRC_ALPHA),depthTest:{func:at.LESS},colorWrite:ot})}}ie.shader=new et(ns,()=>jt(()=>Promise.resolve().then(()=>Ts),void 0));let as=class extends dt{constructor(t){super(t,new cs),this.produces=new Map([[lt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>a===ut.Color]]),this._configuration=new gt}createBufferWriter(){return new ht(pt)}createGLMaterial(t){return new os(t)}getConfiguration(){return this._configuration}};class os extends ft{constructor(t){super(t),this.ensureTechnique(ie,null)}beginSlot(){return this.technique}}class cs extends is{constructor(){super(...arguments),this.renderOccluded=$.Occlude,this.isDecoration=!1}}class ds extends Dt{constructor(t){super(t),this._material=null,this._renderOccluded=$.OccludeAndTransparent,this._gridWidth=1,this._gridColor=j(1,0,0,1),this._backgroundColor=j(1,0,0,1),this.applyProperties(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(t){this._gridWidth!==t&&(this._gridWidth=t,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(t){Ie(this._gridColor,t),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){Ie(this._backgroundColor,t),this._updateMaterial()}createExternalResources(){this._material=new as(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(t){this._material!=null&&t(this._material)}createGeometries(t){if(this._material!=null){const a=mt(this._material);t.addGeometry(a)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this._material!=null&&this._material.setParameters(this._materialParameters)}}function xs(e,t,a,r,n,i,s,o){return ls(t,s.worldUpAtPosition(e,d.get()),n,i,o.basis1,o.basis2),p(o.basis1,o.basis1,a),p(o.basis2,o.basis2,r),R(o.origin,e),je(o.basis2,o.basis1,o.origin,o.plane),o}function ls(e,t,a,r,n,i){const s=H(e,t),o=d.get(),l=d.get();switch(r===P.HORIZONTAL_OR_VERTICAL?Math.abs(s)>qt?P.HORIZONTAL:P.VERTICAL:r){case P.VERTICAL:{const c=Math.abs(s)<=Ne?e:a.viewUp;C(o,c,t),R(l,t);break}case P.HORIZONTAL:C(o,a.viewUp,t),C(l,t,o);break;case P.TILTED:{const c=Math.abs(s)<=Ne?t:a.viewUp;C(o,c,e),C(l,e,o);break}}const u=C(d.get(),o,l);H(u,a.viewForward)>0&&p(l,l,-1),S(n,o),S(i,l)}function us(e,t,a){const r=t.worldUpAtPosition(e.origin,d.get()),n=e.basis1,i=Oe(e,r),s=Math.round(i/V)*V;return ue(e,s-i,n,a)}function ys(e,t,a,r,n,i){const s=R(d.get(),n.origin);m(s,s,p(d.get(),n.basis1,e.direction[0]<0?1:-1)),m(s,s,p(d.get(),n.basis2,e.direction[1]<0?1:-1));const o=M(n.basis1),l=M(n.basis2),u=w(d.get(),a,s),c=w(d.get(),t,s);let g=0,h=0;if(Te(e)){const ae=he(n),D=he(i);g=o-.5*e.direction[0]*H(n.basis1,c)/o,h=l-.5*e.direction[1]*H(n.basis2,c)/l;const F=D/ae;g*=F,h*=F}const f=g+.5*e.direction[0]*H(n.basis1,u)/o,O=h+.5*e.direction[1]*H(n.basis2,u)/l,x=p(d.get(),n.basis1,f/o),L=p(d.get(),n.basis2,O/l);(f<=0||He(i.origin,x,r)<=ye)&&R(x,i.basis1),(O<=0||He(i.origin,L,r)<=ye)&&R(L,i.basis2);const T=R(d.get(),s);return m(T,T,p(d.get(),x,e.direction[0]<0?-1:1)),m(T,T,p(d.get(),L,e.direction[1]<0?-1:1)),bt(T,x,L,i)}function Hs(e,t){return rs*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function Vs(e,t,a,r){const n=C(d.get(),t,a);return C(n,n,t),ke(e,n,r)}function Ds(e,t){return Ut(e.basis1,e.basis2,e.origin,t)}function ks(e,t,a,r){const n=t.worldUpAtPosition(e.origin,d.get()),i=d.get();switch(a){case se.HEADING:R(i,n);break;case se.TILT:R(i,e.basis1)}return ke(e.origin,i,r)}function Ws(e,t,a,r){const n=$e(a,A.NEGATIVE_X),i=z.get();$t(i,t,n.edge*Math.PI/2);const s=S(d.get(),n.basis);let o=p(d.get(),s,n.direction*r.computeScreenPixelSizeAt(n.position)*J);m(o,o,n.position);const l=r.projectToRenderScreen(o,le(d.get())),u=gs(r,l);Tt(r,l,Z),S(Z.direction,Z.direction);const c=d.get();!u&&Ot(a,Z,c)&&(o=c),i[12]=0,i[13]=0,i[14]=0,e.modelTransform=i,e.renderLocation=wt(o),u?e.state|=re:e.state&=~re}function gs(e,t){const[a,r,n,i]=e.viewport,s=Math.min(n,i)/16;let o=!0;return t[0]<a+s?(t[0]=a+s,o=!1):t[0]>a+n-s&&(t[0]=a+n-s,o=!1),t[1]<r+s?(t[1]=r+s,o=!1):t[1]>r+i-s&&(t[1]=r+i-s,o=!1),o}function js(e,t,a,r){const n=M(r.basis1),i=M(r.basis2),s=Ze(r),o=he(r),l=ee(d.get(),0,0,0);m(l,p(d.get(),r.basis1,t.direction[0]),p(d.get(),r.basis2,t.direction[1])),m(l,r.origin,l);let u=0,c=1;if(Te(t))t.direction[0]===1&&t.direction[1]===-1?u=V:t.direction[0]===1&&t.direction[1]===1?u=Math.PI:t.direction[0]===-1&&t.direction[1]===1&&(u=3*Math.PI/2),c=o;else{const h=t.direction[0]!==0?1:2;u=h===1?V:0,c=(h===1?i:n)-s}const g=fe(z.get(),u);We(g,g,ee(d.get(),c,c,c)),G(g,a,g),g[12]=0,g[13]=0,g[14]=0,e.modelTransform=g,e.renderLocation=l}function Gs(e,t,a,r){const n=r.worldUpAtPosition(a.origin,d.get()),i=$e(a,A.POSITIVE_X),s=fe(z.get(),i.edge*Math.PI/2);Ge(s,s,-Oe(a,n)),G(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=i.position}function zs(e,t,a){const r=$e(a,A.POSITIVE_Y),n=fe(z.get(),r.edge*Math.PI/2);Ge(n,n,V),G(n,t,n),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=r.position}var A;function $e(e,t){switch(t){case A.POSITIVE_X:return{basis:e.basis1,direction:1,position:m(d.get(),e.origin,e.basis1),edge:t};case A.POSITIVE_Y:return{basis:e.basis2,direction:1,position:m(d.get(),e.origin,e.basis2),edge:t};case A.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:w(d.get(),e.origin,e.basis1),edge:t};case A.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:w(d.get(),e.origin,e.basis2),edge:t}}}function He(e,t,a){const r=a.projectToRenderScreen(m(d.get(),e,t),le(d.get())),n=a.projectToRenderScreen(w(d.get(),e,t),le(d.get()));return At(w(r,r,n))}function Ze(e){const t=M(e.basis1),a=M(e.basis2);return es*Math.min(t,a)}function he(e){return Ze(e)}function Te(e){return e.direction[0]!==0&&e.direction[1]!==0}function Fs(e){const t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]];return new kt({view:e,attached:!1,color:Ft(e.effectiveTheme),width:Zt,renderOccluded:$.OccludeAndTransparent,geometry:[t],isDecoration:!0})}function Bs(e){return new ds({view:e,attached:!1,backgroundColor:Gt,gridColor:zt(e.effectiveTheme),gridWidth:4,renderOccluded:$.OccludeAndTransparent,isDecoration:!0})}function Xs(e,t,a,r=new Pt){if(e==null)return null;const{renderCoordsHelper:n}=t,i=n.fromRenderCoords(e.origin,new It({spatialReference:t.spatialReference}));if(i==null)return null;const s=Ct(i,a);if(s==null)return null;r.position=s;const o=2*M(e.basis1),l=2*M(e.basis2),u=ze.renderUnitScaleFactor(t.spatialReference,a);r.width=o*u,r.height=l*u;const c=n.worldUpAtPosition(e.origin,d.get());return r.tilt=Et(Oe(e,c)),r.heading=n.headingAtPosition(e.origin,e.basis1)-90,r}function Oe(e,t){return vt(t,e.basis2,e.basis1)+V}function hs(e,t,a,r,n,i,s=Fe()){return i.toRenderCoords(e,s.origin)?(i.worldBasisAtPosition(s.origin,Ce.X,s.basis1),i.worldBasisAtPosition(s.origin,Ce.Y,s.basis2),je(s.basis2,s.basis1,s.origin,s.plane),ue(s,-Q(t),Rt(s),s),ue(s,Q(a),s.basis1,s),p(s.basis1,s.basis1,r/2),p(s.basis2,s.basis2,n/2),Mt(s),s):(Vt.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${e.spatialReference.wkid} is not supported`),null)}function Ys(e,t){if(e?.position==null)return null;const a=Wt(e.position,t.spatialReference,t.elevationProvider);if(a==null)return null;const r=ze.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),n=e.width*r,i=e.height*r;return{position:a,heading:e.heading,tilt:e.tilt,renderWidth:n,renderHeight:i}}function qs(e,t,a,r=Fe()){if(e==null)return null;const n=hs(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return a.tiltEnabled||n==null||us(n,t.renderCoordsHelper,n),n}(function(e){e[e.POSITIVE_X=0]="POSITIVE_X",e[e.POSITIVE_Y=1]="POSITIVE_Y",e[e.NEGATIVE_X=2]="NEGATIVE_X",e[e.NEGATIVE_Y=3]="NEGATIVE_Y"})(A||(A={}));const I=ne.Custom1;var se,P;(function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"})(se||(se={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(P||(P={}));const re=ne.Custom2,Z=_t(),V=Math.PI/2,de=ne.Custom1,ps=ne.Custom2;function Zs(e){return(e.type==="building-scene-3d"?e:null)!=null}class Js extends be{constructor(t,a){const r=Te(a),n=r?Kt:xe,i=n*Bt,s=xe,o={renderOccluded:$.OccludeAndTransparent,isDecoration:!0},l=new W({...o,width:n}),u=new W({...o,width:i}),c=new W({...o,width:s});super({view:t,...xt,...fs({isCorner:r,unfocusedMaterial:l,focusedMaterial:u,outlineMaterial:c})}),this._themeHandle=me(()=>t.effectiveTheme.accentColor,g=>{const h=E.toUnitRGBA(g);l.setParameters({color:h}),u.setParameters({color:h}),c.setParameters({color:h})},_e)}destroy(){this._themeHandle.remove(),super.destroy()}}function fs({isCorner:e,unfocusedMaterial:t,focusedMaterial:a,outlineMaterial:r}){const n=e?[v(1,0,0),v(0,0,0),v(0,1,0)]:[v(1,0,0),v(-1,0,0)];return{renderObjects:[new _(U(t,n),b.Unfocused|de),new _(U(a,n),b.Focused|de),new _(U(r,n),ps)],collisionType:{type:"line",paths:[n]},radius:e?ts:ss,state:de}}class Qs extends be{constructor(t,a){const r=new yt({transparent:!0,writeDepth:!1,renderOccluded:$.Opaque,isDecoration:!0}),n=Xe.calloutWidth,i=new W({width:n,renderOccluded:$.OccludeAndTransparent,isDecoration:!0});super({view:t,...ms({imageMaterial:r,calloutMaterial:i})}),this._currentTexture=null,this._themeHandle=me(()=>t.effectiveTheme.accentColor,s=>{const o=St(s,.5),l=Be(s),u=this._currentTexture,c=a(o,l);r.setParameters({textureId:c.texture.id}),i.setParameters({color:E.toUnitRGBA(s)}),this._currentTexture=c,u?.release()},_e)}destroy(){this._themeHandle.remove(),this._currentTexture?.release(),super.destroy()}}function ms({imageMaterial:e,calloutMaterial:t}){const{focusMultiplier:a,calloutLength:r,discRadius:n}=Xe,i=n*a,s=(c,g)=>{const h=[0,1,2,2,3,0];return new Lt(g,[[K.POSITION,new Ee([r-c,-c,0,r+c,-c,0,r+c,c,0,r-c,c,0],h,3,!0)],[K.UV0,new Ee([0,0,1,0,1,1,0,1],h,2,!0)]])},o=U(t,[[0,0,0],[r-n,0,0]]),l=U(t,[[0,0,0],[r-i,0,0]]),u=I;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[r,0,0]},focusMultiplier:a,radius:n,renderObjects:[new _(s(n,e),b.Unfocused|u),new _(o,b.Unfocused|u),new _(s(i,e),b.Focused|u),new _(l,b.Focused|u)],state:u}}var pe;(function(e){e[e.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",e[e.CENTER_ON_ARROW=1]="CENTER_ON_ARROW"})(pe||(pe={}));class Ks extends be{constructor(t,a){const r=new W({width:1,renderOccluded:$.OccludeAndTransparent,isDecoration:!0}),n=new Y({cullFace:q.Back,renderOccluded:$.Opaque,isDecoration:!0}),i=new Y({cullFace:q.Back,renderOccluded:$.Opaque,isDecoration:!0}),s=new Y({cullFace:q.Back,renderOccluded:$.Opaque,isDecoration:!0}),o=new Y({writeDepth:!1,cullFace:q.Front,renderOccluded:$.Transparent,isDecoration:!0});super({view:t,..._s({offsetMode:a,tubeMaterial:n,tipMaterial:i,capMaterial:s,outlineMaterial:o,calloutMaterial:r})}),this._themeHandle=me(()=>t.effectiveTheme.accentColor,l=>{const u=Be(l),c=E.toUnitRGBA(l),g=E.toUnitRGBA(u),h=E.toUnitRGBA(E.blendColors(u,l,.4)),f=E.toUnitRGBA(E.blendColors(u,l,.14));r.setParameters({color:c}),n.setParameters({color:f}),i.setParameters({color:g}),s.setParameters({color:h}),o.setParameters({color:c})},_e)}destroy(){this._themeHandle.remove(),super.destroy()}}function _s({offsetMode:e,tubeMaterial:t,tipMaterial:a,capMaterial:r,outlineMaterial:n,calloutMaterial:i}){const s=e===pe.CENTER_ON_CALLOUT?J:0,o=[v(s,0,-Ue/2),v(s,0,Ue/2)],l=$s(o,!0),u=Ve({vertices:o,padding:0,materials:{tube:t,tip:a,cap:r}}),c=Ve({vertices:o,padding:Qt,materials:{tube:n,tip:n,cap:n}}),g=U(i,[[s,0,0],[s-J,0,0]]),h=U(i,[[s,0,0],[s-J,0,0]]);return{renderObjects:[...u.normal.map(f=>new _(f,b.Unfocused|I)),...c.normal.map(f=>new _(f,b.Unfocused|I)),new _(g,b.Unfocused|I|re),...u.focused.map(f=>new _(f,b.Focused|I)),...c.focused.map(f=>new _(f,b.Focused|I)),new _(h,b.Focused|I|re)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[l]},collisionPriority:1,radius:Ye,state:I}}function Ve({vertices:e,padding:t,materials:a}){const r=n=>{const i=e.slice(0),s=w(d.get(),i[0],i[1]);S(s,s);const o=w(d.get(),i[i.length-1],i[i.length-2]);if(S(o,o),t>0){const k=p(te(),o,-t);i[i.length-1]=m(k,k,i[i.length-1]);const y=p(te(),s,-t);i[0]=m(y,y,i[0])}const l=n?Yt:1,u=ge*l,c=Ye*l,g=Pe(z.get());if(t>0){const k=u/4,y=ee(d.get(),0,k,0),B=1+t/k;ve(g,g,y),We(g,g,ee(d.get(),B,B,B)),ve(g,g,p(y,y,-1/B))}const h=Pe(ce()),f=v(0,1,0),O=Re(ce(),Me(Se.get(),f,o));O[12]=i[i.length-1][0],O[13]=i[i.length-1][1],O[14]=i[i.length-1][2],G(O,O,g);const x=a.tube,L=bs(Jt*(n?Xt:1)+t,i,x);L.transformation=h;const T=[L],ae=a.tip,D=Le(ae,u,c,24,!1,!1,!0);D.transformation=O,T.push(D);const F=a.cap,oe=Le(F,u,c,24,!1,!0,!1);oe.transformation=O,T.push(oe);const N=Re(ce(),Me(Se.get(),f,s));return N[12]=i[0][0],N[13]=i[0][1],N[14]=i[0][2],G(N,N,g),T.push(D.instantiate({transformation:N})),T.push(oe.instantiate({transformation:N})),T};return{normal:r(!1),focused:r(!0)}}function bs(e,t,a){const r=[];for(let i=0;i<12;i++){const s=i/12*2*Math.PI;r.push([Math.cos(s)*e,Math.sin(s)*e])}return Nt(a,r,t,[],[],!1)}function $s(e,t){const a=w(te(),e[e.length-1],e[e.length-2]);if(S(a,a),p(a,a,ge),m(a,a,e[e.length-1]),t){const r=w(te(),e[0],e[1]);return S(r,r),p(r,r,ge),m(r,r,e[0]),[r,...e,a]}return[...e,a]}const Ts=Object.freeze(Object.defineProperty({__proto__:null,build:qe},Symbol.toStringTag,{value:"Module"}));export{Fs as A,de as B,I as C,Te as E,pe as H,Ks as I,Ys as L,Ns as M,Xs as R,re as S,ps as U,qs as V,se as _,ys as a,P as b,Ds as c,Gs as d,xs as e,zs as f,Qs as g,js as h,Ft as i,Bs as j,Gt as k,ks as l,Rs as m,Vs as n,Ss as o,Ls as p,Ms as q,vs as r,Hs as s,Ps as t,Ws as u,Js as v,zt as w,Zs as x,Zt as y,he as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
