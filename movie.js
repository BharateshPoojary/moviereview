
const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500"
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";

           
window.addEventListener("load",async ()=>{
 let genreidlist = await (await (await fetch(gnreIdListApi)).json()).genres;
console.log(genreidlist);


genreidlist.forEach(  async genre=> {
 let genrenameformovie=[];
  
  genrenameformovie=genre.name;
   genreidforeachmovie=movieAccordingTognreId+genre.id;
  let genreforeachmovie=[];

  genreforeachmovie=await(await(await fetch(genreidforeachmovie)).json()).results;


  console.log(genreforeachmovie);
 let moviesection = document.createElement("div");
  moviesection.style.display='flex';
  moviesection.style.flexDirection='row';
  document.body.appendChild(moviesection);

  let moviename=document.createElement('h3');
  moviename.innerHTML=genrenameformovie;
  moviesection.appendChild(moviename);
section = document.createElement("div");
section.style.display='flex';
section.style.flexDirection='row';
section.style.overflow='scroll';
document.body.appendChild(section); 

genreforeachmovie.forEach(results=>{ 
  let posterPath=results.poster_path;
  console.log(posterPath);
 fullposterpath=halfImagePath+posterPath; 
console.log(fullposterpath);
  let atag=document.createElement('a');
  atag.href="movieinfo.html";
  let poster=document.createElement("img");
  poster.src=fullposterpath;
  poster.height="180";
  poster.width="140";
  poster.style.marginLeft="4px";
  poster.style.borderRadius="21px";
  atag.appendChild(poster);
  section.appendChild(atag);
  

function movieinformation() {  
  title=results.title;
  console.log(title);
  overview=results.overview;
  console.log(overview);
  release_date=results.release_date;
  ratings=results.vote_average;

  let postersrc=results.poster_path;
  console.log(postersrc);
 let fullpostersource=halfImagePath+postersrc; 
console.log(fullpostersource);
  let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
  localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
}
poster.addEventListener('click',movieinformation);
});

});  

});




