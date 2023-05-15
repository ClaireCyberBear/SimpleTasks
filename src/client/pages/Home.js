import React from "react";
import supabase from "../supabase";

export function Home({ setCurrentPage }) {
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
