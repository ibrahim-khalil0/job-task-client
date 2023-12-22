import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home/Home.jsx';
import Root from './layout/Root/Root.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx'
import AuthProviders from './Providers/AuthProviders.jsx';
import TaskForm from './dashboard/TaskForm/TaskForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <div>this is about</div>
      },
      {
        path: "/dashboard",
        element: <TaskForm></TaskForm>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <div className='max-w-[1900px] mx-auto'>
      <RouterProvider router={router} />
    </div>
    </AuthProviders>
  </React.StrictMode>,
)
