import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);

	const toggleMode = () => {
		if(mode === 'light') {
			setMode('dark');
			document.body.style.backgroundColor = 'black';
			document.body.style.color = 'white';
			showAlert("Dark Mode Enabled", "success");
		} else {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
			showAlert("Light Mode Enabled", "success");
		}
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
		}, 1500);
	};

	return (
    	<>
      		<Navbar title="Text Utils" aboutText="About Text Utils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				<TextForm heading="Enter Text to Analyze Below" showAlert={showAlert} />
				{/* <About/> */}
			</div>
    	</>
  	);
}

export default App;
