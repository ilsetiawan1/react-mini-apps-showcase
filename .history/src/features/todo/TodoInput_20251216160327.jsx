import React, { useContext } from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
  const {inputPost, handleInputUser, handleAddPost} = useContext(usePostContext)

  return (
    <form>
      {/* Input title */}
      <input 
      type="text" 
      name=''
      placeholder="Title..." 
      className="bg-slate-200 border-2 rounded-md" />

      {/* Input content */}
      <textarea placeholder="content..." className="bg-slate-200 border-2 rounded-md"></textarea>

      {/* button */}
      <button type="submit" className="bg-linear-to-r from-teal-600 to-slate-800 px-4 py-2 text-white rounded-md">
        Submit
      </button>
    </form>
  );
};

export default TodoInput;
