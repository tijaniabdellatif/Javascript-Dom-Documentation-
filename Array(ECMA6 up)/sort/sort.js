
//sorting a String 
const names = ['tijani','hagoromo','chun li','naruto','luffy']

//la methode sort est destructive, il altere l'array initial
names.sort();
console.log(names);

//sorting a number 
const scores = [10,20,50,5,70,45];


/* Pour cette etape vous n'allez pas avoir un array trié 
   correctement, parce que la methode sort watch just le premier 
   rand du nombre ==> 40 avec sort le watch est sur just 4 mais 
   pas tous le nombre 40
*/
scores.sort();
console.log(scores); 
/* Fin  */ /*solution ==> */

scores.sort((a,b)=>{

    return b-a;
})

console.log(scores);





/*sorting an object  : on veux les trier selon le max Score*/
const players = [


    {name : 'tijani',score: 30},
    {name : 'hagoromo',score: 70},
    {name : 'naruto',score: 5},
    {name : 'orochi',score: 88},
    {name : 'bruce lee',score: 43}
]

//players.sort(); // it will not work 
/* (a,b) pour comparer deux elements de l'objet : sorting par élimination */
players.sort((a,b)=>{
   
   if(a.score > b.score){
          
    return -1; //si on veut que a come first 

   }else if(b.score > a.score){

    return 1; //si on veux que b comme first
   }else{

    return 0; //si il sont egaux, on fait rien
   }
});

console.log(players);



/* Shorter way */
/*
players.sort((a,b)=>{

    return b.score - a.score;
});*/
