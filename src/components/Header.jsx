import React from "react";
import Button from "./Button";
// import Button from "./Button";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <ion-icon name="logo-stencil"></ion-icon>
          <span>WhiteSandsEvents</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#event">EventGallery</a>
        </nav>
        <Button text="Book Event" className="work-button" />
      </header>
    </>
  );
}

export default Header;
