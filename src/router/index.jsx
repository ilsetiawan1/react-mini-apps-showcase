import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';

// Page
import Dashboard from '../pages/Dashboard';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
import ToDoListPage from '../pages/ToDoListPage';
import CalculatorPage from '../pages/CalculatorPage';
import CinemaTVPage from '../pages/CinemaTVPage';

// Category page "Cinema TV"
import AllData from '../features/cinematv-features/AllData';
import TopMovies from '../features/cinematv-features/TopMovies';
import TopAnimes from '../features/cinematv-features/TopAnimes';
import { ResultContent } from '../features/cinematv-features/Search';

// Api
import { cinemaTVLoader } from '../apis/cinemaTVLoader';

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
        path: 'todo-app',
        element: <ToDoListPage />,
      },
      {
        path: 'calculator-app',
        element: <CalculatorPage />,
      },
      // NavLink Category
      {
        path: 'cinematv-app',
        id: 'cinematv-root',
        element: <CinemaTVPage />,
        loader: cinemaTVLoader,
        children: [
          {
            index: true,
            element: <AllData />,
          },
          {
            path: 'top-movie',
            element: <TopMovies/>
          },
          {
            path: 'top-anime',
            element: <TopAnimes />,
          },
          {
            path: 'search-content',
            element: <ResultContent/>
          }
        ],
      },
    ],
  },
]);
