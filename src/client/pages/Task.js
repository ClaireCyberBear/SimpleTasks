import React, { useEffect } from "react";
import supabase from "../supabase";

export function Task({ tasks, setTasks, uuid, setCurrentPage }) {
  useEffect(
    function () {
      async function getTasks() {
        let query = supabase.from("tasks").select("*").eq("uuid", uuid);
        const { data: tasks, error } = await query.limit(5);

        if (!error) setTasks(tasks);
      }
      getTasks();
    },
    [uuid]
  );

  if (tasks.length === 0) {
    return (
      <div className="tasklist">
        <button
          className="btn form-btn"
          onClick={() => setCurrentPage("NewTask")}
        >
          New Task
        </button>
        <p className="tasklist">No tasks right now. Create a new task!</p>
      </div>
    );
  }
  return (
    <div className="main-task">
      <ul className="tasklist">
        {tasks.map((task) => (
          <TaskList key={task.id} uuid={uuid} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );

  //This is where the individual task is loaded from supabase
  function TaskList({ task, setTasks }) {
    async function deleteTask() {
      const { data: TaskData, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", task.id)
        .eq("uuid", task.uuid);

      if (!error) {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
      }
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
}
