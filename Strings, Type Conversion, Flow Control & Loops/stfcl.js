// Task - 1 String & Type Conversion Tasks
let firstName = "Naveen"
let lastName = "Kumar"
console.log(firstName + lastName); //output :- NaveenKumar
console.log(`${firstName} ${lastName}`); //output :- Naveen Kumar
let fullName = `${firstName}${lastName}`
console.log(fullName.length); //output :- 11

// Task -2 Predict Type
console.log(typeof("5" + 2)) //output :- string
console.log(typeof(5 + "2")) //output :- string
console.log(typeof(true + 1)) //output :- number
console.log(typeof(false + "hello")) //output :- string
console.log(typeof(null + 1)) //output :- number

//Explaination :- 
// String :- Here a string anything is String.
// typeof("5" + 2) :- one String and one number also converts to String. 
// typeof(5 + "2") :- one number and one String also converts to String.
// typeof(true + 1) :- Here the boolean value contains true or false true means "0" false maeans "1". now the boolean value true contains a number now we adding the boolean and number converts a number.
// typeof(false + "hello") :- one boolean and one String also converts to String.
// typeof(null + 1) :- The null value represents a "0" and concatinating a number so it gets a number.Here

// Task -3 Manual Type Conversion
//Number()
console.log(Number("100")); //output :- 100
console.log(Number("10.5")); //output :- 10.5
console.log(Number("abc")); //output :- NaN
console.log(Number(true)); //output :- 1
console.log(Number(false)); //output :- 0
console.log(Number(null)); //output :- 0
console.log(Number(undefined)); //output :- NaN
//console.log(Number("abc")); console.log(Number(undefined)); These two prints Nan

// Task -4 Boolean Truthy/Falsy Test
console.log(Boolean(0)); //output :-false
console.log(Boolean(1)); //output :- true
console.log(Boolean("")); //output :- false
console.log(Boolean("")); //output :- false
console.log(Boolean("hello")); //output :- true
console.log(Boolean(null)); //output :- false
console.log(Boolean(undefined)); //output :- false
console.log(Boolean[1, 2]); //output :- undefined
console.log(Boolean({})); //output :- true
let q = 10;
console.log(Boolean({ k: q })); //output :- true
// If we don't give q or {} value means it Shows Uncaught ReferenceError: q is not defined
// If we don't assign value to [] means it shows Uncaught SyntaxError: Unexpected token ']' why means array is expecting some value like string number

// Task -5 Even or Odd

let num = 7;
if (num % 2 == 0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is odd`);
}
//output :- We given number 7 it gives the output as 7 is odd.

// Task -6 Grade System
let marks = 75
if (marks <= 90) {
    console.log("Grade A+");
} else if (marks >= 75 && marks <= 89) {
    console.log("Grade B");
} else if (marks >= 50 && marks <= 74) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
//output :- 75 Means :- Grade A+

// Task -7 Switch Day Finder
let dayNumber = 3
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There is No other days after dayNumber");
}
//output :- Wednesday

// Task -8 Reverse Counting
let numb = 5;
for (let i = numb; i >= 1; i--) {
    console.log(i);
}
// output :-
// 5
// 4
// 3
// 2
// 1

// Task -9 Multiplication Table
let nums = 3;
for (let i = 1; i <= 10; i++) {
    console.log(`${nums}*${i}=${nums*i}`);
}
// output: -
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27
// 3 * 10 = 30

// Task -10 Sum of First 10 Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum:${sum}`);
//output :-Sum:55

// BONUS – Mentor Level
if ("0") {
    console.log("true block");
} else {
    console.log("false block");
}
//Explaination :-  a non-empty string is considered truthy, even if the string contains a numeric zero ("0"). 
// The string "0" is a string, not a number, and it's a non-empty string, so it's evaluated as true in the if condition.