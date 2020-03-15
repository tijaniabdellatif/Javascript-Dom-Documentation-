

const param = document.querySelector('article');

console.log(param.children);

//convert on array to use foreach

//Array.from(param.children).forEach((child) =>{

   // child.classList.add('article-element');
//});


const title = document.querySelector('h2');
   
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

//the path 

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);


//chaining 
console.log(title.nextElementSibling.parentElement.children);






