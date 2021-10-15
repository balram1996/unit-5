import React, { useState } from "react";
import {TodoMem} from "./Todoitem"

const Todo=()=> {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = ({text}) => {
    const data={
        title: text,
    }
    setList([...list,data]);
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button onClick={handleChange}>Add Todo</button>
      {list.map((e)=>{
        <TodoMem tododata={list.title}/>
      })}
     
    </>
  );
}

export default Todo