import { useSelector, useDispatch } from "react-redux";
import {
  //addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
} from "../redux/Todos/actions";
import { useState ,useEffect} from "react";
import { axios } from "axios";


export const Todo = () => {
  const [text, setText] = useState("");

  const { data, isLoading, isError } = useSelector((state) => {
   return state.todos.todos;
  });
  
const getTodos = async ()=>{
    dispatch(getTodoLoading());
    try{
     const ret = await axios.get("http://localhost:3001/todos")
     dispatch(addTodoSuccess(ret.data))
    }catch(e){
      dispatch(getTodoError(e.message))
    }
 }

 useEffect(() => {
  getTodos()
 }, [])

  const handleAddTodo = async () => {
    
    dispatch(addTodoLoading());
    try {
      const resp = await axios.post("http://localhost:3001/todos", {
        status: false,
        title: text,
      });
      console.log(resp.data)
      //dispatch(addTodo(resp.data ))
      
      dispatch(addTodoSuccess(resp.data));
      getTodos()
    } catch (e) {
      dispatch(addTodoError(e.message));
    }

    // dispatch(addTodo(text))
  };
  
  const dispatch = useDispatch();
  return isLoading ? ("LOADING....." ) : isError ? ("ERROR" ): (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="enter todo"
      ></input>

      <button onClick={handleAddTodo}>Add Todo</button>
       {data.map((e, i) =>(
        <p key={i}>{e.title}</p>
      ))}
    </div>
  );
};
