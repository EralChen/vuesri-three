import{p as v,H as D,an as a,h as i,a as E}from"./chunk-JaFSy54E.js";import{t as x}from"./chunk-KpjT5smq.js";import{C as t}from"./chunk-Bp-OEmoF.js";import{c as y,s as C,a as z}from"./chunk-BZpHCn62.js";import{g as c}from"./chunk-CiBiWYk6.js";import{u as S,I as q}from"./chunk-DWn0iDP1.js";import{d as R}from"./chunk-BrKBxYer.js";import"./chunk-D_yTKJJf.js";import"./chunk-FKPdDv5g.js";import"./chunk-Cgw_FQNn.js";import"./chunk-UJCnt902.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const A=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container--link .dropdown-link,:host(:active:not([disabled])) .container--link .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-color-brand)}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,h=v(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownItemSelect=a(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=a(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=a(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=a(this,"calciteInternalDropdownCloseRequest",6),this.disabled=!1,this.href=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.label=void 0,this.rel=void 0,this.selected=!1,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){await y(this),this.el?.focus()}componentWillLoad(){C(this),this.initialize()}componentDidLoad(){z(this)}connectedCallback(){this.initialize()}componentDidRender(){S(this)}render(){const{href:e,selectionMode:n,label:l,iconFlipRtl:o,scale:g}=this,s=i("calcite-icon",{class:t.iconStart,flipRtl:o==="start"||o==="both",icon:this.iconStart,scale:c(this.scale)}),r=i("span",{class:t.itemContent},i("slot",null)),d=i("calcite-icon",{class:t.iconEnd,flipRtl:o==="end"||o==="both",icon:this.iconEnd,scale:c(this.scale)}),m=this.iconStart&&this.iconEnd?[s,r,d]:this.iconStart?[s,r]:this.iconEnd?[r,d]:r,w=e?i("a",{"aria-label":l,class:t.link,href:e,rel:this.rel,tabIndex:-1,target:this.target,ref:I=>this.childLink=I},m):m,b=e?null:n==="single"?"menuitemradio":n==="multiple"?"menuitemcheckbox":"menuitem",k=n!=="none"?x(this.selected):null,{disabled:p}=this;return i(E,{"aria-checked":k,"aria-label":e?"":l,role:b,tabIndex:p?-1:0},i(q,{disabled:p},i("div",{class:{[t.container]:!0,[t.containerLink]:!!e,[`${t.container}--${g}`]:!0,[t.containerMulti]:n==="multiple",[t.containerSingle]:n==="single",[t.containerNone]:n==="none"}},n!=="none"?i("calcite-icon",{class:t.icon,icon:n==="multiple"?"check":"bullet-point",scale:c(this.scale)}):null,w)))}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),this.selectionMode==="none"&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1;break}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return this}static get style(){return A}},[1,"calcite-dropdown-item",{disabled:[516],href:[513],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],label:[1],rel:[513],selected:[1540],target:[513],selectionMode:[1,"selection-mode"],scale:[1],setFocus:[64]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"],[16,"calciteInternalDropdownItemChange","updateActiveItemOnChange"]]]);function u(){if(typeof customElements>"u")return;["calcite-dropdown-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-dropdown-item":customElements.get(e)||customElements.define(e,h);break;case"calcite-icon":customElements.get(e)||R();break}})}u();const T=h,W=u;export{T as CalciteDropdownItem,W as defineCustomElement};
