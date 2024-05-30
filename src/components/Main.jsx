import React from "react";
import Button from "./Button";

function Main() {
  return (
    <>
      <main className="main__content">
        <h1>Effortlessly Book your Event</h1>
        <p>
          Whether it's a wedding corporate function, or birthday party, we make
          planning easy and stress-free. Discover Stunning venues, trusted
          vendors and bespoke package tailored to your needs.
        </p>
        <div className="buttons">
          <Button text="Book Event" className="book-event-button" />
          <Button text="Our Work" className="work-button" />
        </div>

        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="arrow">↓</div>
        </div>
      </main>
    </>
  );
}

export default Main;
