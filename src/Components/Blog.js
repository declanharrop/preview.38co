import React, {Component} from 'react';
import 'tachyons';
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
		fetch('https://www.googleapis.com/blogger/v3/blogs/7005041958789257299/posts?key=AIzaSyB9d5ixXEQGeWLfOPw5YVJddR-64JbEIaM')
		.then(response => response.json())
		.then(posts => {this.setState({ blogPosts: posts.items})})
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