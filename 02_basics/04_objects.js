//singleton 
//const tinderuser=new Object();

const tinderuser={};

tinderuser.id="21bcb0174"
tinderuser.name="Ashish"
tinderuser.isLoggedin=true;

//console.log(tinderuser);
//{ id: '21bcb0174', name: 'Ashish', isLoggedin: true }

//now learning concept of object inside object

const regularuser={
    email:"ashishanant8292@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ashish",
            lastname:"Anant"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)//Ashish

//merging of objects by spreading

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}

const obj3={...obj1,...obj2}
//uu can you assign function also
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)
//now if you get an array full of objects

const myarray=[
    {
        id:"21bcb0174",
        email:"harsh@gmailcom"
    },
    {
        id:"21bec2429",
        email:"sarvmotu@gmail.com"
    }
]

//console.log(myarray[0].id)
//now if you want to access the key ,values and enteries of an object 

console.log(Object.keys(tinderuser))
//[ 'id', 'name', 'isLoggedin' ]


console.log(Object.values(tinderuser))
//[ '21bcb0174', 'Ashish', true ]

console.log(Object.entries(tinderuser))
//it basically divides it in an array [ [ 'id', '21bcb0174' ], [ 'name', 'Ashish' ], [ 'isLoggedin', true ] ]
//use tinderuser.hasOwnProperty('isLoggedin')

