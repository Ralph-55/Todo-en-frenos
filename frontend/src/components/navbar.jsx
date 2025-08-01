import React from 'react';

function navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">  
                <a href="/">MyApp</a>
            </div>
            <div className="navbar-menu">
                <a href="/home">Home</a>
            </div>
            <div className="navbar-user">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a>
            </div>
        </nav>
    )
}  
export default navbar;