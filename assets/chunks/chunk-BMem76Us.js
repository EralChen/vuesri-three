import{a2 as O,u as V}from"./chunk-D_yTKJJf.js";import{i as $,r as k}from"./chunk-CrKsXW9d.js";import{jS as D,jT as p,jU as v,jV as I,jW as M,jX as j,jY as w,hy as z,jZ as C,j_ as E,j$ as L,k0 as N,k1 as T,k2 as x,k3 as b,k4 as F,k5 as P,k6 as U}from"./chunk-C4bXDfxA.js";import{h}from"./chunk-DkgZ20KC.js";import{r as W}from"./chunk-CagHDAuv.js";let H=0;function c(_,e,t){return new $(W(H++),_,_.meshWriter.name,e,t)}const d={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class q{constructor(){this.instances={fill:c(h.fill,d,{zoomRange:!0}),marker:c(h.marker,d,{zoomRange:!0}),line:c(h.line,d,{zoomRange:!0}),text:c(h.text,d,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:c(h.complexFill,d,{zoomRange:!0}),texturedLine:c(h.texturedLine,d,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const Y=Math.PI/180,G=4;class X extends D{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=p(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const a=this._program;t.bindVAO(this._vao),t.useProgram(a),a.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(I.LINES,8*s.length,M.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:p()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,s=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,s,y().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:a,resolution:f,pixelRatio:r,rotation:o,viewpoint:i}=t,l=Y*o,{x:n,y:R}=i.targetGeometry,S=j(n,t.spatialReference);this._localOrigin.x=S,this._localOrigin.y=R;const m=r*a[0],g=r*a[1],B=f*m,A=f*g,u=w(this._dvsMat3);z(u,u,s),C(u,u,E(m/2,g/2)),L(u,u,N(a[0]/B,-g/A,1)),T(u,u,-l)}_updateBufferData(e,t){const{x:s,y:a}=this._localOrigin,f=2*G*t.length,r=new Float32Array(f),o=new Uint32Array(8*t.length);let i=0,l=0;for(const n of t)n&&(r[2*i]=n[0]-s,r[2*i+1]=n[1]-a,r[2*i+2]=n[0]-s,r[2*i+3]=n[3]-a,r[2*i+4]=n[2]-s,r[2*i+5]=n[3]-a,r[2*i+6]=n[2]-s,r[2*i+7]=n[1]-a,o[l]=i+0,o[l+1]=i+3,o[l+2]=i+3,o[l+3]=i+2,o[l+4]=i+2,o[l+5]=i+1,o[l+6]=i+1,o[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(r.buffer):this._vertexBuffer=x.createVertex(e,b.DYNAMIC_DRAW,r.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=x.createIndex(e,b.DYNAMIC_DRAW,o),!this._vao){const n=y();this._vao=new F(e,n.attributes,n.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const y=()=>P("bounds",{geometry:[{location:0,name:"a_position",count:2,type:M.FLOAT}]});class te extends k{constructor(e){super(e),this._instanceStore=new q,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=V(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new X(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const s of this.children){if(!s.visible)continue;s.getDisplayList(e.drawPhase,this._instanceStore,U.STRICT_ORDER)?.render(e)}}}export{te as i};