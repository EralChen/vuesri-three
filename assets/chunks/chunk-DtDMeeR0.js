import{f5 as _,cU as m,V as l,d_ as w,P as y,a9 as c,W as n,ff as f}from"./chunk-C4bXDfxA.js";import{q as p,g as d,y as u,e as k}from"./chunk-D_yTKJJf.js";import{m as M,c as V,O as v,f as I,j as G,g as F,a as H}from"./chunk-CZWwgUoJ.js";import{t as $}from"./chunk-DR5o3Dos.js";import{$ as C}from"./chunk-VUVpKqvm.js";import"./chunk--6mYOZ3I.js";import"./chunk-BMem76Us.js";import"./chunk-CrKsXW9d.js";import"./chunk-CagHDAuv.js";import"./chunk-9hqN5Fah.js";import"./chunk-D5zmR9t2.js";import"./chunk-DW8U47cP.js";import"./chunk-DkgZ20KC.js";import"./chunk-C3ceiOOW.js";import"./chunk-COUZix1h.js";import"./chunk-C1MBXUgh.js";import"./chunk-CQl4WRQ9.js";import"./chunk-Wa8cmqdu.js";import"./chunk-kofxK6oN.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function g(e){return e instanceof M||e instanceof V||e instanceof v||e instanceof I||e instanceof G||e instanceof F||e instanceof H}function b(e){return l.isCollection(e)&&e.length&&g(e.at(0))}function O(e){return Array.isArray(e)&&e.length>0&&g(e[0])}let h=class extends _(m){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new w({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),y)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}highlight(e){let t;t=g(e)?[this._getNetworkFeatureUid(e)]:O(e)?e.map(r=>this._getNetworkFeatureUid(r)):b(e)?e.map(r=>this._getNetworkFeatureUid(r)).toArray():[e.uid];const i=t.filter(p);return i.length?(this._addHighlight(i),d(()=>this._removeHighlight(i))):d()}async hitTest(e,t){if(this.suspended)return null;const i=this._graphicsView.hitTest(e).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:e,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e)}viewChange(){this._graphicsView.viewChange()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),i=new $(e.featuresTilingScheme);this._graphicsView=new C({container:i,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return U.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;i===0?this._highlightIds.delete(t):this._highlightIds.set(t,i)}this._updateHighlight()}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map(t=>{const i=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(i),i}));for(const t of e.removed)this.removeHandles(t)}if(e.added.length){this._graphics.addMany(e.added.map(t=>{const i=this._createGraphic(t);return i.symbol==null?null:(this._networkFeatureMap.set(t,i),this._networkGraphicMap.set(i,t),i)}).filter(p));for(const t of e.added)this.addHandles([c(()=>t.geometry,(i,r)=>{this._updateGraphic(t,"geometry",i,r)}),c(()=>t.symbol,(i,r)=>{this._updateGraphic(t,"symbol",i,r)})],t);this._graphics.sort((t,i)=>this._getDrawOrder(t)-this._getDrawOrder(i))}}_updateGraphic(e,t,i,r){if(!this._networkFeatureMap.has(e)){const o=this._createGraphic(e);return this._networkFeatureMap.set(e,o),this._networkGraphicMap.set(o,e),void this._graphics.add(o)}const s=this._networkFeatureMap.get(e);s[t]=i,a.graphic=s,a.property=t,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=f("highlight");this._graphicsView.setHighlight(e.map(i=>({objectId:i,highlightFlags:t})))}};n([u()],h.prototype,"_graphics",void 0),n([u()],h.prototype,"_routeItems",null),h=n([k("esri.views.2d.layers.RouteLayerView2D")],h);const Y=h;export{Y as default};