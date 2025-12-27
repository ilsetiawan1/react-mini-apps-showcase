import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <PostsContext>

        </PostsContext>
        <PostContextContext.Provider value={user}>
          Post
          <RouterProvider router={router}/>
        </PostContextContext.Provider>
      </div>
       
    </>
  )
}

export default App
