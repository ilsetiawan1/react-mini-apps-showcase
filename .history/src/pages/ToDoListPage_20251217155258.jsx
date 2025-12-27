import React from 'react';
import ToDoListApp from '../features/todo/ToDoListApp';
import { usePostContext } from '../hooks/usePostContext';

const ToDoListPage = () => {
  const { posts, deletePost } = usePostContext();

  return (
    <section>
      <ToDoListApp />
      <
    </section>
  );
};

export default ToDoListPage;
