import React from 'react';

const Home = () => {
    return (
        <div style={{ marginTop: '-600px', padding: '50px', paddingLeft: '545px', fontFamily: 'Roboto, sans-serif' }}>
            {/* Adjust paddingLeft to move the content more to the right */}
            <h2 style={{ fontSize: '36px' }}>Welcome to Gourmet Guidebook</h2>
            <p style={{ fontSize: '24px' }}>Easily organize, discover, and share your favorite recipes</p>
            <h3>Key Features</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ fontSize: '20px', textAlign: 'left' }}>Create and manage your own recipes</li>
                <li style={{ fontSize: '20px', textAlign: 'left' }}>Organize recipes into categories for easy access</li>
                <li style={{ fontSize: '20px', textAlign: 'left' }}>Discover new recipes from a vast collection</li>
                <li style={{ fontSize: '20px', textAlign: 'left' }}>Share your favorite recipes with friends and family</li>
            </ul>
            <button style={{ fontSize: '20px', marginTop: '20px' }}>Get Started</button>
            <p style={{ fontSize: '18px', marginTop: '10px' }}>Already have an account? <a href="/login" style={{ color: 'blue' }}>Log in</a></p>
        </div>
    );
};

export default Home;

