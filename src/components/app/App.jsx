import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import Projects from '../Projects/Projects';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contact" component={Contact}/>
          <Footer />
        </Router>
      </>
    );
  }
}
