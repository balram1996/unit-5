import { useSelector, useDispatch,shallowEqual } from "react-redux";
import { addCount,decCount,multiCount,devCount } from "../redux/actions";
import {useState} from "react";


// const initialState = {
//     counter: "num",
//     todos: {
//       isLoading:false,
//       isError :false,
//       data :[]
//     }
//   };

 const Calculator = () => {
  const [num,setNum] =useState();
  const counter = useSelector((state) => state.counter,shallowEqual);
  const dispatch = useDispatch();

  return (
    <div>
        <input type="number" onChange={(e)=>setNum(e.target.value)}></input>
      <h2> Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch(addCount(num));
        }}
      >
        INCREMENT
      </button>
    
      <button
        onClick={() => {
          dispatch(decCount(num));
        }}
      >
        DECREMENT
      </button>

      <button
        onClick={() => {
          dispatch(multiCount(num));
        }}
      >
        MULTIPLY
      </button>

      <button
        onClick={() => {
          dispatch(devCount(num));
        }}
      >
        DIVIDE
      </button>

    </div>
  );
};

export default Calculator;