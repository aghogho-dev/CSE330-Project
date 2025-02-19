import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

window.addEventListener("pageshow", () => {

    const menuBtn = document.querySelector("#menu-btn");
    const navEle = document.querySelector("#menu-links");   

    if (!menuBtn || !navEle) {
        console.error("Menu button or navigation element not found!");
        return;
    }

    menuBtn.addEventListener("click", () => {
        navEle.classList.toggle("open");
        menuBtn.classList.toggle("open");
    });


    const getYear = document.querySelector("#current-year");
    const lastModified = document.querySelector("#last-modified");

    const today = new Date();

    getYear.innerHTML = `${today.getFullYear()}`;
    lastModified.innerHTML = `Last Modification: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`  
});

function displayTopSearches() {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];

    searches.sort((a, b) => b.count - a.count);

    const topSearches = searches.slice(0, 10);

    const resultsContainer = document.getElementById("top-searches");
    resultsContainer.innerHTML = "";

    topSearches.forEach(item => {
        const searchItem = document.createElement("p");
        searchItem.textContent = `Title: ${item.query}: type: ${item.type}, searches: ${item.count}`;
        resultsContainer.appendChild(searchItem);
    });
}


window.onload = displayTopSearches;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscribe-form");
    const showInfo = document.getElementById("form-results");

    const show = (name) => form.elements[name].value;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        showInfo.innerHTML = `
            <h2>Thank you for subscribing</h2>
            <h3>Your details</h3>
            <p>First Name: ${show("first")}</p>
            <p>Last Name: ${show("last")}</p>
            <p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
            <p>Mobile Phone Number: ${show("mobile-phone")}</p>
            `;

        showInfo.showModal();

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);

    });
});