import{u as y}from"./chunk-c5QbCJQU.js";import{x as d,y as g,d as h,o as m}from"./chunk-CDohQU0g.js";import{o as v,s as E}from"./chunk-CW_9Je75.js";import"./chunk-C4bXDfxA.js";import"./chunk-D_yTKJJf.js";import{i as p}from"./chunk-CcyKeARz.js";const k=()=>{const e=d("vathEntityLayer",null);if(!e)throw new Error("no entity layer found, make sure to provide the entity layer using the `vathEntityLayer` key on the parent component.");return e},u={click:e=>e,"pointer-move":e=>e},D=g(u),n=h({name:"VathEntityLayerEvents",emits:u,setup(e,{emit:a}){const l=y(),r=k(),f=l[v],i=E(f),s=new i("click",t=>{if(t.feature&&p(t.feature.object,r.group)){const o=t.feature.object.userData?.graphic;a("click",{...t,layer:r,result:{graphic:o}})}});s.add(),m(()=>{s.remove()});const c=new i("pointer-move",t=>{if(t.feature&&p(t.feature.object,r.group)){const o=t.feature.object.userData?.graphic;a("pointer-move",{...t,layer:r,result:{graphic:o}})}});return c.add(),m(()=>{c.remove()}),()=>null}});n.install=e=>{e.component(n.name,n)};export{n as _,D as c,u as e};
