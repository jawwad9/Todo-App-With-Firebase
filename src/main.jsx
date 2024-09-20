import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Notfound from './pages/Notfound.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path : '*',
        element : <Notfound/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider  router={router}>
    <App />
  </RouterProvider>
)
