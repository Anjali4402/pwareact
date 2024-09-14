import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let intervalId;

    if (location) {
      intervalId = setInterval(requestLocationPermission, 5000); 
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [location]);

  const requestLocationPermission = () => {
    console.log('run every after 5 second')
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setErrorMessage(null);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              setErrorMessage('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              setErrorMessage('The request to get user location timed out.');
              break;
            case error.UNKNOWN_ERROR:
              setErrorMessage('An unknown error occurred.');
              break;
            default:
              setErrorMessage('An error occurred.');
          }
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  };

  const handleRequestLocation = () => {
    requestLocationPermission();
    setInterval(requestLocationPermission, 5000); 
  };

  return (
    <div className="home-page">
      <Button variant="dark" onClick={handleRequestLocation}>
        Request Location Permission
      </Button>

      {location && (
        <div className="mt-4">
          <h2 className="text-xl">Your Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}

      {errorMessage && (
        <div className="text-primary">
          <p>Error: {errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
