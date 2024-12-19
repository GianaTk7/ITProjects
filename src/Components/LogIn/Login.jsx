import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
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

    fetch("http://50.17.168.184:8000/login", {
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
          localStorage.setItem("user", JSON.stringify(data.user)); 
          alert("Login successful! Welcome " + data.user.name);
        } else {
          alert("Login failed: " + (data.message || "Invalid credentials"));
        }
        alert('User')
      })
      .catch((error) => console.error("Error:", error));
  };
  const loginPageStyle = {
    width: "1350px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('/backgroundimg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", // Ensures no tiling
  };
  

  const loginBoxStyle = {
    width: "350px", 
    height: "450px", 
    padding: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.85)", 
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)", 
    color: "#fff",
    textAlign: "center",
  };

  return (
    <div style={loginPageStyle}>
      <div style={loginBoxStyle}>
        <div className="icon-circle">
          <img src="person.svg" alt="User Icon" className="user-icon" />
        </div>
        <h2>Login Here</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Username"
            value={Email}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={Password}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
         
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <p className="forgot-password">Lost your password?</p>
          <p className="signup-link">
            Don't have an account? <a href="signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
