import store from "./store.js";

// when i add the new todo i want to render the complete list class as inner HTMl 
// think like this
function render() {
    const todos = document.querySelector(".list-container")
    console.log(todos);
    // todos.innerHTML = "Heool"
    // todos.innerHTML = `<li class="list" data-id="1">
    //       <span>Todo 1</span>
    //       <input type="checkbox" />
    //       <button type="button">X</button>
    //     </li>
    // `;

    const todoElements = store.todos.map((todo) => `
        <li class="list" data-id=${todo.id}>
          <span class="todo-title ${todo.completed ? "completed" : ""}">${todo.title}</span>
          <div class="toggle">
          <input type="checkbox" class="todo-checkbox" ${todo.completed ? "checked" : ""}/>
          <button class="delete-todo">X</button>
          </div>
        </li>
    `)
        .join("");
    // console.log(todoElements);
    todos.innerHTML = todoElements;
}
export default render;