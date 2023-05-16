import React, { useState } from "react";
import supabase from "../supabase";

export function Home({ setCurrentPage, setuuid, setUser }) {
  const [pin, setPin] = useState("");
  const [username, setUsername] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    setUser(username);
    supabase
      .from("users")
      .select("uuid")
      .ilike("username", username)
      .eq("pin", pin)
      .then(({ data: users, error: fetchError }) => {
        if (fetchError) {
          alert("Login error: " + fetchError.message);
        } else if (users.length > 0) {
          setuuid(users[0].uuid);
          setUsername("");
          setPin("");
          setCurrentPage("Task");
        } else {
          alert("Username or password is incorrect");
        }
      });
  }

  return (
    <form className="form" onSubmit={handleLogin}>
      <h4>You can try a demo login with username: "demo" pin: "123456"</h4>
      <input
        type="text"
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
        placeholder="Password"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <div className="formsubmit">
        <button
          className="btn form-btn"
          type="button"
          onClick={() => setCurrentPage("Signup")}
        >
          Sign Up
        </button>
        <button className="btn form-btn" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
