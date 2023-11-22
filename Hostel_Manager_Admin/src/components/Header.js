import React from 'react';
import './Header.css';

const Header = () => {
    const handleLogin = () => {
        window.open('/admin-login', '_blank');
    };

    const shouldLoadCss = !window.location.href.includes('admin-login');

    return (
        <header className="header">
            {shouldLoadCss && <link rel="stylesheet" href="Header.css" />}
            <div className="header-container">
                <h2 className="title">Hostel Management System</h2>
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        </header>
    );
};

export default Header;
