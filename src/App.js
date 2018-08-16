import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import 'tachyons'
import ScrollToTop from './components/ScrollToTop';


import Home from './containers/Home';
import Services from './containers/Services';
import OurWork from './containers/OurWork';
import About from './containers/About';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Err from './containers/Err';
import BlogPost from './components/BlogPost';

import Navigation from './components/Navigation';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <div className='siteFont'>
              <Navigation />
              <Switch>
                <Route path="/" exact render={props => <Home {...props} />}/>
                <Route path="/Services" component={Services}/>
                <Route path="/OurWork" component={OurWork} />
                <Route path="/About" component={About}/>
                <Route exact path="/Blog" component={Blog} />
                <Route path="/Blog/:blogPost" component={BlogPost}/>
                <Route path="/Contact" component={Contact}/>
                <Route component={Err} />
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
