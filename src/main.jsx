import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './page/HomePage.jsx';
import { Shop } from './page/Shop.jsx';
import { Contact } from './page/Contact.jsx';
import { About } from './page/About.jsx';
import { AddTocart } from './page/AddTocart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element : <HomePage></HomePage>
      },
      {
        path: "/shop",
        element : <Shop></Shop>
      },
      {
        path: "/about",
        element : <About></About>
      },
      {
        path: "/contact",
        element : <Contact></Contact>
      },
      {
        path: "/addtocart",
        element : <AddTocart></AddTocart>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
