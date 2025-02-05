import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import SignUp from './component/SignUp.jsx';
import SignIn from './component/SignIn.jsx';
import AuthProvider from './component/AuthProvider.jsx';
import Users from './component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:3000/coffee')
  },
  {
    path:"/addCoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  },
  {
    path:"/signin",
    element:<SignIn></SignIn>
  },
  {
    path:"/user",
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:3000/user')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
