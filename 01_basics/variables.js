const REG_NO="21BCB0174"
const account_id=21139
let account_email="ashish.google.com"
var account_password="12345"
account_city="muzaffarpur"

let accountstate
//account_id=2 not allowed because its a constant
console.log(account_id)
console.table([REG_NO,account_id,account_email,account_password,account_city,accountstate])
account_email="abhishek.google.com"
account_password="123456"
account_city="muzaffarnagar"
console.table([account_email,account_password,account_city])
/*
prefer not to use var because javascrip has a problem that it is not able to identify scope i.e block_scope/functional_scope
*/

