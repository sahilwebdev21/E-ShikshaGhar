"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user login status (Replace with real authentication logic)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/" className="logo">
        E-Shikshaghar
      </Link>

      {/* Navigation Links */}
      <ul className="navLinks">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Authentication & Profile */}
      <div className="authSection">
        {isLoggedIn ? (
          <div className="profileDropdown">
            <button className="profileBtn">👤</button>
            <div className="dropdownContent">
              <Link href="/profile">Profile</Link>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="authButtons">
            <Link href="/login" className="loginBtn">Login</Link>
            <Link href="/register" className="signupBtn">Sign Up</Link>
          </div>
        )}
        
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="darkModeBtn">
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
