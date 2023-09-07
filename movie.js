
const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500";
const gnreIdListApi="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey+"&language=en-US"
const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page=1";
const movieAccordingTognreId="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=";

           
window.addEventListener("load",async ()=>{


  let divofhoveringimages=document.createElement('div');
  divofhoveringimages.id="imagemoving";
  divofhoveringimages.style.display="flex";
  divofhoveringimages.style.flexDirection="row";


  let divforpopularimage=document.createElement('div');
  divofhoveringimages.appendChild(divforpopularimage);
  divforpopularimage.style.position="relative";
  let popularimage=document.createElement('img');
  let popularimageredirecting=document.createElement('a');
  popularimage.src="popular.jpg";
  popularimage.id="image1";
  popularimage.height="300";
  popularimage.width="550";
  popularimage.style.marginLeft="10px";
  popularimage.style.borderRadius="22px";
  popularimageredirecting.addEventListener("click",()=>{
    popularimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="popular";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })
  let populartitle=document.createElement('h3');
  populartitle.innerHTML="Popular";
  populartitle.style.position="absolute";
  populartitle.style.marginLeft="2.5rem";
  populartitle.style.fontSize="3rem";
  populartitle.style.color="white";
  let populardesc=document.createElement('h4');
  populardesc.innerHTML="''Where Trend meets the movie review screen''";
  populardesc.style.position="absolute";
  populardesc.style.marginLeft="2.5rem";
  populardesc.style.marginTop="13rem";
  populardesc.style.fontSize="1.5rem";
  populardesc.style.color="white";
  popularimageredirecting.appendChild(populardesc);
  popularimageredirecting.appendChild(populartitle);
  popularimageredirecting.appendChild(popularimage);
  divforpopularimage.appendChild(popularimageredirecting);
  document.body.appendChild(divofhoveringimages);
  
  let divforactionimage=document.createElement('div');
  divofhoveringimages.appendChild(divforactionimage);
  divforactionimage.style.position="relative";
  let actionimage=document.createElement('img');
  let actionimageredirecting=document.createElement('a');
  actionimage.src="action.jpg";
  // actionimage.className="image";
  actionimage.id="image1";
  actionimage.height="300";
  actionimage.width="550";
  actionimage.style.marginLeft="10px";
  actionimage.style.borderRadius="22px";
  actionimageredirecting.addEventListener("click",()=>{
    actionimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="Action";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })
  let actiontitle=document.createElement('h3');
  actiontitle.innerHTML="Action";
  actiontitle.style.position="absolute";
  actiontitle.style.marginLeft="2.5rem";
  actiontitle.style.fontSize="3rem";
  let actiondesc=document.createElement('h4');
  actiondesc.innerHTML="''Where heroes rise and legends are born''";
  actiondesc.style.position="absolute";
  actiondesc.style.marginLeft="2.5rem";
  actiondesc.style.marginTop="13rem";
  actiondesc.style.fontSize="1.5rem";
  actionimageredirecting.appendChild(actiondesc);
  actionimageredirecting.appendChild(actiontitle);
  actionimageredirecting.appendChild(actionimage);
  divforactionimage.appendChild(actionimageredirecting);
  document.body.appendChild(divofhoveringimages);
  
  let divforcomedyimage=document.createElement('div');
  divofhoveringimages.appendChild(divforcomedyimage);
 divforcomedyimage.style.position="relative";
  
  let comedyimage=document.createElement('img');
  let comedyimageredirecting=document.createElement('a');
  // comedyimage.className="image";
  comedyimage.id="image2";
  // comedyimage.id="image";
  comedyimage.src="comedy.jpg";
  comedyimage.height="300";
  comedyimage.width="550";
  comedyimage.style.marginLeft="10px";
  comedyimage.style.borderRadius="22px";
  comedyimageredirecting.addEventListener("click",()=>{
    comedyimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="comedy";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })

let comedytitle=document.createElement('h3');
comedytitle.innerHTML="Comedy";
comedytitle.style.position="absolute";
comedytitle.style.marginLeft="2.5rem";
comedytitle.style.fontSize="3rem";
comedytitle.style.color="white";
let comedydesc=document.createElement('h4');
comedydesc.innerHTML="''Laugh out loud,click by click!''";
comedydesc.style.position="absolute";
comedydesc.style.marginLeft="2.5rem";
comedydesc.style.marginTop="15rem";
comedydesc.style.fontSize="1.5rem";
comedydesc.style.color="white";
comedyimageredirecting.appendChild(comedydesc);
comedyimageredirecting.appendChild(comedytitle);
comedyimageredirecting.appendChild(comedyimage);
divforcomedyimage.appendChild(comedyimageredirecting);
  document.body.appendChild(divofhoveringimages);

  
    
  let divforwarimage=document.createElement('div');
  divofhoveringimages.appendChild(divforwarimage);
 divforwarimage.style.position="relative";

  let warimage=document.createElement('img');
  let warimageredirecting=document.createElement('a');
  // warimage.className="image";
  warimage.id="image3";
  // warimage.id="image";
  warimage.src="war.jpg";
  warimage.height="300";
  warimage.width="550";
  warimage.style.marginLeft="10px";
  warimage.style.borderRadius="22px";
  warimageredirecting.addEventListener("click",()=>{
    warimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="war";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })
  let wartitle=document.createElement('h3');
wartitle.innerHTML="War";
wartitle.style.position="absolute";
wartitle.style.marginLeft="2.5rem";
wartitle.style.fontSize="3rem";
wartitle.style.color="white";
let wardesc=document.createElement('h4');
wardesc.innerHTML="''lets dive into the rampage of battles''";
wardesc.style.position="absolute";
wardesc.style.marginLeft="2.5rem";
wardesc.style.marginTop="16rem";
wardesc.style.fontSize="1.5rem";
wardesc.style.color="white";
warimageredirecting.appendChild(wardesc);
warimageredirecting.appendChild(wartitle);
  warimageredirecting.appendChild(warimage);
  divforwarimage.appendChild(warimageredirecting);
  document.body.appendChild(divofhoveringimages);

  let divforhistoryimage=document.createElement('div');
  divofhoveringimages.appendChild(divforhistoryimage);
 divforhistoryimage.style.position="relative";
  let historyimage=document.createElement('img');
  let historyimageredirecting=document.createElement('a');
  // historyimage.className="image";
  historyimage.id="image4";
  historyimage.src="history.jpg";
  historyimage.height="300";
  historyimage.width="550";
  historyimage.style.marginLeft="10px";
  historyimage.style.borderRadius="22px";
  historyimageredirecting.addEventListener("click",()=>{
    historyimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="history";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })
  let historytitle=document.createElement('h3');
  historytitle.innerHTML="History";
  historytitle.style.position="absolute";
  historytitle.style.marginLeft="2.5rem";
  historytitle.style.fontSize="3rem";
  historytitle.style.color="white";
  let historydesc=document.createElement('h4');
  historydesc.innerHTML="''Dive into the past,one film at a time''";
  historydesc.style.position="absolute";
  historydesc.style.marginLeft="2.5rem";
  historydesc.style.marginTop="16rem";
  historydesc.style.fontSize="1.5rem";
  historydesc.style.color="white";
  historyimageredirecting.appendChild(historydesc);
  historyimageredirecting.appendChild(historytitle);
  historyimageredirecting.appendChild(historyimage);
  divforhistoryimage.appendChild(historyimageredirecting);
  document.body.appendChild(divofhoveringimages);

  
  let divforhorrorimage=document.createElement('div');
  divofhoveringimages.appendChild(divforhorrorimage);
 divforhorrorimage.style.position="relative";
   let horrorimage=document.createElement('img');
  let horrorimageredirecting=document.createElement('a');
  // horrorimage.className="image";
   horrorimage.id="image5";
  horrorimage.src="horror.jpg";
  horrorimage.height="300";
  horrorimage.width="550";
  horrorimage.style.marginLeft="10px";
  horrorimage.style.borderRadius="22px";
  horrorimageredirecting.addEventListener("click",()=>{
    horrorimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="horror";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })
  let horrortitle=document.createElement('h3');
  horrortitle.innerHTML="Horror";
  horrortitle.style.position="absolute";
  horrortitle.style.marginLeft="2.5rem";
  horrortitle.style.fontSize="3rem";
  horrortitle.style.color="white";
  let horrordesc=document.createElement('h4');
  horrordesc.innerHTML="''Where nightmares meet the screen''";
  horrordesc.style.position="absolute";
  horrordesc.style.marginLeft="2.5rem";
  horrordesc.style.marginTop="16rem";
  horrordesc.style.fontSize="1.5rem";
  horrordesc.style.color="white";
  horrorimageredirecting.appendChild(horrordesc);
  horrorimageredirecting.appendChild(horrortitle);
  horrorimageredirecting.appendChild(horrorimage);
  divforhorrorimage.appendChild(horrorimageredirecting);
  document.body.appendChild(divofhoveringimages);

  let divforfamilyimage=document.createElement('div');
  divofhoveringimages.appendChild(divforfamilyimage);
  divforfamilyimage.style.position="relative";
  let familyimage=document.createElement('img');
  let familyimageredirecting=document.createElement('a');
  familyimage.src="family.jpg";
  familyimage.id="image1";
  familyimage.height="300";
  familyimage.width="550";
  familyimage.style.marginLeft="10px";
  familyimage.style.borderRadius="22px";
  familyimageredirecting.addEventListener("click",()=>{
    familyimageredirecting.href="hoverimage.html";
    let showmoreaccordingtogenreid="family";
    localStorage.setItem('showmovieaccordingtogenreid',JSON.stringify(showmoreaccordingtogenreid));
  })
  let familytitle=document.createElement('h3');
  familytitle.innerHTML="Family";
  familytitle.style.position="absolute";
  familytitle.style.marginLeft="2.5rem";
  familytitle.style.fontSize="3rem";
  familytitle.style.color="white";
  let familydesc=document.createElement('h4');
  familydesc.innerHTML="''Home is the place ,Where the movie heart is! ''";
  familydesc.style.position="absolute";
  familydesc.style.marginLeft="2.5rem";
  familydesc.style.marginTop="13rem";
  familydesc.style.fontSize="1.5rem";
  familydesc.style.color="white";
  familyimageredirecting.appendChild(familydesc);
  familyimageredirecting.appendChild(familytitle);
  familyimageredirecting.appendChild(familyimage);
  divforfamilyimage.appendChild(familyimageredirecting);
  document.body.appendChild(divofhoveringimages);


  let popularmovieslist=await(await(await fetch(popularmovies)).json()).results;
  // console.log(popularmovieslist);
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
  poster.id="poster";
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
popularshowmorebutton.style.fontSize="larger";
popularshowmorebutton.style.margin="48px 10px 5px 5px ";
popularshowmorebutton.style.padding="10px 25px 25px 25px ";
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
  poster.id="poster";
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
showmorebutton.style.fontSize="larger";
showmorebutton.style.margin="48px 10px 5px 5px ";
showmorebutton.style.padding="10px 25px 25px 25px ";
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
