import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './pages/Home';
import CardDetail from './pages/CardDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import UpdateProfile from './pages/UpdateProfile';
import FirebaseProvider from './components/Firebase Provider/FirebaseProvider';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../public.json')
      },
      {
        path: "/cardDetail/:id",
        element: <PrivateRoute>
          <CardDetail></CardDetail>
        </PrivateRoute>,
        loader: () => fetch('../public.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
