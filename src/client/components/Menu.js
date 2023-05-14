import React from "react";

export function Menu({ showMenu, setShowMenu, setCurrentPage }) {
  return (
    <MenuButton
      showMenu={showMenu}
      setShowMenu={setShowMenu}
      setCurrentPage={setCurrentPage}
    />
  );
  //Little function for the MenuButton, when clicked it sets showMenu to true
  function MenuButton({ showMenu, setShowMenu, setCurrentPage }) {
    return (
      <aside className="sidebar">
        <button
          className="btn btn-large"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? "Close" : "Menu"}
        </button>
        {showMenu ? (
          <SideMenu setCurrentPage={setCurrentPage} setShowMenu={setShowMenu} />
        ) : null}
      </aside>
    );
  }

  //Html for the side bar, this is hidden until the showMenu state becomes true
  function SideMenu({ setCurrentPage, setShowMenu }) {
    const handleClick = (page) => {
      setCurrentPage(page);
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
          <button
            className="btn tasklist-btn"
            onClick={() => handleClick("Task")}
          >
            Task List
          </button>
        </li>

        <li className="newtask">
          <button className="btn" onClick={() => handleClick("NewTask")}>
            New Task
          </button>
        </li>

        <li></li>
      </ul>
    );
  }
}
