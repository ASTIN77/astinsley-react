import MS410 from '../../images/exam-410-small.png';
import MS411 from '../../images/exam-411-small.png';
import OU from '../../images/OU.svg';
import './Qualifications.module.css';

const Qualifications = () => {
	return (
		<section id="certs">
			<div className="container">
				<div className="jumbotron">
					<div className="row">
						<div className=" sectionHeading col-md-12">
							<h2 className="shadowed">Qualifications</h2>
							<table>
								<tbody>
									<tr>
										<td>
											<a href="#MicrosoftQual">
												<img src={MS410} alt={MS410} className="img-responsive center" />
											</a>
											<h4>MCSA 70-410</h4>
										</td>
										<td>
											<a href="#MicrosoftQual">
												<img src={MS411} alt={MS411} className="img-responsive center" />
											</a>
											<h4>MCSA 70-411</h4>
										</td>
									</tr>
									<tr>
										<td>
											<a href="#OUQual">
												<img src={OU} alt={OU} className="img-responsive center" />
											</a>
											<h4>Dip(HE) Computing &amp; IT</h4>
										</td>
										<td>
											<a href="#OUQual">
												<img
													src={OU}
													alt="Open University logo"
													className="img-responsive center"
												/>
											</a>
											<h4>BSc(Hons) Computing &amp; IT</h4>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualifications;
