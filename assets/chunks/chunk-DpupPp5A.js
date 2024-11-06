import{W as p,a9 as d,P as m}from"./chunk-JaFSy54E.js";import{e as u,i as l}from"./chunk-D_yTKJJf.js";import{X as g}from"./chunk-LgXm5W16.js";import"./chunk-FKPdDv5g.js";import"./chunk-B634NlaY.js";import"./chunk-DUPwJEpw.js";import"./chunk-BItlAk18.js";import"./chunk-D5zmR9t2.js";import"./chunk-BC6WeNM-.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-BtbY9apt.js";import"./chunk-DY3lNizI.js";import"./chunk-BnPGKBCV.js";import"./chunk-B0oCdwsk.js";import"./chunk-CO1pNOUO.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),m)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const D=i;export{D as default};
