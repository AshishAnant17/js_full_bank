const myarray=[2,4,6,74,3]
const myheroes=["shaktiman","sallu"]
const myarray2=new Array(1,2,2,34)
// console.log(myarray)
// console.log(myheroes)
// console.log(myarray2)
// console.log(myarray[0]);
//now as array of javascrit is resizable we can push and pop element from this 
// myarray.push(8);
// myarray.push(9);
// console.log(myarray);
// myarray.pop();

myarray.unshift(9);//attach element at the start 
myarray.shift();//remove element from the start

// console.log(myarray.includes(9));
// console.log(myarray.indexOf(2));
// console.log(myarray);


//join concept copy the array in newarray and and add it as a type of string 

const newarray=myarray.join();
// console.log(myarray);//[ 2, 4, 6, 74, 3 ]
// console.log(newarray);//2,4,6,74,3

//slice,splice concept

console.log("A ",myarray);

console.log(myarray.slice(1,3));

console.log("B ",myarray);

console.log(myarray.splice(1,3));

console.log("C ",myarray);

//the difference between slice and splice is that slice doesn't change the real array and it doesnot  include the end element where as splice changes the real array as well as it includes the last element in the array also








