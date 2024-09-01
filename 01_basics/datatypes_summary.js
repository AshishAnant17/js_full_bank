//primitive
/*string,bigNumber,Number,boolean,null,undefined,symbol

*/
const score=21//number
const scorevalue=32.3//number


const isloggedin=true
const outsidetemp=null
let usermail

const id=Symbol('123')
const currentid=Symbol('123')

console.log(id===currentid)

const bigNumber=123479489739387n
console.log(typeof bigNumber)
//In JavaScript, each time you create a Symbol, even with the same description, it generates a unique value.


//non primitive
//Array,function,object

let newarray=[1,2,2,34,5,6]
console.log(typeof newarray)// return object

let myobject={
    name:"Ashish",
    age:22
}

let myfunction=function(){
    console.log("hello world")
}
myfunction();//output hello world
console.log(myfunction);//output [Function: myfunction] output if function object that is its type 