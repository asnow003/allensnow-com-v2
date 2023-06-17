import React, { Component } from "react";
import { Background } from "./Background";
// import logo from "../../logo.svg";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import INavigationItem from "../../interfaces/INavigationItem";
import * as navigation from "../../resources/content/navigation.json";

const navItems = JSON.parse(JSON.stringify(navigation)) as INavigationItem[];
const background = new Background(navItems);
class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Outlet />
      </div>
    );
  }
}

export default Layout;
