const store = {
    todos: [
        {
            id: "1",
            title: "Complete task A",
            completed: true,
        },
        {
            id: "2",
            title: "Complete task B",
            completed: true,
        },
        {
            id: "3",
            title: "Complete task C",
            completed: false,
        }
    ]
}

// syntax  : const proxy = new Proxy(target, handler);

const storeHandler = {
    get(target, property) {
        console.log("u r trying to get ", property);
        return target[property];
    },
    set(target, property, value) {
        console.log(target, property, value);
        console.log("you are trying to set", property);
        target[property] = value;
        if (property == "todos") {
            window.dispatchEvent(new Event("todoschange"));
        }
        localStorage.setItem("store", JSON.stringify(store))
        return true;
    }
}

const storeProxy = new Proxy(store, storeHandler)

function addTodo(newTodo) {
    storeProxy.todos = [...storeProxy.todos, newTodo];
}

function deleteTodo(id) {
    console.log("i m in deletetodo");
    console.log(storeProxy.todos);
    storeProxy.todos = storeProxy.todos.filter((todos) => todos.id !== id)
    console.log(storeProxy.todos);
}

function toggleTodo(id, completed) {
    console.log("i am in toggletodo");
    storeProxy.todos = storeProxy.todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: completed }
        } else {
            return todo;
        }
    })
}

export { addTodo, deleteTodo, toggleTodo };
export default storeProxy;

// jab bhi ham kuch default export krte hai to use hm kisi bhi nam se import kr skte hai