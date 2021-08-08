import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [state, setstate] = useState("close");

  return (
    <div>
      <nav>
        <div
          className="BurgerMenu_button"
          role="button"
          onClick={() => setstate(state === "open" ? "close" : "open")}
        >
          <i className={state}></i>
          <i className={state}></i>
          <i className={state}></i>
        </div>
      </nav>
      <div className={`BurgerSidebar${state}`}>
        <ul className="list">Home</ul>
        <ul className="list">About</ul>
        <ul className="list">Login</ul>
      </div>
    </div>
  );
}

export default Navbar;
