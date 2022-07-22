import "./App.css";
import MainDash from "./components/mainDash/MainDash";
import "./components/sidebar/Sidebar";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
      </div>
    </div>
  );
}

export default App;
