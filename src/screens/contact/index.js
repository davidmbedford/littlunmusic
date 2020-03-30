import React from 'react';
import piano from '../../assets/images/Piano.svg';
import './style.css';

function Contact() {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <div className="container">
                        <h1>Contact</h1>
                        <br/>
                        <div className="row">
                          <div className="col s6">
                            <p><span className="strong">Email:</span> littlunmusic@gmail.com</p>
                            <p><span className="strong">Phone:</span> 856-430-7931</p>
                            <p><span className="strong">Misc social media:</span>
                                <a className="black-text text-lighten-4" href="https://www.facebook.com/littlunmusic/"><i className="fab fa-facebook fa-lg socialLinks"></i></a>
                                <a className="black-text text-lighten-4" href="https://twitter.com/littlunmusic"><i className="fab fa-twitter fa-lg socialLinks"></i></a>
                                <a className="black-text text-lighten-4" href="https://www.instagram.com/littlunmusic/?hl=en"><i className="fab fa-instagram fa-lg socialLinks"></i></a>
                            </p>
                          </div>
                          <div className="col s6">
                            <img src={piano} className="headshot" alt="logo" /> 
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;