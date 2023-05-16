import React, { useState } from "react";
import "./style.css";
import { Menu, Header } from "./components";
import { Task, Signup, Home, NewTask } from "./pages";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [tasks, setTasks] = useState([]);
  const [uuid, setuuid] = useState("");
  const [currentPage, setCurrentPage] = useState("Home");
  const [user, setUser] = useState("");

  const pageComponents = {
    Signup: (
      <Signup
        setCurrentPage={setCurrentPage}
        setuuid={setuuid}
        uuid={uuid}
        setUser={setUser}
      />
    ),
    Home: (
      <Home
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setuuid={setuuid}
        uuid={uuid}
        user={user}
        setUser={setUser}
      />
    ),
    Task: (
      <Task
        tasks={tasks}
        setTasks={setTasks}
        uuid={uuid}
        setCurrentPage={setCurrentPage}
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
      <Header
        setCurrentPage={setCurrentPage}
        setuuid={setuuid}
        uuid={uuid}
        user={user}
      />
      <div className="main">
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setCurrentPage={setCurrentPage}
          uuid={uuid}
        />
        {pageComponents[currentPage]}
      </div>
    </>
  );
}

export default App;
