import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
  const { popup, posts, formPost, handleInputChange, handleAddPosts } = usePostContext();
  return (
    <form onSubmit={handleAddPosts}>
      <label htmlFor="myInput">Test</label>
      {/* Input title*/}
      <input type="text" id="myInput" name="title" onChange={handleInputChange} className="bg-slate-200 border-2 rounded-md" />
      {/* Input content*/}
      <textarea name="" id="" onChange={handleInputChange} className="bg-slate-200 border-2 rounded-md"></textarea>
      {/* button */}
      <button type="submit" className="bg-linear-to-r from-teal-600 to-slate-800 px-4 py-2 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default TodoInput;
