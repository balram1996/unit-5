import React from "react";

interface TaskItemProps {
  id:number,
  taskName:string,
  isCompleted:boolean,
}

const TaskItem = (props:TaskItemProps) => (
  <li>
    <div>
      <label id={`todo-${props.id}`}>{props.taskName}</label>
    </div>
  </li>
);

interface TaskListItem {
  todos:TaskItemProps[]
}
const TaskList = (props:TaskListItem ) => (
  <ul className="task-list">
    {props.todos.map((todo) => (
      <TaskItem key={todo.id} {...todo} />
    ))}
  </ul>
);

export default TaskList;
