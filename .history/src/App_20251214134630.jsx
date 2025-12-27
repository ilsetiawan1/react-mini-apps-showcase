import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context/PostContext'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <PostContext>

        </PostContext>
          <RouterProvider router={router}/>
      </div>
       
    </>
  )
}

export default App
