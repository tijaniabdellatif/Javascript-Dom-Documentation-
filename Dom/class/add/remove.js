//adding and remove classes in CSS

//const parag = document.querySelector('p');
//console.log(parag.classList); //list of classes

//parag.classList.add('error');

//parag.classList.remove('error');

//parag.classList.remove('lorem');
//parag.classList.add('suces');

const para = document.querySelectorAll('p');

para.forEach( p => {
  
    console.log(p.textContent); //innerText dont show invisible text

    if(p.textContent.includes('error')){

        p.classList.add('error');
    }

    if(p.textContent.includes('suces')){

        p.classList.add('suces');
    }
});

//toggle method

 const title = document.querySelector('.title');

 title.classList.toggle('toggle');
