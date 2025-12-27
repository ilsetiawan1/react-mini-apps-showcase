import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup} = usePostContext()
  return (
    <section>
      <button onClick={popup}>Klik saya</button>
    </section>
  );
};

export default TodoInput;
