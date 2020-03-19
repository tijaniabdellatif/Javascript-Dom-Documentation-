
/*
la methode map prend un array et le chaine à un autre array :

steps methode map: 

==> iterating an Array : parcourir un Array 

==> Return and updated value : retourne une nouvelle valeur pour chaque element dans le tableau prix.

==> push les nouvelles valeurs dans un autre tableau 

map est une methode non destructive

tout ce petit systeme est une callback function 

*/

const prix = [20,12,30,40,70,100,80,10,14];

const halfPrix = prix.map((price)=>{

return price / 2;

});
console.log(halfPrix);


