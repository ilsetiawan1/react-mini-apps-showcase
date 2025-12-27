import { RouterProvider } from 'react-router-dom'
import { PostContext } from './context/PostContext.jsx'
import { router } from './router'


function App() {

  return (
    <>
      <div>
        <PostProt>
          <RouterProvider router={router}/>
        </PostProt>
      </div>
       
    </>
  )
}

export default App
