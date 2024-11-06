import{fY as S,bW as E,bX as P,dz as q,fZ as b,f_ as g,bT as I,b_ as $,G as j,c0 as N,b$ as O}from"./chunk-JaFSy54E.js";import{s as y,k as p,c as _,p as f,f as R}from"./chunk-D_yTKJJf.js";import{m as Q}from"./chunk-D96ywpuw.js";import{x as k,j as M}from"./chunk-gQoxAMTo.js";import{$ as L}from"./chunk-cGtpxjiq.js";import{p as Z}from"./chunk-BA1hmVmi.js";import"./chunk-FKPdDv5g.js";import"./chunk-Bu8a4v6Y.js";import"./chunk-9Zjl_4wy.js";import"./chunk-B5denadm.js";import"./chunk-Wa8cmqdu.js";import"./chunk-Bu2SDDVH.js";import"./chunk-kC8DabUQ.js";const x="esri.layers.WFSLayer";class te{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e={}){const{getFeatureUrl:r,getFeatureOutputFormat:o,fields:i,geometryType:u,featureType:s,maxRecordCount:n,maxTotalRecordCount:c,maxPageCount:C,objectIdField:d,customParameters:F}=t,{spatialReference:l,getFeatureSpatialReference:m}=S(r,s,t.spatialReference);try{await k(m,l)}catch{throw new y("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:l})}p(e),this._customParameters=F,this._featureType=s,this._fieldsIndex=E.fromLayerJSON({fields:i,dateFieldsTimeReference:i.some(T=>T.type==="esriFieldTypeDate")?{timeZoneIANA:P}:null}),this._geometryType=u,this._getFeatureUrl=r,this._getFeatureOutputFormat=o,this._getFeatureSpatialReference=m,this._maxRecordCount=n,this._maxTotalRecordCount=c,this._maxPageCount=C,this._objectIdField=d,this._spatialReference=l;let h=await this._snapshotFeatures(e);if(h.errors.length>0&&(this._supportsPagination=!1,h=await this._snapshotFeatures(e),h.errors.length>0))throw h.errors[0];return this._queryEngine=new L({fieldsIndex:this._fieldsIndex,geometryType:u,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:l,timeInfo:null,featureStore:new Q({geometryType:u,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(h.features),{warnings:w(h),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new y("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=q(e=>this._snapshotFeatures({signal:e})),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(e.features);for(const r of w(e))_.getLogger(x).warn(new f("wfs-layer:refresh-warning",r.message,r.details));e.errors?.length&&_.getLogger(x).warn(new f("wfs-layer:refresh-error","Refresh completed with errors",{errors:e.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t?.signal,r=this._maxTotalRecordCount,o=this._maxPageCount,i=this._supportsPagination?await b(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let u=[];const s=[];if(i==null)try{u=await this._singleQuery(e)}catch(n){R(n)||s.push(n)}else{const n=Math.min(i,r),c=U(this,Math.max(1,Math.min(Math.ceil(n/this._maxRecordCount),o)),e);await Promise.allSettled(Array.from({length:10}).map(()=>G(c,u,s)))}return p(e),{features:u,totalRecordCount:i,maxTotalRecordCount:r,maxPageCount:o,errors:s}}async _singleQuery(t){const e=await g(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const r=t*this._maxRecordCount,o=await g(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:r,count:this._maxRecordCount,signal:e});return this._processGeoJSON(o,{startIndex:r,signal:e})}_processGeoJSON(t,e){I(t,this._getFeatureSpatialReference.wkid);const{startIndex:r,signal:o}=e;p(o);const i=$(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!j(this._spatialReference,this._getFeatureSpatialReference))for(const s of i)s.geometry!=null&&(s.geometry=N(M(O(s.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let u=r??1;for(const s of i){const n={};Z(this._fieldsIndex,n,s.attributes,!0),s.attributes=n,n[this._objectIdField]==null&&(s.objectId=n[this._objectIdField]=u++)}return i}}function*U(a,t,e){for(let r=0;r<t;r++)yield a._pageQuery(r,e)}async function G(a,t,e){let r=a.next();for(;!r.done;){try{const o=await r.value;t.push(...o)}catch(o){R(o)||e.push(o)}r=a.next()}}function w(a){const t=[];return a.totalRecordCount!=null&&(a.features.length<a.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${a.features.length} of ${a.totalRecordCount} in ${a.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:a.features.length,totalRecordCount:a.totalRecordCount}}),a.totalRecordCount>a.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${a.totalRecordCount} features exceeds the maximum allowed of ${a.maxTotalRecordCount}.`,details:{recordCount:a.features.length,totalRecordCount:a.totalRecordCount,maxTotalRecordCount:a.maxTotalRecordCount}})),t}export{te as default};
