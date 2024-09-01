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
