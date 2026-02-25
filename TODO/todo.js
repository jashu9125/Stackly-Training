let input = document.querySelector(".taskInput");
let button = document.querySelector(".addBtn");
let list = document.querySelector(".taskList");

// EVENT HANDLING
button.addEventListener("click", function() {
    // Get input value
    let taskText = input.value.trim();

    // CREATE NEW LIST ITEM
    let li = document.createElement("li");

    // Set text
    li.innerText = taskText || 'Untitled Task';

    // Add class (styling + animation applied)
    li.setAttribute("class", "taskItem");

    // REMOVE TASK WHEN CLICKED
    li.addEventListener("click", function() {
        li.remove();
    });

    // APPEND TO LIST
    taskText && list.append(li);

    // CLEAR INPUT FIELD
    input.value = "";
});