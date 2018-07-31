import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
			<div className='f6 fw6 ttu tracked'>
				<div className='link dim white dib mr3'>
					<NavLink to='/'>Home</NavLink>
				</div>
				<div className='link dim white dib mr3'>
					<NavLink to='/Services'>Services</NavLink>
				</div>
				<div className='link dim white dib mr3'>
					<NavLink to='/About'>About</NavLink>
				</div>
				<div className='link dim white dib mr3'>
					<NavLink to='/Blog'>Blog</NavLink>
				</div>
				<div className='link dim white dib mr3'>
					<NavLink to='/Contact'>Contact</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navigation;