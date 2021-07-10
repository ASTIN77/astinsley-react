import './Blurb.css';
import coding from '../../images/coding.jpg';


const Blurb = (props) => {
    return (

        <div className="container">
            <div className="jumbotron">
                <div className="row">
                    <div className="mobile col-sm-6">
                        <div id="blog" className="animateText">
                            <p>ASTINSLEY.NET is my portfolio of various accumulated I.T.
                                skills
                                and knowledge
                                including
                                my
                                front-end web development techniques gained through
                                self-study and my time
                                with
                                The
                                Open
                                University.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    <div className="center-image">

                        <img id="homeImage" src={coding} alt="Coding Binary" className="img-responsive"
                            height="320" width="320" />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Blurb;