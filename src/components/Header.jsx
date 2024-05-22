import logoImg from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function toggleHandle() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    setIsSideMenuOpen((prevIsSideMenuOpen) => !prevIsSideMenuOpen);
  }

  return (
    <>
      <header className="header">
        <a href="/dropdown-navigation-page" className="logo">
          <img src={logoImg} alt="logo" />
        </a>

        <div className={`navbar-container ${isMenuOpen ? "showMenu" : ""}`}>
          <Navbar />

          <div className="button-container">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
        </div>
        <a
          className={`sidemenu-button ${
            isSideMenuOpen ? "close-sidemenu-button" : ""
          }`}
          onClick={toggleHandle}
        ></a>
      </header>

      {isSideMenuOpen && <div className="mask"></div>}
    </>
  );
}
