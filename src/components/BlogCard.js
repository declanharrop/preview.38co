import React from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

const BlogCard = (props) => (
  <div>
    <article className="pv4 bt bb b--black-10 ph3 ph0-l">
      <div className="flex flex-column flex-row-ns">
        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 className="f3 athelas mt0 lh-title">{props.title}</h1>
          <Markdown source={props.content} />
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
          <img src={props.icon} className="db" alt=" f a dimly lit room with a computer interface terminal." />
        </div>
      </div>
      <Markdown><p className="f6 lh-copy gray mv0">By <span className="ttu">Robin Darnell</span></p></Markdown>
      <time className="f6 db gray">{props.date}</time>
      <Link className="" 
        to={{
          pathname: `/blog/${props.path}`,
          state: { props }
        }}
      >
      Read More
      </Link>
    </article>
  </div>
)

export default BlogCard;