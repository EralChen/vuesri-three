const d="modulepreload",m=function(l){return"/vuesri-three/"+l},c={},E=function(u,i,f){let a=Promise.resolve();if(i&&i.length>0){const r=document.getElementsByTagName("link");a=Promise.all(i.map(e=>{if(e=m(e),e in c)return;c[e]=!0;const n=e.endsWith(".css"),h=n?'[rel="stylesheet"]':"";if(!!f)for(let s=r.length-1;s>=0;s--){const o=r[s];if(o.href===e&&(!n||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":d,n||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),n)return new Promise((s,o)=>{t.addEventListener("load",s),t.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${e}`)))})}))}return a.then(()=>u()).catch(r=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r})};export{E as _};