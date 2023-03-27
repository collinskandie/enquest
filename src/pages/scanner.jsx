import { QrReader } from 'react-qr-reader';
import React, { useEffect, useRef, useState } from 'react';

function BarcodeScanner() {
  const [cameraPermission, setCameraPermission] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    async function requestCameraPermission() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraPermission(true);
        console.log('Camera permission granted');
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Camera permission denied', error);
      }
    }
    requestCameraPermission();
  }, []);

  const handleVideoPlay = () => {
    console.log('Video is playing');
  };

  const handleScan = (data) => {
    if (data) {
      alert(`Barcode scanned: ${data}`);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <>
      {cameraPermission && (
        <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '1000px' }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onLoadedMetadata={() => {
              console.log('Video metadata loaded');
              videoRef.current.play();
            }}
            onPlay={handleVideoPlay}
            style={{ width: '100%' }}
          />
        </QrReader>
      )}
    </>
  );
}

export default BarcodeScanner;
