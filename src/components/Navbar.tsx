import React, { FC, useState } from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import logo from '../images/logo.png';
import Modal from 'react-modal';
import styled from 'styled-components';
import {AiFillCloseCircle, AiFillHeart} from 'react-icons/ai'
import unicef from '../eventimages/uniceflogo.png'
const Navbar = ({ toggle }: { toggle: React.MouseEventHandler<SVGElement> }) => {

    const [isOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            zIndex: 1000,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            borderRadius:'13px',
          },
        overlay: {
            zIndex: 999,
            backgroundColor:'rgba(0, 0, 0, 0.4)',
        }
      };
    return (
        <>
            <Modal  style={customStyles} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <Box>
                    <div className="right"><X fontSize={30} onClick={() => setIsOpen(false)}/></div>
                    <Items>
                        <AiFillHeart color={'#C549FF'} fontSize={50} />
                        <Donation>Make a donation!</Donation>
                        <Info>Donations made through our PayPal are sent towards the current organization we are supporting in our event. 
                            If you are not participating, feel free to donate directly to the organization:</Info>
                        <img className="unicef" src={unicef} />
                        <a href="https://www.unicef.org/" target="_blank"><DonateB>Donate through us</DonateB></a>
                        <a href="https://www.unicef.org/" target="_blank"><DonateLink>UNICEF Website</DonateLink></a>
                    </Items>
                </Box>
            </Modal>
            <Nav>

                <Bars onClick={toggle} />
                <NavMenu>
                    <NavLink to="/">
                        <img src={logo} alt="Logo" width="72px" height="72px" />
                    </NavLink>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/events">
                        Events
                    </NavLink>
                    <NavLink to="/sponsor">
                        Sponsor
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>

                </NavMenu>
                <NavBtn onClick={() => setIsOpen(true)}>
                    <NavBtnLink>Donate</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

export const Box = styled.div`
    background-color:white;
    max-width:547px;
    height:599px;
    

    .right{
        text-align:right;
    }
`

export const X = styled(AiFillCloseCircle)`
    &:hover{
        cursor:pointer;
    }
`

export const Items = styled.div`
padding-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    img{
        padding-top:15px;
        width:200px;
        height:auto;
    }
`

export const Donation = styled.div`
    padding-top:20px;
    font-size:36px;
    font-weight:600;
`

export const Info = styled.div`
    padding-top:10px;
    padding-left:6%;
    padding-right:6%;
    font-size:20px;
    font-weight:300;
`

export const DonateB = styled.button`
    background:#AD00FF;
    border-radius:8px;
    width:500px;
    height:60px;
    margin-bottom:15px;
    margin-top:30px;
    font-size:19px;
    border:none;
    color:white;
    transition: all 0.2s ease-in-out;
    align-self:center;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#f5e0ff;
        border:none;
        color:#4a4949;
        cursor:pointer;
    
    }
  @media only screen and (max-width: 600px) {
    font-size:15px;
  }

  @media only screen and (min-width: 600px) {
    font-size:19px;
 
  }
`

export const DonateLink = styled.button`
    background:none;
    border-radius:8px;
    width:500px;
    height:60px;
    border: 1px solid #AD00FF;
    font-size:19px;
    color:#AD00FF;
    transition: all 0.2s ease-in-out;
    align-self:center;
    
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background:#AD00FF;

        color:white;
        cursor:pointer;
    
    }
  @media only screen and (max-width: 600px) {
    font-size:15px;
  }

  @media only screen and (min-width: 600px) {
    font-size:19px;
 
  }

`