import React from 'react';
// import { NavLink} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Footer.css'

const Footer = () => {

	return (
    <div className=''>
      <div className='pv4 ph3 footerBlock cf center footer'>

        <div className='fl mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Navigation</h2>
          <div className='mv2'>
            <NavLink to='/' className='no-underline'><p className='footerLink fw4 f5'>Home</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Services' className='no-underline'><p className='footerLink fw4 f5'>Services</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/OurWork' className='no-underline'><p className='footerLink fw4 f5'>Our Work</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/About' className='no-underline'><p className='footerLink fw4 f5'>About</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Blog' className='no-underline'><p className='footerLink fw4 f5'>Blog</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Contact' className='no-underline'><p className='footerLink fw4 f5'>Contact</p></NavLink>
          </div>
        </div>

        <div className='fl mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Location</h2>
          <div className='mv2'>
            <p className='footerNonLink fw4 f5'>Derby</p>
          </div>
          <div className='mv2'>
            <p className='footerNonLink fw4 f5'>Derbyshire</p>
          </div>
          <div className='mv2'>
            <p className='footerNonLink fw4 f5'>England</p>
          </div>
          <div className='mv2'>
            <p className='footerNonLink fw4 f5'>UK</p>
          </div>
        </div>

        <div className='fl mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Contact</h2>
          <div className='mv2'>
            <p className='footerLink fw4 f5'>info@38co.io</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw4 f5'>07446 976 265</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw4 f5'>Instagram</p>
          </div>
        </div>

      </div>

      <div className='ph3 pv3'>
        <div className='inline-flex ph3'>
          <div className='instagramIcon mh3'></div>
          <div className='callIcon mh3'></div>
          <div className='twitterIcon mh3'></div>
          <div className='facebookIcon mh3'></div>
        </div>
      </div>
        
      <div className='pv4 ph3 footerBlock cf'>
        <div className='fl mh4'>
          <p className='f6 fw4 footerNonLink'>© ThirtyEight Co {(new Date().getFullYear())}</p>
        </div>
      </div>
    </div>
	);
};

export default Footer;