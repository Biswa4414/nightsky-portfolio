import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import avatar from "../../../assets/images/avatar.jpg";
import "./style.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Technology", path: "/technology" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="gradient-bg"></div>
      <div className="nav-pill">
        <div className="nav-left">
          <Link to="/" className="brand">
            <img src={avatar} alt="Profile" className="avatar" />
            <span className="brand-name">Biswajit</span>
          </Link>
        </div>

        <nav className={`nav-center ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <NavLink to="/contact" className="connect-btn">
            Let's Connect
          </NavLink>
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <CloseRoundedIcon sx={{ fontSize: 30 }} />
            ) : (
              <MenuRoundedIcon sx={{ fontSize: 30 }} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
