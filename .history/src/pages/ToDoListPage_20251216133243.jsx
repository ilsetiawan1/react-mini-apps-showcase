import React from 'react'
import ToDoListApp from '../features/todo/ToDoListApp'
import { usePostContext } from '../hooks/usePostContext'

const ToDoListPage = () => {
  const { posts } = usePostContext();

  return (
    <section>
      <ToDoListApp/>
      <div>
        {posts.map({key, item})}
      </div>
    </section>
  )
}

export default ToDoListPage