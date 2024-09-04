const course={
    coursename:"Compiler Design",
    coursefees:"999",
    coursementor:"sarv"
}
//now if you want to access it 

//you have to repeat course.coursename something like this 
//so object destructing help in this 

const{coursefees:fees}=course
console.log(fees);

//now json api
// {
//     myname:"ashish",
//     "myid":"21bcb0174",
//     price:"free"
// }

//it might be possible you will not receieve the api in the form of object you will be receiving it in the form of array
// [
//     {

//     }
//     {

//     }
// ]

//to study api you can use json formatter


