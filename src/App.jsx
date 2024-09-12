import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
