import { Component } from 'react';
import './MenuBar.css';

class MenuBar extends Component {
	constructor(props) {
		super(props);
		props = this.props;
	}
	render() {
		return (
			<div className="col-md-3">
				<div className="boxFrame">
					<a href={this.props.location}>
						<h2>{this.props.name}</h2>
					</a>
					<h4>{this.props.description}</h4>
				</div>
			</div>
		);
	}
}
export default MenuBar;
