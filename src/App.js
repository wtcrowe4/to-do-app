import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Welcome from './views/Welcome';
import UserHome from './views/UserHome';
import Register from './views/Register';
import Login from './views/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do App</h1>
        <Navbar className="navbar">
          <Nav>
            <Nav.Link className="navbarlink" href="/">Home</Nav.Link>
            <Nav.Link className="navbarlink" href="/register">Register</Nav.Link>
            <Nav.Link className="navbarlink" href="/login">Login</Nav.Link>
            <Nav.Link className="navbarlink" href="/userhome">My Todos</Nav.Link>
          </Nav>
        </Navbar>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id" element={<UserHome />} />
        </Routes>
        

      </Router>
      

    </div>
  );
}

export default App;
