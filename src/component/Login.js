import React, { useState } from "react";
import './Login.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName: username, password }),
        });

        const data = await response.json();
        if (response?.ok) {
            console.log("Login successful:", data);
            localStorage.setItem("Token", data.responseData);
            handleGoToMenu()
            // Handle successful login
        } else {
            console.log("Login failed:", data);
            // Handle login failure
        }
    };
    const navigate = useNavigate();
    const handleGoToMenu = () => navigate("treatment");
    return (
        <div className="view">
        <form onSubmit={handleSubmit}>
            <div className="login">
            <div className="row p-3">
            <label style={{fontSize:20,fontWeight:600}}>Login</label>
            </div>
                <div className="row p-3">
                    <div className="col-sm-4">
                        <label htmlFor="username">Username:</label>
                    </div>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            aria-label="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-sm-4">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div className="col-sm-8">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            aria-label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    

    );
}

export default LoginForm;
