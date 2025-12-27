import React from 'react';
import ToDoListApp from '../features/todo/ToDoListApp';
import { usePostContext } from '../hooks/usePostContext';
import TodoCard from '../features/todo/TodoCard';

const ToDoListPage = () => {


  return (
    <section>
      <ToDoListApp />
      <TodoCard/>
    </section>
  );
};

export default ToDoListPage;
