import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const BlogBannerCard = (props) => (

  <div className='fl w-100 w-50-ns tc ph2 pv0'>
    {console.log(props.title)}
    <div className='bg-white br2 shadow-1 pt1 pb2 mv2'>
      <h3 className='fw5 f4 pa0'>{props.title}</h3>
      <NavLink className="mv2" 
        to={{
          pathname: `/Blog${props.path}`,
          state: { props }
        }}
      >
        Read More
      </NavLink>
    </div>
  </div>
);

export default BlogBannerCard;
