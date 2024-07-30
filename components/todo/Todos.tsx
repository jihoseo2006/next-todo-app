import React from 'react'
import TodoInsert from './TodoInsert'
import TodoList from './TodoList'
import styled from 'styled-components'

// index.tsx에 들어가도 되는거임. 비효율적이게 만들 필요 x -> 수정하기.
const Todos = () => {
  return (

    <Container>
      <Title>Next로 만드는 TodoList</Title>
      <TodoInsert />
      <TodoList />
    </Container>
  )
}

export default Todos


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