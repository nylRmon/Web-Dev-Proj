// App.js
import React, { useState } from 'react';
import './App.css';
//log in
const LoginForm = ({ onLogin, onToggleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <label>Email:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <p>Don't have an account? <span onClick={onToggleSignup}>Sign Up</span></p>
    </div>
  );
};
// for sign up
const SignupForm = ({ onSignup, onToggleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    onSignup(username);
  };

  return (
    <div className="overlay">
      <div className="container">
        <h2>Sign Up</h2>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleSignup}>Sign Up</button>
        <br />
        <p>Already have an account? <span onClick={onToggleSignup}>Log In</span></p>
      </div>
    </div>
  );
};
// this is the after log in pede natin dito ipasok yung main program mwahahh
const Forum = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>This is the forum. You can start discussing topics here.</p>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSignup = (username) => {
    setUser(username);
    setShowSignup(false); 
  };

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={handleLogin} onToggleSignup={handleToggleSignup} />
      ) : (
        <Forum user={user} />
      )}
      {showSignup && (
        <SignupForm onSignup={handleSignup} onToggleSignup={handleToggleSignup} />
      )}
    </div>
  );
};

export default App;
