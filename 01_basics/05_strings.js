const name="Ashish"
const repocount=50;
//ne wversion of concatenating string and representing it 
//console.log(`My name is ${name} and my repo count is ${repocount}`);


const gamename=new String('ashish-abhay-anant');
//console.log(gamename[0]);//its not array but when its declared it store the functon as an array and like a hashmap 
//console.log(gamename.length);
//console.log(gamename.toUpperCase());
//study about trim
let newstring="   ASHISH   "
console.log(newstring);
console.log(newstring.trim());


const url="https://google.com/google%20microsoft";
console.log(url.replace('%20','-'));
console.log(url.includes('pappu'));
console.log(gamename.split('-'));// convert the input in splitted array output [ 'ashish', 'abhay', 'anant' ]


