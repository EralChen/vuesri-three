import{cT as h,f5 as n,cU as o,fc as d,W as i}from"./chunk-C4bXDfxA.js";import{f as p,c as m,y as s,e as c}from"./chunk-D_yTKJJf.js";import{v as u}from"./chunk-WI3WTiiC.js";import"./chunk--6mYOZ3I.js";let t=class extends h(n(o)){update(a){this._strategy.update(a).catch(e=>{p(e)||m.getLogger(this).error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new d,this.container.addChild(this._bitmapContainer),this._strategy=new u({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(a,e,r){return this.layer.fetchImageBitmap(a,e,r)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};i([s()],t.prototype,"_strategy",void 0),i([s()],t.prototype,"updating",void 0),t=i([c("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const _=t;export{_ as default};