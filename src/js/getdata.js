const apiKey = "dce09b81ce070af51980ecb8304f70a6";

const hero = document.getElementById("hero");
const movieShow = document.getElementById("movie-show");
const tvShow = document.getElementById("tv-show");

const favoriteMovieIds = [889737, 106646, 1186947, 1248753, 872585, 475557];
const favoriteTVIds = [2734, 37680, 1668];
const heroMovieIds = [519182, 1184918, 1022789, 1159311, 1354627];

function fetchData(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=images`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);
            return response.json();
        })
        .catch(error => {
            console.error(`Failed to fetch movie with ID ${id}: ${error.message}`);
            return null;
        });
}

function fetchTVData(id) {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=images`;

    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error! status: ${respons.status}`);
            return response.json();
        })
        .catch(error => {
            console.error(`Failed to fetch TV show with ID ${id}: ${error.message}`);
        });
}

function displayTV(data) {

    if (!data) {
        const errorEle = document.createElement("div");
        errorEle.classList.add("error");
        errorEle.textContent = "Failed to load TV show details";
        return;
    }

    const tvEle = document.createElement("div");
    tvEle.classList.add("tv");

    const imgEle = document.createElement("img");
    imgEle.setAttribute("src", `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    imgEle.setAttribute("alt", `${data.name}`);
    imgEle.setAttribute("loading", "lazy");

    const openModal = document.createElement("button");
    openModal.classList.add("open-modal");
    openModal.textContent = "Learn More";

    const describeDiv = document.createElement("div");
    describeDiv.classList.add("describe-tv");
    const describeHeader = document.createElement("h3");
    describeHeader.textContent = "Description";
    const releaseDate = document.createElement("p");
    releaseDate.innerHTML = `<strong>First Air Date:</strong> ${data.first_air_date}<br><strong>Last Air Date:</strong> ${data.last_air_date}`;
    const overview = document.createElement("p");
    overview.textContent = data.overview;

    describeDiv.appendChild(describeHeader);
    describeDiv.appendChild(releaseDate);
    describeDiv.appendChild(overview);



    const dialogBox = document.createElement("dialog");
    dialogBox.classList.add("modal");
    const closeModal = document.createElement("button");
    closeModal.classList.add("close-modal");
    closeModal.textContent = `❌`;

    dialogBox.appendChild(describeDiv);
    dialogBox.appendChild(closeModal);

    tvEle.appendChild(imgEle);
    tvEle.appendChild(openModal);
    tvEle.appendChild(dialogBox);


    // tvEle.appendChild(imgEle);
    // tvEle.appendChild(describeDiv);

    tvShow.appendChild(tvEle);

    openModal.addEventListener("click", () => {
        dialogBox.showModal();
    });

    closeModal.addEventListener("click", () => {
        dialogBox.close();
    });
}


function displayMovie(data, isHero) {
    if (!data) {
        const errorEle = document.createElement("div");
        errorEle.classList.add("error");
        errorEle.textContent = "Failed to load movie details";

        if (!isHero) {
            movieShow.appendChild(error);
        } else {
            hero.appendChild(errorEle);
        }

        return;
    }

    if (!isHero) {
        const movieEle = document.createElement("div");
        movieEle.classList.add("movie");

        const imgEle = document.createElement("img");
        imgEle.setAttribute("src", `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
        imgEle.setAttribute("alt", `${data.title}`);
        imgEle.setAttribute("loading", "lazy");

        const openModal = document.createElement("button");
        openModal.classList.add("open-modal");
        openModal.textContent = "Learn More";

        const describeDiv = document.createElement("div");
        describeDiv.classList.add("describe-movie");
        const describeHeader = document.createElement("h3");
        describeHeader.textContent = "Description";
        const releaseDate = document.createElement("p");
        releaseDate.innerHTML = `<strong>Release Date:</strong> ${data.release_date}`;
        const overview = document.createElement("p");
        overview.textContent = data.overview;

        describeDiv.appendChild(describeHeader);
        describeDiv.appendChild(releaseDate);
        describeDiv.appendChild(overview);


        const dialogBox = document.createElement("dialog");
        dialogBox.classList.add("modal");
        const closeModal = document.createElement("button");
        closeModal.classList.add("close-modal");
        closeModal.textContent = `❌`;

        dialogBox.appendChild(describeDiv);
        dialogBox.appendChild(closeModal);

        movieEle.appendChild(imgEle);
        movieEle.appendChild(openModal);
        movieEle.appendChild(dialogBox);

        movieShow.appendChild(movieEle);

        openModal.addEventListener("click", () => {
            dialogBox.showModal();
        });

        closeModal.addEventListener("click", () => {
            dialogBox.close();
        });

    } else {
        hero.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}" loading="lazy">`;
    }
}

function displayFavoriteMovie(isHero) {

    if (!isHero) {
        favoriteMovieIds.forEach((movieId) => {
            fetchData(movieId)
                .then(movieData => {
                    displayMovie(movieData, false);
                });
        });
    } else {
        const randomIndex = Math.floor(Math.random() * heroMovieIds.length);
        const randomHeroId = heroMovieIds[randomIndex];
        fetchData(randomHeroId)
            .then(movieData => {
                displayMovie(movieData, true);
            });
    }

}

function displayFavoriteTVShow() {
    favoriteTVIds.forEach(tvId => {
        fetchTVData(tvId)
            .then(tvData => {
                displayTV(tvData);
            });
    });
}

function getSearchResults(searchType, query) {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2UwOWI4MWNlMDcwYWY1MTk4MGVjYjgzMDRmNzBhNiIsIm5iZiI6MTcyOTgxNTI2Mi4xMTg5ODIsInN1YiI6IjY3MTkxNGJhNGJlMTU0NjllNzBkNWMzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-4KWNNhr40eLWNyCeDv8LcmSmwAF7j4l5gwWiT2-_bY'
        }
    };

    return fetch(`https://api.themoviedb.org/3/search/${searchType}?query=${query}&include_adult=false&language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => res.results)
        .catch(err => console.error(err));
}


export { displayFavoriteMovie, fetchData, fetchTVData, displayFavoriteTVShow, getSearchResults, displayMovie, displayTV };

