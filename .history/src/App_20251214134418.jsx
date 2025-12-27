import { RouterProvider } from 'react-router-dom'
import { Post } from './context'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <Post.Provider value={user}>
          Post
          <RouterProvider router={router}/>
        </Post.Provider>
      </div>
       
    </>
  )
}

export default App
