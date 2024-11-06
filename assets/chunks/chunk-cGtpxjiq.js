import{s as b,b as U,_ as ue,u as Ge,ai as E,k as Oe,z as je,h as Ze}from"./chunk-D_yTKJJf.js";import{g0 as ce,bV as he,oq as te,or as se,cC as Ae,os as W,ot as Be,ou as ke,cE as Ee,cb as ie,G as $,ov as Le,ow as de,c8 as fe,ox as He,c7 as X,oy as me,oz as ye,oA as Ue,oB as Je,oC as Ye,oD as We,oE as Xe,oF as Ke,ki as et,oG as pe,oH as tt,oI as ge,oJ as st,oK as it,oL as at,oM as rt,oN as nt,oO as lt,aA as ot,bW as ut,R as xe,b4 as _e,oP as ct,br as ht,bq as dt,bt as ft,h1 as K,oQ as Fe,oR as mt,c0 as yt,ar as pt,l$ as we,aE as gt,aG as xt,ay as _t}from"./chunk-JaFSy54E.js";import{x as Ft}from"./chunk-Bu2SDDVH.js";import{a as O,h as j,j as z,y as ee,P as Ve,x as ae,g as M,b as wt,n as It,S as Ie,v as G,t as St,I as Se,c as Tt}from"./chunk-gQoxAMTo.js";import{_ as Rt}from"./chunk-FKPdDv5g.js";class vt{constructor(e,t){this._cache=new ce(e),this._invalidCache=new ce(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!=null)return null;try{const a=Ft.create(e,t);return this._cache.put(s,a),a}catch(a){return this._invalidCache.put(s,a),null}}getError(e,t){const s=`${t.uid}:${e}`;return this._invalidCache.get(s)??null}}const $e=new vt(50,500),Z="unsupported-query",Qe=" as ",Ce=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),ze=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),bt=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...Ce,...ze]);function re(o,e,t={}){const s=q(e,o);if(!s){const a=$e.getError(e,o);throw new b(Z,"invalid SQL expression",{expression:e,error:a})}const i=t.expressionName||"expression";if(t.validateStandardized&&!s.isStandardized)throw new b(Z,`${i} is not standard`,{expression:e});if(t.validateAggregate&&!s.isAggregate)throw new b(Z,`${i} does not contain a valid aggregate function`,{expression:e});return s.fieldNames}function At(o,e,t,s){if(!t)return!0;const i="where clause";return Q(o,e,re(o,t,{validateStandardized:!0,expressionName:i}),{expressionName:i,query:s}),!0}function Et(o,e,t,s,i){if(!t)return!0;const a="having clause",r=re(o,t,{validateAggregate:!0,expressionName:a});if(Q(o,e,r,{expressionName:a,query:i}),!q(t,o)?.getExpressions().every(u=>{const{aggregateType:c,field:h}=u,f=o.get(h)?.name;return s.some(m=>{const{onStatisticField:y,statisticType:d}=m;return o.get(y)?.name===f&&d.toLowerCase().trim()===c})}))throw new b(Z,"expressions in having clause should also exist in outStatistics",{having:t});return!0}function q(o,e){return o?$e.get(o,e):null}function qe(o){return/\((.*?)\)/.test(o)?o:o.split(Qe)[0]}function Vt(o){return o.split(Qe)[1]}function Q(o,e,t,s={}){const i=new Map;if($t(i,o,e,s.allowedFieldTypes??bt,t),i.size){const a=s.expressionName??"expression";throw new b(Z,`${a} contains invalid or missing fields`,{errors:Array.from(i.values()),query:s.query})}}function $t(o,e,t,s,i){const a=i.includes("*")?[...t,...i.filter(r=>r!=="*")]:i;for(const r of a)if(e.get(r))Te(o,e,t,s,r);else try{const n=re(e,qe(r),{validateStandardized:!0});for(const l of n)Te(o,e,t,s,l)}catch(n){o.set(r,{type:"expression-error",expression:r,error:n})}}function Te(o,e,t,s,i){const a=e.get(i);a?t.has(a.name)?s!=="all"&&s?.has(a.type)===!1&&o.set(i,{type:"invalid-type",fieldName:a.name,fieldType:he.fromJSON(a.type),allowedFieldTypes:Array.from(s,r=>he.fromJSON(r))}):o.set(i,{type:"missing-field",fieldName:a.name}):o.set(i,{type:"invalid-field",fieldName:i})}let H=class{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let a=0;for(const r of i){const n=qe(r),l=this.fieldsIndex.get(n),u=l?null:q(n,s),c=l?l.name:Vt(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:c,clause:u})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=this._fieldDataCache.get(i)?.clause:s||(a=q(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a?.calculateValue(e,this.featureAdapter)}getDataValues(e,t,s=!0){const i=t.normalizationType,a=t.normalizationTotal,r=this.fieldsIndex.get(t.field),n=te(r)||se(r),l=Ae(r);return e.map(u=>{let c=t.field&&this.getFieldValue(u,t.field,this.fieldsIndex.get(t.field));if(t.field2?(c=`${W(c)}${t.fieldDelimiter}${W(this.getFieldValue(u,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(c=`${c}${t.fieldDelimiter}${W(this.getFieldValue(u,t.field3,this.fieldsIndex.get(t.field3)))}`)):typeof c=="string"&&s&&(n?c=c?new Date(c).getTime():null:l&&(c=c?Be(c):null)),i&&Number.isFinite(c)){const h=i==="field"&&t.normalizationField?this.getFieldValue(u,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;c=ke(c,i,h,a)}return c})}async getExpressionValues(e,t,s,i,a){const{arcadeUtils:r}=await Ee(),n=r.hasGeometryOperations(t);n&&await r.enableGeometryOperations();const l=r.createFunction(t),u=r.getViewInfo(s),c={fields:this.fieldsIndex.fields};return e.map(h=>{const f={attributes:this.featureAdapter.getAttributes(h),layer:c,geometry:n?{...O(i.geometryType,i.hasZ,i.hasM,this.featureAdapter.getGeometry(h)),spatialReference:s?.spatialReference}:null},m=r.createExecContext(f,u,a);return r.executeFunction(l,m)})}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:q(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testFeature(e,this.featureAdapter)??!1}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:q(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testSet(e,this.featureAdapter)??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!t?.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(e==null||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:n}=this._fieldDataCache.get(r);s.push(e[n])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}};class v{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new H(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!t?.length)return 1;const r=new Map,n=new Map,l=new Set;for(const u of i){const{statisticType:c}=u,h=c!=="exceedslimit"?u.onStatisticField:void 0;if(!n.has(h)){const m=[];for(const y of t){const d=this._getAttributeValues(e,y,r);m.push(d)}n.set(h,this._calculateUniqueValues(m,e.returnDistinctValues))}const f=n.get(h);for(const m in f){const{data:y,items:d}=f[m],F=y.join(",");s&&!e.validateItems(d,s)||l.add(F)}}return l.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;ie(this.query.outSR)&&!$(t.spatialReference,this.query.outSR)?e.queryGeometry=j({spatialReference:this.query.outSR,...z(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=j({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const s=this.featureAdapter,i=Re(this.hasZ,this.hasM),{point:a,mode:r}=e,n=typeof e.distance=="number"?e.distance:e.distance.x,l=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),f=new ve(null,0),m=new ve(null,0),y={x:0,y:0,z:0};for(const d of this.items){const F=s.getGeometry(d);if(F==null)continue;const{coords:_,lengths:S}=F;if(f.coords=_,m.coords=_,e.returnEdge){let I=0;for(let g=0;g<S.length;g++){const p=S[g];for(let w=0;w<p;w++,I+=i){const x=f;if(x.coordsIndex=I,w!==p-1){const T=m;T.coordsIndex=I+i;const R=y;Qt(y,a,x,T);const C=(a.x-R.x)/n,B=(a.y-R.y)/l,A=C*C+B*B;A<=1&&u.candidates.push(Le(s.getObjectId(d),h(R),Math.sqrt(A),h(x),h(T)))}}}}if(e.vertexMode!=="none"){const I=c?_.length-i:_.length;if(e.vertexMode==="all")for(let g=0;g<I;g+=i){const p=f;p.coordsIndex=g;const w=(a.x-p.x)/n,x=(a.y-p.y)/l,T=w*w+x*x;T<=1&&u.candidates.push(de(s.getObjectId(d),h(p),Math.sqrt(T)))}else if(e.vertexMode==="ends"){const g=[0];c||g.push(_.length-i);for(const p of g){const w=f;w.coordsIndex=p;const x=(a.x-w.x)/n,T=(a.y-w.y)/l,R=x*x+T*T;R<=1&&u.candidates.push(de(s.getObjectId(d),h(w),Math.sqrt(R)))}}}}return u.candidates.sort((d,F)=>d.distance-F.distance),u}_getPointCreator(e,t,s){const i=s==null||$(t,s)?n=>n:n=>z(n,t,s),{hasZ:a}=this,r=0;return e==="3d"?a?({x:n,y:l,z:u})=>i({x:n,y:l,z:u}):({x:n,y:l})=>i({x:n,y:l,z:r}):({x:n,y:l})=>i({x:n,y:l})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:l,scale:u,timeZone:c}=e,h=this.fieldsIndex.get(t),f=fe(h)||te(h)||se(h),m=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:u,timeZone:c}),y=He({normalizationType:a,normalizationField:i,minValue:n,maxValue:l}),d={value:.5,fieldType:h?.type},F=X(h)?me({values:m,supportsNullCount:y,percentileParams:d}):ye({values:m,minValue:n,maxValue:l,useSampleStdDev:!a,supportsNullCount:y,percentileParams:d});return Ue(F,f)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domains:i,returnAllCodedValues:a,scale:r,timeZone:n}=e,l=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:s,scale:r,timeZone:n},!1),u=Je(l);return Ye(u,i,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h,scale:f,timeZone:m}=e,y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:f,timeZone:m}),d=We(y,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h});return Xe(d,n)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h,scale:f,timeZone:m}=e,y=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:f,timeZone:m});return Ke(y,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&t?.length)for(const i of t.reverse()){const a=i.split(" "),r=a[0],n=this.fieldsIndex.get(r),l=!!a[1]&&a[1].toLowerCase()==="desc",u=et(n?.type,l);e.sort((c,h)=>{const f=s(c,r,n),m=s(h,r,n);return u(f,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:f,returnZ:m,returnM:y}=e,d=h!=null&&t.length>(f||0)+h,F=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map(_=>this.fieldsIndex.get(_)));return{exceededTransferLimit:d,features:this._createFeatures(e,t),fields:F,geometryType:s,hasM:i&&y,hasZ:a&&m,objectIdFieldName:r,spatialReference:j(u||n),transform:c&&pe(c)||null}}_createFeatures(e,t){const s=new H(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:l,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:f,returnZ:m=!1,returnM:y=!1}=e,d=a&&m,F=i&&y;let _=[],S=0;const I=[...t];if(this._sortFeatures(I,r,(p,w,x)=>s.getFieldValue(p,w,x)),this.geometryType&&(l||u)){const p=pe(n)??void 0,w=this.geometryType==="esriGeometryPolygon"||this.geometryType==="esriGeometryPolyline";if(l&&!u)for(const x of I){const T=this.featureAdapter.getGeometry(x),R={attributes:s.getAttributes(x),geometry:O(this.geometryType,this.hasZ,this.hasM,T,c,p,d,F)};w&&T&&!R.geometry&&(R.centroid=ee(this,this.featureAdapter.getCentroid(x,this),p)),_[S++]=R}else if(!l&&u)for(const x of I)_[S++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),p)};else for(const x of I)_[S++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),p),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),c,p,d,F)}}else for(const p of I){const w=s.getAttributes(p);w&&(_[S++]={attributes:w})}const g=h||0;if(f!=null){const p=g+f;_=_.slice(g,Math.min(_.length,p))}return _}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=Re(this.hasZ,this.hasM),n=this.featureAdapter;t=this.items.reduce((l,u)=>{const c=n.getGeometry(u);return l+(c!=null&&c.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,n=new Map,l=new H(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:f,resultRecordCount:m}=e,y=c?.length,d=!!y,F=d?c[0]:null,_=d&&!this.fieldsIndex.get(F);for(const I of u??[]){const{outStatisticFieldName:g,statisticType:p}=I,w=I,x=p!=="exceedslimit"?I.onStatisticField:void 0,T=p==="percentile_disc"||p==="percentile_cont",R=p==="EnvelopeAggregate"||p==="CentroidAggregate"||p==="ConvexHullAggregate",C=d&&y===1&&(x===F||_)&&p==="count";if(d){if(!r.has(x)){const k=[];for(const Y of c){const L=this._getAttributeValues(l,Y,i);k.push(L)}r.set(x,this._calculateUniqueValues(k,!R&&l.returnDistinctValues))}const A=r.get(x);if(!A)continue;const J=Object.keys(A);for(const k of J){const{count:Y,data:L,items:ne,itemPositions:Me}=A[k],le=L.join(",");if(!h||l.validateItems(ne,h)){const D=n.get(le)||{attributes:{}};if(R){D.aggregateGeometries||(D.aggregateGeometries={});const{aggregateGeometries:V,outStatisticFieldName:N}=await this._getAggregateGeometry(w,ne);D.aggregateGeometries[N]=V}else{let V=null;if(C)V=Y;else{const N=this._getAttributeValues(l,x,i),oe=Me.map(Ne=>N[Ne]);V=T&&"statisticParameters"in w?this._getPercentileValue(w,oe):this._getStatisticValue(w,oe,null,l.returnDistinctValues)}D.attributes[g]=V}let Pe=0;c.forEach((V,N)=>D.attributes[this.fieldsIndex.get(V)?V:"EXPR_"+ ++Pe]=L[N]),n.set(le,D)}}}else if(R){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:A,outStatisticFieldName:J}=await this._getAggregateGeometry(w,this.items);t.aggregateGeometries[J]=A}else{const A=this._getAttributeValues(l,x,i);t.attributes[g]=T&&"statisticParameters"in w?this._getPercentileValue(w,A):this._getStatisticValue(w,A,a,l.returnDistinctValues)}const B=p!=="min"&&p!=="max"||!X(this.fieldsIndex.get(x))&&!this._isAnyDateField(x)?null:this.fieldsIndex.get(x)?.type;s.push({name:g,alias:g,type:B||"esriFieldTypeDouble"})}const S=d?Array.from(n.values()):[t];return this._sortFeatures(S,f,(I,g)=>I.attributes[g]),m&&(S.length=Math.min(m,S.length)),{fields:s,features:S}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return fe(t)||te(t)||se(t)||Ae(t)}async _getAggregateGeometry(e,t){const{convexHull:s,union:i}=await Rt(()=>import("./chunk-Yvc6pY6Q.js").then(d=>d.g),__vite__mapDeps([0,1,2,3,4])),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:n,spatialReference:l,geometryType:u,hasZ:c,hasM:h}=this,f=t.map(d=>O(u,c,h,n.getGeometry(d))),m=s(l,f,!0)[0],y={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const d=m?tt(m):ge(i(l,f));y.aggregateGeometries={...d,spatialReference:l},y.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const d=m?st(m):it(ge(i(l,f)));y.aggregateGeometries={x:d[0],y:d[1],spatialReference:l},y.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(y.aggregateGeometries=m,y.outStatisticFieldName=r||"convexHull");return y}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=s?.has(a)?s.get(a):X(this.fieldsIndex.get(a))||this._isAnyDateField(a)?me({values:t,returnDistinct:i}):ye({values:i?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,n),n[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:n}=i,l=this.fieldsIndex.get(s);return at(t,{value:r,orderBy:n,fieldType:l?.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const n=i[r],l=[];for(const c of e)l.push(c[r]);const u=l.join(",");s[u]==null?s[u]={count:1,data:l,items:[n],itemPositions:[r]}:(t||s[u].count++,s[u].items.push(n),s[u].itemPositions.push(r))}return s}async _getDataValues(e,t=!0){const s=new H(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,scale:a,timeZone:r}=e;return i?s.getExpressionValues(this.items,i,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):s.getDataValues(this.items,U(e),t)}}function Qt(o,e,t,s){const i=s.x-t.x,a=s.y-t.y,r=i*i+a*a,n=(e.x-t.x)*i+(e.y-t.y)*a,l=Math.min(1,Math.max(0,n/r));o.x=t.x+i*l,o.y=t.y+a*l}function Re(o,e){return o?e?4:3:e?3:2}class ve{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const P="unsupported-query";async function be(o,{fieldsIndex:e,geometryType:t,spatialReference:s,availableFields:i}){if((o.distance??0)<0||o.geometryPrecision!=null||o.multipatchOption&&o.multipatchOption!=="xyFootprint"||o.pixelSize||o.relationParam||o.text)throw new b(P,"Unsupported query options",{query:o});return De(e,i,o),zt(e,i,o),Promise.all([Ve(o,t,s),ae(s,o.outSR)]).then(()=>o)}function De(o,e,t){const{outFields:s,orderByFields:i,returnDistinctValues:a,outStatistics:r}=t,n=r?r.map(l=>l.outStatisticFieldName&&l.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const l=" asc",u=" desc",c=i.map(h=>{const f=h.toLowerCase();return f.includes(l)?f.split(l)[0]:f.includes(u)?f.split(u)[0]:h}).filter(h=>!n.includes(h));Q(o,e,c,{expressionName:"orderByFields",query:t})}if(s&&s.length>0)Q(o,e,s,{expressionName:"outFields",query:t,allowedFieldTypes:"all"});else if(a)throw new b(P,"outFields should be specified for returnDistinctValues",{query:t});At(o,e,t.where,t)}const Ct=new Set([...Ce,...ze]);function zt(o,e,t){const{outStatistics:s,groupByFieldsForStatistics:i,having:a}=t,r=i?.length,n=s?.length;if(a){if(!r||!n)throw new b(P,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});Et(o,e,a,s,t)}if(n){if(!Mt(s))return;const l=s.map(u=>u.onStatisticField).filter(Boolean);Q(o,e,l,{expressionName:"onStatisticFields",query:t}),r&&Q(o,e,i,{expressionName:"groupByFieldsForStatistics",query:t});for(const u of s){const{onStatisticField:c,statisticType:h}=u;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:f}=u;if(!f)throw new b(P,"statisticParameters should be set for percentile type",{definition:u,query:t})}else o.get(c)&&h!=="count"&&h!=="min"&&h!=="max"&&Q(o,e,[c],{expressionName:`outStatistics with '${h}' statistic type`,allowedFieldTypes:Ct,query:t})}}}async function qt(o,e,{fieldsIndex:t,geometryType:s,spatialReference:i,availableFields:a}){if((o.distance??0)<0||o.geometryPrecision!=null||o.multipatchOption||o.pixelSize||o.relationParam||o.text||o.outStatistics||o.groupByFieldsForStatistics||o.having||o.orderByFields)throw new b(P,"Unsupported query options",{query:o});return De(t,a,o),Promise.all([Dt(t,a,e,o),Ve(o,s,i),ae(i,o.outSR)]).then(()=>o)}async function Dt(o,e,t,s){let i=[];if(t.valueExpression){const{arcadeUtils:a}=await Ee();i=a.extractFieldNames(t.valueExpression)}if(t.field&&i.push(t.field),t.field2&&i.push(t.field2),t.field3&&i.push(t.field3),t.normalizationField&&i.push(t.normalizationField),!i.length&&!t.valueExpression)throw new b(P,"field or valueExpression is required",{params:t});Q(o,e,i,{expressionName:"statistics",query:s})}function Mt(o){return o!=null&&o.every(e=>e.statisticType!=="exceedslimit")}const Pt="unsupported-query",Nt=new rt(2e6);let Gt=0;class Ht{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:nt},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new lt(Gt+++"$$",Nt)),this.fieldsIndex=ot(e.fieldsIndex)?e.fieldsIndex:ut.fromJSON(e.fieldsIndex),!e.availableFields||e.availableFields.length===1&&e.availableFields[0]==="*"?this.availableFields=new Set(this.fieldsIndex.fields.map(t=>t.name)):this.availableFields=new Set(e.availableFields.map(t=>this.fieldsIndex.get(t)?.name).filter(t=>t!=null)),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=ue(this._frameTask),this.clearCache(),Ge(this._geometryQueryCache),this._changeHandle=ue(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const s=E(t);try{return(await this._executeQuery(e,{},s)).createQueryResponse()}catch(i){if(i!==M)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const s=E(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},s)).createQueryResponseForCount()}catch(i){if(i!==M)throw i;return 0}}async executeQueryForExtent(e,t){const s=E(t),i=e.outSR;try{const a=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),r=a.size;return r?{count:r,extent:await this._getBounds(a.items,a.spatialReference,i||this.spatialReference)}:{count:0,extent:null}}catch(a){if(a===M)return{count:0,extent:null};throw a}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){const s=E(t);try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),a=i.items,r=new Set;return await this._reschedule(()=>{for(const n of a)r.add(i.featureAdapter.getObjectId(n))},s),r}catch(i){if(i===M)return new Set;throw i}}async executeQueryForSnapping(e,t){const s=E(t),{point:i,distance:a,returnEdge:r,vertexMode:n}=e;if(!r&&n==="none")return{candidates:[]};let l=U(e.query);l=await this._schedule(()=>wt(l,this.definitionExpression,this.spatialReference),s),l=await this._reschedule(()=>be(l,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const u=!$(i.spatialReference,this.spatialReference);u&&await ae(i.spatialReference,this.spatialReference);const c=typeof a=="number"?a:a.x,h=typeof a=="number"?a:a.y,f={xmin:i.x-c,xmax:i.x+c,ymin:i.y-h,ymax:i.y+h,spatialReference:i.spatialReference},m=u?z(f,this.spatialReference):f;if(!m)return{candidates:[]};const y=(await xe(_e(i),null,{signal:s}))[0],d=(await xe(_e(m),null,{signal:s}))[0];if(y==null||d==null)return{candidates:[]};const F=new v(await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(d.toJSON())),s),l,this);await this._reschedule(()=>this._executeObjectIdsQuery(F),s),await this._reschedule(()=>this._executeTimeQuery(F),s),await this._reschedule(()=>this._executeAttributesQuery(F),s),await this._reschedule(()=>this._executeGeometryQueryForSnapping(F,s),s);const _=y.toJSON(),S=u?z(_,this.spatialReference):_,I=u?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:a;return F.createSnappingResponse({...e,point:S,distance:I},i.spatialReference)}async executeQueryForLatestObservations(e,t){const s=E(t);if(!this.timeInfo?.trackIdField)throw new b(Pt,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},s);return await this._reschedule(()=>this._filterLatest(i),s),i.createQueryResponse()}catch(i){if(i!==M)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const i=E(s),{field:a,field2:r,field3:n,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:n,valueExpression:l},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=E(e);this._timeExtentPromise||=It(this.timeInfo,this.featureStore);const[s,i]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return Oe(t),{fullExtent:s,timeExtent:i}}async _getBounds(e,t,s){const i=ct(dt(),ht);await this.featureStore.forEachBounds(e,n=>ft(i,n));const a={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:j(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(a.zmin=i[2],a.zmax=i[5]);const r=z(a,t,s);if(r.spatialReference=j(s),r.xmax-r.xmin==0){const n=K(r.spatialReference);r.xmin-=n,r.xmax+=n}if(r.ymax-r.ymin==0){const n=K(r.spatialReference);r.ymin-=n,r.ymax+=n}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const n=K(r.spatialReference);r.zmin-=n,r.zmax+=n}return r}_getFullExtent(){return this._fullExtentPromise||="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(e=>this._getBounds(e,this.spatialReference,this.spatialReference)),this._fullExtentPromise}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(Fe)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(Fe)}async _getAllFeaturesQueryEngineResult(e){return new v(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=U(e),e=await this._schedule(()=>Ie(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>be(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,l=r==null||$(r,n.spatialReference)?n:z(n,r);if(!l)return null;const u=i||a,c=ie(s)&&!$(this.spatialReference,s)&&u?async d=>this._project(d,s):d=>d,h=this.featureAdapter,f=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(l)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!f.length)return null;const d=new Set;for(const S of f)d.add(h.getObjectId(S));const F=await this._reschedule(()=>this._getAllFeatures(),t),_=await this._reschedule(async()=>{const S=await G("esriSpatialRelDisjoint",l,this.geometryType,this.hasZ,this.hasM),I=p=>!d.has(h.getObjectId(p))||S(h.getGeometry(p)),g=await this._runSpatialFilter(F,I,t);return new v(g,e,this)},t);return c(_)}if(!f.length)return new v([],e,this);if(this._canExecuteSinglePass(l,e))return c(new v(f,e,this));const m=await G("esriSpatialRelContains",l,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(f,d=>m(h.getGeometry(d)),t);return c(new v(y,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:a,spatialRel:r,returnGeometry:n,returnCentroid:l}=e,u=this.featureStore.featureSpatialReference,c=!i||u==null||$(u,i.spatialReference)?i:z(i,u),h=n||l,f=ie(a)&&!$(this.spatialReference,a),m=this._geometryQueryCache&&t==null?JSON.stringify(f&&h?{originalFilterGeometry:i,spatialRelationship:r,outSpatialReference:a}:{originalFilterGeometry:i,spatialRelationship:r}):null,y=m?this._geometryQueryCache.get(m):null;if(y!=null)return new v(y,e,this);const d=async g=>(f&&h&&await this._project(g,a),m&&this._geometryQueryCache.put(m,g.items,g.items.length+1),g);if(!c)return d(t??await this._getAllFeaturesQueryEngineResult(e));const F=this.featureAdapter;let _=await this._reschedule(()=>this._searchFeatures(this._getQueryBBoxes(i)),s);if(r==="esriSpatialRelDisjoint"){if(!_.length)return d(t??await this._getAllFeaturesQueryEngineResult(e));const g=new Set;for(const x of _)g.add(F.getObjectId(x));const p=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),w=await this._reschedule(async()=>{const x=await G(r,c,this.geometryType,this.hasZ,this.hasM),T=C=>!g.has(F.getObjectId(C))||x(F.getGeometry(C)),R=await this._runSpatialFilter(p,T,s);return new v(R,e,this)},s);return d(w)}if(t!=null){const g=new Ze;_=_.filter(p=>je(t.items,p,t.items.length,g)>=0)}if(!_.length){const g=new v([],e,this);return m&&this._geometryQueryCache.put(m,g.items,1),g}if(this._canExecuteSinglePass(c,e))return d(new v(_,e,this));const S=await G(r,c,this.geometryType,this.hasZ,this.hasM),I=await this._runSpatialFilter(_,g=>S(F.getGeometry(g)),s);return d(new v(I,e,this))}async _executeGeometryQueryForSnapping(e,t){const{query:s}=e,{spatialRel:i}=s;if(!e?.items?.length||!s.geometry||!i)return;const a=await G(i,s.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,n=>a(n.geometry),t);e.items=r}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds?.length||this.aggregateAdapter==null)return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(a=>t.add(a));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds?.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=St(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=q(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(n=>t(n));let i=0;const a=new Array,r=async n=>{for(;i<e.length;){const l=e[i++];t(l)&&(a.push(l),n.madeProgress()),n.done&&await this._reschedule(u=>r(u),s)}};return this._reschedule(n=>r(n),s).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,a=i||s,r=new Map,n=this.featureAdapter.getAttribute;for(const l of e.items){const u=n(l,t),c=n(l,a),h=r.get(u);(!h||c>n(h,a))&&r.set(u,l)}e.items=Array.from(r.values())}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return Se(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"))}async _project(e,t){if(!t||$(this.spatialReference,t))return e;const s=this.featureAdapter;let i;try{const r=await this._getFullExtent();i=mt(this.spatialReference,t,r)}catch{}const a=await Tt(e.items.map(r=>O(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t,i);return e.items=a.map((r,n)=>s.cloneWithGeometry(e.items[n],yt(r,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(Se(e)){if(pt(e))return[we(Math.min(e.xmin,e.xmax),Math.min(e.ymin,e.ymax),Math.max(e.xmin,e.xmax),Math.max(e.ymin,e.ymax))];if(gt(e))return e.rings.map(t=>we(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[xt(_t(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,a=>t.add(a))));const s=Array.from(t.values());return t.clear(),s}async _executeQueryForStatistics(e,t,s){e=U(e);try{e=await this._schedule(()=>Ie(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>qt(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}catch(i){if(i!==M)throw i;return new v([],e,this)}}}export{Ht as $};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-Yvc6pY6Q.js","assets/chunks/chunk-JaFSy54E.js","assets/chunks/chunk-D_yTKJJf.js","assets/chunks/chunk-FKPdDv5g.js","assets/chunks/chunk-Wa8cmqdu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
