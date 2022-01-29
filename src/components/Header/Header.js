import React from "react";
import { useState } from "react";
import "./Header.css";

import Container from "../Container/Container";
import Button from "../Button/Button";

const Header = ({ toggleForm, isFormOpen }) => {
  return (
    <Container>
      <header className="header">
        <h1>Task Tracker</h1>
        {isFormOpen ? (
          <Button bgColor="red" clickHandler={toggleForm}>
            Close
          </Button>
        ) : (
          <Button bgColor="green" clickHandler={toggleForm}>
            Add Task
          </Button>
        )}
      </header>
    </Container>
  );
};

export default Header;
