//tmdb half image link and  api key.
const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500";

//function for clicked image task
async function hoverimage() {
  //creating navbar in javascript
  let navbar=document.createElement('nav');
  document.body.appendChild(navbar);
  navbar.style.marginBottom="20px";
  let ulist=document.createElement('ul');
  navbar.appendChild(ulist);
  let list1=document.createElement('li');
  list1.id="list1";
  let list2=document.createElement('li');
  list2.id="list2";
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
  //accessing objects from local storage 
  let showmovieaccordingtogenreid=JSON.parse(localStorage.getItem('showmovieaccordingtogenreid'));
  //popular movies section
  if (showmovieaccordingtogenreid=="popular") {
    //limiting movies to 5 pages
    for (let page = 1; page <= 5; page++) {
      //popular movie link
      const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page="+page;
      let popularmovieslist=await(await(await fetch(popularmovies)).json()).results;
      popularmovieslist.forEach(results=>{
        //accesing all the required content
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath; 
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
        //function for a particular movie information when its poster is clicked
        function movieinformation() {  
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let popularmoviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(popularmoviedetails));
        }
        poster.addEventListener('click',movieinformation);
      })
    }
  }
  //family movies section
  if (showmovieaccordingtogenreid=="family") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+10751;
      let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
      fullshowmorefetching.forEach(results =>{
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath; 
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
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
        }
        poster.addEventListener('click',movieinformation);
      })
    }  
  }
  //Action movies section
  if (showmovieaccordingtogenreid=="Action") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+28;
      let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
      fullshowmorefetching.forEach(results =>{
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath;
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
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
        }
        poster.addEventListener('click',movieinformation);
      })
    }  
  }
  //Comedy movie section 
  if (showmovieaccordingtogenreid=="comedy") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+35;
      let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
      fullshowmorefetching.forEach(results =>{
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath; 
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
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
        }
        poster.addEventListener('click',movieinformation);
      })
    }  
  }
  //War movie section
  if (showmovieaccordingtogenreid=="war") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+10752;
      let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
      fullshowmorefetching.forEach(results =>{
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath; 
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
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
        }
        poster.addEventListener('click',movieinformation);
      });
    }  
  }
  //history movie section
  if (showmovieaccordingtogenreid=="history") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+36;
      let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
      fullshowmorefetching.forEach(results =>{
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath;
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
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
        }
        poster.addEventListener('click',movieinformation);
      })
    }  
  }
  //horror movie section
  if (showmovieaccordingtogenreid=="horror") {
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres="+27;
      let  fullshowmorefetching=await(await(await fetch(showmorelink)).json()).results;
      fullshowmorefetching.forEach(results =>{
        let posterPath=results.poster_path;
        let fullposterpath=halfImagePath+posterPath; 
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
          let title=results.title;
          let overview=results.overview;
          let release_date=results.release_date;
          let ratings=results.vote_average;
          let postersrc=results.poster_path;
          let fullpostersource=halfImagePath+postersrc; 
          let moviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(moviedetails));
        }
        poster.addEventListener('click',movieinformation);
      });
    }  
  }
}