import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context/PostContext'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <PostContext>

        </PostContext>
        <PostContextContext.Provider>
          Post
          <RouterProvider router={router}/>
        </PostContextContext.Provider>
      </div>
       
    </>
  )
}

export default App
