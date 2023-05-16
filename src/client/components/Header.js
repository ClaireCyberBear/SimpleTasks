import React from "react";

export function Header({ setCurrentPage, uuid, setuuid }) {
  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage("Home")}>
        <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
        <h1 className="title">SIMPLE TASK</h1>
      </div>
      {uuid.length === 0 ? (
        <div className="login">
          <button
            className="btn btn-large"
            onClick={() => setCurrentPage("Home")}
          >
            Login{" "}
          </button>
        </div>
      ) : (
        <div className="login">
          <button className="btn btn-large" onClick={() => setuuid("")}>
            Log Out{" "}
          </button>
        </div>
      )}
    </header>
  );
}
