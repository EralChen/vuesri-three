import{_ as f}from"./chunk--6mYOZ3I.js";import{W as t,bl as F,hC as P,hD as E,b9 as O,hF as A,bb as D,ba as k,aV as U,aW as C,aX as N,aY as V,cf as L,hS as G,bv as I,hG as v,hT as J,hU as M,gg as m,hH as W,ag as z,hj as c,U as q,bH as H,hI as X,b7 as Y,hV as K,bc as Q,hL as Z,hJ as B,hK as ee,be as te,hW as ie,hX as se,hM as re,by as oe,hN as ne,hO as ae,b0 as g,hP as le,b2 as pe,hR as de,ad as ce}from"./chunk-C4bXDfxA.js";import{y as s,e as x,C as he,s as p,j as ue,c as me,F as ye,W as b,b as fe}from"./chunk-D_yTKJJf.js";var y;let a=y=class extends F{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([s({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([s({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([s({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([s({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=y=t([x("esri.layers.support.PurgeOptions")],a);const R=a,w=de();function S(e,r){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`,{layer:e})}let i=class extends P(E(O(A(D(k(U(C(N(V(L(G(ce)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new R,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=I.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=he(async(r,o,n)=>{const{save:l,saveAs:h}=await f(()=>import("./chunk-C5cdaA5F.js"),__vite__mapDeps([0,1,2,3,4]));switch(r){case c.SAVE:return l(this,o);case c.SAVE_AS:return h(this,n,o)}})}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(ue).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){v(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,r,o){r=r.layerDefinition||r;const n=r.drawingInfo?.renderer;if(n){const l=J(n,r,o)||void 0;return l||me.getLogger(this).error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),l}return M(r,o)}async connect(e){const[{createConnection:r}]=await Promise.all([f(()=>import("./chunk-USyG_mtq.js"),__vite__mapDeps([5,4,3,2])),this.load()]),o=this.geometryType?m.toJSON(this.geometryType):null,{customParameters:n=null,definitionExpression:l=null,geometryDefinition:h=null,maxReconnectionAttempts:j=0,maxReconnectionInterval:$=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),d=r(this.parsedUrl,this.spatialReference,T,o,l,h,j,$,n??void 0),_=ye([this.on("send-message-to-socket",u=>d.sendMessageToSocket(u)),this.on("send-message-to-client",u=>d.sendMessageToClient(u))]);return d.once("destroy",_.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let o=null;return this.fields.some(n=>(n.name===e&&(o=n.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(c.SAVE_AS,r,e)}write(e,r){const o=r?.messages;return this.webSocketUrl?(o?.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,r):(o?.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:r}=await q(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}}else{if(!this.timeInfo?.trackIdField)throw new p("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const r=this.fields.find(o=>o.type==="oid")?.name;if(!r)throw new p("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=r}if(!this.fields)throw new p("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(r=>r.name===this.objectIdField)||this.fields.push(new H({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new p("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),v(this.renderer,this.fieldsIndex),X(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),Y(this,{origin:"service"})}};t([s({type:String})],i.prototype,"copyright",void 0),t([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([s({type:String})],i.prototype,"displayField",void 0),t([s({type:K})],i.prototype,"elevationInfo",void 0),t([s({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([s(w.fields)],i.prototype,"fields",void 0),t([s(w.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([s({type:Q,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([s({type:m.apiValues,json:{read:{reader:m.read}}})],i.prototype,"geometryType",void 0),t([s(Z)],i.prototype,"labelsVisible",void 0),t([s({type:[B],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee},write:!0}})],i.prototype,"labelingInfo",void 0),t([s(te)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([s({type:b})],i.prototype,"maxReconnectionAttempts",void 0),t([s({type:b})],i.prototype,"maxReconnectionInterval",void 0),t([s(ie)],i.prototype,"maxScale",void 0),t([s(se)],i.prototype,"minScale",void 0),t([s({type:String})],i.prototype,"objectIdField",void 0),t([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],i.prototype,"outFields",void 0),t([s(re)],i.prototype,"popupEnabled",void 0),t([s({type:oe,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([s({type:R})],i.prototype,"purgeOptions",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([s({types:ne,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:ae,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([g("service","renderer",["drawingInfo.renderer","defaultSymbol"]),g("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([s((()=>{const e=fe(le);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([s()],i.prototype,"sourceJSON",void 0),t([s({type:I,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([s({json:{read:!1}})],i.prototype,"type",void 0),t([s(pe)],i.prototype,"url",void 0),t([s({type:Number})],i.prototype,"updateInterval",void 0),t([s({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([s({type:String})],i.prototype,"webSocketUrl",void 0),i=t([x("esri.layers.StreamLayer")],i);const we=i;export{we as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-C5cdaA5F.js","assets/chunks/chunk-TL7CBD8-.js","assets/chunks/chunk-D_yTKJJf.js","assets/chunks/chunk-C4bXDfxA.js","assets/chunks/chunk--6mYOZ3I.js","assets/chunks/chunk-USyG_mtq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}