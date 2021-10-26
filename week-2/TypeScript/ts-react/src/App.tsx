import React from 'react';
import './App.css';
import {Counter} from "./components/Counter"
import TaskApp from "./components/taskApp"
function App() {
  return (
    <div className="App">
      <Counter/>
      <TaskApp/>
    </div>
  );
}

export default App;
