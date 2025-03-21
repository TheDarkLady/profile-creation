// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Dispatch, SetStateAction } from "react";

const createAppRouter = (mode: boolean, setMode: Dispatch<SetStateAction<boolean>> ) =>
  createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout mode={mode} setMode={setMode} />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/", element: <Login /> },
          { path: "/signup", element: <Signup /> },
        ],
      },
    ],
    { basename: "/profile-creation" }
  );

export default createAppRouter;
