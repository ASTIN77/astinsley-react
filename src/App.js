import Nav from './components/UI/Nav';
import Card from './components/UI/Card';
import Blurb from './components/Website/Blurb';
import MenuBar from './components/UI/MenuBar';
import Portfolio from './components/Portfolio/Portfolio';
import BlogText from './components/Website/BlogText';
import Qualifications from './components/Qualifications/Qualifications';
import WebsiteLinks from './components/Website/WebsiteLinks';
import Footer from './components/Website/Footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Nav />
			<Blurb />
			<Card>
				<MenuBar name="About" location="" description="More Information" />
				<MenuBar name="Portfolio" location="" description="My Sites" />
				<MenuBar name="Qualifications" location="" description="My Certifications" />
				<MenuBar name="Contact" location="" description="Get In Touch" />
			</Card>
			<BlogText />
			<Portfolio />
			<Qualifications />
			<WebsiteLinks />
			<Footer />
		</div>
	);
}

export default App;
