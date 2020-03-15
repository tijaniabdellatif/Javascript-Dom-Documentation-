
//first paragraphe on document
const para = document.querySelector('p');
//console.log(para.innerText);//innerText is a proprety
//para.innerText = 'Bonjour tous le monde !!'; //overiding 
//para.innerText += ' Tous le monde !!'; //appending

const paras = document.querySelectorAll('p');

/*paras.forEach(par =>{
    console.log(para.innerText);
    par.innerText += ' new text';
})*/


const content = document.querySelector('.content');
//console.log(content.innerHTML);

//content.innerHTML += '<h2> my new heading </h2>';


/* Database of people et je veux les afficher sur le HTML*/

const people = ['tijani','abdellatif','yes'];
people.forEach(par =>{

  content.innerHTML += `<p class="BEM">${par}</p>`; //snippet

});

