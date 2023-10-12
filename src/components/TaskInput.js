// TaskInput.js
import React, { useState } from 'react';
import './TaskInput.css'

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', priority: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if required fields are filled before adding a new task
    if (newTask.title && newTask.dueDate && newTask.priority) {
      addTask(newTask); // Call the addTask function from props
      setNewTask({ title: '', description: '', dueDate: '', priority: '' });
    }
  };

  return (
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Task description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <select name="priority" value={newTask.priority} onChange={handleInputChange}>
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskInput;
