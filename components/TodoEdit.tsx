import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { editTodo, TodoState, toggleTodoEdit } from "../redux/slice/todoListSlice";

// insert랑 공통되는 부분 많이 있음. 이거 하나로 합쳐서 활용할 방법 생각해보기.

interface Props {
  todo: TodoState;
}

const TodoEdit = ({todo}: Props) => {

  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

// any를 남발하지 말자. 찾아보면 해당하는 타입 넣을수 있고, 그래야 체이닝할 메소드들이 살아있다!
  const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;

    dispatch(
      editTodo({
        ...todo,
        text: text,
      })
    );

    dispatch(toggleTodoEdit(todo.id));

  };
  
  useEffect(() => {
    setText(todo.text);
    textRef.current?.focus();
  }, [todo.text]);


  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} ref={textRef} />
    </form>
  )
}

export default TodoEdit