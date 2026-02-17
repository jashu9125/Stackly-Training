// Task-1 
let word = "developer";
let vowelCount = 0;
let vowels = "aeiou";

console.log("Characters:");
for (let a of word) {
    console.log(a);
}

console.log("\nVowels:");
for (let a of word) {
    if (vowels.includes(a)) {
        console.log(a);
        vowelCount++;
    }
}

console.log(`\nTotal letters: ${word.length}`);
console.log(`Total vowels: ${vowelCount}`);
//outputs :-
//output 1:- Print each character using for...of
// Characters:
// d
// e
// v
// e
// l
// o
// p
// e
// r
//output 2:- Print only vowels
// Vowels:
// 2 e
// o
// e
//output 3:- - Count how many letters are there
// Total letters: 9
// Total vowels: 4

// Task-2
let skills = ["HTML", "CSS", "JavaScript", "React"]
console.log("skills:");

for (let a1 of skills) {
    console.log(`I Know ${a1}`);
}
console.log(`Total length of skills:${skills.length}`);
//outputs :-
//output 1:- Print all skills
// HTML
// CSS
// JavaScript
// React
//output 2:- Print skill with message: 
// I know HTML
// I Know CSS
// I Know JavaScript
// I Know React
//output 3:- Count total skills
// Total length of skills:4

// Task-3
let employee = {
    name: "Arun",
    role: "Tester",
    salary: 30000,
    experience: "2 years"
}
console.log("\nValues:");
for (let a2 in employee) {
    console.log(employee[a2]);
}
console.log("\nKeys:");
for (let a2 in employee) {
    console.log(`${a2} : ${employee[a2]}`);
}
console.log(employee.name);
//outputs :-
//output 1:- Keys:
// Arun
// Tester
// 30000
// 2 years

//output 2:- Values:
// name: Arun
// role: Tester
// salary: 30000
// experience: 2 years
//output 3:- Print: name : Arun
// Arun

// Task-4
function table(num) {
    for (let a3 = 1; a3 <= 10; a3++) {
        console.log(`${num} x ${a3} = ${num * a3}`);
    }
}
table(5)
    //output :-
    // 5 x 1 = 5
    // 5 x 2 = 10
    // 5 x 3 = 15
    // 5 x 4 = 20
    // 5 x 5 = 25
    // 5 x 6 = 30
    // 5 x 7 = 35
    // 5 x 8 = 40
    // 5 x 9 = 45
    // 5 x 10 = 50

// Task-5
function square(sq) {
    return sq * sq;
}
let result = square(5);
console.log(`Square of 5 is: ${result}`);
//output :- Square of 5 is: 25

// Task-6
function register(name, department, role = "Developer") {
    console.log(`Name: ${name}`);
    console.log(`Department: ${department}`);
    console.log(`Role: ${role}`);
}
// Call with role
register("Tanu", "Ece", "Manager");
// Call without role (defaults to "Developer")
register("Jaswanth", "HR");
//outputs :-
//output 1:- Call with role
// Name: Tanu
// Department: Ece
// Role: Manager
//output 2:-  Call without role
// Name: Jaswanth
// Department: HR
// Role: Developer

// Task 7 – Scope Prediction
function checkScope() {
    if (true) {
        var a3 = 100
        let b3 = 200
    }
    console.log(a3)
        // console.log(b3)
}
checkScope()
    //outputs :-
    //output 1:- What will print?
    //100
    //output 2:- What error occurs?
    //Uncaught ReferenceError: b3 is not defined
    //output 3:- Why?
    //Explaination :-
    // 1. var a = 100 is function-scoped, so it's accessible throughout the checkScope() function, even outside the if block. Hence, console.log(a) prints 100.
    // 2. let b = 200 is block-scoped, so it's only accessible within the if block. Trying to access b outside the block results in a ReferenceError.
    // 3. The error occurs because b is not defined in the scope of the console.log(b) statement.

// Task-8
console.log(x)
var x = 10
    // console.log(y)
let y = 20
    //outputs :-
    //output 1:- undefined
    //output 2:- Uncaught ReferenceError: Cannot access 'y' before initialization
    //Explaination :- Here the var scope is var = Global Scope, let scope is let = Block Scope
    // 1. var x = 10: The variable x is hoisted to the top of the scope, but its assignment (= 10) happens at the original line. So, console.log(x) prints undefined.
    // 2. let y = 20: The variable y is also hoisted, but it's not initialized until the assignment line. Accessing y before initialization is a Temporal Dead Zone (TDZ) error, throwing a ReferenceError.

// Task-9
function greet(name) {
    console.log(name);
}
greet("Welcome")
    //output :- Welcome

// Task-10
let annonymous = function(a4, b4) {
    console.log(a4 + b4);
}
annonymous("Addition of Annonymous Function :", 10, 20)
    //output :- Addition of Annonymous Function :10

// Task-11
let arrow = (a5, b5) => {
    console.log(a5 - b5);
}
arrow(20, 10)
    //olutput :- 10

// Task-12
function add(a6, b6) {
    return a6 + b6;
}

function subtract(a6, b6) {
    return a6 - b6;
}

function calculate(operation, a6, b6) {
    console.log(operation(a6, b6));
}
calculate(add, 10, 5)
    //output :- 15
calculate(subtract, 10, 5)
    //output :- 5

// Task-13
function total(a7) {
    return function(b7) {
        return function(c) {
            console.log(a7 + b7 + c); //output :- 30
        }
    }
}
total(5)(10)(15)

// Task-14
function* reward() {
    yield "Level 1 Completed";
    yield "Level 2 Completed";
    yield "Level 3 Completed";
    yield "Team Winner";
}
let genval = reward();

console.log(genval.next().value);
// Output: Level 1 Completed

console.log(genval.next().value);
// Output: Level 2 Completed

console.log(genval.next().value);
// Output: Level 3 Completed

console.log(genval.next().value);
// Output: Team Winner

console.log(genval.next().value);
// Output: undefined

// Using for...of loop
for (let val of reward()) {
    console.log(val);
}
// output :-
// Level 1 Completed
// Level 2 Completed
// Level 3 Completed
// Team Winner

// Final Team Challange

// Object with team details
let team = {
    name: "Tittansa Team",
    captain: "Jaswanth",
    score: 0
}
console.log("-------------------------------");
console.log("---------Final Team Challange---------");
// Function to print team details using for...in
function printTeamDetails(team) {
    for (let key in team) {
        console.log(`${key}: ${team[key]}`);
    }
}
// Default parameter for bonus calculation
function calculateBonus(score, bonus = 10) {
    return score + bonus;
}
// Callback function for score calculation
function calculateScore(a8, b8, callback) {
    let score = a8 + b8;
    callback(score);
}
// Generator function for rewards
function* rewards() {
        yield "Level 1 Completed";
        yield "Level 2 Completed";
        yield "Level 3 Completed";
        yield "Team Winner";
    }
    // Currying for bonus calculation
let bonusCalculator = (bonus) => (score) => score + bonus;
let calculateBonusCurried = bonusCalculator(10);

// Named function for score update
function updateScore(team, score) {
    team.score = score;
}

// Arrow function for logging
let logMessage = (message) => console.log(message);

// Main execution
printTeamDetails(team);


let rewardGen = rewards();
logMessage(rewardGen.next().value); // Level 1 Completed
logMessage(rewardGen.next().value); // Level 2 Completed

calculateScore(10, 20, (score) => {
    updateScore(team, score);
    logMessage(`Score: ${team.score}`); // Score: 30
    logMessage(`Bonus: ${calculateBonus(team.score)}`); // Bonus: 40
    logMessage(`Bonus (Curried): ${calculateBonusCurried(team.score)}`); // Bonus (Curried): 40
});
logMessage(rewardGen.next().value); // Level 3 Completed
logMessage(rewardGen.next().value); // Team Winner
//output :-
//-------------------------------
// ---------Final Team Challange---------
// name: Tittansa Team
// captain: Jaswanth
// score: 0
// Level 1 Completed
// Level 2 Completed
// Score: 30
// Bonus: 40
// Bonus(Curried): 40
// Level 3 Completed
// Team Winner