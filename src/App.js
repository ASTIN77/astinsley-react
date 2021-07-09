import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/UI/Nav';
import Card from './components/UI/Card';
import Blurb from './components/Website/Blurb';
import MenuBar from './components/UI/MenuBar';
import Portfolio from './components/Portfolio/Portfolio';
import BlogText from './components/Website/BlogText';
import Qualifications from './components/Qualifications/Qualifications';
import WebsiteLinks from './components/Website/WebsiteLinks';
import Footer from './components/Website/Footer';
import QualificationsOverlay from './components/Qualifications/QualificationsOverlay';
import About from './components/Website/about';

import './App.css';

function App() {
	return (
		<Router>
			<Route path='/' exact render={(props) => (
				<Fragment>
					<div className="App">
						<Nav />
						<Blurb />
						<Card>
							<MenuBar name="About" location="" description="More Information" />
							<MenuBar name="Portfolio" location="#portfolio" description="My Sites" />
							<MenuBar name="Qualifications" location="#certs" description="My Certifications" />
							<MenuBar name="Contact" location="" description="Get In Touch" />
						</Card>
						<BlogText />
						<Portfolio />
						<Qualifications />
						<WebsiteLinks />
						<Footer />
					</div>

				</Fragment>

			)}
			/>
			<Route path='/certs' component={QualificationsOverlay} />
			<Route path='/about' component={About} />
		</Router>
	);
}

export default App;
