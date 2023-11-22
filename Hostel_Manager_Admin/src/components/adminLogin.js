import React, { useState } from "react";
import "./adminLogin.css";
import axios from "axios";

const AdminLogin = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post(
        "http://20.2.80.190:5100/api/guardian/login",
        credentials
      );
      localStorage.setItem("token", response.data.token);

      // Close the current tab
      window.close();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegister = async (credentials) => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      await axios.post(
        "http://20.2.80.190:5100/api/guardian/register",
        credentials
      );
      handleLogin(credentials);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleRegister({ email, password });
    } else {
      handleLogin({ email, password });
    }
  };

  return (
    <div className="admin-login-container">
      <div className="form-container">
        <h2 className="form-title">
          {isSignup ? "Admin Signup" : "Admin Login"}
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isSignup && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}
          <button className="submit-btn" type="submit">
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <div className="toggle-form">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={toggleForm} className="toggle-link">
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span onClick={toggleForm} className="toggle-link">
                Signup
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
