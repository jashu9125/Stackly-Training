// Task-1 For Array
let teamA = [
    { name: "John", role: "Developer" },
    { name: "Arun", role: "Tester" }
];

let teamB = [
    { name: "Naveen", role: "Designer" },
    { name: "David", role: "Manager" }
];
let data = [...teamA, ...teamB]
console.log("Merge Data is : ", data);

//output for merge data :-
// (4) [{…}, {…}, {…}, {…}, {…}]
// 0 : {name: 'Jaswanth', role: 'CEO'}
// 1 : {name: 'John', role: 'Developer'}
// 2 : {name: 'Arun', role: 'Tester'}
// 3 : {name: 'Naveen', role: 'Designer'}
// 4 : {name: 'David', role: 'Manager'}
// length : 5


data.push({ name: "Jashu", role: "HR" })
console.log("Added New Employee : ", data);

//output for push :-
//Added New Employee :
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0 : {name: 'Jaswanth', role: 'CEO'}
// 1 : {name: 'John', role: 'Developer'}
// 2 : {name: 'Arun', role: 'Tester'}
// 3 : {name: 'Naveen', role: 'Designer'}
// 4 : {name: 'David', role: 'Manager'}
// length : 5


let backUpTeam = [...data]
console.log("Clone Data is : ", data);

//output for clone data :-
//Clone Data is : 
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0 : {name: 'Jaswanth', role: 'CEO'}
// 1 : {name: 'John', role: 'Developer'}
// 2 : {name: 'Arun', role: 'Tester'}
// 3 : {name: 'Naveen', role: 'Designer'}
// 4 : {name: 'David', role: 'Manager'}
// length : 5

data.pop()
console.log("Removed Last Employee : ", data);

//output for pop :-
//Removed Last Employee : 
// (4) [{…}, {…}, {…}, {…}, {…}]
// 0 : {name: 'Jaswanth', role: 'CEO'}
// 1 : {name: 'John', role: 'Developer'}
// 2 : {name: 'Arun', role: 'Tester'}
// 3 : {name: 'Naveen', role: 'Designer'}
// 4 : {name: 'David', role: 'Manager'}
// length : 5

data.unshift({ name: "Jaswanth", role: "CEO" });
console.log("Added new employee at first position : ", data);

//output for unshift :-
// Added new employee at first position :  
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0 : {name: 'Jaswanth', role: 'CEO'}
// 1 : {name: 'John', role: 'Developer'}
// 2 : {name: 'Arun', role: 'Tester'}
// 3 : {name: 'Naveen', role: 'Designer'}
// 4 : {name: 'David', role: 'Manager'}
// length : 5

// Task-2 For Object
let emp1 = { name: "John", salary: 30000 };
let emp2 = { name: "John", salary: 45000 };

let objMerge = {...emp1, ...emp2 }
console.log("merge data is : ", objMerge);

//output for merge data :-
// merge data is :  
// {name: 'John', salary: 45000}
// name : "John"
// salary : 45000

objMerge.salary = 50000
console.log("Updated Salary to 50k : ", objMerge);

//output for updated salary :-
// Updated Salary to 50k :  
// {name: 'John', salary: 50000}
// name : "John"
// salary : 50000

let clonedEmp = {...objMerge };
console.log("Cloned Employee:", clonedEmp);

//output for cloned data :-
// Cloned Employee: 
// {name: 'John', salary: 50000}
// name : "John"
// salary : 50000

let { name, salary } = clonedEmp;
console.log(`${name} earns ${salary}`);

//output for destructure and prints :- 
//John earns 50000

// Task-3 Product Cart System
let cart = ["Laptop", "Phone", "Tablet", "Watch"];
cart.pop()
console.log("Removed last element : ", cart);

//output for pop :-
//Removed last element :  
//(3) ['Laptop', 'Phone', 'Tablet']

cart.push("Tv", "Pc")
console.log("Added two items : ", cart);

//output for adding two items at last :-
// Added two items :  
// (5) ['Laptop', 'Phone', 'Tablet', 'Tv', 'Pc']

cart.unshift("IPhone")
console.log("Added one item at begining : ", cart);

//output for adding one item at begining :-
// Added one item at begining :  
// (6) ['IPhone', 'Laptop', 'Phone', 'Tablet', 'Tv', 'Pc'] 

cart.shift()
console.log("Removed first item :", cart);

//output for removing first item :-
// Removed first item : 
// (5) ['Laptop', 'Phone', 'Tablet', 'Tv', 'Pc']

let index = cart.indexOf("Tablet");
cart.splice(index, 1, "Camera");
console.log("Replaced Tablet with Camera:", cart);

//output for replacing item :-
// Replaced Tablet with Camera:
// (5) ['Laptop', 'Phone', 'Camera', 'Tv', 'Pc']

console.log("Phone exists:", cart.includes("Phone"));

//output for checking the item exist or not :-
//Phone exists: true

console.log("Index of Watch:", cart.indexOf("Watch"));

//output for finding index
// Index of Watch: -1

// Task-4 Student Marks Analyzer
let marks = [78, 90, 66, 84, 99, 45];
marks.sort()
console.log("Sorted elements are : ", marks);

//output sorted elements are :-
// Sorted elements are : 
// (6) [45, 66, 78, 84, 90, 99]

marks.reverse();
console.log("Reversed Sorted Marks:", marks);

//output for reverse sorted :-
// Sorted elements are :  
// (6) [45, 66, 78, 84, 90, 99]

let top3Marks = marks.slice(0, 3);
console.log("Top 3 Marks:", top3Marks);

//output for slicing top 3 marks :-
// Top 3 Marks: 
// (3) [99, 90, 84]

let index1 = marks.indexOf(84);
console.log("Index of 84:", index1);

//output for finding index value :- 
// Index of 84: 2

let index2 = marks.indexOf(45);
marks.splice(index2, 1, 50);
console.log("Updated Marks:", marks);

//output for updated marks :-
// Updated Marks: 
// (6) [99, 90, 84, 78, 66, 50]

// Task-5 Nested Data Extractor

let company = [
    "Stackly", ["Frontend", ["HTML", "CSS", ["JavaScript"]]]
];

console.log("Original Data:", company);

//output for original data :-
// Original Data: 
// (2) ['Stackly', Array(2)]

let jsNormal = company[1][1][2][0];
console.log("JavaScript (Normal):", jsNormal);

//output for Extract javascript :-
// JavaScript (Normal): JavaScript

let [
    companyName, [
        department, [html, css, [javascript]]
    ]
] = company;

console.log("JavaScript (Destructuring):", javascript);

//output for destructuring :-
// JavaScript (Destructuring): JavaScript

let flattened = company.flat(Infinity);
console.log("Flattened Array:", flattened);

//output for Flatten Entire Array :-
// Flattened Array: 
// (5) ['Stackly', 'Frontend', 'HTML', 'CSS', 'JavaScript']

company[1][1][1] = "Tailwind";
console.log("After Replacing CSS:", company);

//output for replacingwith tailwind :-
// After Replacing CSS: 
// (2) ['Stackly', Array(2)]

// Task-6 Attendance System (Rest Operator)
function attendance(day, ...students) {
    console.log("Day:", day);

    //output for printing day :-
    // Day: Monday

    console.log("Total Students:", students.length);

    //output for student count :-
    // Total Students: 4

    console.log("Last Student:", students[students.length - 1]);

    //output for printing last student :-
    // Last Student: Sujith

    return students;

    //output for printing all student array :-
    // All Students:
    // (4) ['Jaswant', 'Tanu', 'Swetha', 'Sujith']
}
let students = attendance("Monday", "Jaswant", "Tanu", "Swetha", "Sujith");
console.log("All Students:", students);

// Task-7 Inventory Management
let stock = [10, 20, 30, 40, 50];
stock.fill(0, -2);
console.log("Filled last two values with 0:", stock);

//output for Filling last two values :-
// Filled last two values with 0: 
// (5) [10, 20, 30, 0, 0]

stock.push(60, 70);
console.log("Added 60 and 70 at end:", stock);

//output for adding 60 and 70 values at end :-
// Added 60 and 70 at end: 
// (7) [10, 20, 30, 0, 0, 60, 70]

stock.shift();
console.log("Removed first value:", stock);

//output for removing first value :-
// Removed first value: 
// (6) [20, 30, 0, 0, 60, 70]

console.log("30 exists:", stock.includes(30));

//output for 30 exists or not :-
// 30 exists: true

console.log("Last index of 20:", stock.lastIndexOf(20));

//output for last index value :-
// Last index of 20: 0

stock.reverse();
console.log("Reversed stock:", stock);

//output for reversed stock :-
// Reversed stock: 
// (6) [70, 60, 0, 0, 30, 20]

// Task-8 User Profile System
let user = {
    name: "Naveen",
    role: "Developer",
    skills: ["HTML", "CSS", "JavaScript"]
};

let { name11, role } = user;
console.log("Name:", name11);
console.log("Role:", role);

user.skills = [...user.skills, "React"];
console.log("Updated Skills:", user.skills);

//output for updated skills :-
// Updated Skills: 
// (4) ['HTML', 'CSS', 'JavaScript', 'React']

let clonedUser = {...user };
console.log("Cloned User:", clonedUser);

//output for cloned user :-
// Cloned User: 
// {name: 'Naveen', role: 'Developer', skills: Array(4)}

let mergedUser = {...clonedUser, experience: "2 Years" };
console.log("Merged User:", mergedUser);

//output for merged value :-
// Merged User: 
// {name: 'Naveen', role: 'Developer', skills: Array(4), experience: '2 Years'}

console.log("Skills Length:", mergedUser.skills.length);

//output for skills length :-
// Skills Length: 4

// Task-9 Sales Report
let sales = [12000, 45000, 22000, 8000, 15000];

let ascendingSales = [...sales].sort((a, b) => a - b);
console.log("Ascending Sales:", ascendingSales);

//output for ascending sale value :-
// Ascending Sales: 
// (5) [8000, 12000, 15000, 22000, 45000]

let descendingSales = [...sales].sort((a, b) => b - a);
console.log("Descending Sales:", descendingSales);

//output for descending sale value :-
// Descending Sales: 
// (5) [45000, 22000, 15000, 12000, 8000]

let middleSales = ascendingSales.slice(1, 4);
console.log("Middle 3 Sales:", middleSales);

//output for middle 3 sale :-
// Middle 3 Sales: 
// (3) [12000, 15000, 22000]

let lowestSaleIndex = ascendingSales.indexOf(Math.min(...sales));
sales[lowestSaleIndex] = 10000;
console.log("Updated Sales:", sales);

//output for updated sale :-
// Updated Sales: 
// (5) [10000, 45000, 22000, 8000, 15000]

console.log("50000 exists:", sales.includes(50000));

//output for if exist or not :-
// 50000 exists: false

// Task-10 Data cleaning system
let rawData = [1, 2, null, 4, undefined, 6, [7, 8], { a: 10 }];

let lastElement = rawData[rawData.length - 1];
console.log("Last Element:", lastElement);

//output for last element :-
// Last Element: {a: 10}

let flattenedData = rawData.flat(Infinity);
console.log("Flattened Data:", flattenedData);

//output for flattened data :-
// Flattened Data: 
// (9) [1, 2, null, 4, undefined, 6, 7, 8, {…}]

let cleanedData = flattenedData.filter(x => x !== null && x !== undefined);
console.log("Cleaned Data:", cleanedData);

//output for cleaned data :-
// Cleaned Data: 
// (7) [1, 2, 4, 6, 7, 8, {…}]

cleanedData.pop();
console.log("Data after removing last element:", cleanedData);

//output for removing last element :-
// Data after removing last element: 
// (6) [1, 2, 4, 6, 7, 8]

cleanedData.push(100);
console.log("Data after adding 100:", cleanedData);

//output for after adding element :-
// Data after adding 100: 
// (7) [1, 2, 4, 6, 7, 8, 100]

let clonedData = [...cleanedData];
console.log("Cloned Data:", clonedData);

//output for cloned data :-
// Cloned Data: 
// (7) [1, 2, 4, 6, 7, 8, 100]