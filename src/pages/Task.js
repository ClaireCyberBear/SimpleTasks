import React, { useEffect } from "react";
import supabase from "../supabase";

export function Task({ tasks, setTasks }) {
  useEffect(function () {
    async function getTasks() {
      let query = supabase.from("random_tasks").select("*");
      const { data: tasks, error } = await query.limit(5);

      if (!error) setTasks(tasks);
    }
    getTasks();
  }, []);
  return (
    <div className="main-task">
      <ul className="tasklist">
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} setTasks={setTasks} />
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
}
