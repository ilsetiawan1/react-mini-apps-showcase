import React from 'react';
import TodoInput from './TodoInput';
import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

const ToDoListApp = () => {
  return (
    <section>
      <div className='text-2xl font-bold text-center py-4'>ToDoListApp</div>
      <TodoInput/>
      <TodoCard/>
    </section>
  );
};

export default ToDoListApp;
