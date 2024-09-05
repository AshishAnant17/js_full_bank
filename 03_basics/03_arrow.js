//usage of this keyword

const user={
    username:"Ashish",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to the screen`)//this refer to the current variable in the object

        console.log(this)//print everything of user object
    }

    

}

// user.welcomemessage();
// user.username="sam";
// user.welcomemessage();


//console.log(this)//{},arr agara aap direct webpage ke console me kartre then undefine aa jata

///now function ke andar this use karke dekho 

// function chai(){
//     let username="Ashish"
//     console.log(this.username)//undefined as the output because  When you call chai() as a regular function (i.e., not as a method of an object), this refers to the global object
// }
// chai()

//now declaration of arrow 

// const addTwo=(num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4))

//now you can do the same thing without using {}
const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(3,4))

//its simple if you declaring arrow using{} you have to use return and if you are using () you dont have to use return keyword

