import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setIsLoggedIn}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser) {
            alert("No account found. Please register first.");
            navigate('/register')
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            navigate('/');
        } else {
            alert("Invalid credentials. Please try again.");
        }
    }

    return (
    <section className='login'>
        <form onSubmit={handleSubmit}>
            <img src="/SNA Logo.png" alt="Logo" className='navbar-image' />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <br />
            <button className="login-btn" type="submit"> Login </button>
            <p> New user? Create an account: </p>
            <button className='login-btn' type="button" onClick={() => navigate('/register')}>
                Register
            </button>
            </form>

    </section>
    )
}

export default Login
