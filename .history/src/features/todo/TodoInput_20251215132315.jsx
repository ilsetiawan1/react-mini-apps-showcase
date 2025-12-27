import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup, posts, handleInputChange} = usePostContext()
  return (
    <form>
      <label htmlFor="myInput">Test</label>
        {/* Input */}
        <input type="text" id='myInput' value={handleInputChange}/>
    </form>
  );
};

export default TodoInput;
