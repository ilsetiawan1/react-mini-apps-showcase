import { usePostContext } from '../../hooks/usePostContext';
import TodoUpdate from './TodoUpdate';

const TodoCard = () => {
  const { posts, editId, deletePost, handleEditMode } = usePostContext();

  return (
    <section>
      <h2 className="text-xl font-bold mb-3text-center">My Todos</h2>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="
              rounded-2xl bg-slate-900 border border-slate-800
              p-5 transition-transform duration-200
              hover:scale-[1.01]
            "
          >
            {editId === post.id ? (
              <TodoUpdate />
            ) : (
              <>
                <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>

                <p className="text-sm text-slate-400 mb-4">{post.content}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditMode(post.id)}
                    className="
                      flex-1 rounded-xl border border-slate-700
                      py-2 text-sm text-white
                      transition
                      hover:bg-white hover:text-black
                    "
                  >
                    Update
                  </button>

                  <button
                    onClick={() => deletePost(post.id)}
                    className="
                      flex-1 rounded-xl border border-slate-700
                      py-2 text-sm text-red-400
                      transition
                      hover:bg-red-500 hover:text-white
                    "
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoCard;
