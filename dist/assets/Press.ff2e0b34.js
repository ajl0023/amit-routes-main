var t=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n;import{a4 as r,C as a,S as o,i as l,s as m,e as c,h as p,M as d,j as u,k as g,w as f,n as h,l as y,E as w,p as v,o as x,G as _,c as b,m as j,t as P,a as S,d as k,f as $,A as q,x as M,D as O}from"./vendor.ad3114cc.js";import{t as G}from"./index.b497fdcf.js";const N=(t,e,s,n,i)=>(t-e)*(i-n)/(s-e)+n,X=(t,e,s)=>(1-s)*t+s*e,Y=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),W=r({x:0,y:0},(t=>{function e(e){t({x:e.clientX,y:e.clientY})}return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}})),E=()=>{const{subscribe:t,set:r,update:o}=a({xStart:0,yStart:0,mouseX:0,mouseY:0,tx:0,ty:0}),l={init(){o((t=>(t.xStart=Y(10,30),t.yStart=Y(10,25),t)))},getMousePos(t,e){o((s=>(s.mouseX=t,s.mouseY=e,s))),this.calcMap()},calcMap(){o((t=>(t.tx=X(t.tx,N(t.mouseX,0,window.innerWidth,t.xStart,-t.xStart),.07),t.ty=X(t.ty,N(t.mouseY,0,window.innerWidth,t.yStart,-t.yStart),.07),t)))}};return((t,r)=>{for(var a in r||(r={}))s.call(r,a)&&i(t,a,r[a]);if(e)for(var a of e(r))n.call(r,a)&&i(t,a,r[a]);return t})({subscribe:t,set:r,update:o},l)};function z(t){let e,s,n,i,r,a,o;return{c(){e=c("a"),s=c("div"),n=c("img"),p(n,"class","image svelte-qorhng"),d(n.src,i=t[0])||p(n,"src",i),p(n,"alt",""),p(s,"class","image-container svelte-qorhng"),p(e,"style",r=`transform:translateX(${t[3].tx}px) translateY(${t[3].ty}px); filter:grayscale(${t[4]})`),p(e,"class","link-container svelte-qorhng"),p(e,"href","")},m(i,r){u(i,e,r),g(e,s),g(s,n),t[8](n),a||(o=[f(s,"mouseenter",t[9]),f(s,"mouseleave",t[10]),f(e,"mouseenter",t[11]),f(e,"mouseleave",t[12]),f(e,"click",t[13])],a=!0)},p(t,[s]){1&s&&!d(n.src,i=t[0])&&p(n,"src",i),24&s&&r!==(r=`transform:translateX(${t[3].tx}px) translateY(${t[3].ty}px); filter:grayscale(${t[4]})`)&&p(e,"style",r)},i:h,o:h,d(s){s&&y(e),t[8](null),a=!1,w(o)}}}function D(t,e,s){let n,i,r;v(t,W,(t=>s(7,n=t)));let a,{img:o}=e,{link:l}=e;const m=G(1);v(t,m,(t=>s(4,r=t)));const c=E();v(t,c,(t=>s(3,i=t))),x((()=>{c.init()}));return t.$$set=t=>{"img"in t&&s(0,o=t.img),"link"in t&&s(1,l=t.link)},t.$$.update=()=>{128&t.$$.dirty&&c.getMousePos(n.x,n.y)},[o,l,a,i,r,m,c,n,function(t){_[t?"unshift":"push"]((()=>{a=t,s(2,a)}))},()=>{m.set(0)},()=>{m.set(1)},()=>{m.set(0)},()=>{m.set(1)},t=>{t.preventDefault(),window.open(l)}]}class H extends o{constructor(t){super(),l(this,t,D,z,m,{img:0,link:1})}}function A(t,e,s){const n=t.slice();return n[4]=e[s],n}function B(t,e,s){const n=t.slice();return n[7]=e[s],n[9]=s,n}function L(t){let e,s;return e=new H({props:{windowHeight:t[0],windowWidth:t[1],img:t[7].img,link:t[7].link,index:t[9]}}),{c(){b(e.$$.fragment)},m(t,n){j(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.windowHeight=t[0]),2&s&&(n.windowWidth=t[1]),e.$set(n)},i(t){s||(P(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){k(e,t)}}}function V(t){let e,s,n,i;return{c(){e=c("div"),s=c("img"),i=$(),d(s.src,n=t[4])||p(s,"src",n),p(s,"alt",""),p(s,"class","svelte-12fdfjf"),p(e,"class","text-image-container svelte-12fdfjf")},m(t,n){u(t,e,n),g(e,s),g(e,i)},p:h,d(t){t&&y(e)}}}function C(t){let e,s,n,i,r,a,o=t[2].slice(0,8),l=[];for(let c=0;c<o.length;c+=1)l[c]=L(B(t,o,c));const m=t=>S(l[t],1,1,(()=>{l[t]=null}));let d=t[3],f=[];for(let c=0;c<d.length;c+=1)f[c]=V(A(t,d,c));return{c(){e=c("div"),s=c("div"),n=c("div");for(let t=0;t<l.length;t+=1)l[t].c();i=$(),r=c("div");for(let t=0;t<f.length;t+=1)f[t].c();p(n,"class","press-container svelte-12fdfjf"),p(r,"class","text-image-wrapper svelte-12fdfjf"),p(s,"class","content-container flex-item svelte-12fdfjf"),p(e,"class","container svelte-12fdfjf")},m(t,o){u(t,e,o),g(e,s),g(s,n);for(let e=0;e<l.length;e+=1)l[e].m(n,null);g(s,i),g(s,r);for(let e=0;e<f.length;e+=1)f[e].m(r,null);a=!0},p(t,[e]){if(7&e){let s;for(o=t[2].slice(0,8),s=0;s<o.length;s+=1){const i=B(t,o,s);l[s]?(l[s].p(i,e),P(l[s],1)):(l[s]=L(i),l[s].c(),P(l[s],1),l[s].m(n,null))}for(q(),s=o.length;s<l.length;s+=1)m(s);M()}if(8&e){let s;for(d=t[3],s=0;s<d.length;s+=1){const n=A(t,d,s);f[s]?f[s].p(n,e):(f[s]=V(n),f[s].c(),f[s].m(r,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=d.length}},i(t){if(!a){for(let t=0;t<o.length;t+=1)P(l[t]);a=!0}},o(t){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)S(l[e]);a=!1},d(t){t&&y(e),O(l,t),O(f,t)}}}function I(t,e,s){let n=0,i=0;x((()=>{s(0,n=window.innerHeight),s(1,i=window.innerWidth)}));return[n,i,[{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_3_jrf0mt.jpg",link:"https://www.archiscene.net/interior-design/moment-hotel-amit-apel-design/"},{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_6_idnrik.jpg",link:"https://www.latimes.com/business/realestate/hot-property/la-fi-hotprop-outside-box-20160510-story.html"},{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_7_fqqhhs.jpg",link:"https://www.homebuilderdigest.com/the-15-best-residential-architects-in-malibu-california/"},{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380455/mainSite/press/Press_2_uiz2po.jpg",link:"http://voyagela.com/interview/meet-amit-apel-apel-design-inc-malibu/"},{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_4_pl9uqy.jpg",link:"https://www.gessi.com/it/project/design/93"},{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_5_e8oy37.jpg",link:"https://www.google.com/url?q=https://www.californiahomedesign.com/property/2015/03/27/open-house-obsession-little-holmby-looker-6495m/&sa=D&source=editors&ust=1633933659385000&usg=AOvVaw0XyO2cGSBqPsV15pNuMNcM"},{img:"https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_1_pt9bba.jpg",link:"http://voyagela.com/interview/meet-amit-apel-apel-design-inc-malibu/"}],["https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_3_PNG_jnmqzk.png","https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_2_PNG_dtejy7.png","https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_4_PNG_zqtwne.png","https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_5_PNG_ysj7nx.png","https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_PNG_se76b5.png"]]}class F extends o{constructor(t){super(),l(this,t,I,C,m,{})}}export{F as default};