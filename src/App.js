import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Route path="/" exact component={Work} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
