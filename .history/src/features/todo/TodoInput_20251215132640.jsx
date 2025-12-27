import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup, posts, handleInputChange, handleAddChange} = usePostContext()
  return (
    <form onSubmit={hand}>
      <label htmlFor="myInput">Test</label>
        {/* Input */}
        <input type="text" id='myInput' value={handleInputChange}/>
        {/* button */}
        <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoInput;
