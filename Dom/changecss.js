const title = document.querySelector('h1');

//overiding the style
//title.setAttribute('style','margin:50px');

//add Extra style 

console.log(title.style);
console.log(title.style.color);


title.style.margin = '50px';
title.style.color = 'red';
title.style.fontSize = '60px';

title.style.margin = '';