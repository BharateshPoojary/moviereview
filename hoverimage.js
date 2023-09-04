
const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500";

async function hoverimage() {
  let navbar=document.createElement('nav');
  document.body.appendChild(navbar);
  navbar.style.marginBottom="20px";
  let ulist=document.createElement('ul');
  navbar.appendChild(ulist);
  let list1=document.createElement('li');
  list1.id="list1";
  let list2=document.createElement('li');
  list2.id="list2";
  // list.innerHTML="Signin";
  let signin=document.createElement('a');
  signin.id="sign";
  signin.innerHTML="Signin";
  signin.href="signin.html";
  let home=document.createElement('a');
  home.innerHTML="Home";
  home.id="home";
  home.href="index.html";
  list1.appendChild(home);
  list2.appendChild(signin);
  ulist.appendChild(list1);
  ulist.appendChild(list2);

let showmovieaccordingtogenreid=JSON.parse(localStorage.getItem('showmovieaccordingtogenreid'));
  
if (showmovieaccordingtogenreid=="popular") {
  for (let page = 1; page <= 5; page++) {
    const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page="+page;
console.log(popularmovies);

let popularmovieslist=await(await(await fetch(popularmovies)).json()).results;
    console.log(popularmovieslist);
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
      document.body.appendChild(atag);
  
      
  
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
  }
}
if (showmovieaccordingtogenreid=="family") {
  for (  page = 1; page<= 5; page++) {
    let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+10751;
  console.log(showmorelink);
       let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
        console.log(fullshowmorefetching);
        fullshowmorefetching.forEach(results =>{
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
    document.body.appendChild(atag);
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
}  
}
if (showmovieaccordingtogenreid=="Action") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+28;
    console.log(showmorelink);
         let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
          console.log(fullshowmorefetching);
          fullshowmorefetching.forEach(results =>{
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
      document.body.appendChild(atag);
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
  }  
  }

  if (showmovieaccordingtogenreid=="comedy") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+35;
    console.log(showmorelink);
         let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
          console.log(fullshowmorefetching);
          fullshowmorefetching.forEach(results =>{
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
      document.body.appendChild(atag);
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
  }  
  }

  if (showmovieaccordingtogenreid=="war") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+10752;
    console.log(showmorelink);
         let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
          console.log(fullshowmorefetching);
          fullshowmorefetching.forEach(results =>{
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
      document.body.appendChild(atag);
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
  }  
  }
  if (showmovieaccordingtogenreid=="history") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+36;
    console.log(showmorelink);
         let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
          console.log(fullshowmorefetching);
          fullshowmorefetching.forEach(results =>{
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
      document.body.appendChild(atag);
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
  }  
}
if (showmovieaccordingtogenreid=="horror") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+27;
    console.log(showmorelink);
         let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
          console.log(fullshowmorefetching);
          fullshowmorefetching.forEach(results =>{
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
      document.body.appendChild(atag);
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
  }  
  }
}