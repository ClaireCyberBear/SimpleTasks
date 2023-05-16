import React, { useRef } from "react";

export function Header({ setCurrentPage, uuid, setuuid, user }) {
  function handleLogout() {
    setuuid("");
    setCurrentPage("Home");
  }
  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage("Home")}>
        <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
        <h1 className="title">SIMPLE TASK</h1>
      </div>
      {uuid === "" ? (
        <div className="login">
          <button
            className="btn btn-large"
            onClick={() => setCurrentPage("Home")}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="login">
          <div className="username">{user}</div>
          <span>
            <button className="btn btn-large" onClick={handleLogout}>
              Log Out
            </button>
          </span>
        </div>
      )}
    </header>
  );
}
