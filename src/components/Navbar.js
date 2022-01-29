import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                        <i className="fas fa-headphones-alt"></i>
                        Spotify Stats
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/top-tracks' className='nav-links' onClick={closeMobileMenu}>
                                Top Tracks
                            </Link>
                        </li>
                        <li>
                            <Link to='/top-artists' className='nav-links' onClick={closeMobileMenu}>
                                Top Artists
                            </Link>
                        </li>
                        <li>
                            <Link to='/recently-played' className='nav-links' onClick={closeMobileMenu}>
                                Recently Played
                            </Link>
                        </li>
                        <li>
                            <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
