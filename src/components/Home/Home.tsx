import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./Home.scss";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>
          <FormattedMessage id="app.home" defaultMessage="Err:Download" />
        </p>
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
      </div>
    );
  }
}

export default Home;
