const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=be2c69c0aab8b5e1b69dcd63231d4edb&page=1';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=be2c69c0aab8b5e1b69dcd63231d4edb&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);
async function getMovies(url){
  const res= await fetch(url)
  const data = await res.json()
  console.log(data.results);
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