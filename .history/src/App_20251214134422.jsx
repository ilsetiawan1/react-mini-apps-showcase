import { RouterProvider } from 'react-router-dom'
import { PostContextContext } from './context'
import { router } from './router'
import { PostContextContext } from './context/PostContext'


function App() {

  return (
    <>
      <div>
        <PostContextContext.Provider value={user}>
          Post
          <RouterProvider router={router}/>
        </PostContextContext.Provider>
      </div>
       
    </>
  )
}

export default App
