const form = document.querySelector('.signup-form');
form.addEventListener('submit', e =>{
    e.preventDefault();
     

     console.log(form.username.value);
});


//testing Regex 

const username = '34354shaun';
const name ='@holahola'
;
//creating Regex
const pattern = /[a-z]{6,}/;
const pattern1 = /^[a-z]{6,}$/;

//using method test 
//return true or false
let result = pattern.test(username); 
let res = pattern1.test(name);
console.log(result);
console.log(res);


if(res == true && result == false){

    console.log("this is the right Regex");
}
else{
    console.log("the test is well but not wanted");
}

//testing the Regex with the method Search
// return an int and the position of matching Character
// if he finds it it return the position if it's not it return -1
let resort = username.search(pattern); 
console.log(resort);