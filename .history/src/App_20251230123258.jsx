// src/App.jsx

import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppProvider'
import { router } from './router';

function App() {
  return (
    // Kita hapus div terluar yang tidak perlu agar kode lebih bersih
    <AopProvider>
      <RouterProvider router={router} />
    </AopProvider>
  );
}

export default App;
