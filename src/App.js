import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" >
        <Header />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/header' component={Header} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
