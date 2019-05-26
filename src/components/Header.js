import React from "react";
import { Link } from "react-router-dom";
import { AppConsumer } from "../appContext";

function Header() {
  return (
    <AppConsumer>
      {({ cart }) => (
        <header className="header">
          <div className="container">
            <Link to="/">
              <img src="/assets/logo.svg" alt="Clone Eats logo" />
            </Link>
            <div className="header-right">
              <div className="header-user">
                <img src="/assets/user.svg" alt="Not logged user icon" />
              </div>
              <Link
                className={`header-cart${cart.length ? " active" : ""}`}
                to="/cart"
              >
                <img src="/assets/cart.svg" alt="Sacola" />
              </Link>
              <span>{cart.length}</span>
            </div>
          </div>
        </header>
      )}
    </AppConsumer>
  );
}

export default Header;
