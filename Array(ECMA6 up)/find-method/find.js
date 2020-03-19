const scores = [20,12,30,40,70,100,80,10,14];

/*  Find method 

Retourne  la valeur du premier element trouvé qui 

valide certain condition dans une callback function

*/

/* Find the first Score that's over 50 */

const resultat = scores.find((score)=>{

  return score > 50;

});

console.log(resultat);