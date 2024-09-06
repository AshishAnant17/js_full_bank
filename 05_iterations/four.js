//loop traversal in object 

//for in loop

const myobject={
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const [key,val] in myobject) {
//     console.log(`shortcut is ${key} and subject is ${val}`)
// }
/*

shortcut is j and subject is s
shortcut is c and subject is p
shortcut is r and subject is b
shortcut is s and subject is w

wrong output
*/

// so for object traversal and to access its key and its value we can do like this 

for (const key in myobject) {
    //console.log(`shortcut is ${key} and subject is ${myobject[key]}`)
}

//for in loop for array 
const arr=[12,3,4,5,5]

for (const key in arr) {
    //console.log(`${key} element is ${arr[key]}`)
}


//now use for in map 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key)
// }//map ke liye kaam nahi karega
