import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context'
import { router } from './router'
import { PostContextContext } from './context/PostContext'


function App() {

  return (
    <>
      <div>
        <PostContext.Provider value={user}>
          Post
          <RouterProvider router={router}/>
        </PostContext.Provider>
      </div>
       
    </>
  )
}

export default App
