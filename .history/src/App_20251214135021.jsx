import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context/PostContext.jsx'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <PostProvidert>
          <RouterProvider router={router}/>
        </PostProvidert>
      </div>
       
    </>
  )
}

export default App
