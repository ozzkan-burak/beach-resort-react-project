import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//logo
import Logo from '../images/logo.svg';
//FontAwesome
import { FaAlignRight } from 'react-icons/fa';

class NavBar extends Component {
  state = {
    isOpen:false
  }

  handlleToggle = () => {
    this.setState({isOpen:!this.state.isOpen})
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" >
              <img src={Logo} alt='Beach Resort' />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handlleToggle} >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/" >Anasayfa</Link>
            </li>
            <li>
              <Link to="/rooms" >Oda Seç</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;