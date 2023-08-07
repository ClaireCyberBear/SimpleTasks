import React, { useState } from "react";
import supabase from "../supabase";

export function NewTask({ setTasks, setCurrentPage, uuid }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toast, setToast] = useState({ visible: false, message: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Title is required.");
      return;
    }

    const { data: newTaskData, error } = await supabase
      .from("tasks")
      .insert([{ uuid, title, description }])
      .select();

    if (!error) setTasks((tasks) => [newTaskData[0], ...tasks]);

    setToast({ visible: true, message: "SUCCESS!" });
    setTimeout(() => setToast({ visible: false, message: "" }), 2000);
    setTitle("");
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {toast.visible && <div className="toast">{toast.message}</div>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        maxLength={35}
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
        <button className="btn form-btn" onClick={() => setCurrentPage("Task")}>
          Close
        </button>
        <button className="btn form-btn">Add</button>
      </div>
    </form>
  );
}
