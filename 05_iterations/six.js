//study about filter method 

const coding = ["js", "ruby", "java", "python", "cpp"]

/*const values=coding.forEach((elements) => {
    return elements
});
console.log(values);
 The forEach method is designed for iterating over elements in an array but does not return any value—its return value is always undefined. This is why values is undefined in your code.

If you want to create a new array based on some condition or transformation, you should use methods like map, filter, or reduce, depending on what you're trying to achieve.
*/

const values=coding.filter((item)=>{
    return item
})
console.log(values)

//for each ke liye you can do like this 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums=[];
myNums.forEach((item)=>{
    if(item>4){
        newnums.push(item)
    }
})//using foreach you can create the new array and get the desired value 

//console.log(newnums)

//filter

const newvalues=myNums.filter((item)=>{
    return item>4
})
console.log(newvalues)

//now filter on real life values

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const filteredgenre=books.filter((bk)=>{
    return bk.genre==='Science'
})
//console.log(filteredgenre)

let userbooks=books.filter((item)=>(item.edition>2000))
console.log(userbooks)