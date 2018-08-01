import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'tachyons';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Err from './Components/Err';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
