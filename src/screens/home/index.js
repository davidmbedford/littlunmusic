import React from 'react';
import piano from '../../assets/images/Piano.svg';
import headshot from '../../assets/images/headshot.jpg';
import './style.css';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={piano} className="headshot" alt="logo" /> */}
        <div className="container bio">
          <img src={headshot} className="headshot" alt="logo" />
          <p> This is the home of littlun, a band of loving young multi-instrumentalists led by singer/songwriter Molly Lynn White.</p>
          <p> Welcome. Here you can stream their music, find upcoming shows, and reach out to them for booking requests. </p>
          <p> Molly has been writing under the name littlun for a few years now. Their music features
          classically influenced melodies and dark folk motifs. A full band formed around them in 2019
          to fill out the new songs. You can catch littlun play at local venues in Philly such as
                        World Cafe Live, and stream them on apps such as Spotify.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;