/** @format */

import { Routes, Route } from 'react-router-dom';
import assets from './assets';
import Navbar from './components/Navbar';
import DogsList from './components/DogsList';

import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar dogs={assets.dogs} />
			<Routes>
				<Route path="/dogs" element={<DogsList dogs={assets.dogs} />} />
			</Routes>
		</div>
	);
}

export default App;
