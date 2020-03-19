const scores = [20,12,30,40,70,100,80,10,14];

/*reduce method 

ne retourne pas neccesairement un nouveau Array, 
 
il peux retourner n'importe qu'elle valeur (Single or complex), primitive ou structured value(object;array etc...)

Reduce step : 

==> iterate the array 

==> check if there's a condition 

==> return the values that validate the condition or conditions

tout ce syteme est  avec une callback function 
*/


//how many scores are > 50 

//for each individual element 'accumulate', on lance the callback function pour vérifier la condition 

//qui va etre rempli par 'current' le resultat de retour est un nombre. 

const res = scores.reduce((accumulate,current)=>{

      if(current > 50)
      {
          accumulate++;
      }

      return accumulate;
}, 0); 

console.log(res);

/* Syntaxe 

  Array.reduce(())=>{


  }, position);

*/

/* La methode Reduce return a single Value */
