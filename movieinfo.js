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
titleinfo='Moviename:  &nbsp'+moviedetails.title;
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




