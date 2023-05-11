import { useState } from "react";

export function Menu({ showMenu, setShowMenu, setShowNewTask }) {
  return (
    <MenuButton
      showMenu={showMenu}
      setShowMenu={setShowMenu}
      setShowNewTask={setShowNewTask}
    />
  );
  //Little function for the MenuButton, when clicked it sets showMenu to true
  function MenuButton({ showMenu, setShowMenu, setShowNewTask }) {
    return (
      <aside className="sidebar">
        <button
          className="btn sidebar-open"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? "Close" : "Menu"}
        </button>
        {showMenu ? (
          <SideMenu setShowNewTask={setShowNewTask} setShowMenu={setShowMenu} />
        ) : null}
      </aside>
    );
  }

  //Html for the side bar, this is hidden until the showMenu state becomes true
  function SideMenu({ setShowNewTask, setShowMenu }) {
    const handleClick = () => {
      setShowNewTask(true);
      setShowMenu(false);
    };
    return (
      <ul className="btn-sidebar">
        <li>
          <button className="btn">
            <a href="https://github.com/ClaireCyberBear/SimpleTasks">
              Source Code
            </a>
          </button>
        </li>
        <li>
          <button className="btn tasklist-btn">Task List</button>
        </li>

        <li className="newtask">
          <button className="btn" onClick={handleClick}>
            New Task
          </button>
        </li>
      </ul>
    );
  }
}
