import{cl as U,cj as q,dU as Z,ci as F,dX as J,cv as u,j as He,bv as te,dY as Ee,kQ as Q,rf as Ne,A0 as Be,nh as z,j9 as k,j0 as Te,A1 as ae,A2 as je,A3 as re,kW as Xe,dW as We,jJ as Qe,A4 as Ue,si as Ze,jI as Je,em as he,bm as ke,A5 as Ke,i_ as j,eH as me,A6 as le,tX as Ye,A7 as _e,np as et,hx as fe,ek as ye,A8 as tt,m1 as st,A9 as it,wT as ve,tJ as Le,ej as rt,iN as nt,ms as ot,W as a,a9 as E,aa as we,en as at,eo as ht,bD as lt,bG as Ce,Aa as dt,ah as de,mr as ct,eM as Se,r8 as ut,u7 as pt,Ab as gt,b3 as mt,yZ as _t,y_ as ft,dD as K,z0 as Pe,z2 as yt,zI as vt,Ac as Ae,z6 as Lt,z7 as H,za as wt,Ad as Ct,jU as N,zc as St,zd as Pt,zP as At,ze as $t,zf as Mt,zh as bt,zi as Vt,zj as zt,zk as Gt,z9 as x,zb as Dt,zp as xt,l5 as ne,zq as oe,zv as Rt,zt as Ot,Ae as It,zy as Et,qQ as qe,d5 as Y,mx as R,r$ as Tt,nm as $e,mE as Me,mg as jt,dC as Wt,dE as be,w_ as Ut,rt as Ve,r9 as ze,wV as kt,ny as Ge,gD as qt,nT as Ft,tl as Ht,P as Nt,Af as Bt,cK as Xt,my as Qt,iX as Zt,cR as Jt,cQ as Kt,cO as Yt,cM as es,tk as ts}from"./chunk-C4bXDfxA.js";import{y as d,e as se,S as pe,c as ss,u as A}from"./chunk-D_yTKJJf.js";import{e as ce,t as is,a as rs}from"./chunk-CQgyEiET.js";import{s as ns}from"./chunk-X8e_UA_X.js";import{k as De}from"./chunk-BAetMnDI.js";import{b as os,a as as,f as W}from"./chunk-DwWIAlpA.js";import{h as xe}from"./chunk-C0MLXcPi.js";import{f as Re,_ as hs,m as ls}from"./chunk-C9-1Lo6d.js";import{_ as ds}from"./chunk--6mYOZ3I.js";import"./chunk-BCM2kLJx.js";import"./chunk-Bj7WYFLu.js";import"./chunk-DyafsleG.js";function Oe(t,e,s,i,r){U(B,t),q(X,t,e),Z(B,s,B,r),Z(X,s,X,r),F(i,X,B),J(i,i)}const B=u(),X=u();function cs(t,e){const s=Qe(e);Ee(s,0,0,0);for(let r=0;r<t.length;++r)q(s,s,t[r]);Q(s,s,1/t.length);let i=0;for(let r=0;r<t.length;++r)i=Math.max(i,Ne(s,t[r]));e[3]=Math.sqrt(i)}function us(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");Be(t[0],t[1],t[2],e)}function ps(t,e){return z(t,e)+t[3]}function gs(t,e,s){return k(t,G,s)&&k(e,D,s)?Te(G,D):0}function ms(t,e){if(!ae(t,G)||!ae(e,D))return 0;const s=new Ue;return je(s,[G[0],G[1]],[D[0],D[1]],te.WGS84),s.distance}function _s(t,e,s){const i=new Ue;return je(i,[t[0],t[1]],[e[0],e[1]],s??te.WGS84),i.distance}function fs(t,e,s,i){const r=vs;return re(t,i,G)&&re(e,i,D)&&re(s,i,ue)?(r.setPoint(0,0,G),r.setPoint(0,1,D),r.setPoint(0,2,ue),Math.abs(Xe(r,"square-meters"))):0}function ys(t,e=null,s=!0){const r=(n,o)=>{if(o[0]===0&&o[1]===0&&o[2]===0)return!1;for(let h=0;h<n.length;++h)if(z(o,n[h])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return e&&U(e,t[0]),!0;Ee(w,0,0,0);for(let n=0;n<t.length;++n)q(w,w,t[n]);if(J(w,w),r(t,w))return e&&U(e,w),!0;if(!s)return!1;for(let n=0;n<t.length;++n)for(let o=0;o<t.length;++o)if(n!==o&&(We(w,t[n],t[o]),J(w,w),r(t,w)))return e&&U(e,w),!0;return!1}const G=u(),D=u(),ue=u(),vs=new He({rings:[[G,D,ue]],spatialReference:te.WGS84}),w=u();class Ls{get numVertices(){return this._length}get hasStagedVertex(){return this._hasCursorPoint}constructor(e,s){this.validMeasurement=!1,this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=u(),this.areaCentroidRenderCoords=u(),this.geodesicAreaCentroidRenderCoords=u(),this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=u(),this._planeWorldCoords=Ze(),this._worldUp=u(),this._worldTangent=u(),this._frame=[u(),u(),u()],this._pathVersion=-1,this._hasCursorPoint=!1,this._mode=null,this._tempU=u(),this._tempV=u(),this._tempVec3=u(),this._tempSphere=Je(),this._sceneView=e,this.unitNormalizer=s}update(e,s,i,r,n,o){const h=s!=null,l=this._pathVersion===e.version,p=this._hasCursorPoint===h,c=this._mode===n;return!(l&&!o&&p&&c&&e.isValidPolygon)&&(this._pathVersion=e.version,this._hasCursorPoint=h,this._updateCursorSegmentLength(e,s),this._update(e,s,i,r,n),!0)}_update(e,s,i,r,n){const o=this.unitNormalizer,h=this._sceneView.renderSpatialReference,l=this.unitNormalizer.spatialReference;let p=e.numVertices;const c=!(s==null||s.equals(e.lastPoint)||p>2&&s.equals(e.firstPoint));c&&(p+=1);const g=!e.polygonIsClosed&&p>2,m=e.polygonIsClosed||g;this._resize(p);const f=he(i.spatialReference),$=ke(i.spatialReference,f)&&Ke(i.spatialReference),{positionsGeographic:C,positionsWorldCoords:b,positionsRenderCoords:M,positionsSpherical:O}=this,T=(y,v)=>{ws(i.elevationProvider,y),k(y,b[v],l),k(y,M[v],h),$&&(ae(y,C[v]),k(y,O[v],f),J(O[v],O[v]))};e.forEachVertexPosition((y,v)=>T(y,v)),c&&T(s,p-1);const P=this._updatePathLengths(m);if(this.pathLength=this._length>1?j(o.normalizeDistance(P),"meters"):null,$){const y=this._updateGeodesicPathLengths(m,l);this.geodesicPathLength=this._length>1?j(y,"meters"):null}else this.geodesicPathLength=null;if(this._updateMode(n),!m)return this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),void(this.validMeasurement=!1);this._updateAreaAndPerimeterLength(i,o,h,l,r),$&&this._updateGeodesicArea(i),this.validMeasurement=!0}getData(){return{validMeasurement:this.validMeasurement,numVertices:this.numVertices,hasStagedVertex:this.hasStagedVertex,positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(u()),this.positionsRenderCoords.push(u()),this.positionsProjectedWorldCoords.push(me()),this.positionsFittedRenderCoords.push(u()),this.positionsGeographic.push(u()),this.positionsSpherical.push(u()),this.positionsStereographic.push(me()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const s=this.positionsWorldCoords,i=this.pathSegmentLengths;let r=0;for(let n=0;n<this._length;++n){const o=i[n]=Te(s[n],s[(n+1)%this._length]);(n<this._length-1||e)&&(r+=o)}return r}_updateGeodesicPathLengths(e,s){const i=this.positionsGeographic,r=this.geodesicPathSegmentLengths;let n=0;for(let o=0;o<this._length;++o){const h=r[o]=_s(i[o],i[(o+1)%this._length],s??void 0);(o<this._length-1||e)&&(n+=h)}return n}_updateAreaAndPerimeterLength(e,s,i,r,n){const o=e.renderCoordsHelper,h=this.positionsWorldCoords,l=this.positionsRenderCoords,p=this.positionsProjectedWorldCoords,c=this.positionsFittedRenderCoords,g=this._planeWorldCoords,m=this._centroidRenderCoords;le(l,m),o.worldUpAtPosition(m,this._worldUp),o.worldBasisAtPosition(m,Ye.X,this._worldTangent),Oe(m,this._worldUp,i,this._worldUp,r),Oe(m,this._worldTangent,i,this._worldTangent,r),h.length>2&&us(h,g),this.fittingMode=this._selectFittingMode(g,h,this._worldUp,n);let f=0;if(this.fittingMode==="horizontal"){let P=-1/0;l.forEach((y,v)=>{const ge=o.getAltitude(l[v]);ge>P&&(P=ge,f=v)})}const $=h[f];let C=g,b=this._worldTangent;this.fittingMode==="horizontal"?C=this._worldUp:this.fittingMode==="vertical"&&(C=this._tempVec3,b=this._worldUp,_e(g,this._worldUp,C)),U(this._frame[2],C),_e(b,C,this._frame[0]),We(this._frame[1],this._frame[0],this._frame[2]),et(this._frame[1],this._frame[1]);const M=this._tempVec3,O=this._tempU,T=this._tempV;for(let P=0;P<this._length;++P){const y=p[P],v=c[P];F(M,h[P],$),fe(y,z(this._frame[0],M),z(this._frame[1],M)),Q(O,this._frame[0],y[0]),Q(T,this._frame[1],y[1]),q(M,O,T),q(M,M,$),Z(M,r,v,i)}this.perimeterLength=this._length>0?j(s.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,le(c,this.areaCentroidRenderCoords),Z(this.areaCentroidRenderCoords,i,this.areaCentroidWorldCoords,r),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?ye(s.normalizeArea(this._computeArea()),"square-meters"):null}_updateGeodesicArea(e){const{renderCoordsHelper:s,spatialReference:i}=e,{positionsSpherical:r,positionsStereographic:n}=this,o=this._tempVec3,h=ys(r,o);if(!h)return void(this.geodesicArea=null);const l=this._tempU,p=this._tempV;tt(o,l,p);for(let c=0;c<this._length;++c){const g=z(r[c],l),m=z(r[c],p),f=z(r[c],o);fe(n[c],g/f,m/f)}Q(o,o,st(i).radius),s.toRenderCoords(o,he(i),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=h&&this.geodesicIntersectingSegments.size===0?ye(this._computeGeodesicArea(),"square-meters"):null}_updatePerimeterLengths(){const e=this.positionsProjectedWorldCoords,s=this.perimeterSegmentLengths;let i=0;for(let r=0;r<this._length;++r)i+=s[r]=it(e[r],e[(r+1)%this._length]);return i}_updateIntersectingSegments(){const e=this.positionsProjectedWorldCoords,s=this.intersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],o=e[(i+1)%this._length],h=e[r],l=e[(r+1)%this._length];ve(n,o,h,l)&&(s.add(i),s.add(r))}}_computeArea(){const e=this.positionsProjectedWorldCoords,s=this.triangleIndices=Le(De(e));let i=0;for(let r=0;r<s.length;r+=3)i+=rt(e[s[r]],e[s[r+1]],e[s[r+2]]);return i}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,s=this.geodesicIntersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],o=e[(i+1)%this._length],h=e[r],l=e[(r+1)%this._length];ve(n,o,h,l)&&(s.add(i),s.add(r))}}_computeGeodesicArea(){const e=this.positionsGeographic,s=this.positionsStereographic,i=this.geodesicTriangleIndices=Le(De(s));let r=0;for(let n=0;n<i.length;n+=3)r+=fs(e[i[n]],e[i[n+1]],e[i[n+2]],te.WGS84);return r}_selectFittingMode(e,s,i,r){const n=s.map(c=>Math.abs(ps(e,c))).reduce((c,g)=>Math.max(c,g),0);cs(s,this._tempSphere);const o=n/(2*this._tempSphere[3]),h=o<r.maxRelativeErrorCoplanar,l=o<r.maxRelativeErrorAlmostCoplanar;let p="horizontal";return h?p="oblique":l&&(p=Math.abs(z(i,e))>Math.cos(nt(r.verticalAngleThreshold))?"horizontal":"vertical"),p}_updateCursorSegmentLength(e,s){const i=e.lastPoint;e.isValidPolygon||i==null||s==null?(this.geodesicStagedSegmentLength=null,this.stagedSegmentLength=null):(this.geodesicStagedSegmentLength=j(ms(i,s),"meters"),this.stagedSegmentLength=j(this.unitNormalizer.normalizeDistance(gs(i,s,this.unitNormalizer.spatialReference)),"meters"))}_updateMode(e){if(e===ce.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),s>Cs&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=e===ce.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=e}}function ws(t,e){e.hasZ||(e.z=ot(t,e,"ground")??0)}const Cs=1e5;let I=class extends pe{constructor(e){super(e)}initialize(){const e=this.view.spatialReference,s=he(e),i=s===at?ht:s,r=!e||ke(e,i)?i:e,n=new is(r);this._measurementDataManager=new Ls(this.view,n),this.addHandles([this.analysisViewData.path.on("change",()=>this._update()),E(()=>this.analysisViewData.stagedPoint,()=>this._update(),we),E(()=>this.analysisViewData.mode,()=>this._update(),we)]),this._update()}_update(e=!1){const{analysisViewData:s,view:i}=this,r={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(s.path,s.stagedPoint,i,r,s.mode,e)&&(s.measurementData=this._measurementDataManager.getData())}};a([d({constructOnly:!0})],I.prototype,"view",void 0),a([d({constructOnly:!0})],I.prototype,"analysis",void 0),a([d({constructOnly:!0})],I.prototype,"analysisViewData",void 0),I=a([se("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],I);let S=class extends lt.EventedAccessor{constructor(e={}){super(e),this._version=0,this._internalGeometryChange=!1,this._extent=Ce()}set areaMeasurement(e){this._set("areaMeasurement",e),e!=null&&this.view!=null&&this._initialize(e,this.view)}set view(e){this._set("view",e),e!=null&&this.areaMeasurement!=null&&this._initialize(this.areaMeasurement,e)}get constructed(){return this.areaMeasurement!=null&&this.view!=null}get version(){return this._version}get isEmptyPolygon(){return!this.constructed||this._editGeometry.components.length===0}get isValidPolygon(){return this.constructed&&this.polygonIsClosed}get extent(){if(this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].vertices.length>0){const e=Ce(this._extent);return this.forEachVertex(s=>{dt(e,s.pos)}),e}return null}get spatialReference(){return this.constructed?this._editGeometry.coordinateHelper.spatialReference:null}_initialize(e,s){this.removeAllHandles(),this.addHandles(E(()=>e.geometry,()=>{this._updateEditGeometryFromModelGeometry(e,s)},de)),this._makeDirty(!0)}_makeDirty(e=!1){this.notifyChange("polygonIsClosed"),this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),e&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(e,s){if(this._version++,this._internalGeometryChange)return;this.removeHandles("EditGeometry");let i=e.geometry;if(i!=null){const r=ct(i,s.spatialReference);r==null&&os(e,i.spatialReference,ss.getLogger(this)),i=r}this._editGeometryOperations=i!=null?Se.fromGeometry(i,s.state.viewingMode):new Se(new ut("polygon",pt(!0,!1,s.spatialReference))),this._makeDirty(!0),this.emit("change"),this.addHandles(this._editGeometry.on("change",r=>{this._makeDirty(r.addedVertices!=null||r.removedVertices!=null),this._internalGeometryChange=!0,e.geometry=this.numVertices>0?this._editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get _editGeometry(){return this._editGeometryOperations.data}get vertices(){const e=[];return this.forEachVertex(s=>{e.push(s)}),e}get numVertices(){return this.constructed&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}get polygonIsClosed(){return this._editGeometry.components.length>0&&this._editGeometry.components[0].isClosed()}get firstPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getFirstVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}get lastPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getLastVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}getVertex(e){if(!this.constructed||this._editGeometry.components.length===0||this._editGeometry.components[0].vertices.length===0)return null;const s=this._editGeometry.components[0].vertices[0];let i=s;do{if(i.index===e)return i;i=i.rightEdge.rightVertex}while(i!==s&&i!=null);return null}getVertexPositionAsPoint(e){return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}getVertexPositionAsPointFromIndex(e){return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(e).pos)}forEachVertex(e){this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(e)}forEachVertexPosition(e){const s=this._editGeometry.coordinateHelper;this.forEachVertex((i,r)=>{s.vectorToPoint(i.pos,Ie),e(Ie,r)})}clear(){this.areaMeasurement!=null&&(this.areaMeasurement.geometry=null)}add(e){if(!this.constructed)return null;if(this._editGeometry.components.length===0){const i=this.view;this._editGeometry.components.push(new gt(i.spatialReference,i.state.viewingMode))}const s=this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),s}close(){if(!this.constructed||this._editGeometry.components.length===0)return null;const e=this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);return this.emit("change"),e}ensureContains(e,s=""){let i=!1;if(this._editGeometry.components.forEach(r=>{r.iterateVertices(n=>{n===e&&(i=!0)})}),!i)throw new Error(`vertex doesnt exist ${s}`);return i}setVertexPosition(e,s){if(!this.constructed)return null;const i=this._editGeometryOperations.setVertexPosition(e,this._editGeometry.coordinateHelper.pointToVector(s));return this.emit("change"),i}equals(e){if(this.numVertices!==e.numVertices)return!1;let s=!0;return this.forEachVertexPosition((i,r)=>{const n=e.getVertexPositionAsPointFromIndex(r);i.equals(n)||(s=!1)}),!!s}};a([d({value:null})],S.prototype,"areaMeasurement",null),a([d({value:null})],S.prototype,"view",null),a([d()],S.prototype,"isEmptyPolygon",null),a([d()],S.prototype,"isValidPolygon",null),a([d()],S.prototype,"extent",null),a([d()],S.prototype,"spatialReference",null),a([d()],S.prototype,"numVertices",null),a([d()],S.prototype,"polygonIsClosed",null),S=a([se("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper")],S);const Ie=new mt;function Fe(t){const e=new _t,{vertex:s,fragment:i}=e;return ft(s,t),e.attributes.add(K.POSITION,"vec3"),e.attributes.add(K.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(Pe`
    void main(void) {
      vUV = uv0;
      ${t.multipassEnabled?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(yt,t),i.uniforms.add(new vt("size",r=>r.size)),i.uniforms.add(new Ae("color1",r=>r.color1)),i.uniforms.add(new Ae("color2",r=>r.color2)),i.include(Lt),i.code.add(Pe`
    void main() {
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${t.transparencyPassType===H.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
  `),e}const Ss=Object.freeze(Object.defineProperty({__proto__:null,build:Fe},Symbol.toStringTag,{value:"Module"}));class ie extends St{initializeProgram(e){return new Pt(e.rctx,ie.shader.get().build(this.configuration),At)}_setPipelineState(e){const s=this.configuration,i=e===H.NONE,r=e===H.FrontFace;return $t({blending:s.transparent?i?As:Mt(e):null,depthTest:{func:bt(e)},depthWrite:i?s.writeDepth?Vt:null:zt(e),colorWrite:Gt,polygonOffset:i||r?s.polygonOffset?Ps:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ie.shader=new wt(Ss,()=>ds(()=>Promise.resolve().then(()=>Ds),void 0));const Ps={factor:0,units:-25},As=Ct(N.SRC_ALPHA,N.ONE,N.ONE_MINUS_SRC_ALPHA,N.ONE_MINUS_SRC_ALPHA);class V extends Dt{constructor(){super(...arguments),this.transparencyPassType=H.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}}a([x({count:H.COUNT})],V.prototype,"transparencyPassType",void 0),a([x()],V.prototype,"transparent",void 0),a([x()],V.prototype,"writeDepth",void 0),a([x()],V.prototype,"polygonOffset",void 0),a([x()],V.prototype,"multipassEnabled",void 0),a([x()],V.prototype,"cullAboveGround",void 0),a([x({constValue:!1})],V.prototype,"occlusionPass",void 0);class $s extends xt{constructor(e){super(e,new bs),this.produces=new Map([[ne.OPAQUE_MATERIAL,s=>oe(s)&&!this.parameters.transparent],[ne.TRANSPARENT_MATERIAL,s=>oe(s)&&this.parameters.transparent&&this.parameters.writeDepth],[ne.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,s=>oe(s)&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new V}getConfiguration(e,s){return this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration}createGLMaterial(e){return new Ms(e)}createBufferWriter(){return new Rt(Ot)}}class Ms extends It{beginSlot(e){return this.ensureTechnique(ie,e)}}let bs=class extends Et{constructor(){super(...arguments),this.size=qe(1,1),this.color1=Y(.75,.75,.75,1),this.color2=Y(.5,.5,.5,1),this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}};class Vs extends as{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=R.OccludeAndTransparent,this._geometry=null,this._size=qe(1,1),this._color1=Y(1,.5,0,.5),this._color2=Y(1,1,1,.5),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){Tt(this._size,e),this._updateMaterial()}get color1(){return this._color1}set color1(e){$e(e,this._color1)||(Me(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){$e(e,this._color2)||(Me(this._color2,e),this._updateMaterial())}_updateMaterial(){this._checkerBoardMaterial!=null&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new $s({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){this._checkerBoardMaterial!=null&&e(this._checkerBoardMaterial)}createGeometries(e){if(this._geometry==null||this._checkerBoardMaterial==null)return;const s=zs;jt(s,this.transform);const i=this._geometry,r=[],n=u();i.position.forEach(l=>{F(n,l,s),r.push(n[0],n[1],n[2])});const o=[];i.uv.forEach(l=>{o.push(l[0],l[1])});const h=new Wt(this._checkerBoardMaterial,[[K.POSITION,new be(r,i.triangleIndices,3,!0)],[K.UV0,new be(o,i.triangleIndices,2,!0)]]);e.addGeometry(h)}}const zs=u();let L=class extends pe{get _parameters(){const{accentColor:t,textColor:e}=this.view.effectiveTheme,s=Ut(t),i=Ve(t,.5),r=Ve(ze(t),.5),n=ze(e,kt.Low);return{accentColor:s,transparentAccentColor:i,transparentContrastColor:r,intersectingLineColor:[1,.2,0,1],textColor:e,textBackgroundColor:Ge(n,.6),textCalloutColor:Ge(n,.5),pathLineWidth:3,perimeterLineWidth:2,projectionLineWidth:2,projectionLineStippleSize:5,labelDistance:25}}get visible(){return this.analysisViewData.visible}get testData(){return{labels:{area:this._areaLabel,perimeterLength:this._perimeterLengthLabel}}}constructor(t){super(t),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._origin=u(),this._originTransform=qt(),this.messages=null,this.viewData=Gs,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}initialize(){const{analysisViewData:t,_parameters:e,view:s}=this;this._path=new W({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._intersectedPath=new W({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._perimeter=new W({view:s,attached:!0,width:e.perimeterLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._intersectedPerimeter=new W({view:s,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._projectionLines=new W({view:s,attached:!0,width:e.projectionLineWidth,stipplePattern:Ft(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._measurementArea=new Vs({view:s,attached:!0,isDecoration:!0});const i={attached:!0,view:s,isDecoration:!0};this._areaLabel=new Re({...i,fontSize:ee.Large}),this._perimeterLengthLabel=new Re({...i,fontSize:ee.Small}),this.addHandles([E(()=>[t.mode,this.visible,t.unit,t.measurementData,t.stagedPoint],()=>this._update(),de),E(()=>s.state?.camera,()=>this._updateLabels(),de),Ht(()=>this._updateMessageBundle()),E(()=>this._parameters,({accentColor:r,transparentAccentColor:n,transparentContrastColor:o,textColor:h,textBackgroundColor:l,textCalloutColor:p})=>{const{_path:c,_intersectedPath:g,_perimeter:m,_projectionLines:f,_measurementArea:$,_areaLabel:C,_perimeterLengthLabel:b}=this;c.color=r,g.color=r,m.color=r,f.color=r,$.color1=n,$.color2=o,C.textColor=h,C.backgroundColor=l,C.calloutColor=p,b.textColor=h,b.backgroundColor=l,b.calloutColor=p},Nt)]),this._updateMessageBundle()}destroy(){this._measurementArea=A(this._measurementArea),this._path=A(this._path),this._intersectedPath=A(this._intersectedPath),this._perimeter=A(this._perimeter),this._intersectedPerimeter=A(this._intersectedPerimeter),this._areaLabel=A(this._areaLabel),this._perimeterLengthLabel=A(this._perimeterLengthLabel),this._projectionLines=A(this._projectionLines),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;t!=null&&(this._updateViewData(t,e.path,e.stagedPoint),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e,s){const i=t.validMeasurement,r=t.actualMeasurementMode==="geodesic",n=r?t.geodesicArea:t.area;let o=1;if(n){const l=this._toPreferredAreaUnit(n,this.analysisViewData.unit);o=Bt(Math.sqrt(l.value)/Math.sqrt(300)),o*=Math.sqrt(Xt(1,l.unit,"square-meters")),o/=t.unitNormalizer.normalizeDistance(1)}const h={validMeasurement:i,numVertices:t.numVertices,hasStagedVertex:t.hasStagedVertex,path:e,pathVersion:e.version,stagedPoint:s,measurementData:t,mode:t.actualMeasurementMode,positionsGeographic:t.positionsGeographic,positionsRenderCoords:t.positionsRenderCoords,positionsProjected:t.positionsProjectedWorldCoords,positionsFittedRenderCoords:t.positionsFittedRenderCoords,intersectingSegments:r?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:r?t.geodesicTriangleIndices:t.triangleIndices,fittingMode:t.fittingMode,areaCentroid:r?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:i?0:e.numVertices-2,perimeterLengthLabelSegmentIndex:0,checkerSize:o};this._set("viewData",h)}_updateOrigin(){const t=this.viewData;le(t.positionsRenderCoords,this._origin),Qt(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,s=this.view.renderCoordsHelper.spatialReference,i=e.mode,r=[],n=[],o=[],h=e.numVertices,l=e.validMeasurement?h:h-1;for(let c=0;c<l;++c){const g=e[t][c],m=e[t][(c+1)%h];let f=null;switch(i){case"euclidean":f=new ls(g,m);break;case"geodesic":f=new hs(g,m,s)}e.intersectingSegments.has(c)?o.push(f):n.push(f),r.push(f)}let p=null;return e.validMeasurement&&e.hasStagedVertex&&l>=2?p=r[r.length-2]:e.hasStagedVertex&&l>=1&&(p=r[r.length-1]),{all:r,nonIntersecting:n,intersecting:o,stagedSegment:p}}_updatePathSegments(){const{visible:t}=this,e=this._createSegments("positionsRenderCoords");this._path.setGeometryFromSegments(e.nonIntersecting,this._origin),this._path.visible=t,this._intersectedPath.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPath.visible=t,this._pathSegments=e.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRenderCoords");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsProjected,position:t.positionsFittedRenderCoords,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,s=t.mode,i=t.numVertices;if(i>0&&t.validMeasurement&&s==="euclidean"){const r=[];for(let n=0;n<i;++n){const o=u();F(o,t.positionsRenderCoords[n],this._origin);const h=u();F(h,t.positionsFittedRenderCoords[n],this._origin),r.push([o,h])}this._projectionLines.geometry=r,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{measurementData:e,mode:s,path:i}=t;if(!i)return;const r=this.visible,n=this._formatAreaLabel(this.messages,s==="geodesic"?e.geodesicArea:e.area,this.analysisViewData.unit);if(n!=null?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=n,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&r):this._areaLabel.visible=!1,this._set("areaLabel",n),t.validMeasurement&&t.intersectingSegments.size===0){const o=t.mode==="geodesic",h=o?e.geodesicPathLength:e.validMeasurement?e.perimeterLength:e.pathLength,l=this._formatLengthLabel(this.messages,h,this.analysisViewData.unit);this._set("perimeterLengthLabel",l),this._perimeterLengthLabel.distance=this._parameters.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=l,this._perimeterLengthLabel.visible=!0;let p=!0;for(let c=0;c<t.numVertices;++c){const g=(t.perimeterLengthLabelSegmentIndex+c)%t.numVertices,m=o||!e.validMeasurement?this._pathSegments[g]:this._perimeterSegments[g];if(p=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:m,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;p=!1}this._perimeterLengthLabel.visible=p&&r}else this._perimeterLengthLabel.visible=!1}_toPreferredAreaUnit(t,e){return Zt(t,this._preferredAreaUnit(t,e))}_preferredAreaUnit(t,e){switch(e){case"metric":return Kt(t.value,t.unit);case"imperial":return Jt(t.value,t.unit);default:return e}}_preferredLengthUnit(t,e){const s=this._deriveLengthUnitFromAreaUnit(e);switch(s){case"metric":return es(t.value,t.unit);case"imperial":return Yt(t.value,t.unit);default:return s}}_deriveLengthUnitFromAreaUnit(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}_formatAreaLabel(t,e,s){return t&&e&&xe(t,e,this._preferredAreaUnit(e,s))}_formatLengthLabel(t,e,s){return t&&e&&xe(t,e,this._preferredLengthUnit(e,s))}_updateMessageBundle(){this.loadingMessages=!0,ts("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};var ee;a([d()],L.prototype,"_parameters",null),a([d()],L.prototype,"view",void 0),a([d()],L.prototype,"messages",void 0),a([d()],L.prototype,"analysis",void 0),a([d()],L.prototype,"viewData",void 0),a([d()],L.prototype,"analysisViewData",void 0),a([d({readOnly:!0})],L.prototype,"areaLabel",void 0),a([d({readOnly:!0})],L.prototype,"perimeterLengthLabel",void 0),a([d()],L.prototype,"loadingMessages",void 0),a([d()],L.prototype,"visible",null),L=a([se("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],L),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(ee||(ee={}));const Gs={validMeasurement:!1,numVertices:0,hasStagedVertex:!1,path:null,pathVersion:-1,stagedPoint:null,measurementData:null,mode:null,positionsGeographic:null,positionsRenderCoords:null,positionsProjected:null,positionsFittedRenderCoords:null,intersectingSegments:null,triangleIndices:null,fittingMode:null,areaCentroid:null,pathLengthLabelSegmentIndex:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null};let _=class extends ns(pe){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.stagedPoint=null,this.mode=ce.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new S({view:e,areaMeasurement:t}),this.analysisVisualization=new L({view:e,analysis:t,analysisViewData:this}),this.analysisController=new I({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=A(this.analysisController),this.analysisVisualization=A(this.analysisVisualization),this.path.destroy()}get updating(){return!!this.analysisVisualization?.loadingMessages}get result(){const{measurementData:t}=this;return t==null?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController}}};a([d({readOnly:!0})],_.prototype,"type",void 0),a([d({constructOnly:!0,nonNullable:!0})],_.prototype,"analysis",void 0),a([d()],_.prototype,"updating",null),a([d()],_.prototype,"analysisVisualization",void 0),a([d()],_.prototype,"analysisController",void 0),a([d()],_.prototype,"result",null),a([d()],_.prototype,"measurementData",void 0),a([d()],_.prototype,"viewData",null),a([d()],_.prototype,"validMeasurement",null),a([d()],_.prototype,"path",void 0),a([d()],_.prototype,"lastDraggedVertex",void 0),a([d()],_.prototype,"stagedPoint",void 0),a([d()],_.prototype,"mode",void 0),a([d()],_.prototype,"unit",null),a([d(rs)],_.prototype,"_defaultUnit",void 0),_=a([se("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],_);const Xs=_,Ds=Object.freeze(Object.defineProperty({__proto__:null,build:Fe},Symbol.toStringTag,{value:"Module"}));export{Xs as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}