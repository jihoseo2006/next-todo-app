import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

import { useAppDispatch } from "@/redux/hooks";
import {
  delTodo,
  TodoState,
  toggleTodoDone,
  toggleTodoEdit,
} from "../../redux/slice/todoListSlice";
import TodoEdit from "./TodoEdit";
import styled from "styled-components";

interface Props {
  todo: TodoState
}


const TodoItem = ({ todo }: Props) => {
  const { id, text, done, edit } = todo;
  const dispatch = useAppDispatch();

  return (
    <>
      {edit ? (
        <TodoEdit todo={todo} />
      ) : (
        <li className={done ? "on" : ""}>
          <span onClick={() => dispatch(toggleTodoDone(id))}>
            {done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
          </span>
          <em onClick={() => dispatch(toggleTodoDone(id))}>{text}</em>
          <button onClick={() => dispatch(toggleTodoEdit(id))}>
            🛠️
          </button>
          <button onClick={() => dispatch(delTodo(id))}>
            🗑️
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItem

const Button = styled.button`
  
`



