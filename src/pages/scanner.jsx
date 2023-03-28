import React, { useRef, useEffect } from 'react';
import Quagga from 'quagga';

const Scanner = ({ onDetected }) => {
	const videoRef = useRef();
	const canvasRef = useRef();

	useEffect(() => {
		Quagga.init(
			{
				inputStream: {
					name: 'Live',
					type: 'LiveStream',
					target: videoRef.current
				},
				decoder: {
					readers: [ 'ean_reader' ]
				}
			},
			(err) => {
				if (err) {
					console.log(err);
					return;
				}
				Quagga.start();
				return () => {
					Quagga.stop();
				};
			}
		);

		Quagga.onDetected((data) => {
			onDetected(data.codeResult.code);
		});

		return () => {
			Quagga.offDetected(onDetected);
		};
	}, []);

	const drawLine = (boundingBox, canvas) => {
		if (canvas) {
			const ctx = canvas.getContext('2d');
			ctx.beginPath();
			ctx.moveTo(boundingBox[0].x, boundingBox[0].y);
			ctx.lineTo(boundingBox[1].x, boundingBox[1].y);
			ctx.lineTo(boundingBox[2].x, boundingBox[2].y);
			ctx.lineTo(boundingBox[3].x, boundingBox[3].y);
			ctx.lineTo(boundingBox[0].x, boundingBox[0].y);
			ctx.lineWidth = 4;
			ctx.strokeStyle = 'green';
			ctx.stroke();
		}
	};

	return (
		<div>
			<video ref={videoRef} style={{ width: '100%' }} />
			<canvas ref={canvasRef} style={{ position: 'absolute' }} />
		</div>
	);
};

export default Scanner;
