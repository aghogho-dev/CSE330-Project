const g="dce09b81ce070af51980ecb8304f70a6",m=document.getElementById("hero"),p=document.getElementById("movie-show"),E=document.getElementById("tv-show"),f=[889737,106646,1186947,1248753,872585,475557],C=[2734,37680,1668],h=[519182,1184918,1022789,1159311,1354627];function u(t){const o=`https://api.themoviedb.org/3/movie/${t}?api_key=${g}&append_to_response=images`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`HTTP Error! status: ${e.status}`);return e.json()}).catch(e=>(console.error(`Failed to fetch movie with ID ${t}: ${e.message}`),null))}function b(t){const o=`https://api.themoviedb.org/3/tv/${t}?api_key=${g}&append_to_response=images`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`HTTP Error! status: ${respons.status}`);return e.json()}).catch(e=>{console.error(`Failed to fetch TV show with ID ${t}: ${e.message}`)})}function M(t){if(!t){const d=document.createElement("div");d.classList.add("error"),d.textContent="Failed to load TV show details";return}const o=document.createElement("div");o.classList.add("tv");const e=document.createElement("img");e.setAttribute("src",`https://image.tmdb.org/t/p/w500/${t.poster_path}`),e.setAttribute("alt",`${t.name}`),e.setAttribute("loading","lazy");const n=document.createElement("button");n.classList.add("open-modal"),n.textContent="Learn More";const a=document.createElement("div");a.classList.add("describe-tv");const r=document.createElement("h3");r.textContent="Description";const c=document.createElement("p");c.innerHTML=`<strong>First Air Date:</strong> ${t.first_air_date}<br><strong>Last Air Date:</strong> ${t.last_air_date}`;const l=document.createElement("p");l.textContent=t.overview,a.appendChild(r),a.appendChild(c),a.appendChild(l);const i=document.createElement("dialog");i.classList.add("modal");const s=document.createElement("button");s.classList.add("close-modal"),s.textContent="❌",i.appendChild(a),i.appendChild(s),o.appendChild(e),o.appendChild(n),o.appendChild(i),E.appendChild(o),n.addEventListener("click",()=>{i.showModal()}),s.addEventListener("click",()=>{i.close()})}function v(t,o){if(!t){const e=document.createElement("div");e.classList.add("error"),e.textContent="Failed to load movie details",o?m.appendChild(e):p.appendChild(error);return}if(o)m.innerHTML=`<img src="https://image.tmdb.org/t/p/w500/${t.poster_path}" alt="${t.title}" loading="lazy">`;else{const e=document.createElement("div");e.classList.add("movie");const n=document.createElement("img");n.setAttribute("src",`https://image.tmdb.org/t/p/w500/${t.poster_path}`),n.setAttribute("alt",`${t.title}`),n.setAttribute("loading","lazy");const a=document.createElement("button");a.classList.add("open-modal"),a.textContent="Learn More";const r=document.createElement("div");r.classList.add("describe-movie");const c=document.createElement("h3");c.textContent="Description";const l=document.createElement("p");l.innerHTML=`<strong>Release Date:</strong> ${t.release_date}`;const i=document.createElement("p");i.textContent=t.overview,r.appendChild(c),r.appendChild(l),r.appendChild(i);const s=document.createElement("dialog");s.classList.add("modal");const d=document.createElement("button");d.classList.add("close-modal"),d.textContent="❌",s.appendChild(r),s.appendChild(d),e.appendChild(n),e.appendChild(a),e.appendChild(s),p.appendChild(e),a.addEventListener("click",()=>{s.showModal()}),d.addEventListener("click",()=>{s.close()})}}function w(t){if(!t)f.forEach(o=>{u(o).then(e=>{v(e,!1)})});else{const o=Math.floor(Math.random()*h.length),e=h[o];u(e).then(n=>{v(n,!0)})}}function I(){C.forEach(t=>{b(t).then(o=>{M(o)})})}function L(t,o){const e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2UwOWI4MWNlMDcwYWY1MTk4MGVjYjgzMDRmNzBhNiIsIm5iZiI6MTcyOTgxNTI2Mi4xMTg5ODIsInN1YiI6IjY3MTkxNGJhNGJlMTU0NjllNzBkNWMzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-4KWNNhr40eLWNyCeDv8LcmSmwAF7j4l5gwWiT2-_bY"}};return fetch(`https://api.themoviedb.org/3/search/${t}?query=${o}&include_adult=false&language=en-US&page=1`,e).then(n=>n.json()).then(n=>n.results).catch(n=>console.error(n))}export{I as a,v as b,M as c,w as d,L as g};
