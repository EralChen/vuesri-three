import{f2 as d,U as f,gS as X,mJ as Y,mK as Z,mL as ss,v as es,mM as ts,mN as os,mO as as,d8 as ns,mP as I,da as _,d9 as E,mQ as rs,x as U,y as is,mR as cs,mS as ls,gH as us,mT as ps,mU as ms}from"./chunk-JaFSy54E.js";import{i as N,A as fs,g as ds,aa as x,n as A,ab as k,k as u,O as hs,j as gs,c as ws}from"./chunk-D_yTKJJf.js";import"./chunk-FKPdDv5g.js";const $={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function h(t,e=o=>{},s){return new ys(t,e,s)}let ys=class{constructor(e,s=a=>{},o){if(this.onProgress=s,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let a=0;a<e;a++){const n=a,r=1/e;this._weights[n]=r,this._progressMap.set(n,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,o]of this._progressMap.entries())e+=o*this._weights[s];if(e===1&&N("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[o,a]of this._timingsMap){const n=Math.round(a.end-a.start)/1e3,r=Math.round(n/s*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:n,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),N("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??=o;const a=fs(this._timingsMap,e,()=>({start:o,end:0}));s===1&&(a.end=o)}this.emitProgress()}simulate(e,s){return D(o=>this.setProgress(e,o),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function D(t=s=>{},e=Ms){const s=performance.now();t(0);const o=setInterval(()=>{const a=performance.now()-s,n=1-Math.exp(-a/e);t(n)},$s);return ds(()=>{clearInterval(o),t(1)})}function Ps(t,e=bs){return x(k(t*O/e))}function Ts(t,e=As){return x(k(t*O/e))}const bs=10,As=10,O=8e-6,$s=A(50),Ms=A(1e3),B=1e6,S=20*B,js=2e9,Fs=3;async function vs({data:t,name:e,description:s},o,a){let n=null;try{const r=d(o,"uploads"),i=d(r,"info"),{data:c}=await f(i,{query:{f:"json"},responseType:"json"});u(a);const l=X(o),m=c.maxUploadFileSize*B,g=l?js:m,b=l?Math.min(S,m):S;if(t.size>g)throw new Error("Data too large");const z=d(r,"register"),{data:M}=await f(z,{query:{f:"json",itemName:Ns(e),description:s},responseType:"json",method:"post"});if(u(a),!M.success)throw new Error("Registration failed");const{itemID:H}=M.item;n=d(r,H);const G=d(n,"uploadPart"),j=Math.ceil(t.size/b),w=new Array;for(let p=0;p<j;++p)w.push(t.slice(p*b,Math.min((p+1)*b,t.size)));const y=w.slice().reverse(),F=new Array,J=h(j,a?.onProgress,"uploadItem"),K=async()=>{for(;y.length!==0;){const p=w.length-y.length,P=y.pop(),T=new FormData,Q=J.simulate(p,Ps(P.size));try{T.append("f","json"),T.append("file",P),T.append("partId",`${p}`);const{data:V}=await f(G,{timeout:0,body:T,responseType:"json",method:"post"});if(u(a),!V.success)throw new Error("Part upload failed")}finally{Q.remove()}}};for(let p=0;p<Fs&&y.length!==0;++p)F.push(K());await Promise.all(F);const W=d(n,"commit"),{data:v}=await f(W,{query:{f:"json",parts:w.map((p,P)=>P).join(",")},responseType:"json",method:"post"});if(u(a),!v.success)throw new Error("Commit failed");return v.item}catch(r){if(n!=null){const i=d(n,"delete");await f(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function Ns(t){return t.replaceAll("/","_").replaceAll("\\","_")}async function Zs(t,e,s){const o=t.length;if(!o)return s?.onProgress?.(1),[];const a=h(o,s?.onProgress,"uploadAssets");return Promise.all(t.map((n,r)=>Ss(n,e,{...s,onProgress:a.makeOnProgress(r)})))}async function Ss(t,{layer:e,ongoingUploads:s},o){const a=s.get(t);if(a)return a;if(!Js(e))throw new Y;if(Is(t,e))return o?.onProgress?.(1),t;const n=_s(t,e,o);s.set(t,n);try{await n}finally{s.delete(t)}return t}function Is(t,e){const{parsedUrl:s}=e;return s!=null&&t.metadata.externalSources.some(o=>Z(o,s))}async function _s(t,e,s){const{metadata:o}=t,{displaySource:a}=o,n=C(a?.source,e),r=!!n,i=o.externalSources.length>0,c=r?Es(n,e,s):i?Us(t,e,s):xs(t,e,s),l=await c;return u(s),t.addExternalSources([l]),t}async function Es(t,e,s){return{source:await R(t,e,s),original:!0}}async function Us(t,e,s){const o=L(e),{externalSources:a}=t.metadata,n=Ds(a,e);if(!n)throw new ss;const r=h($.uploadConvertibleSource,s?.onProgress,"uploadConvertibleSource"),i=await R(n,e,{onProgress:r.makeOnProgress("uploadEditSource")});t.addExternalSources([{source:i,original:!0}]);const c=n.reduce((m,{asset:g})=>g instanceof File?m+g.size:m,0),l=r.simulate("serviceAssetsToGlb",Ts(c));try{return{source:await zs(i,e,o)}}finally{l.remove()}}async function xs(t,e,s){const o=h($.uploadLocalMesh,s?.onProgress,"uploadLocalMesh"),a=ks(t,e,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await q([a],e,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:t.extent.clone(),original:!0}}async function ks(t,e,s){const o=L(e),a=await t.load(s),n=await a.toBinaryGLTF({ignoreLocalTransform:!0});u(s);const r=await n.buffer();return u(s),{blob:new Blob([r.data],{type:r.type}),assetName:`${es()}.glb`,assetType:o}}function Ds(t,e){for(const s of t){const o=C(s.source,e);if(o)return o}return null}function C(t,e){if(!t)return null;const{infoFor3D:{supportedFormats:s,editFormats:o}}=e,a=ls(t),n=new Array;let r=!1;for(let i=0;i<a.length;++i){const c=Os(a[i],s);if(!c)return null;o.includes(c.assetType)&&(r=!0),n.push(c)}return r?n:null}function Os(t,e){const s=ts(t,e);return s?{asset:t,assetType:s}:null}async function R(t,e,s){return q(t.map(o=>Bs(o,s)),e,s)}async function q(t,e,s){const o=h($.uploadAssetBlobs,s?.onProgress,"uploadAssetBlobs"),a=await Rs(t,e,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});u(s);const n=a.map(({item:i})=>i),{uploadResults:r}=await qs(n,e,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return u(s),t.map((i,c)=>Ls(a[c],r[c],e))}async function Bs(t,e){const{asset:s,assetType:o}=t;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const a=await s.toBlob(e);return u(e),{blob:a,assetName:s.assetName,assetType:o}}async function Cs(t,e,s){const{blob:o,assetType:a,assetName:n}=t;let r=null;try{const i=await vs({data:o,name:n},e.url,s);u(s),r={assetType:a,assetUploadId:i.itemID}}catch(i){gs(i),Ks().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!r){const i=await us(o);if(u(s),!i.isBase64)throw new ps;r={assetType:a,assetData:i.data}}if(!r)throw new ms;return{item:r,assetName:n}}function Rs(t,e,s){const o=h(t.length,s?.onProgress,"prepareAssetItems");return Promise.all(t.map(async(a,n)=>{const r=Cs(await a,e,{...s,onProgress:o.makeOnProgress(n)});return u(s),r}))}async function qs(t,e,s){const o=D(s?.onProgress);try{const a=await f(d(e.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});if(u(s),a.data.uploadResults.length!==t.length)throw new os(t.length,a.data.uploadResults.length);return a.data}finally{o.remove()}}function Ls(t,e,s){const{success:o}=e;if(!o){const{error:l}=e;throw new as(t.assetName,l)}const{assetHash:a}=e,{assetName:n,item:{assetType:r}}=t,{infoFor3D:{supportedFormats:i}}=s,c=ns(r,i);if(!c)throw new I(r);return new _(n,c,[new E(`${s.parsedUrl.path}/assets/${a}`,a)])}async function zs(t,e,s){const o=t.map(({assetName:l,parts:m})=>({assetName:l,assetHash:m[0].partHash})),a=e.capabilities?.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:a},r=d(e.parsedUrl.path,"convert3D");let i;try{i=(await(a?Gs:Hs)(r,{query:n,responseType:"json",timeout:0})).data}catch{throw new rs}const{supportedFormats:c}=e.infoFor3D;return i.assets.map(l=>{const m=U(l.contentType,c);if(!m)throw new I(m);return new _(l.assetName,l.contentType,[new E(l.assetURL,l.assetHash)])})}function Hs(t,e){return f(t,e)}async function Gs(t,e){const s=(await f(t,e)).data.statusUrl;for(;;){const o=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return f(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await hs(Ws)}}function Js(t){return!!t.infoFor3D&&!!t.url}function L(t){const{infoFor3D:e}=t,s=U("model/gltf-binary",e.supportedFormats)??is("glb",e.supportedFormats);if(!s)throw new cs;return s}function Ks(){return ws.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Ws=A(1e3);export{Zs as uploadAssets};
