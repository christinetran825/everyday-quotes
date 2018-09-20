import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuotesPage from './components/QuotesPage'
import Footer from './components/Footer'
import './App.css';

class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <header></header>
        <Switch>
          <Route exact path="/" component={QuotesPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
