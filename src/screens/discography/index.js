import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

function Discography() {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="container">
                        <div className="Jumbotron">
                            <h1>This is the Discography page</h1>
                        </div>
                        <div className="container center">
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=417987299/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                <a href="http://littlun.bandcamp.com/track/forest-circles">forest circles by littlun</a></iframe>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=1093888758/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                <a href="http://littlun.bandcamp.com/track/house-of-ghosts">House of Ghosts by littlun</a></iframe>
                            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3689248723/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                <a href="http://littlun.bandcamp.com/album/sentient-youth">Sentient Youth by littlun</a></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discography;