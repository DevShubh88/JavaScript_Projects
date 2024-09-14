import render from "./render.js";
import store from "./store.js";
import { addTodo, deleteTodo, toggleTodo } from "./store.js";

// to access data- related atrribute we use dataset 
// it is special method to access in javascript // below is the example
/*
const todo = document.querySelector(".list");
console.log(todo.dataset.name);
*/
// store.todos = [] this will empty the todos. 
// this line is for whenever the user try to add or delete in the todos database 
// it will empty the todos and then render it with updated data.

window.addEventListener("todoschange", () => {
    console.log("event fired...");
    render();
})

// try to get store from local storage
const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"))
console.log(storeFromLocalStorage);
if(storeFromLocalStorage?.todos.length > 0){
    store.todos = storeFromLocalStorage.todos;
}else{
    // if local storage is empty then load store from render.js
    localStorage.setItem("store", JSON.stringify(store));
    render();
}

// store.todos = []
// todos : [] array // reference type 
// store.todos.push(78) this will not work

render(); // this render is to show initial data present

const form = document.querySelector(".input-container")
console.log(form);
const textHolder = document.querySelector(".holder");
console.log(textHolder);
console.log(textHolder.value);
const btbhai = document.querySelector(".btbhai");
console.log(btbhai);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(textHolder.value);
    const addedtext = textHolder.value;
    console.log(addedtext);
    const newTodo = { id: crypto.randomUUID(), title: addedtext, completed: false }
    addTodo(newTodo);
})

// to delete todo
const todos = document.querySelector(".list-container")
console.log(todos);
todos.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-todo")) {
        console.log("you clicked on cross button");
        const id = e.target.closest(".list").dataset.id
        console.log(id);
        deleteTodo(id);
    }
})

// toggle todo
todos.addEventListener("change", (e) => {
    console.log("in toggle");
    console.log(e.target);

    if (e.target.classList.contains("todo-checkbox")) {
        console.log("you clicked on checkbox");
        const id = e.target.closest(".list").dataset.id
        console.log(id);
        console.log(e.target.checked);
        const completed = e.target.checked;
        console.log(completed);
        toggleTodo(id, completed);
    }
})
