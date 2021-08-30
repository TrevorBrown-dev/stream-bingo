import { Home } from "./pages/Home";
import { HashRouter as Router, Route } from 'react-router-dom';
import { Game } from "./pages/Game";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/game/:roomId" exact>
          <Game />
        </Route>
      </Router>
    </div>
  );
}

export default App;
