import React from 'react';


const Login = () => {
    return (
        <div className="App-body">
            <h2>Login Page</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;