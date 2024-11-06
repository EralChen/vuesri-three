import{lr as P,ls as j,lt as z,lu as L,lv as D,U as N,lw as U,lx as G,Y as w,ly as K,lz as V,lA as J,lB as Q,lC as B,lD as Y,lE as A,lF as q,lG as H,lH as W,lI as X,lJ as h,lK as Z,lL as k,lM as _,lN as C,lO as O,lP as ee,lQ as te,lR as S,lS as I,lT as E,lU as ne,lV as re,dJ as v,d5 as oe,ch as le,lW as se,lX as ae,lY as ue,bB as ce,dK as M,lZ as ie}from"./chunk-C4bXDfxA.js";import{A as F}from"./chunk-D_yTKJJf.js";import"./chunk--6mYOZ3I.js";function fe(e,t,n){const c=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=n?n.count:t.count;let l=(n?.dstIndex??0)*o,m=(n?.srcIndex??0)*i;for(let u=0;u<a;++u){for(let r=0;r<9;++r)c[l+r]=s[m+r];l+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function me(e,t,n){const c=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=n?n.count:t.count;let l=(n?.dstIndex??0)*o,m=(n?.srcIndex??0)*i;for(let u=0;u<a;++u){for(let r=0;r<16;++r)c[l+r]=s[m+r];l+=o,m+=i}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function y(e,t){return new e(new ArrayBuffer(t*e.ElementCount*P(e.ElementType)))}async function Se(e,t,n){const c=new j(pe(n)),o=(await z(c,t,n,!0)).model,s=o.lods.shift(),i=new Map,a=new Map;o.textures.forEach(($,b)=>i.set(b,ge($))),o.materials.forEach(($,b)=>a.set(b,$e($,i)));const l=xe(s);for(const $ of l.parts)ye(l,$,a);const{position:m,normal:u,tangent:r,color:f,texCoord0:p}=l.vertexAttributes,x={position:m.typedBuffer,normal:u!=null?u.typedBuffer:null,tangent:r!=null?r.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:f!=null?f.typedBuffer:null},g=L(x,e,n);return{transform:g.transform,vertexSpace:g.vertexSpace,components:l.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function pe(e){const t=e?.resolveFile;return t?{busy:!1,request:async(n,c,o)=>{const s=t?.(n)??n;return(await N(s,{responseType:c==="image"?"image":c==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function T(e,t){if(e==null)return"-";const n=e.typedBuffer;return`${F(t,n.buffer,()=>t.size)}/${n.byteOffset}/${n.byteLength}`}function de(e){return e!=null?e.toString():"-"}function xe(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},c=new Map,o=new Map,s=[];for(const i of e.parts){const{attributes:{position:a,normal:l,color:m,tangent:u,texCoord0:r}}=i,f=`
      ${T(a,c)}/
      ${T(l,c)}/
      ${T(m,c)}/
      ${T(u,c)}/
      ${T(r,c)}/
      ${de(i.transform)}
    `;let p=!1;const x=F(o,f,()=>(p=!0,{start:t,length:a.count}));p&&(t+=a.count),l&&(n.normal=!0),m&&(n.color=!0),u&&(n.tangent=!0),r&&(n.texCoord0=!0),s.push({gltf:i,writeVertices:p,region:x})}return{vertexAttributes:{position:y(se,t),normal:n.normal?y(I,t):null,tangent:n.tangent?y(_,t):null,color:n.color?y(O,t):null,texCoord0:n.texCoord0?y(ae,t):null},parts:s,components:[]}}function ge(e){return new U({data:(G(e.data),e.data),wrap:he(e.parameters.wrap)})}function $e(e,t){const n=new w(ve(e.color,e.opacity)),c=e.emissiveFactor?new w(we(e.emissiveFactor)):null,o=s=>s?new ue({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:ce(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new K({color:n,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:c,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function ye(e,t,n){t.writeVertices&&Te(e,t);const{indices:c,attributes:o,primitiveType:s,material:i}=t.gltf;let a=V(c||o.position.count,s);const l=t.region.start;if(l){const m=new Uint32Array(a);for(let u=0;u<a.length;u++)m[u]+=l;a=m}e.components.push(new J({name:t.gltf.name,faces:a,material:n.get(i),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function Te(e,t){const{position:n,normal:c,tangent:o,color:s,texCoord0:i}=e.vertexAttributes,a=t.region.start,{attributes:l,transform:m}=t.gltf,u=l.position.count;if(Q(n.slice(a,u),l.position,m),l.normal!=null&&c!=null){const r=B(M(),m),f=c.slice(a,u);Y(f,l.normal,r),A(r)&&q(f,f)}else c!=null&&H(c,0,0,1,{dstIndex:a,count:u});if(l.tangent!=null&&o!=null){const r=B(M(),m),f=o.slice(a,u);W(f,l.tangent,r),A(r)&&X(f,f)}else o!=null&&h(o,0,0,1,1,{dstIndex:a,count:u});if(l.texCoord0!=null&&i!=null?Z(i.slice(a,u),l.texCoord0):i!=null&&k(i,0,0,{dstIndex:a,count:u}),l.color!=null&&s!=null){const r=l.color,f=s.slice(a,u);if(r.elementCount===4)r instanceof _?C(f,r,255):r instanceof O?ee(f,r):r instanceof te&&C(f,r,1/256);else{h(f,255,255,255,255);const p=S.fromTypedArray(f.typedBuffer,f.typedBufferStride);r instanceof I?E(p,r,255):r instanceof S?ne(p,r):r instanceof re&&E(p,r,1/256)}}else s!=null&&h(s.slice(a,u),255,255,255,255)}function be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function he(e){return{horizontal:R(e.s),vertical:R(e.t)}}function R(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp";case v.MIRRORED_REPEAT:return"mirror";case v.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function ve(e,t){return oe(d(e[0]),d(e[1]),d(e[2]),t)}function we(e){return le(d(e[0]),d(e[1]),d(e[2]))}export{Se as loadGLTFMesh};