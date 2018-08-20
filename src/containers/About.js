import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About Us</title>
          <meta name='description' content='About 38co'/>        
        </Helmet>
        <header className="vh-50 dt w-100 pb4">
          <div 
            style={{
              background: 'url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right', 
              backgroundSize: 'cover'
            }} 
            className="dtc v-mid cover ph3 ph4-m ph5-l"
          >
            <h1 className="f2 fw8 f-subheadline-l greyFont">About</h1>
            <h2 className="f5 fw5">Find out more about us</h2>
          </div>
        </header>

        <div className='mw8 pa3 center'>
          <div className='mb5'>
            <h2 className='fw5 f2'>Our Mission</h2>
            <p className=''>
              Our Mission is very simple; communicate with our clients well, reflect the client's desires 
              and create great looking designs. We have always been passionate about supplying our clients 
              with exactly what was envisioned when contacting us. We also pride ourselves on our personal 
              service; we won't be distant. Should you have a problem we will be with you as soon as possible, 
              in person or over the phone, depending on your personal preference. We offer the same amount of 
              expertise as the greatest in the business, however contributing something they don’t: personal 
              touch. It is our aim to make you feel like you know us, rather than appearing as just a person 
              down a phone or a web browser, as well as  thriving on displaying individual qualities tailored 
              to each diverse project.
            </p>
          </div>
          <div className='mb5'>
            <h2 className='fw5 f2'>ThirtyEight Co.</h2>
            <p className=''>
              Founded in 2014, ThirtyEight Co. simply began as a Graphic Design Company who designed local 
              magazines in Derbyshire, England. We have since then progressed into a successful business with 
              a substantial loyal client-base, offering a wide variety of services.
            </p>
          </div>
        </div>
      </div>
    )
  }
}