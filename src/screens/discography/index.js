import React from 'react';
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
                                <p><span className="strong">Album Name:</span> Fallow (single) || <span className="strong">Release Date:</span> Mar. 2019 </p>
                                <iframe src="https://bandcamp.com/EmbeddedPlayer/track=417987299/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                    <a href="http://littlun.bandcamp.com/track/forest-circles">forest circles by littlun</a>
                                </iframe>
                            </div>
                            <div className="row">
                                <p><span className="strong">Album Name:</span> House of Ghosts || <span className="strong">Release Date:</span> Jan. 2019 </p>
                                <iframe src="https://bandcamp.com/EmbeddedPlayer/track=1093888758/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                    <a href="http://littlun.bandcamp.com/track/house-of-ghosts">House of Ghosts by littlun</a>
                                </iframe>
                            </div>    
                            <div className="row">
                                <p><span className="strong">Album Name:</span> Sentient Youth || <span className="strong">Release Date:</span> Oct. 2018 </p>
                                <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3689248723/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                                    <a href="http://littlun.bandcamp.com/album/sentient-youth">Sentient Youth by littlun</a>
                                </iframe>
                            </div>
                        </div>
                        <div className="container center">
                            <a href="https://open.spotify.com/artist/3VUOrU0dA3ILMjNbVHdAEm"><i class="fab fa-spotify"></i></a>
                            <a href="https://soundcloud.com/littlunmusic"><i class="fab fa-soundcloud"></i></a>
                            <a href="https://music.apple.com/us/artist/littlun/1440493727"><i class="fab fa-apple"></i></a>
                            <a href="https://www.youtube.com/watch?v=_A9Y2zpWtqI"><i class="fab fa-youtube"></i></a>
                            <a href="https://www.amazon.com/House-of-Ghosts/dp/B07MG8XC23/ref=sr_1_1?keywords=Littlun&qid=1580449776&s=dmusic&search-type=ss&sr=1-1">
                                <i class="fab fa-amazon"></i></a>
                            <a href="https://littlun.bandcamp.com/"><i class="fab fa-bandcamp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discography;