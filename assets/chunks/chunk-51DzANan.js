import{b as m,m as P}from"./chunk-D_yTKJJf.js";import{bo as w,bp as I,U as k,bq as h,br as b,bs as p,bt as d,bu as x,bv as v,bw as E,bx as $,by as O}from"./chunk-JaFSy54E.js";const F={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function L(s){const r=s.folders||[],t=r.slice(),e=new Map,n=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(s.featureCollection?.layers||[]).forEach(o=>{const y=m(o);y.featureSet.features=[];const a=o.featureSet.geometryType;e.set(a,y);const g=o.layerDefinition.objectIdField;a==="esriGeometryPoint"?S(n,g,o.featureSet.features):a==="esriGeometryPolyline"?S(i,g,o.featureSet.features):a==="esriGeometryPolygon"&&S(f,g,o.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(o=>{c.set(o.id,o)}),r.forEach(o=>{o.networkLinkIds.forEach(y=>{const a=j(y,o.id,s.networkLinks);a&&t.push(a)})}),t.forEach(o=>{if(o.featureInfos){o.points=m(e.get("esriGeometryPoint")),o.polylines=m(e.get("esriGeometryPolyline")),o.polygons=m(e.get("esriGeometryPolygon")),o.mapImages=[];for(const y of o.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&o[F[y.type]]?.featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&o.mapImages.push(a);break}}o.fullExtent=G([o])}});const u=G(t);return{folders:r,sublayers:t,extent:u}}function N(s,r,t,e){const n=w?.findCredential(s);s=I(s,{token:n?.token});const i=P.kmlServiceUrl;return k(i,{query:{url:s,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:e})}function T(s,r,t=null,e=[]){const n=[],i={},f=r.sublayers,c=new Set(r.folders.map(l=>l.id));return f.forEach(l=>{const u=new s;if(t?u.read(l,t):u.read(l),e.length&&c.has(u.id)&&(u.visible=e.includes(u.id)),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const o=i[l.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers?.unshift(u)}else n.unshift(u)}),n}function S(s,r,t){t.forEach(e=>{s.set(e.attributes[r],e)})}function M(s,r){let t;return r.some(e=>e.id===s&&(t=e,!0)),t}function j(s,r,t){const e=M(s,t);return e&&(e.parentFolderId=r,e.networkLink=e),e}async function U(s){const r=E.fromJSON(s.featureSet).features,t=s.layerDefinition,e=$(t.drawingInfo.renderer),n=O.fromJSON(s.popupInfo),i=[];for(const f of r){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=n,f.visible=!0,i.push(f)}return i}function G(s){const r=h(b),t=h(b);for(const e of s){if(e.polygons?.featureSet?.features)for(const n of e.polygons.featureSet.features)p(r,n.geometry),d(t,r);if(e.polylines?.featureSet?.features)for(const n of e.polylines.featureSet.features)p(r,n.geometry),d(t,r);if(e.points?.featureSet?.features)for(const n of e.points.featureSet.features)p(r,n.geometry),d(t,r);if(e.mapImages)for(const n of e.mapImages)p(r,n.extent),d(t,r)}return x(t,b)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:v.WGS84}}export{T as S,U as b,L as d,N as g,G as j};
