var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e); //true
var expression2 = (e < d); //false

// Use comparison operators so all expressions below log to the console as true
console.log(a == b); //changed from === to ==
console.log(b == e); //removed bang
console.log(c > b); //change from less than to greater than
console.log(d >= 0); //added an equal sign to make it greater than or equal to 

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2); //added a bang in front of expression2
console.log(expression1 || expression2); // got rid of bang on expression1; could also  leave bang on expression1 and add a bang to expression2. 
  
