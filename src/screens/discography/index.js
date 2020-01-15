import React, {Component} from 'react';
import './style.css';

class Discography extends Component {
    render () {
        return (
            <>
            <div className="Jumbotron">
            <h1>This is the Discography page</h1>
            </div>
            <div>
            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=417987299/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                <a href="http://littlun.bandcamp.com/track/forest-circles">forest circles by littlun</a></iframe>
            <iframe src="https://bandcamp.com/EmbeddedPlayer/track=1093888758/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                <a href="http://littlun.bandcamp.com/track/house-of-ghosts">House of Ghosts by littlun</a></iframe>
            <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3689248723/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                <a href="http://littlun.bandcamp.com/album/sentient-youth">Sentient Youth by littlun</a></iframe>
            </div>
            </>
        )
    }
}

export default Discography;