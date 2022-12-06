import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/users/register`, {
                // email: userRef.current.value,
                // password: passwordRef.current.value,
                email,
                password
            });
            console.log(data)
            if (data?.error) {
                toast.error(data.error);
            }else{
                toast.success("Login successful");
            }
        } catch (error) {
            console.log(error);
            toast.error("Login failed. Try again.");
        }
    };
    
    return (
        <div className="register" style={{backgroundImage: "url('../assets/p2.jpg')"}}>
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username"
                    value={username}
                    onChange = {e=>setUsername(e.target.value)}
                    autoFocus
                />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email"
                    value={email}
                    onChange = {e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password"
                    value={password}
                    onChange = {e=>setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
            {error && <span style={{color:'red',marginTop:'10px'}}>Something went wrong!</span>}

            <Toaster />
        </div>
    )
}
