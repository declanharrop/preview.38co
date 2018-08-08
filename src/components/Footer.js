import React from 'react';
import { NavLink} from 'react-router-dom';

import './Footer.css'

const Footer = () => {
	return (
    <div>
      <div className='lightGreyBG pv4 ph3 footerBlock cf center'>

        <div className='fl pa2 mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Navigation</h2>
          <div className='mv2'>
            <NavLink to='/' className='no-underline'><p className='footerLink fw2 f5'>Home</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Services' className='no-underline'><p className='footerLink fw2 f5'>Services</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/OurWork' className='no-underline'><p className='footerLink fw2 f5'>Our Work</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/About' className='no-underline'><p className='footerLink fw2 f5'>About</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Blog' className='no-underline'><p className='footerLink fw2 f5'>Blog</p></NavLink>
          </div>
          <div className='mv2'>
            <NavLink to='/Contact' className='no-underline'><p className='footerLink fw2 f5'>Contact</p></NavLink>
          </div>
        </div>

        <div className='fl pa2 mh4 footerBlock'>
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

        <div className='fl pa2 mh4 footerBlock'>
          <h2 className='fw5 blueFont'>Contact</h2>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>info@38co.io</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>07446 976 265</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>England</p>
          </div>
          <div className='mv2'>
            <p className='footerLink fw2 f5'>UK</p>
          </div>
        </div>

      </div>

      <div className='lightGreyBG pb4 ph3 footerBlock cf'>
        <div className='fl pa2 mh4'>
          <p className='f6'>© ThirtyEight Co  </p>
        </div>
        <div className='fr'>
        </div>
      </div>



      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Services'>Services</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Blog'>Blog</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
    </div>
	);
};

export default Footer;