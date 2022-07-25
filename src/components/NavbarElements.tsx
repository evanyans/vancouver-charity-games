import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background:#321140;
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index:10;
`

export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    transition: all 0.2s ease-in-out;

    &.active{
        color:#C549FF;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        color:#C549FF;
    }
`
 
export const Bars = styled(FaBars)`
display:none;
color:#fff;

@media screen and (max-width: 1024px) {
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,75%);
    font-size:1.8rem;
    cursor:pointer;
}
`

export const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -24px;
font-weight:500;
font-size:18px;
gap:2rem;

@media screen and (max-width: 1024px) {
    display:none;
}
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;

@media screen and (max-width:1024px) {
    display:none;
}
`

export const NavBtnLink = styled(Link) `
    border-radius:40px;
    background:none;
    border:solid 2px;
    padding: 8px 30px;
    color: #fff;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    font-weight:500;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:#fff;
        color:#0D0C0C;
        border:solid 2px white;
    }
`

