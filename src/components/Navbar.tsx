import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="Logo" width="72px" height="72px" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/events">
                        Events
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/sponsor">
                        Sponsor
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/donate">Donate</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;