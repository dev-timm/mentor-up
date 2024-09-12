import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  BecomeMentor,
  Error,
  FindMentor,
  HomeLayout,
  Landing,
  SignIn,
  SignUp,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'find-mentor',
        element: <FindMentor />,
      },
      {
        path: 'become-mentor',
        element: <BecomeMentor />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
