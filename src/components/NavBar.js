import React, { Component } from "react";
// Logo
import Logo from "../images/logo.svg";
// Icon
import { FaAlignRight } from "react-icons/fa";
// Router
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-center">
          <div className="navbar-header">
            <Link to="/">
              <img src={Logo} alt="Burak Özkan Deneme" />
            </Link>
            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/rooms">Odalar</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
