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
                    <a href="https://www.paypal.com/donate/?hosted_button_id=DM8QBDKHVGUVG" target="_blank"><NavBtnLink>Donate</NavBtnLink></a>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;