var res = function(arr){
let newArr = [];
 for(var i=0; i < arr.length; i++){
 
 if(newArr.indexOf(arr[i]) == -1 && arr[i] !== "") {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])