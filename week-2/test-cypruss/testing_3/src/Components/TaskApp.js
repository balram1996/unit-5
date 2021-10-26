import React, {Component,useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <Router>
      <div className="container-fluid text-center">
        <header className="p-2">
          <h1>Tasks</h1>
          <TaskForm />
        </header>
        <section className="mt-2">
          <TaskList todos={todos} />
        </section>
      </div>
    </Router>
  );
};

export default TodoApp