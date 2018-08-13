import React from 'react';
// import { NavLink} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Footer.css'

const Footer = () => {

	return (
    <div>
      <div className='tecLightGrey pt5 pb4 ph3 footerBlock cf center'>

        <div className='fl mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Navigation</h2>
          <div className='mv2'>
            <NavLink to='/#T' className='no-underline'><p className='footerLink fw2 f5'>Home</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Services#T' className='no-underline'><p className='footerLink fw2 f5'>Services</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/OurWork#T' className='no-underline'><p className='footerLink fw2 f5'>Our Work</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/About#T' className='no-underline'><p className='footerLink fw2 f5'>About</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Blog#T' className='no-underline'><p className='footerLink fw2 f5'>Blog</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Contact#T' className='no-underline'><p className='footerLink fw2 f5'>Contact</p></NavLink>
          </div>
        </div>

        <div className='fl mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Location</h2>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>Derby</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>Derbyshire</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>England</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>UK</p>
          </div>
        </div>

        <div className='fl mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Contact</h2>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>info@38co.io</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>07446 976 265</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>Instagram</p>
          </div>
        </div>

      </div>

      <div className='tecLightGrey ph3 ph2 pb3'>
        <div className='inline-flex ph3'>
          <div className='instagramIcon mh3'></div>
          <div className='callIcon mh3'></div>
          <div className='twitterIcon mh3'></div>
          <div className='facebookIcon mh3'></div>
        </div>
      </div>
        
      <div className='tecLightGrey pb4 pt3 ph3 footerBlock cf'>
        <div className='fl mh4'>
          <p className='f6 fw2 footerLink'>© ThirtyEight Co {(new Date().getFullYear())}</p>
        </div>
      </div>
    </div>
	);
};

export default Footer;