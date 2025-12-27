import { useContext } from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
  const { inputPost, handleInputChange, handleAddPost } = usePostContext();

  return (
    <form onSubmit={handleAddPost}>
      {/* Input title */}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          value={inputPost.title}
          onChange={handleInputChange}
          placeholder="Title..."
          className="bg-slate-200 border-2 rounded-md px-4 py-2 text-base font-bold focus:border-teal-600 focus:outline-hidden"
        />

        {/* Input content */}
        <textarea
          name="content"
          value={inputPost.content}
          onChange={handleInputChange}
          placeholder="content..."
          className="bg-slate-200 border-2 rounded-md px-4 py-2 text-xs font-semibold text-slate-700"
        ></textarea>

        {/* button */}
        <button type="submit" className="bg-linear-to-r from-teal-600 to-slate-800 px-4 py-2 text-white rounded-md">
          Submit
        </button>
      </div>

      <button type="submit" className="bg-linear-to-r from-teal-600 to-slate-800 px-4 py-2 text-white rounded-md">
        Delete
      </button>
    </form>
  );
};

export default TodoInput;
