const num = [10, 20, 30, 40,50,60,70,80,90,100] 

let sum = num.reduce((acc,curr)=>{
    acc+=curr
    return acc
})
console.log(sum);