import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.placeholder]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form["Password"] !== form["Re-enter Password"]) {
            alert("Passwords do not match!")
            return
        }

        const user = {
            name: form['Full Name'],
            email: form["Email"],
            password: form["Password"]
        }

        localStorage.setItem('user', JSON.stringify(user))
        alert("Account created! You can now log in.")
        navigate('/login')
    }

    return (
    <section className='reg'>
        <form onSubmit={handleSubmit}>
            <img src="/SNA Logo.png" alt="Logo" className='navbar-image' />

            <input placeholder="Full Name" type="text" value={form["Full Name"]} onChange={handleChange} required />
            <input placeholder="Email" type="email" value={form["Email"]} onChange={handleChange} required />
            <input placeholder="Password" type="password" value={form['Password']} onChange={handleChange} required />
            <input placeholder="Re-enter Password" type="password" value={form["Re-enter Password"]} onChange={handleChange} required />
            <br />

            <button type="submit"> Create Account </button>
        </form>
    </section>
    )
}

export default Register
