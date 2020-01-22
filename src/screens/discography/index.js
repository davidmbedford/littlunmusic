import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

function Discography() {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <div className="container">
                        <h1>Discography</h1>
                        <div className="container center">
                            <div className="row">
                                <p>Album Name: Fallow (single) || Release Date: Mar. 2019 </p>
                                <iframe src="https://bandcamp.com/EmbeddedPlayer/track=417987299/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                    <a href="http://littlun.bandcamp.com/track/forest-circles">forest circles by littlun</a>
                                </iframe>
                            </div>
                            <div className="row">
                                <p>Album Name: House of Ghosts || Release Date: Jan. 2019 </p>
                                <iframe src="https://bandcamp.com/EmbeddedPlayer/track=1093888758/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                    <a href="http://littlun.bandcamp.com/track/house-of-ghosts">House of Ghosts by littlun</a>
                                </iframe>
                            </div>    
                            <div className="row">
                                <p>Album Name: Sentient Youth || Release Date: Oct. 2018 </p>
                                <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3689248723/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                    <a href="http://littlun.bandcamp.com/album/sentient-youth">Sentient Youth by littlun</a>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discography;