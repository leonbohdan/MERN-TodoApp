import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { logout, isLogined } = useContext(AuthContext);

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <b className="size24">Todo App</b>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            href="/"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>

            <a className="navbar-item" href="/">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="/">
                  About
                </a>

                <a className="navbar-item" href="/">
                  Jobs
                </a>

                <a className="navbar-item" href="/">
                  Contact
                </a>

                <hr className="navbar-divider" />
                <a className="navbar-item" href="/">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isLogined ? (
                  <Link className="button is-light" to="/" onClick={logout}>
                    Log out
                  </Link>
                ) : (
                  <>
                    <Link className="button is-success" to="/registration">
                      <strong>Sign up</strong>
                    </Link>

                    <Link className="button is-light" to="/login">
                      Log in
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
