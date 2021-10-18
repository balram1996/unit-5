import { Categories } from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/category">
          <Categories/>
        </Route>
      </Switch>
    </Router>
     
      
      
      {/* <Categories/> */}
    </>
  );
}

export default App;
