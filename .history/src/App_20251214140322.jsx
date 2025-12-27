import { RouterProvider } from 'react-router-dom'
import { PostProvider } from './context/PostContext.jsx';
import { router } from './router'


function App() {

  return (
        <PostProvider>
          <RouterProvider router={router}/>
        </PostProvider>
  )
}

export default App
