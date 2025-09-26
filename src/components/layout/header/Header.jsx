import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../../assets/images/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Technology", path: "/technology" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="header">
      <div className="headerContainer">
        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
        {/* NAVIGATION LINKS */}
        <div className="nav-links">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <nav className={`nav-links ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-item-active" : "nav-item"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="header-right">
          <NavLink to="/contact" className="nav-item-contact">
            Contact
          </NavLink>
          {/* MOBILE HAMBURGER */}
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
