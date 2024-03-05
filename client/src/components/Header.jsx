import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
    
                <h1 className="title">Gourmet GuideBook</h1>
            </div>
            <div className="links-container">
                <nav className="navigation-bar">
                    <ul>
                        <li><Link to="/home" className="nav-link">Home</Link></li>
                        <li><Link to="/recipes" className="nav-link">Recipes</Link></li>
                        <li><Link to="/categories" className="nav-link">Categories</Link></li>
                        <li><Link to="/categories/new" className="nav-link">Edit Category</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;



