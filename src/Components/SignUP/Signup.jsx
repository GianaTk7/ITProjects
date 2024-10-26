import React, { useState } from "react";
import "./Signup.css";
function Signup() {
  const [name, setUsername] = useState("");
  const [Email, setUserEmail] = useState("");
  const [Age, setUserAge] = useState("");
  const [Password, setUserPassword] = useState("");
  const [confirmPassword, setUserConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://54.224.45.91:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: Email,
          age: Age,
          password: Password,
          confirm: confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup Successful");
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
        <img src="backgroundimg.jpg"  alt = "" className="cover"/>
      </div>
      <div className="signup-section-div">
        <div className="signup">
          <div className="signup-div">
            <h1 id="heading">
              Sign <span id="txt"> Up </span>
            </h1>
            <hr id="line"></hr>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="nametag">
                  Name:
                </label>
                <br />
                <input
                  type="text"
                  className="details"
                  placeholder="Username*"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="useremail" className="nametag">
                  Email:
                </label>
                <br />
                <input
                  type="email"
                  className="details"
                  placeholder="Useremail*"
                  value={Email}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <br />
                <label htmlFor="userage" className="nametag">
                  Age:
                </label>
                <br />
                <input
                  type="text"
                  className="details"
                  placeholder="UserAge*"
                  value={Age}
                  onChange={(e) => setUserAge(e.target.value)}
                />
                <br />
                <label htmlFor="userpassword" className="nametag">
                  Password:
                </label>
                <br />
                <input
                  type="password"
                  className="details"
                  placeholder="UserPassword*"
                  value={Password}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <br />
                <label htmlFor="username" className="nametag">
                  Confirm Password:
                </label>
                <br />
                <input
                  type="Confirmpassword"
                  className="details"
                  placeholder="ConfirmPassword*"
                  value={confirmPassword}
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                />
                <br />
                <button type="submit" id="sub">
                  Submit
                </button>
                <br />
              </form>
            </div>
            <div className="box">
              <a class="login" href="login">
                Login Here
              </a>
              <h1 className="text">Already have an account?</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
