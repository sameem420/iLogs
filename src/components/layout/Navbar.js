import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../../App.css';

function Navbar() {
    return (
        <div>
            <nav className="blue-grey">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">iLogs</Link>
                    <ul className="left hide-on-med-and-down">
                        <li><NavLink to="/favorites">Favorites</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
