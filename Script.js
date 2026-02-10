//All Tasks in one File.
//Task - 1 //Create a var variable. Declare,initialize, reassign, redeclare and print the final value.

var a = 10 //Decleration  //initilasation
a = 15 // reuse     // reInitialiazation
var a = 20 // reDeclration
console.log(a);


//Task - 2 //Create a let variable. Declare, initialize, reassign, attempt redeclaration and print value.

let b = 10 //Decleration  //initilasation
b = 14 // reuse     // reInitialiazation
    // let b = 16 // reDeclration
console.log(b);


//Task - 3 //Create a const variable. Declare and initialize. Attempt reassigning and redeclaring.

const c = 15 //Decleration  //initilasation
    // c = 10 // reuse     // reInitialiazation
    // const c = 20 // reDeclration
console.log(c);


//Task - 4 // Create one var, one let, and one const variable. Reassign only allowed variables and print all.

var i = 10
let j = 12
const l = 14
i = 13
console.log("Var", i);
console.log("Let", j);


//Task-5 //Print one variable using console.log(), alert(), and document.writeln().

var sum = 20
console.log(sum); //The output will be displayed on the developer tool console
// alert(sum)  //The output will be pop-up in the screen whenever we refresh or relode the page
document.writeln(sum) //The output will be desplayed on the webpage(UI)


//Task - 6 //Use confirm(). Store the result in a let variable and print it using console.log().

let result = confirm("Are you sure you want to proceed?");
console.log(result); //The output will be displayed on the developer tool as abolean value(True or Falsa) as per the users action

//Task - 7 //Use prompt(). Store user input and print using console.log() and document.writeln().

let userInput = prompt("Please enter your name:");
console.log(userInput); //The output will be in the developer tool
document.writeln("Hello, " + userInput + "!"); //the output will be on the webpage(UI)

//Task - 8 //Print one variable using console.log(), console.warn(), and console.error().

var num = 11
console.log(num);
console.warn(num);
console.error(num);

//Task-9 //Create var price = 100. Reassign to 200. Print before and after values.

var price = 100
console.log("Before reassign", price); //The ouitput will be 100 because it is printed before the reassignment

price = 200
console.log("After reassign", price); //The output will be 200 because it is printed after the reassignment


//Task - 10 //Create a let boolean variable. Assign true, reassign false, and print final value.

let rest = true
console.log("Boolean Assigned Value", rest);

rest = false
console.log("After Assigned value", rest); //The output is false 

//Task -11 //Create a string variable. Reassign a new string and print both values separately.

var Str = "Krishna"
console.log(Str); //The ouitput will be Krishna because it is printed before the reassignment

Str = "Radha"
console.log(Str); //The ouitput will be Radha because it is printed after the reassignment


//Task - 12 //Redeclare the same var variable three times with different values and print final value.

var sub = 1
var sub = 2
var sub = 3
console.log(sub); //The output will be 3 because the javascript will only take the value which is assigned lastely to the variable


// Task - 13 //Create a const object. Modify one property value and print the object.

const person = {
    name: "John",
    age: 30
};

console.log("Initial person object:");
console.log(person);

person.age = 35;

console.log("Updated person object:");
console.log(person);

// Task - 14 //Create one var, one let, and one const variable. Print using console.log(), console.warn(), console.error().

var arr = 10
console.log("console value", arr);
console.warn("warn value", arr);
console.error("error value", arr);


let bum = 20
console.log("console value", bum);
console.warn("warn value", 10);
console.error("error value", bum);


const com = 30
console.log("console value", com);
console.warn("warn value", com);
console.error("error value", 222);