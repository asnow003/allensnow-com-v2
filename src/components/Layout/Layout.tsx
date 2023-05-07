import React, { Component } from "react";
// import logo from "../../logo.svg";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default Layout;
