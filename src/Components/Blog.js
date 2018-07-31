import React, {Component} from 'react';
import 'tachyons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Blog extends Component {

	constructor() {
    super();
    this.state = {
			blogClicked: false 
    }
  }

  onArticleClick = () => {
		this.setState({blogClicked: true});
	}

	render() {
	  return (
	    <div>
	      <section className="mw7 center avenir">
				  <h2 className="avenier f1 fw5 ph3 ph0-l">Blog</h2>
				  <article className="bt bb b--black-10"  onClick={this.onArticleClick}>
				    <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
				      <div className="flex flex-column flex-row-ns">
				        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
				          <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="dimly lit room with a computer interface terminal."/>
				        </div>
				        <div className="w-100 w-60-ns pl3-ns">
				          <h1 className="f3 fw1 avenir mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
				          <p className="f6 f5-l lh-copy">
				            The tech giant says it is ready to begin planning a quantum
				            computer, a powerful cpu machine that relies on subatomic particles instead
				            of transistors.
				          </p>
				          <p className="f6 lh-copy mv0">By Robin Darnell</p>
				        </div>
				      </div>
				    </a>
				  </article>
				</section>
	    </div>
	  );
	 };
};

export default Blog;