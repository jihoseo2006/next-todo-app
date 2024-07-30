import { useAppSelector } from '@/redux/hooks'
import TodoItem from './TodoItem';

const TodoLIst = () => {

  const todos = useAppSelector((state) => state.todos);

  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoLIst