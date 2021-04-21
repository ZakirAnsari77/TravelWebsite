import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Homes'
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Services from './pages/Services';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path= '/Services' component = {Services} />
          <Route path= '/Products' component = {Products} />
          <Route path= '/SignUp' component = {SignUp} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
