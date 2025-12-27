import { RouterProvider } from 'react-router-dom'
import { GlobalContext } from './context'
import { router } from './router'


function App() {

  const user = {
    username: 'ilham'
  }
  return (
    <>
      <div>
        <GlobalContext.Provider value={user}>
          Global
          <RouterProvider router={router}/>
        </GlobalContext.Provider>
      </div>
       
    </>
  )
}

export default App
