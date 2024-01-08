import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            ids: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(useTodo);
}

export const TodoProvider = TodoContext.Provider;