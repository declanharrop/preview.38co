import React, { Component } from 'react';
import BlogCard from '../components/BlogCard';
import * as contentful from 'contentful';
import { Helmet } from 'react-helmet';

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
    .then(this.setPosts)
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
        <Helmet>
          <title>Blog</title>
          <meta name='description' content='Blog'/>
        </Helmet>
        <header className="vh-50 dt w-100 pb4">
          <div 
            className="dtc v-mid cover ph3 ph4-m ph5-l largeImg1"
          >
            <h1 className="f2 fw8 f-subheadline-l greyFont">Blog</h1>
            <h2 className="f5 fw5">What we are talking about</h2>
          </div>
        </header>
        <div className='mw8 pa3 center'>
          { this.state.posts.map(({fields}, i) =>
            <BlogCard key={i} {...fields} />
          )}
        </div>
      </div>
    )
  }
}
