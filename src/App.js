import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Scan from './pages/scan';
import SplashScreen from './pages/splash';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<SplashScreen />} />
					<Route path="/scanner" element={<Scan />} />					
					<Route path="/contact" element={<SplashScreen />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
