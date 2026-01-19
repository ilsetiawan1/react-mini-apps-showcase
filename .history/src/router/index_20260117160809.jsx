import { createBrowserRouter } from 'react-router-dom';
import RootLayouts from '../layouts/RootLayouts';

// Page route
import Dashboard from '../pages/Dashboard';
// import ContactPage from '../pages/ContactPage';
// import AboutPage from '../pages/AboutPage';
import ToDoListPage from '../pages/ToDoListPage';
import CalculatorPage from '../pages/CalculatorPage';
import AnimeHubPage from '../pages/AnimeHubPage';

// Category page "Anime Hub"


//api
import { getAnimeData } from '../apis/animeLoader';

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
        path: 'anime-app',
        id: 'anime-hub-root',
        element: <AnimeHubPage />,
        loader: getAnimeData,
      },
    ],
  },
]);
