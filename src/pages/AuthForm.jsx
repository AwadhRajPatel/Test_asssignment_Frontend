import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState(""); // Updated from 'name' to 'username'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register({ username, email, password }); // Updated field names
        alert("Registration successful! Please login.");
        setIsRegister(false);
      } else {
        const { data } = await login({ email, password });
        localStorage.setItem("token", data.token);
        navigate("/");
      }
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input type="text" className="form-control my-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        )}
        <input type="email" className="form-control my-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="form-control my-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary">{isRegister ? "Register" : "Login"}</button>
      </form>
      <p className="mt-2">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <button className="btn btn-link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
