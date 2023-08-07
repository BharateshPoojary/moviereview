const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500"
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";
let section;                
window.addEventListener("load",async ()=>{
 

genreidlist = await (await (await fetch(gnreIdListApi)).json()).genres;
console.log(genreidlist);

genreidlist.forEach(  async genre=> {
 let genrenameformovie=[];
  genrenameformovie=genre.name;
  genreidforeachmovie=movieAccordingTognreId+genre.id;
  
  genreforeachmovie=await(await(await fetch(genreidforeachmovie)).json()).results;
 genremovienames();
  genremovies();
  
 function genremovienames() {
  moviesection = document.createElement("div");
  moviesection.style.display='flex';
  moviesection.style.flexDirection='row';
  document.body.appendChild(moviesection);

  let moviename=document.createElement('h3');
  moviename.innerHTML=genrenameformovie;
  moviesection.appendChild(moviename);
 }
async function genremovies() {


  section = document.createElement("div");
section.style.display='flex';
section.style.flexDirection='row';
section.style.overflow='auto';
document.body.appendChild(section); 

  
genreforeachmovie.forEach(results=>{  
posterPath=results.poster_path;
console.log(posterPath);
fullposterpath=halfImagePath+posterPath; 
console.log(fullposterpath);

let poster=document.createElement("img");
poster.src=fullposterpath;
poster.height="180";
poster.width="140";
poster.style.marginLeft="4px";
poster.style.borderRadius="21px";
section.appendChild(poster);
  })
}
 
});
});