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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('../public.json')
      },
      {
        path:"/cardDetail/:id",
        element: <CardDetail></CardDetail>,
        loader: ()=>fetch('../public.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}>
    </RouterProvider>
  </React.StrictMode>,
)
