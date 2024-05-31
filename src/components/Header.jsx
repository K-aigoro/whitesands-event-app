import React, { useState } from "react";
import Button from "./Button";
// import Button from "./Button";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <ion-icon name="logo-stencil"></ion-icon>
          <span>WhiteSandsEvents</span>
        </div>
        <div className="navbar">
          <nav className={`nav ${isNavOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#event">EventGallery</a>
          </nav>
          <Button text="Book Event" className="work-button1" />
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          &#9776;
        </div>
      </header>
    </>
  );
}

export default Header;
