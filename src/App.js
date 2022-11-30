/** @format */

import { Routes, Route } from 'react-router-dom';
import assets from './assets';
import Navbar from './components/Navbar';
import DogsList from './components/DogsList';
import DogDetails from './components/DogDetails';

import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar dogs={assets.dogs} />
			<div className="container">
				<Routes>
					<Route path="/dogs" element={<DogsList dogs={assets.dogs} />} />
					<Route
						path="/dogs/:dogName"
						element={<DogDetails dogs={assets.dogs} />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
