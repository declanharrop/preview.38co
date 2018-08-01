import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ blogPosts }) => {
  return (
    <div>
      {
        blogPosts.map((post, i) => {
          return (
            <BlogCard 
              key={i}
              id={blogPosts[i].id}
              title={blogPosts[i].title}
              body={blogPosts[i].content}
              author={blogPosts[i].author.displayName}
              date={blogPosts[i].published}
            />
          );
        })
      }
    </div>
  )
}

export default BlogList;