//les evenements on click dynamiser votre site web 
const button = document.querySelector('button');
button.addEventListener('click',() =>{

     //alert('you click me');
});


const items = document.querySelectorAll('li');
items.forEach(item  => {
  item.addEventListener('click', (e) => {
    
    //console.log(e); //event object creer par le browser 
    //console.log(e.target);//je peux savoir l'item cliqué
    e.target.style.textDecoration = 'line-through';
  
  });

})

