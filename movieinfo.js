window.addEventListener("load",async()=>{
  //Creating navbar in js
  let navbar=document.createElement('nav');
  document.body.appendChild(navbar);
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
  home.href="index.html";
  list1.appendChild(home);
  list2.appendChild(signin);
  ulist.appendChild(list1);
  ulist.appendChild(list2);
  //Accessing moviedetails through localstorage 
  let moviedetails=JSON.parse(localStorage.getItem('moviedetails'));
  let moviedetailssection=document.createElement('div');
  moviedetailssection.id="moviedetails";
  moviedetailssection.style.display="flex";
  moviedetailssection.style.flexDirection="row";

  let poster=document.createElement('img');
  poster.id="poster";
  poster.src=moviedetails.poster;
  poster.height="300";
  poster.width="250";
  poster.style.borderRadius="21px";
  moviedetailssection.appendChild(poster);

  let writtendetailssection=document.createElement('div');
  writtendetailssection.style.display="flex";
  writtendetailssection.style.flexDirection="column";

  let title=document.createElement('h2');
  title.id="title";
  let titleinfo='Moviename:  &nbsp'+moviedetails.title;
  title.innerHTML=titleinfo;
  title.style.paddingLeft="20px";
  title.style.fontFamily="Calibri";
  writtendetailssection.appendChild(title);

  let release_date=document.createElement('h2');
  release_date.id="releasedate";
  let release_dateinfo='Release date: &nbsp'+moviedetails.release_date;
  release_date.innerHTML=release_dateinfo;
  release_date.style.paddingLeft="20px";
  release_date.style.fontFamily="Calibri";
  writtendetailssection.appendChild(release_date);

  let ratings=document.createElement('h2');
  ratings.id="ratings";
  ratinginfo='Ratings: &nbsp'+moviedetails.ratings;
  ratings.innerHTML=ratinginfo;
  ratings.style.paddingLeft="20px";
  ratings.style.fontFamily="Calibri";
  writtendetailssection.appendChild(ratings);

  let story=document.createElement('h2');
  story.id="story";
  storyinfo='Story: &nbsp'+moviedetails.overview;
  story.innerHTML=storyinfo;
  story.style.width="54rem";
  story.style.paddingLeft="20px";
  story.style.fontFamily="Calibri";
  writtendetailssection.appendChild(story);
  moviedetailssection.appendChild(writtendetailssection);
  document.body.appendChild(moviedetailssection);
  let movietitle=moviedetails.title;

  //youtubetrailer,music and reviews 
  let youtubeapikey="AIzaSyAhW1eLNh8QnuzvpMiUjjUCwL81LZETSUQ";
  let cloudconsoleyoutubetrailerfetchinglink="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxresults=1&q="+movietitle+"Trailer"+"&key="+youtubeapikey;
  let cloudconsoleyoutubetrailerfetching=await (await fetch( cloudconsoleyoutubetrailerfetchinglink)).json();
  let yttrailerid=cloudconsoleyoutubetrailerfetching.items[0].id.videoId;
  let youtubetrailerfetchinglink="https://m.youtube.com/watch?v="+yttrailerid;
  let divfortrailermusicreview=document.createElement('div');
  writtendetailssection.appendChild(divfortrailermusicreview);
  let youtubetrailerbutton=document.createElement('button');

  youtubetrailerbutton.textContent="Watch Trailer";
  youtubetrailerbutton.className="trailerbutton";
  divfortrailermusicreview.appendChild(youtubetrailerbutton);
  youtubetrailerbutton.addEventListener("click",()=>{
    window.location.href=youtubetrailerfetchinglink;
  })

  let youtubemusiclink="https://music.youtube.com/search?q="+movietitle+"music";
  let youtubemusicbutton=document.createElement('button');
  youtubemusicbutton.textContent="Play Music";
  youtubemusicbutton.className="musicbutton";
  divfortrailermusicreview.appendChild(youtubemusicbutton);
  youtubemusicbutton.addEventListener("click",()=>{
    window.location.href=youtubemusiclink;
  })

  let cloudconsoleyoutubereviewfetchinglink="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxresults=1&q="+movietitle+"Review"+"&key="+youtubeapikey; 
  let cloudconsoleyoutubereviewfetching=await (await fetch( cloudconsoleyoutubereviewfetchinglink)).json();
  let ytreviewid=cloudconsoleyoutubereviewfetching.items[0].id.videoId;
  let youtubereviewfetchinglink="https://m.youtube.com/watch?v="+ytreviewid;
  let youtubereviewbutton=document.createElement('button');
  youtubereviewbutton.textContent="Watch Review";
  youtubereviewbutton.className="reviewbutton";
  divfortrailermusicreview.appendChild(youtubereviewbutton);
  youtubereviewbutton.addEventListener("click",()=>{
    window.location.href=youtubereviewfetchinglink;
  })
})