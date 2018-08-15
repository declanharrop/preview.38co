import React from 'react';
import * as Markdown from 'react-markdown';


const BlogPost = ({ location: { state: { props } }}) => {
  return(  
    <div>
      <div className='ma6'></div>
      <h1>{props.title}</h1>
      <Markdown source={props.content} />  
      
    </div>
  )
}

export default BlogPost

