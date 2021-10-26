import React from "react";

 interface  taskform{
    value:string,
    onChange: Function,
    onSubmit: Function,
}

const TaskForm = ({ value, onChange, onSubmit }:taskform) => {
 const onTaskChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  onChange(e.target.value)
 };

 const onTaskSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  onSubmit()
};
 
 return(

  <form onSubmit={onTaskSubmit}>
    <input
      type="text"
      autoFocus
      className="p-2 rounded border task-input"
      placeholder="Add something?"
      value={value}
      onChange={onTaskChange}
    />
  </form>
 )
};

export default TaskForm;
