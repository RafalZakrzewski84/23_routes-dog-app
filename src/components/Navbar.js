/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ dogs }) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid">
					<NavLink
						to="/dogs"
						className="navbar-brand nav-link active text-white"
						href="#">
						Meet Our Dogs
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon text-white"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{dogs.map((dog, idx) => {
								return (
									<li key={dog.name + idx} className="nav-item">
										<NavLink
											to={`/dogs/${dog.name}`}
											className="nav-link text-white">
											{dog.name}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
