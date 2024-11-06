import{W as p,a9 as d,P as m}from"./chunk-C4bXDfxA.js";import{e as u,i as l}from"./chunk-D_yTKJJf.js";import{X as g}from"./chunk-DjRDd7kC.js";import"./chunk--6mYOZ3I.js";import"./chunk-CrKsXW9d.js";import"./chunk-CagHDAuv.js";import"./chunk-9hqN5Fah.js";import"./chunk-D5zmR9t2.js";import"./chunk-DW8U47cP.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-C53oM6lv.js";import"./chunk-DkgZ20KC.js";import"./chunk-C3ceiOOW.js";import"./chunk-DxJ3VN-r.js";import"./chunk-Dpb_GzMB.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),m)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const D=i;export{D as default};
