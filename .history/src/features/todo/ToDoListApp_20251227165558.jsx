import React from 'react';
import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const ToDoListApp = () => {
  return (
    <section>
      <div className='text-xl'>ToDoListApp</div>
      <TodoInput/>
      <TodoCard/>
    </section>
  );
};

export default ToDoListApp;
