import React, {Component} from 'react';
import 'tachyons';
import BlogList from "./BlogList";

const Parser = require('rss-parser');
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

class Blog extends Component {

	constructor() {
    super();
    this.state = {
			blogClicked: false,
			blogPosts: []
    }
	}

  onArticleClick = () => {
		this.setState({blogClicked: true});
	}

	componentDidMount() {
		parser.parseURL(CORS_PROXY + 'https://www.medium.com/feed/@38co')
		.then(feed => {this.setState({ blogPosts: feed.items})})
	}

	render() {
		
		const { blogPosts } = this.state;
	  return (
	    <div>
				<section className="mw7 center avenir">
 				 <h2 className="avenir f1 fw3 ph3 ph0-l">Blog</h2>
	      	<BlogList blogPosts={ blogPosts }/>
				</section>
	    </div>
	  );
	 };
};

export default Blog;