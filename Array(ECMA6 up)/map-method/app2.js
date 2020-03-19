
const prix = [20,12,30,40,70,100,80,10,14];

// tableau des objets
const products = [

{name : 'Levis', price : 100},
{name : 'Nike', price : 80},
{name : 'adidas', price : 70},
{name : 'Marlboro', price : 40},
{name : 'gomme', price : 10}
];

//product est l'objet iteré donc automatiquement c'est products 

const saleProd = products.map((product)=>{


    if(product.price >= 70){

        return {name:product.name , price:product.price / 2}
    }

    else{

        return product ;
    }
})

console.log(saleProd , products);