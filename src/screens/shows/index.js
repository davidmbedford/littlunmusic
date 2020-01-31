import React from 'react';
import './style.css';

function Shows() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
          <h1>Upcoming Shows</h1>
            <br/>
            <div className="container">
              <h3>February 15, 2019</h3>
              <h5><a href="https://www.facebook.com/events/2705375342839601/">World Cafe Live (Philadelphia, PA)</a></h5>
              <p>w/ Tubey Frank and Lylyly</p>
              <p>9 pm || $10 </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shows;