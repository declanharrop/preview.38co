import React from 'react';
import FormSection from '../components/FormSection';
import Helmet from 'react-helmet';

import CallIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import SocialMediaIcon from '@material-ui/icons/Public/';

const Contact = () => {
  return (
    <div id='T'>
      <Helmet>
        <title>Contact Us</title>
        <meta name='description' content='Contact Us'/>
      </Helmet>
      <header className="vh-50 dt w-100 pb4">
        <div
          className="dtc v-mid cover ph3 ph4-m ph5-l largeImg1"
        >
          <h1 className="f2 fw8 f-subheadline-l greyFont">Get in touch</h1>
          <h2 className="f5 fw5">We cant wait to hear about your amazing ideas!</h2>
        </div>
      </header>
      
      <div className='mw7 center tc ph2 pv3'>
        <p>
          If you would like to make an initial enquiry or arrange a meeting to discuss any of our services, 
          please contact us by clicking on the icon in the bottom corner. Alternatively please call, email or 
          direct message us on Social Media. We can't wait to hear from you. 
        </p>
      </div>

      <div className='mw8 mh2 center ph2'>
        <div className='tc pv5'>

          <div className='dib tc w5 pa2'>
            <div className='br2 bg-white shadow-1 pa3 WebDevBG'>
              <CallIcon 
                className='pa0 mv4' 
                style={{
                  fontSize: 100,
                  color: 'white',
                }}
              />
              <h3 className='white pa0 mt0 mb2'>Email</h3>
              <p className='white pa0 mt0 mb3'>07446 976 265</p>
            </div>
          </div>
          
          <div className='dib tc w5 pa2'>
            <div className='br2 bg-white shadow-1 pa3 WebDevBG'>
              <EmailIcon
                className='pa0 mv4'
                style={{
                  fontSize: 100,
                  color: 'white',
                }}
              />
              <h3 className='white pa0 mt0 mb2'>Email</h3>
              <p className='white pa0 mt0 mb3'>info@38co.io</p>
            </div>
          </div>

          <div className='dib tc w5 pa2'>
            <div className='br2 bg-white shadow-1 pa3 WebDevBG'>
              <SocialMediaIcon
                className='pa0 mv4' 
                style={{
                  fontSize: 100,
                  color: 'white',
                }}
              />
              <h3 className='white pa0 mt0 mb2'>social media</h3>
              <p className='white pa0 mt0 mb3'>Direct message us</p>
            </div>
          </div>

        </div>
        
        
        <div className=''>
          <FormSection />
        </div>
        

      </div>
    </div>
  );
};

export default Contact;