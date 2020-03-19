/* Tableau des Objets  */
const score = [
  {player : 'tijani',score : 80},
  {player : 'karim', score : 30},
  {player : 'tijani', score : 100},
  {player : 'souad', score : 74},
  {player : 'tijani',score : 80},
  {player : 'karim', score : 30},
  {player : 'tijani', score : 100},
  {player : 'souad', score : 74},
  {player : 'tijani',score : 80},
  {player : 'karim', score : 30},
  {player : 'tijani', score : 100},
  {player : 'souad', score : 74}
];

/* Trouvez ce que fait cette fonction  */
const tijaniTotal = score.reduce((acc,curr)=>{

           if(curr.player === 'tijani'){
            acc += curr.score
           }

           return acc;

},0)

console.log(tijaniTotal);