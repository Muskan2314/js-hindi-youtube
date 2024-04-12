// Primitletive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

//const score = 100
//const scoreValue = 100.3
//const isLoggedIn = false
//let uerEmail;
//const id = Symbol('123')
//const anotherId = Symbol('123')

//console.log(id === anotherId);
//const bigNumber = 34546788654n

//Reference (Non primitive)

//Array, Objects, Functions

//const heros = ("shaktiman","naagraj","doga");
//let myObj={
  //  name:"yash",
   // age: 22,
//}
//console.log("heros");
//const myFunction=function(){
    //console.log("hello world")
//}
//console.log(typeof bigNumber)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//*****************************************

// stack memory, heap memory
// stack memory me sb (primitive datatype)use hote hai

//stack memory use hoti hai to jo bhi variable declare kiya uski copy milti hai

//heap memory me sb (non primitive datatype)use hote hai
// heap memory use hoti hai to jo bhi variable declare kiya uska referencw milta hai original value ka jo bhi change karenge vo original me change hoga

//example:
let myname = "hiteshchoudharydotcom"
let anothername = myname
anothername = "chaiaurcode"
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email="muskan@google.com"

console.log(userOne.email);
console.log(userTwo.email);