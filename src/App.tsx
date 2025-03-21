import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./components/ui/theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import  createAppRouter from "./Routes"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<boolean>(() => prefersDarkMode);

  const router = createAppRouter(mode, setMode); // Get the router instance

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
