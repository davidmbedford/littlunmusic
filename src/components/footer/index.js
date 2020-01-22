import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="page-footer" id="footertop">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Liitlun Music</h5>
            <p className="grey-text text-lighten-4">You probably dont want this zone, but I made the footer large as a demo in case it sparked ideas</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright" id="footerbottom">
        <div className="container">
          this site designed by <span><a href="https://davidmbedford.github.io">davidmbedford</a></span>
          <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/littlunmusic/?hl=en"><i className="fab fa-instagram fa-lg"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;