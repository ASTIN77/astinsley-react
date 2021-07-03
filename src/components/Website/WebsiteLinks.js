import { React, Fragment } from 'react';
import Linux from '../../images/websitelinks/Linux_Logo.svg';
import Github from '../../images/websitelinks/GithubLogo.svg';
import Windows from '../../images/websitelinks/Win_Logo.svg';
import './WebsiteLinks.css';

const ContactLinks = props => {
    return (
        <Fragment>
            <div className="container">

                <div className="row">
                    <div className="theBlogs">
                        <div className="col-md-12">
                            <p>The Developer Blog</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="boxFrame hidden-xs">
                            <a href="http://www.astinsley.net/devblog" target="_blank" rel="noreferrer">
                                <h2>DevBlog</h2>
                            </a>
                            <h4> All Things Web Development</h4>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <a href="http://www.astinsley.net/devblog" target="blank"><img src={Linux}
                            alt="Linux Logo" className="img-responsive center" height="128" width="128" /></a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://github.com/ASTIN77" target="_blank" rel="noreferrer"><img src={Github}
                            alt="Andrew's GitHub Profile" className="img-responsive center" height="128" width="128" /></a>
                    </div>
                    <div className="col-md-4">
                        <a href="http://www.astinsley.net/devblog" target="_blank" rel="noreferrer"><img src={Windows}
                            alt="Microsoft Windows Logo" className="img-responsive center" height="128" width="128" /></a>
                    </div>
                </div>
            </div>

        </Fragment >
    );
}

export default ContactLinks;
