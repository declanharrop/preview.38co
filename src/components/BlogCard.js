import React from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

const BlogCard = (props) => (
  <div>
    <article className="bt bb b--black-10">
      <div className="db pv4 ph3 ph0-l no-underline black">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img src={props.icon} className="db" alt={props.imageAlt} />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="mt0 mb2 fw4 lh-title">{props.title}</h1>
            <Markdown source={props.leading} className='leading mv2' />
            <p className="mv2">By: {props.author}</p>
            <Link className="mv2" 
              to={{
                pathname: `/Blog${props.path}`,
                state: { props }
              }}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  </div>
)

export default BlogCard;