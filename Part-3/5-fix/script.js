const newArray=[1,3,2,5,10];
const myPrime=newArray.filter((num)=>{
 for(let i=2;i<=Math.sqrt(num);i++){
 if(num%i===0){
    return false;
 }
 }
 return true;
});
console.log(myPrime);