import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
     <Header searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <div className="content">
        <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
        <TaskInput addTask={addTask} />
      </div>
    </div>
  );
}

export default App;