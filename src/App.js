import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BarcodeScanner from './pages/scanner';
import SplashScreen from './pages/splash';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<SplashScreen />} />
					<Route path="/scanner" element={<BarcodeScanner />} />
					<Route path="/home" element={<BarcodeScanner />} />
					<Route path="/contact" element={<SplashScreen />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
