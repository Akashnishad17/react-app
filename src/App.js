import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
	return (
    	<>
      		<Navbar title="Text Utils" aboutText="About Text Utils" />
			<div className="container my-3">
				<TextForm heading="Enter Text to Analyze Below" />
			</div>
    	</>
  	);
}

export default App;
