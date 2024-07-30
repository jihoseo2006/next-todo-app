import React from 'react'
import TodoInsert from '../components/TodoInsert'
import TodoList from '../components/TodoList'
import styled from 'styled-components'

const Todo = () => {
  return (
    <Container>
      <Title>Next로 만드는 TodoList</Title>
      <TodoInsert />
      <TodoList />
    </Container>
  )
}

export default Todo

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 전체 화면 높이 */
  background-color: #f0f0f0; /* 배경색 */
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center; /* 제목 중앙 정렬 */
`;