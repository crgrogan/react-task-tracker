import React from "react";
import "./TaskList.css";

import Container from "../Container/Container";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, toggleCompletedStatus, deleteTask }) => {
  return (
    <Container>
      {tasks.length > 0 ? (
        <ul className="items-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleCompletedStatus={toggleCompletedStatus}
              deleteTask={deleteTask}
            ></TaskItem>
          ))}
        </ul>
      ) : (
        <h3>No Tasks to Show</h3>
      )}
    </Container>
  );
};

export default TaskList;
