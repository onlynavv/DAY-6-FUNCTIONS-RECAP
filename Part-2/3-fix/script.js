var new_string = "";
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 10; i >= 0; i-- ) {
    console.log(i)
    console.log(numsArr[i])
 new_string += numsArr[i]

 if(i <= numsArr.length - 1 && i!=0){
     new_string += " "
 }
}
console.log(new_string.length);