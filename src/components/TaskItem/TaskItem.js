import React from "react";
import "./TaskItem.css";

import Button from "../Button/Button";

const TaskItem = ({ task, toggleCompletedStatus, deleteTask }) => {
  const handleUpdateStatus = () => {
    toggleCompletedStatus(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li
      className={task.isCompleted ? "item completed" : "item"}
      onDoubleClick={handleUpdateStatus}
    >
      <div>
        <h4 className="item-description">{task.description}</h4>
        <p className="item-time">{task.time}</p>
      </div>
      <div>
        <Button padding="0.5em" bgColor="red" clickHandler={handleDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
