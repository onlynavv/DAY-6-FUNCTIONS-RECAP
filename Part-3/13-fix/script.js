var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce((a,c)=>{
    console.log(a,c)
    let result = a
    if(c % 2 !== 0){
        a = a+c
        return a
    }
    return result
},0);
console.log(s);