import{u as m,a as d,C as u,M as f,b as h,B as p,T as y}from"./chunk-4ztk2S2V.js";import{e as g}from"./chunk-CcyKeARz.js";import{M as v}from"./chunk-BWfcRxIb.js";import{d as w,w as T,a as b,r as M}from"./chunk-DZT0J2Fy.js";const k=w({__name:"TestPointLayer",props:{visible:{type:Boolean,default:!0},source:{type:Array,default:()=>[]}},setup(o){class n{constructor(e){this.clock=new u,this.radiansPerSecond=f.degToRad(30),this.mesh=new h,this.layer=e.layer,this.graphic=e.graphic}setup(e){const s=new p(1e3,1e3,1e3);this.mesh=new h(s,this.layer.material),this.mesh.visible=this.layer.visible,e.scene.add(this.mesh);const a=this.layer.getRenderTransform().createTransformMatrix4(this.graphic.geometry);this.mesh.applyMatrix4(a)}render(){const e=this.clock.getDelta();this.mesh!==void 0&&this.mesh.geometry.rotateY(this.radiansPerSecond*e)}dispose(e){this.mesh&&(this.mesh.geometry.dispose(),e.scene.remove(this.mesh))}}class c extends v(y){constructor(e={}){super(),this.entities=[],this.handles=[],this.source=e.source||[],e.material&&(this.material=e.material)}setup(e){super.setup(e),this.source?.length&&(this.fullExtent=g(this.source)),this.entities=this.source.map(s=>new n({layer:this,graphic:s}));for(const s of this.entities)s.setup(e);this.handles.push(this.watch("visible",s=>{this.entities.forEach(a=>{a.mesh.visible=s})})),this.ready()}render(){this.entities.forEach(e=>{e.render()})}dispose(e){this.handles.forEach(s=>s.remove()),this.handles.length=0,this.entities.forEach(s=>{s.dispose(e)})}}const i=o,l=m(),t=new c;return t.source=i.source,T(()=>i.source,r=>{t.source=r,t.refresh()}),b(()=>{t.visible=i.visible}),d(l,t),(r,e)=>M(r.$slots,"default")}});export{k as _};