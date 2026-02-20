// Task 1 – forEach()
let array = ["Arun", "Bala", "Charan", "David"];
array.forEach((array, index) => {
    console.log(`${index + 1} - ${array}`);
});

//output :-
// 1 - Arun
// 2 - Bala
// 3 - Charan
// 4 - David

// Task-2
let numbers = [2, 4, 6, 8];

let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

//output :-
// (4) [4, 16, 36, 64]
// 0: 4
// 1: 16
// 2: 36
// 3: 64
// length: 4

// Task-3 Products:
let products = [
    { name: "Mobile", price: 15000 },
    { name: "Laptop", price: 60000 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 12000 }
];
let filteredProducts = products.filter(product => product.price > 10000);
console.log(filteredProducts);

//output :-
// (3)[{…}, {…}, {…}]
// 0: { name: 'Mobile', price: 15000 }
// 1: { name: 'Laptop', price: 60000 }
// 2: { name: 'Monitor', price: 12000 }
// length: 3

// Task-4 find()
let product = [
    { name: "Mobile", price: 15000 },
    { name: "Laptop", price: 60000 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 12000 }
];
let findValueProduct = products.find(product => product.price > 10000);
console.log(findValueProduct);

//output :-
// { name: 'Mobile', price: 15000 }
// name: "Mobile"
// price: 15000

// Task-5 – reduce()
let marks = [80, 75, 90, 60];

let totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
console.log("Total Marks:", totalMarks);

//output :- Total Marks: 305

let averageMarks = totalMarks / marks.length;
console.log("Average Marks:", averageMarks);

//output :- Average Marks: 76.25

// Task-6 some()
let ages = [12, 15, 17, 22];
let hasAdult = ages.some(age => age >= 18);
console.log("Has adult:", hasAdult);

//output :- Has adult: true

// Task-7 every()
let scores = [60, 70, 80, 90];
let allPassed = scores.every(score => score >= 35);
console.log("All passed:", allPassed);

//output :- All passed: true

// Task-8 Sort()
let prices = [200, 40, 1000, 5, 75];

let ascendingPrices = [...prices].sort((a, b) => a - b);
console.log("Ascending prices:", ascendingPrices);
//output :- Ascending prices: 
// (5) [5, 40, 75, 200, 1000]
// 0: 5
// 1: 40
// 2: 75
// 3: 200
// 4: 1000
// length: 5
let descendingPrices = [...prices].sort((a, b) => b - a);
console.log("Descending prices:", descendingPrices);
//output :-
// (5) [1000, 200, 75, 40, 5]
// 0: 1000
// 1: 200
// 2: 75
// 3: 40
// 4: 5
// length: 5

// Task-9 Capitalize First Letter
let name = "naveen";
let capitalizedName = name.slice(0, 1).toUpperCase() + name.slice(1);
console.log(capitalizedName);
//output :- Naveen

// Task 10 Count Letter
let text = "javascript";
let count = text.split("a").length - 1;
console.log("Count of 'a':", count);
//output :- Count of 'a': 2

// Task 11  Clean Input
let userInput = " Hello World ";
let cleanedInput = userInput.trim().toUpperCase();
console.log(cleanedInput);
//output :- HELLO WORLD


// Task 12 - Replace & Check
let sentence = "I love python";
let modifiedSentence = sentence.replace("python", "javascript");
console.log("Modified sentence:", modifiedSentence);
//output :- Modified sentence: I love javascript

let startsWithI = modifiedSentence.startsWith("I");
console.log("Starts with 'I':", startsWithI);
//output :- Starts with 'I': true

let endsWithJavascript = modifiedSentence.endsWith("javascript");
console.log("Ends with 'javascript':", endsWithJavascript);
//output :- Ends with 'javascript': true


//BONUS – Real World Challenge (Employee Salary System)

let employees = [
    { name: "A", salary: 25000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 15000 },
    { name: "D", salary: 60000 }
];

let highSalaryEmployees = employees.filter(employee => employee.salary > 30000);
console.log("Employees with salary > 30000:", highSalaryEmployees);
//output :- Employees with salary > 30000: 
// (2) [{…}, {…}]
// 0: {name: 'B', salary: 40000}
// 1: {name: 'D', salary: 60000}
// length: 2

let firstHighSalaryEmployee = employees.find(employee => employee.salary > 30000);
console.log("First employee with salary > 30000:", firstHighSalaryEmployee);
//output :- 
// First employee with salary > 30000: 
// {name: 'B', salary: 40000}
// name: "B"
// salary: 40000

let totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log("Total salary:", totalSalary);
//output :- Total salary: 140000


let hasLowSalary = employees.some(employee => employee.salary < 20000);
console.log("Any employee salary < 20000:", hasLowSalary);
//output :- Any employee salary < 20000: true

let allAbove10k = employees.every(employee => employee.salary > 10000);
console.log("All employees salary > 10000:", allAbove10k);
//output :- All employees salary > 10000: true