import { useRef, useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { editTodo, TodoState, toggleTodoEdit } from "../../redux/slice/todoListSlice";

interface Props {
  todo: TodoState;
}

const TodoEdit = ({todo}: Props) => {

  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const changeInput = (e: any) => {
    const {
      target: {value},
    } = e;
    setText(value);
  };

  const onSubmit = (e: any) => {
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
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
    </form>
  )
}

export default TodoEdit