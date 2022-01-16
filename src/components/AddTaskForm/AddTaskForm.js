import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AddTaskForm.css";

import Container from "../Container/Container";
import Button from "../Button/Button";

const AddTask = ({ isFormOpen, addTask }) => {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, time } = e.target;
    addTask({
      id: uuid(),
      description: description.value,
      time: time.value,
      isCompleted: false,
    });
    setDescription("");
    setTime("");
  };

  return (
    <Container>
      {isFormOpen && (
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="task-form-input">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="task-form-input">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <Button text="Add" width="100%"></Button>
        </form>
      )}
    </Container>
  );
};

export default AddTask;
