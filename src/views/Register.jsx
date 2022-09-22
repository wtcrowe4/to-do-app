import React from 'react';

const Register = () => {
    return (
        <div className="App-body">
            <h2>Register New User</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Register</button>
            </form>


        </div>
    );
};

export default Register;