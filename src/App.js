import { useRoutes } from "react-router-dom";
import routess from "./routes";
import './App.css'

function App() {
  const routem = useRoutes(routess)
  return routem
}

export default App;
