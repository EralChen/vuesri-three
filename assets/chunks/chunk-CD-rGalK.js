import{n$ as q,o0 as w,n_ as V,fa as z,ay as N,oc as A,oV as U,oW as W,oX as F,oY as G,oZ as j,o_ as Z,o$ as Y,o3 as y,l7 as K,jU as S,p0 as X,p1 as Q,cX as J,a9 as ee,ah as te,o9 as M,W as u,cU as ie}from"./chunk-C4bXDfxA.js";import{k as se,a2 as O,i as E,s as le,E as ae,D as re,u as H,y as g,e as ne}from"./chunk-D_yTKJJf.js";import{n as oe,e as he,l as ce,h as de,t as ue}from"./chunk-CROIe7RD.js";import{p as ge}from"./chunk-DuvrhHUA.js";import{n as ye}from"./chunk-CJ3qRn-m.js";import{c as me}from"./chunk-DBASeS4A.js";import"./chunk--6mYOZ3I.js";import"./chunk-CF12NPJ1.js";import"./chunk-D5zmR9t2.js";import"./chunk-DgSmusNZ.js";class pe{constructor(e,t,s){this._scale=e,this._shift=t,this._levelShift=s}getLevelRowColumn(e){const t=this.getLevelShift(e[0]),s=this._shift+t;return s?[e[0]-t,e[1]>>s,e[2]>>s]:e}getLevelShift(e){return Math.min(e,this._levelShift)}getOffset(e,t){let s=0,a=0;const l=this._shift+this.getLevelShift(e[0]);if(l){const i=(1<<l)-1,r=t/(this._scale*(1<<l-1));s=(e[2]&i)*r,a=(e[1]&i)*r}return[s,a]}getScale(e){return this._scale*(1<<this._shift+this.getLevelShift(e))}}function fe(n){const e=[],t=new oe(4096,e,()=>{const a=new V;return a.show=!1,a.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),a.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),a}),s=new he(e,t,(a,l,i)=>new ce(a,l,i,n.styleRepository,n.key.level,0),(a,l)=>{q(a,l,!1)},()=>0,a=>{const l=n.styleRepository.getStyleLayerByUID(a).getLayoutProperty("visibility");return!l||l.getValue()!==w.NONE});e.push(n),t.add(n),s.setScreenSize(512,512),s.continue(1/0)}class P extends de{constructor(e,t,s,a){super(e,t,s,e.tileInfo.lods.length-1),this._memCache=a,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new ue(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,t,s,a){const l=new z(e,t,s,0);let i=this._memCache.get(l.id);if(i!=null)return i.retain(),i;const r=await this._getVectorTileData(l);if(se(a),!this._layer)return null;if(i=this._memCache.get(l.id),i!=null)return i.retain(),i;const o=this._layer.tileInfo.getTileBounds(N(),l),c=this._tileInfoView.getTileResolution(e);return i=new A(l,c,o[0],o[3],512,512,this._styleRepository,this._memCache),r?(i.setData(r),i.retain(),this._memCache.put(l.id,i,i.usedMemory,U)):i.setData(null),i.neededForCoverage=!0,i.transforms.tileUnitsToPixels=W(1/8,0,0,0,1/8,0,0,0,1),fe(i),i}_getVectorTileData(e){const t=e.id;if(this._ongoingTileRequests.has(t))return this._ongoingTileRequests.get(t);const s=new AbortController,a={signal:s.signal},l=this._getParsedVectorTileData(e,a).then(i=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),i)).catch(()=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),null));return this._ongoingTileRequests.set(t,l),this._ongoingRequestToController.set(t,s),l}_getParsedVectorTileData(e,t){return this.fetchTileData(e,t).then(s=>this.parseTileData({key:e,data:s},t))}}const _e={vtlBackground:F,vtlFill:G,vtlLine:j,vtlCircle:Z,vtlSymbol:Y},_=1e-6;class D{constructor(e,t){this.spriteMosaic=e,this.glyphMosaic=t,this._brushCache=new Map,this._vtlMaterialManager=new ge}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=O(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(e,t,s){const a=s.layers;e.renderPass="translucent";for(let l=0;l<a.length;l++){const i=a[l];if(i.type!==y.SYMBOL)continue;const r=i.getLayoutProperty("visibility");if(r&&r.getValue()===w.NONE)continue;const o=e.displayLevel;i.minzoom!==void 0&&i.minzoom>o+_||i.maxzoom!==void 0&&i.maxzoom<=o-_||(e.styleLayerUID=i.uid,e.styleLayer=i,this._drawWithBrush(e,t,"vtlSymbol"))}}drawBackground(e,t,s){if(s.backgroundBucketIds.length===0)return;const{context:a,displayLevel:l,requiredLevel:i}=e;t.key.level=i,a.setBlendingEnabled(!0),a.setDepthTestEnabled(!1),a.setStencilTestEnabled(!1),e.renderPass="background",s.backgroundBucketIds.forEach(r=>{const o=s.getLayerById(r);if(o.type!==y.BACKGROUND)return;const c=o.getLayoutProperty("visibility");c&&c.getValue()===w.NONE||o.minzoom!==void 0&&o.minzoom>l+_||o.maxzoom!==void 0&&o.maxzoom<=l-_||(e.styleLayerUID=o.uid,e.styleLayer=o,this._drawWithBrush(e,t,"vtlBackground"))})}drawTile(e,t,s,a){const{context:l}=e,i=s.layers;l.setBlendingEnabled(!1),l.setDepthTestEnabled(!0),l.setDepthWriteEnabled(!0),l.setDepthFunction(K.LEQUAL),e.renderPass="opaque";for(let r=i.length-1;r>=0;r--){const o=i[r];a!=null&&a!==o.type||this._renderStyleLayer(o,e,t,!1)}l.setDepthWriteEnabled(!1),l.setBlendingEnabled(!0),l.setBlendFunctionSeparate(S.ONE,S.ONE_MINUS_SRC_ALPHA,S.ONE,S.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let r=0;r<i.length;r++){const o=i[r];a!=null&&a!==o.type||this._renderStyleLayer(o,e,t,!1)}l.setDepthTestEnabled(!1),l.bindVAO()}_renderStyleLayer(e,t,s,a){if(!(a||e&&s.layerData.has(e.uid)))return;const l=e.getLayoutProperty("visibility");if(l&&l.getValue()===w.NONE)return;const{renderPass:i}=t;let r;switch(e.type){case y.BACKGROUND:if(i!=="background")return;r="vtlBackground";break;case y.FILL:if(i!=="opaque"&&t.renderPass!=="translucent")return;r="vtlFill";break;case y.LINE:if(i!=="translucent")return;r="vtlLine";break;case y.CIRCLE:if(i!=="translucent")return;r="vtlCircle";break;case y.SYMBOL:if(i!=="translucent")return;r="vtlSymbol"}const o=t.displayLevel;if(e.minzoom!==void 0&&e.minzoom>o+_||e.maxzoom!==void 0&&e.maxzoom<=o-_)return;const{context:c}=t;c.setStencilTestEnabled(!1),c.setStencilWriteMask(0),t.styleLayerUID=e.uid,t.styleLayer=e,this._drawWithBrush(t,s,r)}_drawWithBrush(e,t,s){if(!this._brushCache.has(s)){const a=_e[s];this._brushCache.set(s,new a)}this._brushCache.get(s).drawMany(e,[t])}}let h=class extends me(ye(ie)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=E("disable-feature:vtl-level-shift")?0:1}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new le("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:n,spatialReference:e,state:t,viewingMode:s}=this.view,a=s==="local"&&!X(e)||Q.force512VTL,l=this.layer.tileInfo.spatialReference.isGeographic,i=a?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,l?1:2),r=this._getTileInfoSupportError(i,this.layer.fullExtent);if(r!=null)return this.addResolvingPromise(Promise.reject(r));const o=J(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const d=n.tilingScheme,m=d.pixelSize,L=m===256?1:2,p=n.spatialReference?.isGeographic&&m===256?1:0,v=n.spatialReference?.isGeographic||m!==256?0:1;let f;if(this.schemaHelper=new pe(L,p,this.levelShift+v),m===256){const R=this.layer.tileInfo.spatialReference.isGeographic;f=this.layer.tileInfo.getOrCreateCompatible(256,R?1:2)}else f=this.view.spatialReference?.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const C=this._getTileInfoCompatibilityError(f,d);if(C)throw C;this.tileInfo=f});this._tileHandlerController=new AbortController;const c=this.view.resourceController;this._memCache=c.memoryController.newCache(`vtl-${this.layer.uid}`,d=>{d.release()}),this.addHandles(ee(()=>this.view.qualitySettings.memoryLimit,d=>this._memCache.maxSize=Math.ceil(d/10*1048576),te));const k=new M(this.layer.currentStyleInfo.style);this._tileHandler=new P(this.layer,k,t.contentPixelRatio,this._memCache);const b=this._tileHandlerController.signal,T=ve(c),$=this._tileHandler.start({signal:b,schedule:T}),I=this._tileHandler.spriteMosaic;I.then(d=>{!ae(b)&&this._tileHandler&&(this.painter=new D(d,this._tileHandler.glyphMosaic))}),$.then(()=>this._tileHandlerController=null),this._updatingHandles.add(()=>({style:this.layer.currentStyleInfo.style,pixelRatio:this.view.state?.contentPixelRatio}),({style:d,pixelRatio:m})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const L=new M(d),p=new P(this.layer,L,m,this._memCache),v=p.start({signal:this._tileHandlerController.signal,schedule:T}),f=p.spriteMosaic;v.then(()=>this._tileHandlerController=null),this._updatingHandles.addPromise(Promise.all([v,f]).then(([,C])=>{const R=this._tileHandler,x=this.painter;this.painter=new D(C,p.glyphMosaic),this._tileHandler=p,this.emit("data-changed"),R.destroy(),x&&x.dispose()}))});const B=Promise.all([o,$,I]);this.addResolvingPromise(B)}destroy(){this.painter=O(this.painter),this._tileHandlerController=re(this._tileHandlerController),this._tileHandler=H(this._tileHandler),this._memCache=H(this._memCache)}get contentZoom(){return E("disable-feature:vtl-level-shift")?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){const n=this.tileInfo.lods,e=this.layer.minScale||n[0].scale,t=this.layer.maxScale||n[n.length-1].scale,s=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale?s.maxLevel++:s.maxLevel+=this.levelShift,s}get dataScaleRange(){const n=this.tileInfo.lods;return{minScale:n[0].scale,maxScale:n[n.length-1].scale}}get dataLevelRange(){const{minScale:n,maxScale:e}=this.dataScaleRange,t=this.levelRangeFromScaleRange(n,e);return t.minLevel===1&&this.tileInfo.size[0]===256&&(t.minLevel=0),t.maxLevel+=this.levelShift,t}async fetchTile(n,e,t,s){return this._tileHandler.getVectorTile(n,e,t,s)}};u([g()],h.prototype,"layer",void 0),u([g()],h.prototype,"levelShift",void 0),u([g()],h.prototype,"contentZoom",null),u([g()],h.prototype,"displayLevelRange",null),u([g()],h.prototype,"tileInfo",void 0),u([g()],h.prototype,"dataScaleRange",null),u([g()],h.prototype,"dataLevelRange",null),u([g()],h.prototype,"updatingProgressValue",void 0),h=u([ne("esri.views.3d.layers.VectorTileLayerView3D")],h);const Me=h;function ve(n){return e=>n.immediate.schedule(e)}export{Me as default};