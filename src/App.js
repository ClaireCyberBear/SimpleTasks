import "./style.css";

function App() {
  return (
    <div class="container">
      <header class="header">
        <div class="logo">
          <img src="logo.png" height="68" width="68" alt="SimpleTask Logo" />
          <h1>SIMPLE TASK</h1>
        </div>

        <button class="btn btn-large btn-open">Login</button>
      </header>
      <MenuSidebar />
      <main class="main">
        <form class="taskform hidden">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <button class="btn add-btn">Add</button>
        </form>

        <ul class="tasklist">
          <li class="tasks"></li>
        </ul>
      </main>
    </div>
  );
}

function MenuSidebar() {
  return (
    <aside class="sidebar">
      <button class="btn sidebar-open">Open</button>
      <ul class="btn-sidebar hidden">
        <li>
          <button class="btn newtask">New Task</button>
        </li>
        <li>
          <button class="btn tasklist-btn">Task List</button>
        </li>
        <li>
          <button class="btn">Settings</button>
        </li>
      </ul>
    </aside>
  );
}

export default App;
