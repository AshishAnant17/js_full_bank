//for fo loop 
const arr=[1,2,3,4,5,6]
for (const element of arr) {
    //console.log(element);
}

const username="Ashish"

for (const element of username) {
    //console.log(element)
}

// const myobject={
//     name:"ashish",
//     reg:"21bcb0174"
// }//donot work for object
// for (const element of myobject) {
//     console.log(myobject[element])
// }

//maps

const map=new Map()
    map.set("IN","India")
    map.set("US","united states of america")
    map.set("pak","pakistan")

for (const [key,val] of map) {
    console.log(`country code :  ${key},  country name: ${val}`)
}