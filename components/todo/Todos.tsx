import React from 'react'
import TodoInsert from './TodoInsert'
import TodoLIst from './TodoLIst'

const Todos = () => {
  return (
    <div className="todos">
      <h1>Next로 만드는 TodoList</h1>
      <TodoInsert />
      <TodoLIst />
    </div>
  )
}

export default Todos