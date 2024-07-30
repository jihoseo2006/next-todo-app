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

interface Props {
  todo: TodoState
}


const TodoItem = ({ todo }: Props) => {
  const { id, text, done, edit } = todo;
  const dispatch = useAppDispatch();
  
  return (
    <div>
      {edit ? (
        <TodoEdit todo={todo} />
      ) : (
        <li className={done ? "on" : ""}>
          <span onClick={() => dispatch(toggleTodoDone(id))}>
            {done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
          </span>
          <em onClick={() => dispatch(toggleTodoDone(id))}>{text}</em>
          <button onClick={() => dispatch(toggleTodoEdit(id))}>
            <FaPencilAlt size="15" />
          </button>
          <button onClick={() => dispatch(delTodo(id))}>
            <FaRegTrashAlt color="rgb(175,169,169)" size="15" />
          </button>
        </li>
      )}
    </div>
  );
}

export default TodoItem