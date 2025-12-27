import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup} = usePostContext()
  return (
    <form>
      <label htmlFor="myInput"></label>

    </form>
  );
};

export default TodoInput;
