import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {

  return (
    <nav>
        <div className="navbar-brand">
            <span>My Website</span>
        </div>
      <ul className='navbar'>
        <li className='navbarList'><Link to="/">Home</Link></li>
        <li className='navbarList'><Link to="/projects">Projects</Link></li>
        <li className='navbarList'><Link to="/courses">Courses</Link></li>
        <li className='navbarList'><Link to="/logout">Log Out</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;