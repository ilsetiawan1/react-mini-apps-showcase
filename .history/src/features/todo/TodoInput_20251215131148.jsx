import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup} = PostContext()
  return (
    <section>
      <button onClick={popup}>Klik saya</button>
    </section>
  );
};

export default TodoInput;
