import DevIndicator from '../DevIndicators/DevIndicator';
import autoreview from '../../images/autoreview.jpg';
import blogger from '../../images/blogger.jpg';
import Artta from '../../images/Artta.png';
import raiLocate from '../../images/raiLocate.jpg';
import CampReviewer from '../../images/campreviewer.jpg';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div id="portfolio" className="container">
			<div className="jumbotron">
				<div className="row sectionHeading">
					<h2 className="shadowed">Portfolio</h2>
					<div className="col-md-6">
						<a href="https://autoreview.herokuapp.com/" target="_blank" rel="noreferrer">
							<img className="center bordered" src={autoreview} alt={autoreview} />
						</a>
						<h3>AutoReview</h3>
						<h4>An automobile review website with reviews and user creation and search capability.</h4>
						<DevIndicator />
					</div>
					<div className="col-md-6">
						<a href="https://thedailyblogger.herokuapp.com" target="_blank" rel="noreferrer">
							<img className="center bordered" src={blogger} alt={blogger} />
						</a>
						<h3>The Daily Blogger</h3>
						<h4>
							A general-purpose blogging website with blog creation features incorporating the Semantic-UI
							framework.
						</h4>
						<DevIndicator />
					</div>
				</div>
				<div className="row sectionHeading">

					<div className="col-md-4"></div>
					<div className="col-md-4">
						<a href="https://etara.herokuapp.com/" target="_blank" rel="noreferrer">
							<img className="center bordered" src={Artta} alt={Artta} />
						</a>
						<h3>ETARA</h3>
						<h4>
							<b>E</b>lectronic <b>T</b>icketing <b>A</b>nd <b>R</b>eporting <b>A</b>pplication is
							a ticketing application for Utility Works.						</h4>
						<DevIndicator />
					</div>
					<div className="col-md-4"></div>
					<div className="row sectionHeading">
						<div className="col-md-6">
							<a href="https://campreviewer.herokuapp.com/" target="_blank" rel="noreferrer">
								<img className="center bordered" src={CampReviewer} alt={CampReviewer} />
							</a>
							<h3>Camp Reviewer</h3>
							<h4>A site to review various campsites and comment on their experiences.</h4>
							<DevIndicator />
						</div>
						<div className="col-md-6">
							<a href="http://raiLocate.astechit.net/" target="_blank" rel="noreferrer">
								<img className="center bordered" src={raiLocate} alt={raiLocate} />
							</a>
							<h3>RaiLocate</h3>
							<h4>Fast, efficient real-time UK train journey information using API functionality.</h4>
							<DevIndicator />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
