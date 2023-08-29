const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500";
async function showmore() {
  
  let showmovieaccordingtogenreid=JSON.parse(localStorage.getItem('showmovieaccordingtogenrename'));
  if (showmovieaccordingtogenreid=="popularmoviessection") {
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
  
     showmovieaccordingtogenreid=JSON.parse(localStorage.getItem('showmovieaccordingtogenreid'));
    for (  page = 1; page<= 5; page++) {
        let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres=";
        let fullshowmorelink=showmorelink+showmovieaccordingtogenreid;
          console.log(fullshowmorelink);
           let  fullshowmorefetching=await(await(await fetch(fullshowmorelink)).json()).results;
            console.log(fullshowmorefetching);
            fullshowmorefetching.forEach(results =>{
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
