import './MenuBar.css';

const MenuBar = props => {
	return (
		<div className="col-md-3">

			<div className="boxFrame">
				<a href={props.location}>
					<h2>{props.name}</h2>
				</a>
				<h4>{props.description}</h4>
			</div>
		</div>
	);
}

export default MenuBar;
