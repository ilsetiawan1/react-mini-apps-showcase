import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';

// Page route
import Contact from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayouts />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/about',
        element: <AboutPage/>
      }
      
    ],
  },
]);
