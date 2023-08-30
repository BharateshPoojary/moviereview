window.addEventListener("load",async()=>{


let moviedetails=JSON.parse(localStorage.getItem('moviedetails'));
console.log(moviedetails);

let moviedetailssection=document.createElement('div');
moviedetailssection.style.display="flex";
moviedetailssection.style.flexDirection="row";
let poster=document.createElement('img');
poster.src=moviedetails.poster;
poster.height="300";
poster.width="250";
poster.style.borderRadius="21px";
moviedetailssection.appendChild(poster);

let writtendetailssection=document.createElement('div');
writtendetailssection.style.display="flex";
writtendetailssection.style.flexDirection="column";

let title=document.createElement('h2');
let titleinfo='Moviename:  &nbsp'+moviedetails.title;
title.innerHTML=titleinfo;
title.style.paddingLeft="20px";
title.style.fontFamily="Calibri";
writtendetailssection.appendChild(title);

let release_date=document.createElement('h2');
let release_dateinfo='Release date: &nbsp'+moviedetails.release_date;
release_date.innerHTML=release_dateinfo;
release_date.style.paddingLeft="20px";
release_date.style.fontFamily="Calibri";
writtendetailssection.appendChild(release_date);

let ratings=document.createElement('h2');
ratinginfo='Ratings: &nbsp'+moviedetails.ratings;
ratings.innerHTML=ratinginfo;
ratings.style.paddingLeft="20px";
ratings.style.fontFamily="Calibri";
writtendetailssection.appendChild(ratings);

let story=document.createElement('h2');
storyinfo='Story: &nbsp'+moviedetails.overview;
story.innerHTML=storyinfo;
story.style.width="36rem";
story.style.paddingLeft="20px";
story.style.fontFamily="Calibri";
writtendetailssection.appendChild(story);
moviedetailssection.appendChild(writtendetailssection);
document.body.appendChild(moviedetailssection);
let movietitle=moviedetails.title;

let youtubeapikey="AIzaSyAhW1eLNh8QnuzvpMiUjjUCwL81LZETSUQ";
  let cloudconsoleyoutubetrailerfetchinglink="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxresults=1&q="+movietitle+"Trailer"+"&key="+youtubeapikey;
  
    let cloudconsoleyoutubetrailerfetching=await (await fetch( cloudconsoleyoutubetrailerfetchinglink)).json();
    let yttrailerid=cloudconsoleyoutubetrailerfetching.items[0].id.videoId;
    let youtubetrailerfetchinglink="https://m.youtube.com/watch?v="+yttrailerid;
  console.log(youtubetrailerfetchinglink);
  
  let divfortrailermusicreview=document.createElement('div');
  document.body.appendChild(divfortrailermusicreview);

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
console.log(youtubereviewfetchinglink);
 let youtubereviewbutton=document.createElement('button');
youtubereviewbutton.textContent="Watch Review";
youtubereviewbutton.className="reviewbutton";
divfortrailermusicreview.appendChild(youtubereviewbutton);
youtubereviewbutton.addEventListener("click",()=>{
window.location.href=youtubereviewfetchinglink;
})

})

