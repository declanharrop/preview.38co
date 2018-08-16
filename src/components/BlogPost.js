import React from 'react';
import * as Markdown from 'react-markdown';


const BlogPost = ({ location: { state: { props } }}) => {
  return(  
    <div>
      <article className="pb5 ma5">
        <header className="tc-l ph3 ph4-ns pt4 pt5-ns">
          <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">{props.title}</h1>
          <time className="f5 f4-l db fw1 mb4">{props.date}</time>
          <img className="w-100 dib measure f3" src={props.icon} alt={props.imageAlt}/>
        </header>
        <div className="ph3 ph4-m ph5-l">
          <div className="measure db center f5 f4-ns lh-copy pt4">
            <Markdown className='blogText' source={props.content} />
            <div className='pt4'>
              <p>By: {props.author}</p>
            </div>
          </div>

        </div>
      </article>
    </div>
  )
}

export default BlogPost

