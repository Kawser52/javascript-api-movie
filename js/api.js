const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=be2c69c0aab8b5e1b69dcd63231d4edb&page=1';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=be2c69c0aab8b5e1b69dcd63231d4edb&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');
const showMovies = document.getElementById('article');

getMovies(API_URL);
async function getMovies(url){
  const res= await fetch(url)
  const data = await res.json()
  displayMobvies(data.results);
}
function displayMobvies(movies){
    showMovies.innerHTML = '';
    
    movies.forEach((movie)=>{
        const {title, vote_average, overview,poster_path} = movie;
        const moviesEl = document.createElement('div')
        moviesEl.classList.add('col-lg-3')
        moviesEl.innerHTML = 
        `<div class="movie mt-5">
        <img src="${IMAGE_PATH + poster_path}" class="img-fluid rounded" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${votedFunciton(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
    </div>`
    showMovies.appendChild(moviesEl)
    })

}
function votedFunciton (vote){
        if(vote>=8){
            return 'green'
        }else if (vote>=5){
            return 'yellow'
        } else{
            return 'red'
        }
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchKeword = search.value;
    console.log(searchKeword)
    if(searchKeword && searchKeword !== ''){
        getMovies(SEARCH_API + searchKeword)
        search.value = ''
    } else{
        window.location.reload()
    }
    
})