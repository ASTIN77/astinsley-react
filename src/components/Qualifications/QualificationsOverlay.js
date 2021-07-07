import { Fragment } from 'react';

const QualificationsOverlay = (props) => {

    return (
        <Fragment>

            <section id="certs">
                <div class="container">
                    <div class="jumbotron">
                        <div class="row">
                            <div class=" sectionHeading col-md-12">
                                <h2 class="shadowed">Qualifications</h2>
                                <table>
                                    <tr>
                                        <td><a href="#MicrosoftQual"><img src="/images/exam-410-small.png"
                                            alt="Microsoft 70-410 badge" class="img-responsive center" /> </a>
                                            <h4>MCSA 70-410</h4>
                                        </td>
                                        <td><a href="#MicrosoftQual"><img src="/images/exam-411-small.png"
                                            alt="Microsoft 70-411 badge" class="img-responsive center" /></a>
                                            <h4>MCSA 70-411</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="#OUQual"><img src="/images/OU.svg" alt="Open University logo"
                                            class="img-responsive center" /></a>
                                            <h4>Dip(HE) Computing &amp; IT</h4>
                                        </td>
                                        <td><a href="#OUQual"><img src="/images/OU.svg" alt="Open University logo"
                                            class="img-responsive center" /></a>
                                            <h4>BSc(Hons) Computing &amp; IT</h4>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );

}

export default QualificationsOverlay;