import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogList from "./BlogList";

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
		fetch('https://jsonplaceholder.typicode.com/posts')
  		.then(response => response.json())
  		.then(posts => {this.setState({ blogPosts: posts})});
	}

	render() {
		const { blogPosts } = this.state;
	  return (
	    <div>
				<section className="mw7 center avenir">
 				 <h2 className="baskerville fw1 ph3 ph0-l">Blog</h2>
	      	<BlogList blogPosts={ blogPosts }/>
				</section>
	    </div>
	  );
	 };
};

export default Blog;