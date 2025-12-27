import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup, posts, handleInputChange} = usePostContext()
  return (
    <form>
      <label htmlFor="myInput">Test</label>
        {/* Input */}
        <input type="text" id='myInput' value={handleInputChange}/>
        {/* button */}
        <button>Submit</button>
    </form>
  );
};

export default TodoInput;
