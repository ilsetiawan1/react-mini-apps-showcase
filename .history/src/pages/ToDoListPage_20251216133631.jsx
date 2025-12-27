import React from 'react'
import ToDoListApp from '../features/todo/ToDoListApp'
import { usePostContext } from '../hooks/usePostContext'

const ToDoListPage = () => {
  const { posts } = usePostContext();

  return (
    <section>
      <ToDoListApp/>
      <div>
        {posts.map((posts, index) => (
          <ul key={index.id}>
            <li>
              <h1>{posts.title}</h1>
              <p>{posts.content}</p>
            </li>
          </ul>
        ))}
      </div>
    </section>
  )
}

export default ToDoListPage