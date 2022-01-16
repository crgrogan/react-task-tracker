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
          <Button text="Close" bgColor="red" clickHandler={toggleForm}></Button>
        ) : (
          <Button
            text="Add Task"
            bgColor="green"
            clickHandler={toggleForm}
          ></Button>
        )}
      </header>
    </Container>
  );
};

export default Header;
