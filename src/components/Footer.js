import React from 'react';
import { NavLink} from 'react-router-dom';

const Footer = () => {
	return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Services'>Services</NavLink>
      <NavLink to='/About'>About</NavLink>
      <NavLink to='/Blog'>Blog</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
    </div>
	);
};

export default Footer;