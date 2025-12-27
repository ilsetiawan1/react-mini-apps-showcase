import React from 'react'
import ToDoListApp from '../features/todo/ToDoListApp'
import { usePostContext } from '../hooks/usePostContext'

const ToDoListPage = () => {
  const { posts } = usePostContext();

  return (
    <section>
      <ToDoListApp/>
      <div>
        {posts.map((post, index) = (
          <ul key={index.id}>
            <li>
              <h1>{</h1>
            </li>
          </ul>
        ))}
      </div>
    </section>
  )
}

export default ToDoListPage