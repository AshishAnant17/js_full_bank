function sayMyName(){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
}
//console.log(sayMyName())

//add two number
function addTwoNum(number1,number2){
    return number1+number2;
    //console.log(number1+number2) now if you initialise a variable want to get a result from this it will give undeifined because return is different fucntion and consol.log() is different function
}

//console.log(addTwoNum(2,3))

//function for login username

function loginUserName(username){
    if(!username){
        console.log("please enter valid username")
        return //if you want to return fromhere only
    }
    console.log(`${username} logged in`)
}

// loginUserName("Ashish")//Ashish logged in
// loginUserName();//undefined logged in


//use of rest operator it is basically ... even ... is also know as spread operator it depends upon the usecase whether you want rest opeartor or spread operator

//now suppose you are about to take so many numbers as input 

function calculatecartprice(...num1){
    return num1
}

//console.log(calculatecartprice(200,300,400,500))//[ 200, 300, 400, 500 ] agar humne dot dot dot nahi lagay hota then only first number would have been printed

//now we will know how can we pass object as an input to function

const user={
    name:"Ashish",
    id:"21bcb0174"
}

function handleanyobject(anyobject){
    console.log(`username is ${anyobject.name} and userid is ${anyobject.id}`)
}

console.log(handleanyobject(user))

//you can pass the object directly also

console.log(handleanyobject({name:"sandu",id:"21bcb098"}))

//nwo when you pass an array to a function and you want the particular element of an array 

const newarray=[200,399,499,319]
function resultfromarray(anyarray){
    return anyarray[2];
}
console.log(resultfromarray(newarray))
