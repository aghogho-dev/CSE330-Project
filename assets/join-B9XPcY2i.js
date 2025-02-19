import{l as r}from"./utils-oX38a-2-.js";r();window.addEventListener("pageshow",()=>{const o=document.querySelector("#menu-btn"),s=document.querySelector("#menu-links");if(!o||!s){console.error("Menu button or navigation element not found!");return}o.addEventListener("click",()=>{s.classList.toggle("open"),o.classList.toggle("open")});const n=document.querySelector("#current-year"),t=document.querySelector("#last-modified"),e=new Date;n.innerHTML=`${e.getFullYear()}`,t.innerHTML=`Last Modification: ${e.getDate()}/${e.getMonth()}/${e.getFullYear()} ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`});function a(){let o=JSON.parse(localStorage.getItem("searches"))||[];o.sort((t,e)=>e.count-t.count);const s=o.slice(0,10),n=document.getElementById("top-searches");n.innerHTML="",s.forEach(t=>{const e=document.createElement("p");e.textContent=`Title: ${t.query}: type: ${t.type}, searches: ${t.count}`,n.appendChild(e)})}window.onload=a;document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("subscribe-form"),s=document.getElementById("form-results"),n=t=>o.elements[t].value;o.addEventListener("submit",t=>{t.preventDefault(),s.innerHTML=`
            <h2>Thank you for subscribing</h2>
            <h3>Your details</h3>
            <p>First Name: ${n("first")}</p>
            <p>Last Name: ${n("last")}</p>
            <p>Email: <a href="mailto:${n("email")}">${n("email")}</a></p>
            <p>Mobile Phone Number: ${n("mobile-phone")}</p>
            `,s.showModal(),setTimeout(()=>{window.location.href="index.html"},2e3)})});
