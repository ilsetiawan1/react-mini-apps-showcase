import React from 'react'
import ToDoListApp from '../features/todo/ToDoListApp'
import { usePostContext } from '../hooks/usePostContext'

const ToDoListPage = () => {
  const { posts } = usePostContext();

  return (
    <section>
      <ToDoListApp/>
      <div>
        {posts.map((post) => (
          <ul key={postid}>
            <li>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </li>
          </ul>
        ))}
      </div>
    </section>
  )
}

export default ToDoListPage