import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup, posts, formPost, handleInputChange, handleAddPosts} = usePostContext()
  return (
    <form onSubmit={handleAddPosts}>
      <label htmlFor="myInput">Test</label>
        {/* Input title*/}
        <input type="text" id='myInput' value={formPost} onChange={handleInputChange} className='bg-slate-200'/>
        {/* Input content*/}
        <textarea name="" id="" value={}></textarea>
        {/* button */}
        <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoInput;
