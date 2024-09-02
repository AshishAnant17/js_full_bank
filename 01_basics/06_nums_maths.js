const score=2300
console.log(score)//2300

//now if you specifically want to declare something in a number format then you can do like this 
const secondscore=new Number(100);//[Number: 100]
console.log(secondscore);

//converting to string 
console.log(secondscore.toString().length);
console.log(secondscore.toFixed(2));//100.00 basically shows decimal value

//study about precision
const othernumber=123.8976
console.log(othernumber.toPrecision(3));//123 aage ss round off kar dena 
console.log(othernumber.toPrecision(2));//1.2e+2 aage ss roundoff karke 
const hundreds=10000000
console.log(hundreds.toLocaleString('en-In'));//used to get the indian representation of values


/////Maths/////


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(2.3));
console.log(Math.floor(3.9));
console.log(Math.round(5.5));
console.log(Math.min(2,3,4,5,6,8));
console.log(Math.random())//will generate any value between 0 and 1
console.log((Math.random()*10)+1)//value starting from 1

