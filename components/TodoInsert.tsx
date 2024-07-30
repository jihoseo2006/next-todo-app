import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/slice/todoListSlice';
import React, { useRef, useState } from 'react'
import styled from 'styled-components';

const TodoInsert = () => {
  const todoId = useRef(0);

  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 아래 input 태그의 required가 빈 문자 출력을 막아준다. 태그 내에서 활용할 수 있는것도 있으니 한번씩 확인해보자.
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
    // form과 input를 같이 사용하는 이유? form onSubmit가 enter 입력을 지원하기 때문!
    // 당연히 쓰는거 같지만 강의든 예제든 왜 이걸 둘이 쓰지? 싶은 것들은 한번씩 검색해보면서 이유를 찾아보자.
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} ref={textRef} required/>
    </form>
  )
}

export default TodoInsert;

