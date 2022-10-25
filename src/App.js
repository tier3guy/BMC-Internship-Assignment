import "./App.css";

// Components
import Navigator from "./components/Navigator";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Navigator />
      <div className="container bd">
        <div className="prof-graph-container">

          <div className="graph-container"></div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
