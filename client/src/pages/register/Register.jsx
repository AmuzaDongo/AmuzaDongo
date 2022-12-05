import { Link } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD
import axiosInstance from "../../config";
=======
import axios from "axios";
// import toast from "react-hot-toast";
>>>>>>> dd42d3b (edited back end code)
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
<<<<<<< HEAD
            const res = await axiosInstance.post("/auth/register", {
=======
            const res = await axios.post(`${process.env.REACT_APP_API}/register`, {
>>>>>>> dd42d3b (edited back end code)
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (error) {
            setError(true);
        }
    }
    return (
        <div className="register" style={{backgroundImage: "url('../assets/p2.jpg')"}}>
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username"
<<<<<<< HEAD
                    onChange = {e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email"
=======
                    value={username}
                    onChange = {e=>setUsername(e.target.value)}
                    autoFocus
                />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email"
                    value={email}
>>>>>>> dd42d3b (edited back end code)
                    onChange = {e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password"
<<<<<<< HEAD
=======
                    value={password}
>>>>>>> dd42d3b (edited back end code)
                    onChange = {e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
            {error && <span style={{color:'red',marginTop:'10px'}}>Something went wrong!</span>}
        </div>
    )
}
