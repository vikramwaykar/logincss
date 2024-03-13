// App.js
import React, { useState } from "react";
import "./login.css"
import LoginForm from "./LoginForm";

function App() {
  const [showStudentLogin, setShowStudentLogin] = useState(true);
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [showParentLogin, setShowParentLogin] = useState(false);

  const handleStudentLogin = (username, password) => {
    console.log("Student Login:", username, password);
    // Add your student login logic here
  };

  const handleTeacherLogin = (username, password) => {
    console.log("Teacher Login:", username, password);
    // Add your teacher login logic here
  };

  const handleParentLogin = (username, password) => {
    console.log("Parent Login:", username, password);
    // Add your parent login logic here
  };

  const showTeacherLoginForm = () => {
    setShowStudentLogin(false);
    setShowTeacherLogin(true);
    setShowParentLogin(false);
  };

  const showParentLoginForm = () => {
    setShowStudentLogin(false);
    setShowTeacherLogin(false);
    setShowParentLogin(true);
  };
  const showStudentLoginForm = () => {
    setShowStudentLogin(true);
    setShowTeacherLogin(false);
    setShowParentLogin(false);
  };

  return (
    <div className="Login">
      <h1>Logo Here</h1>
      <div className="login-container">
        <div className="loginSwitch">
          
          
          <button onClick={showStudentLoginForm}>Student</button>
          <button onClick={showParentLoginForm}>Parent</button>
          <button onClick={showTeacherLoginForm}>Teacher Login</button>
        </div>
        <div className={`login-section ${showStudentLogin ? "active" : ""}`}>
          <h2>Student Login</h2>
          <LoginForm onSubmit={handleStudentLogin} />
        </div>
        <div className={`login-section ${showTeacherLogin ? "active" : ""}`}>
          <h2>Teacher Login</h2>
          <LoginForm onSubmit={handleTeacherLogin} />
        </div>
        <div className={`login-section ${showParentLogin ? "active" : ""}`}>
          <h2>Parent Login</h2>
          <LoginForm onSubmit={handleParentLogin} />
        </div>
      </div>
    </div>
  );
}

export default App;
