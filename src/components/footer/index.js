import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className="page-footer" id="footertop">
      <div className="container">
        <div className="row">

            <div className="container center">
              <div className="row center">
                <div className="col s4 l2">
                  <a className="grey-text discogIcons" href="https://open.spotify.com/artist/3VUOrU0dA3ILMjNbVHdAEm"><i class="fab fa-spotify musicLinks"></i></a>
                </div>
                <div className="col s4 l2">
                  <a className="grey-text discogIcons" href="https://soundcloud.com/littlunmusic"><i class="fab fa-soundcloud musicLinks"></i></a>
                </div>
                <div className="col s4 l2">
                  <a className="grey-text discogIcons" href="https://music.apple.com/us/artist/littlun/1440493727"><i class="fab fa-apple musicLinks"></i></a>
                </div>
                <div className="col s4 l2">
                  <a className="grey-text discogIcons" href="https://www.youtube.com/watch?v=_A9Y2zpWtqI"><i class="fab fa-youtube musicLinks"></i></a>
                </div>
                <div className="col s4 l2">
                  <a className="grey-text discogIcons" href="https://www.amazon.com/House-of-Ghosts/dp/B07MG8XC23/ref=sr_1_1?keywords=Littlun&qid=1580449776&s=dmusic&search-type=ss&sr=1-1">
                    <i class="fab fa-amazon musicLinks"></i>
                  </a>
                </div>
                <div className="col s4 l2">
                  <a className="grey-text discogIcons" href="https://littlun.bandcamp.com/"><i class="fab fa-bandcamp musicLinks"></i></a>
                </div>
              </div>
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