import React from "react";

export function LoginAlert({ uuid }) {
  return (
    <div className="form">
      {uuid.length === 0 ? (
        <h2>
          You are not signed in. Please sign in or create an account to access
          this feature
        </h2>
      ) : (
        <h2>
          You are already signed in. Log out before attempting to sign up.
        </h2>
      )}
    </div>
  );
}
