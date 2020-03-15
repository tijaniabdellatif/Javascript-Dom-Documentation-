//ouvrir le browser sur la console et explorer le dom 
//taper document puis regarder ce que la console vous affiche 
//sur la console Tapez document. et explorez les methodes de l'objet document 

//

const para = document.querySelector('p'); //grab an element from the dom the best way
console.log(para);
const Spara = document.querySelector('.err');
console.log(Spara);
const par = document.querySelector('div.err');
console.log(par);
//browser Help utilisaton nth:child() 
//lien documentation : https://www.w3schools.com/cssref/css_selectors.asp
const pre = document.querySelector('body > div:nth-child(2) > p.err');
console.log(pre);

const pret = document.querySelectorAll('p');

pret.forEach(param =>{

   console.log(param);

});
console.log(pret[1]);
