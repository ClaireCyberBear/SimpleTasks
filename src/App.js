import React, { useState } from "react";
import "./style.css";
import { Menu, Header } from "./components";
import { Task, Login, Home, NewTask } from "./pages";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(["Home"]);

  const pageComponents = {
    Login: <Login />,
    Home: <Home />,
    Task: (
      <Task tasks={tasks} setTasks={setTasks} setCurrentPage={setCurrentPage} />
    ),
    NewTask: <NewTask setTasks={setTasks} setCurrentPage={setCurrentPage} />,
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <div className="main">
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setCurrentPage={setCurrentPage}
        />
        {pageComponents[currentPage]}
      </div>
    </>
  );
}

export default App;
