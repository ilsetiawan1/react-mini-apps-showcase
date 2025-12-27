import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context/PostContext.jsx'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <PostContext>
          <RouterProvider router={router}/>
        </PostContext>
      </div>
       
    </>
  )
}

export default App
