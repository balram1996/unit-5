import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect,useReducer } from "react";
import {Github} from "./Components/Github"

// function useTimer(seconds) {
//   const [time, setTime] = useState();

//   useEffect(() => {
//     const id = setTimeout(() => {
//       setTime(true);
//     }, seconds);
//     return () => {
//       clearTimeout(id);
//     };
//   },[]);
//   return time;
// }

const reducer=(state=initialState, { type, payload })=>{

switch (type){
case ADD_COUNT:
  return {
    ...state,
    counter: state.counter + payload,
  };
}

}



const initialState={
  counter:10,
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  return <div className="App">
    {/* <Github/> */}

    <h3>Counter:{state.count}
    </h3>
    <button onClick={()=>{
  dispatch({type: ADD_COUNT, payload: 1})

    }}>add 1</button>
  </div>;
}

export default App;
