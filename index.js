import{S as v,N as f,K as S,A as g,a as y,i as k}from"./assets/vendor-BR-JF9Rk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();new v(".proj-swiper",{modules:[f,S],speed:500,navigation:{disabledClass:"proj-btn-disabled",nextEl:".proj-swiper-button-next",prevEl:".proj-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:20,breakpoints:{375:{slidesPerView:1,spaceBetween:200},768:{slidesPerView:1,spaceBetween:390},1440:{slidesPerView:1,spaceBetween:1e3}}});const q=document.querySelector(".burger"),P=document.querySelector(".close-menu"),L=document.querySelector(".menu-overlay"),x=document.querySelector(".nav-list-modal"),c=document.querySelector(".nav-tab"),C=document.querySelector(".menu"),F=document.querySelector(".nav-list"),M=document.querySelector(".work-together");q.addEventListener("click",I);function I(){L.classList.add("is-open"),document.body.classList.add("no-scroll")}P.addEventListener("click",h);function h(){L.classList.remove("is-open"),document.body.classList.remove("no-scroll")}M.addEventListener("click",h);x.addEventListener("click",O);function O(e){e.target.classList.contains("nav-link")&&(L.classList.remove("is-open"),document.body.classList.remove("no-scroll"))}C.addEventListener("click",j);function j(){if(!c.classList.contains("visually-hidden")){setTimeout(()=>{c.classList.add("visually-hidden")},250);return}setTimeout(()=>{c.classList.remove("visually-hidden")},250)}F.addEventListener("click",V);function V(e){e.target.classList.contains("nav-link")&&(c.classList.contains("visually-hidden")||c.classList.add("visually-hidden"))}document.addEventListener("DOMContentLoaded",function(){new g(".accordion-info-about-me-list",{duration:300,showMultiple:!0,openOnInit:[0]})});document.querySelector(".first-element-about");new v(".skills",{slidesPerView:2,loop:!0,loopedSlides:6,slidesPerGroup:1,spaceBetween:0,navigation:{nextEl:".btn-next"},modules:[f],keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,watchOverflow:!1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});document.addEventListener("DOMContentLoaded",function(){new g(".accordion-container",{showMultiple:!0,duration:300})});const B=document.querySelector(".covers"),b=document.createElement("style");b.textContent=`
    @keyframes running-animation {
      0% {
        transform: translateZ(0);
      }
      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }
      `;const A={root:null,rootMargin:"0px",threshold:0},D=new IntersectionObserver(N,A);function N(){document.head.appendChild(b)}D.observe(B);new v(".reviews-container-ul",{slidesPerView:1,loopedSlides:6,slidesPerGroup:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next-control",prevEl:".swiper-button-prev-control"},modules:[f],keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,watchOverflow:!1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const T=document.getElementById("reviews-list"),$=async()=>{try{const{data:s}=await y.get("https://portfolio-js.b.goit.study/api/reviews");console.log(s),s.map(n=>{const r=document.createElement("li");r.classList.add("swiper-slide"),r.classList.add("bomba");const t=document.createElement("img");t.src=n.avatar_url,t.alt=`${n.author}'s avatar`;const o=document.createElement("h2");o.textContent=n.author;const l=document.createElement("p");l.textContent=n.review,r.classList.add("swiper-slide"),r.appendChild(t),r.appendChild(o),r.appendChild(l),T.appendChild(r)})}catch{e("Failed to load reviews. Please try again later.")}const e=s=>{const n=document.getElementById("error-container");n.textContent=s,n.style.display="block",n.style.color="red",n.style.textAlign="center"}};$();const a=document.querySelector("#work-together-input-email"),K=document.querySelector("#work-together-input-comments"),m=document.querySelector(".email-succes"),p=document.querySelector(".email-invalid"),w=document.querySelector(".footer-form"),d=document.querySelector(".modal-backdrop-footer"),z=document.querySelector(".modal-footer"),u="work-together";let i={email:"",comments:""};y.defaults.baseURL="https://portfolio-js.b.goit.study";if(localStorage.getItem(u)){const e=localStorage.getItem(u);i=JSON.parse(e),K.value=i.comments,a.value=i.email}a.addEventListener("input",E);a.addEventListener("focus",E);w.addEventListener("input",R);w.addEventListener("submit",Z);a.addEventListener("blur",e=>{e.preventDefault(),m.classList.add("visually-hidden"),p.classList.add("visually-hidden"),a.classList.remove("input-succes-js"),a.classList.remove("input-invalid-js")});function E(e){e.preventDefault(),m.classList.add("visually-hidden"),p.classList.add("visually-hidden"),a.classList.remove("input-succes-js"),a.classList.remove("input-invalid-js"),e.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/)?(m.classList.remove("visually-hidden"),a.classList.add("input-succes-js")):(p.classList.remove("visually-hidden"),a.classList.add("input-invalid-js"))}function R(e){e.preventDefault(),e.target.name==="client-email"?i.email=e.target.value.trim():e.target.name==="client-comments"&&(i.comments=e.target.value.trim()),localStorage.setItem(u,JSON.stringify(i))}async function Z(e){e.preventDefault(),await y.post("/api/requests",{email:i.email,comment:i.comments}).then(function(s){localStorage.removeItem(u),w.reset(),i={email:"",comments:""};const n=document.querySelector(".modal-footer-title"),r=document.querySelector(".modal-footer-text");n.remove(),r.remove();const t=`
        <p class="modal-footer-title">${s.data.title}</p>
            <p class="modal-footer-text">${s.data.message}</p>
        `;z.insertAdjacentHTML("beforeend",t),d.classList.remove("modal-backdrop-footer-closed"),d.addEventListener("click",G),document.addEventListener("keydown",o=>{o.key==="Escape"&&d.classList.add("modal-backdrop-footer-closed")})}).catch(function(s){console.log(s),k.error({title:"Error",message:"Something went wrong",position:"center"})})}function G(e){e.preventDefault(),d.classList.add("modal-backdrop-footer-closed")}
//# sourceMappingURL=index.js.map
