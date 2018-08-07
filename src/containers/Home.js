import React from 'react';
import { NavLink} from 'react-router-dom';

import './Home.css'

const Home = () => {
  return (
    <div className='avenir'>
      <div className='header'>
        <div className="vh-100 dt w-100 bg-blue">
          <div className="dtc v-mid tc white ph3 ph4-l">
            <h1 className="f3 f2-m f1-l fw6 tc">Welcome to ThirtyEight Co</h1>
            <div className='buttonRow center mt3'>
              <NavLink to='/OurWork' style={{'text-decoration': 'none'}}>
                <div className='button center fl-ns br2 dt shadow-4 grow'>
                  <h3 className='center dtc v-mid'>Our Work</h3>
                </div>
              </NavLink>
              <NavLink to='/Services' style={{'text-decoration': 'none'}}>
                <div className='button center fr-ns br2 dt shadow-4 grow'>
                  <h3 className='center dtc v-mid'>Services</h3>
                </div>
              </NavLink>
            </div>
          </div>
        </div> 
      </div>

      <div className='mw8 center pv3'>
        <div className='cf pa2'>
          <div className='fl w-100 pa2 tc'>
            <div> 
              <h2 className=''>Hey</h2>
            </div>
            <div>
              <p className=''>
                We lovingly create Web Development, UXUI Design and Branding projects. 
                We are based in Derbyshire, England. You can check out all of our latest work via Instagram. 
                Alternatively if you want to find out what we are thinking, why don't you take a look at our blog.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mw8 center">
        <div className="cf pa2">
          <div className="fl w-100 w-50-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
          <div className="fl w-100 w-50-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
        </div>
      </div>


      <h1>Home</h1>
      <p>Content...</p>
    </div>
  );
};

export default Home;