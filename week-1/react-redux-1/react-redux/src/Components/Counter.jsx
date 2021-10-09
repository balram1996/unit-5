import { useSelector, useDispatch } from "react-redux";
import { addCount } from "../redux/actions";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Click Me
      </button>
      <br />
    </div>
  );
};
