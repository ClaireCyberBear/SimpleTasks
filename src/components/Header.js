import React from "react";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
        <h1 className="title">SIMPLE TASK</h1>
      </div>
      <span className="login">
        <h1 className="username">DEMO USER</h1>
        <button className="btn btn-large">Login</button>
      </span>
    </header>
  );
}
