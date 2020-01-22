import React, { Component } from 'react';
import grave from '../../assets/images/graveyard.jpg';
import './style.css';

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
            {/* <div className="container-fluid parallax">
               <img className="headImage" src={grave}></img>
            </div> */}

            <div className="parallax-container">
                <div className="parallax">
                    <img className="headImage" src={grave}></img>
                </div>
            </div>
          </>
        )
        }
    };

export default Parallax;