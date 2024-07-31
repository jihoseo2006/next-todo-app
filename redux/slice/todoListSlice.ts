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
    // map 사용이 습관이 되지 말자, slice나 filter, sum 메소드 등으로 궅이 map으로 싹 다 조회한 다음에 굴릴 필요 없다.
    // 상황에 맞게 효율적인거 사용하자!
    editTodo(state, action: PayloadAction<TodoState>){
      // state.map((todo: any) => {
      //   if(todo.id === action.payload.id) {
      //     todo.text = action.payload.text;
      //   }
      // }); //find로 수정
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
      // state.map((todo: any) => {
      //   if(todo.id === action.payload) {
      //     todo.edit = ! todo.edit;
      //   }
      // });
      const toggleListToEdit = state.find(todo => todo.id === action.payload);
      if(toggleListToEdit) {
        toggleListToEdit.edit = !toggleListToEdit.edit;
        nookies.set(null, 'todos', JSON.stringify(state), { path: '/' }); 
      }

    },
    toggleTodoDone(state, action: PayloadAction<number>)  {
      // state.map((todo: any) => {
      //   if(todo.id === action.payload) {
      //     todo.done = ! todo.done;
      //   }
      // });
1
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