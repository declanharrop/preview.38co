import React from 'react';
import * as Markdown from 'react-markdown';


const BlogPost = ({ location: { state: { props } }}) => {
  return(  
    <div id='T'>
      <article className="pb5 mt4 mb3 mh3">
        <header className="tc ph3 ph4-ns pt5">
          <h1 className="f3 f2-m f1-l fw3 mt0">{props.title}</h1>
        </header>
        <div className="ph2">
          <div className="measure db center f5 f4-ns lh-copy">
            <img className="w-100 mb4" src={props.icon} alt={props.imageAlt}/>
            <Markdown className='blogText' source={props.content} />
            <div className='pt4'>
              <p>By: {props.author}</p>
              <time className="f5 f4-l db fw1 mt2">{props.date}</time>
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}

export default BlogPost

