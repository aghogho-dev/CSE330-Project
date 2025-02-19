import { getSearchResults, displayTV, displayMovie } from "./getdata.js";
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


const searchForm = document.getElementById("search-form");
const movieShow = document.getElementById("movie-show");
const tvShow = document.getElementById("tv-show");
const heading = document.getElementById("search-heading");

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const query = document.getElementById("search-query").value;
    const searchType = document.querySelector('input[name="search-type"]:checked').value;


    if (!query) return;

    console.log(`Searching for ${searchType}: ${query}`);

    let searches = JSON.parse(localStorage.getItem("searches")) || [];

    const existingSearch = searches.find(item => item.query.trim().toLowerCase() === query.trim().toLowerCase() && item.type === searchType);

    if (existingSearch) existingSearch.count += 1;
    else searches.push({ query, type: searchType, count: 1 });

    localStorage.setItem("searches", JSON.stringify(searches));


    const searchData = getSearchResults(searchType, query);

    console.log(typeof searchData);
    console.log(searchData);

    movieShow.innerHTML = "";
    tvShow.innerHTML = "";
    heading.textContent = "Search Results";

    searchData
        .then(results => {
            results.forEach((result) => {
                if (searchType === "movie") displayMovie(result, false);
                else displayTV(result);
            });
        });
});