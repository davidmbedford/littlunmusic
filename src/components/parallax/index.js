import React, { Component } from 'react';
import grave from '../../assets/images/graveyard.jpg';
import './style.css';
import Navbar from '../navbar/index.js';

class Parallax extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      const M = window.M;
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    });
  }

  render() {
    return (
      <>
        <div className="parallax-container paraMain">
          <Navbar />
          <div className="parallax">
            <img className="headImage" src={grave}></img>
          </div>

          <div className="container" id="titleStyle">
            <h1 id="title">littlun</h1>
          </div>
        </div>

      </>
    )
  }
};

export default Parallax;