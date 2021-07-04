import { React, Fragment } from 'react';
import htmlLogo from '../../images/devicons/svg/030-html-5.svg';
import cssLogo from '../../images/devicons/svg/031-css.svg';
import jsLogo from '../../images/devicons/svg/029-javascript.svg';
import nodeLogo from '../../images/devicons/svg/032-nodejs.svg';
import './DevIndicator.css';

const DevIndicator = (props) => {
  return (
    <Fragment>
      <div className="dev-icons">
        <img
          src={jsLogo}
          alt="JavaScript icon"
          height="48"
          width="48"
        />
        <img
          src={htmlLogo}
          alt="HTML icon"
          height="48"
          width="48"
        />
        <img
          src={cssLogo}
          alt="CSS icon"
          height="48"
          width="48"
        />
        <img
          src={nodeLogo}
          alt="NodeJS icon"
          height="48"
          width="48"
        />
      </div>
    </Fragment>
  );
};

export default DevIndicator;
