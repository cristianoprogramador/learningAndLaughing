import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ContextProvider } from "./contexts/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Home } from './Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <ContextProvider>
          <Router />
        </ContextProvider>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </ThemeProvider>
  );
}
