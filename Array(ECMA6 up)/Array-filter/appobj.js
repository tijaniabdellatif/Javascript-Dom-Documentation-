//tableau des Objets 

const users = [
    {name : 'tijani',premium : true},
    {name : 'corona',premium : true},
    {name : 'anass',premium : false},
    {name : 'zoro',premium : false}
];

const premium = users.filter(user => {

    return user.premium;
});

//OR //Ecriture ECMA 6 up 

const prem = users.filter(user => user.premium);

console.log(premium);