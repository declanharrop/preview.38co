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
              id={blogPosts[i].userId}
              title={blogPosts[i].title}
              body={blogPosts[i]['content:encoded']}
              author={blogPosts[i].creator}
              date={blogPosts[i].pubDate}
            />
          );
        })
      }
    </div>
  )
}

export default BlogList;