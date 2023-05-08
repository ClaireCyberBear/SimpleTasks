import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [tasks, setTasks] = useState([]);

  useEffect(function () {
    async function getTasks() {
      let query = supabase.from("tasks").select("*");
      const { data: tasks, error } = await query
        .order("id", { ascending: false })
        .limit(100);

      setTasks(tasks);
    }
    getTasks();
  }, []);
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
          <h1 className="title">SIMPLE TASK</h1>
        </div>
        <h1 className="Username">DEMO USER</h1>
        <button className="btn btn-login hidden">Login</button>
      </header>
      <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />

      <main className="main">
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

function NewTask({ setTasks, setShowNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const { data: NewTask, error } = await supabase
      .from("tasks")
      .insert([{ title, description }])
      .select();
    if (!error) setTasks((tasks) => [NewTask[0], ...tasks]);

    setShowNewTask(false);
  }

  return (
    <form className="taskform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        maxLength={30}
      />
      <textarea
        className="newdescription"
        rows="12"
        cols="10"
        maxLength={300}
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="formsubmit">
        <button className="btn form-btn">Add</button>{" "}
      </div>
    </form>
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
function SideMenu({ setTasks }) {
  const [showNewTask, setShowNewTask] = useState(false);
  return (
    <ul className="btn-sidebar">
      <li>
        <button className="btn tasklist-btn">Task List</button>
      </li>
      <li>
        <button className="btn">Settings</button>
      </li>
      <li>
        <button
          className="btn newtask"
          onClick={() => setShowNewTask((show) => !show)}
        >
          New Task
        </button>
        {showNewTask ? (
          <NewTask setTasks={setTasks} setShowNewTask={setShowNewTask} />
        ) : null}
      </li>
    </ul>
  );
}

//This handles the list of tasks
function TaskList({ tasks, setTasks }) {
  return (
    <ul className="tasklist">
      {tasks.map((task) => (
        <Task key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
}

//This is where the individual task is loaded from supabase
function Task({ task }) {
  return (
    <li className="task">
      <button className="finish"></button>
      <div className="taskcontainer">
        <h2 className="tasktitle">{task.title}</h2>
        <h3 className="description">{task.description}</h3>
      </div>
    </li>
  );
}
export default App;
