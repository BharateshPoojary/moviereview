
const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500"
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";

           
window.addEventListener("load",async ()=>{
  let popularmovieslist=await(await(await fetch(popularmovies)).json()).results;
  console.log(popularmovieslist);
  let moviesection = document.createElement("div");
  moviesection.style.display='flex';
  moviesection.style.flexDirection='row';
  document.body.appendChild(moviesection);

  let moviename=document.createElement('h3');
  moviename.innerHTML="Popular Movies";
  moviesection.appendChild(moviename);
  let section = document.createElement("div");
section.id="postercontainer";
section.style.display='flex';
section.style.flexDirection='row';
section.style.overflow='scroll';
document.body.appendChild(section); 
  popularmovieslist.forEach(results=>{
    let posterPath=results.poster_path;
    // console.log(posterPath);
   let fullposterpath=halfImagePath+posterPath; 
  // console.log(fullposterpath);
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
  // console.log(title);
  overview=results.overview;
  // console.log(overview);
  release_date=results.release_date;
  ratings=results.vote_average;

  let postersrc=results.poster_path;
  // console.log(postersrc);
 let fullpostersource=halfImagePath+postersrc; 
// console.log(fullpostersource);
  let popularmoviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
  localStorage.setItem('moviedetails',JSON.stringify(popularmoviedetails));
}
poster.addEventListener('click',movieinformation);
  })
  let popularshowmorebutton = document.createElement("button");
popularshowmorebutton.textContent="Showmore";
popularshowmorebutton.style.height="50px";
popularshowmorebutton.style.margin="48px 10px 5px 5px ";
popularshowmorebutton.style.padding="18px 25px 25px 25px ";
popularshowmorebutton.style.borderRadius="50px";
section.appendChild(popularshowmorebutton);

popularshowmorebutton.addEventListener("click",()=>{
  window.location.href="showmore.html";
let showmoreaccordingtogenreid="popularmoviessection";
localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));


  
  });


  // console.log(popularmovieslist);
 let genreidlist = await (await (await fetch(gnreIdListApi)).json()).genres;
// console.log(genreidlist);


genreidlist.forEach(  async genre=> {
 let genrenameformovie=[];
  
  genrenameformovie=genre.name;
   let genreidforeachmovie=movieAccordingTognreId+genre.id;
  //  console.log(genreidforeachmovie);
  let genreforeachmovie=[];

  genreforeachmovie=await(await(await fetch(genreidforeachmovie)).json()).results;


  // console.log(genreforeachmovie);
 let moviesection = document.createElement("div");
  moviesection.style.display='flex';
  moviesection.style.flexDirection='row';
  document.body.appendChild(moviesection);

  let moviename=document.createElement('h3');
  moviename.innerHTML=genrenameformovie;
  moviesection.appendChild(moviename);

let section = document.createElement("div");
section.id="postercontainer";
section.style.display='flex';
section.style.flexDirection='row';
section.style.overflow='scroll';
document.body.appendChild(section); 

genreforeachmovie.forEach(results=>{ 
  let posterPath=results.poster_path;
  // console.log(posterPath);
 let fullposterpath=halfImagePath+posterPath; 
// console.log(fullposterpath);
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
  // console.log(title);
  overview=results.overview;
  // console.log(overview);
  release_date=results.release_date;
  ratings=results.vote_average;

  let postersrc=results.poster_path;
  // console.log(postersrc);
 let fullpostersource=halfImagePath+postersrc; 
// console.log(fullpostersource);
  let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
  localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
}
poster.addEventListener('click',movieinformation);
});
let showmorebutton = document.createElement("button");
showmorebutton.textContent="Showmore";
showmorebutton.style.height="50px";
showmorebutton.style.margin="48px 10px 5px 5px ";
showmorebutton.style.padding="18px 25px 25px 25px ";
showmorebutton.style.borderRadius="50px";
section.appendChild(showmorebutton);

showmorebutton.addEventListener("click",()=>{
  window.location.href="showmore.html";
let showmoreaccordingtogenreid=genre.id;
console.log(showmoreaccordingtogenreid);
localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));


  
  });
  });

}); 