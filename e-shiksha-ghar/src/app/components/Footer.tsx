"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear input after submission
  };

  return (
    <footer className="footer">
      {/* Logo */}
      <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        E-Shikshaghar
      </div>

      {/* Navigation Links */}
      <ul className="footerLinks">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Social Media Icons */}
      <div className="socialIcons">
        <a href="#" title="Facebook">📘</a>
        <a href="#" title="Twitter">🐦</a>
        <a href="#" title="Instagram">📸</a>
        <a href="#" title="LinkedIn">🔗</a>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter">
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
        {message && <p className="message">{message}</p>}
      </div>

      {/* Copyright */}
      <p className="copyright">© {new Date().getFullYear()} E-Shikshaghar. All Rights Reserved.</p>
    </footer>
  );
}
