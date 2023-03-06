import React from 'react';

const TaskAtom = ({ task, onToggle }) => {
  const { id, text, completed } = task;

  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`} onClick={handleToggle}>
      <div className="task-check">
        <i className={`fas ${completed ? 'fa-check-circle' : 'fa-circle'}`}></i>
      </div>
      <div className="task-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TaskAtom;

