import React, { Component } from 'react';
import Home from '../Home/Home';
import Header from '../Home/Header';


export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}
