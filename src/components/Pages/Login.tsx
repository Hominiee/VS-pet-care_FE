import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (email && password) {
            console.log("Email:", email);
            console.log("Password:", password);
            // Add your login logic here
        } else {
            alert("Please enter both email and password.");
        }
    };

    return (
        <div className="container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar-brand">
                   VS Pet Care
                </div>
            </nav>

            {/* Login Form */}
            <div className="login-box">
                <h2 className="login-header">LOGIN</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="email"
                        placeholder="Input Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Input Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <a href="#" className="forgot-password-link">Forgot Password?</a>
            </div>
        </div>
    );
};

export default Login;

