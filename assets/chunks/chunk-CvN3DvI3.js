import{W as l,oe as C,og as o,od as S,g9 as pt,cG as E,v5 as ht,pE as I,v6 as v,ta as vt,of as nt,v7 as _t,v8 as mt,v9 as ft,a9 as L,va as O,vb as gt,ah as F,t9 as yt}from"./chunk-JaFSy54E.js";import{y as r,e as p,S as ut,ae as it,k as wt,aH as bt,O as kt,aI as xt,u as ot}from"./chunk-D_yTKJJf.js";import{_ as y}from"./chunk-FKPdDv5g.js";import{e as $t}from"./chunk-BChjGAWF.js";import{T as A,k as Tt,q as st,x as Ct,F as Et,S as Dt,e as lt,U as Vt}from"./chunk-BTklKjAa.js";import{b as Mt}from"./chunk-DnnuNJIA.js";let x=class extends ut{constructor(t){super(t),this.helpMessage=void 0,this.viewType=void 0}get visibleElements(){return this.sketchOptions.tooltips.visibleElements}get allFields(){return[]}get editableFields(){return this.allFields.filter(t=>t.visible&&!t.readOnly)}};l([r()],x.prototype,"sketchOptions",void 0),l([r()],x.prototype,"visibleElements",null),l([r()],x.prototype,"helpMessage",void 0),l([r()],x.prototype,"viewType",void 0),l([r()],x.prototype,"allFields",null),l([r()],x.prototype,"editableFields",null),x=l([p("esri.views.interactive.tooltip.SketchTooltipInfo")],x);const m="esri-tooltip",It=`${m}-content`,Lt=`${m}-content--input`,At=`${m}-content__header`,Rt=`${m}-content__header__spacer`,Ot=`${m}-content__header__actions`,dt=`${m}-draw-header-actions`,Ft=`${m}-table`,St=`${m}-help-message`,D=`${m}-field`,V={base:D,inputMode:`${D}--input`,title:`${D}__title`,value:`${D}__value`};let u=class extends C{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return o("div",{class:this.classes({[V.base]:!0,[V.inputMode]:this.mode==="input"})},o("div",{class:V.title},this.title),o("div",{class:V.value},this.value))}};l([r()],u.prototype,"hidden",void 0),l([r()],u.prototype,"mode",void 0),l([r()],u.prototype,"title",void 0),l([r()],u.prototype,"value",void 0),u=l([p("esri.views.interactive.tooltip.components.TooltipField")],u);const zt={base:`${m}-value-by-value`};let k=class extends C{constructor(){super(...arguments),this.divider="×"}render(){return o("div",{class:zt.base},o("span",null,this.left),o("span",null,this.divider),o("span",null,this.right))}};l([r()],k.prototype,"left",void 0),l([r()],k.prototype,"divider",void 0),l([r()],k.prototype,"right",void 0),k=l([p("esri.views.interactive.tooltip.components.ValueByValue")],k);let d=class extends C{constructor(){super(...arguments),this._focusAbortController=new AbortController,this._transition=null,this._mode="feedback",this._getFormatters=pt((n,t)=>({angleRelative:e=>E(e,{minimumFractionDigits:$,maximumFractionDigits:$,signDisplay:"exceptZero"}),direction:e=>A(e,e.rotationType,$),directionRelative:e=>{const i=ht(e);return E(i,{style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:$,minimumFractionDigits:$,signDisplay:i>0?"never":"exceptZero"})},directionRelativeBilateral:e=>A(e,e.rotationType,$),area:(e,i)=>Tt(n,e,i??t.area),length:(e,i,s)=>st(n,e,i??t.length,s),lengthRelative:(e,i)=>Ct(n,e,i??t.length),totalLength:(e,i)=>st(n,e,i??t.length),verticalLength:(e,i)=>Et(n,e,i??t.length),verticalLengthRelative:(e,i)=>Dt(n,e,i??t.verticalLength),percentage:e=>E(e.value,{style:"percent"}),scale:e=>E(e,{style:"percent",maximumFractionDigits:0})})),this._onDiscard=()=>{this.exitInputMode()},this._onCommit=(n,t)=>{if(t==="commit-and-exit")return void this.exitInputMode();const e=this._getFocusableElements(),i=e.length,s=e.indexOf(n);if(s===-1)return void this.exitInputMode();const a=((s+(t==="commit-and-next"?1:-1))%i+i)%i;M(e.at(a))},this._handleTab=n=>{if(n.code!==I.next)return;const t=this._getFocusableElements(),e=t.at(0),i=t.at(-1);e&&i&&(n.shiftKey?document.activeElement===e&&(n.preventDefault(),M(i)):document.activeElement===i&&(n.preventDefault(),M(e)))}}get mode(){return this._mode}get _displayUnits(){const n=lt(this.tooltip.view);return{length:n,verticalLength:n,area:n,angle:"degrees"}}get _inputUnitInfos(){const n=this._messagesUnits,t=h=>({unit:h,abbreviation:Mt(n,h,"abbr")}),e=lt(this.tooltip.view),i=t(_t(e)),s=t(mt(e)),a=t(ft(e)),c=t("degrees");return{length:i,lengthRelative:i,verticalLength:s,verticalLengthRelative:s,area:a,direction:c,orientation:c,rotation:c}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const n=at(this._renderContent()),{visibleElements:t}=this.info.sketchOptions.tooltips,e=t.helpMessage?this._getHelpMessage():null,i=n.length>0,s=i||!!e,a=this.mode==="input",c=at(this._renderActions());return o("div",{class:vt(It,a&&Lt),onkeydown:this._handleTab},a&&s&&t.header?o("div",{class:At,key:"header"},o("calcite-button",{appearance:"transparent",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),c.length>0?o(v,null,o("div",{class:Rt,key:"spacer"}),o("div",{class:Ot,key:"actions"},c)):null):null,i?o("div",{class:Ft,key:"content"},...n):null,e?o("div",{class:St,key:"help-message"},e):null)}_renderActions(){return null}loadDependencies(){return nt({button:()=>y(()=>import("./chunk-BpSIhbdh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),icon:()=>y(()=>import("./chunk-C5aKWx6X.js"),__vite__mapDeps([16,14,1,2,3,5,6,13])),input:()=>y(()=>import("./chunk-kK3-1xPu.js"),__vite__mapDeps([17,18,1,2,3,5,6,4,7,12,8,9,10,11,13,19,14]))})}async enterInputMode(n){try{await this._transitionTo("input"),await this._focusField(n)}catch(t){it(t)}}async exitInputMode(){try{await this._transitionTo("feedback"),document.querySelector(".esri-view-surface").focus()}catch(n){it(n)}}_getHelpMessage(n){const{info:t}=this,{helpMessage:e,viewType:i}=t,s=n??e,a=i==="3d"?"helpMessages3d":"helpMessages2d";return s?this._messagesTooltip?.sketch?.[a]?.[s]:void 0}async _focusField(n){this._focusAbortController?.abort(),this._focusAbortController=new AbortController;const{signal:t}=this._focusAbortController;await this._waitForInputs(),wt(t);const e=this._getFocusableInputs();M(n?e.find(i=>i.getAttribute("data-field-name")===n):e.at(0))}async _transitionTo(n){if(this._mode===n)return;const t=()=>{this._mode=n,this.tooltip.positionMode=n==="input"?"fixed":"follow-cursor"};if(!this.domNode?.firstChild||!document.startViewTransition||$t())return void t();this.autoRenderingEnabled=!1,this._transition?.skipTransition();const e=this._transition=document.startViewTransition(()=>{if(!this.destroyed)return this.autoRenderingEnabled=!0,t(),this.renderNow(),bt()});try{await this._transition.finished}finally{e===this._transition&&(this._transition=null)}}async _waitForInputs(){const n=Date.now(),t=()=>Array.from(this.domNode?.querySelectorAll("calcite-input")??[]);for(;t().length===0;)if(await kt(Pt),Date.now()-n>Ut)return}_getFocusableInputs(){return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])")??[])}_getFocusableElements(){const n=this.domNode?.querySelector(`.${dt}`);return[...Array.from(n?.querySelectorAll("calcite-action:not([disabled])")??[]),...this._getFocusableInputs()]}};function M(n){n?.setFocus()}function at(n){return(Array.isArray(n)?n:[n]).flat(10).filter(t=>!!t)}l([S("esri/core/t9n/Units"),r()],d.prototype,"_messagesUnits",void 0),l([S("esri/views/interactive/tooltip/t9n/Tooltip"),r()],d.prototype,"_messagesTooltip",void 0),l([r()],d.prototype,"info",void 0),l([r()],d.prototype,"tooltip",void 0),l([r()],d.prototype,"_mode",void 0),l([r()],d.prototype,"mode",null),l([r()],d.prototype,"_displayUnits",null),l([r()],d.prototype,"_inputUnitInfos",null),l([r()],d.prototype,"_formatters",null),l([r()],d.prototype,"fieldContext",null),d=l([p("esri.views.interactive.tooltip.content.TooltipContent")],d);const $=1,Pt=50,Ut=1e3;let z=class extends d{_renderContent(){const{area:t,radius:e,xSize:i,ySize:s,visibleElements:a}=this.info,c=this._messagesTooltip.sketch,h=this._formatters;return o(v,null,a.radius&&e!=null?o(u,{title:c.radius,value:h.length(e)}):null,a.size&&i!=null&&s!=null?o(u,{title:c.size,value:o(k,{left:h.length(i),right:h.length(s)})}):null,a.area?o(u,{title:c.area,value:h.area(t)}):null)}};z=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],z);const f=`${m}-editable-field`,g={base:f,inputMode:`${f}--input`,locked:`${f}--locked`,title:`${f}__title`,titleContent:`${f}__title__content`,value:`${f}__value`,valueContent:`${f}__value__content`,valueContentReadOnly:`${f}__value__content--read-only`,input:`${f}__input`,inputSuffix:`${f}__input-suffix`,button:`${f}__button`};let _=class extends C{constructor(){super(...arguments),this._input=null,this._selectText=()=>{const t=()=>{this._input===document.activeElement&&this._input?.selectText()};t(),xt().then(t)},this._onKeyDown=t=>{t.key===I.discard&&this._discard()},this._onInputKeyDown=t=>{switch(t.key){case I.commit:return this._commit({type:"commit-and-exit",allowLockingCurrentValue:!0});case I.next:return t.preventDefault(),t.stopPropagation(),this._commit({type:t.shiftKey?"commit-and-previous":"commit-and-next",allowLockingCurrentValue:!1})}},this._onInput=t=>{this.field.inputValue=t.target.value},this._onLockClick=()=>{const{field:t}=this;t.locked?t.unlock():this._lock()}}initialize(){this.addHandles(L(()=>this._rawDisplayValue,()=>{const{committed:t,inputValue:e}=this.field;t||e||this._input!==document.activeElement||this._selectText()}))}loadDependencies(){return nt({action:()=>y(()=>import("./chunk-Bzj8B6n2.js"),__vite__mapDeps([20,21,1,2,3,5,6,7,10,11,12,13,9,14,15])),icon:()=>y(()=>import("./chunk-C5aKWx6X.js"),__vite__mapDeps([16,14,1,2,3,5,6,13])),input:()=>y(()=>import("./chunk-kK3-1xPu.js"),__vite__mapDeps([17,18,1,2,3,5,6,4,7,12,8,9,10,11,13,19,14]))})}render(){const{mode:t,field:e}=this,i=t==="input",{locked:s}=e;return o("div",{class:this.classes({[g.base]:!0,[g.inputMode]:t==="input",[g.locked]:s})},o("div",{class:g.title,key:"title"},o("div",{class:g.titleContent,key:"title-content"},this._title,s&&!i?o("calcite-icon",{icon:"lock",key:"icon",scale:"s"}):null)),o("div",{class:g.value,key:"value"},i?this._renderInputModeValue():this._renderFeedbackModeValue()))}get _initialValue(){const{field:t}=this;return t.actual!=null?t.toInputUnits(t.actual,this.context).value:null}get _formattedValue(){const{context:t,field:e}=this,{actual:i,committed:s,format:a}=e;return s!=null?a(s,t):i!=null?a(i,t):rt}get _rawDisplayValue(){const{field:t}=this,{inputValue:e,committed:i}=t;return e??this._toString(i!=null?t.toInputUnits(i,this.context).value:this._initialValue)}get _suffix(){const{suffix:t}=this.field;return typeof t=="string"?t:t(this.context)}get _title(){const{title:t}=this.field;return typeof t=="string"?t:t(this.context)}_renderFeedbackModeValue(){return o("span",{key:"value-feedback"},this._formattedValue)}_renderInputModeValue(){return this.field.readOnly?this._renderValueReadOnly():this._renderValueWritable()}_renderValueReadOnly(){return o("span",{class:g.valueContentReadOnly,key:"value-readonly"},this._formattedValue)}_renderValueWritable(){const{locked:t,name:e}=this.field,i=this.context?.messages.sketch??{},s=t?i.unlockConstraint:i.lockConstraint;return o("div",{class:g.valueContent,key:"value-writable",onkeydown:this._onKeyDown},o("calcite-input",{afterCreate:a=>{this._input=a},class:g.input,"data-field-name":e,onfocus:this._selectText,onkeydown:this._onInputKeyDown,scale:"s",type:"text",value:this._rawDisplayValue,onCalciteInputInput:this._onInput}),o("div",{class:g.inputSuffix,key:"suffix"},this._suffix),o("calcite-action",{alignment:"center",appearance:"transparent",class:g.button,compact:!0,icon:t?"lock":"unlock",label:s,onclick:this._onLockClick,scale:"s",tabIndex:-1,text:"",title:s}))}_commit({type:t,allowLockingCurrentValue:e}){const{_input:i,field:s}=this;if(!i)return;const{locked:a,inputValue:c}=s;a&&c===""?s.unlock():(e&&!a||c!=null)&&this._lock(),this.context.onCommit(i,t)}_discard(){this._input&&(this.field.inputValue=null,this.context.onDiscard(this._input))}_lock(){const{field:t}=this,e=this._parseNumber(t.inputValue),i=e!=null?t.createQuantity(e,this.context):null;t.lock(i)}_parseNumber(t){if(t==null)return null;const e=parseFloat(t);return isNaN(e)||!isFinite(e)?null:e}_toString(t){return t!=null?t.toFixed(2):rt}};l([r()],_.prototype,"field",void 0),l([r()],_.prototype,"context",void 0),l([r()],_.prototype,"mode",void 0),l([r()],_.prototype,"_initialValue",null),l([r()],_.prototype,"_formattedValue",null),l([r()],_.prototype,"_input",void 0),l([r()],_.prototype,"_rawDisplayValue",null),l([r()],_.prototype,"_suffix",null),l([r()],_.prototype,"_title",null),_=l([p("esri.views.interactive.tooltip.components.TooltipEditableField")],_);const rt="—";function R(n){const t=n.fields.filter(e=>e?.visible===!0);return t.length===0?null:o(v,null,t.map(e=>o(_,{context:n.context,field:e,key:e.id,mode:n.mode})))}let P=class extends d{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{elevation:s,visibleElements:a}=e;return o(R,{context:t,fields:[a.elevation?s:void 0],mode:i})}};P=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],P);let U=class extends d{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{elevation:s,visibleElements:a}=e;return o(R,{context:t,fields:[a.elevation?s:void 0],mode:i})}};U=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],U);let T=class extends C{constructor(n){super(n),this._onDirectionModeChange=t=>{const e=t.target.selectedItems?.[0]?.getAttribute("data-mode");this.sketchOptions.values.directionMode=e??"absolute"}}render(){const{directionMode:n}=this.sketchOptions.values,t=this.messages?.sketch,e="absolute",i="relative";return o("div",{class:dt},o("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:this._onDirectionModeChange},o("calcite-action",{alignment:"end",appearance:"transparent",icon:O[n],scale:"s",slot:"trigger",text:"",textEnabled:!1,title:t?.directionModeSelect?.title}),o("calcite-dropdown-group",{selectionMode:"single"},o("calcite-dropdown-item",{"data-mode":i,"data-testid":"tooltip-direction-mode-relative",iconStart:O.relative,key:"relative",selected:n===i},t?.directionModeSelect?.relative),o("calcite-dropdown-item",{"data-mode":e,"data-testid":"tooltip-direction-mode-absolute",iconStart:O.absolute,key:"absolute",selected:n===e},t?.directionModeSelect?.absolute))))}loadDependencies(){return nt({action:()=>y(()=>import("./chunk-Bzj8B6n2.js"),__vite__mapDeps([20,21,1,2,3,5,6,7,10,11,12,13,9,14,15])),dropdown:()=>y(()=>import("./chunk-DiojIQQj.js"),__vite__mapDeps([22,1,2,3,5,6,23,24,7,12,10,13,25])),"dropdown-item":()=>y(()=>import("./chunk-rkGucJ1Q.js"),__vite__mapDeps([26,1,2,3,5,6,27,10,9,7,14,13])),"dropdown-group":()=>y(()=>import("./chunk-B2miZ_c9.js"),__vite__mapDeps([28,1,2,3,13,27]))})}};l([S("esri/views/interactive/tooltip/t9n/Tooltip"),r()],T.prototype,"messages",void 0),l([r()],T.prototype,"sketchOptions",void 0),T=l([p("esri.views.interactive.tooltip.components.DrawHeaderActions")],T);let N=class extends d{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{area:s,distance:a,elevation:c,direction:h,visibleElements:w}=e;return o(R,{context:t,fields:[w.direction?h:void 0,w.distance?a:void 0,w.elevation?c:void 0,w.area?s:void 0],mode:i})}_renderActions(){return o(T,{sketchOptions:this.info.sketchOptions})}};N=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],N);let q=class extends d{_renderContent(){const{fieldContext:t,info:e,mode:i}=this,{distance:s,elevation:a,direction:c,totalLength:h,visibleElements:w}=e;return o(R,{context:t,fields:[w.direction?c:void 0,w.distance?s:void 0,w.elevation?a:void 0,w.totalLength?h:void 0],mode:i})}_renderActions(){return o(T,{sketchOptions:this.info.sketchOptions})}};q=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],q);let H=class extends d{_renderContent(){const{area:t,xSize:e,ySize:i,visibleElements:s}=this.info,a=this._messagesTooltip.sketch,c=this._formatters;return o(v,null,s.size&&e!=null&&i!=null?o(u,{title:a.size,value:o(k,{left:c.length(e),right:c.length(i)})}):null,s.area?o(u,{title:a.area,value:c.area(t)}):null)}};H=l([p("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],H);let K=class extends d{_renderContent(){const{angle:t,visibleElements:e}=this.info,i=this._messagesTooltip.sketch;return o(v,null,e.rotation?o(u,{title:i.rotation,value:this._formatters.angleRelative(t)}):null)}};K=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],K);let B=class extends d{_renderContent(){const t=this.info,{visibleElements:e}=t,i=this._messagesTooltip.sketch,s=this._formatters;return o(v,null,e.size?o(u,{title:i.size,value:o(k,{left:s.length(t.xSize),right:s.length(t.ySize)})}):null,e.scale?o(u,{title:i.scale,value:o(k,{left:s.scale(t.xScale),right:s.scale(t.yScale)})}):null)}};B=l([p("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],B);let G=class extends d{_renderContent(){const{area:t,distance:e,totalLength:i,visibleElements:s}=this.info,a=this._messagesTooltip.sketch,c=this._formatters;return o(v,null,s.distance?o(u,{title:a.distance,value:c.lengthRelative(e)}):null,s.area&&t!=null?o(u,{title:a.area,value:c.area(t)}):null,s.totalLength&&i!=null?o(u,{title:a.totalLength,value:c.length(i)}):null)}};G=l([p("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],G);let Z=class extends d{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,s=this._formatters;return o(v,null,e.orientation&&t.orientation!=null?o(u,{key:"orientation",title:i.orientation,value:A(t.orientation,t.rotationType,t.orientationPrecision)}):null,e.size&&t.size!=null?o(u,{key:"size",title:i.size,value:s.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};Z=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],Z);let W=class extends d{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch;return o(v,null,e.rotation&&t.rotation!=null?o(u,{key:"rotation",title:i.rotation,value:Vt(t.rotation,t.rotationType,t.rotationPrecision)}):null,e.orientation&&t.orientation!=null?o(u,{key:"orientation",title:i.orientation,value:A(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};W=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],W);let X=class extends d{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,s=this._formatters;return o(v,null,e.scale&&t.scale!=null?o(u,{key:"scale",title:i.scale,value:s.percentage(t.scale)}):null,e.size&&t.size!=null?o(u,{key:"size",title:i.size,value:s.length(t.size,t.sizeUnit,t.sizePrecision)}):null)}};X=l([p("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],X);let Y=class extends d{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,s=this._formatters;return o(v,null,e.distance?o(u,{title:i.distance,value:s.length(t.distance)}):null)}};Y=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],Y);let Q=class extends d{_renderContent(){const{info:t}=this,{visibleElements:e}=t,i=this._messagesTooltip.sketch,s=this._formatters;return o(v,null,e.distance?o(u,{title:i.distance,value:s.length(t.distance)}):null)}};Q=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],Q);let j=class extends d{_renderContent(){const{info:n}=this,{visibleElements:t}=n,e=this._messagesTooltip.sketch;return o(v,null,t.distance?o(u,{title:e.distance,value:this._formatters.verticalLengthRelative(n.distance)}):null)}};j=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],j);let J=class extends d{_renderContent(){const{distance:t,elevation:e,area:i,totalLength:s,visibleElements:a}=this.info,c=this._messagesTooltip.sketch,h=this._formatters;return o(v,null,a.distance?o(u,{title:c.distance,value:h.length(t)}):null,a.elevation&&e?.actual!=null?o(u,{title:c.elevation,value:h.verticalLength(e.actual)}):null,a.area&&i!=null?o(u,{title:c.area,value:h.area(i)}):null,a.totalLength&&s!=null?o(u,{title:c.totalLength,value:h.length(s)}):null)}};J=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],J);let tt=class extends d{_renderContent(){const{area:n,distance:t,elevation:e,totalLength:i,visibleElements:s}=this.info,a=this._messagesTooltip.sketch,c=this._formatters;return o(v,null,s.distance?o(u,{title:a.distance,value:c.lengthRelative(t)}):null,s.elevation&&e?.actual!=null?o(u,{title:a.elevation,value:c.verticalLength(e.actual)}):null,s.area&&n!=null?o(u,{title:a.area,value:c.area(n)}):null,s.totalLength&&i!=null?o(u,{title:a.totalLength,value:c.length(i)}):null)}};tt=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],tt);let et=class extends d{_renderContent(){const{distance:n,elevation:t,visibleElements:e}=this.info,i=this._messagesTooltip.sketch,s=this._formatters;return o(v,null,e.distance?o(u,{title:i.distance,value:s.verticalLengthRelative(n)}):null,e.elevation&&t?.actual!=null?o(u,{title:i.elevation,value:s.verticalLength(t.actual)}):null)}};et=l([p("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],et);function Nt(n,t){if(t==null)return null;const e=document.createElement("div");switch(t.type){case"draw-point":return new U({tooltip:n,info:t,container:e});case"draw-polygon":return new N({tooltip:n,info:t,container:e});case"draw-polyline":return new q({tooltip:n,info:t,container:e});case"draw-mesh":return new P({tooltip:n,info:t,container:e});case"draw-rectangle":return new H({tooltip:n,info:t,container:e});case"draw-circle":return new z({tooltip:n,info:t,container:e});case"extent-rotate":return new K({tooltip:n,info:t,container:e});case"extent-scale":return new B({tooltip:n,info:t,container:e});case"transform-absolute":return new Z({tooltip:n,info:t,container:e});case"transform-rotate":return new W({tooltip:n,info:t,container:e});case"transform-scale":return new X({tooltip:n,info:t,container:e});case"translate-graphic":return new Y({tooltip:n,info:t,container:e});case"translate-graphic-z":return new j({tooltip:n,info:t,container:e});case"translate-graphic-xy":return new Q({tooltip:n,info:t,container:e});case"translate-vertex":return new J({tooltip:n,info:t,container:e});case"translate-vertex-z":return new et({tooltip:n,info:t,container:e});case"translate-vertex-xy":return new tt({tooltip:n,info:t,container:e});case"reshape-edge-offset":return new G({tooltip:n,info:t,container:e})}}const qt={base:`${m}`};let b=class extends ut{constructor(n){super(n),this.info=null,this.positionMode="follow-cursor",this.content=null,this.contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(qt.base),gt(t),t})()}initialize(){const{contentContainer:n}=this;this.addHandles([L(()=>this.view.overlay?.surface,t=>{n.remove(),t?.appendChild(n)},F),L(()=>this.info,(t,e)=>{if(this.content!=null&&t!=null&&e!=null&&t.type===e.type)this.content.info=t;else{this.content=ot(this.content);const i=Nt(this,t);i&&(this.content=i,i.container&&n.appendChild(i.container))}},F),L(()=>({container:this.contentContainer,content:this.content,screenPoint:this._screenPoint,positionMode:this.positionMode}),Ht,F)])}destroy(){this.info=null,this.content=ot(this.content),this.contentContainer.remove()}get mode(){return this.content?.mode??"feedback"}get test(){return{visible:this.contentContainer?.style.display!=="none"}}get _screenPoint(){const n=this.view.inputManager;return n?.multiTouchActive?null:n?.latestPointerLocation}clear(){this.info=null}async enterInputMode(n){await this.content?.enterInputMode(n)}async exitInputMode(){await this.content?.exitInputMode()}};function Ht({container:n,content:t,screenPoint:e,positionMode:i}){const{style:s}=n;if(i!=="fixed")if(e!=null&&t!=null){s.display="block";const a=yt(n),c=`translate(${Math.round(e.x)+ct[0]*(a?-1:1)}px, ${Math.round(e.y)+ct[1]}px)`;s.transform=a?`translate(-100%, 0) ${c}`:c}else s.display="none"}l([r({nonNullable:!0})],b.prototype,"view",void 0),l([r()],b.prototype,"info",void 0),l([r()],b.prototype,"positionMode",void 0),l([r()],b.prototype,"content",void 0),l([r()],b.prototype,"mode",null),l([r()],b.prototype,"contentContainer",void 0),l([r()],b.prototype,"_screenPoint",null),b=l([p("esri.views.interactive.tooltip.Tooltip")],b);const ct=[20,20];export{x as r,b as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-BpSIhbdh.js","assets/chunks/chunk-JaFSy54E.js","assets/chunks/chunk-D_yTKJJf.js","assets/chunks/chunk-FKPdDv5g.js","assets/chunks/chunk-q_PQRel_.js","assets/chunks/chunk-KpjT5smq.js","assets/chunks/chunk-Cgw_FQNn.js","assets/chunks/chunk-DWn0iDP1.js","assets/chunks/chunk-CcwNhX4u.js","assets/chunks/chunk-CiBiWYk6.js","assets/chunks/chunk-BZpHCn62.js","assets/chunks/chunk-CkHPqocx.js","assets/chunks/chunk-wu7cp3Vu.js","assets/chunks/chunk-UJCnt902.js","assets/chunks/chunk-BrKBxYer.js","assets/chunks/chunk-BlFkxr7f.js","assets/chunks/chunk-C5aKWx6X.js","assets/chunks/chunk-kK3-1xPu.js","assets/chunks/chunk-5V6tHgO4.js","assets/chunks/chunk-DPB6rboV.js","assets/chunks/chunk-Bzj8B6n2.js","assets/chunks/chunk-BZnjAWBi.js","assets/chunks/chunk-DiojIQQj.js","assets/chunks/chunk-B3vfoXl4.js","assets/chunks/chunk-Bd3Yf8RP.js","assets/chunks/chunk-DqFdyfRH.js","assets/chunks/chunk-rkGucJ1Q.js","assets/chunks/chunk-Bp-OEmoF.js","assets/chunks/chunk-B2miZ_c9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
