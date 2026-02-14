import{a as m,S as p,i}from"./assets/vendor-DQiTczw4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="46160270-245e238467519bdf1432473a7",y="https://pixabay.com/api/";function h(o){const t={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(y,{params:t}).then(a=>a.data)}let b=new p(".gallery a.gallery-link",{captionsData:"alt",captionDelay:250});function C(o){const t=document.querySelector(".gallery"),a=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:f,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img 
            src="${s}" 
            alt="${r}" 
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${n}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${f}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${u}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${d}</span>
          </p>
        </div>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",a),b.refresh()}function L(){const o=document.querySelector(".gallery");o.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const q=document.querySelector(".form"),c=document.querySelector('input[name="search-text"]');q.addEventListener("submit",v);function v(o){o.preventDefault();const t=c.value.trim();if(t===""){i.show({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#ffc107",titleColor:"#000",messageColor:"#000",iconColor:"#000",theme:"light",icon:"ico-warning"});return}L(),S(),h(t).then(a=>{if(l(),a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fafafb",messageColor:"#fafafb",iconColor:"#fafafb",progressBarColor:"#ffbebe"});return}C(a.hits),c.value=""}).catch(a=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fafafb",messageColor:"#fafafb",iconColor:"#fafafb",progressBarColor:"#ffbebe"}),console.error("Error fetching images:",a)})}
//# sourceMappingURL=index.js.map
