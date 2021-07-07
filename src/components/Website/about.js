import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './about.css';
import Portrait from '../../images/portrait.jpg'

const About = (props) => {
    return (
        <Fragment >
            <div id="aboutMe" className="boxDialogModal">
                <div id="mobileDialog" className="myInfo">
                    <NavLink activeClassName='close' to='/' >X</NavLink>
                    <h3>Andrew Tinsley</h3>
                    <img src={Portrait} alt="My Portrait" className="img-responsive center homeImage" />
                    <h4> Dynamic, creative and motivated individual with a passion for technology, having an eclectic mix of
                        expertise including server technologies, virtualisation, through to full-stack web development
                        skills.
                    </h4>
                    <h4> Based in Uddingston, Scotland. A keen runner (when the Scottish weather permits!) and swimmer, with
                        an
                        (educational) addiction to YouTube!</h4>
                    <h4> If you would like more information, feel free to contact me using the contact form.</h4>
                </div>
            </div>
        </Fragment >
    )

}

export default About;