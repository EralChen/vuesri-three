import{W as t,dg as s,dA as a}from"./chunk-JaFSy54E.js";import{y as r,e as i}from"./chunk-D_yTKJJf.js";const n=o=>{let e=class extends o{initialize(){this.exportImageParameters=new a({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return t([r()],e.prototype,"exportImageParameters",void 0),t([r({readOnly:!0})],e.prototype,"floors",null),t([r({readOnly:!0})],e.prototype,"exportImageVersion",null),t([r()],e.prototype,"layer",void 0),t([r()],e.prototype,"suspended",void 0),t([r(s)],e.prototype,"timeExtent",void 0),e=t([i("esri.views.layers.MapImageLayerView")],e),e};export{n as p};
