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

//console.log(id===currentid)

const bigNumber=123479489739387n
//console.log(typeof bigNumber)
//In JavaScript, each time you create a Symbol, even with the same description, it generates a unique value.


//non primitive
//Array,function,object

let newarray=[1,2,2,34,5,6]
//console.log(typeof newarray)// return object

let myobject={
    name:"Ashish",
    age:22
}

let myfunction=function(){
    console.log("hello world")
}
myfunction();//output hello world
//console.log(myfunction);//output [Function: myfunction] output if function object that is its type


/////////////////
//primitive(stack)  and non premitive me heap kaam karega 
//in stack we get the copy of the variable so the change is made to the copy 

let mygmail="Ashishgoogledotcom"
let newgmail=mygmail
newgmail="pappugoogledotcom"
//console.log(mygmail)//Ashishgoogledotcom
//console.log(newgmail)//pappugoogledotcom


//whereas in heap we get the original reference to the new variable also so lets check 
let userone={
    email:"user@googledotcom",
    upi:"user@ybl"
}
let usertwo=userone;
usertwo.email="harshthakur@gmail.com"
console.log(userone.email)//harshthakur@gmail.com
console.log(usertwo.email)//harshthakur@gmail.com
//in heap original value also get changed


