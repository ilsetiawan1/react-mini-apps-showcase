import React from 'react'
import { usePostContext } from '../../hooks/usePostContext';

const TodoCard = () => {
    const { posts, deletePost } = usePostContext();
  return (
    <section>
      <h1 className="py-5">My Posts</h1>
      <div className="flex flex-col gap-3 mt-3">
        {posts.map((post) => (
          <ul key={post.id} className="shadow-xl/30 p-4 rounded-lg ">
            <li>
              <h1>{post.title}</h1>
              <p>{post.content}</p>

              <div className="flex gap-3">
                {/* Button Update */}
                <button onClick={() => deletePost(post.id)} className="bg-linear-to-r from-sky-600 to-slate-500 px-4 py-2 text-xs text-white rounded-md grow">
                  Update
                </button>

                {/* Button delete */}
                <button onClick={() => deletePost(post.id)} className="bg-linear-to-r from-red-600 to-slate-500 px-4 py-2 text-xs text-white rounded-md grow">
                  Delete
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default TodoCard