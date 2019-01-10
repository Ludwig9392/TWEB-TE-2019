import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav> 
            <div className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo left">Movies Stars</Link>
                    <ul className="right">
                        <li><NavLink to='/'>Popular Movies</NavLink></li>
                        <li><NavLink to='/upcoming'>Upcoming Movies</NavLink></li>
                    </ul>
                </div> 
            </div>
        </nav>
    )

}

export default Navbar;