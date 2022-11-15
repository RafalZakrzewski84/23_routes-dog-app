/** @format */

import './App.css';

import assets from './assets';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<h1 className="display-1">{assets.dogs[0].name}</h1>
		</div>
	);
}

export default App;
