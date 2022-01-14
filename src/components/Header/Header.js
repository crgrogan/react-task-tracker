import React from "react";
import { useState } from "react";
import "./Header.css";

import Container from "../Container/Container";
import Button from "../Button/Button";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <header className="header">
        <h1>Task Tracker</h1>
        {isFormOpen ? (
          <Button text="Close" bgColor="red" handleClick={toggleForm}></Button>
        ) : (
          <Button
            text="Add Task"
            bgColor="green"
            handleClick={toggleForm}
          ></Button>
        )}
      </header>
    </Container>
  );
};

export default Header;
