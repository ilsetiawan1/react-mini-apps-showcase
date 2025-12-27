import { RouterProvider } from 'react-router-dom'
import { PostProvider } from './context/PostContext.jsx';
import { router } from './router'


function App() {

  return (
      <div>
        <PostProvider>
          <RouterProvider router={router}/>
        </PostProvider>
      </div>
  )
}

export default App
