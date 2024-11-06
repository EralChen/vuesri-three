import{w as m,b3 as d}from"./chunk-C4bXDfxA.js";import"./chunk-D_yTKJJf.js";import{d as O,a as T,b as _}from"./chunk-D3Bv6ezd.js";import{V as L}from"./chunk-CV3m-_xe.js";import{o as x,C as f,f as u,b as I,p as g,G as D,u as W,a as k,i as M,F as $,q as F}from"./chunk-BG7do94j.js";import{G}from"./chunk-C8BFCSCn.js";import{V as P,W as R,X as S,d as y,w as V,R as E,r as U,q,x as z,b as B,p as N,l as w,k as v,u as l}from"./chunk-CN5kXZIc.js";import{E as X}from"./chunk-CC8PhC7k.js";import{c as j,p as A}from"./chunk-DfgFxUOr.js";import"./chunk-DCsN_d27.js";import"./chunk--6mYOZ3I.js";import"./chunk-CcyKeARz.js";const b=["waveColor","waveDamping","waveLaps","waveOpacity","waveThreshold","waveIntensity","bgOpacity","bgColor"];class C extends x{constructor(e){super(P(e,b)),this.clock=new f,this.defaultParams={waveColor:"#0066ff",waveDamping:.3,waveLaps:2,waveOpacity:1,bgColor:"#000000",waveThreshold:0,bgOpacity:1,waveIntensity:1},this.params=R(this.defaultParams,e),this.uniforms={iTime:{value:.1},waveColor:{value:new u(this.params.waveColor)},unLaps:{value:this.params.waveLaps},waveOpacity:{value:this.params.waveOpacity},bgColor:{value:new u(this.params.bgColor)},waveThreshold:{value:this.params.waveThreshold},bgOpacity:{value:this.params.bgOpacity},waveIntensity:{value:this.params.waveIntensity}},this.vertexShader=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,this.fragmentShader=`
      varying vec2 vUv;
      uniform float iTime;
      uniform vec3 waveColor;
      uniform float unLaps;
      uniform float waveOpacity;
      uniform vec3 bgColor;
      uniform float waveThreshold;
      uniform float bgOpacity;
      uniform float waveIntensity;
      void main() {
        vec2 uv = vUv;
        vec2 p = 2.0 * uv.xy - vec2(1., 1.);
        float r = length(p) * 2.0;
        vec3 color = waveColor;
        float a = pow(r, unLaps);
        float b = sin(r * 0.8 - 1.6);
        float c = sin(r - .10);
        float s = sin(a - iTime * 3.0 + b) * c;
        color *= abs(waveIntensity / (s * 30.)) - 0.1;
        if (all(lessThanEqual(color, vec3(waveThreshold)))) {
          gl_FragColor = vec4(bgColor, bgOpacity);
        } else {
          gl_FragColor = vec4(color, waveOpacity);
        }
      }
    `,this.transparent=!0}set waveColor(e){this.uniforms.waveColor.value=new u(e)}get waveColor(){return this.uniforms.waveColor.value}set waveDamping(e){this.params.waveDamping=e}get waveDamping(){return this.params.waveDamping}get waveLaps(){return this.uniforms.unLaps.value}set waveLaps(e){this.uniforms.unLaps.value=e}get waveOpacity(){return this.uniforms.waveOpacity.value}set waveOpacity(e){this.uniforms.waveOpacity.value=e}get bgColor(){return this.uniforms.bgColor.value}set bgColor(e){this.uniforms.bgColor.value=new u(e)}get waveThreshold(){return this.uniforms.waveThreshold.value}set waveThreshold(e){this.uniforms.waveThreshold.value=e}get bgOpacity(){return this.uniforms.bgOpacity.value}set bgOpacity(e){this.uniforms.bgOpacity.value=e}get waveIntensity(){return this.uniforms.waveIntensity.value}set waveIntensity(e){this.uniforms.waveIntensity.value=e}loop(){const e=this.clock.getDelta();this.uniforms.iTime.value+=Math.sin(e*this.waveDamping)}}class K extends I{constructor(e=new g(64,64),s=new C){super(e,s),this.geometry=e,this.material=s,this.defaultOptions={},this.options={},this.clock=new f,this.render()}render(){this.rotateX(-Math.PI/2)}dispose(){this.removeFromParent(),this.geometry.dispose(),this.material.dispose()}loop(){this.material.loop()}}const H={source:{type:Array,default:()=>[]}},J={load:t=>t};class Q{constructor(e){this.group=new D,this.graphic=e.graphic,this.layer=e.layer}setup(){const{radius:e,segments:s,thetaStart:r,thetaLength:p}=this.graphic.attributes,o=S(this.graphic.attributes,b);this.geometry=new g(e||100,s||64,r,p),this.material=new C({...o}),this.diffusionWave=new K(this.geometry,this.material),this.diffusionWave.rotateX(Math.PI/2);const{material:a}=this.diffusionWave;a&&(a.transparent=!0);const n=this.pathsFromGraphic();this.setPosition(n[0]),this.layer.group.add(this.diffusionWave)}animate(){this.diffusionWave?.loop()}dispose(){this.diffusionWave?.dispose()}pathsFromGraphic(){const e=j(this.graphic.geometry);if(e.type!=="point")throw new Error("geometry type must be point");return A(e)}setPosition(e){const s=this.layer.getRenderTransform().createTransformMatrix4(e[0]);this.diffusionWave.applyMatrix4(s)}}class Y extends X{constructor(e){super(e)}init(){this.entities=this.source.map(e=>new Q({graphic:e,layer:this}))}animate(e){super.animate(e),e.renderNode?.requestRender()}}const Z=y({name:"VathWaveLayer",props:H,emits:J,setup(t,{emit:e}){const s=new Y({source:t.source}),r=W();return V(()=>t.source,()=>{s.source=t.source,s.refresh()}),e("load",{layer:s,renderer:r,view:r.view}),k(r,s),{}}});function ee(t,e,s,r,p,o){return U(t.$slots,"default")}const c=E(Z,[["render",ee]]);c.install=t=>{t.component(c.name,c)};const he=y({__name:"basic",setup(t){const e={center:[120.81657563861,30],zoom:18,spatialReference:{wkid:102100}},s=[new m({geometry:new d({longitude:120.80657463861,latitude:30,z:50}),attributes:{}}),new m({geometry:new d({longitude:120.82657463861,latitude:30,z:50}),attributes:{}}),new m({geometry:new d({longitude:120.81657563861,latitude:30,z:10}),attributes:{radius:100,segments:64,waveColor:"#331282",waveDamping:.3,waveLaps:2,waveOpacity:1,waveThreshold:.5,waveIntensity:20,bgOpacity:0,bgColor:"#000000"}})];let r;function p(a){r=a.layer}const o=q(null);return z(()=>{const a=new G({container:o.value.$el});r.when().then(()=>{const n=r.group.children[2],i=n.material;a.add(i,"visible").name("是否可见 visible"),a.add(i,"waveOpacity",0,1).name("透明度 waveOpacity"),a.addColor(i,"waveColor").name("颜色 waveColor"),a.add(i,"waveDamping",0,1).name("速度 waveDamping"),a.add(i,"waveLaps",0,3,1).name("圈数 waveLaps"),a.addColor(i,"bgColor").name("背景色 bgColor"),a.add(i,"bgOpacity",0,1,.1).name("背景透明度 bgOpacity"),a.add(i,"waveIntensity",0,20,.1).name("光圈宽度 waveIntensity"),a.add(i,"waveThreshold",0,3,.01).name("背景与光圈的色差 waveThreshold"),a.add(i,"side",{DoubleSide:M,FrontSide:$,BackSide:F}).name("渲染面 side"),a.add({scale:1},"scale",1,100,1).onChange(h=>{n.scale.set(h,h,h)}).name("缩放 scale")})}),(a,n)=>(B(),N(l(_),{"default-options":e},{default:w(()=>[v(l(O),{ref_key:"boxRef",ref:o,position:"top-right"},null,512),v(l(T),{type:"vec_w","spatial-reference":{wkid:102100}}),v(l(L),null,{default:w(()=>[v(l(c),{source:s,onLoad:p})]),_:1})]),_:1}))}});export{he as default};
