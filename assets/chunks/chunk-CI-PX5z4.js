import{gv as u,W as a,j4 as C,hV as P,bD as x,a9 as D,aa as j,j5 as w,j6 as m,j7 as d,j8 as G,bm as z,bQ as M,j9 as H,j0 as I,cv as E,ja as L}from"./chunk-JaFSy54E.js";import{S as k,y as n,e as O}from"./chunk-D_yTKJJf.js";function R(e){let s=0,i=0,t=0;return e?(e.type==="cim"&&e.data.symbol&&"symbolLayers"in e.data.symbol&&e.data.symbol.symbolLayers&&e.data.symbol.symbolLayers.map(l=>{l.type==="CIMVectorMarker"&&l.anchorPoint&&(Math.abs(l.anchorPoint.x)>s&&(s=l.anchorPoint.x),Math.abs(l.anchorPoint.y)>i&&(i=l.anchorPoint.y),l.size!=null&&l.size>t&&(t=l.size))}),s=u(s),i=u(i),t=u(t),{offsetX:s,offsetY:i,size:t}):{offsetX:s,offsetY:i,size:t}}let o=class extends k{set graphic(e){this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()}get elevationInfo(){const{layer:e}=this.graphic,s=e&&"elevationInfo"in e?e.elevationInfo:null,i=C(this.graphic),t=s?s.offset:0;return new P({mode:i,offset:t})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new x.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const s=this.graphic;if(s.visible===!1)return null;const i=s.geometry;if(i==null)return null;const t=this._get("focusedSymbol"),l=t??s.symbol;return this.view.type==="2d"?this._intersectDistance2D(this.view,e,i,l):this._intersectDistance3D(this.view,e,s)}attach(){this.attachSymbolChanged(),this.layer!=null&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this.layer!=null&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=D(()=>this.graphic?.symbol,e=>{e!=null&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&this.focusedSymbol!=null&&(this.graphic.symbol=this.focusedSymbol))},j)}detachSymbolChanged(){this._graphicSymbolChangedHandle!=null&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&this.focusedSymbol!=null?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,s,i,t){if((t=t||w(i))==null)return null;const l=1;let h=this._circleCollisionCache;if(i.type==="point"&&t.type==="cim"&&t.data.symbol?.type==="CIMPointSymbol"&&t.data.symbol.symbolLayers){const{offsetX:c,offsetY:r,size:y}=R(t),p=m(s,_),b=y/2,g=e.toScreen(i),S=g.x+c,v=g.y+r;return d(p,[S,v])<b*b?l:null}if(i.type!=="point"||t.type!=="simple-marker")return G(s,i,e)?l:null;if(h==null||!h.originalPoint.equals(i)){const c=i,r=e.spatialReference;if(z(c.spatialReference,r)){const y=M(c,r);h={originalPoint:c.clone(),mapPoint:y,radiusPx:u(t.size)},this._circleCollisionCache=h}}if(h!=null){const c=m(s,_),r=e.toScreen?.(h.mapPoint);if(!r)return null;const y=h.radiusPx,p=r.x+u(t.xoffset),b=r.y-u(t.yoffset);return d(c,[p,b])<y*y?l:null}return null}_intersectDistance3D(e,s,i){const t=e.toMap(s,{include:[i]});return t&&H(t,f,e.renderSpatialReference)?I(f,e.state.camera.eye):null}};a([n({constructOnly:!0,nonNullable:!0})],o.prototype,"graphic",null),a([n()],o.prototype,"elevationInfo",null),a([n({constructOnly:!0,nonNullable:!0})],o.prototype,"view",void 0),a([n({value:null})],o.prototype,"focusedSymbol",null),a([n({constructOnly:!0})],o.prototype,"layer",void 0),a([n()],o.prototype,"interactive",void 0),a([n()],o.prototype,"selectable",void 0),a([n()],o.prototype,"grabbable",void 0),a([n({value:!1})],o.prototype,"grabbing",null),a([n()],o.prototype,"dragging",void 0),a([n()],o.prototype,"hovering",null),a([n({value:!1})],o.prototype,"selected",null),a([n()],o.prototype,"cursor",void 0),o=a([O("esri.views.interactive.GraphicManipulator")],o);const f=E(),_=L();export{o as S,R as s};
