import{W as r,j as c,bj as n,bk as y,bl as m,bm as f,bn as u}from"./chunk-JaFSy54E.js";import{y as l,e as d,p as b,b as R}from"./chunk-D_yTKJJf.js";var o;let t=o=class extends m{constructor(a){super(a),this.geometry=null,this.type="clip"}writeGeometry(a,i,s,e){if(e.layer?.spatialReference&&!e.layer.spatialReference.equals(this.geometry.spatialReference)){if(!f(a.spatialReference,e.layer.spatialReference))return void(e?.messages&&e.messages.push(new b("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})));const p=new c;u(a,p,e.layer.spatialReference),i[s]=p.toJSON(e)}else i[s]=a.toJSON(e);delete i[s].spatialReference}clone(){return new o({geometry:R(this.geometry),type:this.type})}};r([l({type:c}),n()],t.prototype,"geometry",void 0),r([y(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r([l({type:["clip","mask","replace"],nonNullable:!0}),n()],t.prototype,"type",void 0),t=o=r([d("esri.layers.support.SceneModification")],t);const w=t;export{w as f};
