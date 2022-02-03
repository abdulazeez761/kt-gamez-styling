import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Play from "./pages/Play";
import Playnwinpage from "./pages/Playnwinpage"
import Profile from "./pages/Profile"
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/playnwin" component={Playnwinpage} />
          <Route path="/profile" component={Profile} />
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
