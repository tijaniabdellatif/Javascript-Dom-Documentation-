const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener('submit', e =>{
    e.preventDefault();
    //validation : 
    const user = form.username.value;
    
    if(user === ""){

        alert('you must fill the box');
        return false;
    }

    if(pattern.test(user)){

        feedback.innerHTML = `<p style="color:green;">${user} Welcome !</p>`;
        const p = document.createElement('p');
        p.textContent = `hello ${user}`;
        feedback.append(p);
        p.classList.add('suces');
    }

    else{

        feedback.innerHTML = `<p style="color:red;">${user} not Welcome !</p>`
        const par = document.createElement('p');
        par.textContent = `go back ${user}`;
        feedback.append(par);
        par.classList.add('error');
    }
});


//live Feedback

form.addEventListener('keyup', e => {
     
    //les deux valeurs vont afficher la mm choses  
    //e.target = vise target de l'evenement = valeur de l'input 
    //form.username.value = valeur de l'input
     console.log(e.target.value,form.username.value);

     

     if(pattern.test(e.target.value))
     {
        
        form.username.setAttribute('class','passed');
         
     }

     else{

        form.username.setAttribute('class','not');
     }
})

