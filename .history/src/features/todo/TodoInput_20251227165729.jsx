import { usePostContext } from '../../hooks/usePostContext';

const TodoInput = () => {
  const { inputPost, handleInputChange, handleAddPost } = usePostContext();

  return (
    <form onSubmit={handleAddPost} className="mb-10">
      <div className="flex flex-col gap-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          value={inputPost.title}
          onChange={handleInputChange}
          placeholder="Todo title"
          className="
            bg-slate-900 border border-slate-800 rounded-xl
            px-4 py-3 text-base font-semibold text-white
            placeholder:text-slate-500
            focus:outline-none focus:border-white/40
          "
        />

        {/* Content */}
        <textarea
          name="content"
          value={inputPost.content}
          onChange={handleInputChange}
          placeholder="Todo description"
          rows={3}
          className="
            bg-slate-900 border border-slate-800 rounded-xl
            px-4 py-3 text-sm text-slate-300
            placeholder:text-slate-500
            focus:outline-none focus:border-white/40
          "
        />

        {/* Button */}
        <button
          type="submit"
          className="
    mt-2
    rounded-xl
    bg-white text-black
    py-3
    font-semibold
    transition-all duration-200 ease-out
    hover:scale-[1.03]
    active:scale-[0.97]
  "
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
