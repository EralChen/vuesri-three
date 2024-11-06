import{p as n,H as s,an as a,h as t,a as r}from"./chunk-JaFSy54E.js";import{e as l,t as d}from"./chunk-KpjT5smq.js";import{c as h,d as b,H as m}from"./chunk-q_PQRel_.js";import{c as p,d as u,u as k,I as v}from"./chunk-DWn0iDP1.js";import{i as f}from"./chunk-wu7cp3Vu.js";import{c as g,d as w,g as y}from"./chunk-CcwNhX4u.js";import{c as x,s as z,a as C}from"./chunk-BZpHCn62.js";import"./chunk-D_yTKJJf.js";import"./chunk-FKPdDv5g.js";import"./chunk-Cgw_FQNn.js";import"./chunk-CiBiWYk6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const E=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,o=n(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=a(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&f(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await x(this),l(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){p(this),g(this),h(this)}componentWillLoad(){z(this)}componentDidLoad(){C(this)}disconnectedCallback(){u(this),w(this),b(this)}componentDidRender(){k(this)}render(){return t(r,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t(v,{disabled:this.disabled},t("div",{"aria-checked":d(this.checked),"aria-label":y(this),class:"container",role:"switch",tabIndex:0,ref:this.setSwitchEl},t("div",{class:"track"},t("div",{class:"handle"})),t(m,{component:this}))))}get el(){return this}static get style(){return E}},[1,"calcite-switch",{disabled:[516],form:[513],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function i(){if(typeof customElements>"u")return;["calcite-switch"].forEach(e=>{switch(e){case"calcite-switch":customElements.get(e)||customElements.define(e,o);break}})}i();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const U=o,W=i;export{U as CalciteSwitch,W as defineCustomElement};
