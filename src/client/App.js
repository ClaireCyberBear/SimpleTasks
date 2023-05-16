import React, { useState } from "react";
import "./style.css";
import { Menu, Header } from "./components";
import { Task, SignUp, Home, NewTask } from "./pages";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [tasks, setTasks] = useState([]);
  const [uuid, setuuid] = useState([""]);
  const [currentPage, setCurrentPage] = useState(["Home"]);

  const pageComponents = {
    SignUp: <SignUp setCurrentPage={setCurrentPage} setUser={setuuid} />,
    Home: (
      <Home setCurrentPage={setCurrentPage} setUser={setuuid} uuid={uuid} />
    ),
    LoginAlert: <LoginAlert />,
    Task: (
      <Task
        tasks={tasks}
        setTasks={setTasks}
        setCurrentPage={setCurrentPage}
        uuid={uuid}
      />
    ),
    NewTask: (
      <NewTask
        setTasks={setTasks}
        setCurrentPage={setCurrentPage}
        uuid={uuid}
      />
    ),
  };

  return (
    <>
      <script>0</script>
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
