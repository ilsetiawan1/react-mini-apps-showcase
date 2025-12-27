import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup} = usePostContext()
  return (
    <form>
      <label htmlFor="myInput">Test</label>
        {/* Input */}
        <input type="text" id='myInput' value={}/>
    </form>
  );
};

export default TodoInput;
