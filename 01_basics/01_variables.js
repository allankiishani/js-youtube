const accountId = 12345
let accountEmail ="ishani.allanki@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 // not allowed 

accountEmail = "fshd@gj.com"
accountPassword = "23344"
accountCity = "bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

/* 
prefer not to use var 
because of issue in block scope and functional scope 

use "let" instead of var 
if you declare a variable in js but do not give it any value when you it print it , it will show you "undefined"
*/ 