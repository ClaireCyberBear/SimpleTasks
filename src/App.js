import "./style.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
          <h1>SIMPLE TASK</h1>
        </div>

        <button className="btn btn-large btn-open">Login</button>
      </header>
      <MenuSidebar />
      <main className="main">
        <form className="taskform hidden">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <button className="btn add-btn">Add</button>
        </form>

        <ul className="tasklist">
          <li className="tasks"></li>
        </ul>
      </main>
    </div>
  );
}

function MenuSidebar() {
  return (
    <aside className="sidebar">
      <button className="btn sidebar-open">Open</button>
      <ul className="btn-sidebar hidden">
        <li>
          <button className="btn newtask">New Task</button>
        </li>
        <li>
          <button className="btn tasklist-btn">Task List</button>
        </li>
        <li>
          <button className="btn">Settings</button>
        </li>
      </ul>
    </aside>
  );
}

export default App;
