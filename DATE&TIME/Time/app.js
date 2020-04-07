
const before = new Date('February 1 2015 7:30:40');

const now = new Date();

console.log(now.getTime(),before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.floor(hours/24);
console.log(mins);  
console.log(hours); 
console.log(days);

console.log(`my blog was created in ${days} days ago `);


//converting timestap to date object

const timestamp = 2699420; 

console.log(new Date(timestamp));