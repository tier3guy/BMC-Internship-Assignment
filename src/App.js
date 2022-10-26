import "./App.css";

// Components
import Navigator from "./components/Navigator";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Progress from "./components/Progressbar";
import Activity from "./components/Activity";

const App = () => {
  return (
    <div className="App">
      <Navigator />
      <div className="container">

        <div className="prof-graph-container">
          <div className="top">
            <Profile name="Talan Phillips" age={24} bloodGroup={"A+"} height={"187cm"} weight={"91Kgs"} />
            <div className="progress-bar">
              <Progress />
              <Activity />
            </div>
          </div>
          <div className="graph-container"></div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default App;
