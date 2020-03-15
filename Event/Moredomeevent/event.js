//copy 

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy',() => {

 console.log("wait my content is copyrighted");


});


const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    //console.log(e);
    console.log(e.offsetX,e.offsetY);
});

box.removeEventListener('mousemove',e => {
  
    if(e.offsetX == 123 && e.offsetY == 29){

        console.log('SALINA!');
        e.stopPropagation();
    }

});