import React from "react";

export function SignUp({ setCurrentPage }) {
  const [username, setUsername] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [confirmPin, setConfirmPin] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (pin !== confirmPin) {
      alert("Pins do not match!");
      return;
    }
  };

  return (
    <form className="form">
      <h3>
        This signup is still a WIP and does not yet work <br></br>
      </h3>
      <input
        type="text"
        className="user"
        placeholder="Username"
        maxLength={16}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="text"
        rows="12"
        cols="10"
        maxLength={6}
        placeholder="Create a 6 digit pin"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <input
        className="text"
        rows="12"
        cols="10"
        maxLength={6}
        placeholder="Confirm Pin"
        value={confirmPin}
        onChange={(e) => setConfirmPin(e.target.value)}
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
