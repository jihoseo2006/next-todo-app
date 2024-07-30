import { createSlice, CreateSliceOptions, PayloadAction } from "@reduxjs/toolkit";


export interface TodoState {
  id: number;
  text: string;
  done: boolean;
  edit: boolean;
}

const initialState: TodoState[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState, 
  reducers: {
    addTodo(state, action: PayloadAction<TodoState>){
      state.push(action.payload);
    },
    editTodo(state, action: PayloadAction<TodoState>){
      state.map((todo: any) => {
        if(todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });
    },
    delTodo(state, action: PayloadAction<number>) {
      return (state = state.filter((todo: any) =>  todo.id !== action.payload));
    },
    toggleTodoEdit(state, action: PayloadAction<number>)  {
      state.map((todo: any) => {
        if(todo.id === action.payload) {
          todo.edit = ! todo.edit;
        }
      });
    },
    toggleTodoDone(state, action: PayloadAction<number>)  {
      state.map((todo: any) => {
        if(todo.id === action.payload) {
          todo.done = ! todo.done;
        }
      });
    }

  }
})

export const { addTodo, editTodo, delTodo, toggleTodoDone, toggleTodoEdit} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;