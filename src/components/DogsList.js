/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import './DogsList.css';

const DogsList = ({ dogs }) => {
	return (
		<div className="DogsList">
			<h1 className="display-1 text-center my-3">DogList</h1>

			<div className="row my-5">
				{dogs.map((dog, idx) => (
					<div
						key={dog.name + idx}
						className="DogsList__dog col-md-6 col-lg-4 my-3 text-center">
						<Link to={`/dogs/${dog.name}`}>
							<img src={dog.src} className="card-img-top mb-4" alt={dog.name} />
							<div className="card-body">
								<button className="btn btn-primary">
									Show Details About {dog.name}
								</button>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default DogsList;
