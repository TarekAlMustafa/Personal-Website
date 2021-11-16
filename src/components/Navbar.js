import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { StyledNavbar } from './styledComponents/Navbar.styled'


function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }   else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }   else{
            setDropdown(false);
        }
    }

    return (
        <>
        <StyledNavbar>
            <nav className='navbar'>
                <Link to='/' 
                className='navbar-logo'>
                    HOME
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa.bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='/services' className='nav-links' onclick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onclick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onclick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
            </StyledNavbar>
        </>
    )
}

export default Navbar;