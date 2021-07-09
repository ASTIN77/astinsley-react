
import { Link } from 'react-router-dom';
import './Nav.css';
import ContactForm from '../Website/ContactForm';


const Nav = (props) => {



	const onContactHandler = (event) => {
		ContactForm(event.target.value);
	}
	return (
		<div className="container">
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="navbar-header">
					{/* Collapsed navigation bar for small device viewports only */}
					<button
						type="button"
						className="navbar-right navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#mobileNav"
					>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<span className="navbar-brand">ASTINSLEY.NET</span>
				</div>

				{/* Right hand navigation bar */}

				<div className="collapse navbar-collapse myNavbar" id="mobileNav">
					<ul className="nav navbar-nav navbar-right">

						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li className="dropdown">
							<a
								href="http://localhost:3000"
								className="dropdown-toggle"
								data-toggle="dropdown"
								role="button"
							>
								Qualifications
							</a>
							<ul className="dropdown-menu">
								<li>
									<a href="#OUQual">
										<i className="fas fa-university" aria-hidden="true" /> Open University
									</a>
								</li>
								<li>
									<a href="#MicrosoftQual">
										<i className="fab fa-windows" aria-hidden="true" /> Microsoft
									</a>
								</li>
								<li>
									<a href="#CiscoQual">
										<i className="fas fa-sitemap" aria-hidden="true" /> Cisco
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#contactForm" onClick={onContactHandler}>Contact</a>
						</li>
					</ul>
				</div>
				<div className="grad-bar" />
			</nav>
		</div>
	);
};

export default Nav;
