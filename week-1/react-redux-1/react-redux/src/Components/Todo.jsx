import { useSelector, useDispatch,shallowEqual } from "react-redux";
import { addTodo } from "../redux/actions";

export const Todo = () => {
  const todos = useSelector((state) => state.todos,shallowEqual);
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" placeholder="enter todo"></input>

      <button
        onClick={() => {
          dispatch(addTodo("learn react"));
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
