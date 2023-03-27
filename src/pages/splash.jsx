import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import './SplashScreen.css';

const SplashScreen = () => {
	useEffect(() => {
		// simulate some async operation that takes a few seconds
		setTimeout(() => {
			// navigate to the home screen after the async operation is done
			// replace this with the appropriate code for navigating to your home screen
			window.location.href = '/home';
		}, 3000);
	}, []);

	return (
		<div className="splash-screen">
			<img src={logo} className="logo" alt="Logo" />
			<h1 className="title">Barcode Scanning Prototype</h1>
			<p style={{ textAlign: 'center' }}>
				These app is a prototy of how the main app will look, it will show you how the scannning works for our
				ERP System
			</p>
			<Link to="/scanner">
				<button style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '25px' }}>
					Continue to scan
				</button>
			</Link>
		</div>
	);
};

export default SplashScreen;
