import{_ as h}from"./chunk-FKPdDv5g.js";import{a9 as w,ah as d,dz as _,W as a,cU as c}from"./chunk-JaFSy54E.js";import{s as y,u as V,D as u,E as p,y as n,e as A}from"./chunk-D_yTKJJf.js";import{n as f}from"./chunk-DaKMKTem.js";const o="analysis-view-handles";let i=class extends f(c){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(w(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},d),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new y("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=_(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=u(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:s,view:this.view,parent:this});if(await l.when(),p(t))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return h(()=>import("./chunk-Dw26uyZg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))}};a([n()],i.prototype,"type",void 0),a([n()],i.prototype,"layer",void 0),a([n()],i.prototype,"analysisView",void 0),a([n()],i.prototype,"_createAnalysisViewTask",void 0),i=a([A("esri.views.3d.layers.LineOfSightLayerView3D")],i);const L=i;export{L as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-Dw26uyZg.js","assets/chunks/chunk-JaFSy54E.js","assets/chunks/chunk-D_yTKJJf.js","assets/chunks/chunk-FKPdDv5g.js","assets/chunks/chunk-6cmnwozw.js","assets/chunks/chunk-SRrtf3D8.js","assets/chunks/chunk-CSSAm_KD.js","assets/chunks/chunk-C4iGwqag.js","assets/chunks/chunk-ChEZlbUb.js","assets/chunks/chunk-BA9hxsVe.js","assets/chunks/chunk-TcF_5nMR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
