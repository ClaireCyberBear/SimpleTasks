import React from "react";
import supabase from "../supabase";

export function Home({ setCurrentPage, uuid }) {
  useEffect(function () {
    async function getTasks() {
      let query = supabase.from("random_tasks").select("*");
      const { data: tasks, error } = await query.limit(5);

      if (!error) setTasks(tasks);
    }
    getTasks();
  }, []);

  return (
    <form className="form">
      <input type="text" placeholder="Username" maxLength={16} />
      <input
        className="text"
        rows="12"
        cols="10"
        maxLength={6}
        placeholder="Password"
      />
      <div className="formsubmit">
        <button
          className="btn form-btn"
          onClick={() => setCurrentPage("SignUp")}
        >
          sign-up
        </button>
        <button className="btn form-btn" onClick={() => setCurrentPage("Task")}>
          Login
        </button>
      </div>
    </form>
  );
}
