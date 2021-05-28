import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Work from './pages/work';
import About from './pages/about';
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
