import React from 'react';
import Helmet from 'react-helmet';

const OurWork = () => {
  return (
    <div id='T'>
      <Helmet>
        <title>Our Work</title>
        <meta name='description' content='Our Work'/>
      </Helmet>
      <header className="vh-50 dt w-100 pb4">
        <div
          className="dtc v-mid cover ph3 ph4-m ph5-l largeImg1"
        >
          <h1 className="f2 fw8 f-subheadline-l greyFont">Our Work</h1>
          <h2 className="f5 fw5">See some of our projects</h2>
        </div>
      </header>

      <div className='mw8 pa3 center'>
        
      </div>
    </div>
  );
};

export default OurWork;