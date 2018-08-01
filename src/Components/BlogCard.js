import React from 'react';

const BlogCard = ({ id, title, body, author, date}) => {
  return (
    <article className="bt bb b--black-10"  onClick={this.onArticleClick}>
      <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 pl3-ns">
            <h1 className="f3 fw1 avenir mt0 lh-title">{title}</h1>
            <div className="f6 f5-l lh-copy" dangerouslySetInnerHTML={{ __html: body }} />
            <p className="f6 lh-copy mv0">Author: {author}</p>
            <p className="f6 lh-copy mv0">Date: {date}</p>
          </div>
        </div>
      </a>
    </article>
  )
}

export default BlogCard; 