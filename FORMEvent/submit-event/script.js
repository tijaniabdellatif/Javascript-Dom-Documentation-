const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

//Using eventlistener on submit not on click 
form.addEventListener('submit', e =>{
    e.preventDefault();
     
    //verification si vous recuperer la valeur de l'input
     //console.log(username.value);

    //Acceder à l'objet form et recupere username 
    //vu que c'est un fils avec in id = 'username'
     console.log(form.username.value);
});