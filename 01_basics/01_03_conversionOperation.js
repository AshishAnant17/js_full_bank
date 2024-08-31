let score=33
/*console.log(typeof score)
console.log(typeof(score));

these are the two way by which you can represent the type of variable
*/

let score_second="Hitesh"
//type conversion
let value_in_number=Number(score_second);
//console.log(typeof(value_in_number));

/*
now what are the conversions number do 
input  output 
"33"    33
"33abc" NaN(iska type hai yy that is Not A Number)
null    0
notdefined 
true 1
false 0
*/

let booleanchecking=1
let booleancheck=Boolean(booleanchecking)
//console.log(typeof(booleancheck));
/*
now some famous output input for boolean
input output
0   false
1   true
""  false
"Hitesh" true


*/

let somenumber=33
let stringconvertednumber=String(somenumber)
//console.log(typeof(stringconvertednumber))



//***operations */

let value=3;
let negativevalue=-value
//console.log(negativevalue)

/*some of the basic operation
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//2 raised to the power 3
console.log(2/2);
console.log(2%2);
*/

let str1="Ashish"
let str2=" Anant"
let str3=str1+str2;
// console.log(str1+str2)

// console.log(1+"2") //12 output javascript convert both operand in same type
// console.log("1"+2+2)//122 it didnot added it just concatnated
// console.log(1+2+"3")//32 not it will add and then concatnate
// console.log(+true)//1
//console.log(true+)//syntax error
//console.log(+" ");//0


let gamecounter=100
gamecounter++
console.log(gamecounter)










