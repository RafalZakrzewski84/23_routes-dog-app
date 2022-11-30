/** @format */

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ dogs }) => {
	const { dogName } = useParams();
	const dog = dogs.filter((dog) => dog.name === dogName)[0];
	const dogAgeInfo =
		dog.age > 1 ? `It is ${dog.age} years old` : `It is ${dog.age} year old`;

	return (
		<div className="DogDetails row my-5 justify-content-center">
			<div className="col-md-8 col-lg-6">
				<div className="card" style={{ width: '100%' }}>
					<img src={dog.src} className="card-img-top" alt={dog.name} />
					<div className="card-body">
						<h5 className="card-title">{dog.name}</h5>
						<p className="card-text">{dogAgeInfo}</p>
					</div>
					<ul className="list-group list-group-flush">
						{dog.facts.map((fact, idx) => (
							<li key={fact.length + idx} className="list-group-item">
								{fact}
							</li>
						))}
					</ul>
					<div className="card-body">
						<Link to="/dogs" className="card-link">
							Back to DogList
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DogDetails;
