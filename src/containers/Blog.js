import React, { Component } from 'react';
import BlogCard from '../components/BlogCard';
import * as contentful from 'contentful';

export default class Blog extends Component {

  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'd25gh7a9uvmj',
    accessToken: 'af1c0955ce5aedde389a8ca1bef179cc7637aabf6f451b125125c2f6194f5b89' 
  })

  componentDidMount() {
    this.fetchPosts()
    .then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()
  

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {

    return (
      <div id='T'>
        <div style= {{height: '80px'}}></div>
        { this.state.posts.map(({fields}, i) =>
          <BlogCard key={i} {...fields} />
        )}
      </div>
    )
  }
}
