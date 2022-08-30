import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
    return (
        <div className='combinenav'>
            <div className='logo'>testometrika</div>
            <nav className='item'>
                <ul className='ul'>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/result'>Result</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar