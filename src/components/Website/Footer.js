import Card from '../UI/Card';
import './Footer.css';

const Footer = props => {

    return (

        <Card>
            <div className="contactus">
                <p>For further information, click one of the contact methods below:<span className="sexyline"></span>
                </p>
                <ul>
                    <li><a href="#contactForm"><i className="fas fa-at fa-3x footerIcons"></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/andrewstinsley/" target="_blank" rel="noreferrer"><i
                        className="fab fa-linkedin fa-3x footerIcons"></i></a></li>
                    <li><a href="https://twitter.com/AstinCodeGeek" target="_blank" rel="noreferrer"><i
                        className="fab fa-twitter fa-3x footerIcons"></i></a></li>
                </ul>
            </div>
        </Card >
    );

}
export default Footer;