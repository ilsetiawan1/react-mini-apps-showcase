import './index.css'
import { RouterProvider } from 'react-router-dom'
import { GlobalContext } from './context'
import { router } from './router'


function App() {


  return (
    <>
      <div>
        <GlobalContext.Provider>
          <RouterProvider
        </GlobalContext.Provider>
      </div>
       
    </>
  )
}

export default App
