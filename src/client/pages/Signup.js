import React, { useState } from "react";
import supabase from "../supabase";

export function Signup({ setCurrentPage, setuuid, setUser }) {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (pin !== confirmPin) {
      alert("Pins do not match!");
      return;
    }
    if (pin.length !== 6) {
      alert("Pins must be 6 numbers!");
      return;
    }

    const { data: existingUser } = await supabase
      .from("users")
      .select("username")
      .eq("username", username);

    console.log("Username:", existingUser);

    if (existingUser.length > 0) {
      alert("This username is already taken. Please try again");
      return;
    }
    const { error } = await supabase.from("users").insert([{ username, pin }]);

    if (error) {
      alert("Sign up error: " + error.message);
    } else {
      supabase
        .from("users")
        .select("uuid")
        .eq("username", username)
        .eq("pin", pin)
        .then(({ data: users, error: fetchError }) => {
          if (fetchError) {
            alert("Error fetching user: " + fetchError.message);
          } else if (users.length > 0) {
            const user = users[0];
            setuuid(user.uuid);
            console.log("user.uuid:", user.uuid);
            setUser(username);
            setUsername("");
            setPin("");
            setCurrentPage("Task");
          } else {
            alert("Username or password is incorrect");
          }
        });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>
        This is a demo site. Please don't put in any<br></br> sensitive personal
        information
      </h4>
      <input
        type="text"
        className="user"
        placeholder="Username"
        maxLength={16}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="text"
        rows="12"
        cols="10"
        maxLength={6}
        placeholder="Create a 6 digit pin"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <input
        type="password"
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
