import{j as a}from"./chunk-JaFSy54E.js";const h=t=>{switch(t.type){case"point":return[[t]];case"polyline":const s=t;return s.paths.map((p,o)=>p.map((u,c)=>s.getPoint(o,c)));case"polygon":const e=t;return e.rings.map((p,o)=>p.map((u,c)=>e.getPoint(o,c)));case"multipoint":const r=t;return[r.points.map((p,o)=>r.getPoint(o))];case"extent":const l=t,i=a.fromExtent(l);return h(i);case"mesh":throw new Error("mesh geometry is not supported");default:throw new Error("geometry type is not supported")}},m=t=>{switch(t.type){case"polygon":const n=t.clone();return n.rings.forEach((e,r)=>{(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1])&&n.insertPoint(r,e.length,e[0])}),n;case"extent":const s=a.fromExtent(t);return m(s);default:return t.clone()}};export{m as c,h as p};
