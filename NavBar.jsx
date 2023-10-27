import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style">
          <div className="container-fluid">
            <a className="navbar-brand textStyle">E-Commerce</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="linkUnderline">
                    <a className="nav-link navbar-font active">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Electronic" className="linkUnderline">
                    <a className="nav-link navbar-font active">Electronic</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle navbar-font"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Clothes Section
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Men" className="linkUnderline">
                        <a className="dropdown-item navbar-font">
                          Men's Section
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Women" className="linkUnderline">
                        <a className="dropdown-item navbar-font">
                          Women's Section
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/kids" className="linkUnderline">
                        <a className="dropdown-item navbar-font">
                          Kid's Section
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="m-2" role="account">
                <Link to="/SignUp">
                  <button className="btn btn-outline-success m-1" type="signup">
                    SignUp
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="btn btn-outline-success" type="login">
                    Login
                  </button>
                </Link>
              </form>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
