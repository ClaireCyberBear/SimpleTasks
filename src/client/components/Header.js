import React from "react";

export function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage("Home")}>
        <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
        <h1 className="title">SIMPLE TASK</h1>
      </div>
      <div>
        <button className="btn" onClick={() => setCurrentPage("Home")}>
          Login{" "}
        </button>
      </div>
    </header>
  );
}
