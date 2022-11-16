/** @format */

import React from 'react';

const DogsList = ({ dogs }) => {
	return (
		<div className="DogsList">
			<h1 className="display-1 text-center my-3">DogList</h1>
			<div className="container">
				<div className="row my-5">
					{dogs.map((dog, idx) => (
						<div key={dog.name + idx} className="col-md-6 col-lg-4 text-center">
							<div className="card">
								<img src={dog.src} className="card-img-top" alt={dog.name} />
								<div className="card-body">
									<h5 className="card-title">{dog.name}</h5>
									<a href="#" className="btn btn-primary">
										Show Details
									</a>
								</div>
							</div>
							<h1 className="display-1 text-center"></h1>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DogsList;
