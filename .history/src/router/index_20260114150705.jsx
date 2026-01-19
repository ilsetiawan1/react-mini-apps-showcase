import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';

// Page route
import Dashboard from '../pages/Dashboard';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
import ToDoListPage from '../pages/ToDoListPage'
import CalculatorPage from '../pages/CalculatorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayouts />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      // {
      //   path: 'about',
      //   element: <AboutPage />,
      // },
      // {
      //   path: 'contact',
      //   element: <ContactPage />,
      // },
      {
        path: 'todo-app',
        element: <ToDoListPage />,
      },
      {
        path: 'calculator-app',
        element: <CalculatorPage />,
      },
      {
        path: 'calculator-app',
        element: <CalculatorPage />,
      },
    ],
  },
]);
