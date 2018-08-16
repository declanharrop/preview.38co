import React, { Component } from 'react'
import * as contentful from 'contentful';

import BlogBannerCard from './BlogBannerCard';

export default class BlogBanner extends Component {

  state = {
    posts: [],
    slicedPosts: []
  }

  client = contentful.createClient({
    space: 'd25gh7a9uvmj',
    accessToken: 'af1c0955ce5aedde389a8ca1bef179cc7637aabf6f451b125125c2f6194f5b89' 
  })

  componentDidMount() {
    this.fetchPosts()
    .then(this.setPosts)
    .then(this.slicePosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  slicePosts = () => {
    this.setState({
      slicedPosts: this.state.posts.slice(0, 2)
    })
  }

  render() {
    return (
      <div className='pb3'>
        <div className='mw8 pv1 ph1 cf center'>
          { this.state.slicedPosts.map(({fields}, i) =>
            <BlogBannerCard key={i} {...fields} />
          )}
      </div>
    </div>
    )
  }
}
