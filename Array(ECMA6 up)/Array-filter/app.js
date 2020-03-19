

/* la methode filter 

la particularité de cette méthode est de trouver un élement

spécifique dans le tableau Scores et avec une condition sur l'existence de l'element 

la methode filter à deux options : 

1 - Iterating an Array : parcourir le tableau

2- Checking item : et Faire un check de chaque element dans le tableau

Tous ce petit systeme est une callBack function 

*/

/*
 Dans cet petit Exemple :

 1) la methode filter continue à faire le traitement et check si les elements 
 
 existent dans la chaine du tableau scores

 2) dans le cas on retourne false la methode filtre les elements

 et retoune un empty array 

 3) avec une condition comme score > 20, l'array va etre filtrer et 

 retourne un array filtré 
*/ 

/*const scores = [10,40,40,50,100,120];
scores.filter(()=>{
    //return true;
   // return false;
 
})*/



/* pour parcourir et filter on va pas utiliser un forEach avec une fonction
  
mais la methode filter et on passe un element dans le parametre de la callback

function Array.filter((score) =>{})

la méthode filter est non destructive, le tableau initial reste inchangé 

=======Esseyez d'afficher le tableau filtré======= ??
*/
const scores = [10,40,15,50,100,120,13];

const filtred = scores.filter((score)=>{

   return score > 20;
});




