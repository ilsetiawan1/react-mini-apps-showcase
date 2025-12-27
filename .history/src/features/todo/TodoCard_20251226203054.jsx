import React from 'react';
import { usePostContext } from '../../hooks/usePostContext';
import TodoUpdate from './TodoUpdate';

const TodoCard = () => {
  const { posts, editId, deletePost, handleEditMode } = usePostContext();

  return (
    <section className="my-5">
      <h1 className="mt-5">My Posts</h1>
      <div className="flex flex-col gap-3 mt-3">
        {posts.map((post) => (
          <ul key={post.id} className="shadow-xl/30 p-4 rounded-lg ">
            {editId === post.id ? (
              // {/* modal edit */}
              <TodoUpdate />
            ) : (
              <li>
                <h1>{post.title}</h1>
                <p>{post.content}</p>

                <div className="flex gap-3">
                  {/* Button Update */}
                  <button onClick={() => handleEditMode(id)} className="bg-linear-to-r from-sky-600 to-slate-500 px-4 py-2 text-xs text-white rounded-md grow">
                    Update
                  </button>

                  {/* Button delete */}
                  <button onClick={() => deletePost(post.id)} className="bg-linear-to-r from-red-600 to-slate-500 px-4 py-2 text-xs text-white rounded-md grow">
                    Delete
                  </button>
                </div>
              </li>
            )}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default TodoCard;
