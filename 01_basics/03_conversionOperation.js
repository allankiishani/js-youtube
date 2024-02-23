let score = 33

// if you want to know the type while working on the backend 

console.log(typeof score); // output - number
console.log(typeof (score));// output - number 

score = "33"
console.log(typeof score); //string


/* but what if even if the variable is of type 
string but for you to perform some operation you 
need it to be a number so how will you convert it
 to a number */

 let valueInNumber = Number(score) // number should be in "N" capital only 

 console.log(typeof valueInNumber); //number

 // but the question is even if it gets converted will the number be the same ? 
 // what if the score is "33abc" what will happen?

 score = "33abc"
 console.log(typeof valueInNumber); // output is still a number, lets try to print it now 
 console.log(valueInNumber) // 33 but for sir it was NaN 
 // for "Number" datatype js is not reliable thats why people use typescript because theres no strict check but he will teach dw 
 score = null
 console.log(valueInNumber); //output is 0 but if paina when score was declared 33 and if you keep that output is 33 even after changing score to null or undefined 

 score = undefined 
 console.log(valueInNumber) // output is NaN

 /*
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0 
undefined => NaN 

NaN is not a number
 */

//let isLoggedIn = 1 // output is true
//let isLoggedIn ="" // empty string => false
//let isLoggedIn = "ishani" // non-empty string => true 
//let isLoggedIn = 3 // any Number => true 
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
1 => true  
empty string => false 
ishani => true 
*/

let someNumber = 33 
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
