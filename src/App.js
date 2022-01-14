import "./App.css";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <div className="content-wrap">
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
