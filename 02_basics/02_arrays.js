const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
//marvel_heroes.push(dc_heroes);

//console.log(marvel_heroes);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] so its basically combines the entire array 
//now if you want to access the array point you can do like a 2d matrix

//console.log(marvel_heroes[3][1]);

//so better way to do is concat and the fact concat return a new array so you need to store it 

// const total_heroes=marvel_heroes.concat(dc_heroes);
// console.log(total_heroes);


//now one more better way to add element to one array to another array is by spreading the array and its better than concat because you can concat more than two arrays together 

const all_new_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//now if you have got an array which has an array inside it you can make it flat by using flat keyword

const another_array=[1,2,3,[4,5,6],7,8,9,[9,1,3,[3,4,5]]]
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array)


//now if you have got input and you have to check whether its an array or not and if you have to convert that to array

// console.log(Array.isArray("Ashish"));//false

// console.log(Array.from("Ashish"))//[ 'A', 's', 'h', 'i', 's', 'h' ]

// console.log(Array.from({name:"Hitesh"}));//return an empty array []

//now if you have got two or more variable and you want to combine them to make an array

const score1=100;
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));

