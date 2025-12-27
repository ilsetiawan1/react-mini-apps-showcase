import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup, posts, formPost, handleInputChange, handleAddChange} = usePostContext()
  return (
    <form onSubmit={handleAddChange}>
      <label htmlFor="myInput">Test</label>
        {/* Input */}
        <input type="text" id='myInput' value={formPost} className='bg-slate-200'/>
        {/* button */}
        <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoInput;
