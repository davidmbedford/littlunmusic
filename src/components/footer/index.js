import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="page-footer" id="footertop">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Littlun Music</h5>
            <p className="grey-text text-lighten-4">You probably dont want this zone, but I made the footer large as a demo in case it sparked ideas</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright" id="footerbottom">
        <div className="container">
          this site designed by <span><a href="https://davidmbedford.github.io">davidmbedford</a></span>
          <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/littlunmusic/?hl=en"><i className="fab fa-instagram fa-lg"></i></a>
          <a className="grey-text text-lighten-4 right" href="https://twitter.com/littlunmusic"><i className="fab fa-twitter fa-lg"></i></a>
          <a className="grey-text text-lighten-4 right" href="https://www.facebook.com/littlunmusic/"><i className="fab fa-facebook fa-lg"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;