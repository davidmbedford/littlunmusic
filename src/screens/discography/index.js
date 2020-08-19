import React from 'react';
import './style.css';

function Discography() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="container">
            <h1>Discography</h1>
            <div className="container center discogbox">

              <div className="row center">
                <p><span className="strong">Album Name:</span> Pandemic Dream Journal || <span className="strong">Release Date:</span> Jun. 2020 </p>
                <iframe src="https://bandcamp.com/EmbeddedPlayer/album=1425014592/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                  <a href="http://littlun.bandcamp.com/album/pandemic-dream-journal">pandemic dream journal by littlun</a>
                </iframe>
              </div>

              <div className="row center">
                <p><span className="strong">Album Name:</span> Fallow (single) || <span className="strong">Release Date:</span> Mar. 2019 </p>
                <iframe src="https://bandcamp.com/EmbeddedPlayer/track=417987299/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                  <a href="http://littlun.bandcamp.com/track/forest-circles">forest circles by littlun</a>
                </iframe>
              </div>

              <div className="row center">
                <p><span className="strong">Album Name:</span> House of Ghosts || <span className="strong">Release Date:</span> Jan. 2019 </p>
                <iframe src="https://bandcamp.com/EmbeddedPlayer/track=1093888758/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                  <a href="http://littlun.bandcamp.com/track/house-of-ghosts">House of Ghosts by littlun</a>
                </iframe>
              </div>

              <div className="row center">
                <p><span className="strong">Album Name:</span> Sentient Youth || <span className="strong">Release Date:</span> Oct. 2018 </p>
                <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3689248723/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless>
                  <a href="http://littlun.bandcamp.com/album/sentient-youth">Sentient Youth by littlun</a>
                </iframe>
              </div>

            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discography;