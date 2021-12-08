import{V as t,W as e,C as n}from"./vendor.bfa827da.js";function r(t){const e=t-1;return e*e*e+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */const[o,a]=function(n){var{fallback:o}=n,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(n,["fallback"]);const i=new Map,s=new Map;function c(n,i,s){return(c,l)=>(n.set(l.key,{rect:c.getBoundingClientRect()}),()=>{if(i.has(l.key)){const{rect:n}=i.get(l.key);return i.delete(l.key),function(n,o,i){const{delay:s=0,duration:c=(t=>30*Math.sqrt(t)),easing:l=r}=e(e({},a),i),f=o.getBoundingClientRect(),p=n.left-f.left,u=n.top-f.top,y=n.width/f.width,d=n.height/f.height,g=Math.sqrt(p*p+u*u),h=getComputedStyle(o),b="none"===h.transform?"":h.transform,m=+h.opacity;return{delay:s,duration:t(c)?c(g):c,easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${t*m};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${b} translate(${e*p}px,${e*u}px) scale(${t+(1-t)*y}, ${t+(1-t)*d});\n\t\t\t`}}(n,c,l)}return n.delete(l.key),o&&o(c,l,s)})}return[c(s,i,!1),c(i,s,!0)]}({}),i=n({send:o,receive:a});export{i as t};
