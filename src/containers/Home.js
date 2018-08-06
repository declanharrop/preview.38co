import React from 'react';

import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='header'>
        <div className="vh-100 dt w-100 bg-blue">
          <div className="dtc v-mid tc white ph3 ph4-l">
            <h1 className="f4 f2-m f1-l fw6 tc">Welcome to ThirtyEight Co</h1>
            <div className='buttonRow center'>
              <div className='button center fl-ns br2'>
              </div>
              <div className='button center fr-ns br2'>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <h1>Home</h1>
      <p>Content...</p>
    </div>
  );
};

export default Home;