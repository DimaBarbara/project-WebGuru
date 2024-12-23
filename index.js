import{S as p,N as f,K as h,A as b,a as v,i as L}from"./assets/vendor-BR-JF9Rk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();new p(".proj-swiper",{modules:[f,h],speed:500,navigation:{disabledClass:"proj-btn-disabled",nextEl:".proj-swiper-button-next",prevEl:".proj-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:20,breakpoints:{375:{slidesPerView:1,spaceBetween:200},768:{slidesPerView:1,spaceBetween:390},1440:{slidesPerView:1,spaceBetween:1e3}}});document.addEventListener("DOMContentLoaded",function(){new b(".accordion-info-about-me-list",{duration:300,showMultiple:!0,openOnInit:[0]})});document.querySelector(".first-element-about");new p(".skills",{slidesPerView:2,loop:!0,loopedSlides:6,slidesPerGroup:1,spaceBetween:0,navigation:{nextEl:".btn-next"},modules:[f],keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,watchOverflow:!1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const E=document.querySelector(".covers"),y=document.createElement("style");y.textContent=`
    @keyframes running-animation {
      0% {
        transform: translateZ(0);
      }
      100% {
        transform: translate3d(-100%, 0, 0);
      }
    }
      `;const S={root:null,rootMargin:"0px",threshold:0},P=new IntersectionObserver(k,S);function k(){document.head.appendChild(y)}P.observe(E);new p(".reviews-container-ul",{slidesPerView:1,loopedSlides:6,slidesPerGroup:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next-control",prevEl:".swiper-button-prev-control"},modules:[f],keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,watchOverflow:!1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const x=document.getElementById("reviews-list"),C=async()=>{try{const{data:s}=await v.get("https://portfolio-js.b.goit.study/api/reviews");console.log(s),s.map(r=>{const n=document.createElement("li");n.classList.add("swiper-slide");const e=document.createElement("img");e.src=r.avatar_url,e.alt=`${r.author}'s avatar`;const o=document.createElement("h2");o.textContent=r.author;const l=document.createElement("p");l.textContent=r.review,n.classList.add("swiper-slide"),n.appendChild(e),n.appendChild(o),n.appendChild(l),x.appendChild(n)})}catch{t("Failed to load reviews. Please try again later.")}const t=s=>{const r=document.getElementById("error-container");r.textContent=s,r.style.display="block",r.style.color="red",r.style.textAlign="center"}};C();const a=document.querySelector("#work-together-input-email"),I=document.querySelector("#work-together-input-comments"),u=document.querySelector(".email-succes"),m=document.querySelector(".email-invalid"),w=document.querySelector(".footer-form"),c=document.querySelector(".modal-backdrop-footer"),j=document.querySelector(".modal-footer"),d="work-together";let i={email:"",comments:""};v.defaults.baseURL="https://portfolio-js.b.goit.study";if(localStorage.getItem(d)){const t=localStorage.getItem(d);i=JSON.parse(t),I.value=i.comments,a.value=i.email}a.addEventListener("input",g);a.addEventListener("focus",g);w.addEventListener("input",q);w.addEventListener("submit",O);a.addEventListener("blur",t=>{t.preventDefault(),u.classList.add("visually-hidden"),m.classList.add("visually-hidden"),a.classList.remove("input-succes-js"),a.classList.remove("input-invalid-js")});function g(t){t.preventDefault(),u.classList.add("visually-hidden"),m.classList.add("visually-hidden"),a.classList.remove("input-succes-js"),a.classList.remove("input-invalid-js"),t.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/)?(u.classList.remove("visually-hidden"),a.classList.add("input-succes-js")):(m.classList.remove("visually-hidden"),a.classList.add("input-invalid-js"))}function q(t){t.preventDefault(),t.target.name==="client-email"?i.email=t.target.value.trim():t.target.name==="client-comments"&&(i.comments=t.target.value.trim()),localStorage.setItem(d,JSON.stringify(i))}async function O(t){t.preventDefault(),await v.post("/api/requests",{email:i.email,comment:i.comments}).then(function(s){localStorage.removeItem(d),w.reset(),i={email:"",comments:""};const r=document.querySelector(".modal-footer-title"),n=document.querySelector(".modal-footer-text");r.remove(),n.remove();const e=`
        <p class="modal-footer-title">${s.data.title}</p>
            <p class="modal-footer-text">${s.data.message}</p>
        `;j.insertAdjacentHTML("beforeend",e),c.classList.remove("modal-backdrop-footer-closed"),c.addEventListener("click",V),document.addEventListener("keydown",o=>{o.key==="Escape"&&c.classList.add("modal-backdrop-footer-closed")})}).catch(function(s){console.log(s),L.error({title:"Error",message:"Something went wrong",position:"center"})})}function V(t){t.preventDefault(),c.classList.add("modal-backdrop-footer-closed")}
//# sourceMappingURL=index.js.map