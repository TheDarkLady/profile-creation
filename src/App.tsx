import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Dashboard } from '@mui/icons-material'
import AppLayout from './components/AppLayout'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    },
  ])
  return <RouterProvider router={router}/>
}

export default App
