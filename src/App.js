import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";
import { Menu } from "./components";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [showNewTask, setShowNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(function () {
    async function getTasks() {
      let query = supabase.from("random_tasks").select("*");
      const { data: tasks, error } = await query.limit(5);

      if (error) {
        setError(error);
      } else {
        setTasks(tasks);
      }
    }
    getTasks();
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="menu-task">
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setShowNewTask={setShowNewTask}
        />

        <main className="main">
          {showNewTask ? (
            <NewTask setTasks={setTasks} setShowNewTask={setShowNewTask} />
          ) : null}
          <TaskList tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
        <h1 className="title">SIMPLE TASK</h1>
      </div>

      <h1 className="username">DEMO USER</h1>
    </header>
  );
}

function NewTask({ setTasks, setShowNewTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const { data: newTaskData, error } = await supabase
      .from("tasks")
      .insert([{ title, description }])
      .select();

    if (!error) setTasks((tasks) => [newTaskData[0], ...tasks]);

    setTitle("");
    setDescription("");
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
        <button className="btn form-btn" onClick={() => setShowNewTask(false)}>
          Close
        </button>
        <button className="btn form-btn">Add</button>
      </div>
    </form>
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
function Task({ task, setTasks }) {
  async function deleteTask() {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", task.id);

    if (!error) setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  }

  return (
    <li className="task">
      <button className="finish" onClick={deleteTask}></button>
      <div className="taskcontainer">
        <h2 className="tasktitle">{task.title}</h2>
        <h3 className="description">{task.description}</h3>
      </div>
    </li>
  );
}
export default App;
