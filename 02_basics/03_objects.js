//singleton==object.create()//create only one instance 

//object literals 

const mysum=Symbol("key-1")//if you don't use bracket in object its of string type not symbol

const js_user={
    name:"Ashish",
    "full_name":"ashishanantgoogle.com",
    [mysum]:"mykey1",
    age:18,
    location:"India",
    isloggedin:true,
    lastloggedin:["Monday","Tuesday"],

}

// console.log(js_user.name);
// console.log(js_user["name"])
// console.log(js_user["full_name"])
// console.log(js_user[mysum])


//you can commit changes to data 
js_user.email="pappuchoudhary@gmaildotcom"

//you can also freeze that no one will be able to make changes in it 

//Object.freeze(js_user)

js_user.email="kananangmailcom"

//console.log(js_user)

js_user.greeting=function(){
    console.log("Hello_world")
}
//console.log(js_user.greeting)//[Function (anonymous)]function execute nahi hua hai bass function ka reference 

console.log(js_user.greeting())
js_user.greetingtwo=function(){
    console.log(`hello user ${this.name}`)
}

console.log(js_user.greetingtwo())


