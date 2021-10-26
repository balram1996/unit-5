import React from "react";
import { useState } from "react";
import TaskForm from "./taskForm";
import TaskList from "./taskList";

interface Itask {
  id:number,
  taskName:string,
  isCompleted:boolean,
}

const TaskApp = () => {
  const [todos, setTodos] = useState<Itask[]>([]);
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState(false);

  const onTaskChange= (value:string) => {
    setTask(value);
  };

  const onTaskSubmit:React.FormEventHandler<HTMLFormElement> = () => {
    
    let newTask = {
      id: todos.length + 1,
      taskName: task,
      isCompleted: false,
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

  return (
    <div className="container-fluid text-center">
      <header className="p-2">
        <h1>Tasks</h1>
        {error && <h3 id="error-id">Error</h3>}
        <TaskForm
          value={task}
          onChange={onTaskChange}
          onSubmit={onTaskSubmit}
        />
      </header>
      <section className="mt-2">
        <TaskList todos={todos} />
      </section>
    </div>
  );
};

export default TaskApp;
