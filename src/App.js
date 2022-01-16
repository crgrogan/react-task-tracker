import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleCompletedStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        return task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <Header isFormOpen={isFormOpen} toggleForm={toggleForm}></Header>
        <main>
          <AddTaskForm isFormOpen={isFormOpen} addTask={addTask}></AddTaskForm>
          <TaskList
            tasks={tasks}
            toggleCompletedStatus={toggleCompletedStatus}
            deleteTask={deleteTask}
          ></TaskList>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
