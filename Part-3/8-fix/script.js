var arr = ["guvi", "geek", "zen", "fullstack"];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})(arr);