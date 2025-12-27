import { usePostContext } from '../../hooks/usePostContext';

const TodoUpdate = () => {
  const {
    editInput,
    handleUpdateChange,
    cancelEdit,
    handleSaveUpdate,
  } = usePostContext();

  return (
    <form onSubmit={handleSaveUpdate}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={editInput.title}
          onChange={handleUpdateChange}
          placeholder="Edit title"
          className="
            bg-black border border-slate-700 rounded-xl
            px-4 py-3 text-white font-semibold
            focus:outline-none focus:border-white/40
          "
        />

        <textarea
          name="content"
          value={editInput.content}
          onChange={handleUpdateChange}
          placeholder="Edit content"
          rows={3}
          className="
            bg-black border border-slate-700 rounded-xl
            px-4 py-3 text-sm text-slate-300
            focus:outline-none focus:border-white/40
          "
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="
              flex-1 rounded-xl bg-white text-black
              py-2 font-semibold
              hover:scale-[1.02] transition
            "
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => cancelEdit()}
            className="
              flex-1 rounded-xl border border-slate-700
              py-2 text-white
              hover:bg-slate-800 transition
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoUpdate;
