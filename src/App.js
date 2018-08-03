import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'tachyons'

import Home from './containers/Home';
import Services from './containers/Services';
import About from './containers/About';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Err from './containers/Err';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Services" component={Services}/>
              <Route path="/About" component={About}/>
              <Route path="/Blog" component={Blog}/>
              <Route path="/Contact" component={Contact}/>
              <Route component={Err} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
