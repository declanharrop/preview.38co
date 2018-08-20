import React from 'react';
import FormSection from '../components/FormSection';

const Contact = () => {
  return (
    <div id='T'>
      <header className="vh-50 dt w-100 pb4">
        <div 
          style={{
            background: 'url(http://mrmrs.github.io/photos/display.jpg) no-repeat center right', 
            backgroundSize: 'cover'
          }} 
          className="dtc v-mid cover ph3 ph4-m ph5-l"
        >
          <h1 className="f2 fw8 f-subheadline-l greyFont">Get in touch</h1>
          <h2 className="f5 fw5">We cant wait to hear about your amazing ideas!</h2>
        </div>
      </header>

      <div className='mw8 pa3 center'>
        <FormSection />
      </div>
    </div>
  );
};

export default Contact;