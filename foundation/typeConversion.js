let score = NaN

//console.log(typeof(score));
let converted = Number(score) //converts values in score to number, first letter capital for all 
//console.log(typeof(converted));
//console.log(converted);
/* 
even converts strings which were not purely number like 'abc', give NaN in these cases
"33" => 33
"33asd", undefined, => NaN
null => 0, since null represents no value but still is a value
*/

let isLoggedIn = 1
let toBoolean = Boolean(isLoggedIn) // converts to truthy or falsy values
console.log(toBoolean); 
/*
1 => true, 0 => flase
"" => false, "hello" => true
*/ 