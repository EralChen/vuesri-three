import{$ as m,j as c}from"./chunk-B96F-W3J.js";import{l as u,d as y,e as s,k as p}from"./chunk-JaFSy54E.js";import"./chunk-D_yTKJJf.js";import"./chunk-FKPdDv5g.js";const n="Stream Service",f="Feed",d="stream-layer-save",v="stream-layer-save-as";function i(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:o,fullExtent:a}=r;e.url=t.path,e.title||=o,e.extent=null,a!=null&&(e.extent=await u(a)),y(e,s.METADATA),p(e,s.SINGLE_LAYER)}async function E(r,e){return m({layer:r,itemType:n,additionalItemType:f,validateLayer:i,createItemData:l,errorNamePrefix:d},e)}async function L(r,e,t){return c({layer:r,itemType:n,validateLayer:i,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{E as save,L as saveAs};
