import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [name, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [age, setUserAge] = useState("");
  const [password, setUserPassword] = useState("");
  const [confirmPassword, setUserConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!name || !email || !age || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://50.17.168.184:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          age,
          password,
          confirm: confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup Successful");
        navigate("/");
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div className="main-div">
      <div className="cover-div">
        <img src="backgroundimg.jpg" alt="Background" className="cover" />
      </div>
      <div className="signup-container">
        <h1 className="heading">
          Sign <span className="highlight">Up</span>
        </h1>
        <hr className="line" />
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="username" className="label">
              Name:
            </label>
            <input
              type="text"
              id="username"
              className="input"
              placeholder="Name*"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Email*"
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age" className="label">
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="input"
              placeholder="Age*"
              value={age}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password*"
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="input"
              placeholder="Confirm Password*"
              value={confirmPassword}
              onChange={(e) => setUserConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="redirect-container">
          <p className="redirect-text">Already have an account?</p>
          <a href="/login" className="redirect-link">
            Login Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
