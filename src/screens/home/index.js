import React from 'react';
import piano from '../../assets/images/Piano.svg';
import './style.css';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={piano} className="headshot" alt="logo" />
        <div className="container">
          <p> This is the home of littlun, a band of loving youth led by Molly Lynn White. Welcome.</p>
          <p> They're from Philadelphia and formed under Molly's songwriting efforts in 2018. Listen to their music and catch them playing live near you real soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;