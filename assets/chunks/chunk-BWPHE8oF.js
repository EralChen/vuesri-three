import{eX as d,eY as i,eZ as f,e_ as l,U as u}from"./chunk-C4bXDfxA.js";import"./chunk-D_yTKJJf.js";import"./chunk--6mYOZ3I.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function q(n,t){const e={};for(const s of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=s;for(const c of r){const{id:h}=c,p=d(i(`${n.path}/${a}/attachments/${h}`)),m=f.fromJSON(c);m.set({url:p,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(m):e[a]=[m]}}return e}function O(n,t,e){let s={query:l({...n.query,f:"json",...y(t)})};return e&&(s={...e,...s,query:{...e.query,...s.query}}),u(n.path+"/queryAttachments",s).then(a=>a.data.attachmentGroups)}async function $(n,t,e){const{objectIds:s}=t,a=[];for(const o of s)a.push(u(n.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>s.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{O as executeAttachmentQuery,$ as fetchAttachments,q as processAttachmentQueryResult};