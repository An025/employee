import React from 'react'
import {Link} from 'react-router-dom';
import "./NavBar.css"
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul >
                <li>
                    <Link to="/department">Szervezeti egységek</Link>
                </li>
                <li>
                    <Link to="/employee">Dolgozók</Link>
                </li>
                <li>
                    <Link to="/datalist">Adatlista</Link>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar
