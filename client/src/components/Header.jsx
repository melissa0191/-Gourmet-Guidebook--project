import React from 'react';
import { Link } from 'react-router-dom';
import logoGif from '../assets/logo.gif';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logoGif} alt="Logo" className="logo" />
                <h1 className="title">Gourmet GuideBook</h1>
            </div>
            <div className="links-container">
                <nav className="navigation-bar">
                    <ul>
                        <li><Link to="/home" className="nav-link">Home</Link></li>
                        <li><Link to="/recipes" className="nav-link">Recipes</Link></li>
                        <li><Link to="/categories" className="nav-link">Categories</Link></li>
                        <li><Link to="/categories/new" className="nav-link">Add Category</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;


