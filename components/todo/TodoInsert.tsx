import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/slice/todoListSlice';
import React, { useRef, useState } from 'react'

const TodoInsert = () => {
  const todoId = useRef(0);

  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("")
  const dispatch = useAppDispatch();

  const changeInput = (e: any) => {
    const {
      target: { value },
    } = e;
    setText(value);
  }

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!text) return;

    dispatch(
      addTodo({
        id: todoId.current++,
        text: text,
        done: false,
        edit: false,
      })
    );

    setText("");

    textRef.current?.focus();
  };


  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
    </form>
  )
}

export default TodoInsert