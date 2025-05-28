// Type Inference 
// Type Annotations 

let value = 12; // --> This is called Type Inference b/c TS ne khud se type infer kar leya hai for variable "value". 


let value1 : number; // --> This is called Type Annotation b/c hum ne khud se type assign kara hai to the variable "value1".


// Interfaces : 
interface User {
    name: string,
    email: string,
    password: string,
    gender ?: string   // --> ? ye question mark lagna ka matlab hai ke hamra gender wali property optional hai matlab user esko de bhe skta hai or nhi bhe totally depend on user (koi bhe error nhi aya ga agar user gender nhi bhe de ga object mein that is passes to the function )
}


function getdata(obj : User) : void {

}

getdata({
    name: "yash",
    email: "yash@gmail.com",
    password: "yash1234"
    // gender: "male"
})

// Extending Interfaces : 
interface Admin extends User {
    admin: boolean
}

function run(object : Admin) : void {
    // object.admin = true;
}


// Note : Agar hum same name ke interface banta hai to vo merge ho jata hai into a single interface.

// For Example:  
interface abcd {
    name: string
}
interface abcd {
    email: string
}

function ABCD(objj : abcd) : void { 
    // objj.email
    // objj.name
}


// Type Aliases: 
// Hum chahai to hum khud se koi-bhe type bana skta hai and then unko use kar skta hai :
// For Example: 
type sankhiya = number; // --> This is how we can make our own type.

let vari:sankhiya;

type khalii = void;

function print(): khalii {
    console.log("Print Function");
}

print();

// Major use of Type Aliases is : 
type value = string | number | null;

let number1: value;

number1 = "yash"
number1 = 123;
number1 = null;
// These above all are correct.

// number1 = true; --> this will show error because type boolean is not assignable to type value.


// Now let's understand about union and intersection types : 
// Union Types: 
// For Example: 
let word : string | number; // --> This is how we can make our own union type.
// Ab ess above line ka matlab ho gaya ke word mein hum string value bhe de skta hai or number value bhe de skta hai.

// Now let's understand about intersection types : 
// For Example: 
type name = {
    name : string
    email : string
}

type Employee = name & {
    id : number
    salary : number
}

function getEmployeeData(obj : Employee) : void {
    console.log(obj.name, obj.email, obj.id, obj.salary);
}

getEmployeeData({name: "yash",  email: "yash@gmail.com", id: 123, salary: 1234567890})
// Ye sari kahani hai intersection types ke.