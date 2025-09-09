import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar( {isLoggedIn, setIsLoggedIn} ) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <nav className="navbar">
      <div className='navbar-image'>
        <img src="/SNA Logo.png" alt="Exp Logo" />
      </div>

      <div className='navbar-links'>
        <Link to="/"> Dashboard </Link>
        <Link to="/income"> Income </Link>
        <Link to="/expenses"> Expenses </Link>
        <Link to="/savings"> Savings </Link>
        <Link to="/investments"> Investments </Link>
        <Link to="/reports"> Reports </Link>
      </div>

      <div className='navbar-btn'>
        {!isLoggedIn ? (
          <>
            <Link to="/login"> <button> Login </button> </Link>
            <Link to="/register"> <button> Register </button> </Link>
          </>
        ) : (
          <button onClick={handleLogout}> Logout </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar