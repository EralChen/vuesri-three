import{i as l}from"./chunk-D_yTKJJf.js";import{aK as a,aL as i,ao as n,aM as o}from"./chunk-JaFSy54E.js";const c=(r,e)=>r.key.level-e.key.level!=0?r.key.level-e.key.level:r.key.row-e.key.row!=0?r.key.row-e.key.row:r.key.col-e.key.col;class p extends a{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(c),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:s}=e,t=super.createRenderParams(e);return t.requiredLevel=this._tileInfoView.getClosestInfoForScale(s.scale).level,t.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(s.scale),t}prepareRenderPasses(e){const s=super.prepareRenderPasses(e);return s.push(e.registerRenderPass({name:"stencil",brushes:[i],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT|n.LABEL,target:()=>this.getStencilTarget()})),l("esri-tiles-debug")&&s.push(e.registerRenderPass({name:"tileInfo",brushes:[o],drawPhase:n.DEBUG,target:()=>this.children})),s}getStencilTarget(){return this.children}setStencilReference(e){let s=1;for(const t of this.children)t.stencilRef=s++}}export{p as i};
