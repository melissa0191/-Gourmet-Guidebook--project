import React from 'react';
import backgroundImage from '../images/background.avif'; // Update the import path to navigate to the images folder

const Background = () => {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundSize: 'contain', // Set the background size to contain
      backgroundRepeat: 'no-repeat', // Ensure the background image doesn't repeat
      backgroundImage: `url(${backgroundImage})`, // Use template literals to pass the image path
    }} />
  );
}

export default Background;


