import { useState } from 'react';

export default function UserStatusPage({ onLogin, user, isUsernameTaken }) {
  return (
    <main>
      <h1>User Status</h1>
      {user ? (
        <dl>
          <dt>Username</dt>
          <dd>{user.username}</dd>
          <dt>Credits:</dt>
          <dd>{user.credits}</dd>
        </dl>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Please select a user name</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="e.g. neuefisch"
          />
          {isUsernameTaken && <p>Username already taken!</p>}
          <button>Login</button>
        </form>
      )}
    </main>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.username;
    onLogin(input.value);
  }
}
