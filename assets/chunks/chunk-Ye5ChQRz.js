import{hS as c,bl as f,W as i,Y as u,f5 as g,cU as d,bR as b,w as o,a9 as n,P as h}from"./chunk-C4bXDfxA.js";import{y as t,e as y,u as m}from"./chunk-D_yTKJJf.js";import{t as T}from"./chunk-DR5o3Dos.js";import{$ as _}from"./chunk-VUVpKqvm.js";import"./chunk--6mYOZ3I.js";import"./chunk-BMem76Us.js";import"./chunk-CrKsXW9d.js";import"./chunk-CagHDAuv.js";import"./chunk-9hqN5Fah.js";import"./chunk-D5zmR9t2.js";import"./chunk-DW8U47cP.js";import"./chunk-DkgZ20KC.js";import"./chunk-C3ceiOOW.js";import"./chunk-COUZix1h.js";import"./chunk-C1MBXUgh.js";import"./chunk-CQl4WRQ9.js";import"./chunk-Wa8cmqdu.js";import"./chunk-kofxK6oN.js";let r=class extends c(f){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};i([t({type:Boolean})],r.prototype,"frameCenter",void 0),i([t({type:Boolean})],r.prototype,"frameOutline",void 0),i([t({type:Boolean})],r.prototype,"lineOfSight",void 0),i([t({type:Boolean})],r.prototype,"sensorLocation",void 0),i([t({type:Boolean})],r.prototype,"sensorTrail",void 0),r=i([y("esri.layers.support.TelemetryDisplay")],r);const p=r,a=new u([255,127,0]);let s=class extends g(d){constructor(){super(...arguments),this._graphicsLayer=new b,this._frameOutlineGraphic=new o({symbol:{type:"simple-fill",outline:{type:"simple-line",color:a}}}),this._sensorTrailGraphic=new o({symbol:{type:"simple-line",color:a}}),this._lineOfSightGraphic=new o({symbol:{type:"simple-line",color:a}}),this._sensorLocationGraphic=new o({symbol:{type:"simple-marker",color:a}}),this._frameCenterGraphic=new o({symbol:{type:"simple-marker",color:a}}),this.layer=null,this.symbolColor=a,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=m(this._graphicsLayer)}initialize(){this.addHandles(n(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},h)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new p({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this.graphicsView=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new T(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([n(()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight],()=>this._updateVisibleTelemetryElements(),h),n(()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight],()=>this._updateGraphicGeometries(),h)])}detach(){this.container.removeAllChildren(),this.graphicsView=m(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:l}=this;e&&l&&(l.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,l.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,l.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,l.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,l.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};i([t()],s.prototype,"graphicsView",void 0),i([t()],s.prototype,"layer",void 0),i([t()],s.prototype,"symbolColor",void 0),i([t({type:p})],s.prototype,"visibleTelemetryElements",void 0),s=i([y("esri.views.2d.layers.VideoLayerView2D")],s);const P=s;export{P as default};