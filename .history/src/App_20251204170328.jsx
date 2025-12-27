import './index.css'
import { RouterProvider } from 'react-router-dom'
import { GlobalContext } from './context'
import { router } from './router'


function App() {

  const user = 
  return (
    <>
      <div>
        <GlobalContext.Provider>
          <RouterProvider router={router}/>
        </GlobalContext.Provider>
      </div>
       
    </>
  )
}

export default App
