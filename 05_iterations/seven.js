const newnums=[1,2,3,44,5,6,7,7]

const newvalues=newnums.map((item)=>(item*10)).map((item)=>item+1).filter((item)=>(item>=40))
console.log(newvalues)