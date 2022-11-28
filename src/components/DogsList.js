/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

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
									<Link to={`/dogs/${dog.name}`} className="btn btn-primary">
										Show Details About {dog.name}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DogsList;
