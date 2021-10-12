import { useSelector, useDispatch, } from "react-redux";
import {

  addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
} from "../redux/actions";
import { useState } from "react";
import { axios } from "axios";


export const Todo = () => {
  const [text, setText] = useState("");
  //const [todoList, setTodoList] = useState([]);

  const { data, isLoading, isError } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(data);

  const handleAddTodo = async () => {
    
    dispatch(addTodoLoading());
    try {
      const resp = await axios.post("http://localhost:3004/todos", {
        status: false,
        title: text,
      });
      //dispatch(addTodo(text ))
      console.log(resp)
      dispatch(addTodoSuccess(resp.data));
    } catch (e) {
      dispatch(addTodoError(e.message));
    }

    // dispatch(addTodo(text))
  };
  

  return isLoading ? (
    "Loading..."
  ) : isError ? (
    "Error occured"
  ) : (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="enter todo"
      ></input>

      <button onClick={handleAddTodo}>Add Todo</button>
      {data.map((e, i) => (
        <p key={i}>{e.title}</p>
      ))}
    </div>
  );
};
