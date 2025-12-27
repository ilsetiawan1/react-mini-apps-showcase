import React from 'react';
import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const ToDoListApp = () => {
  return (
    <section>
      <div className=''>ToDoListApp</div>
      <TodoInput/>
      <TodoCard/>
    </section>
  );
};

export default ToDoListApp;
