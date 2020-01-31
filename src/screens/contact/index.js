import React from 'react';
import './style.css';

function Contact() {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <div className="container">
                        <h1>Contact</h1>
                        <br/>
                        <div>
                            <p><span className="strong">Email:</span> littlunmusic@gmail.com</p>
                            <p><span className="strong">Phone:</span> 454-454-4554</p>
                            <p><span className="strong">Misc social media:</span>
                                <a className="black-text text-lighten-4" href="https://www.facebook.com/littlunmusic/"><i className="fab fa-facebook fa-lg"></i></a>
                                <a className="black-text text-lighten-4" href="https://twitter.com/littlunmusic"><i className="fab fa-twitter fa-lg"></i></a>
                                <a className="black-text text-lighten-4" href="https://www.instagram.com/littlunmusic/?hl=en"><i className="fab fa-instagram fa-lg"></i></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;