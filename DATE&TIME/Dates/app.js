//Date & times 

//A Date constructor to create a date object

const now = new Date();

console.log(now);
console.log(typeof now);

//get year months day and times 

console.log("getFullYear :",now.getFullYear());
console.log("getdate :",now.getDate());
console.log("gettime :",now.getTime());
console.log("getmonth :",now.getMonth());
console.log("getday :",now.getDay());
console.log("gethours :",now.getHours());
console.log("getmin:",now.getMinutes());
console.log("getsecond :",now.getSeconds());

//timestamp

console.log(now.getTime()); //en ms

//date string

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());