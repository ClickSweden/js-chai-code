const accountId = 144442
let accountEmail = "test@email.com"
var accountPassword = "12345"
accountCity = "Uppsala"
let accountState;

// accountId = 2    // Not allowed to change a const variable (which is already assigned above!)
accountEmail = "new@email.com"
accountPassword = "00000"
accountCity = "Sialkot"


// console.log(accountId);

/* 
Prefer not to use 'var' 
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);