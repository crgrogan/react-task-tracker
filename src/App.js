import "./App.css";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header></Header>
        <main>
          <AddTask></AddTask>
          <TaskList></TaskList>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
