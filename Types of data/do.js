// Task-1
let name = "Jaswanth";
let number = 1234;
let isLearning = true;
let undefinedVariable;
let value = null;
console.log("Your Name is:", name, typeof(name)); //Output :- Your Name is: Jaswanth string
console.log("Your Number is:", number, typeof(number)); //Output :- Your Number is: 1234 number
console.log("Are you learning JS? :", isLearning, typeof(isLearning)); //Output :- Are you learning JS? : true boolean
console.log("Undefined Value is :", undefinedVariable, typeof(undefinedVariable)); //Output :- Undefined Value is : undefined undefined
console.log("Your value is :", value, typeof(value)); //Output :- Your value is : null object

// Explaination about difference between undefined and null :-
// 1. undefined: -
//     undefined represents a variable that has been declared but not assigned a value.
// It is the
// default value of a variable that has not been initialized.

// 2. null: -
//     null represents the intentional absence of any object value.
// It is a primitive value that represents a deliberate non - value or empty value.

// Task-2

let colors = ["red", "green", "blue", "yellow", "black"]
console.log("First Element is:", colors[0]); //output :- First Element is: red
console.log("Last Element is:", colors[colors.length - 1]); //output :- Last Element is: black
console.log("Third Element is:", colors[2]); //output :- Third Element is: blue
console.log("Total Number of Elements is:", colors.length); //output :- Total Number of Elements is: 5

// Task-3

let student = {
    name: "Naveen",
    skills: ["HTML", "CSS", "JS"],
    experience: "1 year",
    location: "India"
}

console.log("Your Name is:", student.name); //output :- Your Name is: Naveen
console.log("First Skill is:", student.skills[0]); //output :- First Skill is: HTML
student.role = "Frontend Developer"
console.log("New Role Added is:", student.role); //output :- New Role Added is: Frontend Developer
console.log("All Details Of Student Object :", student); //output :- All Details Of Student Object : {name: 'Naveen', skills: Array(3), experience: '1 year', location: 'India', role: 'Frontend Developer'}

// Task-4

let x = 10
let y = 3
console.log("Addition is :", x + y); //output :- Addition is : 13
console.log("Subtraction is :", x - y); //output :- Subtraction is : 7
console.log("Multiplication is :", x * y); //output :- Multiplication is : 30
console.log("Division is :", x / y); //output :- Division is : 3.3333333333333335
console.log("Modulous is :", x % y); //output :- Modulous is : 1
console.log("Exponentiation is", x ** y); //output :- Exponentiation is 1000

// Task-5

let a = 5;
let postIncrement = a++;
console.log("Post-increment (a++):");
console.log("Value of a after post-increment:", a); // 6
console.log("Value stored in postIncrement:", postIncrement); // 5

let b = 5;
let preIncrement = ++b;
console.log("Pre-increment (++b):");
console.log("Value of b after pre-increment:", b); // 6
console.log("Value stored in preIncrement:", preIncrement); // 6

// Unexpected output example
let c = 2;
c = c++;
console.log("Value of c:", c); // 2 (unexpected output)
// Explanation:
// This happens because c++ is a post-increment operation.
// The value of c is first assigned to c (i.e., c = 2), and then c is incremented (i.e., c becomes 3).
// However, the incremented value is not assigned back to c, so c remains 2.

// TASK 6 – Power Assignment

let num = 3
num **= 4
console.log("Result is:", num); //output :- Result is: 81
//Explaination : Here the num value is multiplying 4 times 3*3*3*3 = 81

// Task-7

console.log(5 == "5") //output :- true
console.log(5 === "5") //output :- false
console.log(0 == false) //output :- true
console.log(0 === false) //output :- false
    //Explaination :-
    // == :- LoosyTypeEqual :- is the loose equality operator. It checks if the values are equal, but it performs type coercion if the types are different. This means it converts one or both operands to a common type before comparing.
    // === :- StrictlyTypeEqual :- It is a StrictlyType equality operator. It checks if both the types and values are equal.

// Task-8

let username = "admin"
let password = "1234"

if (username == "admin" && password == "1234") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

// Task-9: OR Condition

let role = "manager";

if (role == "admin" || role == "manager") {
    console.log("Access Granted");
}

// Task-10: NOT Operator
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("User is NOT logged in");
}

// Task-11 Voting Eligibility

let age = 17;

let eligibility = age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);

/* FINAL TEAM CHALLENGE - Mini Profile System */

let user = {
    name: "Arjun",
    age: 22,
    isLoggedIn: true,
    skills: ["JS", "React"]
};

console.log(user.name);
console.log(user.skills[0]);

if (user.isLoggedIn && user.age >= 18) {
    console.log("Access Allowed");
}

let status = user.isLoggedIn ? "LoggedIn" : "Logged Out";
console.log(status);

user.age++;
console.log(user.age);

user.skills = ["Node.Js"];
console.log(user.skills);