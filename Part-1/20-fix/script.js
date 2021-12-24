var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg)

// hi is printed, because 0 is falsy value, so if(0) wont be executed, if("0") is truthy value, so hi is printed