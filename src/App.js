import LoginSignup from "./pages/LoginSignup";
import "./App.css";
import { useSelector } from "react-redux";
import Dash from "./pages/Dash";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/md-dark-deeppurple/theme.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

function App() {
  let login = useSelector((state) => state.loginState);

  return (
    <div className="App">
      <div className="min-h-screen bg-[#020102]">
        <ThemeProvider theme={themeOptions}>
          <PrimeReactProvider>
            {!login ? (
              <LoginSignup />
            ) : (
              <>
                <Dash />
              </>
            )}
          </PrimeReactProvider>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
