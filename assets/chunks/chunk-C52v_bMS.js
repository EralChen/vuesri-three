import{_ as v}from"./chunk--6mYOZ3I.js";import{g0 as d,U as p,g1 as u,bq as y,g2 as b,cv as c}from"./chunk-C4bXDfxA.js";import{s as t}from"./chunk-D_yTKJJf.js";let n=l();function l(){return new d(50)}function T(){n=l()}async function $(e,r){if(e.resource?.href)return w(e.resource.href).then(i=>[i.width,i.height]);if(e.resource?.primitive)return r!=null?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(e){return p(e,{responseType:"image"}).then(r=>r.data)}async function x(e,r=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const s=n.get(o);if(s!==void 0)return s;const{fetch:f}=await v(()=>import("./chunk-C4bXDfxA.js").then(h=>h.Bl),__vite__mapDeps([0,1,2])),m=await f(o,{disableTextures:!0}),a=u(m.referenceBoundingBox,c());return n.put(o,a),a}if(!e.resource?.primitive)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const i=y(b(e.resource.primitive));if(r!=null)for(let o=0;o<i.length;o++)i[o]*=r;return u(i,c())}export{T as clearBoundingBoxCache,$ as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-C4bXDfxA.js","assets/chunks/chunk-D_yTKJJf.js","assets/chunks/chunk--6mYOZ3I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}