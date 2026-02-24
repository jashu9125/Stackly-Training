// LEVEL 1 – DATE TASKS
// Task 1 – Digital Clock

let counts = 0;

let clock = setInterval(() => {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let pm_am = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    console.log(hours + " : " + minutes + " : " + seconds + " " + pm_am);

    counts++;

    if (counts === 10) {
        clearInterval(clock);
        console.log("Clock Stopped");
    }

}, 1000);

// output for digital clock :-
// 05 : 38 : 34 PM
// 05 : 38 : 35 PM
// 05 : 38 : 36 PM
// 05 : 38 : 37 PM
// 05 : 38 : 38 PM
// 05 : 38 : 39 PM
// 05 : 38 : 40 PM
// 05 : 38 : 41 PM
// 05 : 38 : 42 PM
// 05 : 38 : 43 PM
// Clock Stopped

// Task 2 – Age Calculator

function calculateAge(year, month, day) {

    const today = new Date();

    let years = today.getFullYear() - year;
    let months = today.getMonth() + 1 - month;
    let days = today.getDate() - day;

    if (days < 0) {
        months--;
        days = days + 30;
    }

    if (months < 0) {
        years--;
        months = months + 12;
    }

    console.log(`You are ${years} years, ${months} months and ${days} days old.`);
}

calculateAge(2003, 1, 5);
// output for age calculator :-
// You are 22 years, 1 months and 19 days old.

// LEVEL 2 – ASYNCHRONOUS TASKS
// Task 3 – Execution Order

console.log("Start");
setTimeout(() => { console.log("Middle"); }, 0);
console.log("End");

// output for execution order is :-
// Start
// End
// Middle
//Explaination :-
// 1. console.log("Start") is executed immediately, printing "Start".
// 2. setTimeout(() => { console.log("Middle"); }, 0) is executed. This schedules a function to be executed after 0 milliseconds (i.e., as soon as possible). However, it's not executed immediately. Instead, it's added to the task queue (also known as the macrotask queue).
// 3. console.log("End") is executed immediately, printing "End".
// 4. The JavaScript engine checks if there are any tasks in the task queue that are ready to be executed. Since the timeout of 0 milliseconds has passed, the function is moved to the call stack and executed, printing "Middle".
// Why means it working with a flow of 1.call stack 2.web api 3.callback queue 4.event loop
// 1. Execution Context (Call Stack):
//     - Executes JavaScript code
//     - Runs until the stack is empty
// 2. Task Queue (Macrotask Queue):
//     - Holds tasks to be executed (e.g., timers, I/O operations)
//     - Tasks are added and removed from the queue
// 3. Event Loop:
//     - Checks if there are tasks in the task queue
//     - Moves tasks from the task queue to the call stack
//     - Repeats the process


// Task 4 – Countdown Timer
let count = 10;

const countdown = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(countdown);
        console.log("Time Up!");
    }
}, 1000);

// output for countdown :-
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// Time Up!

// LEVEL 3 – PROMISE TASKS
// Task 5 – Custom Promise
function checkResult(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve('Pass');
        } else {
            reject('Fail');
        }
    });
}

// For Testing the function
checkResult(40)
    .then((result) => {
        console.log(`Result: ${result}`);
    })
    .catch((error) => {
        console.log(`Result: ${error}`);
    })
    .finally(() => {
        console.log('Result checked!');
    });

checkResult(20)
    .then((result) => {
        console.log(`Result: ${result}`);
    })
    .catch((error) => {
        console.log(`Result: ${error}`);
    })
    .finally(() => {
        console.log('Result checked!');
    });

// output for csutom promise :-
// Result: Pass
// Result checked!
// Result: Fail
// Result checked!


// Task 6 – Promise Chain
function step1() {
    return Promise.resolve("Step 1 Completed");
}

function step2() {
    return Promise.resolve("Step 2 Completed");
}

function step3() {
    return Promise.resolve("Step 3 Completed");
}
step1()
    .then(res => {
        console.log(res);
        return step2();
    })
    .then(res => {
        console.log(res);
        return step3();
    })
    .then(res => {
        console.log(res);
        console.log("All Steps Done");
    });

// output for Promise chain :-
// Step 1 Completed
// Step 2 Completed
// Step 3 Completed
// All Steps Done

// LEVEL 4 – FETCH API TASKS
// Task 7 – Product Title List
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        console.log('Product Titles:');
        data.forEach(product => console.log(product.title));
        console.log(`Total Products: ${data.length}`);
        console.log(`First Product Price: ${data[0].price}`);
    })
    .catch(error => console.error('Error:', error));

// output for fetch api :-
// Product Titles:
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
// Mens Casual Premium Slim Fit T-Shirts
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave
// White Gold Plined Princess cut Diamond
// Pierced Owl Rose Gold Plated Stainless Steel Double
// WD 2TB Elements Portable External Hard Drive - USB 3.0 
// SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
// Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance
// Total Products: 20
// First Product Price: 109.95

// Task 8 – Filter Expensive Products
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const expensiveProducts = data
            .filter(product => product.price > 500)
            .map(product => ({ title: product.title, price: product.price }));

        console.log('Expensive Products:');
        console.log(expensiveProducts);
    })
    .catch(error => console.error('Error:', error));

// output for filter expensive product
// Expensive Products:
// [
//   { title: 'John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet', price: 695 },
//   { title: 'Solid Gold Petite Micropave', price: 1680 },
//   { title: 'White Gold Plined Princess cut Diamond', price: 999.99 },
//   { title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', price: 1099 }
// ]

// Task 9 – Error Handling
fetch("https://fakestoreapi.com/product")
    .then(res => {
        if (!res.ok) {
            throw new Error("Failed to load products");
        }
        return res.json();
    })
    .then(data => console.log(data))
    .catch(() => {
        console.log("Failed to load products. Please try again.");
    });
// output for error handling :-
// Error: TypeError: Failed to fetch
// Failed to load products. Please try again.