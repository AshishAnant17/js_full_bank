//var ek variable declare karne ke liye datatype tha jisko agar ham scope ke andar vv declare kar rhe the fir vv uska value bahar me accesible tha like var a inside scope ham declare now agar ham c ko bahar access karna agar chahe tooh ye not defined dena chahiye tha output but ye usko value ko print kar diya so its not a good thing to talk

//global scope sabke liye block scope block ke liye

function one(){
    const username="Ashish"
    function two(){
        const website="youtube"
        console.log(username)
    }

    //console.log(website); cannot access this
    two()


}
one()
//same for if function also 

if(true){
    const username="ashishanant"
    if(username==="ashishanant"){
        const website="google"
        console.log(username);
    }
    //console.log(website)//not accessible

}

//console.log(username) not accessible 

/*****two way of function declaration  */


console.log(addone(5))// return 6 
function addone(num1){
    return num1+1;
}

//console.log(addtwo(5)) this willl return error as its like an expression you cannot declare it befor the function declaration
const addtwo=function(num1){
    return num1+2;
}
