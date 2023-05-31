import React, { Component } from "react";
import { Background } from "./Background";
// import logo from "../../logo.svg";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";
import INavigationItem from "../../interfaces/INavigationItem";
import * as navigation from "../../resources/content/navigation.json";

const navItems = JSON.parse(JSON.stringify(navigation)) as INavigationItem[];
const background = new Background(navItems);
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
