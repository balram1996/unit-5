import react from "react";
import Todo from "./components/Todo";
import Test from "./components/test"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/">
          <Todo/>
      </Route>

      <Route exact path="/test">
          <Test/>
      </Route>

      </Switch>
    </Router>
    
    </>
  );
}

export default App;
