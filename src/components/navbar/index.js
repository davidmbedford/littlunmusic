import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.sidenav');
          var instances = M.Sidenav.init(elems, {});
        });
      }
      
      render() {
        return (
          <>
            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">littlun</a>
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/gear'>Bio</Link></li>
                <li><Link to='/discography'>Discography</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
          </nav>
    
            <ul id="slide-out" className="sidenav">
              {/* <li><div class="user-view">
                <div class="background">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Big-eared-townsend-fledermaus.jpg" />
                </div>
                <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                <a href="#name"><span class="white-text name">John Doe</span></a>
                <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
              </div></li> */}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/gear'>Bio</Link></li>
                <li><Link to='/discography'>Discography</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </>
        )
      }
    }

export default Navbar;