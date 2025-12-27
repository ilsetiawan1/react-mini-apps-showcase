import React from 'react'
import ToDoListApp from '../features/todo/ToDoListApp'
import { usePostContext } from '../hooks/usePostContext'

const ToDoListPage = () => {
  const { posts } = usePostContext();

  return (
    <section>
      <ToDoListApp />
      <h1>My Post</h1>
      <div className='flex flex-col gap-3 mt-3'>
        {posts.map((post) => (
          <ul 
          key={post.id}
          className='bg-amber-100'>
            <li>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <button type="submit" className="bg-linear-to-r from-red-600 to-slate-500 px-4 py-2 text-xs text-white rounded-md">
                Delete
              </button>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
}

export default ToDoListPage