import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppProvider'
import { router } from './router';

function App() {
  return (
    // Kita hapus div terluar yang tidak perlu agar kode lebih bersih
    <AppProvider>
      {<RouterProvider router={router} />}
    </AppProvider>
  );
}

export default App;
