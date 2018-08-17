import React from 'react';
import * as Markdown from 'react-markdown';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const BlogCard = (props) => (
  <div>
    <article className="shadow-1 br2 mb4">
      <div className="db pv4 ph3 ph0-l no-underline black">
        <div className="flex flex-column flex-row-ns ph3">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={props.icon} className="db" alt={props.imageAlt} />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="mt0 mb2 fw4 lh-title">{props.title}</h1>
            <Markdown source={props.leading} className='leading mv2' />
            <p className="mv2">By: {props.author}</p>
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
      </div>
    </article>
  </div>
)

export default BlogCard;