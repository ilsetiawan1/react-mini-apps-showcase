// src/App.jsx

import { RouterProvider } from 'react-router-dom';
import appprovi
import { router } from './router';

function App() {
  return (
    // Kita hapus div terluar yang tidak perlu agar kode lebih bersih
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  );
}

export default App;
