import {addCount} from  "./redux/actions";
import {store} from "./redux/store.js";
import {useSelector} from "react-redux";

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        store.dispatch(addCount(1))
      }}>Click Me</button>
    </div>
  );
}

export default App;
