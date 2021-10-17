import { useSelector, useDispatch,shallowEqual } from "react-redux";
import { addCount,decCount } from "../redux/Todos/actions";

export const Counter = () => {
  const counter = useSelector((state) => state.counter,shallowEqual);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        INCREMENT
      </button>
    
      <button
        onClick={() => {
          dispatch(decCount(1));
        }}
      >
        DECREMENT
      </button>
    </div>
  );
};
