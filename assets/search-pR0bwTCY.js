import{l}from"./utils-oX38a-2-.js";import{g as i,b as u,c as d}from"./getdata-CGoX9di7.js";l();window.addEventListener("pageshow",()=>{const n=document.querySelector("#menu-btn"),t=document.querySelector("#menu-links");if(!n||!t){console.error("Menu button or navigation element not found!");return}n.addEventListener("click",()=>{t.classList.toggle("open"),n.classList.toggle("open")});const o=document.querySelector("#current-year"),s=document.querySelector("#last-modified"),e=new Date;o.innerHTML=`${e.getFullYear()}`,s.innerHTML=`Last Modification: ${e.getDate()}/${e.getMonth()}/${e.getFullYear()} ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`});const m=document.getElementById("search-form"),g=document.getElementById("movie-show"),h=document.getElementById("tv-show"),y=document.getElementById("search-heading");m.addEventListener("submit",n=>{n.preventDefault();const t=document.getElementById("search-query").value,o=document.querySelector('input[name="search-type"]:checked').value;if(!t)return;console.log(`Searching for ${o}: ${t}`);let s=JSON.parse(localStorage.getItem("searches"))||[];const e=s.find(r=>r.query.trim().toLowerCase()===t.trim().toLowerCase()&&r.type===o);e?e.count+=1:s.push({query:t,type:o,count:1}),localStorage.setItem("searches",JSON.stringify(s));const c=i(o,t);console.log(typeof c),console.log(c),g.innerHTML="",h.innerHTML="",y.textContent="Search Results",c.then(r=>{r.forEach(a=>{o==="movie"?u(a,!1):d(a)})})});
