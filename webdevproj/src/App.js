import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css"; 
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";

const LoginForm = ({ onLogin, onToggleSignup }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onLogin(data.username);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
        />
        <br />
        {errors.username && <p>{errors.username.message}</p>}
        <br />
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        <br />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>
        Don't have an account? <button onClick={onToggleSignup}>Sign Up</button>
      </p>
    </div>
  );
};

const SignupForm = ({ onSignup, onToggleSignup }) => {
  const onSubmit = (data) => {
    onSignup(data.username);
    console.log("Username:", data.username);
    console.log("Password:", data.password);
  };

  return (
    <div className="overlay">
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username:</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          <br />
          {errors.username && <p>{errors.username.message}</p>}
          <br />
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <br />
          {errors.password && <p>{errors.password.message}</p>}
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <br />
        <p>
          Already have an account? <span onClick={onToggleSignup}>Log In</span>
        </p>
      </div>
    </div>
  );
};

const ForumHome = ({ user }) => (
  <div>
    <h2>Welcome to the Community! {user}!</h2>
    <p>Welcome to the TUP Community .</p>
  </div>
);

const ForumProducts = () => (
  <div>
    <h2>Products</h2>
    <p>Explore the latest and discussions.</p>
  </div>
);

const ForumOrders = () => (
  <div>
    <h2>Orders</h2>
    <p>View and your orders.</p>
  </div>
);

const Forum = ({ user }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ForumHome user={user} />} />
        <Route path="/products" element={<ForumProducts />} />
        <Route path="/orders" element={<ForumOrders />} />
      </Routes>
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
    <Router>
      <div>
        {!user ? (
          <LoginForm onLogin={handleLogin} onToggleSignup={handleToggleSignup} />
        ) : (
          <Forum user={user} />
        )}
        {showSignup && (
          <SignupForm
            onSignup={handleSignup}
            onToggleSignup={handleToggleSignup}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
