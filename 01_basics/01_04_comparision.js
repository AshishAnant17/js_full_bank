console.log(1>2);

//something on null and undefined other stuff are easy 
console.log(null>0)
console.log(null==0)//null ke value ko 0 ss compare karke then usme 0 assign vv kar diya hai 
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)//undefined ke case me aisa nahi hota hai 
console.log(undefined>=0)

//strict comparison when you have to compare the value as well as the datatypes using ===

console.log("2"==2)//true
console.log("2"===2)//false