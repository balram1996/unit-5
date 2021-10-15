import React from "react";
import { memo } from "react";

const TodoItem = ({ tododata }) => {
  console.log("render",  tododata );
  return (
    <div>
     
     <p>{tododata}</p>;
    
    </div>
  );
};

const TodoMem = memo(TodoItem);

export { TodoMem };
