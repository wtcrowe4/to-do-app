import React from 'react';
//import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="App-body">
            <h1>Welcome to Our To Do List App</h1>
            <a className="homelink" href="/login">Login</a>
            <a className="homelink" href="/register">Register</a>
        </div>
    );
};

export default Welcome;