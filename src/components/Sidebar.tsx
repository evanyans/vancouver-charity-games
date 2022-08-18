import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';
import { AiFillCloseCircle, AiFillHeart } from 'react-icons/ai'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import unicef from '../eventimages/uniceflogo.png'

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean, toggle: React.MouseEventHandler<HTMLElement> }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const customStyles = {
        content: {
            zIndex: 1000,
            top:0,
            left:0,
            right:0,
            bottom:0,
            borderRadius: '13px',
        },
        overlay: {
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }
    };

    return (
        <>
            <Modal style={customStyles} isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
                <Box>
                    <div className="right"><X fontSize={30} onClick={() => setModalOpen(false)} /></div>
                    <Items>
                        <AiFillHeart color={'#C549FF'} fontSize={50} />
                        <Donation>Make a donation!</Donation>
                        <Info>Donations made through our PayPal are sent towards the current organization we are supporting in our event.
                            If you are not participating, feel free to donate directly to the organization:</Info>
                        <img className="unicef" src={unicef} />
                        <a href="http://palmer.wellesley.edu/~aschultz/w06/math19/homeworks_etc/Homework3_solns.pdf" target="_blank"><DonateB>Donate through us</DonateB></a>
                        <a href="http://palmer.wellesley.edu/~aschultz/w06/math19/homeworks_etc/Homework3_solns.pdf" target="_blank"><DonateLink>UNICEF Website</DonateLink></a>
                    </Items>
                </Box>
            </Modal>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='/' onClick={toggle}>
                            Home
                        </SidebarLink>
                        <SidebarLink to='/about' onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to='/events' onClick={toggle}>
                            Events
                        </SidebarLink>
                        <SidebarLink to='/sponsor' onClick={toggle}>
                            Sponsor
                        </SidebarLink>
                        <SidebarLink to='/contact' onClick={toggle}>
                            Contact
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute onClick={() => setModalOpen(true)}>
                            Donate
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar


export const Box = styled.div`
    background-color:white;
    max-width:547px;
    height:599px;
    
    overflow:hidden;
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
        width:100px;
        height:auto;
    }
`

export const Donation = styled.div`
    padding-top:20px;
    font-size:26px;
    font-weight:600;
`

export const Info = styled.div`
    padding-top:10px;
    padding-left:6%;
    padding-right:6%;
    font-size:16px;
    font-weight:300;
`

export const DonateB = styled.button`
    background:#AD00FF;
    border-radius:8px;
    width:250px;
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
    width:250px;
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