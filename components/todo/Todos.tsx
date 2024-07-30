import React from 'react'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'

const Todos = () => {
  return (
    <div className="todos">
      <h1>Next로 만드는 TodoList</h1>
      <TodoInsert />
      <TodoList />
    </div>
  )
}

export default Todos