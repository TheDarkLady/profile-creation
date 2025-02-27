import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashoard'
import AppLayout from './components/AppLayout'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from 'react'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<boolean>(() => prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light"
    }
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout  setMode={setMode} />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> }
      ]
    },
  ]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
