import React, { useState } from 'react';
import Scanner from './scanner';
import Camera from './camera';
import BarcodeDisplay from './display';
import Webcam from 'react-webcam';
import { QrReader } from 'react-qr-reader';

const Scan = () => {
	const [ barcode, setBarcode ] = useState('');

	const handleScan = (data) => {
		if (data) {
			setBarcode(data);
		}
	};

	const handleError = (err) => {
		console.error(err);
	};

	return (
		<div>
			<Scanner onDetected={handleScan} />
			<Camera onTakePicture={handleScan} />
			<BarcodeDisplay barcode={barcode} />
			<Webcam />
			<QrReader onError={handleError} onScan={handleScan} />
		</div>
	);
};

export default Scan;
