import React, { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";
import { Menu, Header } from "./components";

function App() {
  const [showMenu, setShowMenu] = useState(false); //Menu sidebar by default is closed.
  const [showNewTask, setShowNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(function () {
    async function getTasks() {
      let query = supabase.from("random_tasks").select("*");
      const { data: tasks, error } = await query.limit(5);

      if (!error) setTasks(tasks);
    }
    getTasks();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setShowNewTask={setShowNewTask}
        />
        <Task
          tasks={tasks}
          setTasks={setTasks}
          setShowNewTask={setShowNewTask}
          showNewTask={showNewTask}
        />
      </div>
    </>
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
function Task({ tasks, setTasks, setShowNewTask, showNewTask }) {
  return (
    <div className="task-main">
      {showNewTask && (
        <NewTask setTasks={setTasks} setShowNewTask={setShowNewTask} />
      )}
      <ul className="tasklist">
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
}

//This is where the individual task is loaded from supabase
function TaskList({ task, setTasks }) {
  async function deleteTask() {
    const { data: TaskData, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", task.id);

    if (!error) setTasks((tasks) => [TaskData[0], ...tasks]);
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
