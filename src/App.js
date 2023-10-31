import LoginSignup from "./pages/LoginSignup";
import "./App.css";
import { useSelector } from "react-redux";
import Dash from "./pages/Dash";

function App() {
  let login = useSelector((state) => state.loginState);

  return (
    <div className="App">
      <div>
        {!login ? (
          <LoginSignup />
        ) : (
          <>
            <Dash />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
