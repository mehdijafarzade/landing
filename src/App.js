import { useRoutes } from "react-router-dom";
import routess from "./routes";


function App() {
  const routem = useRoutes(routess)
  return routem
}

export default App;
