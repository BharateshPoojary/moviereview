//tmdb half image link and  api key.
const apikey ="5914067868644595e99f1fce7a4ffa3d";
const halfImagePath="https://image.tmdb.org/t/p/w500";
async function showmore() {
  //creating navbar in js
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
  //accesssing  a particular  movie from local storage 
  let showmovieaccordingtogenreid=JSON.parse(localStorage.getItem('showmovieaccordingtogenreid'));
  //popular movies showmore section
  if(showmovieaccordingtogenreid==="popularmoviessection") {
    for (let page = 1; page <= 5; page++) {
      const popularmovies = "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page="+page;
      let popularmovieslist=await(await(await fetch(popularmovies)).json()).results;
      //accessing popular movies content
      popularmovieslist.forEach(results=>{
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
          let popularmoviedetails={'overview':overview,'title':title,'poster':fullpostersource,'release_date':release_date,'ratings':ratings};
          localStorage.setItem('moviedetails',JSON.stringify(popularmoviedetails));
        }
        poster.addEventListener('click',movieinformation);
      })
    }
  }
  //accessing other movies section 
  else{
    for (  page = 1; page<= 5; page++) {
      let  showmorelink="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page+"&with_watch_monetization_types=flatrate&with_genres=";
      let fullshowmorelink=showmorelink+showmovieaccordingtogenreid;
      let  fullshowmorefetching=await(await(await fetch(fullshowmorelink)).json()).results;
      //accessing all the showmore content
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