import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from '../Header';
import Dashboard from '../Dashboard';
import Reviews from '../Reviews';
import Settings from '../Settings';
import HotelManager from '../HotelManager';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-bg"/>
          <div className="container">
            <Header/>
            <section className="content">
              <Route path="/" exact component={Dashboard} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/hotel-manager" component={HotelManager} />
              <Route path="/settings" component={Settings} />
            </section>
          </div>
          <footer>© 1999 - 2016 HolidayCheck AG</footer>
        </div>
      </Router>
    );
  }
}

export default App;
