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
import { SignUp } from './page/SignUp.jsx';
import { Login } from './page/Login.jsx';
import { UserDeshborad } from './page/UserDeshborad.jsx';

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
      },
      {
        path: "/signup",
        element : <SignUp></SignUp>
      },
      {
        path: "/login",
        element : <Login></Login>
      },
      {
        path: "/dashboard",
        element : <UserDeshborad></UserDeshborad>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
