import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

function Contact() {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="container">
                        <div className="Jumbotron">
                            <h1>This is the Contact page</h1>
                        </div>
                        <div>
                            <p>Email: littlunmusic@gmail.com</p>
                            <p>Phone: 454-454-4554</p>
                            <p>Other misc social media</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;