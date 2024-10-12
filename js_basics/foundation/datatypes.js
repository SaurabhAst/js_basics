"use strict"; // treat all JS code as newer version now a days by default

console.log(typeof null); //object
console.log(typeof undefined); //undefined 

const id= Symbol('123')
const anotherId= Symbol('123')

console.table([id, anotherId]);
console.log(id === anotherId); //different values

const bigNumber = 34928349309n //use 'n' in end to make it bigInt

/* 
datatypes are categorised on the basis of how they are accessed i.e. either vy call by value 
or call by reference 
1. Primitives(call by value)              
any alterations are done on the copy of the data not on the actual data (refernce to actual data is not given)
(7): String, Number, BigInt, Boolean, null, undefined, Symbol
2.Non-primitive (refernce type)
memory reference is directy allocated hence changes are made where the actual data is stored
(3): Array, Objects, Functions
*/