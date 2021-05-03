import 'bulma/css/bulma.css';
import React from "react"
import "./Navbar.css"
import CoolButton from "../coolbutton/Coolbutton"

const Navbar = () => {
    return (
      <nav className="navbar is-fixed">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <CoolButton isLight>Log in</CoolButton>
                    <CoolButton isPrimary><strong>Sign up</strong></CoolButton>
                  </div>
                </div>
              </div>
      </nav>
    );
  };

export default Navbar