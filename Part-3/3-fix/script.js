const arr = [9,8,5,6,4,3,2,1];
let sum = 0;
(function(arr) {
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr);