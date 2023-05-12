import React from "react";

export function SignUp({ setCurrentPage }) {
  return (
    <form className="form">
      <h3>
        This is a demo site. <br></br> Please don't put in any sensitive
        personal information
      </h3>
      <input
        type="text"
        className="user"
        placeholder="Username"
        maxLength={16}
      />
      <input
        className="text"
        rows="12"
        cols="10"
        maxLength={6}
        placeholder="Create a 6 digit pin"
      />
      <input
        className="text"
        rows="12"
        cols="10"
        maxLength={6}
        placeholder="Confirm Pin"
      />
      <div className="formsubmit">
        <button className="btn form-btn" onClick={() => setCurrentPage("Home")}>
          Cancel
        </button>
        <button className="btn form-btn" onClick={() => setCurrentPage("Task")}>
          Create Account
        </button>
      </div>
    </form>
  );
}
