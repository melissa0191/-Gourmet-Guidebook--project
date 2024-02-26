import React from 'react';
import logoGif from '../assets/logo.gif';
import '../index.css'

function Header() {
  return (
    <header className="App-header">
      {/* Display the image using the img element */}
      <img src={logoGif} alt="Logo" className="logo" />
      <h1 className="title">Recipe Manager</h1>
    </header>
  );
}

export default Header;

