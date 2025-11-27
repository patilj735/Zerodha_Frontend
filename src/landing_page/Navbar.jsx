// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(!!token);
      setUser(storedUser || {});
    };

    checkAuthStatus();

    // Listen for storage changes from dashboard app (logout)
    window.addEventListener("storage", checkAuthStatus);
    return () => window.removeEventListener("storage", checkAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({});
    // Dispatch custom event so dashboard app detects logout
    window.dispatchEvent(new Event("frontendLogout"));
    navigate("/");
  };
  const collapseNavbar = () => {
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  if (navbarCollapse.classList.contains('show')) {
    const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: true });
    bsCollapse.hide();
  }
};

  return (
    <nav className="navbar navbar-expand-lg border-bottom navbar-responsive" style={{ backgroundColor: "#FFF" }}>
      <div className="container-fluid navbar-container">
        <Link to="/" className="navbar-brand-logo"><img src="media/images/logo.svg" alt="logo" className="navbar-logo" /></Link>

        <button
          className="navbar-toggler hamburger-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" onClick={collapseNavbar} to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active"  onClick={collapseNavbar} to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link active" onClick={collapseNavbar} to="/product">Product</Link></li>
            <li className="nav-item"><Link className="nav-link active" onClick={collapseNavbar} to="/pricing">Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link active" onClick={collapseNavbar} to="/support">Support</Link></li>

            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a
                    href={`${import.meta.env.VITE_DASHBOARD_URL}/dashboard`}
                    className="nav-link active"
                    style={{ color: "#387ed1", fontWeight: "500" }}
                  >
                  {/* <a
                    href={`http://localhost:5173/dashboard?token=${localStorage.getItem("token")}`}
                    className="nav-link active"
                    style={{ color: "#387ed1", fontWeight: "500" }}
                  > */}
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <span className="nav-link active" style={{ cursor: "pointer", color: "#666" }}>
                    {user.username || "User"}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="nav-link active"
                    style={{
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "5px 15px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                  onClick={collapseNavbar}
                    className="nav-link active"
                    to="/signup"
                    style={{ color: "#387ed1", fontWeight: "500" }}
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  onClick={collapseNavbar}
                    className="nav-link active"
                    to="/login"
                    style={{ color: "#387ed1", fontWeight: "500" }}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
