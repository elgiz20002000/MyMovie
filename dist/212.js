"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[212,273],{273:(e,t,a)=>{a.r(t),a.d(t,{about_movie:()=>c,getMoviesInfo:()=>n});var i=a(669),s=a.n(i);const n=(e,t)=>{let a=e.getAttribute("data-id");s().get(`http://www.omdbapi.com/?apikey=8d9cfe3d&i=${a}`).then((async e=>{let i=await s().get(`https://imdb-api.com/en/API/FullCast/k_7xs694cx/${a}`),n=i.data.actors.map((e=>`<div class="actor">\n                         <div class="actor_photo">\n                         <img loading='lazy' src="${"https://res.cloudinary.com/dfohwxch2//image/fetch/q_80,f_auto/"+e.image.slice(0,-3)+"webp"}"  alt="mini_poster">\n                         </div>\n                         <div class="actor_name">${e.name}</div>\n                         <div class="actor_character">${e.asCharacter}</div>\n                        </div>`)),c=i.data.directors.items.map((e=>`<div class="item">\n                            <div class="name">${e.name}</div>\n                            <div class="role">${i.data.directors.job}</div>\n                        </div>`)),r=i.data.writers.items.map((e=>`<div class="item">\n                        <div class="name">${e.name}</div>\n                        <div class="role">${i.data.writers.job}</div>\n                        </div>`));t.innerHTML=`\n            <div class="movie_wrapper">\n                <div class="photo_wrapper">\n                    <img loading='lazy' src="${"https://res.cloudinary.com/dfohwxch2//image/fetch/q_80,f_auto/"+e.data.Poster.slice(0,-3)+"webp"}"  alt="poster">                        \n                </div>\n\n                <div class="info_wrapper">\n                    <div class="header">${e.data.Title}</div>\n                    <div class="tags">\n                        <div class="tag">${e.data.Genre}</div>\n                        <div class="tag">${e.data.Year}</div>\n                        <div class="tag">${e.data.Runtime}</div>\n                        <div class="tag trailer" data-id=${a}>Play Trailer</div>\n                    </div>\n\n                    <div class="ratings_imdb"><span>${e.data.imdbRating}</span>/10</div>    \n                    <div class="text_header">Overview</div>\n                    <div class="text">${e.data.Plot}</div>\n                    <div class="director_writer">  \n                    </div>\n                    <div class="line"></div>\n                    <div class="actors">\n                        <div class="left_btn"></div>\n                        <div class="right_btn"></div>\n                        <div class="actors_list">\n                        <div class="actors_wrapper" data-position=0></div> \n                        </div>             \n                    </div>\n                </div>\n                <div class="ext_btn">\n                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M19.3333 2.54675L17.4533 0.666748L9.99996 8.12008L2.54663 0.666748L0.666626 2.54675L8.11996 10.0001L0.666626 17.4534L2.54663 19.3334L9.99996 11.8801L17.4533 19.3334L19.3333 17.4534L11.88 10.0001L19.3333 2.54675Z" fill="black"/>\n                    </svg>\n                </div>\n            <div/>`,c.forEach((e=>{t.querySelector(".director_writer").innerHTML+=e})),r.forEach((e=>{t.querySelector(".director_writer").innerHTML+=e})),n.forEach((e=>{t.querySelector(".actors_wrapper").innerHTML+=e})),t.classList.add("about_movie_active")})),t.addEventListener("click",(async e=>{if((e.target.classList.contains("ext_btn")||"svg"==e.target.tagName||"path"==e.target.tagName)&&t.classList.remove("about_movie_active"),"tag trailer"==e.target.classList.value){const t=await s().get(`https://imdb-api.com/en/API/YouTubeTrailer/k_7xs694cx/${e.target.dataset.id}`);if(document.querySelector("#player")){document.querySelector("#player").remove();let e=document.createElement("div");e.id="player",document.querySelector(".video_wrapper").append(e)}new YT.Player("player",{height:"360",width:"640",videoId:`${t.data.videoId}`}),document.querySelector(".video_wrapper").classList.toggle("active")}}))},c=()=>{let e=document.querySelector(".about_movie");document.querySelectorAll("section").forEach(((t,a)=>{0!=a&&4!=a&&t.addEventListener("click",(async t=>{let a=t.target;a.classList.contains("movie_list_item")&&n(a,e),a.parentElement.classList.contains("movie_list_item")&&n(a.parentElement,e),a.parentElement.parentElement.classList.contains("movie_list_item")&&!a.classList.contains("favorite_toggle_btn")&&n(a.parentElement.parentElement,e)}))}))}},212:(e,t,a)=>{a.r(t),a.d(t,{search_btn:()=>c});var i=a(669),s=a.n(i),n=a(273);const c=()=>{const e=document.querySelector(".search input"),t=document.querySelector(".search_info"),a=t.querySelector(".search_info_content"),i=document.querySelector(".search_btn"),c=t.querySelector(".loading");let r=document.querySelector(".about_movie");async function l(){e.value.length>0?(t.style.cssText="opacity:1;",c.style.display="block",a.innerHTML=""):t.style.cssText="opacity:0;";let i=await s().get(`http://www.omdbapi.com/?apikey=8d9cfe3d&s=${e.value}`);c.style.display="none","False"!=i.data.Response?(a.innerHTML="",i.data.Search.forEach((e=>{"N/A"!=e.Poster&&(a.innerHTML+=`\n                <div class="movie_list_item" data-id=${e.imdbID}>\n                    <div class="photo_wrapper"><img loading='lazy' src=${"https://res.cloudinary.com/dfohwxch2//image/fetch/q_80,f_auto/"+e.Poster.slice(0,-3)+"webp"}  alt="image"></div>\n                    <div class="movie_info">\n                        <div class="movie_title">${e.Title}</div>\n                        <div class="year">${e.Year}</div>\n                        <div class="type">${e.Type}</div>\n                    </div>\n                </div>`)}))):(a.innerHTML="Not found",c.style.display="none")}t.addEventListener("click",(async i=>{let s=i.target;s.classList.contains("movie_list_item")&&((0,n.getMoviesInfo)(s,r),t.style.cssText="opacity:0;",a.innerHTML="",e.value=""),s.parentElement.classList.contains("movie_list_item")&&((0,n.getMoviesInfo)(s.parentElement,r),t.style.cssText="opacity:0;",a.innerHTML="",e.value=""),s.parentElement.parentElement.classList.contains("movie_list_item")&&!s.classList.contains("favorite_toggle_btn")&&((0,n.getMoviesInfo)(s.parentElement.parentElement,r),t.style.cssText="opacity:0;",a.innerHTML="",e.value="")})),e.addEventListener("keypress",(async e=>{"Enter"===e.key&&l()})),e.addEventListener("input",(()=>{!e.value.length>0&&(t.style.cssText="opacity:0;",a.innerHTML="",c.style.display="none")})),i.addEventListener("click",l)}}}]);