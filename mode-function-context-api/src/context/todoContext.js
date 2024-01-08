import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todo: [
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
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;