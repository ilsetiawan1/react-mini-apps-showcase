import { useContext } from 'react';
import { usePostContext } from '../../hooks/usePostContext';

const TodoUpdate = () => {
  const { editInput, handleUpdateChange, handleAddPost } = usePostContext();



  return (
    <form onSubmit={handleAddPost}>
      {/* Input title */}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          value={editInput.title}
          onChange={handleUpdateChange}
          placeholder="Title..."
          className="bg-slate-200 border-2 rounded-md px-4 py-2 text-base font-bold  focus:border-teal-600 focus:outline-hidden"
        />

        {/* Input content */}
        <textarea
          name="content"
          value={editInput.content}
          onChange={handleUpdateChange}
          placeholder="content..."
          className="bg-slate-200 border-2 rounded-md px-4 py-2 text-xs font-semibold text-slate-800 focus:border-teal-600 focus:outline-hidden"
        ></textarea>

        {/* button */}
        <button type="submit" className="bg-linear-to-r from-teal-600 to-slate-800 px-4 py-2 text-white rounded-md">
          Save
        </button>
      </div>
    </form>
  );
};

export default TodoUpdate;
