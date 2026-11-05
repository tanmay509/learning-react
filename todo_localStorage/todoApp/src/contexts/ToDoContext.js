import { createContext,useContext } from "react";
export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            title:"todooo",
            isComplete:false
        }
    ],
    addTodo:(todos)=>{},
    updateTodo:(id,title)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useToDo=()=>{
    return useContext(ToDoContext);
}

export const ToDoProvider=ToDoContext.Provider;
