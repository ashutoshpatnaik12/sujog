import React from "react";
import { Helmet } from "react-helmet";

function MR() {
	return <div className="container">
		<div id="layoutSidenav_content">
		<Helmet>
			<title>Marriage Registration</title>
		</Helmet>
			<main>
				<header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
					<div className="container-fluid">
						<div className="page-header-content">
							<div className="row align-items-center justify-content-between">
								<div className="col-auto">
									<h1 className="page-header-title">
										<div className="page-header-icon"><i data-feather="activity"></i></div>
										Services / Marriage Registration
									</h1>

								</div>

							</div>
						</div>
					</div>
				</header>

				<div className="container-fluid mt-n10">
					<div className="col">
						<div className="row">


							<div className="col-xl-12 col-md-6 mb-4 card card2">
								<div className="card-header">Marriage Registration</div>
								<div className="row card-body">
									<div className="col-md-12">
										<div className="d-flex">

											<ul id="tabs" className="nav nav-tabs" role="tablist">
												<li className="nav-item">
													<a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">About</a>
												</li>
												<li className="nav-item">
													<a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">Facilities</a>
												</li>
												<li className="nav-item">
													<a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">List of Documents</a>
												</li>

												<li className="nav-item">
													<a id="tab-d" href="#pane-d" className="nav-link" data-toggle="tab" role="tab"> User Manual </a>
												</li>




											</ul>

											<div id="content" className="tab-content" role="tablist">
												<div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

													<div className="card-header" role="tab" id="heading-A">
														<h5 className="mb-0">
															<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
																About
															</a>
														</h5>
													</div>

													<div id="collapse-A" className="collapse show" role="tabpanel" aria-labelledby="heading-A">

														<div className="flex-grow-1 free-1">
															<p>The Marriage registration Module allows the citizens of Odisha state to apply for a marriage registration
																certificate from any municipality through a website or a mobile application remotely. </p>
														</div>
													</div>
												</div>


												<div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
													<div className="card-header" role="tab" id="heading-B">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
																Facilities
															</a>
														</h5>
													</div>
													<div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
														<div className="flex-grow-1 free-1">
															<p>
																1. Apply for Marriage registration Certificate <br></br>
																2. Receive prompt notifications and updates <br></br>
																3. Modify your Marriage Certificate if required
															</p>
														</div>
													</div>

												</div>



												<div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

													<div className="card-header" role="tab" id="heading-C">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
																List of Documents
															</a>
														</h5>
													</div>

													<div id="collapse-C" className="collapse" role="tabpanel" aria-labelledby="heading-C">

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">List of Documents Required for Marriage Registration Certificate
																<div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Marriage Registration.pdf" className="tooltip"
																	target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Marriage Registration.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>

													</div>
												</div>


												<div id="pane-d" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

													<div className="card-header" role="tab" id="heading-d">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
																User Manual
															</a>
														</h5>
													</div>

													<div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Marriage Registration User Manual for Citizen

																<div className="h5 pull-right"><a style={{"pointerEvents": "none", "cursor": "default"}} href="" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a style={{"pointerEvents": "none", "cursor": "default"}} href="" className="tooltip" target="_blank"><span className="tooltiptext">View</span><img src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">SUJOG FAQ document
																<div className="h5 pull-right"><a style={{"pointerEvents": "none", "cursor": "default"}} href="" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" className="fkdl" /></a>
																</div>

																<div className="h5 pull-right"><a style={{"pointerEvents": "none", "cursor": "default"}} href="" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" className="fkdl" /></a>
																</div>
															</div>
														</div>
													</div>
												</div>




											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</main>
		</div>
	</div>
};
export default MR;