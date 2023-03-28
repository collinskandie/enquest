import React from 'react';

const Camera = ({ onTakePicture }) => {
	const takePicture = () => {
		const canvas = document.createElement('canvas');
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		const context = canvas.getContext('2d');
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
		const data = canvas.toDataURL('image/png');
		onTakePicture(data);
	};

	return (
		<div>
			<video ref={(ref) => (video = ref)} style={{ width: '100%' }} autoPlay />
			<button onClick={takePicture}>Take Picture</button>
		</div>
	);
};

export default Camera;
