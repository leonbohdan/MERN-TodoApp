import "./App.sass";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";

function App() {
  const { login, logout, token, userId, isReady } = useAuth();
  const isLogined = !!token;
  const routes = useRouter(isLogined);

  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isReady, isLogined }}
    >
      <div className="app">
        <Navbar />
        {routes}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
