import { createSlice, CreateSliceOptions, PayloadAction } from "@reduxjs/toolkit";
import nookies from 'nookies'



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
      nookies.set(null, 'todos', JSON.stringify(state), { path: '/' }); 
    },

    editTodo(state, action: PayloadAction<TodoState>){
      const listToEdit = state.find(todo => todo.id === action.payload.id);
      if (listToEdit) {
        listToEdit.text = action.payload.text;
        nookies.set(null, 'todos', JSON.stringify(state), { path: '/' }); 

      }

    },
    delTodo(state, action: PayloadAction<number>) {

      const newState = (state = state.filter((todo: any) =>  todo.id !== action.payload));
      nookies.set(null, 'todos', JSON.stringify(newState), { path: '/' }); 
      return newState;
    },
    toggleTodoEdit(state, action: PayloadAction<number>)  {
      const toggleListToEdit = state.find(todo => todo.id === action.payload);
      if(toggleListToEdit) {
        toggleListToEdit.edit = !toggleListToEdit.edit;
        nookies.set(null, 'todos', JSON.stringify(state), { path: '/' }); 
      }

    },
    toggleTodoDone(state, action: PayloadAction<number>)  {
      const toggleListDone = state.find(todo => todo.id === action.payload);
      if(toggleListDone) {
        toggleListDone.done = !toggleListDone.done;
        nookies.set(null, 'todos', JSON.stringify(state), { path: '/' }); 
      }
    }

  }
})

export const { addTodo, editTodo, delTodo, toggleTodoDone, toggleTodoEdit} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;