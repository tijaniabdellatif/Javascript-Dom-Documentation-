const link = document.querySelector('a');

console.log(link.getAttribute('href'));

//set attribute

link.setAttribute('href','https://www.youcode.ma');
link.innerText = 'Site Youcode';


const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class','sucess');

//adding attribute
message.setAttribute('style','color:red'); 

