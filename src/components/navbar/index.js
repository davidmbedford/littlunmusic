import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  
  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
          <div className="brand-logo hide-on-med-and-down"><i className="fas fa-compact-disc"></i></div>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons" id="menuicon">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/discography'>Discography</Link></li>
                <li><Link to='/shows'>Upcoming Shows</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discography'>Discography</Link></li>
          <li><Link to='/shows'>Upcoming Shows</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </>
    )
  };
}

export default Navbar;