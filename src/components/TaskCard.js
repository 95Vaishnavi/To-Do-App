// TaskCard.js
import React from 'react';

function TaskCard({ task, updateTask, deleteTask }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <div className="task-actions">
        <button onClick={() => updateTask(task.id, { completed: !task.completed })}>
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
