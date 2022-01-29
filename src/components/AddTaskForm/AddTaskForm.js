import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AddTaskForm.css";

import Container from "../Container/Container";
import Button from "../Button/Button";

const initialValues = {
  description: "",
  time: "",
};

const AddTask = ({ addTask }) => {
  const [values, setValues] = useState(initialValues);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const checkIfValidInput = (...inputs) => {
    inputs.forEach((input) => {
      if (input.value.trim() !== "") {
        input.classList.remove("alert-danger");
      } else {
        input.classList.add("alert-danger");
      }
    });
  };

  const checkIfValidForm = (...inputs) => {
    return inputs.every((input, index, arr) => {
      if (input.value.trim() !== "") {
        setShowErrorMessage(false);
        return true;
      } else {
        checkIfValidInput(...arr);
        setShowErrorMessage(true);
        return false;
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    checkIfValidInput(e.target);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, time } = e.target;

    if (checkIfValidForm(description, time)) {
      addTask({
        id: uuid(),
        description: description.value,
        time: time.value,
        isCompleted: false,
      });
      setValues(initialValues);
    }
  };

  return (
    <Container>
      <form className="task-form" onSubmit={handleSubmit}>
        {showErrorMessage && (
          <div className="task-form-error alert-danger">
            Please add a description and time for the task you wish to add.
          </div>
        )}
        <div className="task-form-input">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
            onBlur={(e) => checkIfValidInput(e.target)}
          />
        </div>
        <div className="task-form-input">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            name="time"
            value={values.time}
            onChange={handleInputChange}
            onBlur={(e) => checkIfValidInput(e.target)}
          />
        </div>
        <Button width="100%">Add</Button>
      </form>
    </Container>
  );
};

export default AddTask;
