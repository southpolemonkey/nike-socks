var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e,t={}){let n=`s`+a++,{flip:o=!1,stripes:s=!0}=t;return`
<svg class="sock" viewBox="0 0 240 248" role="img" aria-label="Sock in ${e.name}"
     style="${o?`transform:scaleX(-1)`:``}">
  <defs>
    <clipPath id="clip-${n}"><path d="${r}"/></clipPath>
    <linearGradient id="sh-${n}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity=".34"/>
      <stop offset=".35" stop-color="#fff" stop-opacity=".16"/>
      <stop offset=".72" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity=".3"/>
    </linearGradient>
    <pattern id="rib-${n}" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect width="3.2" height="8" fill="#000" opacity=".14"/>
    </pattern>
    <pattern id="knit-${n}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="6" height="2.2" fill="#fff" opacity=".07"/>
    </pattern>
  </defs>

  <g clip-path="url(#clip-${n})">
    <rect width="240" height="248" fill="${e.body}"/>
    <rect width="240" height="248" fill="url(#knit-${n})"/>

    <!-- heel cap -->
    <circle cx="172" cy="194" r="52" fill="${e.cuff}"/>
    <!-- toe cap -->
    <rect x="0" y="150" width="48" height="98" fill="${e.cuff}"/>
    <rect x="48" y="150" width="5" height="98" fill="${e.accent}"/>
    <!-- footbed cushion -->
    <rect x="0" y="214" width="240" height="34" fill="#000" opacity=".16"/>

    <!-- cuff -->
    <rect x="70" y="0" width="100" height="52" fill="${e.cuff}"/>
    <rect x="70" y="0" width="100" height="52" fill="url(#rib-${n})"/>
    ${s?`<rect x="70" y="52" width="100" height="10" fill="${e.stripe}"/>
           <rect x="70" y="68" width="100" height="5" fill="${e.accent}"/>
           <rect x="70" y="79" width="100" height="10" fill="${e.stripe}"/>`:``}

    <!-- ribbed leg texture -->
    <rect x="70" y="89" width="100" height="70" fill="url(#rib-${n})" opacity=".35"/>

    <rect width="240" height="248" fill="url(#sh-${n})"/>
  </g>

  <path d="${r}" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="2.5"/>

  <!-- swoosh -->
  <g transform="translate(94 112) scale(2)" fill="${e.mark}">
    <path d="${i}"/>
  </g>
</svg>`}var r,i,a,o,s=e((()=>{r=`M78,12 H158 V158 C158,184 155,204 147,216 C140,227 127,232 110,232 H58 C32,232 16,220 16,203 C16,186 31,178 51,175 C69,172 78,162 78,146 Z`,i=`M23.7.3 6.2 7.8C4.7 8.4 3.5 8.7 2.5 8.7 1.3 8.7.5 8.2.2 7.3 0 6.7 0 6 .3 5.2.6 4.4 1 3.7 1.7 2.9c-.3.6-.6 1.5-.2 2.2.3.5.9.8 1.8.8.7 0 1.5-.2 2.4-.5L23.7.3Z`,a=0,o=[{name:`Volt Strike`,body:`#d8ff00`,cuff:`#08080a`,stripe:`#08080a`,accent:`#ff1f8f`,mark:`#08080a`,hex:`#d8ff00`},{name:`Hyper Pink`,body:`#ff1f8f`,cuff:`#fff`,stripe:`#08080a`,accent:`#d8ff00`,mark:`#fff`,hex:`#ff1f8f`},{name:`Laser Cyan`,body:`#00e9ff`,cuff:`#08080a`,stripe:`#fff`,stripeAlt:`#000`,accent:`#ff5c00`,mark:`#08080a`,hex:`#00e9ff`},{name:`Solar Flare`,body:`#ff5c00`,cuff:`#08080a`,stripe:`#d8ff00`,accent:`#00e9ff`,mark:`#fff`,hex:`#ff5c00`},{name:`Ultraviolet`,body:`#8b5cff`,cuff:`#d8ff00`,stripe:`#08080a`,accent:`#00e9ff`,mark:`#d8ff00`,hex:`#8b5cff`},{name:`Blackout`,body:`#141418`,cuff:`#08080a`,stripe:`#d8ff00`,accent:`#ff1f8f`,mark:`#d8ff00`,hex:`#1d1d22`}]}));t((()=>{s();var e=[`Free shipping over $50`,`★ 4.9 / 12,408 reviews`,`Member early access`,`Dri-FIT technology`,`60-day no-blister guarantee`];document.getElementById(`tickerTrack`).innerHTML=[,,,,].fill(e.map(e=>`<span>${e}</span>`).join(`<span>/</span>`)).join(`<span>/</span>`);var t=[`Max Cushion`,`Dri-FIT`,`Arch Lock`,`Zero Blister`,`Built For Miles`];document.getElementById(`marqueeTrack`).innerHTML=[,,,,].fill(`<span>${t.join(`<em></em>`)}<em></em></span>`).join(``);var r=document.getElementById(`heroSock`);function i(e){r.innerHTML=n(o[e]),r.animate([{transform:`scale(.9) rotate(-6deg)`,opacity:0},{transform:`none`,opacity:1}],{duration:450,easing:`cubic-bezier(.16,1,.3,1)`})}i(0);var a=document.querySelector(`.hero__art`);a.addEventListener(`pointermove`,e=>{let t=a.getBoundingClientRect(),n=(e.clientX-t.left)/t.width-.5,i=(e.clientY-t.top)/t.height-.5;r.style.transform=`perspective(900px) rotateY(${n*18}deg) rotateX(${-i*14}deg) translateZ(20px)`,r.style.animation=`none`}),a.addEventListener(`pointerleave`,()=>{r.style.transform=``,r.style.animation=``});var c=document.getElementById(`nav`);addEventListener(`scroll`,()=>c.classList.toggle(`is-stuck`,scrollY>40),{passive:!0});var l=document.getElementById(`bagCount`),u=document.getElementById(`bag`),d=document.getElementById(`drawer`),f=document.getElementById(`scrim`),p=document.getElementById(`bagItems`),m=document.getElementById(`bagTotal`),h=document.getElementById(`toast`),g=[];function _(e){g.push(e),v(),u.classList.remove(`pop`),u.offsetWidth,u.classList.add(`pop`)}function v(){if(l.textContent=g.length,m.textContent=`$`+g.reduce((e,t)=>e+t.price,0),!g.length){p.innerHTML=`<p class="bag-empty">Empty. <a href="#build" data-close-bag>Build a pack</a></p>`;return}p.innerHTML=g.map((e,t)=>`<div class="bag-row">
        <span class="bag-sw" style="background:${e.hex}"></span>
        <div><h3>${e.name}</h3><p>${e.meta}</p></div>
        <div style="text-align:right"><b>$${e.price}</b><br><button data-rm="${t}">Remove</button></div>
      </div>`).join(``)}function y(){d.classList.add(`open`),d.setAttribute(`aria-hidden`,`false`),f.hidden=!1}function b(){d.classList.remove(`open`),d.setAttribute(`aria-hidden`,`true`),f.hidden=!0}function x(e){h.hidden=!1,h.textContent=e,clearTimeout(x.t),x.t=setTimeout(()=>h.hidden=!0,2200)}u.onclick=y,document.getElementById(`closeBag`).onclick=b,f.onclick=()=>{b(),w()},p.addEventListener(`click`,e=>{e.target.dataset.closeBag!=null&&b(),e.target.dataset.rm!=null&&(g.splice(+e.target.dataset.rm,1),v())}),document.getElementById(`checkout`).onclick=()=>{if(!g.length){x(`Bag is empty`);return}g.length=0,v(),b(),x(`Locked in · ships in 2 days`)},v();var S=document.getElementById(`menuBtn`),C=document.getElementById(`navLinks`);function w(){C.classList.remove(`open`),S.setAttribute(`aria-expanded`,`false`)}S.onclick=()=>{let e=C.classList.toggle(`open`);S.setAttribute(`aria-expanded`,String(e))},C.querySelectorAll(`a`).forEach(e=>e.addEventListener(`click`,w));var T=document.getElementById(`stageSockA`),E=document.getElementById(`stageSockB`),D=document.querySelector(`.build__stage`),O=document.getElementById(`cwName`),k=document.getElementById(`swatches`),A=document.getElementById(`stock`),j=[{label:`M`,note:`US 6–8`},{label:`L`,note:`US 8–10`},{label:`XL`,note:`US 10–12`},{label:`XXL`,note:`US 12–14`}],M=[{label:`3 pairs`,price:28,note:`Starter`},{label:`6 pairs`,price:48,note:`Save 14%`},{label:`12 pairs`,price:84,note:`Save 25%`}],N={cw:0,size:1,pack:0};o.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`sw`+(t===0?` on`:``),n.style.background=`linear-gradient(135deg,${e.body} 0 66%,${e.accent} 66% 100%)`,n.style.color=e.hex,n.title=e.name,n.setAttribute(`aria-label`,e.name),n.onclick=()=>{N.cw=t,[...k.children].forEach((e,n)=>e.classList.toggle(`on`,n===t)),L(),i(t)},k.appendChild(n)});var P=document.getElementById(`sizes`);j.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`chip`+(t===N.size?` on`:``),n.innerHTML=`${e.label}<small>${e.note}</small>`,n.onclick=()=>{N.size=t,[...P.children].forEach((e,n)=>e.classList.toggle(`on`,n===t))},P.appendChild(n)});var F=document.getElementById(`packs`);M.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`chip`+(t===N.pack?` on`:``),n.innerHTML=`${e.label}<small>${e.note}</small>`,n.onclick=()=>{N.pack=t,[...F.children].forEach((e,n)=>e.classList.toggle(`on`,n===t)),I()},F.appendChild(n)});function I(){document.getElementById(`total`).textContent=`$`+M[N.pack].price}function L(){let e=o[N.cw];T.innerHTML=n(e),E.innerHTML=n(e,{flip:!0}),O.textContent=e.name,D.style.background=`radial-gradient(60% 55% at 50% 55%,${e.hex}33,#101014 72%)`,A.textContent=120+N.cw*47,[T,E].forEach((e,t)=>e.animate([{transform:`translateY(24px) scale(.94)`,opacity:0},{transform:`none`,opacity:1}],{duration:520,delay:t*70,easing:`cubic-bezier(.16,1,.3,1)`,fill:`backwards`}))}L(),I(),document.getElementById(`addBtn`).onclick=e=>{let t=o[N.cw],n=M[N.pack];_({name:t.name,meta:`${n.label} · ${j[N.size].label}`,price:n.price,hex:t.hex});let r=e.currentTarget,i=r.textContent;r.textContent=`Added ✓`,setTimeout(()=>r.textContent=i,1100)};var R=[{cw:0,name:`Elite Crew — Volt Strike`,meta:`Max cushion · 3 pairs`,price:28,badge:`Best seller`,bc:`hot`},{cw:1,name:`Elite Crew — Hyper Pink`,meta:`Max cushion · 3 pairs`,price:28,badge:`New`,bc:`new`},{cw:2,name:`Everyday — Laser Cyan`,meta:`Light cushion · 3 pairs`,price:24,badge:``,bc:``},{cw:3,name:`Trail — Solar Flare`,meta:`Max cushion · 3 pairs`,price:32,badge:`Limited`,bc:`hot`},{cw:4,name:`Elite Crew — Ultraviolet`,meta:`Max cushion · 3 pairs`,price:28,badge:`New`,bc:`new`},{cw:5,name:`Everyday — Blackout`,meta:`Light cushion · 3 pairs`,price:22,badge:``,bc:``}];document.getElementById(`products`).innerHTML=R.map((e,t)=>{let r=o[e.cw];return`<article class="prod reveal" style="--c:${r.hex};transition-delay:${t*60}ms">
    ${e.badge?`<span class="prod__badge prod__badge--${e.bc}">${e.badge}</span>`:``}
    <div class="prod__media">${n(r)}</div>
    <div class="prod__body">
      <h3 class="prod__name">${e.name}</h3>
      <p class="prod__meta">${e.meta}</p>
      <div class="prod__foot">
        <span class="prod__price">$${e.price}</span>
        <button class="prod__add" data-add="${t}">Add</button>
      </div>
    </div>
  </article>`}).join(``),document.querySelectorAll(`[data-add]`).forEach(e=>e.addEventListener(`click`,()=>{let t=R[+e.dataset.add],n=o[t.cw];_({name:t.name,meta:t.meta,price:t.price,hex:n.hex}),e.classList.add(`done`),e.textContent=`Added`,setTimeout(()=>{e.classList.remove(`done`),e.textContent=`Add`},1100)}));var z=[{t:`I bought three packs and threw every other sock I own in the bin. The arch band is witchcraft.`,n:`Marcus D.`,r:`Verified — size XL`,c:`#d8ff00`},{t:`12-hour warehouse shifts, no hot spots, no slipping down the heel. That never happens.`,n:`Tev A.`,r:`Verified — size L`,c:`#ff1f8f`},{t:`Bright enough that my group ride actually asked where I got them. Cushion is unreal.`,n:`Jonah R.`,r:`Verified — size M`,c:`#00e9ff`},{t:`Washed them maybe forty times. Still thick, still loud, still no holes in the toe.`,n:`Priyan S.`,r:`Verified — size XXL`,c:`#ff5c00`}];document.getElementById(`quotes`).innerHTML=z.map((e,t)=>`<blockquote class="quote reveal" style="transition-delay:${t*70}ms">
    <div class="quote__stars">★★★★★</div>
    <p>“${e.t}”</p>
    <footer><span class="avatar" style="background:${e.c}">${e.n[0]}</span><span>${e.n}<br>${e.r}</span></footer>
  </blockquote>`).join(``),document.getElementById(`ctaSocks`).innerHTML=[1,2,4,5].map(e=>`<div>${n(o[e])}</div>`).join(``);var B=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`in`),B.unobserve(e.target))}),{rootMargin:`0px 0px -8% 0px`,threshold:.08});document.querySelectorAll(`.reveal`).forEach(e=>B.observe(e)),setTimeout(()=>document.querySelectorAll(`.reveal`).forEach(e=>e.classList.add(`in`)),1800);var V=document.getElementById(`progress`);addEventListener(`scroll`,()=>{let e=document.documentElement.scrollHeight-innerHeight;V.style.width=(e>0?scrollY/e*100:0)+`%`},{passive:!0})}))();