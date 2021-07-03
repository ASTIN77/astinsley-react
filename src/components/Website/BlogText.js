import Card from '../UI/Card';
import './BlogText.css';

const BlogText = () => {
	return (

		<Card>
			<div className="col-md-3" />
			<div id="blog2" className="col-md-6">
				<p>I'm an all-round Web Developer who comes from a Technical Support
					and Data Analysis background.</p>
				<p>Below are just some of my web applications, hosted for demonstration purposes on the Heroku
					platform.</p>
			</div>
			<div className="col-md-3" />
		</Card>
	);
};

export default BlogText;
