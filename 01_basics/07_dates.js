//dates
let mydate=new Date();//type of mydate is object 
// console.log(mydate);//2024-09-03T10:03:36.704Z

// console.log(mydate.toString());//Tue Sep 03 2024 10:03:36 GMT+0000 (Coordinated Universal Time)

// console.log(mydate.toDateString());//Tue Sep 03 2024

// console.log(mydate.toLocaleString());//9/3/2024, 10:03:36 AM
// console.log(typeof(mydate));//object

//you can even create on your own

let createdDate=new Date(2023,9,23)//if you give 1 digit in month then month will start from 0 means 0 is january and 1 is february

//console.log(createdDate.toDateString());//Mon Oct 23 2023

let createddate=new Date("2024-09-24");
//console.log(createddate.toLocaleString());//9/24/2024, 12:00:00 AM

let mytimestamp=Date.now();//to analyze time like who finsihed the test before 
/*
The Date.now() method in JavaScript returns the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (also known as the Unix Epoch). This value represents the current time at the moment the method is called. Therefore, let mytimestamp = Date.now(); will store the current timestamp (in milliseconds) in the variable mytimestamp.
*/
//console.log(mytimestamp);
console.log(createdDate.getTime());



