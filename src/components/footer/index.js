import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="page-footer" id="footertop">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Littlun Music</h5>
          </div>
        </div>
      </div>
      <div className="footer-copyright" id="footerbottom">
        <div className="container">
          this site designed by <span><a id="dmb" href="https://davidmbedford.github.io">davidmbedford</a></span>
          <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/littlunmusic/?hl=en"><i className="fab fa-instagram fa-lg socialLinks"></i></a>
          <a className="grey-text text-lighten-4 right" href="https://twitter.com/littlunmusic"><i className="fab fa-twitter fa-lg socialLinks"></i></a>
          <a className="grey-text text-lighten-4 right" href="https://www.facebook.com/littlunmusic/"><i className="fab fa-facebook fa-lg socialLinks"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;