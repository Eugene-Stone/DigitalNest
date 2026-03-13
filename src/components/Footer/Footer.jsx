import { Link } from 'react-router';

export default function Footer() {
	return (
		<>
			<footer className="foot-general">
				<div className="container">
					<div className="foot-bottom">
						<div className="row">
							<div className="col-6">
								<div className="copyright">
									Copyright © DigitalNest 2022, <br />
									All rights reserved.
								</div>
							</div>
							<div className="col-6 right">
								<Link to="/privacy">Privacy</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="modal-set">
				{/* Button trigger modal */}
				{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button> */}
				{/* Modal */}
				<div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
					{/* Vertically centered scrollable modal */}
					{/* class="modal-dialog modal-dialog-centered modal-dialog-scrollable" */}
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								{/* <h5 class="modal-title">Modal title</h5> */}
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								<div className="modal-title">
									<h3>Modal_Title</h3>
									<div className="title-descr">Modal_Title_Descr</div>
								</div>
								<div className="modal-txt">
									<div className="cust-inp">
										<input type="text" placeholder="placeholder" />
									</div>
									<br />
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Inventore vel fuga neque qui, architecto rem tempora
										laborum, corporis dolor modi veniam aliquam, esse ea
										praesentium voluptas fugit veritatis, nobis quae.
									</p>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* Modal END */}
			</div>
			{/* modal-set END */}
		</>
	);
}
