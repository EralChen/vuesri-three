import{yZ as $,y_ as I,y$ as O,dD as l,z0 as c,z1 as b,z2 as S,z3 as A,z4 as x,z5 as p,se as y,z6 as D,z7 as u,z8 as C,jU as E,W as i,z9 as o,m4 as v,za as w,zb as N,zc as R,zd as V,ze as M,zf as L,zg as F,zh as j,zi as U,zj as B,zk as W,zl as G,zm as H,zn as k,zo as q,zp as Q,l5 as _,zq as g,zr as Z,zs as J,zt as K,zu as X,zv as Y,yH as ee,zw as te,zx as se,mj as ae,zy as re}from"./chunk-C4bXDfxA.js";import{_ as ie}from"./chunk--6mYOZ3I.js";function T(s){const e=new $,{vertex:t,fragment:a}=e;return I(t,s),e.include(O,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(b,s),e.include(S,s),a.uniforms.add(new A("tex",n=>n.texture),new x("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(y)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(D),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(y)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class m extends R{initializeProgram(e){return new V(e.rctx,m.shader.get().build(this.configuration),z)}_setPipelineState(e,t){const a=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return M({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?ne:L(e),culling:F(a.cullFace),depthTest:{func:j(e)},depthWrite:n?a.writeDepth?U:null:B(e),colorWrite:W,stencilWrite:a.hasOccludees?G:null,stencilTest:a.hasOccludees?t?H:k:null,polygonOffset:n||d?null:q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}m.shader=new w(oe,()=>ie(()=>Promise.resolve().then(()=>ue),void 0));const ne=C(E.ONE,E.ONE_MINUS_SRC_ALPHA);class r extends N{constructor(){super(...arguments),this.output=p.Color,this.cullFace=v.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:p.COUNT})],r.prototype,"output",void 0),i([o({count:v.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:u.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const z=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class fe extends Q{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[_.OPAQUE_MATERIAL,t=>t===p.Highlight||g(t)&&!this.parameters.transparent],[_.TRANSPARENT_MATERIAL,t=>g(t)&&this.parameters.transparent&&this.parameters.writeDepth],[_.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>g(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[_.DRAPED_MATERIAL,t=>Z(t)]]),this._vertexAttributeLocations=z,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<J,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=K.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends X{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(m,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends Y{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){ee(f.size===1);const P=n.getField(h,te);P&&se(f,P,d)}else ae(h,f,e,t,n,d)}}}class ce extends re{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=v.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{fe as T};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
