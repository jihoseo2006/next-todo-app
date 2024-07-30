import { useAppSelector } from '@/redux/hooks'
import TodoItem from './TodoItem';

const TodoList = () => {

  const todos = useAppSelector((state) => state.todos);

  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList