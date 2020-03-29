import React, { Component } from 'react';
import grave from '../../assets/images/graveyard.jpg';
import './style.css';
import Navbar from '../navbar/index.js'; 

class Parallax extends Component {
    componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
        const M = window.M;
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
      });
    }
    
    render() {
        return (
          <>
            <div className="parallax-container paraMain">
              <Navbar/>
              <div className="container">
                <div className="row">
                  <div className="col s12 titleStyle">
                    <h1>littlun</h1>
                  </div>
                </div>
              </div>

              <div className="parallax">
                <img className="headImage" src={grave}></img>
              </div>
            </div>
          </>
        )
        }
    };

export default Parallax;