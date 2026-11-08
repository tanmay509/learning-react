import { createSlice, nanoid } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[{id:1, text: 'Hey there'}]
    },
    reducers:{
        addTodo:(state, action )=>{
            console.log(action.payload);
            
            const todo={
                id:nanoid(),
                text:action.payload
            };
            state.todos.push(todo);
        
        },
        removeTodo:(state, action)=>{
            console.log(action.payload);
            const id=action.payload;
            state.todos=state.todos.filter((todo)=>todo.id!==id);
        },
        updateTodo:(state,action)=>{
            const id=action.payload;
            const newText=action.payload.text;
            state.todos=state.todos.filter((todo)=>{
                if(todo.id===id){
                    todo.text=newText;
                }
        });

        }

    }

});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;