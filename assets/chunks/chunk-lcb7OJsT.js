import{G as D,iZ as M,i_ as z,i$ as S,dU as v,j0 as y,dY as Y,cv as c,j1 as _,j2 as k,j3 as q}from"./chunk-C4bXDfxA.js";import{i as b}from"./chunk-BCM2kLJx.js";var u;function w(n){return A(n,u.Horizontal)}function A(n,r){const{hasZ:t,spatialReference:e}=n,a=b(e);let o=0;const s=S(a);if(s==null)return null;const p=r===u.Direct?U:H;for(const $ of n.paths){if($.length<2)continue;const G=$.length-1;for(let Z=0;Z<G;++Z){const d=$[Z];i[0]=d[0],i[1]=d[1],i[2]=t?d[2]:0;const g=$[Z+1];l[0]=g[0],l[1]=g[1],l[2]=t?g[2]:0;const V=p(i,l,e);if(V==null)return null;o+=V.value}}return z(o,s)}function J(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,U(i,l,t)):null}function B(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,H(i,l,t)):null}function K(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,E(i,l,t)):null}function L(n){return n!=null?C(n.hasZ?n.z:0,n.spatialReference):null}function C(n,r){const t=M(r);return t!=null?z(n??0,t):null}function U(n,r,t){const e=j(n,r,t,u.Direct);return e!=null?z(e.direct,e.unit):null}function H(n,r,t){const e=j(n,r,t,u.Horizontal);return e!=null?z(e.horizontal,e.unit):null}function E(n,r,t){const e=j(n,r,t,u.Vertical);return e!=null?z(e.verticalSigned,e.unit):null}function j(n,r,t,e){const a=b(t),o=S(a);if(o==null)return null;const s=r[2]-n[2];if(e===u.Vertical)return{verticalSigned:s,unit:o};if(!v(n,t,m,a)||!v(r,t,R,a))return null;if(e===u.Direct)return{direct:y(R,m),unit:o};if(Y(x,n[0],n[1],r[2]),!v(x,t,x,a))return null;const p=y(x,R);return e===u.Horizontal?{horizontal:p,unit:o}:{direct:y(R,m),horizontal:p,vertical:Math.abs(s),unit:o}}(function(n){n[n.Direct=0]="Direct",n[n.Horizontal=1]="Horizontal",n[n.Vertical=2]="Vertical"})(u||(u={}));const i=c(),l=c(),m=c(),R=c(),x=c();function N(n){return _(n)??w(n)}function O(n,r){return k(n,r)??B(n,r)}function P(n,r,t){return f[0]=n[0],f[1]=n[1],f[2]=n.length===3?n[2]:0,h[0]=r[0],h[1]=r[1],h[2]=r.length===3?r[2]:0,q(f,h,t)??H(f,h,t)}const f=c(),h=c();export{L as R,U as Z,J as a,N as c,E as g,O as m,P as u,C as v,K as y};