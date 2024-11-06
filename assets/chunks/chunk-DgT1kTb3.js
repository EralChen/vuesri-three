import{k2 as m,jp as b,yI as j,yX as x,wr as y,lk as g,jt as F,k4 as k,jj as v,s1 as C}from"./chunk-JaFSy54E.js";import"./chunk-D_yTKJJf.js";import"./chunk-FKPdDv5g.js";function c(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function l(r){let e="";for(const t in r){const n=r[t];if(typeof n=="boolean")n&&(e+=`#define ${t}
`);else if(typeof n=="number")e+=`#define ${t} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:o,options:f,namespace:s}=n,a=s?`${s}_`:"";for(const i in f)e+=`#define ${a}${i} ${f[i].toFixed()}
`;e+=`#define ${t} ${a}${o}
`}else{const o=n.options;let f=0;for(const s in o)e+=`#define ${o[s]} ${(f++).toFixed()}
`;e+=`#define ${t} ${o[n.value]}
`}}return e}export{m as BufferObject,b as FramebufferObject,j as Program,x as ProgramCache,y as Renderbuffer,g as ShaderCompiler,F as Texture,k as VertexArrayObject,v as createContext,C as createProgram,l as glslifyDefineMap};
