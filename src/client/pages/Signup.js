import React from "react";
import supabase from "../supabase";

export function SignUp({ setCurrentPage, setuuid }) {
  const [newUser, setNewUser] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [confirmPin, setConfirmPin] = React.useState("");

  if (uuid.length !== 0) {
    setCurrentPage("LoginAlert");
  }
  if (pin !== confirmPin) {
    alert("Pins do not match!");
    return;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (pin !== confirmPin) {
      alert("Pins do not match!");
      return;
    }

    const { data: newUserData, error } = await supabase
      .from("users")
      .insert([{ newUser, pin }])
      .select();

    if (!error) setuuid((tasks) => [newUserData[0], ...users]);

    setNewUser("");
    setPin("");
    setCurrentPage("Task");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>
        This is a demo site. <br></br> Please don't put in any sensitive
        personal information
      </h3>
      <input
        type="text"
        className="user"
        placeholder="Username"
        maxLength={16}
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
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
        <button className="btn form-btn">Create Account</button>
      </div>
    </form>
  );
}
