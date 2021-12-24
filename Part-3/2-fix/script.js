let n = 123;
console.log(add(n));

function add(n)
{
let sum =0;
const value = String(n).split("").map((item)=>{
    return Number(item)
})
for(var i=0;i<value.length;i++){
 sum+=value[i]
 }
 return sum;
}