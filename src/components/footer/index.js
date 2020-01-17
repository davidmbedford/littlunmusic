import React, {Component} from 'react';
import './style.css';

class Footer extends Component {
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
              <a href="" className="brand-logo">littlun</a>
              <a href="" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              </ul>
            </div>
          </nav>
    
            <ul id="slide-out" className="sidenav">

            </ul>
          </>
        )
      }
    }

export default Footer;