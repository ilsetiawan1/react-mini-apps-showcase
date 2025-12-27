import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
    const {popup, posts, formPost, handleInputChange, handleAddPosts} = usePostContext()
  return (
    <form onSubmit={handleAddPosts}>
      <label htmlFor="myInput">Test</label>
        {/* Input title*/}
        <input type="text" id='myInput' name={formPost.title} onChange={handleInputChange} className='bg-slate-200 border'/>
        {/* Input content*/}
        <textarea name={formPost.content} id="" onChange={handleInputChange}></textarea>
        {/* button */}
        <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoInput;
