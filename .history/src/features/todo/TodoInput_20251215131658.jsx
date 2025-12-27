import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup} = usePostContext()
  return (
    <form>
      <button onClick={popup}>Klik saya</button>
    </form>
  );
};

export default TodoInput;
