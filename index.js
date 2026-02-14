import{a as m,S as f,i}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="46160270-245e238467519bdf1432473a7",y="https://pixabay.com/api/";function h(r){const o={key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(y,{params:o}).then(n=>n.data)}let b=new f(".gallery a.gallery-link",{captionsData:"alt",captionDelay:250});function L(r){const o=document.querySelector(".gallery"),n=r.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:u,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img 
            src="${a}" 
            alt="${t}" 
            loading="lazy"
          />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${s}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${u}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${d}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${p}</span>
          </p>
        </div>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",n),b.refresh()}function S(){const r=document.querySelector(".gallery");r.innerHTML=""}function q(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const v=document.querySelector(".form"),c=document.querySelector('input[name="search-text"]');v.addEventListener("submit",w);function w(r){r.preventDefault();const o=c.value.trim();if(o===""){i.warning({message:"Please enter a search query!",position:"topRight"});return}S(),q(),h(o).then(n=>{if(l(),n.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(n.hits),c.value=""}).catch(n=>{l(),i.error({message:"Something went wrong. Please try again later!",position:"topRight"}),console.error("Error fetching images:",n)})}
//# sourceMappingURL=index.js.map
