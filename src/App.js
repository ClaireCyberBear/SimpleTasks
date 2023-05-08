import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [task, setTask] = useState([]);

  useEffect(function () {
    async function getTask() {
      let query = supabase.from("tasks").select("*");

      setTask(task);
    }
    getTask();
  });

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
          <h1 className="title">SIMPLE TASK</h1>
        </div>
        <h1 class="Username">DEMO USER</h1>
        <button className="btn btn-login hidden">Login</button>
      </header>
      <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />

      <main className="main">
        <form className="taskform hidden">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <button className="btn add-btn">Add</button>
        </form>
        {<TaskList task={task} setTask={setTask} />}
        <ul className="tasklist">
          <li className="tasks"></li>
        </ul>
      </main>
    </div>
  );
}

//Little function for the MenuButton, when clicked it sets showMenu to true
function MenuButton({ showMenu, setShowMenu }) {
  return (
    <aside className="sidebar">
      <button
        className="btn sidebar-open"
        onClick={() => setShowMenu((show) => !show)}
      >
        {showMenu ? "Close" : "Menu"}
      </button>
      {showMenu ? <SideMenu /> : null}
    </aside>
  );
}

//Html for the side bar, this is hidden until the showMenu state becomes true
function SideMenu() {
  return (
    <ul className="btn-sidebar">
      <li>
        <button className="btn newtask">New Task</button>
      </li>
      <li>
        <button className="btn tasklist-btn">Task List</button>
      </li>
      <li>
        <button className="btn">Settings</button>
      </li>
    </ul>
  );
}

function TaskList({ task, setTask }) {
  return (
    <ul class="tasklist">
      {task.map((task) => (
        <Task key={task.id} task={task} setTask={setTask} />
      ))}
    </ul>
  );
}

function Task({ task }) {
  return (
    <li class="task">
      <button class="finish"></button>
      <div class="taskcontainer">
        <h2 class="tasktitle">{task.title}</h2>
        <h3 class="description">{task.description}</h3>
      </div>
    </li>
  );
}
export default App;
