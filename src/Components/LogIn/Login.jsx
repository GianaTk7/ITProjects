import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [Email, setUserEmail] = useState("");
  const [Password, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setUserEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Email === "" || Password === "") {
      alert("Please fill in both fields");
      return;
    }

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", Email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,         
        password: Password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {   
          navigate("/");
        } else {
          alert("Login failed: " + (data.message || "Invalid credentials"));
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <div className="side-img-div">
        <img src="store.jpg" alt="stcover" className="setcover" />
      </div>
      <div className="signIn">
        <div className="login-container">
          <div>
            <h1 className="heardertxt">Welcome to JM</h1>
            <div className="person-icon-div">
              <img src="person.svg" alt="logoic" id="person-icon" />
            </div>
          </div>
          <div className="login-div">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="loginemail"
                placeholder="Useremail*"
                value={Email}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                className="setinput"
                type="password"
                id="loginpass"
                placeholder="UserPassword*"
                value={Password}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
              <br/>
              <div className="handerback" id="buttonContainer">
                <button type="submit" className="submit" id="handInButton">
                  Hand in
                </button>
                <br />
                <button id="signUpButton">Sign up</button>
              </div>
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
