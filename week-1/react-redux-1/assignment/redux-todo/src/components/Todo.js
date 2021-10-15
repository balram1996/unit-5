import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List here 🤓</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="write here....."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            ></input>
            <button
              className="add-todo"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              Add
            </button>
          </div>

          <div className="show-item">
            {
            list.map((elem) => {
              return(
                <div className="each-item" key={elem.id}>
                <h3>{elem.data}</h3>
                <button
                  className="add-todo"
                  title="delete item"
                  onClick={() =>
                  dispatch(deleteTodo(elem.id))}>Deleat</button>
              </div>
              )
              
            })
            
          }
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
