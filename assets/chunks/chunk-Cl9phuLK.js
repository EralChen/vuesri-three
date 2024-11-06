import{_ as b}from"./chunk-FKPdDv5g.js";import{s as d}from"./chunk-D_yTKJJf.js";import{c as I,E as h,F as L,I as O,J as g,b as P,K as v}from"./chunk-JaFSy54E.js";import{t as T}from"./chunk-ClvbTHBF.js";import{t as f}from"./chunk-gz6cE7eB.js";const F={FeatureLayer:!0,SceneLayer:!0};async function R(r){const s=r.properties?.customParameters,e=await $(r.url,s),t={...r.properties,url:r.url};if(e.layers.length+e.tables.length===0)return e.layerId!=null&&(t.layerId=e.layerId),e.sourceJSON!=null&&(t.sourceJSON=e.sourceJSON),new e.Constructor(t);const n=new(await b(()=>import("./chunk-CV9j2X4L.js"),__vite__mapDeps([0,1,2,3]))).default({title:e.parsedUrl.title});return await U(n,e,t),n}function w(r,s){return r?r.find(e=>e.id===s):null}async function U(r,s,e){function t(a,o,c,i){const u={...e,layerId:o,sublayerTitleMode:"service-name"};return a!=null&&(u.url=a),c!=null&&(u.sourceJSON=c),i(u)}const n=s.sublayerConstructorProvider;for(const{id:a,serverUrl:o}of s.layers){const c=w(s.sublayerInfos,a),i=(c&&n?.(c))??s.Constructor,u=t(o,a,c,l=>new i(l));r.add(u)}if(s.tables.length){const a=await p("FeatureLayer");s.tables.forEach(({id:o,serverUrl:c})=>{const i=t(c,o,w(s.tableInfos,o),u=>new a(u));r.tables.add(i)})}}async function $(r,s){let e=I(r);if(e==null&&(e=await C(r,s)),e==null)throw new d("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:t,sublayer:n}=e;let a;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},c=t==="FeatureServer",i=t==="SceneServer",u={parsedUrl:e,Constructor:null,layerId:c||i?n??void 0:void 0,layers:[],tables:[]};switch(t){case"MapServer":n!=null?a="FeatureLayer":a=await E(r,s)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const l=await f(r,{customParameters:s}),{tileInfo:y,cacheType:m}=l;a=y?y?.format?.toUpperCase()!=="LERC"||m&&m.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const l=await f(e.url.path,{customParameters:s});if(a="SceneLayer",l){const y=l?.layers;if(l?.layerType==="Voxel")a="VoxelLayer";else if(y?.length){const m=y[0]?.layerType;m!=null&&v[m]!=null&&(a=v[m])}}break}case"3DTilesServer":throw new d("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(a="FeatureLayer",n!=null){const l=await f(r,{customParameters:s});u.sourceJSON=l,l.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}break;default:a=o[t]}if(F[a]&&n==null){const l=await J(r,t,s);if(c&&(u.sublayerInfos=l.layerInfos,u.tableInfos=l.tableInfos),l.layers.length+l.tables.length!==1)u.layers=l.layers,u.tables=l.tables,c&&l.layerInfos?.length&&(u.sublayerConstructorProvider=await _(l.layerInfos));else if(c||i){const y=l.layerInfos?.[0]??l.tableInfos?.[0];u.layerId=l.layers[0]?.id??l.tables[0]?.id,u.sourceJSON=y,c&&y?.type==="Oriented Imagery Layer"&&(a="OrientedImageryLayer")}}return u.Constructor=await p(a),u}async function C(r,s){const e=await f(r,{customParameters:s});let t=null,n=null;const a=e.type;if(a==="Feature Layer"||a==="Table"?(t="FeatureServer",n=e.id??null):a==="indexedVector"?t="VectorTileServer":e.hasOwnProperty("mapName")?t="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?t="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":e.hasOwnProperty("streamUrls")?t="StreamServer":S(e)?(t="SceneServer",n=e.id):e.hasOwnProperty("layers")&&S(e.layers?.[0])&&(t="SceneServer"),!t)return null;const o=n!=null?h(r):null;return{title:o!=null&&e.name||L(r),serverType:t,sublayer:n,url:{path:o!=null?o.serviceUrl:O(r).path}}}function S(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function J(r,s,e){let t,n,a=!1;switch(s){case"FeatureServer":{const i=await T(r,{customParameters:e});a=!!i.layersJSON,t=i.layersJSON||i.serviceJSON;break}case"SceneServer":{const i=await N(r,e);t=i.serviceInfo,n=i.tableServerUrl;break}default:t=await f(r,{customParameters:e})}const o=t?.layers,c=t?.tables;return{layers:o?.map(i=>({id:i.id})).reverse()||[],tables:c?.map(i=>({serverUrl:n,id:i.id})).reverse()||[],layerInfos:a?o:[],tableInfos:a?c:[]}}async function N(r,s){const e=await f(r,{customParameters:s});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:n}=await g(r),a=await f(n,{customParameters:s}).catch(()=>null);return a&&(e.tables=a.tables),{serviceInfo:e,tableServerUrl:n}}catch{return{serviceInfo:e}}}async function p(r){return(0,P[r])()}async function E(r,s){return(await f(r,{customParameters:s})).tileInfo}async function _(r){const s=[],e=[];if(r.forEach(a=>{const{type:o}=a;o==="Oriented Imagery Layer"?(s.push(o),e.push(p("OrientedImageryLayer"))):(s.push(o),e.push(p("FeatureLayer")))}),!e.length)return;const t=await Promise.all(e),n=new Map;return s.forEach((a,o)=>{n.set(a,t[o])}),a=>n.get(a.type)}export{R as fromUrl};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-CV9j2X4L.js","assets/chunks/chunk-FKPdDv5g.js","assets/chunks/chunk-JaFSy54E.js","assets/chunks/chunk-D_yTKJJf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
