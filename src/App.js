import { useContext } from "react";
import AppContext from "./components/context/AppProvider";
import Layout from "./layout";

function App() {
  const { darkMode } = useContext(AppContext)

  const customClass = () => {
    if (!darkMode) return "";
    return "DarkMode";
  }

  return (
    <div className={`App ${customClass()}`}>
      <Layout />
    </div>
  );
}

export default App;
