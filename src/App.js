import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/index.js';
import Parallax from './components/parallax/index.js';
import Footer from './components/footer/index.js';
import Home from './screens/home/index.js';
import Shows from './screens/shows/index.js'
import Discography from './screens/discography/index.js';
import Contact from './screens/contact/index.js';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Parallax />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/discography' component={Discography} />
          <Route exact path='/shows' component={Shows} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;
