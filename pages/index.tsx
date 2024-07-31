import React from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import { parseCookies } from 'nookies';
import { useDispatch } from 'react-redux';
import { addTodo, TodoState } from '../redux/slice/todoListSlice'; // Todo 액션 임포트
import store from '../redux/store'; // Redux 스토어 초기화 함수

const Todo = ({ initialTodos }: any) => {
  const dispatch = useDispatch();

  // 초기 상태를 Redux 스토어에 추가
  React.useEffect(() => {
    initialTodos.forEach((todo: TodoState) => {
      const exists = store.getState().todos.find(existingTodo => existingTodo.id === todo.id);
      if(!exists) {
        dispatch(addTodo(todo));
      }
    });
  }, [initialTodos, dispatch]);

  return (
    <Container>
      <Title>Next로 만드는 TodoList</Title>
      <TodoInsert />
      <TodoList />
    </Container>
  );
};

// 서버 사이드에서 쿠키에서 초기 상태 가져오기
export async function getServerSideProps(context : any) {
  const cookies = parseCookies(context);
  const initialTodos = cookies.todos ? JSON.parse(cookies.todos) : [];

  return {
    props: {
      initialTodos, // 초기 상태를 props로 전달
    },
  };
}

export default Todo;

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
