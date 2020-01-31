import React from 'react';
import piano from '../../assets/images/Piano.svg';
import './style.css';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={piano} className="headshot" alt="logo" />
        <div className="container">
          <p> This is the home of littlun, a band of loving young multi-instrumentalists led by singer/songwriter Molly Lynn White.</p>
          <p> Welcome. Here you can stream their music, find upcoming shows, and reach out to them for booking requests. </p>
        </div>
      </div>
    </div>
  );
};

export default Home;