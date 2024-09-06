//for each loop

const coding=["js","ruby","java","python","css"]
//forEach isko length batane ki koi jaruart nahi hai it will manage on its own 
//isko call backfunction dena padega syntax function (function name nahi likhna hai so function (item ,ye travel karega ) {})
coding.forEach(function (item){
    //console.log(item);
})

//now using arrow vv traverse kar skte hai 

coding.forEach((item)=>{
    //console.log(item)
})

//now the condition when you are getting object inside the array 

const myArray=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myArray.forEach((item)=>{
    //console.log(item.languageName)
})
//you can also traverse by using a function name 
function printMe(item){
    console.log(item);
}
    
//coding.forEach(printMe)

//forEach can carry a lot of thing 
coding.forEach( (item, index, arr)=> {
        console.log(item, index, arr);
} )

