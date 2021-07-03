import { Component } from "react";
import './Blurb.css';
import coding from '../../images/coding.jpg';


class Blurb extends Component {
    render() {
        return (

            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="mobile col-sm-6">
                            <div id="blog" className="animateText">
                                <p><b>ASTINSLEY.NET</b> is my portfolio of various accumulated I.T. skills and knowledge including my front-end web development techniques gained through self-study and my time with The Open University.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img id="homeImage" src={coding} alt="Coding Binary" className="img responsive" height="320" width="320" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Blurb;