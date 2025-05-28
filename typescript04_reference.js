"use strict";
// Arrays: 
let arr = [1, 2, 3, 4, "yash"]; // --> Array 
// Tuples: 
// Let see how to create a Tuples : 
let arr1 = [12, "yash"];
// let arr2: [string,number] = [22,"bansal"]; --> This will show error becuase phala string hona chiya tha then number aisa es liya ku ke ye hamra tuple hai.
// Note :  Basically tuple mein aapka specify ho jata hai ke ketna element aya ga aap ke and kon sa element kis position par aya ga ye bhe aap specify kar deta hai in case of tuple. if that order will not follow then it will show error.
// Enums : 
// Enums are basically type of key-value pairs : 
// Let see how to create an enums : 
var UserStatus;
(function (UserStatus) {
    UserStatus["Notfound"] = "Page not found 404";
    UserStatus["Pending"] = "Internet Error page loading pending 500";
})(UserStatus || (UserStatus = {}));
UserStatus.Notfound;
// Any , Unknown , Void , Never , Undefined
// Let's talk about Any type :
let val; // --> this is having a type "any" because we don't specify anything to this variable according to type  
val = 12;
val = "bansal"; // --> ts don't show any error
// But dekho aisa type "any" rakhna bhe shi nhi hai because ab type safety voilate ho rhi hai(b/c es val ko ab hum number,string,etc kuch bhe assign kar skta hai) that means using such type use js instead of ts --> Now how to solve this is by giving type to this variable.
let val1;
// val1 = "yash"; --> Now this will show error b/c val1 ka type "number" hai
val1 = 12;
// Let's Understand about Unknown Type in TS : 
let num1;
num1 = 12;
num1 = "yashbansal";
if (typeof num1 === "string") {
    num1.toUpperCase();
}
console.log(num1);
// unknown mein hum ko check karna he ho ga whether it is string or not and uss basis par he hum us par operation perform kar skta hai.
// Let understand "void" Type : 
// Jab function kuch return nhi kar rah hota hai then hum uska return type likhte hai "void" in TS.
function hello() {
    console.log("hello");
}
// Null Type : 
let bansal;
// undefined Type : 
let C;
// Now this variable C has the type undefined.
// Never Type : 
// ye hum bhot kaam he use karta hai
// never mostly use hota hai vaha par jaha par hume pata he ke ye chij he chalti raha ge eska badd ke chij execute nhi ho ge.
// for Example : 
function ab() {
    while (true) {
    }
}
ab();
console.log("codeurge aka yashbansal"); // --> This become dull indicating this will never execute.
