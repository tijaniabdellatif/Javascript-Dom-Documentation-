const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
form.addEventListener('submit', e =>{
    e.preventDefault();
    //validation : 
    const user = form.username.value;
    const pattern = /^[a-zA-Z]{6,12}$/;

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
