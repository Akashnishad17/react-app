import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const toggleMode = (cls) => {
		removeClasses();
		document.body.classList.add('bg-' + cls);
		console.log(cls);
		document.body.style.color = cls === 'dark' ? 'white' : 'black';
		setMode(cls);
		showAlert("Theme changed", 'success');
	};

	const removeClasses = () => {
		document.body.classList.remove('bg-light');
		document.body.classList.remove('bg-dark');
		document.body.classList.remove('bg-primary');
		document.body.classList.remove('bg-success');
		document.body.classList.remove('bg-danger');
		document.body.classList.remove('bg-warning');
	};

	const showAlert = (message, type) => {
		setAlert(
			{
				message: message,
				type: type
			}
		);
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	return (
    	<>
			<Router>
				<Navbar title="Text Utils" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />

				<div className="container my-3">
					<Routes>
						<Route exact path="/about" element={<About mode={mode} />} />
						<Route exact path="/" element={<TextForm heading="Enter Text to Analyze Below" showAlert={showAlert} />} />
					</Routes>
				</div>
			</Router>
    	</>
  	);
}

export default App;
