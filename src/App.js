import "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Task 1", time: "8:00 am", isCompleted: true },
    { id: 2, description: "Task 2", time: "5:00 pm", isCompleted: false },
    { id: 3, description: "Task 3", time: "10:00 pm", isCompleted: false },
  ]);

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

  return (
    <div className="wrapper">
      <div className="content">
        <Header></Header>
        <main>
          <AddTask></AddTask>
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
