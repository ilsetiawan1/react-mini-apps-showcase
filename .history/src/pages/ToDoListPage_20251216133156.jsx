import React from 'react'
import ToDoListApp from '../features/todo/ToDoListApp'
import { usePostContext } from '../hooks/usePostContext'

const ToDoListPage = () => {
  

  return (
    <section>
      <ToDoListApp/>
      <div>
        {}
      </div>
    </section>
  )
}

export default ToDoListPage